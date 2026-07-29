"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Engagement.module.css";
import SplitText from "../FAQ/SplitText";

gsap.registerPlugin(ScrollTrigger);

export default function Engagement() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // ScrollTrigger pinning safely removed to resolve layout overlapping conflicts!
    // Stacking behavior is now handled flawlessly by native CSS position: sticky.
  }, []);

  const cardData = [
    {
      type: "ONE-TIME ENGAGEMENTS",
      title: "For clarity, speed and decisive momentum.",
      desc: "This is ideal when the requirement is clear and timelines are specific. We jump in, discover and deliver with precision.",
      bestForTitle: "Best for teams that",
      bestFor: [
        "Need quick strategy and delivery",
        "Need a fresh perspective",
        "Have fixed deadlines"
      ],
      img: "/home assets/ONE-TIME ENGAGEMENTS.webp",
      ctaText: "Talk to us",
      ctaLink: "/contact"
    },
    {
      type: "ONGOING PARTNERSHIP",
      title: "Continuous design evolution and support.",
      desc: "Perfect for scaling startups and enterprise teams needing a reliable, fully integrated design arm. We become an extension of your own product squad.",
      bestForTitle: "Best for teams that",
      bestFor: [
        "Need a dedicated design team",
        "Continuous product iterations",
        "Long-term strategic growth"
      ],
      img: "/home assets/ONGOING PARTNERSHIP.webp",
      ctaText: "Talk to us",
      ctaLink: "/contact"
    },
    {
      type: "RETAINER MODEL",
      title: "Flexible bandwidth. Uncompromising quality.",
      desc: "Reserve guaranteed hours per month for whatever design needs arise. A predictable, cost-effective way to keep your product aesthetics perfectly tuned.",
      bestForTitle: "Best for teams that",
      bestFor: [
        "Fluctuating design needs",
        "Predictable monthly budgets",
        "Maintenance & minor updates"
      ],
      img: "/home assets/RETAINER MODEL.webp",
      ctaText: "Talk to us",
      ctaLink: "/contact"
    }
  ];

  return (
    <div ref={sectionRef} className={styles.scrollWrapper}>
      
      {/* Absolute header that sits at the top of the stack */}
      <div className={styles.header}>
        <div className={styles.subtitle}>
          <span>✦</span> MODES OF ENGAGEMENT
        </div>
        <h2 className={styles.title}>
          <SplitText
            text="WE UNDERSTAND THAT DYNAMIC PROBLEMS NEED ADAPTIVE WORK MODES."
            className={styles.splitTextHeading}
            delay={30}
            duration={0.8}
            ease="power3.out"
            splitType="words,chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            tag="span"
          />
        </h2>
      </div>

      {cardData.map((card, idx) => (
        <section key={idx} className={styles.panel}>
          <div className={styles.engagementCard}>
            {/* LEFT CONTENT */}
            <div className={styles.leftContent}>
              <h3>{card.type}</h3>
              <h2>{card.title}</h2>
              <p className={styles.desc}>{card.desc}</p>
              <h4>{card.bestForTitle}</h4>
              <ul>
                {card.bestFor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link href={card.ctaLink} className={styles.ctaButton}>
                {card.ctaText} →
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.rightImage}>
              <img src={card.img} alt={card.type} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
