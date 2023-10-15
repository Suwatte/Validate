import { PublicationStatus } from "@suwatte/daisuke";
import { z } from "zod";
import { PropertySchema } from "./Property";
import { URLSchema } from "./BaseItem";
import { HighlightSchema } from "./Highlight";

const IFullTrackItemSchema = z.object({
  summary: z.string().min(1).optional(),
  properties: PropertySchema.array().optional(),
  bannerCover: URLSchema.optional(),
  isFavorite: z.boolean().optional(),
  relatedTitles: HighlightSchema.array().optional(),
  recommendedTitles: HighlightSchema.array().optional(),
  links: z
    .object({
      title: z.string().min(1),
      url: URLSchema,
    })
    .array()
    .optional(),
  characters: z.object({
    name: z.string().min(1),
    role: z.string().min(1).optional(),
    image: URLSchema.optional(),
    summary: z.string().min(1).optional(),
  }),
  additionalTitles: z.string().array().optional(),
  status: z.nativeEnum(PublicationStatus).optional(),
});

export const FullTrackItemSchema = HighlightSchema.and(IFullTrackItemSchema);
