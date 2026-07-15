"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Work.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import StickyNav from "../../components/StickyNav"; // Temporarily commented out as it wasn't found in components

// Replaced static imports with standard public paths.
// Please place these images in the "public" folder of your Next.js project.
// (e.g., my-next-studio/public/Silicon.webp)
const projects = [
  {
    img: "/tie silicon valley.webp",
    title: "TIE silicon valley",
    category: "Rebranding, UI/UX Design, Content Strategy",
    year: "2024",
    path: "/TieSiliconValley",
  },
  {
    img: "/ventura work.webp",
    title: "Ventura Pranas",
    category: "Finance",
    year: "2024",
    path: "/VenturaPranas",
  },
  {
    img: "/kshatriyas work.webp",
    title: "The Kshatriyas",
    category: "Community",
    year: "2025",
    path: "/TheKshatriyas",
  },
  {
    img: "/naeeamzafar.webp",
    title: "Naeem Zafar",
    category: "Personal Branding",
    year: "2023",
    path: "/NaeemZafar",
  },
  {
    img: "/mall360.webp",
    title: "Mall 360",
    category: "E-commerce",
    year: "2025",
    path: "/Mall360",
  },
  {
    img: "/ecomallwork.webp",
    title: "Ecomall",
    category: "E-commerce",
    year: "2023",
    path: "/Ecomall",
  },
  {
    img: "/highcloud work.webp",
    title: "HighCloud Solutions",
    category: "Technology",
    year: "2025",
    path: "/HighCloud",
  },
  {
    img: "/leiutis.webp",
    title: "Leiutis",
    category: "Healthcare",
    year: "2023",
    path: "/Leiutis",
  },
  {
    img: "/madboxwork.webp",
    title: "Mad Box",
    category: "Food",
    year: "2022",
    path: "/Madbox",
  },
];

const categories = [
  "ALL",
  "Education",
  "Community",
  "Technology",
  "Healthcare",
  "E-commerce",
  "Personal Branding",
  "Finance",
  "Food",
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className={styles.work}>
      <Navbar />
      {/* <StickyNav /> */}

      <section className={styles.workSection}>
        <h1 className={styles.workTitle}>
          SHOWCASING <br /> CREATIVE EXCELLENCE
        </h1>

        {/* FILTER BUTTONS */}
        <div className={styles.workFilters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? styles.active : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className={styles.workGrid}>
          {filteredProjects.map((item, index) => {
            const CardContent = (
              <>
                <div className={styles.workImg}>
                  <img src={item.img} alt={item.title} />
                </div>

                <div className={styles.workInfo}>
                  <div className={styles.workTop}>
                    <h3>{item.title}</h3>
                    <span>{item.year}</span>
                  </div>

                  <p>{item.category}</p>
                </div>
              </>
            );

            return item.path ? (
              <Link href={item.path} className={styles.workCard} key={index}>
                {CardContent}
              </Link>
            ) : (
              <div className={styles.workCard} key={index}>
                {CardContent}
              </div>
            );
          })}
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

export default Work;
