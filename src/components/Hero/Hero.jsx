import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.title}>
          A FULL-CYCLE DESIGN PARTNER<br />
          FOR COMPANIES THAT WIN <span className={styles.arrowIcon} aria-hidden="true"></span>
        </h1>
        <div className={styles.subtitleContainer}>
          <span className={styles.accentText}>@Since~2021</span>
        </div>
      </div>

      {/* Bottom Nav for Desktop/Tablet */}
      <div className={styles.bottomSection}>
        <div className={styles.downArrows} aria-hidden="true">
          <span className={styles.arrowDown}></span>
          <span className={styles.arrowDown}></span>
        </div>
      </div>
    </section>
  );
}
