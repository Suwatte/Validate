import { z } from "zod";
import { URLSchema } from "./BaseItem";
import { ReadingFlag } from "@suwatte/daisuke";

export const UserSchema = z.object({
  handle: z.string().min(1),
  displayName: z.string().min(1).optional(),
  avatar: URLSchema.optional(),
  bannerImage: URLSchema.optional(),
  info: z.string().min(1).array().optional(),
});

export const UpSyncedContentSchema = z.object({
  id: z.string().min(1),
  flag: z.nativeEnum(ReadingFlag),
});

export const DownSyncedContentSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  cover: URLSchema,
  readingFlag: z.nativeEnum(ReadingFlag).optional(),
});
