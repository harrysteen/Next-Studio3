"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import useResponsive from "../../hooks/useResponsive";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import leiutisHero from "../../work individual page assets/Leiutis individual page hero section img.png";
import leiutisImg1 from "../../work individual page assets/leiutis image1.png";
import leiutisImg2 from "../../work individual page assets/leiutis image2.png";
import leiutisImg3 from "../../work individual page assets/leiutis image3.png";
import leiutisImg4 from "../../work individual page assets/leiutis image4.png";
import leiutisImg5 from "../../work individual page assets/leiutis image5.png";
import leiutisImg7 from "../../work individual page assets/leiutis image7.png";
import leiutisImg8 from "../../work individual page assets/leiutis image8.png";
import leiutisImg9 from "../../work individual page assets/leiutis image9.png";
import leiutisImg10 from "../../work individual page assets/leiutis image10.png";
import leiutisImg11 from "../../work individual page assets/leiutis image11.png";
import leiutisImg12 from "../../work individual page assets/leiutis image12.jpg";
import leiutisImg13 from "../../work individual page assets/leiutis image13.png";
import leiutisImg14 from "../../work individual page assets/leiutis image14.png";
import leiutisImg15 from "../../work individual page assets/leiutis image15.png";
import leiutisImg16 from "../../work individual page assets/leiutis image16.png";
import leiutisImg17 from "../../work individual page assets/leiutis image17.png";
import leiutisImg18 from "../../work individual page assets/leiutis image18.png";

export default function Leiutis() {
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
    backgroundImage: "linear-gradient(#000000B2, #000000B2), url('/work individual page assets/Leiutis individual page hero section img.png')",
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
            LEIUTIS
          </h1>
          <span style={heroTaglineStyle}>@Hyderabad~2023</span>
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
            }}>THE PROJECT SUMMARY</h2>
            <p style={{
              fontSize: width <= 480 ? "16px" : "18px",
              lineHeight: "1.8",
              color: "#e0e0e0",
              fontFamily: "'Albert Sans', sans-serif",
              fontWeight: 400,
            }}>
              Leiutis Is A Pharmaceutical Innovation Company With Track Record Of Successful Commercialized Product Alliance Partnerships Globally.They Create Innovative Products That Provide Advancement In Treatment In Specific Therapeutic Areas.
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
                Branding, Content Design, Copy Writing
                <br />
                Book Design
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
                Healthcare
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION */}


        {/* HOW WE HANDLED THE SITUATION */}


        {/* SUCCESS IN NUMBERS SECTION */}

      </main>

      {/* FINAL MOCKUP IMAGE SECTION (FULL WIDTH) */}
      <section style={{
        width: "100%",
        marginBottom: "80px",
        padding: "0 5%"
      }}>
        <div style={{
          position: "relative",
          width: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 45px rgba(0, 0, 0, 0.3)"
        }}>
          <Image
            src={leiutisImg1}
            alt="Leiutis Brand Showcase Presentation"
            style={{ width: "100%", height: "auto", display: "block" }}
            sizes="100vw"
          />
        </div>
      </section>

      {/* FINAL MOCKUP ROW SECTION (IMAGES 2 & 3) */}
      <section style={{
        width: "100%",
        marginBottom: "80px",
        padding: "0 5%"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: width <= 768 ? "1fr" : "1fr 1fr",
          gap: "40px",
          width: "100%"
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/10",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg2}
              alt="Leiutis Brand Identity Design 2"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/10",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg3}
              alt="Leiutis Brand Identity Design 3"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* FINAL MOCKUP ROW SECTION (IMAGES 4 & 5) */}
      <section style={{
        width: "100%",
        marginBottom: "80px",
        padding: "0 5%"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: width <= 768 ? "1fr" : "1fr 1fr",
          gap: "40px",
          width: "100%"
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/10",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg4}
              alt="Leiutis Brand Identity Design 4"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/10",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg5}
              alt="Leiutis Brand Identity Design 5"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* FINAL MOCKUP ROW SECTION (IMAGES 7 & 8 & 9) */}
      <section style={{
        width: "100%",
        marginBottom: "80px",
        padding: "0 5%"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: width <= 480 ? "1fr" : width <= 768 ? "1fr 1fr" : "1fr 1fr 1fr",
          gap: "40px",
          width: "100%"
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg7}
              alt="Leiutis Brand Identity Design 7"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg8}
              alt="Leiutis Brand Identity Design 8"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg9}
              alt="Leiutis Brand Identity Design 9"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* FINAL MOCKUP ROW SECTION (IMAGES 10 & 11 & 12) */}
      <section style={{
        width: "100%",
        marginBottom: "80px",
        padding: "0 5%"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: width <= 480 ? "1fr" : width <= 768 ? "1fr 1fr" : "1fr 1fr 1fr",
          gap: "40px",
          width: "100%"
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg10}
              alt="Leiutis Brand Identity Design 10"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg11}
              alt="Leiutis Brand Identity Design 11"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg12}
              alt="Leiutis Brand Identity Design 12"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* FINAL MOCKUP ROW SECTION (IMAGES 13 & 14 & 15) */}
      <section style={{
        width: "100%",
        marginBottom: "80px",
        padding: "0 5%"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: width <= 480 ? "1fr" : width <= 768 ? "1fr 1fr" : "1fr 1fr 1fr",
          gap: "40px",
          width: "100%"
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg13}
              alt="Leiutis Brand Identity Design 13"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg14}
              alt="Leiutis Brand Identity Design 14"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg15}
              alt="Leiutis Brand Identity Design 15"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* FINAL MOCKUP ROW SECTION (IMAGES 16 & 17 & 18) */}
      <section style={{
        width: "100%",
        marginBottom: "80px",
        padding: "0 5%"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: width <= 480 ? "1fr" : width <= 768 ? "1fr 1fr" : "1fr 1fr 1fr",
          gap: "40px",
          width: "100%"
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg16}
              alt="Leiutis Brand Identity Design 16"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg17}
              alt="Leiutis Brand Identity Design 17"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <Image
              src={leiutisImg18}
              alt="Leiutis Brand Identity Design 18"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
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
