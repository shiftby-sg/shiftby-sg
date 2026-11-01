"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/BrandLogo";
import { contactCta, primaryNavLinks, siteTitle } from "@/lib/site-data";

import styles from "./global-header.module.css";

export function GlobalHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label={`${siteTitle} Home`}>
          <span className={styles.logoIcon}>
            <BrandLogo size={26} />
          </span>
          <span>{siteTitle}</span>
        </Link>

        <nav aria-label="Primary" className={styles.nav}>
          {primaryNavLinks.map((route) => {
            const isActive =
              pathname === route.href ||
              (route.href !== "/" && pathname.startsWith(route.href));
            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                href={route.href}
                key={route.href}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link className={styles.ctaButton} href={contactCta.href}>
            {contactCta.label}
          </Link>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          type="button"
        >
          <span className={styles.menuIcon}>
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          aria-label="Mobile Navigation"
          className={styles.mobileDrawer}
          id="mobile-navigation"
        >
          {primaryNavLinks.map((route) => {
            const isActive =
              pathname === route.href ||
              (route.href !== "/" && pathname.startsWith(route.href));
            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`${styles.mobileNavLink} ${
                  isActive ? styles.mobileNavLinkActive : ""
                }`}
                href={route.href}
                key={route.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            );
          })}
          <Link
            className={styles.mobileCta}
            href={contactCta.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {contactCta.label}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
