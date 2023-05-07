import { z } from "zod";
import { ZChapterData } from "./ChapterData";
import { ZProvider } from "./Provider";

export const ZChapter = z.object({
  chapterId: z.string().min(1),

  contentId: z.string().min(1),

  number: z.number().nonnegative(),

  index: z.number().int().nonnegative(),

  webUrl: z.string().url().optional(),

  date: z.date(),

  volume: z.number().nonnegative().optional(),

  language: z.string().optional(),

  title: z.string().optional(),

  data: ZChapterData.optional(),

  providers: z.array(ZProvider).optional(),
});
