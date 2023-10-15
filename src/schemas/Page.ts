import { z } from "zod";
import { HighlightSchema } from "./Highlight";
import { URLSchema } from "./BaseItem";
import { SectionStyle } from "@suwatte/daisuke";
import { BadgeSchema } from "./Badge";
import { LinkableSchema } from "./PageLink";

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
  items: HighlightSchema.array().nonempty().optional(),
  style: z.nativeEnum(SectionStyle).optional(),
});

export const ResolvedPageSectionSchema = z.object({
  items: HighlightSchema.array(),
  viewMoreLink: LinkableSchema.optional(),
  updatedTitle: z.string().min(1).optional(),
  updatedSubtitle: z.string().min(1).optional(),
});
