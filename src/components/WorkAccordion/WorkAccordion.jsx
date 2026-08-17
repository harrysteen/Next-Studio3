"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkAccordion({ items, defaultActiveIndex = 0, accentColor = "#9cff00", onChange }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const toggleItem = (idx) => {
    const nextIdx = activeIndex === idx ? null : idx;
    setActiveIndex(nextIdx);
    if (onChange) onChange(nextIdx);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;

        return (
          <div
            key={idx}
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              paddingBottom: "18px",
              paddingTop: "6px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => toggleItem(idx)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                userSelect: "none",
              }}
            >
              <h3
                style={{
                  color: isOpen ? accentColor : "#ffffff",
                  fontSize: "18px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontFamily: "var(--font-albert), 'Albert Sans', sans-serif",
                  margin: 0,
                  transition: "color 0.3s ease",
                }}
              >
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    scale: isOpen ? 1.15 : 1,
                    color: isOpen ? accentColor : "#ffffff",
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: 1,
                    width: "20px",
                    height: "20px",
                    transformOrigin: "center",
                  }}
                >
                  +
                </motion.span>
                <span>{item.title}</span>
              </h3>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && item.desc && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <motion.p
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -6, opacity: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    style={{
                      marginTop: "16px",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "#b0b0b0",
                      fontFamily: "'Albert Sans', sans-serif",
                      paddingLeft: "34px",
                    }}
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
