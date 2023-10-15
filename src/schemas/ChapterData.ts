import { z } from "zod";
import { URLSchema } from "./BaseItem";

const B64Regex =
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

export const ChapterPageSchema = z.object({
  url: URLSchema.optional(),
  raw: z.string().regex(B64Regex).optional(),
});

export const ChapterDataSchema = z.object({
  pages: ChapterPageSchema.array().nonempty("Page List cannot not be empty"),
});
