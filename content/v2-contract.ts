/**
 * WP-A repository contract for the frozen ShiftBy V2 website.
 *
 * This file records route ownership and semantic guardrails only. It is not
 * page content and must not be used to infer visual or copy decisions.
 */

export type V2RouteClass =
  | "PRIMARY"
  | "CHILD-DETAIL"
  | "UTILITY"
  | "LEGACY-REDIRECT";

export type V2ImplementationStatus =
  | "EXISTING"
  | "CONTRACTED"
  | "PLANNED"
  | "REDIRECT-ONLY";

export type V2RouteContract = {
  canonicalPath: string;
  implementationStatus: V2ImplementationStatus;
  label: string;
  parent?: string;
  primaryNavigation: boolean;
  routeClass: V2RouteClass;
  legacyPath?: string;
};

export const v2RouteContract = [
  { canonicalPath: "/", implementationStatus: "EXISTING", label: "Home", primaryNavigation: true, routeClass: "PRIMARY" },
  { canonicalPath: "/where-shiftby-helps", implementationStatus: "EXISTING", label: "Where ShiftBy Helps", primaryNavigation: true, routeClass: "PRIMARY" },
  { canonicalPath: "/services", implementationStatus: "EXISTING", label: "Services", primaryNavigation: true, routeClass: "PRIMARY" },
  { canonicalPath: "/capabilities", implementationStatus: "EXISTING", label: "Capabilities", primaryNavigation: true, routeClass: "PRIMARY" },
  { canonicalPath: "/capabilities/decision-integrity", implementationStatus: "PLANNED", label: "Decision Integrity", parent: "/capabilities", primaryNavigation: false, routeClass: "CHILD-DETAIL" },
  { canonicalPath: "/capabilities/organizational-memory", implementationStatus: "PLANNED", label: "Organizational Memory", parent: "/capabilities", primaryNavigation: false, routeClass: "CHILD-DETAIL" },
  { canonicalPath: "/capabilities/human-ai-accountability", implementationStatus: "PLANNED", label: "Human–AI Accountability", parent: "/capabilities", primaryNavigation: false, routeClass: "CHILD-DETAIL" },
  { canonicalPath: "/explorations", implementationStatus: "EXISTING", label: "Explorations", primaryNavigation: true, routeClass: "PRIMARY" },
  { canonicalPath: "/insights", implementationStatus: "PLANNED", label: "Insights", primaryNavigation: true, routeClass: "PRIMARY" },
  { canonicalPath: "/insights/[slug]", implementationStatus: "PLANNED", label: "Insight detail", parent: "/insights", primaryNavigation: false, routeClass: "CHILD-DETAIL" },
  { canonicalPath: "/about", implementationStatus: "EXISTING", label: "About", primaryNavigation: true, routeClass: "PRIMARY" },
  { canonicalPath: "/discuss-a-concern", implementationStatus: "PLANNED", label: "Discuss a Concern", primaryNavigation: true, routeClass: "PRIMARY" },
  { canonicalPath: "/ai-policy", implementationStatus: "EXISTING", label: "AI Policy", primaryNavigation: false, routeClass: "UTILITY" },
  { canonicalPath: "/insights", implementationStatus: "REDIRECT-ONLY", label: "Perspective", legacyPath: "/perspective", primaryNavigation: false, routeClass: "LEGACY-REDIRECT" },
  { canonicalPath: "/discuss-a-concern", implementationStatus: "REDIRECT-ONLY", label: "Contact", legacyPath: "/contact", primaryNavigation: false, routeClass: "LEGACY-REDIRECT" }
] as const satisfies readonly V2RouteContract[];

export const v2PrimaryNavigation = v2RouteContract.filter(
  (route) => route.routeClass === "PRIMARY"
);

export const v2ImplementationPages = v2RouteContract.filter(
  (route) =>
    route.routeClass === "PRIMARY" ||
    (route.routeClass === "CHILD-DETAIL" && route.canonicalPath !== "/insights/[slug]")
);

export type CapabilityId =
  | "decision-integrity"
  | "organizational-memory"
  | "human-ai-accountability";

export type CapabilityContract = {
  id: CapabilityId;
  label: string;
  route: string;
};

export const canonicalCapabilities = [
  { id: "decision-integrity", label: "Decision Integrity", route: "/capabilities/decision-integrity" },
  { id: "organizational-memory", label: "Organizational Memory", route: "/capabilities/organizational-memory" },
  { id: "human-ai-accountability", label: "Human–AI Accountability", route: "/capabilities/human-ai-accountability" }
] as const satisfies readonly CapabilityContract[];

export function getCanonicalCapabilities(): readonly CapabilityContract[] {
  return canonicalCapabilities;
}

export function getCanonicalCapabilityById(
  id: string
): (typeof canonicalCapabilities)[number] | undefined {
  return canonicalCapabilities.find((capability) => capability.id === id);
}

export type InsightContentType = "Perspective" | "Applied" | "Research Note" | "Use Case";

export type InsightContract = {
  slug: string;
  title: string;
  description: string;
  contentType: InsightContentType;
  publicationState: "DRAFT" | "PUBLISHED";
  publicationDate?: string;
  relevantProblems: readonly string[];
  relevantCapabilities: readonly CapabilityId[];
  proofClass: "AUTHORITATIVE" | "APPLIED" | "RESEARCH" | "USE-CASE";
};

export const insightRouteContract = {
  index: "/insights",
  detailPattern: "/insights/[slug]",
  contentTypes: ["Perspective", "Applied", "Research Note", "Use Case"]
} as const;

export const v2SemanticGuardrails = {
  forbiddenPublicTerms: ["Decision", "Traceability"].join(" "),
  adaptiveExecutionRole: "OUTCOME_NOT_CAPABILITY",
  enterpriseUnderstandingRole: "OVERARCHING_NEED_NOT_CAPABILITY",
  capabilityServiceBoundary: "CAPABILITIES_AND_SERVICES_REMAIN_DISTINCT",
  appliedEvidenceBoundary: "APPLIED_EVIDENCE_IS_NOT_CLIENT_PROOF",
  capabilityDetailNavigation: "CHILD_DETAIL_ONLY",
  concernEntry: "DIRECTLY_REACHABLE_WITHOUT_SERVICE_SELECTION"
} as const;

export type PageAuthorityContract = {
  authority: "WS4 — V2 Website Content & Proof Readiness";
  carriedRemediation?: "HOME_PROOF_REVALIDATION" | "ABOUT_FOUNDER_VERIFICATION" | "EXPLORATIONS_SOURCE_HIERARCHY";
  downstreamWorkpackage: string;
  page: string;
  route: string;
};

export const v2PageAuthorityContract = [
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Home", route: "/", downstreamWorkpackage: "WP-E", carriedRemediation: "HOME_PROOF_REVALIDATION" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Where ShiftBy Helps", route: "/where-shiftby-helps", downstreamWorkpackage: "WP-E" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Services", route: "/services", downstreamWorkpackage: "WP-E" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Capabilities overview", route: "/capabilities", downstreamWorkpackage: "WP-F" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Decision Integrity", route: "/capabilities/decision-integrity", downstreamWorkpackage: "WP-F" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Organizational Memory", route: "/capabilities/organizational-memory", downstreamWorkpackage: "WP-F" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Human–AI Accountability", route: "/capabilities/human-ai-accountability", downstreamWorkpackage: "WP-F" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Explorations", route: "/explorations", downstreamWorkpackage: "WP-G", carriedRemediation: "EXPLORATIONS_SOURCE_HIERARCHY" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Insights", route: "/insights", downstreamWorkpackage: "WP-H" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "About", route: "/about", downstreamWorkpackage: "WP-I", carriedRemediation: "ABOUT_FOUNDER_VERIFICATION" },
  { authority: "WS4 — V2 Website Content & Proof Readiness", page: "Discuss a Concern", route: "/discuss-a-concern", downstreamWorkpackage: "WP-J" }
] as const satisfies readonly PageAuthorityContract[];

export const v2CarriedRemediations = [
  "HOME_PROOF_REVALIDATION",
  "ABOUT_FOUNDER_VERIFICATION",
  "EXPLORATIONS_SOURCE_HIERARCHY"
] as const;

export const v1RouteDispositions = {
  "/": "RETAIN-PRIMARY",
  "/where-shiftby-helps": "RETAIN-PRIMARY",
  "/services": "RETAIN-PRIMARY",
  "/capabilities": "RETAIN-PRIMARY",
  "/explorations": "RETAIN-PRIMARY",
  "/about": "RETAIN-PRIMARY",
  "/ai-policy": "RETAIN-UTILITY",
  "/perspective": "REDIRECT",
  "/contact": "REDIRECT"
} as const;

export const v2RepositorySurfaceContract = {
  routeRegistry: { current: "lib/site-data.ts", owner: "WP-A/WP-B" },
  routeNotes: { current: "content/route-notes.ts", owner: "WP-A" },
  metadataRegistry: { current: "content/discoverability.ts + lib/metadata.ts", owner: "WP-A/WP-K" },
  structuredData: { current: "lib/structured-data.ts", owner: "WP-K" },
  releaseSurfaces: { current: "app/sitemap.ts + app/robots.ts + app/llms.txt/route.ts", owner: "WP-K" },
  validation: { current: "tests/validation/run-validation-suite.mjs", owner: "WP-L" },
  redirects: { current: "Not yet implemented", owner: "WP-C/WP-K" }
} as const;

export const wpAReadiness = {
  state: "WP-A PASS WITH NON-BLOCKING CARRIED ITEMS — READY FOR WP-B",
  blockingItems: [] as const,
  nonBlockingItems: [
    "Home proof/statistic verification",
    "About founder biography and credential verification",
    "Explorations source-hierarchy normalization",
    "Final metadata wording remains governed by WS4 authority"
  ] as const
} as const;
