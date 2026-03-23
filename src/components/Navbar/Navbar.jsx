"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import arrow from "./navassets/Arrow.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.navbar}>
      <Link href="/" className={styles.logo} aria-label="Dezu Studio Home">
        <span className={styles.logoMain}>Dezu.</span>
        <span className={styles.logoSub}>STUDIO</span>
      </Link>

      {/* Desktop / Tablet actions */}
      <div className={styles.desktopActions}>
        <button className={styles.contactBtn} aria-label="Contact us">
          LET&apos;S TALK
          <span className={styles.arrow} aria-hidden="true">
            <Image src={arrow} alt="" width={20} height={20} />
          </span>
        </button>
      </div>

      {/* Hamburger - visible on mobile */}
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

      {/* Mobile / Tablet overlay menu */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}
        aria-hidden={!isOpen}
      >

        <nav className={styles.mobileNav} aria-label="Main Navigation">
          <Link href="/work" onClick={closeMenu}>Work</Link>
          <Link href="/team" onClick={closeMenu}>Get Your Own Team</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/dezu" onClick={closeMenu}>Dezu</Link>
        </nav>

        <button className={styles.contactBtnMobile} onClick={closeMenu} aria-label="Contact us">
          LET&apos;S TALK
          <span className={styles.arrow}>
            <Image src={arrow} alt="" width={24} height={24} />
          </span>
        </button>
      </div>
    </header>
  );
}