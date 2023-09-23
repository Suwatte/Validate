import { z } from "zod";

export const URLSchema = z.string().min(10).url();

export const BaseItemSchema = z.object({
  title: z.string().min(1, "Must have a minimum length of 1"),
  cover: URLSchema,

  additionalCovers: URLSchema.array().optional(),
  info: z.string().min(1).array().optional(),
  isNSFW: z.boolean().optional(),
  webUrl: URLSchema.optional(),
});
