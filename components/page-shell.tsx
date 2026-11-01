import type { ReactNode } from "react";

import styles from "./page-shell.module.css";

interface PageShellProps {
  children: ReactNode;
  variant?: "default" | "narrow" | "wide";
  className?: string;
}

export function PageShell({
  children,
  variant = "default",
  className = ""
}: PageShellProps) {
  const variantClass =
    variant === "narrow"
      ? styles.narrow
      : variant === "wide"
      ? styles.wide
      : "";

  return (
    <div className={`${styles.shell} ${variantClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
