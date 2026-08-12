"use client";

import React from "react";
import Link from "next/link";
import useResponsive from "../../hooks/useResponsive";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LatestWork from "../../components/LatestWork/LatestWork";

// Evoque Impact Case Study Page
export default function EvoqueImpact() {
  const { width } = useResponsive();

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
    backgroundImage: "linear-gradient(#000000B2, #000000B2), url('/ourwork/evoqueimpact.webp')",
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

      {/* GIANT TYPOGRAPHY HERO SECTION */}
      <section style={heroSectionStyle}>
        <div>
          <h1 style={heroTitleStyle}>
            EVOQUE <br /> IMPACT
          </h1>
          <span style={heroTaglineStyle}>@USA~2026</span>
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
              Evoque Impact is a product, strategy, and Innovation studio based in the Bay Area. We worked on creating a Silicon Valley standard branding and cohesive web experience to communicate the credibility of the brand.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
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
                Brand Identity Design, Content Strategy, UI Design and Development
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

        {/* VIDEO / HERO MEDIA SHOWCASE SECTION */}
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
              WHAT WE <span style={{ color: "#9cff00" }}>WORKED ON</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                {
                  title: "DISCOVERY AND REBRANDING",
                  desc: "Evoque Impact wanted their branding to convey the impact they create for businesses and institutions. We combined vibrant tones with clean elements that express acceleration and AI."
                },
                {
                  title: "CONTENT STRATEGY AND WRITING",
                  desc: "It was critical that we get the messaging right. Our deep discovery helped document and write content with a crisp and professional tone while making sure the message was direct and impactful."
                },
                {
                  title: "UI DESIGN AND NAVIGATION",
                  desc: "The website transports the user immediately into technical innovation and strategic clarity through its minimal layouts, vibrant graphics and clear content hierarchy."
                },
                {
                  title: "DEVELOPMENT",
                  desc: "It is built on dynamic code that is responsive and multi-browser compatible. The modular technical system ensures performance, flexibility and long-term scalability."
                }
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
              src="/ourwork/evoqueimpact.webp"
              alt="Evoque Impact Design Process"
              style={{ width: "100%", height: "auto", display: "block" }}
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
              Evoque Impact launched with a futuristic brand identity that aligned better with their vision and strategic direction. The design system we built supports adaptive iteration and content management, helping the brand stay consistent on their branding and messaging.
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
                "/work individual page assets/tie loop scroll img1.webp",
                "/work individual page assets/tie loop scroll img2.webp",
                "/work individual page assets/tie loop scroll img3.webp",
                "/work individual page assets/tie loop scroll img4.webp",
                "/work individual page assets/tie loop scroll img5.webp"
              ].concat([
                "/work individual page assets/tie loop scroll img1.webp",
                "/work individual page assets/tie loop scroll img2.webp",
                "/work individual page assets/tie loop scroll img3.webp",
                "/work individual page assets/tie loop scroll img4.webp",
                "/work individual page assets/tie loop scroll img5.webp"
              ]).map((src, index) => (
                <div key={`row1-${index}`} className="marqueeItem">
                  <img src={src} alt="Evoque Impact Showcase" className="marqueeImg" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (moving left) */}
          <div className="marqueeRow">
            <div className="marqueeTrack marqueeLeft">
              {[
                "/work individual page assets/tie loop scroll img6.webp",
                "/work individual page assets/tie loop scroll img7.webp",
                "/work individual page assets/tie loop scroll img8.webp",
                "/work individual page assets/tie loop scroll img9.webp",
                "/work individual page assets/tie loop scroll img10.webp"
              ].concat([
                "/work individual page assets/tie loop scroll img6.webp",
                "/work individual page assets/tie loop scroll img7.webp",
                "/work individual page assets/tie loop scroll img8.webp",
                "/work individual page assets/tie loop scroll img9.webp",
                "/work individual page assets/tie loop scroll img10.webp"
              ]).map((src, index) => (
                <div key={`row2-${index}`} className="marqueeItem">
                  <img src={src} alt="Evoque Impact Showcase" className="marqueeImg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR CLIENTS SAY'S ABOUT US TESTIMONIAL SECTION */}
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
              src="/work individual page assets/SUMEET AHUJA.webp"
              alt="Sumeet Ahuja"
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
              &ldquo;I worked closely with the Dezu team and watched them bring my vision to life. They got all the content and messaging exactly as I wanted and spent a great deal of attention to detail.&rdquo;
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
                — SUMEET AHUJA
              </h4>
              <p style={{
                fontFamily: "'Albert Sans', sans-serif",
                fontSize: "13px",
                color: "#666666",
                margin: "4px 0 0 0",
                fontWeight: 500,
              }}>
                CEO, Evoque Impact
              </p>
            </div>

            {/* Tags */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "4px"
            }}>
              {["UIUX", "Branding", "Content Strategy"].map((tag, idx) => (
                <span key={idx} style={{
                  backgroundColor: "#9CFF00",
                  color: "#000000",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LatestWork currentProjectId="evoque" />

      <Footer />

      {/* FLOATING BOTTOM NAV */}
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
