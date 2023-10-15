import { z } from "zod";
import { ContextProviderSchema } from "./ContextProvider";
import { DirectoryRequestSchema } from "./DirectoryRequest";

export const PageLinkSchema = z
  .object({
    id: z.string().min(1),
  })
  .and(ContextProviderSchema);

export const LinkableSchema = z.union([
  z.object({ page: PageLinkSchema }),
  z.object({ request: DirectoryRequestSchema }),
]);
