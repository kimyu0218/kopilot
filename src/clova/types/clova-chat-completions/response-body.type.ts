import { ClovaStopReason } from '../clova-common';
import { ChatMessage } from './chat-message.type';

// https://api.ncloud-docs.com/docs/clovastudio-chatcompletions
export type ClovaChatCompletionsResponseBody = {
  message: ChatMessage;

  stopReason?: ClovaStopReason;

  inputLength?: number;
  outputLength?: number;

  seed?: number;

  aiFilter?: any[];
};
