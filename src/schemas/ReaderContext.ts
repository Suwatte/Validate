import { z } from "zod";
import { HighlightSchema } from "./Highlight";
import { ChapterSchema } from "./Chapter";
import { ReadingMode } from "@suwatte/daisuke";

export const ReaderContextSchema = z.object({
  content: HighlightSchema,
  target: z.string().min(1),
  chapters: ChapterSchema.array(),
  requestedPage: z.number().nonnegative().int().optional(),
  readingMode: z.nativeEnum(ReadingMode).optional(),
});
