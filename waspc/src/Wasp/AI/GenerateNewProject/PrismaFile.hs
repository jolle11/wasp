{-# LANGUAGE DeriveGeneric #-}

module Wasp.AI.GenerateNewProject.PrismaFile
  ( fixPrismaFile,
  )
where

import Control.Monad.IO.Class (liftIO)
import Data.Functor ((<&>))
import Data.Maybe (fromMaybe)
import Data.Text (Text)
import qualified Data.Text as T
import NeatInterpolation (trimming)
import Wasp.AI.CodeAgent (getFile, writeToFile)
import Wasp.AI.GenerateNewProject.Common
  ( CodeAgent,
    FileContent (FileContent, fileContent),
    NewProjectDetails,
    codingChatGPTParams,
    fixingChatGPTParams,
    queryChatGPTForJSON,
  )
import Wasp.AI.GenerateNewProject.Common.Prompts (appDescriptionBlock)
import qualified Wasp.AI.GenerateNewProject.Common.Prompts as Prompts
import Wasp.AI.GenerateNewProject.Plan (Plan)
import Wasp.AI.OpenAI.ChatGPT (ChatMessage (..), ChatRole (..))
import Wasp.Psl.Format (PrismaFormatResult (..))
import qualified Wasp.Psl.Format as Prisma
import qualified Wasp.Util.Aeson as Utils.Aeson

fixPrismaFile :: NewProjectDetails -> FilePath -> Plan -> CodeAgent ()
fixPrismaFile newProjectDetails prismaFilePath plan = do
  currentPrismaFileContent <- getFile prismaFilePath <&> fromMaybe (error "couldn't find Prisma file to fix")

  result <- liftIO $ Prisma.prismaFormat currentPrismaFileContent

  fixedPrismaFile <- askChatGptToFixWaspFile result (FileContent {fileContent = currentPrismaFileContent})

  writeToFile prismaFilePath (const $ fileContent fixedPrismaFile)
  where
    askChatGptToFixWaspFile :: PrismaFormatResult -> FileContent -> CodeAgent FileContent
    askChatGptToFixWaspFile prismaFormatResult FileContent {fileContent = prismaFileContent} = do
      case prismaFormatResult of
        PrismaFormatResult {_schemaErrors = Nothing} -> return $ FileContent {fileContent = prismaFileContent}
        PrismaFormatResult {_schemaErrors = Just schemaErrors} ->
          queryChatGPTForJSON
            (fixingChatGPTParams $ codingChatGPTParams newProjectDetails)
            [ ChatMessage {role = System, content = Prompts.systemPrompt},
              ChatMessage {role = User, content = fixPrismaFilePrompts prismaFileContent schemaErrors}
            ]

    fixPrismaFilePrompts :: Text -> Text -> Text
    fixPrismaFilePrompts currentPrismaFileContent schemaErrors =
      let compileErrorsText =
            if T.null schemaErrors
              then ""
              else "Prisma schema errors we detected:\n" <> schemaErrors
       in [trimming|
            ${basicWaspLangInfoPrompt}

            We are together building a new Wasp app (description at the end of prompt).
            Here is a Prisma file that we generated together so far:

            ```wasp
            ${currentPrismaFileContent}
            ```

            Here is the plan which we used to generate it:
            ${planJSON}

            ${compileErrorsText}

            With this in mind, generate a new, fixed Prisma file.
            Do actual fixes, don't leave comments with "TODO"!
            Please respond ONLY with a valid JSON of the format { fileContent: string }.
            There should be no other text in your response. Don't wrap content with the "```" code delimiters.
            Don't ommit newlines from the code.

            ${appDescriptionBlockText}
          |]
    appDescriptionBlockText = appDescriptionBlock newProjectDetails
    basicWaspLangInfoPrompt = Prompts.basicWaspLangInfo
    planJSON = Utils.Aeson.encodeToText plan
