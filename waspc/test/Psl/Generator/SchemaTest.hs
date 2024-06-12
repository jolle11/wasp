{-# LANGUAGE ScopedTypeVariables #-}
{-# OPTIONS_GHC -fno-warn-orphans #-}

module Psl.Generator.SchemaTest where

import Test.Tasty.Hspec
import Test.Tasty.QuickCheck
import qualified Text.Parsec as Parsec
import qualified Wasp.Psl.Ast.Attribute as Psl.Attribute
import qualified Wasp.Psl.Ast.ConfigBlock as Psl.ConfigBlock
import qualified Wasp.Psl.Ast.Enum as Psl.Enum
import qualified Wasp.Psl.Ast.Model as Psl.Model
import qualified Wasp.Psl.Ast.Schema as Psl.Schema
import Wasp.Psl.Generator.Schema (generateSchemaBlock)
import qualified Wasp.Psl.Parser.Schema as Psl.Parser.Schema

prop_generatePslSchema :: Property
prop_generatePslSchema = mapSize (const 100) $ \schemaElementAst ->
  within 1000000 $
    Parsec.parse Psl.Parser.Schema.schema "" (generateSchemaBlock schemaElementAst) `shouldBe` Right (Psl.Schema.Schema [schemaElementAst])

instance Arbitrary Psl.Schema.Block where
  arbitrary =
    oneof
      [ Psl.Schema.ModelBlock <$> arbitrary,
        Psl.Schema.EnumBlock <$> arbitrary,
        Psl.Schema.DatasourceBlock <$> arbitrary,
        Psl.Schema.GeneratorBlock <$> arbitrary
      ]

instance Arbitrary Psl.Schema.Schema where
  arbitrary = Psl.Schema.Schema <$> scale (const 5) arbitrary

instance Arbitrary Psl.Model.Model where
  arbitrary = Psl.Model.Model <$> arbitraryIdentifier <*> arbitrary

instance Arbitrary Psl.Model.Body where
  arbitrary = do
    fieldElement <- Psl.Model.ElementField <$> arbitrary
    elementsBefore <- scale (const 5) arbitrary
    elementsAfter <- scale (const 5) arbitrary
    return $ Psl.Model.Body $ elementsBefore ++ [fieldElement] ++ elementsAfter

instance Arbitrary Psl.Model.Element where
  arbitrary =
    oneof
      [ Psl.Model.ElementField <$> arbitrary,
        Psl.Model.ElementBlockAttribute <$> arbitrary
      ]

instance Arbitrary Psl.Model.Field where
  arbitrary = do
    name <- arbitraryIdentifier
    fieldType <- arbitrary
    modifiers <- oneof [(: []) <$> arbitrary, return []]
    attrs <- scale (const 5) arbitrary
    return $
      Psl.Model.Field
        { Psl.Model._name = name,
          Psl.Model._type = fieldType,
          Psl.Model._typeModifiers = modifiers,
          Psl.Model._attrs = attrs
        }

instance Arbitrary Psl.Model.FieldType where
  arbitrary =
    oneof
      [ return Psl.Model.String,
        return Psl.Model.Boolean,
        return Psl.Model.Int,
        return Psl.Model.BigInt,
        return Psl.Model.Float,
        return Psl.Model.Decimal,
        return Psl.Model.DateTime,
        return Psl.Model.Json,
        return Psl.Model.Bytes,
        Psl.Model.Unsupported . show <$> arbitraryIdentifier,
        Psl.Model.UserType <$> arbitraryIdentifier
      ]

instance Arbitrary Psl.Model.FieldTypeModifier where
  arbitrary = oneof [return Psl.Model.List, return Psl.Model.Optional]

instance Arbitrary Psl.Attribute.Attribute where
  arbitrary = do
    name <-
      frequency
        [ (2, arbitraryIdentifier),
          (1, ("db." ++) <$> arbitraryIdentifier)
        ]
    args <- scale (const 5) arbitrary
    return $ Psl.Attribute.Attribute {Psl.Attribute._attrName = name, Psl.Attribute._attrArgs = args}

instance Arbitrary Psl.Attribute.AttributeArg where
  arbitrary =
    oneof
      [ Psl.Attribute.AttrArgNamed <$> arbitraryIdentifier <*> arbitrary,
        Psl.Attribute.AttrArgUnnamed <$> arbitrary
      ]

instance Arbitrary Psl.Attribute.AttrArgValue where
  arbitrary =
    oneof
      [ Psl.Attribute.AttrArgString <$> arbitraryNonEmptyPrintableString,
        Psl.Attribute.AttrArgIdentifier <$> arbitraryIdentifier,
        Psl.Attribute.AttrArgFunc <$> arbitraryIdentifier,
        Psl.Attribute.AttrArgFieldRefList <$> scale (const 5) (listOf1 arbitraryIdentifier),
        -- NOTE: For now we are not supporting negative numbers.
        --   I couldn't figure out from Prisma docs if there could be the case
        --   where these numbers could be negative. Probably we should take care of that case.
        Psl.Attribute.AttrArgNumber
          <$> oneof
            [ show <$> (arbitrary :: Gen Int) `suchThat` (>= 0),
              show <$> (arbitrary :: Gen Float) `suchThat` (>= 0)
            ]
            -- NOTE: Unknown is commented out because unknown should contain only values
            --   that are not recognized as any other type of attribute argument,
            --   and defining how those are generated is not so simple, so I skipped it for now.
            -- , Psl.Attribute.AttrArgUnknown <$> arbitraryNonEmptyPrintableString
      ]

instance Arbitrary Psl.Enum.Enum where
  arbitrary = do
    name <- arbitraryIdentifier
    values <- scale (const 5) (listOf1 arbitrary)
    return $ Psl.Enum.Enum name values

instance Arbitrary Psl.Enum.Element where
  arbitrary =
    oneof
      [ Psl.Enum.ElementValue <$> arbitraryIdentifier <*> scale (const 5) arbitrary,
        Psl.Enum.ElementBlockAttribute <$> arbitrary
      ]

instance Arbitrary Psl.ConfigBlock.Datasource where
  arbitrary = do
    name <- arbitraryIdentifier
    config <- scale (const 5) arbitrary
    return $ Psl.ConfigBlock.Datasource name config

instance Arbitrary Psl.ConfigBlock.Generator where
  arbitrary = do
    name <- arbitraryIdentifier
    config <- scale (const 5) arbitrary
    return $ Psl.ConfigBlock.Generator name config

instance Arbitrary Psl.ConfigBlock.ConfigBlockKeyValue where
  arbitrary = Psl.ConfigBlock.ConfigBlockKeyValue <$> arbitraryIdentifier <*> arbitraryIdentifier

arbitraryNonEmptyPrintableString :: Gen String
arbitraryNonEmptyPrintableString = listOf1 arbitraryPrintableChar

arbitraryAlpha :: Gen Char
arbitraryAlpha = elements $ ['a' .. 'z'] ++ ['A' .. 'Z']

arbitraryAlphaNum :: Gen Char
arbitraryAlphaNum = elements $ ['a' .. 'z'] ++ ['A' .. 'Z'] ++ ['0' .. '9']

arbitraryIdentifier :: Gen String
arbitraryIdentifier = (:) <$> arbitraryAlpha <*> listOf arbitraryAlphaNum
