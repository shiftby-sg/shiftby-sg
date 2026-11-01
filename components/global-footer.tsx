import Link from "next/link";

import { BrandLogo } from "@/components/BrandLogo";
import { siteDescription, siteTitle } from "@/lib/site-data";

import styles from "./global-footer.module.css";

export function GlobalFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <Link className={styles.brand} href="/" aria-label={`${siteTitle} Home`}>
            <span className={styles.brandMark}>
              <BrandLogo size={24} />
            </span>
            <span>{siteTitle}</span>
          </Link>
          <p className={styles.tagline}>{siteDescription}</p>
        </div>

        <nav aria-label="Footer Navigation" className={styles.navGroups}>
          <div>
            <h2 className={styles.groupTitle}>Explore</h2>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/capabilities">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/resources">
                  Resources
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/perspective">
                  Perspective
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={styles.groupTitle}>ShiftBy</h2>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/ai-policy">
                  AI Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={styles.groupTitle}>Connect</h2>
            <ul className={styles.linkList}>
              <li>
                <a
                  className={styles.link}
                  href="mailto:anandakrishnam@shiftby.sg"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/anandakrishnam"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://wa.me/6597517794"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://t.me/anandakrishnam"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={styles.legal}>
        <p>© 2026 ShiftBy Pte. Ltd., Singapore. All rights reserved. UEN: 202426424E</p>
        <p>Enterprise Advisory for Distributed Execution & AI</p>
      </div>
    </footer>
  );
}
