import Link from "next/link";

import styles from "@/app/services/services.module.css";

export interface ServiceCardProps {
  slug: string;
  title: string;
  capabilityBadge: string;
  targetNeed: string;
  scopeOptions: string[];
  typicalOutputs: string[];
  note?: string;
}

export function ServiceCard({
  slug,
  title,
  capabilityBadge,
  targetNeed,
  scopeOptions,
  typicalOutputs,
  note
}: ServiceCardProps) {
  return (
    <article className={styles.serviceCard} id={slug}>
      <div className={styles.serviceHeader}>
        <span className={styles.capabilityBadge}>{capabilityBadge}</span>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.targetNeed}>
          <strong>When needed:</strong> {targetNeed}
        </p>
      </div>

      <div className={styles.sectionDivider} />

      <div className={styles.scopeSection}>
        <h4 className={styles.subheading}>Scope Options:</h4>
        <ul className={styles.scopeList}>
          {scopeOptions.map((opt) => (
            <li className={styles.scopeItem} key={opt}>
              <span className={styles.checkIcon} aria-hidden="true">✓</span>
              <span>{opt}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.outputsSection}>
        <h4 className={styles.subheading}>Typical Outputs:</h4>
        <ul className={styles.outputsList}>
          {typicalOutputs.map((output) => (
            <li className={styles.outputItem} key={output}>
              <span className={styles.bulletDot} aria-hidden="true">•</span>
              <span>{output}</span>
            </li>
          ))}
        </ul>
      </div>

      {note ? <p className={styles.serviceNote}>{note}</p> : null}

      <div className={styles.cardFooter}>
        <Link
          className={styles.inquireButton}
          href={`/contact?service=${slug}`}
        >
          Inquire about this engagement →
        </Link>
      </div>
    </article>
  );
}
