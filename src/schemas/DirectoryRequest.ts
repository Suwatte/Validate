import { z } from "zod";

export const SortSelectionSchema = z.object({
  id: z.string().min(1),
  ascending: z.boolean().optional(),
});

const DRTagSchema = z.object({
  tagId: z.string().min(1),
  propertyId: z.string().min(1),
});

export const ExcludableMultiSelectPropSchema = z.object({
  included: z.string().array(),
  excluded: z.string().array(),
});

export const PopulatedFilterSchema = z.record(
  z.string(),
  z.union([
    z.string(),
    z.string().array(),
    z.boolean(),
    z.number(),
    ExcludableMultiSelectPropSchema,
  ])
);

export const DirectoryRequestSchema = z.object({
  query: z.string().optional(),
  page: z.number().nonnegative(),
  sort: SortSelectionSchema.optional(),
  filters: PopulatedFilterSchema,
  tag: DRTagSchema.optional(),
  configID: z.string().optional(),
});
