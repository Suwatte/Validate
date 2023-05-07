import { z } from "zod";
import { ZChapter } from "./Chapter";
import { ZHighlightCollection } from "./Collection";
import { ZBaseInfo } from "./Highlight";
import { ZNonInteractiveProperty, ZProperty } from "./Property";
import { ZTrackerInfo } from "./TrackerInfo";
import { ContentType, ReadingMode, Status } from "@suwatte/daisuke";

// Schemas
const ZBaseContent = z.object({
  /**
   * URL to which content is accessible on web
   */
  webUrl: z.string().url().optional(),
  /**
   * The Publication Status of Content
   *
   * Note: Defaults to UNKNOWN if not defined.
   */
  status: z.nativeEnum(Status).optional(),
  /**
   * Names of creators of the publication; Artists, Authors etc
   */
  creators: z.array(z.string()).optional(),
  /**
   * Summary / Description of the content
   */
  summary: z.string().optional(),
  /**
   * Indicates Content Contains Adult Imagery / Text.
   *
   * Defaults to false if not defined
   */
  adultContent: z.boolean().optional(),

  /**
   * Other Names of the Publication
   */
  additionalTitles: z.array(z.string()).optional(),

  /**
   * Properties of the publication
   */
  properties: z.array(ZProperty).optional(),

  /**
   * Content Type of the publication
   *
   * defaults to UNKNOWN if not defined
   */
  contentType: z.nativeEnum(ContentType).optional(),

  /**
   * The Reading Mode recommended by the source based on available data.
   *
   * defaults to PAGED_COMIC if not defined
   */
  recommendedReadingMode: z.nativeEnum(ReadingMode).optional(),

  /**
   * Properties that are non-interactive in-app. This should be used to display miscellaneous information in app.
   */
  nonInteractiveProperties: z.array(ZNonInteractiveProperty).optional(),

  /**
   * Additional Collections to display.
   *
   * Useful for display stuff like recommended Content
   */
  includedCollections: z.array(ZHighlightCollection).optional(),
  /**
   * The Content's defined Tracking ID's.
   */
  trackerInfo: ZTrackerInfo.optional(),

  /**
   * The content's chapters.
   *
   * Most websites display both the content information and chapters on the same page. Use to property to populate the chapters is such is the case
   *
   * Note: If Defined Suwatte will not make the subsequent requests required to get the content's chapters in the profile view.
   */
  chapters: z.array(ZChapter).optional(),
});

export const ZContent = ZBaseInfo.merge(ZBaseContent);
