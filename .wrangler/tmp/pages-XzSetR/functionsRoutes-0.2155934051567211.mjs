import { onRequestOptions as __api_analyze_pantry_ts_onRequestOptions } from "/Users/eziopappalardo/Documents/cucina/functions/api/analyze-pantry.ts"
import { onRequestPost as __api_analyze_pantry_ts_onRequestPost } from "/Users/eziopappalardo/Documents/cucina/functions/api/analyze-pantry.ts"
import { onRequestOptions as __api_chat_ts_onRequestOptions } from "/Users/eziopappalardo/Documents/cucina/functions/api/chat.ts"
import { onRequestPost as __api_chat_ts_onRequestPost } from "/Users/eziopappalardo/Documents/cucina/functions/api/chat.ts"

export const routes = [
    {
      routePath: "/api/analyze-pantry",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_analyze_pantry_ts_onRequestOptions],
    },
  {
      routePath: "/api/analyze-pantry",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_analyze_pantry_ts_onRequestPost],
    },
  {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_chat_ts_onRequestOptions],
    },
  {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_chat_ts_onRequestPost],
    },
  ]