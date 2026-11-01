import {
  corporateEntity,
  discoverabilityTopics,
  fallbackSiteUrl,
  getAbsoluteUrl
} from "@/content/discoverability";
import { siteDescription, siteTitle } from "@/lib/site-data";

function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
  return url.endsWith("/") ? url.slice(0, -1) : url;
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
          "@id": `${siteUrl}/#founder`,
          name: corporateEntity.founder.name,
          jobTitle: "Founder & Principal Advisor",
          hasCredential: corporateEntity.founder.credentials.map((cred) => ({
            "@type": "EducationalOccupationalCredential",
            name: cred
          })),
          sameAs: corporateEntity.founder.linkedIn
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: siteTitle,
        url: `${siteUrl}/services`,
        description:
          "Executive advisory, boundary design, and AI assurance practice focused on preserving Enterprise Understanding as execution changes.",
        provider: {
          "@id": `${siteUrl}/#organization`
        },
        areaServed: "Global",
        serviceType: [
          "Executive Advisory",
          "AI Governance Architecture",
          "Context Architecture Assessment",
          "Bounded AI Design",
          "AI Assurance & Red Teaming"
        ],
        knowsAbout: [...discoverabilityTopics],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "ShiftBy Service Catalog",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Organizational Knowledge & Context Architecture Assessment",
                description: "Evaluates enterprise knowledge graphs, documentation systems, and context pipelines to establish structured organizational memory."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Context Drift & Diagnostic Investigation",
                description: "Diagnostic forensic investigation into where and why institutional rationale degrades across cross-system handoffs."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bounded AI & Multi-Agent Workflow Design",
                description: "Architectural definition and enforcement of operational boundaries for autonomous agents, reasoning scopes, and tool access."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "RAG & Enterprise Retrieval Assessment",
                description: "Evaluates enterprise retrieval pipelines, vector stores, and citation grounding to eliminate synthetic hallucination."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Governance & Human Oversight Architecture",
                description: "Designs legitimate authority structures, operational escalation boundaries, and non-delegable accountability protocols."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Assurance & Red Teaming",
                description: "Adversarial stress-testing, boundary-violation simulation, and policy conformance evaluations for enterprise AI systems."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enterprise Understanding Executive Advisory",
                description: "Retained strategic advisory for leadership teams navigating AI transformations and distributed execution."
              }
            }
          ]
        }
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
