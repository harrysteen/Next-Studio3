"use client";
import React, { useRef, useState, useEffect } from 'react';
import styles from './Testmonials.module.css';

// Import client logos
import venturaLogo from '../../home assets/ventura.jpg';
import highCloudLogo from '../../home assets/high cloud.jpg';
import tieLogo from '../../home assets/tie.jpg';
import brewshotLogo from '../../home assets/brewshot.jpg';
import kshatriyasLogo from '../../home assets/kshatriyass.jpg';
import leiutisLogo from '../../home assets/leiutis.jpg';

const testimonials = [
  {
    id: 1,
    text: "The team at Studio Dezu helped break down our complex financial content into easily understandable navigation for our clients. Their team worked closely with us to get everything right and ready for our clients.",
    name: "Prabha Srinivasan",
    role: "CEO, Ventura Pranas.",
    logo: venturaLogo.src,
  },
  {
    id: 2,
    text: "We planned to rebrand after eight years. Our goal was to convey impact and relevance to the newer audiences. Studio Dezu built our new brand and website, without compromising on our original story or look and feel.",
    name: "Raghu Chejarla",
    role: "CEO and Co-Founder",
    logo: highCloudLogo.src,
  },
  {
    id: 3,
    text: "We worked with Studio Dezu to revamp TiE Silicon Valley's website and they have done a great job in delivering our brief. They had elaborate discovery sessions with all our team members and helped redo our brand and storytelling narrative.",
    name: "Anita Manwani",
    role: "President of TiE Silicon Valley & Vice Chair of TiE Global",
    logo: tieLogo.src,
  },
  {
    id: 4,
    text: "They created a fun and appealing website for our cafe.",
    name: "Arun Nanda",
    role: "Founder of Brewshot Cafe",
    logo: brewshotLogo.src,
  },
  {
    id: 5,
    text: "Studio Dezu executed our vision perfectly. Our brand and website redesign came out the way we had envisioned",
    name: "Ravi Mudunuri",
    role: "CEO of Keylent",
    logo: kshatriyasLogo.src,
  },
  {
    id: 6,
    text: "Studio Dezu helped us create interesting communication material for our team. They were very analytical and strategic about the whole process. We got what we wanted in the end.",
    name: "K Chadrasekhar Rao",
    role: "CEO and Founder Leiutis",
    logo: leiutisLogo.src,
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
            <img src={t.logo} alt="Company Logo" className={styles.companyLogo} />
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
