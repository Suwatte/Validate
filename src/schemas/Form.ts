import { z } from "zod";

export const UIElementSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  value: z.union([
    z.boolean(),
    z.string(),
    z.number(),
    z.string().array(),
    z.date(),
  ]),
  optional: z.boolean().optional(),
});
export const UISectionSchema = z.object({
  header: z.string().min(1).optional(),
  footer: z.string().min(1).optional(),
  children: UIElementSchema.array(),
});

export const FormSchema = z.object({
  sections: UISectionSchema.array(),
});
