"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Transformtext.module.css";

const Transformtext = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [sectionHeight, setSectionHeight] = useState("300vh");

  useEffect(() => {
    const calculateRange = () => {
      if (textRef.current && containerRef.current) {
        const textWidth = textRef.current.offsetWidth;
        const containerWidth = containerRef.current.offsetWidth;
        
        // 10vw padding-left and 10vw padding-right in CSS
        const padding = containerWidth * 0.1;
        
        // The scroll range is the amount the text needs to slide left:
        // (total text width) - (container/viewport width) + padding-left + padding-right
        const range = Math.max(0, textWidth - containerWidth + 2 * padding);
        setScrollRange(range);

        // Dynamically set the section height so that the vertical scroll distance
        // matches the horizontal scroll range exactly (1:1 scroll ratio).
        const viewportHeight = window.innerHeight;
        setSectionHeight(`${range + viewportHeight}px`);
      }
    };

    // Calculate initial range
    calculateRange();

    // Recalculate on window resize
    window.addEventListener("resize", calculateRange);
    return () => window.removeEventListener("resize", calculateRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section 
      ref={sectionRef} 
      className={styles.transformScrollSection}
      style={{ height: sectionHeight }}
    >
      <div ref={containerRef} className={styles.transformStickyContainer}>
        <motion.h1
          ref={textRef}
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
