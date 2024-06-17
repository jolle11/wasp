module Wasp.Psl.Parser.Attribute
  ( attribute,
    blockAttribute,
    attrArgument,
  )
where

import Data.Maybe (fromMaybe)
import Text.Parsec
  ( char,
    choice,
    lookAhead,
    many1,
    noneOf,
    oneOf,
    optionMaybe,
    try,
    (<|>),
  )
import Text.Parsec.String (Parser)
import qualified Wasp.Psl.Ast.Attribute as Psl.Attribute
import Wasp.Psl.Parser.Common
  ( brackets,
    colon,
    commaSep1,
    float,
    identifier,
    integer,
    parens,
    stringLiteral,
    whiteSpace,
  )

attribute :: Parser Psl.Attribute.Attribute
attribute = do
  _ <- char '@'
  name <- identifier
  -- NOTE: we support potential "selector" in order to support native database type attributes.
  --   These have names with single . in them, like this: @db.VarChar(200), @db.TinyInt(1), ... .
  --   We are not trying to be very smart here though: we don't check that "db" part matches
  --   the name of the datasource block name (as it should), and we don't check that "VarChar" part is PascalCase
  --   (as it should be) or that it is one of the valid values.
  --   We just treat it as any other attribute, where "db.VarChar" becomes an attribute name.
  --   In case that we wanted to be smarter, we could expand the AST to have special representation for it.
  --   Also, we could do some additional checks here in parser (PascalCase), and some additional checks
  --   in th generator ("db" matching the datasource block name).
  maybeSelector <- optionMaybe $ try $ char '.' >> identifier

  maybeArgs <- optionMaybe (parens (commaSep1 (try attrArgument)))
  return $
    Psl.Attribute.Attribute
      { Psl.Attribute._attrName = name <> maybe "" ('.' :) maybeSelector,
        Psl.Attribute._attrArgs = fromMaybe [] maybeArgs
      }

-- Parses attribute argument that ends with delimiter: , or ).
-- Doesn't parse the delimiter.
attrArgument :: Parser Psl.Attribute.AttributeArg
attrArgument = do
  try namedArg <|> try unnamedArg
  where
    namedArg :: Parser Psl.Attribute.AttributeArg
    namedArg = do
      name <- identifier
      _ <- colon
      Psl.Attribute.AttrArgNamed name <$> argValue

    unnamedArg :: Parser Psl.Attribute.AttributeArg
    unnamedArg = Psl.Attribute.AttrArgUnnamed <$> argValue

    argValue :: Parser Psl.Attribute.AttrArgValue
    argValue =
      choice $
        map
          (try . delimitedArgValue)
          [ argValueString,
            argValueFunc,
            argValueFieldReferenceList,
            argValueNumberFloat,
            argValueNumberInt,
            argValueIdentifier,
            argValueUnknown
          ]

    argValueString :: Parser Psl.Attribute.AttrArgValue
    argValueString = Psl.Attribute.AttrArgString <$> stringLiteral

    argValueFunc :: Parser Psl.Attribute.AttrArgValue
    argValueFunc = do
      -- TODO: Could I implement this with applicative?
      name <- identifier
      parens whiteSpace
      return $ Psl.Attribute.AttrArgFunc name

    argValueFieldReferenceList :: Parser Psl.Attribute.AttrArgValue
    argValueFieldReferenceList =
      Psl.Attribute.AttrArgFieldRefList
        <$> brackets (commaSep1 identifier)

    -- NOTE: For now we are not supporting negative numbers.
    --   I couldn't figure out from Prisma docs if there could be the case
    --   where these numbers could be negative.
    --   Same goes for argValueNumberInt below.
    --   TODO: Probably we should take care of that case.
    argValueNumberFloat :: Parser Psl.Attribute.AttrArgValue
    argValueNumberFloat = Psl.Attribute.AttrArgNumber . show <$> float

    -- NOTE/TODO: Check comment on argValueNumberFloat.
    argValueNumberInt :: Parser Psl.Attribute.AttrArgValue
    argValueNumberInt = Psl.Attribute.AttrArgNumber . show <$> integer

    argValueIdentifier :: Parser Psl.Attribute.AttrArgValue
    argValueIdentifier = Psl.Attribute.AttrArgIdentifier <$> identifier

    argValueUnknown :: Parser Psl.Attribute.AttrArgValue
    argValueUnknown =
      Psl.Attribute.AttrArgUnknown <$> many1 (try $ noneOf argDelimiters)

    delimitedArgValue :: Parser Psl.Attribute.AttrArgValue -> Parser Psl.Attribute.AttrArgValue
    delimitedArgValue argValueP = do
      value <- argValueP
      _ <- lookAhead $ oneOf argDelimiters
      return value

    argDelimiters = [',', ')']

blockAttribute :: Parser Psl.Attribute.Attribute
blockAttribute = char '@' >> attribute
