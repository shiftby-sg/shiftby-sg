export type RouteDefinition = {
  href: string;
  label: string;
  status: "placeholder" | "future-scope";
};

export const siteTitle = "ShiftBy";

export const siteDescription =
  "Implementation architecture placeholder for the ShiftBy website.";

export const routeDefinitions: RouteDefinition[] = [
  { href: "/", label: "Home", status: "placeholder" },
  { href: "/capabilities", label: "Capabilities", status: "placeholder" },
  {
    href: "/where-shiftby-helps",
    label: "Where ShiftBy Helps",
    status: "placeholder"
  },
  { href: "/thinking", label: "Perspective", status: "placeholder" },
  { href: "/explorations", label: "Explorations", status: "placeholder" },
  { href: "/services", label: "Services", status: "placeholder" },
  { href: "/about", label: "About", status: "placeholder" },
  { href: "/contact", label: "Contact", status: "future-scope" }
];
