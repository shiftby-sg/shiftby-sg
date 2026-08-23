export type RouteDefinition = {
  href: string;
  label: string;
  status: "live";
};

export const siteTitle = "ShiftBy";

export const siteDescription =
  "Execution changes. Understanding preserves confidence as organizations work across people, systems, suppliers, automation, and AI.";

export const routeDefinitions: RouteDefinition[] = [
  { href: "/", label: "Home", status: "live" },
  { href: "/capabilities", label: "Capabilities", status: "live" },
  {
    href: "/where-shiftby-helps",
    label: "Where ShiftBy Helps",
    status: "live"
  },
  { href: "/perspective", label: "Perspective", status: "live" },
  { href: "/explorations", label: "Explorations", status: "live" },
  { href: "/services", label: "Services", status: "live" },
  { href: "/about", label: "About", status: "live" },
  { href: "/contact", label: "Contact", status: "live" }
];
