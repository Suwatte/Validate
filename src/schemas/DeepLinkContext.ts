import { z } from "zod";
import { ReaderContextSchema } from "./ReaderContext";
import { HighlightSchema } from "./Highlight";
import { PageLinkLabelSchema } from "./Page";

export const DeepLinkContextSchema = z.object({
  read: ReaderContextSchema.optional(),
  content: HighlightSchema.optional(),
  link: PageLinkLabelSchema.optional(),
});
