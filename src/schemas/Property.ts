import { z } from "zod";
import { URLSchema } from "./BaseItem";

export const BaseInteractableSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
});

export const TagSchema = BaseInteractableSchema.and(
  z.object({
    nsfw: z.boolean().optional(),
    image: URLSchema.optional(),
    noninteractive: z.boolean().optional(),
  })
);

export const PropertySchema = BaseInteractableSchema.and(
  z.object({
    tags: TagSchema.array(),
  })
);
