import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import { rootMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = rootMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="site-body">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
