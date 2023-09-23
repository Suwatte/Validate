import { z } from "zod";

export const BooleanStateSchema = z.object({
  state: z.boolean(),
});
