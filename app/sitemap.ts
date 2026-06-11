import type { MetadataRoute } from "next";

import { fallbackSiteUrl, pageMetadataEntries } from "@/content/discoverability";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

  return Object.values(pageMetadataEntries).map((entry) => ({
    url: `${baseUrl}${entry.path}`,
    changeFrequency: "monthly",
    priority: entry.path === "/" ? 1 : 0.7
  }));
}
