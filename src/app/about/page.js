"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";

import himajaImg from "../../team images/himaja mam.webp";
import bhavanaImg from "../../team images/Bhavana mam.webp";
import kumarImg from "../../team images/kumar profile.jpeg";
import bhanuImg from "../../team images/bhanu.png";
import bunnyImg from "../../team images/bunny.png";
import rakeshImg from "../../team images/rakesh.png";
import rishitaImg from "../../team images/risitha.png";
import sunnyImg from "../../team images/sunny.png";
import vishwaImg from "../../team images/vishawa.png";
import worldMapImg from "../../team images/World Map & stat.png";
import aboutImg3 from "../../team images/About Team img3.jpeg";
import aboutImg4 from "../../team images/About Team img4.jpeg";
import aboutImg5 from "../../team images/About Team img5.jpeg";
import aboutImg6 from "../../team images/About Team img6.jpeg";
import aboutImg7 from "../../team images/About Team img7.jpeg";
import aboutImg8 from "../../team images/About Team img8.png";
import teamImg from "../../team images/Team Image.png";

const img1 = aboutImg3.src || aboutImg3;
const img2 = aboutImg4.src || aboutImg4;
const img3 = aboutImg5.src || aboutImg5;
const img4 = aboutImg6.src || aboutImg6;
const img5 = teamImg.src || teamImg;
const map = worldMapImg.src || worldMapImg;
const girl = aboutImg7.src || aboutImg7;
const img8 = aboutImg8.src || aboutImg8;

const teamData = [
  {
    name: "Himajaa",
    role: "",
    bio: (
      <>
        Hi, I am the <span style={{ color: "#9cff3b", fontWeight: "bold" }}>CEO</span>. I am obsessed with reading and dissecting perspectives.
      </>
    ),
    image: himajaImg.src || himajaImg
  },
  {
    name: "Bhavana",
    role: "",
    bio: (
      <>
        Hello, I am the <span style={{ color: "#9cff3b", fontWeight: "bold" }}>Creative Head</span>. Art is my therapy. I wear the creative hats in the company.
      </>
    ),
    image: bhavanaImg.src || bhavanaImg
  },
  {
    name: "Kumar",
    role: "",
    bio: (
      <>
        Hi, I am the <span style={{ color: "#9cff3b", fontWeight: "bold" }}>Senior Developer</span>. Everything about technology excites me. I love learning and building exciting things.
      </>
    ),
    image: kumarImg.src || kumarImg
  },
  {
    name: "Rishita",
    role: "",
    bio: (
      <>
        Hi, I am a <span style={{ color: "#9cff3b", fontWeight: "bold" }}>Senior Designer</span>. I enjoy strategy and designing for processes and doing little art pieces as a hobby.
      </>
    ),
    image: rishitaImg.src || rishitaImg
  },
  {
    name: "Sunny",
    role: "",
    bio: (
      <>
        Hello, I am a <span style={{ color: "#9cff3b", fontWeight: "bold" }}>Senior Designer</span>. I love exploring and implementing new design trends and methods.
      </>
    ),
    image: sunnyImg.src || sunnyImg
  },
  {
    name: "Bhanu",
    role: "",
    bio: (
      <>
        Hey, I am a <span style={{ color: "#9cff3b", fontWeight: "bold" }}>Senior Designer</span>. I love solving creative challenges and driving teams to achieve our best output.
      </>
    ),
    image: bhanuImg.src || bhanuImg
  },
  {
    name: "Rakesh",
    role: "",
    bio: (
      <>
        Hi, I am a <span style={{ color: "#9cff3b", fontWeight: "bold" }}>Senior Designer</span>. I thrive on building visually stunning brands and identities for various companies.
      </>
    ),
    image: rakeshImg.src || rakeshImg
  },
  {
    name: "Siddartha",
    role: "",
    bio: (
      <>
        Hey, I am a <span style={{ color: "#9cff3b", fontWeight: "bold" }}>UI/UX Designer</span>. I enjoy creating unique, user-centered experiences that are visually engaging, easy to use, and designed to leave a lasting impression.
      </>
    ),
    image: bunnyImg.src || bunnyImg
  },
  {
    name: "Viswa",
    role: "",
    bio: (
      <>
        Hi, I'm a <span style={{ color: "#9cff3b", fontWeight: "bold" }}>UI/UX Designer</span>. I enjoy creating unique, user-centered experiences that are visually engaging, easy to use, and designed to leave a lasting impression.
      </>
    ),
    image: vishwaImg.src || vishwaImg
  }
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
            WE WORK AT THE INTERSECTION OF STRATEGY AND DESIGN FOR EMERGING TECHNOLOGIES.
          </h2>
          <div className={styles.slider}>
            <div className={styles["slide-track"]}>
              <img src={img1} className={styles["img-tall"]} alt="" />
              <img src={img2} className={styles["img-small"]} alt="" />
              <img src={img3} className={styles["img-tall"]} alt="" />
              <img src={img4} className={styles["img-tall"]} alt="" />
              <img src={img8} className={styles["img-small"]} alt="" />
              {/* duplicate for infinite loop */}
              <img src={img1} className={styles["img-tall"]} alt="" />
              <img src={img2} className={styles["img-small"]} alt="" />
              <img src={img3} className={styles["img-tall"]} alt="" />
              <img src={img4} className={styles["img-tall"]} alt="" />
              <img src={img8} className={styles["img-small"]} alt="" />
            </div>
          </div>
        </section>

        {/* ********************* section-2 ********************* */}
        <section className={styles["story-section"]}>
          <div className={styles["story-container"]}>
            <p className={styles["story-label"]}>✦ Our Story</p>
            <h2 className={styles["story-text"]}>
              <span>IN A WORLD THAT IS BECOMING INCREASINGLY AI DISRUPTED, THE COMPANIES THAT THRIVE ARE THE ONES THAT PRIORITISE THEIR <span style={{ textDecoration: "underline", textDecorationColor: "#9cff3b", textUnderlineOffset: "6px", textDecorationThickness: "3px" }}>USER.</span></span>{" "}
              AT STUDIO DEZU, WE BELIEVE IN A HUMAN-FIRST APPROACH. OUR PROCESSES ARE ROOTED IN EMPATHY AND GENUINE DISCOVERY. WE UNDERSTAND THE COMPLEXITY AND DYNAMISM OF DIFFERENT TEAMS AND BUILD STRATEGIC PARTNERSHIPS THAT WORK AND ADAPT WITH TIME.
            </h2>
            <div className={styles["story-image"]}>
              <img src={img5} alt="Studio Dezu Team" />
            </div>
          </div>
        </section>

        {/* ********************* section-3 ********************* */}
        <section className={styles["future-section"]}>
          <div className={styles["future-container"]}>
            <h2 className={styles["future-title"]}>
              TIMESTAMPS FROM OUR <span>JOURNEY</span>
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
                  2021
                </div>
                <div className={styles["timeline-content"]}>
                  <h3>WHEN WE STARTED</h3>
                  <p>
                    Studio Dezu was started as a passion project. The idea was to use strategy and storytelling to help businesses transform.
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
                  45+
                </div>
                <div className={styles["timeline-content"]}>
                  <h3>CLIENTS THAT WE HELPED</h3>
                  <p>
                    We worked with companies with vastly different requirements and complexities over the years.
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
                  10+
                </div>
                <div className={styles["timeline-content"]}>
                  <h3>INDUSTRIES WE HAVE TOUCHED</h3>
                  <p>
                    Our work spreads across multiple key industries. Our experience is rich and varied.
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
              <h3 className={styles["global-subtitle"]}>OUR HOME BASE IS IN INDIA BUT WE OPERATE ACROSS THE GLOBE.</h3>
              <p className={styles["global-text"]}>
                Our obsession with understanding users expanded our horizons. We ventured far out from our home base to solve for different problems in different countries. Our work now spans across India, USA, APAC and UAE.
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
                  <div
                    className={styles["flip-front"]}
                    style={{ backgroundImage: `url('${member.image}')`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
                  >
                  </div>
                  {/* BACK */}
                  <div className={styles["flip-back"]}>
                    <h3>{member.name}</h3>
                    <p className={styles["member-role"]}>{member.role}</p>
                    {member.bio && <p className={styles["member-bio"]}>{member.bio}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* /*****************section-6 ************************************** */}
        <section className={styles["trust-section"]}>
          <h2 className={styles["trust-title"]}>
            OUR VALUES ARE WHAT <br />
            <span>MAKE US VALUABLE</span>
          </h2>
          <div className={styles["trust-grid"]}>
            <div className={styles.card}>
              <div className={styles.icon}>⬢</div>
              <h3>HUMAN BY DESIGN</h3>
              <p>
                We design for how humans think, feel, and behave. So our products are intuitive,
                communication is clear, and systems actually get used.
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
              <h3>PROOF OVER PROMISES</h3>
              <p>
                We measure our work by what changes after it ships clarity improves,
                teams move faster, and growth becomes easier to sustain.
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
