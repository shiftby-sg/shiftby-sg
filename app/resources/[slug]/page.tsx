import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { fallbackSiteUrl } from "@/content/discoverability";
import {
  getAllResources,
  getResourceBySlug
} from "@/lib/resources";

import styles from "./article.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllResources();
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | ShiftBy"
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
  const pageUrl = `${siteUrl}/resources/${article.slug}`;

  return {
    title: {
      absolute: `${article.title} | ShiftBy`
    },
    description: article.excerpt,
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: article.title,
      description: article.excerpt,
      siteName: "ShiftBy",
      publishedTime: article.publishDate,
      authors: [article.author.name]
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.excerpt
    }
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);

  if (!article) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
  const pageUrl = `${siteUrl}/resources/${article.slug}`;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishDate,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role
    },
    publisher: {
      "@type": "Organization",
      name: "ShiftBy",
      url: siteUrl
    },
    mainEntityOfPage: pageUrl
  };

  return (
    <div className={styles.articleWrapper}>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData)
        }}
        type="application/ld+json"
      />
      <article className={styles.container}>
        {/* Back Link */}
        <Link className={styles.backLink} href="/resources">
          ← Back to all resources
        </Link>

        {/* Header */}
        <header className={styles.articleHeader}>
          <div className={styles.metaRow}>
            <span className={styles.categoryBadge}>{article.category}</span>
            <span className={styles.metaItem}>{article.publishDate}</span>
            <span className={styles.metaItem}>•</span>
            <span className={styles.metaItem}>{article.readingTime}</span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.subtitle}>{article.subtitle}</p>

          <div className={styles.authorRow}>
            <span className={styles.authorName}>By {article.author.name}</span>
            <span>•</span>
            <span className={styles.authorCredential}>{article.author.credential}</span>
          </div>
        </header>

        {/* Executive Summary Box */}
        <div className={styles.summaryBox}>
          <h2 className={styles.summaryTitle}>Executive Takeaways</h2>
          <ul className={styles.summaryList}>
            {article.executiveSummary.map((point) => (
              <li className={styles.summaryItem} key={point}>
                <span className={styles.bulletDot} aria-hidden="true">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className={styles.articleBody}>
          {article.sections.map((sec, idx) => (
            <section className={styles.bodySection} key={sec.heading ?? idx}>
              {sec.heading ? (
                <h2 className={styles.sectionHeading}>{sec.heading}</h2>
              ) : null}

              {sec.paragraphs.map((p, pIdx) => (
                <p className={styles.paragraph} key={pIdx}>
                  {p}
                </p>
              ))}

              {sec.callout ? (
                <div className={styles.calloutBlock}>
                  <p style={{ margin: 0 }}>&ldquo;{sec.callout}&rdquo;</p>
                </div>
              ) : null}
            </section>
          ))}
        </div>

        {/* Author Bio Footer */}
        <footer className={styles.authorFooter}>
          <h3 className={styles.authorBioTitle}>About the Author</h3>
          <p className={styles.authorBioText}>
            <strong>{article.author.name}</strong> is the founder of ShiftBy and an
            IAPP Certified AI Governance Professional (AIGP). His advisory practice
            helps enterprise organizations preserve understanding, reduce AI
            execution drift, and maintain defensible human accountability across
            distributed systems.
          </p>
        </footer>

        {/* Action Callout */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>Discuss this perspective with ShiftBy</h3>
          <p className={styles.ctaSubtitle}>
            Explore how these principles apply to your systems, transitions, or AI initiatives.
          </p>
          <Link
            className={styles.buttonPrimary}
            href={`/contact?topic=${encodeURIComponent(article.title)}`}
          >
            Start a conversation →
          </Link>
        </div>
      </article>
    </div>
  );
}
