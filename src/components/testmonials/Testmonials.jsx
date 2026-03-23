"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from './Testmonials.module.css';

const testimonials = [
  {
    id: 1,
    text: "The team at Studio Dezu helped break down our complex financial content into easily understandable navigation for our clients. Their team worked closely with us to get everything right and ready for our clients.",
    name: "Prabha Srinivasan",
    role: "CEO, Ventura Pranas.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // Using generic placeholders
  },
  {
    id: 2,
    text: "We planned to rebrand after eight years. Our goal was to convey impact and relevance to the newer audiences. Studio Dezu built our new brand and website, without compromising on our original story or look and feel.",
    name: "Raghu Chejarla",
    role: "CEO and Co-Founder",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 3,
    text: "Their strategic approach to product design completely revolutionized how our users interact with our platform. The metrics speak for themselves: a 40% increase in retention within three months of the redesign.",
    name: "Sarah Jenkins",
    role: "VP of Product, High Cloud",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 4,
    text: "Absolutely phenomenal workflow. The communication was pristine from day one, and they delivered pixel-perfect interfaces that our development team could immediately begin building without any friction.",
    name: "Michael Chang",
    role: "CTO, NextGen Systems",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  }
];

export default function Testmonials() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll loop
  useEffect(() => {
    let animationId;
    const scrollStep = () => {
      // Pause auto-scroll when user is interacting
      if (isDragging) return;

      if (trackRef.current) {
        trackRef.current.scrollLeft += 1;
        
        // Endless loop: jump back to start seamlessly
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (trackRef.current.scrollLeft >= halfWidth) {
          trackRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply to scroll faster naturally
    trackRef.current.scrollLeft = scrollLeft - walk;

    // Handle endless wrap while dragging
    const halfWidth = trackRef.current.scrollWidth / 2;
    if (trackRef.current.scrollLeft <= 0) {
      trackRef.current.scrollLeft += halfWidth;
      setStartX(e.pageX);
      setScrollLeft(trackRef.current.scrollLeft);
    } else if (trackRef.current.scrollLeft >= halfWidth) {
      trackRef.current.scrollLeft -= halfWidth;
      setStartX(e.pageX);
      setScrollLeft(trackRef.current.scrollLeft);
    }
  };

  const CardsList = () => (
    <>
      {testimonials.map((t) => (
        <div key={t.id} className={styles.card}>
          <div className={styles.quoteIcon}>&ldquo;</div>
          <p className={styles.quoteText}>{t.text}</p>
          <div className={styles.cardFooter}>
            <div className={styles.authorInfo}>
              <h4 className={styles.authorName}>{t.name}</h4>
              <p className={styles.authorRole}>{t.role}</p>
            </div>
            <div className={styles.companyLogoWrap}>
              <img src={t.logo} alt="Company Logo" />
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          WHAT OUR <span className={styles.titleHighlight}>CLIENTS SAY</span>
        </h2>
      </div>

      <div className={styles.slider}>
        <div 
          className={styles.track}
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className={styles.trackInner}>
            <CardsList />
          </div>
          <div className={styles.trackInner}>
            <CardsList />
          </div>
        </div>
      </div>
    </section>
  );
}
