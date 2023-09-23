import { z } from "zod";

export const ContentProgressStateSchema = z.object({
  readChapterIds: z.string().min(1).array().optional(),
  currentReadingState: z
    .object({
      chapterId: z.string().min(1),
      page: z.number().int().nonnegative(),
      progress: z.number().max(1).min(0),
      readDate: z.date(),
    })
    .optional(),
  markAllBelowAsRead: z
    .object({
      chapterNumber: z.number().nonnegative(),
      chapterVolume: z.number().nonnegative().optional(),
    })
    .optional(),
});
