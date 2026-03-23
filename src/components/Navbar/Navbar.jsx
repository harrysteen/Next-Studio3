"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo} aria-label="Dezu Studio Home">
        <span className={styles.logoMain}>Dezu.</span>
        <span className={styles.logoSub}>STUDIO</span>
      </Link>

      <div className={styles.desktopActions}>
        <button className={styles.contactBtn} aria-label="Contact us">
          LET'S TALK <span className={styles.arrow} aria-hidden="true">→</span>
        </button>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}
        aria-hidden={!isOpen}
      >
        <nav className={styles.mobileNav} aria-label="Mobile Navigation">
          <Link href="#work" onClick={() => setIsOpen(false)}>Work</Link>
          <Link href="#team" onClick={() => setIsOpen(false)}>Get Your Own Team</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#dezu" onClick={() => setIsOpen(false)}>Dezu</Link>
        </nav>
        <button className={styles.contactBtnMobile} aria-label="Contact us">
          LET'S TALK <span aria-hidden="true">→</span>
        </button>
      </div>
    </header>
  );
}
