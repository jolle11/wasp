module Wasp.Psl.Util where

import Data.Foldable (find)
import qualified Wasp.Psl.Ast.Attribute as Psl.Attribute
import qualified Wasp.Psl.Ast.ConfigBlock as Psl.ConfigBlock
import qualified Wasp.Psl.Ast.Model as Psl.Model

findIdField :: Psl.Model.ModelBody -> Maybe Psl.Model.ModelField
findIdField (Psl.Model.ModelBody elements) = find isIdField fields
  where
    fields = [field | (Psl.Model.ModelElementField field) <- elements]

    isIdField :: Psl.Model.ModelField -> Bool
    isIdField Psl.Model.ModelField {_attrs = attrs} = any (\attr -> Psl.Attribute._attrName attr == attrNameAssociatedWitIdField) attrs

    -- We define an ID field as a field that has the @id attribute.
    attrNameAssociatedWitIdField :: String
    attrNameAssociatedWitIdField = "id"

findIdBlockAttribute :: Psl.Model.ModelBody -> Maybe Psl.Attribute.Attribute
findIdBlockAttribute (Psl.Model.ModelBody elements) = find isIdBlockAttribute attributes
  where
    attributes = [attr | (Psl.Model.ModelElementBlockAttribute attr) <- elements]

    isIdBlockAttribute :: Psl.Attribute.Attribute -> Bool
    isIdBlockAttribute Psl.Attribute.Attribute {_attrName = attrName} = attrName == idBlockAttributeName

    -- We define the ID block attribute as an attribute with the name @@id.
    idBlockAttributeName :: String
    idBlockAttributeName = "id"

doesPslFieldHaveAttribute :: String -> Psl.Model.ModelField -> Bool
doesPslFieldHaveAttribute name Psl.Model.ModelField {_attrs = attrs} = any ((== name) . Psl.Attribute._attrName) attrs

findPrismaConfigBlockKeyValue :: String -> [Psl.ConfigBlock.ConfigBlockKeyValue] -> Maybe String
findPrismaConfigBlockKeyValue searchKey =
  fmap (\(Psl.ConfigBlock.ConfigBlockKeyValue _ value) -> value)
    . find (\(Psl.ConfigBlock.ConfigBlockKeyValue key _) -> key == searchKey)
