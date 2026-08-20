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
                <video
                  width="100%"
                  height="100%"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "8px" }}
                >
                  <source
                    src="https://www.dropbox.com/scl/fi/2n4huz273anu7h0fofmsg/Studio-Dezu-Website-Movie.mp4?rlkey=cgntjzct6tyq8k6mwksyw5os8&st=lo3k3y51&raw=1"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <span ref={textRef} className={styles.textContent}>
              Studio Dezu builds human-first digital products and systems that thrust innovative companies to success in the AI-first world.
              <span style={{ color: "#ABFF4F" }}>
                {" "}We build brands, products and systems that understand, adapt and evolve with your users and their preferences.
              </span>
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default MotionText;
