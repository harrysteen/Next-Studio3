"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const words = ["Brands.", "Products.", "Systems."];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.title}>
          We Build User-Centric{" "}
          <span className={styles.wordRotator}>
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={styles.underlined}
                style={{ display: "inline-block" }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p className={styles.subline}>
          Your full-cycle design and technology partner
        </p>
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
