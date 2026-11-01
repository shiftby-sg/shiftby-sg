import Link from "next/link";

import styles from "./capability.module.css";

interface CapabilitySwitcherProps {
  currentSlug: "organizational-memory" | "bounded-ai" | "human-ai-accountability";
}

const capabilities = [
  {
    slug: "organizational-memory",
    badge: "Knowledge Continuity",
    name: "Organizational Memory",
    desc: "Continuity of understanding beyond individual memory through transitions and change.",
    href: "/capabilities/organizational-memory"
  },
  {
    slug: "bounded-ai",
    badge: "Alignment & Drift Reduction",
    name: "Bounded AI",
    desc: "Keeping AI tasks, agents, and coordinated workflows aligned with agreed boundaries.",
    href: "/capabilities/bounded-ai"
  },
  {
    slug: "human-ai-accountability",
    badge: "Governance & Authority",
    name: "Human–AI Accountability",
    desc: "Sustaining explicit ownership, legitimate authority, and meaningful oversight throughout AI use.",
    href: "/capabilities/human-ai-accountability"
  }
] as const;

export function CapabilitySwitcher({ currentSlug }: CapabilitySwitcherProps) {
  return (
    <section aria-labelledby="switcher-heading" className={styles.switcherSection}>
      <div className={styles.switcherInner}>
        <div className={styles.switcherHeader}>
          <span className={styles.kicker}>The Three Capabilities</span>
          <h2 className={styles.switcherTitle} id="switcher-heading">
            Explore the other complementary capabilities
          </h2>
          <p className={styles.switcherSubtitle}>
            ShiftBy capabilities operate together to enable Enterprise Understanding:
          </p>
        </div>

        <div className={styles.switcherGrid}>
          {capabilities.map((cap) => {
            const isCurrent = cap.slug === currentSlug;
            return (
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className={`${styles.switcherCard} ${
                  isCurrent ? styles.switcherCardActive : ""
                }`}
                href={cap.href}
                key={cap.slug}
              >
                <div>
                  <span className={styles.switcherBadge}>{cap.badge}</span>
                  <h3 className={styles.switcherName}>{cap.name}</h3>
                  <p className={styles.switcherDesc}>{cap.desc}</p>
                </div>
                <span className={styles.switcherStatus}>
                  {isCurrent ? "Current Capability" : "View Capability →"}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
