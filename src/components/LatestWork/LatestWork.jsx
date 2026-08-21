"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import useResponsive from '../../hooks/useResponsive';

const allProjects = [
  { id: 'evoque', title: 'Evoque Impact', year: '2026', tags: 'Brand Identity, Content Strategy', img: '/ourwork/evoqueimpact.webp', href: '/EvoqueImpact' },
  { id: 'naeemzafar', title: 'Naeem Zafar', year: '2025', tags: 'Branding, UI/UX Design', img: '/ourwork/naeeamzafar.webp', href: '/NaeemZafar' },
  { id: 'tie', title: 'TiE Silicon Valley', year: '2024', tags: 'Rebranding, UI Design', img: '/ourwork/siliconvalley.webp', href: '/TieSiliconValley' },
  { id: 'lifecykul', title: 'Life Cykul', year: '2026', tags: 'Rebranding, Interface Design', img: '/ourwork/lifecykul.webp', href: '/LifeCykul' },
  { id: 'ventura', title: 'Ventura Pranas', year: '2024', tags: 'Branding, UX Research', img: '/ourwork/venturawork.webp', href: '/VenturaPranas' },
  { id: 'highcloud', title: 'HighCloud Solutions', year: '2025', tags: 'Rebranding, UI/UX Design', img: '/ourwork/highcloudwork.webp', href: '/HighCloud' },
  { id: 'pontis', title: 'Pontis', year: '2025', tags: 'Education, Branding, UI/UX Design', img: '/work individual page assets/pointis thumbnail.webp?v=2', href: '/Pontis' },
  // { id: 'eham', title: 'EHAM', year: '2026', tags: 'Technology, Strategy, UI/UX, Development', img: '/ourwork/highcloudwork.webp', href: '/Eham' }, // Hidden – can be restored later
  { id: 'leiutis', title: 'Leiutis', year: '2023', tags: 'Content Design', img: '/ourwork/leiutis.webp', href: '/Leiutis' },
  { id: 'kshatriyas', title: 'The Kshatriyas', year: '2025', tags: 'UIUX, Product Design, Development', img: '/ourwork/kshatriyaswork.webp', href: '/TheKshatriyas' },
  // { id: 'studenttribe', title: 'Student Tribe', year: '2026', tags: 'Education, Branding, UI/UX Design', img: '/ourwork/studenttribe.webp', href: '/StudentTribe' }, // Coming soon
  // { id: 'qylis', title: 'Qylis', year: '2026', tags: 'Technology, UI/UX Design', img: '/ourwork/qylis.webp', href: '/Qylis' }, // Coming soon
  { id: 'madbox', title: 'Mad Box', year: '2025', tags: 'Branding, Packaging Design', img: '/ourwork/madboxwork.webp', href: '/Madbox' },
  { id: 'ecomall', title: 'Ecomall', year: '2025', tags: 'Branding, UI/UX Design', img: '/ourwork/ecomallwork.webp', href: '/Ecomall' },
  { id: 'mall360', title: 'Mall 360', year: '2025', tags: 'Branding, UI/UX Design', img: '/ourwork/mall360.webp', href: '/Mall360' },
];


export default function LatestWork({ currentProjectId }) {
  const { width } = useResponsive();
  const sliderRef = useRef(null);

  const projectsToShow = allProjects.filter(
    (p) => p.id !== currentProjectId && p.href.toLowerCase() !== `/${(currentProjectId || '').toLowerCase()}`
  );

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      width: "90%",
      maxWidth: "1200px",
      margin: "80px auto 100px auto",
      position: "relative",
    }}>
      {/* Header with Title & Controls */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: width <= 768 ? "24px" : "36px",
      }}>
        <h2 style={{
          fontSize: width <= 480 ? "24px" : width <= 768 ? "32px" : "42px",
          fontWeight: 700,
          textTransform: "uppercase",
          fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
          letterSpacing: "-0.5px",
          color: "#FFFFFF",
          margin: 0,
          lineHeight: 1.2
        }}>
          EXPLORE <span style={{ color: "#9cff00" }}>OUR WORK</span>
        </h2>

        {/* Navigation Arrows */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={scrollLeft}
            aria-label="Previous Case Study"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FFFFFF",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#9cff00";
              e.currentTarget.style.color = "#000000";
              e.currentTarget.style.borderColor = "#9cff00";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next Case Study"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FFFFFF",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#9cff00";
              e.currentTarget.style.color = "#000000";
              e.currentTarget.style.borderColor = "#9cff00";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={sliderRef}
        style={{
          display: "flex",
          gap: "24px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: "10px",
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            div::-webkit-scrollbar { display: none; }
          `
        }} />

        {projectsToShow.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            style={{
              flex: width <= 480 ? "0 0 82%" : width <= 768 ? "0 0 45%" : "0 0 calc(25% - 18px)",
              minWidth: width <= 480 ? "240px" : "270px",
              scrollSnapAlign: "start",
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#1a0b2e",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
            }}
          >
            {/* Image Wrap */}
            <div style={{
              width: "100%",
              height: width <= 480 ? "200px" : "260px",
              overflow: "hidden",
              backgroundColor: "#110520",
            }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Footer Meta */}
            <div style={{
              padding: "16px 18px",
              backgroundColor: "#1b0634",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#9cff00",
                  margin: 0,
                }}>
                  {item.title}
                </h3>
                <span style={{
                  fontFamily: "'Albert Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#e0e0e0",
                }}>
                  {item.year}
                </span>
              </div>
              <p style={{
                fontFamily: "'Albert Sans', sans-serif",
                fontSize: "12px",
                color: "rgba(255, 255, 255, 0.7)",
                margin: 0,
              }}>
                {item.tags}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
