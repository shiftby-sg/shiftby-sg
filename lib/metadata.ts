import type { Metadata } from "next";

import { siteDescription, siteTitle } from "@/lib/site-data";

const fallbackSiteUrl = "https://example.com";

export function getMetadata(
  title: string,
  description = siteDescription
): Metadata {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl),
    title,
    description
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`
  },
  description: siteDescription
};
