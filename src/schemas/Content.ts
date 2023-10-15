import { ContentType, PublicationStatus, ReadingMode } from "@suwatte/daisuke";
import { z } from "zod";
import { HighlightCollectionSchema } from "./HighlightCollection";
import { ChapterSchema } from "./Chapter";
import { BaseItemSchema } from "./BaseItem";
import { PropertySchema } from "./Property";

const IContentSchema = z.object({
  status: z.nativeEnum(PublicationStatus).optional(),
  creators: z.string().min(1).array().optional(),
  summary: z.string().min(1).optional(),
  additionalTitles: z.string().min(1).array().optional(),
  properties: PropertySchema.array().optional(),
  contentType: z.nativeEnum(ContentType).optional(),
  recommendedPanelMode: z.nativeEnum(ReadingMode).optional(),
  collections: HighlightCollectionSchema.array().optional(),
  trackerInfo: z.record(z.string(), z.string()).optional(),
  chapters: ChapterSchema.array().optional(),
});

export const ContentSchema = z.intersection(BaseItemSchema, IContentSchema);
