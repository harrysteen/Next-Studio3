"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Engagement.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Engagement() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(`.${styles.panel}`);

      panels.forEach((panel, index) => {
        const isLast = index === panels.length - 1;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          // For the last panel, we don't need to over-pin unless we want it to stay a bit,
          // but we can just pin it for less or not pin with extra spacing to remove the big gap.
          // Since it's the last one, maybe just end: "bottom bottom" or a much smaller duration.
          end: () => isLast ? "+=10" : `+=${window.innerHeight * (panels.length - index)}`,
          pin: true,
          pinSpacing: isLast,
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cardData = [
    {
      type: "ONE-TIME ENGAGEMENTS",
      title: "For clarity, speed, and decisive momentum.",
      desc: "Ideal when you need sharp thinking, fast alignment, or a strong starting point. We step in, diagnose, design, and hand over with precision—no loose ends.",
      bestFor: [
        "Have clear requirements",
        "Need fresh perspective",
        "Need clarity and quick strategy"
      ],
      img: "https://picsum.photos/800/600?random=30"
    },
    {
      type: "ONGOING PARTNERSHIP",
      title: "Continuous design evolution and support.",
      desc: "Perfect for scaling startups and enterprise teams needing a reliable, fully integrated design arm. We become an extension of your own product squad.",
      bestFor: [
        "Need a dedicated design team",
        "Continuous product iterations",
        "Long-term strategic growth"
      ],
      img: "https://picsum.photos/800/600?random=31"
    },
    {
      type: "RETAINER MODEL",
      title: "Flexible bandwidth. Uncompromising quality.",
      desc: "Reserve guaranteed hours per month for whatever design needs arise. A predictable, cost-effective way to keep your product aesthetics perfectly tuned.",
      bestFor: [
        "Fluctuating design needs",
        "Predictable monthly budgets",
        "Maintenance & minor updates"
      ],
      img: "https://picsum.photos/800/600?random=32"
    }
  ];

  return (
    <div ref={sectionRef} className={styles.scrollWrapper}>
      
      {/* Absolute header that sits at the top of the stack */}
      <div className={styles.header}>
        <div className={styles.subtitle}>
          <span>✦</span> OUR SERVICES
        </div>
        <h2 className={styles.title}>
          <span className={styles.titleHighlight}>ENGAGEMENT MODELS</span> - FLEXIBLE BY DESIGN
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
              <h4>Best for Teams that</h4>
              <ul>
                {card.bestFor.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.rightImage}>
              {/* Note: In production you would use next/image imported assets */}
              <img src={card.img} alt={card.type} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
