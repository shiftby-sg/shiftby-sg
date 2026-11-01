import type { MetadataRoute } from "next";

import {
  getAbsoluteUrl,
  pageMetadataEntries
} from "@/content/discoverability";
import { getAllResources } from "@/lib/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = Object.values(pageMetadataEntries).map((entry) => ({
    url: getAbsoluteUrl(entry.path),
    changeFrequency: "monthly",
    priority: entry.path === "/" ? 1 : 0.8
  }));

  const resourceRoutes: MetadataRoute.Sitemap = getAllResources().map((resource) => ({
    url: getAbsoluteUrl(`/resources/${resource.slug}`),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...resourceRoutes];
}
