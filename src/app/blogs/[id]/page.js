"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import useResponsive from "../../../hooks/useResponsive";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { articlesData } from "../../../data/articlesData";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { width } = useResponsive();

  const articleId = parseInt(params?.id, 10);
  const article = articlesData.find((a) => a.id === articleId) || articlesData[0];

  const [hoveredSocial, setHoveredSocial] = React.useState(null);

  const containerStyle = {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 35% 20%, rgba(61, 16, 108, 0.4), transparent 25%), radial-gradient(circle at 70% 40%, rgba(61, 16, 108, 0.4), transparent 25%), #130323",
    color: "#FFFFFF",
    paddingTop: width <= 768 ? "100px" : "140px",
    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
    overflowX: "hidden",
    position: "relative",
  };

  const contentWrapperStyle = {
    width: "90%",
    maxWidth: "960px",
    margin: "0 auto",
    paddingBottom: "100px",
  };

  const dateStyle = {
    fontSize: "14px",
    color: "#a0a0a0",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginBottom: "16px",
    fontWeight: 500,
  };

  const titleStyle = {
    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
    fontSize: width <= 480 ? "32px" : width <= 768 ? "44px" : "56px",
    fontWeight: 800,
    lineHeight: 1.15,
    textTransform: "uppercase",
    marginBottom: "24px",
    letterSpacing: "-0.5px",
    color: "#FFFFFF",
  };

  const subtitleStyle = {
    fontSize: width <= 480 ? "16px" : "18px",
    lineHeight: "1.7",
    color: "#b0b0b0",
    marginBottom: "40px",
    fontWeight: 400,
  };

  const authorShareRowStyle = {
    display: "flex",
    flexDirection: width <= 640 ? "column" : "row",
    alignItems: width <= 640 ? "flex-start" : "center",
    justifyContent: "space-between",
    gap: "24px",
    paddingTop: "20px",
    paddingBottom: "32px",
    borderTop: "1px solid rgba(255, 255, 255, 0.15)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
    marginBottom: "50px",
  };

  const authorBoxStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const authorAvatarStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  };

  const authorNameStyle = {
    fontSize: "16px",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: "1.2",
  };

  const authorRoleStyle = {
    fontSize: "13px",
    color: "#a0a0a0",
    marginTop: "2px",
  };

  const shareBoxStyle = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  };

  const shareLabelStyle = {
    fontSize: "12px",
    fontWeight: 700,
    color: "#9cff00",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  };

  const getSocialIconStyle = (key) => ({
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: hoveredSocial === key ? "1px solid #9cff00" : "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: hoveredSocial === key ? "#130323" : "#FFFFFF",
    backgroundColor: hoveredSocial === key ? "#9cff00" : "transparent",
    transition: "all 0.3s ease",
    cursor: "pointer",
  });

  const paragraphStyle = {
    fontSize: width <= 480 ? "16px" : "18px",
    lineHeight: "1.8",
    color: "#d4d4d4",
    marginBottom: "36px",
    fontWeight: 400,
  };

  const imageCardStyle = {
    position: "relative",
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
    marginBottom: "50px",
  };

  const sectionHeaderStyle = {
    fontSize: width <= 480 ? "24px" : width <= 768 ? "30px" : "36px",
    fontWeight: 700,
    color: "#9cff00",
    marginTop: "60px",
    marginBottom: "28px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    lineHeight: 1.25,
  };

  return (
    <div style={containerStyle}>
      <Navbar />

      <main style={contentWrapperStyle}>
        {/* BACK TO BLOGS BUTTON */}
        <div style={{ marginBottom: "30px" }}>
          <button
            onClick={() => router.push("/blogs")}
            style={{
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#FFFFFF",
              padding: "10px 20px",
              borderRadius: "30px",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#9cff00";
              e.currentTarget.style.color = "#9cff00";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            ← BACK TO ALL ARTICLES
          </button>
        </div>

        {/* DATE */}
        <div style={dateStyle}>{article.date}</div>

        {/* MAIN TITLE */}
        <h1 style={titleStyle}>{article.title}</h1>

        {/* SUBTITLE */}
        {article.subtitle && <p style={subtitleStyle}>{article.subtitle}</p>}

        {/* AUTHOR AND SHARE ROW */}
        <div style={authorShareRowStyle}>
          <div style={authorBoxStyle}>
            <img
              src={article.authorImage}
              alt={article.authorName}
              style={authorAvatarStyle}
            />
            <div>
              <div style={authorNameStyle}>{article.authorName}</div>
              <div style={authorRoleStyle}>{article.authorRole}</div>
            </div>
          </div>

          <div style={shareBoxStyle}>
            <span style={shareLabelStyle}>SHARE ON:</span>

            {/* LINKEDIN */}
            <div
              style={getSocialIconStyle("linkedin")}
              onMouseEnter={() => setHoveredSocial("linkedin")}
              onMouseLeave={() => setHoveredSocial(null)}
              title="Share on LinkedIn"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.6 1.6 0 1 0 1.6 1.6a1.6 1.6 0 0 0-1.6-1.6Z" />
              </svg>
            </div>

            {/* FACEBOOK */}
            <div
              style={getSocialIconStyle("facebook")}
              onMouseEnter={() => setHoveredSocial("facebook")}
              onMouseLeave={() => setHoveredSocial(null)}
              title="Share on Facebook"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </div>

            {/* INSTAGRAM */}
            <div
              style={getSocialIconStyle("instagram")}
              onMouseEnter={() => setHoveredSocial("instagram")}
              onMouseLeave={() => setHoveredSocial(null)}
              title="Share on Instagram"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </div>
        </div>

        {/* LEAD PARAGRAPH */}
        {article.leadParagraph && (
          <p style={{ ...paragraphStyle, fontWeight: 500, color: "#E0E0E0" }}>
            {article.leadParagraph}
          </p>
        )}

        {/* HERO / FEATURED MOCKUP IMAGE 1 */}
        {article.image && (
          <div style={imageCardStyle}>
            <img
              src={article.image}
              alt={article.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        )}

        {/* SECTIONS */}
        {article.sections && article.sections.map((sec, idx) => (
          <div key={idx}>
            <h2 style={sectionHeaderStyle}>
              <span>✦</span> {sec.heading}
            </h2>
            {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} style={paragraphStyle}>
                {p}
              </p>
            ))}

            {sec.image && (
              <div style={imageCardStyle}>
                <img
                  src={sec.image}
                  alt={sec.heading}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            )}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
