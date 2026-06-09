import type { MetadataRoute } from "next";

const fallbackSiteUrl = "https://example.com";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
