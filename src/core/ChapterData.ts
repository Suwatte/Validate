import { z } from "zod";

export const ZChapterPage = z.object({
  url: z.string().url().optional(),

  raw: z.string().optional(),
});

export const ZChapterData = z.object({
  chapterId: z.string().min(1),

  contentId: z.string().min(1),

  text: z.string().min(1).optional(),

  pages: z.array(ZChapterPage).optional(),
});
