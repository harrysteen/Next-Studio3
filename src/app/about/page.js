"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";

// Replaced static imports with placeholder links so it doesn't crash
const img1 = "https://picsum.photos/400/600?random=1";
const img2 = "https://picsum.photos/400/600?random=2";
const img3 = "https://picsum.photos/400/600?random=3";
const img4 = "https://picsum.photos/400/600?random=4";
const img5 = "https://picsum.photos/800/400?random=5";
const map = "https://picsum.photos/800/400?random=6";
const girl = "https://picsum.photos/400/600?random=7";

const teamData = [
  { role: "Developer" },
  { role: "Designer" },
  { role: "UI Engineer" },
  { role: "Frontend Dev" },
  { role: "Backend Dev" },
  { role: "Product Designer" },
  { role: "QA Engineer" },
  { role: "UX Researcher" },
  { role: "DevOps" },
  { role: "Project Manager" }
];

const About2 = () => {

  useEffect(() => {
    const handleScroll = () => {
      const lines = document.querySelectorAll(`.${styles.line}`);
      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight * 0.8;
        const end = windowHeight * 0.2;
        let progress = (start - rect.top) / (start - end);
        progress = Math.max(0, Math.min(progress, 1));
        line.style.setProperty("--progress", progress);
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className={styles["About-us"]}>
      <Navbar />
      {/* <StickyNav /> */}

      <section className={styles["About-us-section"]}>
        <h2 className={styles["about-heading"]}>
          GOOD DESIGN SOLVES TODAY. <br />
          GREAT DESIGN SCALES TOMORROW.
        </h2>
        <div className={styles.slider}>
          <div className={styles["slide-track"]}>
            <img src={img1} className={styles["img-tall"]} alt="" />
            <img src={img2} className={styles["img-small"]} alt="" />
            <img src={img3} className={styles["img-tall"]} alt="" />
            <img src={img4} className={styles["img-tall"]} alt="" />
            <img src={img4} className={styles["img-small"]} alt="" />
            {/* duplicate for infinite loop */}
            <img src={img1} className={styles["img-tall"]} alt="" />
            <img src={img2} className={styles["img-small"]} alt="" />
            <img src={img3} className={styles["img-tall"]} alt="" />
            <img src={img4} className={styles["img-tall"]} alt="" />
            <img src={img4} className={styles["img-small"]} alt="" />
          </div>
        </div>
      </section>

      {/* ********************* section-2 ********************* */}
      <section className={styles["story-section"]}>
        <div className={styles["story-container"]}>
          <p className={styles["story-label"]}>✦ Our Story</p>
          <h2 className={styles["story-text"]}>
            WE STARTED STUDIO DEZU TO HELP COMPANIES THINK BETTER,
            NOT JUST LOOK BETTER.
            <span>
              WE UNDERSTAND EVOLVING TECHNOLOGIES, MARKETS AND EXPECTATIONS
            </span>
            TO DESIGN FOR CLARITY, MOMENTUM AND LONG-TERM ADVANTAGE.
          </h2>
          <div className={styles["story-image"]}>
            <img src={img5} alt="design workspace"/>
          </div>
        </div>
      </section>

      {/* ********************* section-3 ********************* */}
      <section className={styles["future-section"]}>
        <div className={styles["future-container"]}>
          <h2 className={styles["future-title"]}>
            SHAPING THE <br />
            <span>FUTURE</span> TOGETHER
          </h2>
          <div className={styles.timeline}>

            {/* Item 1 */}
            <div className={styles["timeline-item"]}>
              <div className={styles["timeline-left"]}>
                <div className={styles.circle}>
                  <span className={styles.star}>✦</span>
                </div>
                <div className={styles.line}></div>
              </div>
              <div className={styles["timeline-label"]}>
                What We Believe
              </div>
              <div className={styles["timeline-content"]}>
                <h3>STRONG OPINIONS. CLEAR DIRECTION.</h3>
                <p>
                  We believe design without strategy is guesswork. If it doesn't
                  move the business forward or scale with it, it's not finished.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className={styles["timeline-item"]}>
              <div className={styles["timeline-left"]}>
                <div className={styles.circle}>
                  <span className={styles.star}>✦</span>
                </div>
                <div className={styles.line}></div>
              </div>
              <div className={styles["timeline-label"]}>
                What We Do
              </div>
              <div className={styles["timeline-content"]}>
                <h3>HELPING COMPANIES DRIVE IMPACT <br/> THROUGH DESIGN</h3>
                <p>
                  Our work starts with defining direction and ends with systems,
                  products and brands that teams can run with.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className={styles["timeline-item"]}>
              <div className={styles["timeline-left"]}>
                <div className={styles.circle}>
                  <span className={styles.star}>✦</span>
                </div>
              </div>
              <div className={styles["timeline-label"]}>
                Who We're For
              </div>
              <div className={styles["timeline-content"]}>
                <h3>FOR BUILDERS WHO THINK IN SYSTEMS</h3>
                <p>
                  We work with founders, leaders and institutions building for
                  the long term — where design is capability, not cosmetic.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* **************           section -4           *************** */}
      <section className={styles["global-section"]}>
      <h2 className={styles["global-title"]}>
            <span>GLOBAL</span> BY DEFAULT.
          </h2>
      <div className={styles["global-container"]}>
        {/* LEFT CONTENT */}
        <div className={styles["global-left"]}>
          <h3 className={styles["global-subtitle"]}>BUILT IN INDIA.</h3>
          <h4 className={styles["global-heading"]}>
            OPERATING ACROSS THE <br /> OCEANS
          </h4>
          <p className={styles["global-text"]}>
            We collaborate with teams across geographies, cultures and time zones
            designing with global ambition and local context. Logistics are
            solvable. Alignment is the real work.
          </p>
        </div>
        {/* MAP */}
        <div className={styles["global-map"]}>
          <img src={map} alt="world map" />
        </div>
      </div>
      </section>

      {/* *********************** secton-5 ****************************** */}
      <section className={styles["team-section"]}>
        <h2 className={styles["team-title"]}>
          MULTIPLE MINDS. ONE ORGANISM.
        </h2>
        <div className={styles["team-grid"]}>
          {teamData.map((member, index) => (
            <div className={styles["flip-card"]} key={index}>
              <div className={styles["flip-inner"]}>
                {/* FRONT */}
                <div className={styles["flip-front"]}>
                </div>
                {/* BACK */}
                <div className={styles["flip-back"]}>
                  <h3>Hi 👋</h3>
                  <p>I am the {member.role}</p>
                  <p>in this team</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* /*****************section-6 ************************************** */ }
      <section className={styles["trust-section"]}>
        <h2 className={styles["trust-title"]}>
          WE BUILD TRUST <br />
          AND <span>DRIVE RESULTS</span>
        </h2>
        <div className={styles["trust-grid"]}>
          <div className={styles.card}>
            <div className={styles.icon}>⬢</div>
            <h3>PROOF OVER PROMISES</h3>
            <p>
            We measure our work by what changes after it ships clarity improves, 
            teams move faster, and growth becomes easier to sustain.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>⬢</div>
            <h3>OWNERSHIP WITH OUTCOME</h3>
            <p>
            We take responsibility for impact, stay close to the work, and optimize until
             it does what it’s meant to do in the real world.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>⬢</div>
            <h3>DESIGNED TO PERFORM</h3>
            <p>
            Everything we create is built to drive real outcomes adoption,
            scale, and momentum. Not just visual approval.
            </p>
          </div>
          {/* IMAGE */}
          <div className={styles["image-box"]}>
            <img src={girl} alt="team" />
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>45+</h3>
                <p>Successful projects</p>
              </div>
              <div className={styles.stat}>
                <h3>4+</h3>
                <p>Countries</p>
              </div>
              <div className={styles.stat}>
                <h3>10x</h3>
                <p>Impact Created</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>⬢</div>
            <h3>HUMAN BY DESIGN</h3>
            <p>
            We design for how humans think, feel, and behave. So our products are intuitive,
             communication is clear, and systems actually get used.
            </p>
          </div>
        </div>
      </section>

      {/* *********************** section-7 ****************************** */}
      <section className={styles["behind-section"]}>
        <h2 className={styles["behind-title"]}>
          Behind the <span>scenes</span>
        </h2>
        <div className={styles["behind-gallery"]}>
          <div className={`${styles["behind-card"]} ${styles.card1}`}>
            <img src={img1} alt="" />
          </div>
          <div className={`${styles["behind-card"]} ${styles.card2}`}>
            <img src={img2} alt="" />
          </div>
          <div className={`${styles["behind-card"]} ${styles.card3}`}>
            <img src={img3} alt="" />
          </div>
          <div className={`${styles["behind-card"]} ${styles.card4}`}>
            <img src={img4} alt="" />
          </div>
          <div className={`${styles["behind-card"]} ${styles.card5}`}>
            <img src={img5} alt="" />
          </div>
        </div>
      </section>

      <Footer />

      {/* Bottom Nav for Desktop/Tablet Consistency */}
      <nav className={styles.bottomNav} aria-label="Primary Navigation">
        <Link href="/work" className={styles.navLink}>Work</Link>
        <Link href="/team" className={styles.navLink}>Get Your Own Team</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/dezu" className={styles.navLink}>Dezu</Link>
      </nav>
    </div>
    </>
  );
};

export default About2;
