import type { MetadataRoute } from "next";

import {
  getAbsoluteUrl,
  pageMetadataEntries
} from "@/content/discoverability";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pageMetadataEntries).map((entry) => ({
    url: getAbsoluteUrl(entry.path),
    changeFrequency: "monthly",
    priority: entry.path === "/" ? 1 : 0.7
  }));
}
