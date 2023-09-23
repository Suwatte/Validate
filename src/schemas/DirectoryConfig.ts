import { z } from "zod";
import { SortSelectionSchema } from "./DirectoryRequest";
import { FilterType } from "@suwatte/daisuke";

export const OptionSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
});

export const DirectoryFilterSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1).optional(),
  type: z.nativeEnum(FilterType),
  options: OptionSchema.array().optional(),
});

export const DirectoryConfigSchema = z.object({
  filters: DirectoryFilterSchema.array().optional(),
  sort: z.object({
    options: OptionSchema.array(),
    default: SortSelectionSchema.optional(),
    canChangeOrder: z.boolean().optional(),
  }),

  searchable: z.boolean().optional(),
});
