"use client";

import React from "react";
import Link from "next/link";
import useResponsive from "../../hooks/useResponsive";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Ecomall() {
  const scopeOfWork = [
    { company: "Brand Strategy & Positioning", role: "Rebranding" },
    { company: "UI/UX Design Systems", role: "Design" },
    { company: "Responsive Web Platforms", role: "Development" },
    { company: "Content Strategy & SEO", role: "Marketing" }
  ];

  const deliverables = [
    "Design System Guidelines & Digital Asset Library",
    "Sleek, High-Converting Web Platforms",
    "Standardized Multi-Chapter Portal Layouts"
  ];

  const technologies = [
    { company: "Figma", subtitle: "UI/UX Design" },
    { company: "Next.js", subtitle: "Framework" },
    { company: "GSAP", subtitle: "Animations" },
    { company: "Tailwind CSS", subtitle: "Styling" },
    { company: "Vercel", subtitle: "Hosting & CI/CD" }
  ];

  const { width } = useResponsive();

  const [hoveredSocial, setHoveredSocial] = React.useState(null);
  const [hoveredExperience, setHoveredExperience] = React.useState(null);
  const [hoveredBook, setHoveredBook] = React.useState(null);
  const [hoveredBoard, setHoveredBoard] = React.useState(null);
  const [hoveredNavLink, setHoveredNavLink] = React.useState(null);
  const [activeProcess, setActiveProcess] = React.useState(0);

  // Responsive Styles
  const containerStyle = {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 35% 30%, rgba(61, 16, 108, 0.5), transparent 20%), radial-gradient(circle at 70% 40%, rgba(61, 16, 108, 0.5), transparent 20%), #130323",
    color: "#FFFFFF",
    paddingTop: width <= 768 ? "80px" : "0px",
    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
    overflowX: "hidden",
    position: "relative",
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

  const heroSectionStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    minHeight: "550px",
    backgroundImage: "linear-gradient(#000000B2, #000000B2), url('/ecomallwork.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "180px 5% 0 5%",
    overflow: "hidden",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  };

  const heroTitleStyle = {
    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
    fontSize: width <= 480 ? "38px" : width <= 768 ? "50px" : "72px",
    fontWeight: 700,
    lineHeight: 1.1,
    textTransform: "uppercase",
    marginBottom: "12px",
    letterSpacing: "-1px",
  };

  const heroTaglineStyle = {
    fontSize: "20px",
    color: "#9cff00",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const contentWrapperStyle = {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "80px",
    paddingBottom: "80px",
  };

  const statsSectionStyle = {
    backgroundColor: "#1b0634",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: width <= 1024 ? "30px" : "40px",
    marginBottom: "80px",
    display: "grid",
    gridTemplateColumns: width <= 480 ? "1fr" : width <= 1024 ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
    gap: width <= 480 ? "20px" : "30px",
    textAlign: "center",
  };

  const getStatCardStyle = (index) => {
    const isLast = index === 3;
    let borderRight = "none";
    let borderBottom = "none";
    let paddingBottom = "0px";

    if (width <= 480) {
      if (!isLast) {
        borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
        paddingBottom = "20px";
      }
    } else if (width <= 1024) {
      if (index === 0 || index === 2) {
        borderRight = "1px solid rgba(255, 255, 255, 0.1)";
      }
    } else {
      if (!isLast) {
        borderRight = "1px solid rgba(255, 255, 255, 0.1)";
      }
    }

    return {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      borderRight,
      borderBottom,
      paddingBottom,
    };
  };

  const statNumberStyle = {
    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
    fontSize: "54px",
    fontWeight: 700,
    color: "#9cff00",
    lineHeight: 1,
  };

  const statLabelStyle = {
    fontSize: "14px",
    color: "#cfcfcf",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  const detailsSectionStyle = {
    display: "grid",
    gridTemplateColumns: width <= 1024 ? "1fr" : "1fr 1fr",
    gap: width <= 1024 ? "40px" : "80px",
    marginBottom: "80px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "60px",
  };

  const detailLeftStyle = {};

  const detailLeftTitleStyle = {
    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
    fontSize: width <= 480 ? "30px" : "40px",
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: "30px",
  };

  const detailLeftTextStyle = {
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#BBBBBB",
  };

  const socialRowStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
  };

  const getSocialIconStyle = (key) => {
    const isHovered = hoveredSocial === key;
    return {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: isHovered ? "1px solid #9cff00" : "1px solid rgba(255, 255, 255, 0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: isHovered ? "#130323" : "#FFFFFF",
      backgroundColor: isHovered ? "#9cff00" : "transparent",
      transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      boxShadow: isHovered ? "0 4px 15px rgba(156, 255, 0, 0.3)" : "none",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  const getSocialSvgStyle = () => ({
    width: "20px",
    height: "20px",
    fill: "currentColor",
  });

  const detailRightStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const sectionTagStyle = {
    color: "#9cff00",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "24px",
  };

  const experienceListStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const getExperienceItemStyle = (index) => {
    const isHovered = hoveredExperience === index;
    return {
      paddingTop: index === 0 ? "0px" : "20px",
      paddingBottom: "20px",
      paddingLeft: isHovered ? "10px" : "0px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      transition: "padding-left 0.3s ease",
    };
  };

  const experienceCompanyStyle = {
    fontSize: "19px",
    fontWeight: 600,
    color: "#FFFFFF",
  };

  const experienceRoleStyle = {
    fontSize: "15px",
    color: "#9cff00",
    fontWeight: 500,
  };

  const publicationsSectionStyle = {
    display: "grid",
    gridTemplateColumns: width <= 1024 ? "1fr" : "1fr 1fr",
    gap: width <= 1024 ? "40px" : "80px",
    marginBottom: "80px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "60px",
  };

  const publicationsLeftStyle = {};

  const publicationsLeftTitleStyle = {
    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
    fontSize: width <= 480 ? "30px" : "40px",
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: "30px",
  };

  const publicationsRightStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const bookListStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const getBookItemStyle = (index) => {
    const isHovered = hoveredBook === index;
    return {
      paddingTop: index === 0 ? "0px" : "24px",
      paddingBottom: "24px",
      paddingLeft: isHovered ? "10px" : "0px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "padding-left 0.3s ease",
      cursor: "pointer",
    };
  };

  const getBookTitleStyle = (index) => {
    const isHovered = hoveredBook === index;
    return {
      fontSize: "18px",
      fontWeight: 600,
      color: isHovered ? "#9cff00" : "#FFFFFF",
      lineHeight: 1.4,
      maxWidth: "90%",
      transition: "color 0.3s ease",
    };
  };

  const getBookArrowStyle = (index) => {
    const isHovered = hoveredBook === index;
    return {
      fontSize: "20px",
      color: "#9cff00",
      transform: isHovered ? "translateX(6px)" : "translateX(0)",
      transition: "transform 0.3s ease",
    };
  };

  const advisorySectionStyle = {
    marginBottom: "60px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "60px",
  };

  const advisoryTitleStyle = {
    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
    fontSize: width <= 480 ? "30px" : "40px",
    fontWeight: 600,
    textTransform: "uppercase",
    marginBottom: "40px",
    textAlign: "center",
  };

  const boardGridStyle = {
    display: "grid",
    gridTemplateColumns: width <= 480 ? "1fr" : width <= 768 ? "repeat(2, 1fr)" : width <= 1024 ? "repeat(3, 1fr)" : "repeat(5, 1fr)",
    gap: "20px",
  };

  const getBoardCardStyle = (index) => {
    const isHovered = hoveredBoard === index;
    return {
      backgroundColor: isHovered ? "#240944" : "#1b0634",
      border: isHovered ? "1px solid #9cff00" : "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "16px",
      padding: "30px 20px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "140px",
      transform: isHovered ? "translateY(-6px)" : "translateY(0)",
      boxShadow: isHovered ? "0 10px 20px rgba(156, 255, 0, 0.1)" : "none",
      transition: "all 0.3s ease",
      cursor: "pointer",
    };
  };

  const getBoardLogoPlaceholderStyle = (index) => {
    const isHovered = hoveredBoard === index;
    return {
      fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
      fontSize: "22px",
      fontWeight: 700,
      color: isHovered ? "#9cff00" : "#FFFFFF",
      letterSpacing: "-0.5px",
      marginBottom: "6px",
      transition: "color 0.3s ease",
    };
  };

  const boardCompanyNameStyle = {
    fontSize: "13px",
    color: "#cfcfcf",
    textTransform: "uppercase",
    letterSpacing: "1px",
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

      {/* GIANT TYPOGRAPHY HERO SECTION WITH FULL-BLEED IMAGE BACKGROUND */}
      <section style={heroSectionStyle}>
        <div style={{}}>
          <h1 style={heroTitleStyle}>
            ECOMALL
          </h1>
          <span style={heroTaglineStyle}>@USA~2025</span>
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
              Ecomall Project Overview.
            </p>
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
                E-commerce
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
                E-commerce
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section style={{
          width: "100%",
          height: width <= 768 ? "400px" : "80vh",
          minHeight: "400px",
          borderRadius: "16px",
          marginBottom: "80px",
          position: "relative",
          overflow: "hidden"
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="https://www.dropbox.com/scl/fi/ffqkap8xoe469vfd6u4ua/18069232-uhd_3840_2160_24fps.mp4?rlkey=xylgikojt656pmmy0ua8or8lb&st=f3q4uup0&raw=1"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* HOW WE HANDLED THE SITUATION */}
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
              HOW WE <span style={{ color: "#9cff00" }}>HANDLED</span> <br /> THE SITUATION
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                {
                  title: "RESEARCH & DISCOVERY",
                  desc: "We Conducted In-Depth Research By Analyzing Competitors, Identifying Key User Pain Points, And Mapping Out Detailed Customer Journeys To Uncover Opportunities For A More Intuitive And Impactful Experience."
                },
                { title: "WIREFRAMING & UX DESIGN", desc: "" },
                { title: "UI DESIGN & BRANDING", desc: "" },
                { title: "DEVELOPMENT & TESTING", desc: "" }
              ].map((item, idx) => (
                <div key={idx} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "20px", cursor: "pointer" }} onClick={() => setActiveProcess(idx)}>
                  <h3 style={{
                    color: activeProcess === idx ? "#9cff00" : "#ffffff",
                    fontSize: "18px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
                  }}>
                    <span style={{ fontSize: "24px" }}>+</span> {item.title}
                  </h3>
                  {activeProcess === idx && item.desc && (
                    <p style={{
                      marginTop: "16px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#b0b0b0",
                      fontFamily: "'Albert Sans', sans-serif",
                    }}>
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ width: "100%", borderRadius: "12px", overflow: "hidden" }}>
            <img
              src="https://picsum.photos/800/600?random=10"
              alt="Design Process"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </section>

        {/* SUCCESS IN NUMBERS SECTION */}
        <section style={{ marginBottom: "0px" }}>
          <h2 style={{
            fontSize: width <= 480 ? "32px" : "40px",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "40px",
            fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
            lineHeight: 1.2
          }}>
            <span style={{ color: "#9cff00" }}>SUCCESS</span> IN <br /> NUMBERS & EXPERIENCE
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: width <= 768 ? "1fr" : "repeat(3, 1fr)",
            gap: "20px",
          }}>
            {/* Card 1 */}
            <div style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "40px 30px",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}>
              <div style={{ fontSize: "48px", fontWeight: 700, color: "#fff", marginBottom: "16px", fontFamily: "var(--font-albert), 'Albert Sans', sans-serif" }}>95%</div>
              <h3 style={{ color: "#9cff00", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", marginBottom: "16px", fontFamily: "var(--font-albert), 'Albert Sans', sans-serif" }}>HUMAN-CENTERED <br /> DESIGN</h3>
              <p style={{ fontSize: "14px", color: "#a0a0a0", lineHeight: "1.6", fontFamily: "'Albert Sans', sans-serif" }}>
                We Design With Your Audience In Mind, Ensuring Every Interaction Is Intuitive, Engaging, And Memorable.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "40px 30px",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}>
              <div style={{ fontSize: "48px", fontWeight: 700, color: "#fff", marginBottom: "16px", fontFamily: "var(--font-albert), 'Albert Sans', sans-serif" }}>87%</div>
              <h3 style={{ color: "#9cff00", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", marginBottom: "16px", fontFamily: "var(--font-albert), 'Albert Sans', sans-serif" }}>PROVEN EXPERTISE <br /> RECORD</h3>
              <p style={{ fontSize: "14px", color: "#a0a0a0", lineHeight: "1.6", fontFamily: "'Albert Sans', sans-serif" }}>
                We Design With Your Audience In Mind, Ensuring Every Interaction Is Intuitive, Engaging, And Memorable.
              </p>
            </div>

            {/* Card 3 (Spans 2 rows) */}
            <div style={{
              gridRow: width <= 768 ? "auto" : "span 2",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "40px 30px",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div style={{ fontSize: "48px", fontWeight: 700, color: "#fff", marginBottom: "40px", fontFamily: "var(--font-albert), 'Albert Sans', sans-serif" }}>100%</div>
              <div>
                <h3 style={{ color: "#9cff00", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", marginBottom: "16px", fontFamily: "var(--font-albert), 'Albert Sans', sans-serif" }}>MEASURABLE <br /> IMPACT</h3>
                <p style={{ fontSize: "14px", color: "#a0a0a0", lineHeight: "1.6", fontFamily: "'Albert Sans', sans-serif" }}>
                  We Design With Your Audience In Mind, Ensuring Every Interaction Is Intuitive, Engaging, And Memorable.
                </p>
              </div>
            </div>

            {/* Card 4 (Spans 2 cols) */}
            <div style={{
              gridColumn: width <= 768 ? "auto" : "span 2",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "40px 30px",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}>
              <div style={{ fontSize: "48px", fontWeight: 700, color: "#fff", marginBottom: "16px", fontFamily: "var(--font-albert), 'Albert Sans', sans-serif" }}>25X</div>
              <h3 style={{ color: "#9cff00", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", marginBottom: "16px", fontFamily: "var(--font-albert), 'Albert Sans', sans-serif" }}>STARTUPS&apos;S SCALABLE SOLUTION</h3>
              <p style={{ fontSize: "14px", color: "#a0a0a0", lineHeight: "1.6", fontFamily: "'Albert Sans', sans-serif" }}>
                We Design With Your Audience In Mind, Ensuring Every Interaction Is Intuitive, Engaging, And Memorable.
              </p>
            </div>
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
          }
          .marqueeLeft {
            animation: scrollLeft 40s linear infinite;
          }
          .marqueeRight {
            animation: scrollRight 40s linear infinite;
          }
          .marqueeItem {
            flex-shrink: 0;
            width: 580px;
            height: 360px;
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
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
        ` }} />
        <div className="marqueeWrapper">
          {/* Row 1 (moving right) */}
          <div className="marqueeRow">
            <div className="marqueeTrack marqueeRight">
              {[
                "/ourwork/ecomallwork.webp",
                "/ourwork/highcloudwork.webp",
                "/ourwork/kshatriyaswork.webp",
                "/ourwork/leiutis.webp",
                "/ourwork/madboxwork.webp",
                "/ourwork/mall360.webp"
              ].concat([
                "/ourwork/ecomallwork.webp",
                "/ourwork/highcloudwork.webp",
                "/ourwork/kshatriyaswork.webp",
                "/ourwork/leiutis.webp",
                "/ourwork/madboxwork.webp",
                "/ourwork/mall360.webp"
              ]).map((src, index) => (
                <div key={`row1-${index}`} className="marqueeItem">
                  <img src={src} alt="Work Presentation Showcase" className="marqueeImg" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (moving left) */}
          <div className="marqueeRow">
            <div className="marqueeTrack marqueeLeft">
              {[
                "/ourwork/naeeamzafar.webp",
                "/ourwork/siliconvalley.webp",
                "/ourwork/venturawork.webp",
                "/tie_herosection_img.jpg",
                "/tie_silicon_valley_hero.png",
                "/ourwork/madboxwork.webp"
              ].concat([
                "/ourwork/naeeamzafar.webp",
                "/ourwork/siliconvalley.webp",
                "/ourwork/venturawork.webp",
                "/tie_herosection_img.jpg",
                "/tie_silicon_valley_hero.png",
                "/ourwork/madboxwork.webp"
              ]).map((src, index) => (
                <div key={`row2-${index}`} className="marqueeItem">
                  <img src={src} alt="Work Presentation Showcase" className="marqueeImg" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 (moving right) */}
          <div className="marqueeRow">
            <div className="marqueeTrack marqueeRight">
              {[
                "/ourwork/leiutis.webp",
                "/ourwork/madboxwork.webp",
                "/ourwork/mall360.webp",
                "/ourwork/naeeamzafar.webp",
                "/ourwork/siliconvalley.webp",
                "/ourwork/venturawork.webp"
              ].concat([
                "/ourwork/leiutis.webp",
                "/ourwork/madboxwork.webp",
                "/ourwork/mall360.webp",
                "/ourwork/naeeamzafar.webp",
                "/ourwork/siliconvalley.webp",
                "/ourwork/venturawork.webp"
              ]).map((src, index) => (
                <div key={`row3-${index}`} className="marqueeItem">
                  <img src={src} alt="Work Presentation Showcase" className="marqueeImg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
