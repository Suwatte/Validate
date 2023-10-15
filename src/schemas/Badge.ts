import { z } from "zod";

export const BadgeSchema = z.object({
  count: z.number().nonnegative().optional(),
  color: z
    .string()
    .regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
    .optional(),
});
