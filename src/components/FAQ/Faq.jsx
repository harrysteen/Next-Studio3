"use client";
import React, { useState } from "react";
import styles from "./Faq.module.css";

const services = [
  {
    title: "RESEARCH & DISCOVERY",
    metrics: [
      "Competitor & Market Analayis",
      "Usability & Accessbility Review",
      "User interviews & Surveys",
    ],
    image: "https://picsum.photos/900/400?random=20",
  },
  {
    title: "BRANDING & CREATIVE",
    metrics: [
      "Brand Identity",
      "Logo Design",
      "Visual Strategy",
    ],
    image: "https://picsum.photos/900/400?random=21",
  },
  {
    title: "DESIGNING USER EXPERIENCE",
    metrics: [
      "Wireframing",
      "Prototyping",
      "User Flows",
    ],
    image: "https://picsum.photos/900/400?random=22",
  },
  {
    title: "USER INTERFACE DESIGN",
    metrics: [
      "High-Fidelity Mockups",
      "Design Systems",
      "Interaction Design",
    ],
    image: "https://picsum.photos/900/400?random=23",
  },
  {
    title: "DEVELOPMENT",
    metrics: [
      "Frontend Engineering",
      "Backend Architecture",
      "CMS Integration",
    ],
    image: "https://picsum.photos/900/400?random=24",
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
          <span className={styles.sparkle}>✦</span> OUR SERVICES
        </div>
        <h2 className={styles.title}>
          <span className={styles.titleHighlight}>CREATING IMPACT</span> THROUGH<br />
          CONSISTENT COLLABORATION
        </h2>
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
                    <div className={styles.metrics}>
                      <span className={styles.metricText}>
                        {service.metrics[0]}
                      </span>
                      <div className={styles.metricLine}></div>
                      <span className={styles.metricText}>
                        {service.metrics[1]}
                      </span>
                      <div className={styles.metricLine}></div>
                      <span className={styles.metricText}>
                        {service.metrics[2]}
                      </span>
                    </div>

                    <div className={styles.imageWrap}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className={styles.image}
                      />
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