"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useResponsive from "../../hooks/useResponsive";
import LatestWork from "../../components/LatestWork/LatestWork";
import WorkAccordion from "../../components/WorkAccordion/WorkAccordion";

export default function EhamPage() {
  const { width } = useResponsive();
  const [activeProcessImg, setActiveProcessImg] = useState(0);
  const [hoveredNavLink, setHoveredNavLink] = useState(null);

  const processImages = [
    "/work individual page assets/Highcloud UIUX Design.webp",
    "/work individual page assets/HighCloud Rebranding.webp",
    "/work individual page assets/hight cloud scrolling img1.svg",
    "/work individual page assets/hight cloud scrolling img3.svg",
  ];

  const containerStyle = {
    backgroundColor: "#1b0634",
    color: "#ffffff",
    minHeight: "100vh",
    fontFamily: "'Albert Sans', sans-serif",
    position: "relative",
    overflow: "hidden",
  };

  const heroSectionStyle = {
    height: width <= 768 ? "60vh" : "85vh",
    minHeight: width <= 768 ? "400px" : "600px",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: width <= 480 ? "0 20px 40px 20px" : width <= 768 ? "0 40px 60px 40px" : "0 80px 80px 80px",
    backgroundImage: `linear-gradient(to bottom, rgba(27, 6, 52, 0.2), rgba(27, 6, 52, 0.95)), url('/ourwork/highcloudwork.webp')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxSizing: "border-box"
  };

  const heroTitleStyle = {
    fontSize: width <= 480 ? "40px" : width <= 768 ? "64px" : width <= 1024 ? "90px" : "120px",
    fontWeight: 800,
    lineHeight: "0.95",
    textTransform: "uppercase",
    margin: "0 0 20px 0",
    letterSpacing: "-2px",
    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
  };

  const heroTaglineStyle = {
    fontSize: width <= 480 ? "16px" : "20px",
    color: "#9cff00",
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase",
  };

  const contentWrapperStyle = {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: width <= 480 ? "40px 0" : "80px 0",
  };

  const navbarStyle = {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 100,
    background: "transparent",
    backgroundColor: "transparent",
    borderBottom: "none",
  };

  const bottomNavStyle = {
    display: width <= 1024 ? "none" : "flex",
    position: "fixed",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 100,
    width: "539px",
    justifyContent: "space-around",
    alignItems: "center",
    height: "55px",
    backgroundColor: "#2A0B4B",
    gap: "30px",
    background: "rgba(20, 10, 35, 0.8)",
    borderRadius: "8px",
    border: "1px solid #9cff00",
    backdropFilter: "blur(10px)",
    borderColor: "#9cff00",
  };

  const getNavLinkStyle = (key) => {
    const isHovered = hoveredNavLink === key;
    return {
      fontFamily: "'Albert Sans', sans-serif",
      fontSize: "16px",
      fontWeight: 500,
      color: isHovered ? "#9cff00" : "#fff",
      transition: "color 0.2s ease",
      textDecoration: "none",
    };
  };

  return (
    <div style={containerStyle}>
      <Navbar style={navbarStyle} />

      {/* HERO SECTION */}
      <section style={heroSectionStyle}>
        <div>
          <h1 style={heroTitleStyle}>
            EHAM
          </h1>
          <span style={heroTaglineStyle}>@Hyderabad, India~2026</span>
        </div>
      </section>

      <main style={contentWrapperStyle}>

        {/* PROJECT OVERVIEW SECTION */}
        <section style={{
          display: "grid",
          gridTemplateColumns: width <= 1024 ? "1fr" : "1.5fr 1fr",
          gap: width <= 1024 ? "40px" : "120px",
          marginBottom: "80px",
          paddingTop: "60px",
        }}>
          <div>
            <h2 style={{
              color: "#9cff00",
              fontSize: width <= 480 ? "20px" : "24px",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "24px",
              fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
            }}>Project Overview</h2>
            <p style={{
              fontSize: width <= 480 ? "16px" : "18px",
              lineHeight: "1.8",
              color: "#e0e0e0",
              fontFamily: "'Albert Sans', sans-serif",
              fontWeight: 400,
            }}>
              The skill requirement for the tech industry is transforming drastically and traditional teams can not achieve the goals anymore. EHAM works as a POD system that deploys select teams based on dynamic requirements. The project shaped the messaging and branding of this disruptive service offering EHAM was providing.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a 
                href="http://www.eham.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: "#9cff00",
                  fontSize: "16px",
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px"
                }}
              >
                Visit Website: www.eham.tech ↗
              </a>
            </div>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}>
            <div>
              <h2 style={{
                color: "#9cff00",
                fontSize: width <= 480 ? "20px" : "24px",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "16px",
                fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
              }}>What We Did</h2>
              <p style={{
                fontSize: width <= 480 ? "16px" : "18px",
                lineHeight: "1.8",
                color: "#e0e0e0",
                fontFamily: "'Albert Sans', sans-serif",
              }}>
                Research and Strategy, Branding, Content Strategy, UI Design, Development
              </p>
            </div>
            <div>
              <h2 style={{
                color: "#9cff00",
                fontSize: width <= 480 ? "20px" : "24px",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "16px",
                fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
              }}>Industry</h2>
              <p style={{
                fontSize: width <= 480 ? "16px" : "18px",
                lineHeight: "1.8",
                color: "#e0e0e0",
                fontFamily: "'Albert Sans', sans-serif",
              }}>
                Technology
              </p>
            </div>
          </div>
        </section>

        {/* IMAGE SHOWCASE */}
        <section style={{
          width: "100%",
          height: width <= 768 ? "400px" : "70vh",
          minHeight: "400px",
          borderRadius: "16px",
          marginBottom: "80px",
          position: "relative",
          overflow: "hidden"
        }}>
          <img
            src="/ourwork/highcloudwork.webp"
            alt="EHAM Technology Platform Showcase"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top"
            }}
          />
        </section>

        {/* WHAT WE WORKED ON */}
        <section style={{
          marginBottom: "120px",
          display: "grid",
          gridTemplateColumns: width <= 1024 ? "1fr" : "1fr 1.2fr",
          gap: width <= 1024 ? "40px" : "80px",
          alignItems: "center"
        }}>
          <div>
            <h2 style={{
              fontSize: width <= 480 ? "32px" : "40px",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: "40px",
              fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
              lineHeight: 1.2
            }}>
              WHAT WE <span style={{ color: "#9cff00" }}>WORKED ON</span>
            </h2>

            <WorkAccordion
              items={[
                {
                  title: "RESEARCH AND STRATEGY",
                  desc: "Our initial steps were to understand the business model of EHAM- beginning to end. EHAM had a unique business model and a vision to be the trailblazers of modern technical hiring and project management."
                },
                {
                  title: "BRANDING AND VISUAL IDENTITY",
                  desc: "Cutting-edge, trailblazer, futuristic, reliable - we focused on packing all these keywords into the branding. Our goal was to make the user feel a vivid and immersive experience whenever they interacted with EHAM."
                },
                {
                  title: "UI AND LAYOUT DESIGN",
                  desc: "The theme for EHAM’s website was dynamic and speedy to convey the company’s offerings visually. We designed interactive layouts with motion blended into them to give the entire experience a futuristic and tech edge."
                },
                {
                  title: "DEVELOPMENT",
                  desc: "We built the code from scratch to ensure the interactive design was executed effectively. The backend is built for speed, responsiveness, flexibility and ease of management. The entire system also pins the brand positioning- structured, adaptable and fast."
                }
              ]}
              defaultActiveIndex={0}
              onChange={(idx) => setActiveProcessImg(idx !== null ? idx : 0)}
            />
          </div>

          <div style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
            backgroundColor: "#1b0634",
          }}>
            <img
              src={processImages[activeProcessImg ?? 0]}
              alt="EHAM Work Process Showcase"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                transition: "opacity 0.3s ease, transform 0.3s ease"
              }}
            />
          </div>
        </section>

        {/* THE OUTCOME SECTION */}
        <section style={{ marginBottom: "100px" }}>
          <h2 style={{
            fontSize: width <= 480 ? "32px" : "40px",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "30px",
            fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
            lineHeight: 1.2
          }}>
            THE <span style={{ color: "#9cff00" }}>OUTCOME</span>
          </h2>
          <div style={{
            border: "1px solid rgba(156, 255, 0, 0.3)",
            borderRadius: "16px",
            padding: width <= 768 ? "36px 24px" : "50px 40px",
            backgroundColor: "rgba(27, 6, 52, 0.7)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          }}>
            <p style={{
              fontSize: width <= 480 ? "16px" : "19px",
              lineHeight: "1.8",
              color: "#e0e0e0",
              fontFamily: "'Albert Sans', sans-serif",
              margin: 0
            }}>
              EHAM launched with a unified brand, communication system and digital system. The brand aligned with the strong and simplified messaging that connects instantly with the target users. We made sure the experience is as uncomplicated and engaging as possible. Their end-to-end communication system also helps in consistent brand experience for their users along the way.
            </p>
          </div>
        </section>
      </main>

      {/* INFINITE SCROLLING MARQUEE SECTION */}
      <section className="marqueeContainer">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marqueeWrapper {
            overflow: hidden;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-top: 0px;
            margin-bottom: 100px;
          }
          .marqueeRow {
            display: flex;
            width: 100%;
            overflow: hidden;
          }
          .marqueeTrack {
            display: flex;
            width: max-content;
            gap: 30px;
            will-change: transform;
          }
          .marqueeLeft {
            animation: scrollLeft 45s linear infinite;
          }
          .marqueeRight {
            animation: scrollRight 45s linear infinite;
          }

          .marqueeItem {
            flex-shrink: 0;
            width: 580px;
            height: 360px;
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
            transition: transform 0.3s ease;
          }
          .marqueeItem:hover {
            transform: scale(1.03);
          }
          .marqueeImg {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            display: block;
          }
          @media (max-width: 768px) {
            .marqueeItem {
              width: 280px;
              height: 200px;
              border-radius: 12px;
            }
            .marqueeWrapper {
              gap: 16px;
              margin-bottom: 60px;
            }
            .marqueeTrack {
              gap: 16px;
            }
          }
          @media (max-width: 480px) {
            .marqueeItem {
              width: 230px;
              height: 165px;
              border-radius: 10px;
            }
            .marqueeWrapper {
              gap: 12px;
              margin-bottom: 40px;
            }
          }
          `
        }} />

        <div className="marqueeWrapper">
          {/* Top Row: Left Scroll */}
          <div className="marqueeRow">
            <div className="marqueeTrack marqueeLeft">
              {[
                "/work individual page assets/Highcloud UIUX Design.webp",
                "/work individual page assets/HighCloud Rebranding.webp",
                "/work individual page assets/hight cloud scrolling img1.svg",
                "/work individual page assets/hight cloud scrolling img2.svg",
                "/work individual page assets/Highcloud UIUX Design.webp",
                "/work individual page assets/HighCloud Rebranding.webp",
                "/work individual page assets/hight cloud scrolling img1.svg",
                "/work individual page assets/hight cloud scrolling img2.svg"
              ].map((imgSrc, idx) => (
                <div key={idx} className="marqueeItem">
                  <img src={imgSrc} alt={`EHAM Scroll ${idx + 1}`} className="marqueeImg" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Right Scroll */}
          <div className="marqueeRow">
            <div className="marqueeTrack marqueeRight">
              {[
                "/work individual page assets/hight cloud scrolling img3.svg",
                "/work individual page assets/hight cloud scrolling img4.svg",
                "/work individual page assets/hight cloud scrolling img5.svg",
                "/work individual page assets/hight cloud scrolling img6.svg",
                "/work individual page assets/hight cloud scrolling img3.svg",
                "/work individual page assets/hight cloud scrolling img4.svg",
                "/work individual page assets/hight cloud scrolling img5.svg",
                "/work individual page assets/hight cloud scrolling img6.svg"
              ].map((imgSrc, idx) => (
                <div key={idx} className="marqueeItem">
                  <img src={imgSrc} alt={`EHAM Scroll ${idx + 5}`} className="marqueeImg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT OUR CLIENTS SAY TESTIMONIAL SECTION */}
      <section style={{
        width: "90%",
        maxWidth: "1100px",
        margin: width <= 768 ? "40px auto 80px auto" : "60px auto 120px auto",
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: width <= 480 ? "26px" : width <= 768 ? "34px" : "42px",
          fontWeight: 700,
          textTransform: "uppercase",
          marginBottom: width <= 768 ? "28px" : "40px",
          fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
          letterSpacing: "-0.5px",
          color: "#FFFFFF",
          lineHeight: 1.2
        }}>
          WHAT OUR <span style={{ color: "#9cff00" }}>CLIENTS SAY</span>
        </h2>

        <div style={{
          backgroundColor: "#FFFFFF",
          borderRadius: width <= 480 ? "16px" : "24px",
          padding: width <= 480 ? "24px 20px" : width <= 768 ? "32px 28px" : "40px 48px",
          display: "grid",
          gridTemplateColumns: width <= 900 ? "1fr" : "320px 1fr",
          gap: width <= 768 ? "24px" : "40px",
          alignItems: "center",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
          color: "#111111",
        }}>
          {/* Left: Client Photo */}
          <div style={{
            width: "100%",
            height: width <= 480 ? "260px" : "320px",
            borderRadius: "16px",
            overflow: "hidden",
            backgroundColor: "#1b0634",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <img
              src="/ourwork/highcloudwork.webp"
              alt="Murali Bukkapatnam"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Right: Content */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}>
            {/* Quote */}
            <p style={{
              fontFamily: "'Albert Sans', sans-serif",
              fontSize: width <= 480 ? "15px" : width <= 768 ? "17px" : "18px",
              lineHeight: "1.6",
              color: "#222222",
              fontWeight: 500,
              margin: 0,
            }}>
              &ldquo;Great work by Team Dezu.&rdquo;
            </p>

            {/* Author */}
            <div>
              <h4 style={{
                fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#111111",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}>
                — MURALI BUKKAPATNAM
              </h4>
              <p style={{
                fontFamily: "'Albert Sans', sans-serif",
                fontSize: "13px",
                color: "#666666",
                margin: "4px 0 0 0",
                fontWeight: 500,
              }}>
                CEO of EHAM | Previous TiE Global President
              </p>
            </div>

            {/* Tags */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "4px"
            }}>
              {["RESEARCH & STRATEGY", "BRANDING", "UI/UX DESIGN", "DEVELOPMENT"].map((tag, idx) => (
                <span key={idx} style={{
                  backgroundColor: "#9cff00",
                  color: "#111111",
                  fontSize: "12px",
                  fontWeight: 700,
                  padding: "6px 14px",
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LatestWork currentProjectId="eham" />

      <Footer />

      {/* Bottom Navigation matching main site */}
      <nav style={bottomNavStyle} aria-label="Primary Navigation">
        <Link
          href="/work"
          style={getNavLinkStyle("work")}
          onMouseEnter={() => setHoveredNavLink("work")}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          Work
        </Link>
        <Link
          href="/team"
          style={getNavLinkStyle("team")}
          onMouseEnter={() => setHoveredNavLink("team")}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          Get Your Own Team
        </Link>
        <Link
          href="/about"
          style={getNavLinkStyle("about")}
          onMouseEnter={() => setHoveredNavLink("about")}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          About
        </Link>
        <Link
          href="/dezu"
          style={getNavLinkStyle("dezu")}
          onMouseEnter={() => setHoveredNavLink("dezu")}
          onMouseLeave={() => setHoveredNavLink(null)}
        >
          Dezu
        </Link>
      </nav>
    </div>
  );
}
