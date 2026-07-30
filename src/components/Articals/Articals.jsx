import React from "react";
import Link from "next/link";
import styles from "./Articals.module.css";
import { articlesData } from "../../data/articlesData";

export default function Articals() {
  const displayArticles = articlesData.slice(0, 3);

  return (
    <section className={styles.container} id="articles">
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>Our thoughts, ideas and perspectives.</h2>
        </div>
        <Link href="/blogs" className={styles.viewAll}>
          VIEW ALL
        </Link>
      </div>

      <div className={styles.grid}>
        {displayArticles.map((article) => (
          <Link key={article.id} href={`/blogs?id=${article.id}`} className={styles.card}>
            <div className={styles.cardImageWrap}>
               <img src={article.image} alt={article.title} className={styles.cardImage} />
            </div>
            <div className={styles.overlay}></div>
            
            {/* Default State (Top Aligned) */}
            <div className={styles.contentNormal}>
              <span className={styles.date}>{article.date}</span>
              <h3 className={styles.cardTitle}>{article.title}</h3>
            </div>

            {/* Hover State (Bottom Aligned) */}
            <div className={styles.contentHover}>
              <span className={styles.readTime}>{article.readTime}</span>
              <p className={styles.excerpt}>{article.excerpt}</p>
              
              <div className={styles.authorBox}>
                <img 
                  src={article.authorImage} 
                  alt={article.authorName} 
                  className={styles.authorAvatar} 
                />
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{article.authorName}</p>
                  <p className={styles.authorRole}>{article.authorRole}</p>
                </div>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}
