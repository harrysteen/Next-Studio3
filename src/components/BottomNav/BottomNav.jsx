"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav} aria-label="Primary Navigation">
      <Link href="/work" className={`${styles.navLink} ${pathname === '/work' ? styles.active : ''}`}>
        Work
      </Link>
      <Link href="/team" className={`${styles.navLink} ${pathname === '/team' ? styles.active : ''}`}>
        Get Your Own Team
      </Link>
      <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
        About
      </Link>
      <Link href="https://dezu.in/" className={styles.navLink} target="_blank" rel="noopener noreferrer">
        Dezu
      </Link>
    </nav>
  );
}
