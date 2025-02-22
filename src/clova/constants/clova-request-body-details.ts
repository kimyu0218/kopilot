import { ClovaChatCompletionsRequestBody } from '../types';

export const SYNONYM_DETAILS: ClovaChatCompletionsRequestBody = {
  messages: [],
  topP: 0.6,
  topK: 0,
  maxTokens: 50,
  temperature: 0.1,
  repeatPenalty: 2,
};

export const LONG_DESCRIPTION_DETAILS: ClovaChatCompletionsRequestBody = {
  messages: [],
  topP: 0.6,
  topK: 0,
  maxTokens: 500,
  temperature: 0.1,
  repeatPenalty: 2,
};

export const SHORT_DESCRIPTION_DETAILS: ClovaChatCompletionsRequestBody = {
  messages: [],
  topP: 0.6,
  topK: 0,
  maxTokens: 300,
  temperature: 0.1,
  repeatPenalty: 2,
};

export const SUBTITLE_DETAILS: ClovaChatCompletionsRequestBody = {
  messages: [],
  topP: 0.8,
  topK: 0,
  maxTokens: 100,
  temperature: 0.7,
  repeatPenalty: 2,
};

export const FEEDBACK_DETAILS: ClovaChatCompletionsRequestBody = {
  messages: [],
  topP: 0.8,
  topK: 0,
  maxTokens: 1000,
  temperature: 0.05,
  repeatPenalty: 8,
};

export const DIRECT_COMMAND_DETAILS: ClovaChatCompletionsRequestBody = {
  messages: [],
  topP: 0.6,
  topK: 0,
  maxTokens: 800,
  temperature: 0.7,
  repeatPenalty: 2,
};

export const PARSED_SENTENCE_DETAILS: ClovaChatCompletionsRequestBody = {
  messages: [],
  topP: 0.8,
  topK: 0,
  maxTokens: 256,
  temperature: 0.8,
  repeatPenalty: 5.0,
  includeAiFilters: true,
  seed: 0,
};

export const REPETITIVE_WORD_DETAILS: ClovaChatCompletionsRequestBody = {
  messages: [],
  topP: 0.6,
  topK: 0,
  maxTokens: 800,
  temperature: 0.7,
  repeatPenalty: 2,
};
