import { z } from "zod";
import { URLSchema } from "./BaseItem";
import { ProviderLinkType } from "@suwatte/daisuke";

export const ChapterProviderLinkSchema = z.object({
  url: URLSchema,
  type: z.nativeEnum(ProviderLinkType),
});

export const ChapterProviderSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  links: ChapterProviderLinkSchema.array().optional(),
});
