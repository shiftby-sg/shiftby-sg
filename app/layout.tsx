import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import { rootMetadata } from "@/lib/metadata";
import { getStructuredData } from "@/lib/structured-data";

import "./globals.css";
import "../styles/page-materialization.css";

export const metadata: Metadata = rootMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = getStructuredData();

  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
          type="application/ld+json"
        />
      </head>
      <body className="site-body">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
