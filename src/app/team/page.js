"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Team.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import StickyNav from "../../components/StickyNav";
import teamImg from "./team-assets/team.png";
import get1Img from "../../team images/get-1.png";
import tokenMindImg from "../../team images/token_mind.png";

// Replaced static imports with standard public paths (using picsum wrappers for safety).
const heroImg = "https://picsum.photos/1200/800?random=1";
const sricity = "https://picsum.photos/100/100?random=2";
const Getimg2 = "https://picsum.photos/800/600?random=3";

const items = [
  { title: "STARTUPS", img: "/home assets/statage.webp" },
  { title: "FOUNDERS", img: "/home assets/ONGOING PARTNERSHIP.webp" },
  { title: "NON-TECHNICAL FOUNDERS", img: "/home assets/ONE-TIME ENGAGEMENTS.webp" },
  { title: "PRODUCT TEAMS", img: "/home assets/production.webp" },
  { title: "GROWING COMPANIES", img: "/ourwork/venturawork.webp" },
  { title: "AGENCIES", img: "/home assets/Branding.webp" },
  { title: "IT COMPANIES", img: "/home assets/development.webp" },
  { title: "ENTERPRISES", img: "/ourwork/siliconvalley.webp" },
  { title: "SAAS TEAMS", img: "/ourwork/mall360.webp" },
  { title: "GLOBAL CLIENTS", img: "/home assets/web.webp" },
];

const services = [
  { title: "BRANDING", icon: tokenMindImg.src || tokenMindImg },
  { title: "MARKETING", icon: tokenMindImg.src || tokenMindImg },
  { title: "TECH SUPPORT", icon: tokenMindImg.src || tokenMindImg },
  { title: "UX RESEARCH", icon: tokenMindImg.src || tokenMindImg },
  { title: "UI DESIGN", icon: tokenMindImg.src || tokenMindImg },
  { title: "DEVELOPMENT", icon: tokenMindImg.src || tokenMindImg },
];

const steps = [
  { number: 1, title: "DISCOVERY" },
  { number: 2, title: "DISCOVERY" },
  { number: 3, title: "DISCOVERY" },
  { number: 4, title: "DISCOVERY" },
  { number: 5, title: "DISCOVERY" }
];

const GetyourownTeam = () => {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let closestDistance = Infinity;

      refs.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;
        const distance = Math.abs(screenCenter - elementCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.Getyourownteam}>
      <section className={styles["getyouownteam-main"]}>
        <Navbar />
        {/* <StickyNav /> */}

        <div className={styles["hero-container"]}>
          <h1 className={styles["hero-title"]}>
            GET YOUR OWN TEAM
          </h1>
          <p className={styles["hero-subtitle"]}>
            Growing Companies Need Teams That Move Fast,<br />
            Think Strategically, And Stay Aligned As Things Evolve.
          </p>
          <button className={styles["hero-btn"]}>GET STARTED</button>

          {/* Illustrator Team Graphic */}
          <div className={styles["hero-graphic"]}>
            <img src={teamImg.src} alt="Team Characters" className={styles["illustrator-img"]} />
          </div>
        </div>

      </section>

      {/* section -2 */}
      <section className={styles.designed}>
        <div className={styles.sectionHeader}>
          <h2>
            <span>DESIGNED</span>
            <br />
            TO DELIVER
          </h2>
        </div>

        <div className={styles["designed-container"]}>
          {/* LEFT CONTENT - IMAGE */}
          <div className={styles["designed-left"]}>
            <img
              src={get1Img.src || get1Img}
              alt="team"
              className={styles["team-img"]}
            />
          </div>

          {/* RIGHT CONTENT - FEATURES */}
          <div className={styles["designed-right"]}>
            <div className={styles.feature}>
              <h3>FLEXIBILITY</h3>
              <p>
                Scale your team up or down anytime based on your project needs. Whether you
                need one specialist or a full cross-functional
                team, we adapt without long-term commitments, delays, or hiring overhead.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>COHESIVE</h3>
              <p>
                Our team works as a single unit, aligned with your goals, processes, and
                culture. With clear communication and shared ownership,
                you get consistent quality and faster execution—just like an in-house team.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>ADAPTABLE</h3>
              <p>
                We quickly adjust to changing requirements, tools, and timelines. As your business evolves,
                your team evolves with it without slowing down delivery or compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section-3 */}
      <section className={styles["whos-for"]}>
        <div className={styles["whos-title"]}>
          <h2>
            WHO’S <br /> THIS FOR
          </h2>
        </div>
        <div className={styles["whos-container"]}>
          {/* TEXT LIST */}
          <div className={styles["whos-list"]}>
            {items.map((item, index) => (
              <h3
                key={index}
                ref={(el) => (refs.current[index] = el)}
                className={active === index ? styles.active : ""}
                onMouseEnter={() => setActive(index)}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </h3>
            ))}
          </div>

          {/* IMAGE */}
          <div className={styles["whos-image"]}>
            <img
              key={active}
              src={items[active].img}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* section-4 */}
      <section className={styles["help-section"]}>
        <div className={styles["help-container"]}>
          <div className={styles["help-title"]}>
            <h2>
              WE CAN <br />
              <span>HELP</span> WITH
            </h2>
          </div>
          <div className={styles["help-grid"]}>
            {services.map((item, index) => (
              <div className={styles["help-card"]} key={index}>
                <div className={styles["help-icon"]}>
                  <img src={item.icon} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>
                  We design with your audience in mind, ensuring every
                  interaction is intuitive, engaging, and memorable.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section-5 */}
      <section className={styles.engagement}>
        <div className={styles["engagement-title"]}>
          <h2>ENGAGEMENT DETAILS</h2>
        </div>
        <div className={styles["engagement-grid"]}>
          {/* LEFT CARD */}
          <div className={`${styles["eng-card"]} ${styles.large}`}>
            <h3>
              150<span>hr</span>
            </h3>
            <h4>HUMAN-CENTERED DESIGN</h4>
            <p>
              We design with your audience in mind, ensuring every
              interaction is intuitive, engaging, and memorable.
            </p>
          </div>

          {/* CENTER TOP */}
          <div className={`${styles["eng-card"]} ${styles.small}`}></div>

          {/* RIGHT CARD */}
          <div className={`${styles["eng-card"]} ${styles.large}`}>
            <h3>
              6<span>months</span>
            </h3>
            <h4>PROVEN EXPERTISE RECORD</h4>
            <p>
              We design with your audience in mind, ensuring every
              interaction is intuitive, engaging, and memorable.
            </p>
          </div>

          {/* CENTER BOTTOM */}
          <div className={`${styles["eng-card"]} ${styles.small}`}></div>
        </div>
      </section>

      {/* section-6 */}
      <section className={styles["steps-section"]}>
        <div className={styles["steps-title"]}>
          <h2>
            GET YOUR TEAM <br />
            IN <span>5 STEPS</span>
          </h2>
        </div>
        <div className={styles["steps-container"]}>
          {steps.map((step, index) => (
            <div className={styles["step-item"]} key={index}>
              <div className={styles["step-circle"]}>
                {step.number}
              </div>
              <p>{step.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* section-7 */}
      <section className={styles["engagement-models"]}>
        <div className={styles["models-title"]}>
          <h2>
            OTHER POPULAR <br />
            <span>ENGAGEMENT</span> MODELS
          </h2>
        </div>
        <div className={styles["models-grid"]}>
          {/* CARD 1 */}
          <div className={styles["model-card"]}>
            <h3>ONE-TIME ENGAGEMENTS</h3>
            <p className={styles.subtitle}>
              For clarity, speed, and decisive momentum.
            </p>
            <p className={styles.desc}>
              Ideal when you need sharp thinking, fast alignment, or a strong
              starting point. We step in, diagnose, design, and hand over
              with precision—no loose ends.
            </p>
            <h4>Best for Teams that</h4>
            <ul>
              <li>Have clear requirements</li>
              <li>Need fresh perspective</li>
              <li>Need clarity and quick strategy</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className={styles["model-card"]}>
            <h3>DYNAMIC RETAINERS</h3>
            <p className={styles.subtitle}>
              For companies that are evolving in real time.
            </p>
            <p className={styles.desc}>
              We work as an extended design strategy arm. You get
              senior thinking, consistent execution, and room to grow
              without renegotiating every move.
            </p>
            <h4>Best for Teams that</h4>
            <ul>
              <li>Scaling products</li>
              <li>Growing teams</li>
              <li>Ongoing design leadership requirement</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />

      {/* Bottom Nav for Desktop/Tablet */}
      <nav className={styles.bottomNav} aria-label="Primary Navigation">
        <Link href="/work" className={styles.navLink}>Work</Link>
        <Link href="/team" className={styles.navLink}>Get Your Own Team</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/dezu" className={styles.navLink}>Dezu</Link>
      </nav>
    </div>
  );
};

export default GetyourownTeam;
