export const designSystemContent = {
  shellEyebrow: "Execution changes. Understanding preserves confidence.",
  shellNote:
    "Design authority remains upstream. This layer establishes reusable form, rhythm, and behavior only.",
  placeholderActions: [
    {
      href: "/services",
      label: "Primary action",
      variant: "primary"
    },
    {
      href: "/about",
      label: "Secondary action",
      variant: "secondary"
    }
  ],
  placeholderCards: [
    {
      label: "Rhythm",
      title: "Spacing system",
      body: "Shared spacing, container, and stack rules are ready for later page composition."
    },
    {
      label: "Typography",
      title: "Editorial hierarchy",
      body: "Display, heading, body, and label scales are defined without introducing final marketing copy."
    },
    {
      label: "Accessibility",
      title: "Responsive foundations",
      body: "Focus visibility, tap-safe controls, and mobile-first layout behavior are in place."
    }
  ]
} as const;

/**
 * WP-D contract: shared styling establishes rhythm and behavior only.
 * WS4 page packages remain authoritative for page composition and production copy.
 */
export const designSystemContract = {
  authorityBoundary:
    "Shared tokens and primitives support later page composition; they do not define page authority.",
  narrativeGrammar: [
    "Signal",
    "Meaning",
    "Relevance",
    "Implication",
    "Bridge"
  ] as const,
  surfacePrinciples: [
    "Typography-led hierarchy",
    "Generous whitespace",
    "Continuous narrative sections",
    "Bounded cards where they clarify meaning",
    "Mobile-first reading order"
  ] as const,
  accessibilityPrinciples: [
    "Visible keyboard focus",
    "Tap-safe controls",
    "Readable content measure",
    "Reduced-motion support",
    "Semantic structure"
  ] as const,
  placeholderContentStatus: "scaffolding-only"
} as const;
