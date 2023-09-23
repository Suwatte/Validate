import { z } from "zod";

export const ContextMenuActionSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  systemImage: z.string().min(1).optional(),
  destructive: z.boolean().optional(),
  displayAsPlainLabel: z.boolean().optional(),
});

export const ContextMenuGroupSchema = z.object({
  id: z.string().min(1),
  actions: ContextMenuActionSchema.array(),
});
