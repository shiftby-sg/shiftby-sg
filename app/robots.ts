import type { MetadataRoute } from "next";

import { fallbackSiteUrl } from "@/content/discoverability";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
