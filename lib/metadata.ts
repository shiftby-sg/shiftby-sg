import type { Metadata } from "next";

import {
  discoverabilityTopics,
  fallbackSiteUrl,
  type PageMetadataEntry
} from "@/content/discoverability";
import { siteDescription, siteTitle } from "@/lib/site-data";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
}

function getMetadataBase() {
  return new URL(getSiteUrl());
}

export function getPageMetadata(
  entry: PageMetadataEntry
): Metadata {
  const pageTitle = entry.seoTitle ?? `${entry.title} | ${siteTitle}`;

  return {
    metadataBase: getMetadataBase(),
    title: {
      absolute: pageTitle
    },
    description: entry.description,
    keywords: [...discoverabilityTopics],
    alternates: {
      canonical: entry.path
    },
    openGraph: {
      type: "website",
      url: entry.path,
      title: pageTitle,
      description: entry.description,
      siteName: siteTitle
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description: entry.description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export function getMetadata(
  title: string,
  description = siteDescription,
  path = "/"
): Metadata {
  return getPageMetadata({
    title,
    seoTitle: `${title} | ${siteTitle}`,
    description,
    path
  });
}

export const rootMetadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`
  },
  description: siteDescription,
  keywords: [...discoverabilityTopics],
  applicationName: siteTitle,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription
  },
  robots: {
    index: true,
    follow: true
  }
};
