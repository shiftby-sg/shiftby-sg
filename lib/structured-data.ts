import {
  corporateEntity,
  discoverabilityTopics,
  fallbackSiteUrl,
  getAbsoluteUrl
} from "@/content/discoverability";
import { siteDescription, siteTitle } from "@/lib/site-data";

function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
}

export function getStructuredData() {
  const siteUrl = getSiteUrl();
  const siteRoot = getAbsoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteRoot}#organization`,
        name: siteTitle,
        url: siteUrl,
        description: siteDescription,
        address: {
          "@type": "PostalAddress",
          streetAddress: corporateEntity.address.street,
          postalCode: corporateEntity.address.postalCode,
          addressLocality: corporateEntity.address.country,
          addressCountry: corporateEntity.address.country
        },
        knowsAbout: [...discoverabilityTopics],
        founder: {
          "@type": "Person",
          name: corporateEntity.founder.name,
          jobTitle: "Founder",
          sameAs: corporateEntity.founder.linkedIn
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteRoot}#service`,
        name: siteTitle,
        url: siteUrl,
        description:
          "Advisory, coaching, and consulting focused on preserving understanding as execution changes.",
        provider: {
          "@id": `${siteUrl}/#organization`
        },
        areaServed: "Global",
        serviceType: "Executive Advisory",
        knowsAbout: [...discoverabilityTopics]
      },
      {
        "@type": "WebSite",
        "@id": `${siteRoot}#website`,
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
