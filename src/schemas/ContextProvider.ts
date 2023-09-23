import { z } from "zod";

export const ContextProviderSchema = z.object({
  context: z.record(z.string(), z.any()).optional(),
});
