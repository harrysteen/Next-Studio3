"use client";

import React from "react";
import Link from "next/link";
import useResponsive from "../../hooks/useResponsive";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LatestWork from "../../components/LatestWork/LatestWork";
import WorkAccordion from "../../components/WorkAccordion/WorkAccordion";

export default function NaeemZafar() {
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
  const [activeProcessImg, setActiveProcessImg] = React.useState(0);

  const processImages = [
    "/work individual page assets/Naeem Zafar persnol branding.webp",
    "/work individual page assets/NAEEM ZAFAR.png",
    "/work individual page assets/Naeem Zafar ui and web designing.webp",
    "/work individual page assets/Naeem Zafar development and maintnance.webp",
  ];

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
    backgroundImage: "linear-gradient(#000000B2, #000000B2), url('/work individual page assets/naeemzafar indivudial page hero image.webp')",
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
            NAEEM<br />ZAFAR
          </h1>
          <span style={heroTaglineStyle}>@Bay Area, USA~2025</span>
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
              Naeem Zafar is a leading academician and entrepreneur. He currently teaches at UC Berkeley and North Eastern University and he has launched and sold several startups. We built a unique and comprehensive branding and website for him.
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
                Branding, Documentation, Content Writing, UI Design, Development
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
                Personal Branding
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
              src="https://www.dropbox.com/scl/fi/nt94rjmb7191ozyi4hqk8/naeemzafar.mov?rlkey=wlmeepkf68tcc5e4b2xjmh9bq&st=z27ozrj7&raw=1"
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
              WHAT WE <span style={{ color: "#9cff00" }}>WORKED ON</span>
            </h2>

            <WorkAccordion
              items={[
                {
                  title: "PERSONAL BRANDING",
                  desc: "We built a vibrant visual identity for Prof NZ with the objective of creating an experience as similar as possible to his real-life personality and teaching."
                },
                {
                  title: "CONTENT WRITING AND DOCUMENTATION",
                  desc: "Prof NZ has a distinctive and direct style of communication. Our content team worked on creating similar communication material for the website. We also create an elaborate content system that categorised all his teachings and media for easy access."
                },
                {
                  title: "UI AND WEB DESIGN",
                  desc: "Prof NZ has been an academician and known entrepreneur for several decades and he had rich content across various domains to share. Our task was to create room to display this content in a strategic manner without overload. We built engaging layouts and page designs to make it an engaging experience for the visitor."
                },
                {
                  title: "DEVELOPMENT AND MAINTENANCE",
                  desc: "We built this site on Wordpress-Elementor to act as a clear Content Management system from Professor Naeem and complement the ecommerce elements and integrations on the site. It was also built for SEO and compatible with potential LMS and future integrations. Through an ongoing engagement, we also check the functionality and security of the site."
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
              alt="Naeem Zafar Work Process"
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
              Professor Naeem’s new website is an engaging and visually striking experience that allows his students, stakeholders, peers and other visitors to experience his identity, consume his expertise and connect with him. The clear layouts and sound technical backend helps the site grow with Prof Naeem and his engagements.
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
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          .marqueeLeft {
            animation: scrollLeft 45s linear infinite;
          }
          .marqueeRight {
            animation: scrollRight 45s linear infinite;
          }
          .marqueeWrapper:hover .marqueeLeft,
          .marqueeWrapper:hover .marqueeRight {
            animation-play-state: paused;
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
            .marqueeTrack {
              gap: 12px;
            }
          }
        ` }} />
        <div className="marqueeWrapper">
          {/* Row 1 (moving right) */}
          <div className="marqueeRow">
            <div className="marqueeTrack marqueeRight">
              {[
                "/work individual page assets/Naeem Zafar scroll img1.webp",
                "/work individual page assets/Naeem Zafar scroll img2.webp",
                "/work individual page assets/Naeem Zafar scroll img3.webp",
                "/work individual page assets/Naeem Zafar scroll img4.webp",
                "/work individual page assets/Naeem Zafar scroll img5.webp",
                "/work individual page assets/Naeem Zafar scroll img6.webp"
              ].concat([
                "/work individual page assets/Naeem Zafar scroll img1.webp",
                "/work individual page assets/Naeem Zafar scroll img2.webp",
                "/work individual page assets/Naeem Zafar scroll img3.webp",
                "/work individual page assets/Naeem Zafar scroll img4.webp",
                "/work individual page assets/Naeem Zafar scroll img5.webp",
                "/work individual page assets/Naeem Zafar scroll img6.webp"
              ]).map((src, index) => (
                <div key={`row1-${index}`} className="marqueeItem">
                  <img src={src} alt="Naeem Zafar Showcase" className="marqueeImg" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (moving left) */}
          <div className="marqueeRow">
            <div className="marqueeTrack marqueeLeft">
              {[
                "/work individual page assets/Naeem Zafar scroll img7.webp",
                "/work individual page assets/Naeem Zafar scroll img8.webp",
                "/work individual page assets/Naeem Zafar scroll img9.webp",
                "/work individual page assets/Naeem Zafar scroll img10.webp",
                "/work individual page assets/Naeem Zafar scroll img11.webp",
                "/work individual page assets/Naeem Zafar scroll img12.webp"
              ].concat([
                "/work individual page assets/Naeem Zafar scroll img7.webp",
                "/work individual page assets/Naeem Zafar scroll img8.webp",
                "/work individual page assets/Naeem Zafar scroll img9.webp",
                "/work individual page assets/Naeem Zafar scroll img10.webp",
                "/work individual page assets/Naeem Zafar scroll img11.webp",
                "/work individual page assets/Naeem Zafar scroll img12.webp"
              ]).map((src, index) => (
                <div key={`row2-${index}`} className="marqueeItem">
                  <img src={src} alt="Naeem Zafar Showcase" className="marqueeImg" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 (moving right) */}
          <div className="marqueeRow">
            <div className="marqueeTrack marqueeRight">
              {[
                "/work individual page assets/Naeem Zafar scroll img13.webp",
                "/work individual page assets/Naeem Zafar scroll img14.webp",
                "/work individual page assets/Naeem Zafar scroll img15.webp",
                "/work individual page assets/Naeem Zafar scroll img16.webp",
                "/work individual page assets/Naeem Zafar scroll img17.webp"
              ].concat([
                "/work individual page assets/Naeem Zafar scroll img13.webp",
                "/work individual page assets/Naeem Zafar scroll img14.webp",
                "/work individual page assets/Naeem Zafar scroll img15.webp",
                "/work individual page assets/Naeem Zafar scroll img16.webp",
                "/work individual page assets/Naeem Zafar scroll img17.webp"
              ]).map((src, index) => (
                <div key={`row3-${index}`} className="marqueeItem">
                  <img src={src} alt="Naeem Zafar Showcase" className="marqueeImg" />
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
            backgroundColor: "#9BB6C3",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
            <img
              src="/work individual page assets/NAEEM ZAFAR.webp"
              alt="Naeem Zafar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
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
              &ldquo;Studio Dezu has played a key role in my personal brand transformation. The site contains all my lectures, interviews and presentations in an easily accessible manner. It is definitely striking.&rdquo;
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
                — NAEEM ZAFAR
              </h4>
              <p style={{
                fontFamily: "'Albert Sans', sans-serif",
                fontSize: "13px",
                color: "#666666",
                margin: "4px 0 0 0",
                fontWeight: 500,
              }}>
                Professor at UC Berkeley, Silicon-Valley Entrepreneur
              </p>
            </div>

            {/* Tags */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "4px"
            }}>
              {["PERSONAL BRANDING", "UI/UX", "CONTENT STRATEGY"].map((tag, idx) => (
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

      <LatestWork currentProjectId="naeemzafar" />

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
