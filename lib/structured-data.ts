import { fallbackSiteUrl } from "@/content/discoverability";
import { siteDescription, siteTitle } from "@/lib/site-data";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
}

export function getStructuredData() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteTitle,
        url: siteUrl,
        description: siteDescription,
        founder: {
          "@type": "Person",
          name: "Ananda Krishna Marri"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: siteTitle,
        url: siteUrl,
        description:
          "Advisory, coaching, and implementation support focused on preserving understanding as execution changes.",
        provider: {
          "@id": `${siteUrl}/#organization`
        },
        areaServed: "Global"
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteTitle,
        url: siteUrl,
        description: siteDescription,
        publisher: {
          "@id": `${siteUrl}/#organization`
        }
      }
    ]
  };
}
