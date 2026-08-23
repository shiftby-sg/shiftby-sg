export const designTokens = {
  colors: {
    bg: "oklch(98% 0.004 250)",
    surface: "oklch(100% 0 0 / 0.86)",
    surfaceStrong: "oklch(100% 0 0)",
    surfaceMuted:
      "color-mix(in oklch, oklch(100% 0 0), oklch(98% 0.004 250) 42%)",
    ink: "oklch(17% 0.012 250)",
    inkMuted: "oklch(47% 0.014 250)",
    inkSoft: "oklch(62% 0.018 250)",
    accent: "oklch(48% 0.15 280)",
    accentSoft: "oklch(94% 0.028 280)",
    line: "oklch(88% 0.008 250)"
  },
  type: {
    display: "clamp(2.875rem, 6vw, 4.75rem)",
    h1: "clamp(2.125rem, 4.6vw, 3.625rem)",
    h2: "clamp(1.875rem, 3.7vw, 3rem)",
    h3: "clamp(1.4375rem, 2.4vw, 2.125rem)",
    bodyLg: "clamp(1.1875rem, 1.8vw, 1.375rem)",
    body: "clamp(1.0625rem, 1.35vw, 1.1875rem)",
    small: "clamp(0.9375rem, 1.15vw, 1.0625rem)",
    label: "0.75rem"
  },
  spacing: {
    section: "clamp(3.75rem, 8.5vw, 7rem)",
    sectionTight: "clamp(2.875rem, 6.5vw, 5rem)",
    container: "min(100% - (clamp(1.125rem, 4vw, 2rem) * 2), 75rem)",
    containerWide: "min(100% - (clamp(1.125rem, 4vw, 2rem) * 2), 84rem)",
    gutter: "clamp(1.125rem, 4vw, 2rem)",
    measure: "47.5rem",
    measureWide: "61.25rem"
  },
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    pill: "999px"
  },
  shadows: {
    soft: "0 8px 22px color-mix(in oklch, oklch(17% 0.012 250), transparent 96%)",
    card: "0 18px 48px color-mix(in oklch, oklch(17% 0.012 250), transparent 93%)"
  },
  breakpoints: {
    xs: "430px",
    sm: "768px",
    md: "1024px",
    lg: "1180px"
  }
} as const;

export type DesignTokens = typeof designTokens;

export const designTokenCategories = [
  "colors",
  "type",
  "spacing",
  "radius",
  "shadows",
  "breakpoints"
] as const satisfies readonly (keyof DesignTokens)[];
