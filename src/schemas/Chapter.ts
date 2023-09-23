import { z } from "zod";
import { URLSchema } from "./BaseItem";
import { ChapterDataSchema } from "./ChapterData";
import { ChapterProviderSchema } from "./ChapterProvider";

export const ChapterSchema = z.object({
  chapterId: z.string().min(1),
  number: z.number().nonnegative(),
  index: z.number().int().nonnegative(),
  date: z.date(),
  language: z.string().min(1),

  providers: ChapterProviderSchema.array().optional(),
  webUrl: URLSchema.optional(),
  thumbnail: URLSchema.optional(),
  volume: z.number().nonnegative().optional(),
  title: z.string().min(1).optional(),
  data: ChapterDataSchema.optional(),
});
