import Link from "next/link";
import type { ReactNode } from "react";

import { CapabilitySwitcher } from "./CapabilitySwitcher";
import styles from "./capability.module.css";

export interface RelatedServiceItem {
  title: string;
  description: string;
  href: string;
}

interface CapabilityDetailLayoutProps {
  kicker: string;
  title: string;
  formalQuote: string;
  formalQuoteTag?: ReactNode;
  subtitle: string;
  currentSlug: "organizational-memory" | "bounded-ai" | "human-ai-accountability";
  children: ReactNode;
  relatedServices: RelatedServiceItem[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export function CapabilityDetailLayout({
  kicker,
  title,
  formalQuote,
  formalQuoteTag = "ShiftBy Capability Definition",
  subtitle,
  currentSlug,
  children,
  relatedServices,
  ctaTitle = "Discuss this capability in your operational context",
  ctaSubtitle = "Explore where this capability applies to your systems, transitions, or governance requirements."
}: CapabilityDetailLayoutProps) {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section aria-labelledby="capability-hero-title" className={`${styles.section} ${styles.hero}`}>
        <span className={styles.kicker}>{kicker}</span>
        <h1 className={styles.heroTitle} id="capability-hero-title">
          {title}
        </h1>

        <div className={styles.formalQuoteBlock}>
          <p className={styles.formalQuote}>&ldquo;{formalQuote}&rdquo;</p>
          <p className={styles.formalQuoteTag}>{formalQuoteTag}</p>
        </div>

        <p className={styles.heroSubtitle}>{subtitle}</p>

        <div className={styles.heroActions}>
          <Link
            className={styles.buttonPrimary}
            href={`/contact?capability=${currentSlug}`}
          >
            Start a conversation →
          </Link>
          <Link className={styles.buttonSecondary} href="/services">
            View related services →
          </Link>
        </div>
      </section>

      {/* Main Capability Sections */}
      {children}

      {/* Related Engagements */}
      <section aria-labelledby="services-title" className={`${styles.section}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.kicker}>Related Services</span>
          <h2 className={styles.sectionTitle} id="services-title">
            Engagements drawing on this capability
          </h2>
          <p className={styles.sectionLead}>
            ShiftBy translates this capability into bounded, practical enterprise engagements:
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {relatedServices.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.cardBody}>{service.description}</p>
              </div>
              <Link className={styles.serviceLink} href={service.href}>
                View engagement details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Switcher Strip */}
      <CapabilitySwitcher currentSlug={currentSlug} />

      {/* Bottom CTA */}
      <section aria-labelledby="capability-cta-title" className={styles.ctaSection}>
        <h2 className={styles.ctaTitle} id="capability-cta-title">
          {ctaTitle}
        </h2>
        <p className={styles.ctaSubtitle}>{ctaSubtitle}</p>
        <Link
          className={styles.buttonPrimary}
          href={`/contact?capability=${currentSlug}`}
        >
          Schedule a discussion →
        </Link>
      </section>
    </div>
  );
}
