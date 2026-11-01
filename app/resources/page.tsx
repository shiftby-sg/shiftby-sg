import Link from "next/link";
import type { Metadata } from "next";

import { pageMetadataEntries } from "@/content/discoverability";
import { getPageMetadata } from "@/lib/metadata";
import { getAllResources, getFeaturedResource } from "@/lib/resources";

import styles from "./resources.module.css";

export const metadata: Metadata = getPageMetadata(pageMetadataEntries.resources);

export default function ResourcesHubPage() {
  const allArticles = getAllResources();
  const featured = getFeaturedResource();
  const otherArticles = allArticles.filter((a) => a.slug !== featured?.slug);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section aria-labelledby="resources-title" className={`${styles.section} ${styles.hero}`}>
        <span className={styles.kicker}>Publications & Insights</span>
        <h1 className={styles.heroTitle} id="resources-title">
          Resources, Doctrine & Investigations
        </h1>
        <p className={styles.heroSubtitle}>
          Essays, executive briefs, and technical guidance from ShiftBy exploring
          how organizations preserve understanding, reduce AI execution drift,
          and sustain human accountability through change.
        </p>
      </section>

      {/* Main Content */}
      <section aria-labelledby="publications-heading" className={styles.quietBand}>
        <div className={styles.section}>
          {/* Featured Article */}
          {featured ? (
            <article className={styles.featuredCard}>
              <div className={styles.featuredMeta}>
                <span className={styles.categoryBadge}>{featured.category}</span>
                <span className={styles.metaItem}>Featured Doctrine</span>
                <span className={styles.metaItem}>•</span>
                <span className={styles.metaItem}>{featured.readingTime}</span>
              </div>
              <h2 className={styles.featuredTitle}>
                <Link
                  href={`/resources/${featured.slug}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {featured.title}
                </Link>
              </h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <div className={styles.featuredAuthor}>
                <span>By {featured.author.name}</span>
                <span>•</span>
                <span>{featured.author.credential}</span>
              </div>
              <Link className={styles.readLink} href={`/resources/${featured.slug}`}>
                Read doctrine essay →
              </Link>
            </article>
          ) : null}

          {/* All Articles Grid */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="publications-heading">
              Recent Publications & Research
            </h2>
          </div>

          <div className={styles.resourcesGrid}>
            {otherArticles.map((article) => (
              <Link
                className={styles.resourceCard}
                href={`/resources/${article.slug}`}
                key={article.slug}
              >
                <div className={styles.cardTop}>
                  <div className={styles.cardMeta}>
                    <span className={styles.categoryBadge}>{article.category}</span>
                    <span className={styles.metaItem}>{article.readingTime}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardExcerpt}>{article.excerpt}</p>
                </div>
                <div>
                  <span className={styles.readLink}>Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section aria-labelledby="resources-cta-title" className={styles.ctaSection}>
        <h2 className={styles.ctaTitle} id="resources-cta-title">
          Apply these principles to your operational challenges
        </h2>
        <p className={styles.ctaSubtitle}>
          We advise organizations on AI readiness, semantic context architecture,
          and governance boundaries.
        </p>
        <Link className={styles.buttonPrimary} href="/contact">
          Start a conversation →
        </Link>
      </section>
    </div>
  );
}
