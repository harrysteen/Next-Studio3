"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { articlesData } from "../../data/articlesData";
import styles from "./blogs.module.css";

const categories = ["ALL", "DESIGN", "SPATIAL UI", "SYSTEMS", "AI & TECH", "DEVELOPMENT"];

function BlogsContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    const idParam = searchParams.get("id");
    if (idParam) {
      const found = articlesData.find((a) => a.id === parseInt(idParam, 10));
      if (found) {
        setActiveArticle(found);
      }
    }
  }, [searchParams]);

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      selectedCategory === "ALL" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.authorName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* HERO HEADER */}
      <section className={styles.heroSection}>
        <div className={styles.subtitle}>
          <span>✦</span> INSIGHTS & RESOURCES
        </div>
        <h1 className={styles.title}>EXPLORE OUR LATEST THINKING</h1>
        <p className={styles.description}>
          Deep dives into UI/UX design, spatial computing, scalable design systems, artificial intelligence, and modern web engineering.
        </p>
      </section>

      {/* CONTROLS (SEARCH & CATEGORIES) */}
      <div className={styles.controlsWrapper}>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search articles by title, topic, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ""
                }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ARTICLES GRID */}
      <section className={styles.gridSection}>
        {filteredArticles.length > 0 ? (
          <div className={styles.grid}>
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className={styles.card}
                onClick={() => setActiveArticle(article)}
              >
                <div className={styles.cardImageWrap}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className={styles.cardImage}
                  />
                  <span className={styles.categoryTag}>{article.category}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.excerpt}>{article.excerpt}</p>

                  <div className={styles.authorBox}>
                    <img
                      src={article.authorImage}
                      alt={article.authorName}
                      className={styles.authorAvatar}
                    />
                    <div>
                      <p className={styles.authorName}>{article.authorName}</p>
                      <p className={styles.authorRole}>{article.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            No articles found matching your criteria. Try adjusting your search or category filters.
          </div>
        )}
      </section>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveArticle(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setActiveArticle(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalHeader}>
              <span className={styles.modalCategory}>
                {activeArticle.category}
              </span>
              <h2 className={styles.modalTitle}>{activeArticle.title}</h2>
              <div className={styles.modalMeta}>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>By {activeArticle.authorName}</span>
              </div>
            </div>

            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className={styles.modalImage}
            />

            <div className={styles.modalBody}>{activeArticle.content}</div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function BlogsPage() {
  return (
    <Suspense fallback={<div style={{ color: "#fff", padding: "100px", textAlign: "center" }}>Loading Articles...</div>}>
      <BlogsContent />
    </Suspense>
  );
}
