import {
  corporateEntity,
  discoverabilityTopics,
  fallbackSiteUrl
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
                name: "AI Knowledge & Context Architecture",
                url: `${siteUrl}/services#ai-knowledge-context-architecture`,
                description: "Evaluates semantic models, knowledge graphs, and enterprise context integration to build enduring organizational memory."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "RAG & Enterprise Retrieval Assessment",
                url: `${siteUrl}/services#rag-retrieval-assessment`,
                description: "Assesses source suitability, retrieval quality, attribution, and citation grounding to eliminate hallucination."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Task, Agent & Workflow Advisory",
                url: `${siteUrl}/services#ai-task-agent-workflow-advisory`,
                description: "Defines and enforces explicit operational boundaries on inputs, reasoning responsibilities, tool calls, and costs."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Governance & Human-Oversight Architecture",
                url: `${siteUrl}/services#ai-governance-human-oversight`,
                description: "Designs legitimate authority structures, operational escalation boundaries, and non-delegable human accountability."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Assurance & Evidence Review",
                url: `${siteUrl}/services#ai-assurance-evidence-review`,
                description: "Audits reliance evidence, decision provenance, and compliance documentation for AI systems."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Security Assessment & Red Teaming",
                url: `${siteUrl}/services#ai-security-red-teaming`,
                description: "Adversarial stress-testing, boundary-violation simulation, and security evaluations across LLMs and tool execution."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Evaluation & Reliability Testing",
                url: `${siteUrl}/services#ai-evaluation-reliability`,
                description: "Measures behavioral drift, empirical task quality, and verifies remediation of identified issues."
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
