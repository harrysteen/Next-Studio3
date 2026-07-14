"use client";

import React from "react";
import Link from "next/link";
import useResponsive from "../../hooks/useResponsive";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function TieSiliconValley() {
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
    height: "85vh",
    minHeight: "550px",
    backgroundImage: "url('/tie_herosection_img.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: "0 5% 100px 5%",
    overflow: "hidden",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  };

  const heroTitleStyle = {
    fontFamily: "var(--font-bai-jamjuree), 'Bai Jamjuree', sans-serif",
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
    fontFamily: "var(--font-bai-jamjuree), 'Bai Jamjuree', sans-serif",
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
    fontFamily: "var(--font-bai-jamjuree), 'Bai Jamjuree', sans-serif",
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
    fontFamily: "var(--font-bai-jamjuree), 'Bai Jamjuree', sans-serif",
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
    fontFamily: "var(--font-bai-jamjuree), 'Bai Jamjuree', sans-serif",
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
      fontFamily: "var(--font-bai-jamjuree), 'Bai Jamjuree', sans-serif",
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
            TIE SILICON <br /> VALLEY
          </h1>
          <span style={heroTaglineStyle}>@USA~2025</span>
        </div>
      </section>

      <main style={contentWrapperStyle}>
        {/* METRICS SECTION */}
        <section style={statsSectionStyle}>
          <div style={getStatCardStyle(0)}>
            <span style={statNumberStyle}>50%+</span>
            <span style={statLabelStyle}>User Engagement</span>
          </div>
          <div style={getStatCardStyle(1)}>
            <span style={statNumberStyle}>200k+</span>
            <span style={statLabelStyle}>Global Members</span>
          </div>
          <div style={getStatCardStyle(2)}>
            <span style={statNumberStyle}>15+</span>
            <span style={statLabelStyle}>Chapters Standardized</span>
          </div>
          <div style={getStatCardStyle(3)}>
            <span style={statNumberStyle}>40%</span>
            <span style={statLabelStyle}>Performance Increase</span>
          </div>
        </section>

        {/* ABOUT & SCOPE SECTION */}
        <section style={detailsSectionStyle}>
          <div style={detailLeftStyle}>
            <h2 style={detailLeftTitleStyle}>About the Project</h2>
            <p style={detailLeftTextStyle}>
              TiE Silicon Valley came to us with a critical challenge: their existing digital platforms
              were fragmented, dated, and did not adequately reflect their position as the leading hub for
              Silicon Valley entrepreneurship.
              <br /><br />
              We redesigned their entire digital ecosystem from the ground up. Beginning with brand strategy
              and positioning research, we moved into establishing an enterprise-grade UI/UX design system
              capable of scaling across multiple global chapters while retaining modern design integrity and fast load times.
            </p>

            {/* Social and Web Links */}
            <div style={socialRowStyle}>
              <a
                href="https://www.linkedin.com/company/tie-silicon-valley/"
                target="_blank"
                rel="noopener noreferrer"
                style={getSocialIconStyle("linkedin")}
                onMouseEnter={() => setHoveredSocial("linkedin")}
                onMouseLeave={() => setHoveredSocial(null)}
                aria-label="LinkedIn Page"
              >
                <svg viewBox="0 0 24 24" style={getSocialSvgStyle()}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/TiESiliconVal"
                target="_blank"
                rel="noopener noreferrer"
                style={getSocialIconStyle("twitter")}
                onMouseEnter={() => setHoveredSocial("twitter")}
                onMouseLeave={() => setHoveredSocial(null)}
                aria-label="Twitter Profile"
              >
                <svg viewBox="0 0 24 24" style={getSocialSvgStyle()}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://sv.tie.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={getSocialIconStyle("website")}
                onMouseEnter={() => setHoveredSocial("website")}
                onMouseLeave={() => setHoveredSocial(null)}
                aria-label="Website"
              >
                <svg viewBox="0 0 24 24" style={getSocialSvgStyle()}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
          </div>

          <div style={detailRightStyle}>
            <span style={sectionTagStyle}>Services Provided</span>
            <div style={experienceListStyle}>
              {scopeOfWork.map((scope, index) => (
                <div
                  key={index}
                  style={getExperienceItemStyle(index)}
                  onMouseEnter={() => setHoveredExperience(index)}
                  onMouseLeave={() => setHoveredExperience(null)}
                >
                  <span style={experienceCompanyStyle}>{scope.company}</span>
                  <span style={experienceRoleStyle}>{scope.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES SECTION */}
        <section style={publicationsSectionStyle}>
          <div style={publicationsLeftStyle}>
            <h2 style={publicationsLeftTitleStyle}>Key Deliverables</h2>
          </div>

          <div style={publicationsRightStyle}>
            <span style={sectionTagStyle}>Deliverables List</span>
            <div style={bookListStyle}>
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  style={getBookItemStyle(index)}
                  onMouseEnter={() => setHoveredBook(index)}
                  onMouseLeave={() => setHoveredBook(null)}
                >
                  <span style={getBookTitleStyle(index)}>{item}</span>
                  <span style={getBookArrowStyle(index)}>→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES USED SECTION */}
        <section style={advisorySectionStyle}>
          <h2 style={advisoryTitleStyle}>Technologies & Tools Used</h2>
          <div style={boardGridStyle}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                style={getBoardCardStyle(index)}
                onMouseEnter={() => setHoveredBoard(index)}
                onMouseLeave={() => setHoveredBoard(null)}
              >
                <span style={getBoardLogoPlaceholderStyle(index)}>
                  {tech.company}
                </span>
                <span style={boardCompanyNameStyle}>{tech.subtitle}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

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
