import React from "react";
import styles from "./Articals.module.css";

const articles = [
  {
    id: 1,
    date: "Jan 27, 2025",
    title: "What's Next In The Digital Design",
    readTime: "4min read",
    excerpt: "Every designer has real-world project experience, ensuring they know how to tackle practical design challenges.",
    authorName: "Bhanu chandu billa",
    authorRole: "UIUX Designer @studio dezu",
    authorImage: "https://picsum.photos/100/100?random=40",
    image: "https://picsum.photos/600/800?random=50"
  },
  {
    id: 2,
    date: "Feb 02, 2025",
    title: "Mastering Spatial Interfaces in 2025",
    readTime: "6min read",
    excerpt: "Exploring the boundaries of 3D spatial UI and how users interact with augmented elements through natural gestures.",
    authorName: "Aarav Sharma",
    authorRole: "Product Designer @studio dezu",
    authorImage: "https://picsum.photos/100/100?random=41",
    image: "https://picsum.photos/600/800?random=51"
  },
  {
    id: 3,
    date: "Feb 15, 2025",
    title: "Building Scalable Design Systems",
    readTime: "5min read",
    excerpt: "Learn the core methodologies behind sustaining design libraries that grow seamlessly alongside enterprise applications.",
    authorName: "Mia Chen",
    authorRole: "Frontend Engineer @studio dezu",
    authorImage: "https://picsum.photos/100/100?random=42",
    image: "https://picsum.photos/600/800?random=52"
  }
];

export default function Articals() {
  return (
    <section className={styles.container} id="articles">
      <div className={styles.header}>
        <h2 className={styles.subtitle}>OUR LATEST</h2>
        <h2 className={styles.title}>ARTICLES & RESOURCES</h2>
      </div>

      <div className={styles.grid}>
        {articles.map((article) => (
          <div key={article.id} className={styles.card}>
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

          </div>
        ))}
      </div>
    </section>
  );
}
