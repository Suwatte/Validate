import { z } from "zod";
import { DirectoryRequestSchema } from "./DirectoryRequest";
import { BadgeSchema, HighlightSchema } from "./Highlight";
import { URLSchema } from "./BaseItem";
import { SectionStyle } from "@suwatte/daisuke";
import { ContextProviderSchema } from "./ContextProvider";

export const PageLinkSchema = z
  .object({
    id: z.string().min(1),
  })
  .and(ContextProviderSchema);

export const LinkableSchema = z.union([
  z.object({ page: PageLinkSchema }),
  z.object({ request: DirectoryRequestSchema }),
]);

export const PageLinkLabelSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1).optional(),
  badge: BadgeSchema.optional(),
  cover: URLSchema.optional(),
  linkable: LinkableSchema,
});

export const PageSectionSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1).optional(),
  viewMoreLink: LinkableSchema.optional(),
  items: HighlightSchema.array().optional(),
  style: z.nativeEnum(SectionStyle).optional(),
});

export const ResolvedPageSectionSchema = z.object({
  items: HighlightSchema.array(),
  viewMoreLink: LinkableSchema.optional(),
  updatedTitle: z.string().min(1).optional(),
  updatedSubtitle: z.string().min(1).optional(),
});
