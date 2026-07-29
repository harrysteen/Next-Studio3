"use client";
import React, { useState } from "react";
import styles from "./Faq.module.css";
import SplitText from "./SplitText";

const services = [
  {
    title: "STRATEGY",
    metrics: [
      "Strategic Research and Discovery",
      "User Experience Research",
      "Brand Strategy and Positioning",
      "Marketing and Execution Strategy",
      "Product Strategy",
    ],
    image: "/home assets/statage.webp",
  },
  {
    title: "BRANDING",
    metrics: [
      "Visual Identity Systems",
      "Brand & Marketing Collateral",
      "Illustration & Mascot Design",
      "Motion Design",
    ],
    image: "/home assets/Branding.webp",
  },
  {
    title: "WEB",
    metrics: [
      "Information Architecture & User Flows",
      "Interface Design & Interactions",
      "Web Animations & Transitions",
      "Design Systems & Documentation",
      "Web Copywriting & UX Writing",
    ],
    image: "/home assets/web.webp",
  },
  {
    title: "PRODUCT",
    metrics: [
      "Interaction Architecture & Product Flows",
      "Interface Design & Micro-interactions",
      "Design Systems & Component Libraries",
      "Animated Product Visualisations",
      "Prototyping, Testing & User Validation",
    ],
    image: "/home assets/production.webp",
  },
  {
    title: "DEVELOPMENT",
    metrics: [
      "Backend Development",
      "Front-end Development",
      "Mobile Development",
      "CMS Development",
      "Generative AI & Machine Learning",
      "Quality Assurance & Maintenance",
    ],
    image: "/home assets/development.jpg",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className={styles.container} id="services">
      <div className={styles.header}>
        <div className={styles.subtitle}>
          <span className={styles.sparkle}>✦</span> WHAT WE OFFER
        </div>
        <h2 className={styles.title}>
          <SplitText
            text="CREATING IMPACT THROUGH CONSISTENT COLLABORATION"
            className={styles.splitTextHeading}
            delay={30}
            duration={0.8}
            ease="power3.out"
            splitType="words,chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            tag="span"
          />
        </h2>
        <p className={styles.headerDesc}>
          We work at individual intersections as well as the overall vision to drive results.
        </p>
      </div>

      <div className={styles.faqList}>
        {services.map((service, index) => {
          const isOpen = activeIndex === index;

          return (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqHeader}
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
              >
                <h3 className={styles.faqTitle}>{service.title}</h3>
                <span
                  className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
                ></span>
              </button>

              <div
                className={`${styles.faqContent} ${isOpen ? styles.open : ""}`}
              >
                {isOpen && (
                  <div className={styles.innerContent}>
                    <div className={styles.imageWrap}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.contentWrap}>
                      <div className={styles.pillGrid}>
                        {service.metrics.map((metric, i) => (
                          <div key={i} className={styles.pillBadge}>
                            <span className={styles.pillBadgeNumber}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className={styles.pillBadgeText}>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}