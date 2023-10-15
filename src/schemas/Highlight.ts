import { z } from "zod";
import { BaseItemSchema, URLSchema } from "./BaseItem";
import { ContextProviderSchema } from "./ContextProvider";
import { BadgeSchema } from "./Badge";
import { LinkableSchema } from "./PageLink";
import { TrackEntrySchema } from "./TrackEntry";

const StructuredItem = z.intersection(BaseItemSchema, ContextProviderSchema);

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
