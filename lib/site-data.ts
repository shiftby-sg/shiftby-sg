export type RouteDefinition = {
  href: string;
  label: string;
  status?: "live" | "preview";
  isAction?: boolean;
};

export const siteTitle = "ShiftBy";

export const siteTagline = "Execution changes. Understanding preserves confidence.";

export const siteDescription =
  "ShiftBy is an executive advisory practice focused on preserving understanding, accountability, and confidence as execution becomes distributed across people, systems, suppliers, automation, and AI.";

export const primaryNavLinks: RouteDefinition[] = [
  { href: "/capabilities", label: "Capabilities", status: "live" },
  { href: "/services", label: "Services", status: "live" },
  { href: "/resources", label: "Resources", status: "live" },
  { href: "/perspective", label: "Perspective", status: "live" },
  { href: "/about", label: "About", status: "live" }
];

export const contactCta: RouteDefinition = {
  href: "/contact",
  label: "Start a conversation",
  status: "live",
  isAction: true
};

export const routeDefinitions: RouteDefinition[] = [
  { href: "/", label: "Home", status: "live" },
  ...primaryNavLinks,
  contactCta
];
