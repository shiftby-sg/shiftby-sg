"use client";

import { useSearchParams } from "next/navigation";
import {
  CAPABILITY_TITLES,
  conversationTopics,
  SERVICE_TITLES
} from "@/content/contact-topics";
import styles from "@/app/contact/page.module.css";

export function ContactIntentBanner() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get("service");
  const capabilitySlug = searchParams.get("capability");

  const matchedServiceTitle = serviceSlug ? SERVICE_TITLES[serviceSlug] : undefined;
  const matchedCapabilityTitle = capabilitySlug ? CAPABILITY_TITLES[capabilitySlug] : undefined;

  const activeIntent = matchedServiceTitle
    ? { title: matchedServiceTitle, type: "service" }
    : matchedCapabilityTitle
      ? { title: matchedCapabilityTitle, type: "capability" }
      : null;

  if (!activeIntent) return null;

  return (
    <div className={styles.intentBanner} role="status" aria-live="polite">
      <span className={styles.intentBadge}>Selected Focus Area</span>
      <div className={styles.intentContent}>
        <p className={styles.intentTitle}>{activeIntent.title}</p>
        <p className={styles.intentSubtitle}>
          {activeIntent.type === "service"
            ? "We have noted your interest in this service offering. Our introductory scoping conversation will be directly tailored to your operational boundaries and deliverable requirements."
            : "We have noted your interest in this strategic capability. Our discussion will focus on practical paths toward establishing this assurance discipline in your organization."}
        </p>
      </div>
    </div>
  );
}

export function ContactTopicGrid() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get("service");
  const capabilitySlug = searchParams.get("capability");

  return (
    <ul className={styles.topicGrid} aria-label="Useful conversation topics">
      {conversationTopics.map((topic) => {
        const isSelected =
          (serviceSlug && topic.serviceSlug === serviceSlug) ||
          (!serviceSlug &&
            capabilitySlug &&
            ((capabilitySlug === "organizational-memory" &&
              topic.serviceSlug === "ai-knowledge-context-architecture") ||
              (capabilitySlug === "bounded-ai" &&
                topic.serviceSlug === "ai-task-agent-workflow-advisory") ||
              (capabilitySlug === "human-ai-accountability" &&
                topic.serviceSlug === "ai-governance-human-oversight")));

        return (
          <li
            key={topic.name}
            className={isSelected ? styles.topicSelected : undefined}
          >
            {topic.name} {isSelected && " ✓"}
          </li>
        );
      })}
    </ul>
  );
}
