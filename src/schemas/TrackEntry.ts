import { TrackStatus } from "@suwatte/daisuke";
import { z } from "zod";

export const TrackProgressSchema = z.object({
  lastReadChapter: z.number().nonnegative(),
  maxAvailableChapter: z.number().nonnegative().optional(),
  lastReadVolume: z.number().nonnegative().optional(),
});

export const TrackEntrySchema = z.object({
  status: z.nativeEnum(TrackStatus),
  progress: TrackProgressSchema,
});
