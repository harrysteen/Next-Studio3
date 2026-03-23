"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Transformtext.module.css";

const Transformtext = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["55%", "-95%"]   // start at 55% so "From intent to" is visible, then scroll left
  );

  return (
    <section ref={sectionRef} className={styles.transformScrollSection}>
      <div className={styles.transformStickyContainer}>
        <motion.h1
          className={styles.transformScrollText}
          style={{ x }}
        >
          From intent to impact, ready to start your <span className={styles.titleHighlight}>design journey?</span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Transformtext;
