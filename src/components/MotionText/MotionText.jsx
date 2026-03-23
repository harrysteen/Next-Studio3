"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MotionText.module.css";

 

gsap.registerPlugin(ScrollTrigger);

const MotionText = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null); // The static floated placeholder
  const videoRef = useRef(null);   // The animated video container
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Hide the text initially
        gsap.set(textRef.current, { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1200", 
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true, 
          }
        });

        tl.fromTo(videoRef.current, 
          {
            x: () => {
              const vRect = wrapperRef.current.getBoundingClientRect();
              const sRect = sectionRef.current.getBoundingClientRect();
              const vCenterRelX = (vRect.left - sRect.left) + vRect.width / 2;
              return (window.innerWidth / 2) - vCenterRelX;
            },
            y: () => {
              const vRect = wrapperRef.current.getBoundingClientRect();
              const sRect = sectionRef.current.getBoundingClientRect();
              const vCenterRelY = (vRect.top - sRect.top) + vRect.height / 2;
              return (window.innerHeight / 2) - vCenterRelY;
            },
            scale: 2.2, 
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            ease: "power2.inOut",
            duration: 1
          }
        )
        // Fade in the text wrapping around it when video is shrinking
        .to(textRef.current, {
          opacity: 1,
          ease: "power2.inOut",
          duration: 0.5
        }, "<0.5"); 
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(videoRef.current, { clearProps: "all" });
        gsap.set(textRef.current, { clearProps: "all" });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.pageWrapper}>
      <section ref={sectionRef} className={styles.contentSection}>
        <div className={styles.contentInner}>
          <h2 className={styles.textHeading}>
            <div className={styles.videoFloat} ref={wrapperRef}>
              <div className={styles.videoInner} ref={videoRef}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/t865KSKdSDk?autoplay=1&mute=1&loop=1&playlist=t865KSKdSDk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <span ref={textRef} className={styles.textContent}>
              DESIGN moved from Pixels to Strategy and Speed. Today’s companies need
              strategic function, dynamic communication and
              <span style={{ color: "#ABFF4F" }}>
                {" "}connection. We fuse strategy, design, and storytelling to build brands
                and digital products built for growth.
              </span>
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default MotionText;
