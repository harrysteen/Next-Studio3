"use client";

import React from "react";
import Link from "next/link";
import styles from "./TieSiliconValley.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function TieSiliconValley() {
  const scopeOfWork = [
    { company: "Brand Strategy & Positioning", role: "Rebranding" },
    { company: "UI/UX Design Systems", role: "Design" },
    { company: "Responsive Web Platforms", role: "Development" },
    { company: "Content Strategy & SEO", role: "Marketing" }
  ];

  const deliverables = [
    "Design System Guidelines & Digital Asset Library",
    "Sleek, High-Converting Web Platforms",
    "Standardized Multi-Chapter Portal Layouts"
  ];

  const technologies = [
    { company: "Figma", subtitle: "UI/UX Design" },
    { company: "Next.js", subtitle: "Framework" },
    { company: "GSAP", subtitle: "Animations" },
    { company: "Tailwind CSS", subtitle: "Styling" },
    { company: "Vercel", subtitle: "Hosting & CI/CD" }
  ];

  return (
    <div className={styles.container}>
      <Navbar />

      {/* GIANT TYPOGRAPHY HERO SECTION WITH FULL-BLEED IMAGE BACKGROUND */}
      <section className={styles.heroSection}>
        <div className={styles.heroTitleWrapper}>
          <h1 className={styles.heroTitle}>
            TIE SILICON <br /> VALLEY
          </h1>
          <span className={styles.heroTagline}>@USA~2025</span>
        </div>
      </section>

      <main className={styles.contentWrapper}>
        {/* METRICS SECTION */}
        <section className={styles.statsSection}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>50%+</span>
            <span className={styles.statLabel}>User Engagement</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>200k+</span>
            <span className={styles.statLabel}>Global Members</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Chapters Standardized</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>40%</span>
            <span className={styles.statLabel}>Performance Increase</span>
          </div>
        </section>

        {/* ABOUT & SCOPE SECTION */}
        <section className={styles.detailsSection}>
          <div className={styles.detailLeft}>
            <h2>About the Project</h2>
            <p className={styles.detailLeftText}>
              TiE Silicon Valley came to us with a critical challenge: their existing digital platforms 
              were fragmented, dated, and did not adequately reflect their position as the leading hub for 
              Silicon Valley entrepreneurship. 
              <br /><br />
              We redesigned their entire digital ecosystem from the ground up. Beginning with brand strategy 
              and positioning research, we moved into establishing an enterprise-grade UI/UX design system 
              capable of scaling across multiple global chapters while retaining modern design integrity and fast load times.
            </p>

            {/* Social and Web Links */}
            <div className={styles.socialRow}>
              <a 
                href="https://www.linkedin.com/company/tie-silicon-valley/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="LinkedIn Page"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/TiESiliconVal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Twitter Profile"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://sv.tie.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="Website"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.detailRight}>
            <span className={styles.sectionTag}>Services Provided</span>
            <div className={styles.experienceList}>
              {scopeOfWork.map((scope, index) => (
                <div key={index} className={styles.experienceItem}>
                  <span className={styles.experienceCompany}>{scope.company}</span>
                  <span className={styles.experienceRole}>{scope.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES SECTION */}
        <section className={styles.publicationsSection}>
          <div className={styles.publicationsLeft}>
            <h2>Key Deliverables</h2>
          </div>

          <div className={styles.publicationsRight}>
            <span className={styles.sectionTag}>Deliverables List</span>
            <div className={styles.bookList}>
              {deliverables.map((item, index) => (
                <div key={index} className={styles.bookItem}>
                  <span className={styles.bookTitle}>{item}</span>
                  <span className={styles.bookArrow}>→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES USED SECTION */}
        <section className={styles.advisorySection}>
          <h2 className={styles.advisoryTitle}>Technologies & Tools Used</h2>
          <div className={styles.boardGrid}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles.boardCard}>
                <span className={styles.boardLogoPlaceholder}>
                  {tech.company}
                </span>
                <span className={styles.boardCompanyName}>{tech.subtitle}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Bottom Navigation matching main site */}
      <nav className={styles.bottomNav} aria-label="Primary Navigation">
        <Link href="/work" className={styles.navLink}>Work</Link>
        <Link href="/team" className={styles.navLink}>Get Your Own Team</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/dezu" className={styles.navLink}>Dezu</Link>
      </nav>
    </div>
  );
}
