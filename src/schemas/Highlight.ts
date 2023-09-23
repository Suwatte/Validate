import { z } from "zod";
import { BaseItemSchema, URLSchema } from "./BaseItem";
import { ContextProviderSchema } from "./ContextProvider";
import { LinkableSchema } from "./Page";
import { TrackEntrySchema } from "./Tracker";

const StructuredItem = z.intersection(BaseItemSchema, ContextProviderSchema);

export const BadgeSchema = z.object({
  count: z.number().nonnegative().optional(),
  color: z
    .string()
    .regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
    .optional(),
});

const IHighlightSchema = z.object({
  id: z.string().min(1),
  subtitle: z.string().optional(),
  acquisitionLink: URLSchema.optional(),
  streamable: z.boolean().optional(),
  noninteractive: z.boolean().optional(),
  badge: BadgeSchema.optional(),
  entry: TrackEntrySchema.optional(),
  link: LinkableSchema.optional(),
});

export const HighlightSchema = z.intersection(StructuredItem, IHighlightSchema);
