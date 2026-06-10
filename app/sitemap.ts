import type { MetadataRoute } from "next";

import { fallbackSiteUrl } from "@/content/discoverability";
import { routeDefinitions } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

  return routeDefinitions.map((route) => ({
    url: `${baseUrl}${route.href}`,
    changeFrequency: "monthly",
    priority: route.href === "/" ? 1 : 0.7
  }));
}
