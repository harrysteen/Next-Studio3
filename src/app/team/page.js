"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Team.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import getYourTeamImg from "../../team images/get your team.webp";
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
  {
    title: "BRAND DESIGNERS",
    desc: "They create brand identities that feel clear, consistent, and true to what the business stands for.",
    icon: tokenMindImg.src || tokenMindImg
  },
  {
    title: "DESIGN STRATEGISTS",
    desc: "They work with your teams to understand the business and find the right design direction.",
    icon: tokenMindImg.src || tokenMindImg
  },
  {
    title: "MARKETING SPECIALISTS",
    desc: "They help launch campaigns and content that help the brand reach the right people and grow.",
    icon: tokenMindImg.src || tokenMindImg
  },
  {
    title: "MOTION DESIGNERS",
    desc: "They turn ideas into engaging animations and videos that make the brand and product more interesting.",
    icon: tokenMindImg.src || tokenMindImg
  },
  {
    title: "UX RESEARCHERS",
    desc: "They understand your users and study their needs to understand what works and what needs to change.",
    icon: tokenMindImg.src || tokenMindImg
  },
  {
    title: "UI DESIGNERS",
    desc: "They design clean, simple, and easy-to-use interfaces across websites and digital products.",
    icon: tokenMindImg.src || tokenMindImg
  },
  {
    title: "FRONT-END DEVELOPERS",
    desc: "They turn designs into responsive websites and digital products that work smoothly across devices.",
    icon: tokenMindImg.src || tokenMindImg
  },
  {
    title: "BACK-END DEVELOPERS",
    desc: "They build the systems behind the product that keep everything running reliably.",
    icon: tokenMindImg.src || tokenMindImg
  },
  {
    title: "PRODUCT MANAGERS",
    desc: "They bring the team together, keep the work on track, and make sure the product solves the right problem.",
    icon: tokenMindImg.src || tokenMindImg
  }
];

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    desc: "Share your goals, project, timeline, and the kind of team you’re looking for."
  },
  {
    number: "02",
    title: "We Build Your Team",
    desc: "We handpick the right designers, developers, strategists, and specialists for your needs."
  },
  {
    number: "03",
    title: "Meet Your Team",
    desc: "Review the team, meet the people involved, and make sure they’re the right fit."
  },
  {
    number: "04",
    title: "Start Working",
    desc: "Once you’re happy, your team gets to work and we manage the process from start to finish."
  },
  {
    number: "05",
    title: "Scale When You Need To",
    desc: "Add new skills, change team size, or adjust your team as your business grows."
  }
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
            GET YOUR OWN CREATIVE TEAM
          </h1>
          <p className={styles["hero-subtitle"]}>
            Every company has creative requirements that are unique and evolving. We curate teams that understand and adapt to your constraints and complexity. <strong>They work and grow with your company under our expert guidance.</strong>
          </p>
          <button className={styles["hero-btn"]}>GET STARTED</button>

          {/* Illustrator Team Graphic */}
          <div className={styles["hero-graphic"]}>
            <img src={getYourTeamImg.src || getYourTeamImg} alt="Team Characters" className={styles["illustrator-img"]} />
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
          <p className={styles.sectionSub}>
            We bring together expert teams with complementary skillsets. They collaborate and build as one extended unit.
          </p>
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
              <h3>STRATEGISTS</h3>
              <p className={styles.featureSub}>Strategy brings clarity.</p>
              <p>
                Our strategists delve deep into your user, company, requirement and results. They create a clear roadmap to drive results.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>DESIGNERS</h3>
              <p className={styles.featureSub}>Design brings creativity.</p>
              <p>
                Our designers bring the roadmap to vision. They create brands and products that ensure appealing experiences and measurable impact.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>DEVELOPERS</h3>
              <p className={styles.featureSub}>Technology brings scale.</p>
              <p>
                Our developers build technology that scales your business and experience. They are skilled across various technical disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section-3 */}
      <section className={styles["whos-for"]}>
        <div className={styles["whos-title"]}>
          <h2>
            WHO’S THIS FOR
          </h2>
        </div>

        {/* MOBILE CATEGORY PILLS + FEATURE CARD */}
        <div className={styles["whos-mobile-wrapper"]}>
          <div className={styles["whos-pills"]}>
            {items.map((item, index) => (
              <button
                key={index}
                className={`${styles["whos-pill"]} ${active === index ? styles["whos-pill-active"] : ""}`}
                onClick={() => setActive(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className={styles["whos-mobile-card"]}>
            <div className={styles["whos-mobile-img-wrap"]}>
              <img
                key={active}
                src={items[active].img}
                alt={items[active].title}
                className={styles["whos-mobile-img"]}
              />
            </div>
            <div className={styles["whos-mobile-card-title"]}>
              {items[active].title}
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
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
              THE TEAM <br />
              <span>CONSISTS OF</span>
            </h2>
          </div>
          <div className={styles["help-grid"]}>
            {services.map((item, index) => (
              <div className={styles["help-card"]} key={index}>
                <div className={styles["help-icon"]}>
                  <img src={item.icon} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section-5 */}
      <section className={styles.engagement}>
        <div className={styles["engagement-title"]}>
          <h2>
            HOW OUR TEAMS WORK AND <br />
            <span>FIT INTO YOUR ORGANISATION</span>
          </h2>
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
            GET YOUR EXTENDED <br />
            CREATIVE UNIT IN <span>5 STEPS</span>
          </h2>
        </div>
        <div className={styles["steps-container"]}>
          {steps.map((step, index) => (
            <div className={styles["step-item"]} key={index}>
              <div className={styles["step-circle"]}>
                {step.number}
              </div>
              <h3 className={styles["step-item-title"]}>{step.title}</h3>
              <p className={styles["step-item-desc"]}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* section-7 */}
      <section className={styles["engagement-models"]}>
        <div className={styles["models-title"]}>
          <h2>
            EXPLORE OUR OTHER <br />
            <span>MODES OF ENGAGEMENT</span>
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
            <Link href="/contact" className={styles["model-btn"]}>
              TALK TO US <span>→</span>
            </Link>
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
            <Link href="/contact" className={styles["model-btn"]}>
              TALK TO US <span>→</span>
            </Link>
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
