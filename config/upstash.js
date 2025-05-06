import { Client as WorkflowClient } from "@upstash/workflow";

import { QSTASH_URL, QSTASH_TOKEN } from "./env.js";

export const workflowClient = new WorkflowClient({
  baseUrl: QSTASH_URL,
  token: QSTASH_TOKEN,
});

// curl -X POST http://127.0.0.1:8080/v2/publish/https://example.com -H "Authorization: Bearer eyJVc2VySUQiOiJkZWZhdWx0VXNlciIsIlBhc3N3b3JkIjoiZGVmYXVsdFBhc3N3b3JkIn0="