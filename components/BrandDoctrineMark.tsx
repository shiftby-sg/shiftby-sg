import type { SVGProps } from "react";

type BrandDoctrineMarkProps = Omit<SVGProps<SVGSVGElement>, "aria-hidden">;

export function BrandDoctrineMark({
  className,
  ...svgProps
}: BrandDoctrineMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <circle cx="120" cy="120" fill="currentColor" fillOpacity="0.62" r="29" />
      <path
        d="M120 20a100 100 0 0 1 86.6 50"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="12"
      />
      <path
        d="M220 120a100 100 0 0 1-50 86.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="12"
      />
      <path
        d="M120 220a100 100 0 0 1-86.6-50"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="12"
      />
      <path
        d="M20 120a100 100 0 0 1 50-86.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="12"
      />
    </svg>
  );
}
