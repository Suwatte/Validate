import { z } from "zod";
import { HighlightSchema } from "./Highlight";
import { DirectoryRequestSchema } from "./DirectoryRequest";

export const HighlightCollectionSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1).optional(),
  highlights: HighlightSchema.array().min(1),
  request: DirectoryRequestSchema.optional(),
});
