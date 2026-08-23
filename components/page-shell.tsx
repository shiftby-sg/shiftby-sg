import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="page-shell" data-design-system="shared">
      {children}
    </div>
  );
}
