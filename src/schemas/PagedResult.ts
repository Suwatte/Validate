import { z } from "zod";
import { HighlightSchema } from "./Highlight";

export const PagedResultSchema = z.object({
  results: HighlightSchema.array(),
  isLastPage: z.boolean(),
  totalResultCount: z.number().nonnegative().int().optional(),
});
