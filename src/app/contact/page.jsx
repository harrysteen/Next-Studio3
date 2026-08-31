"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./contact.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("message");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "",
    services: { branding: false, uiux: false, webDev: false, contentStrategy: false, other: false },
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, services: { ...prev.services, [name]: checked } }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceLabels = { branding: "Branding", uiux: "UI/UX Design", webDev: "Website Development", contentStrategy: "Content Strategy", other: "Other" };
    const selectedServices = Object.entries(formData.services)
      .filter(([, v]) => v)
      .map(([k]) => serviceLabels[k])
      .join(", ") || "None selected";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          services: selectedServices,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "", email: "", phone: "", company: "", message: "",
          services: { branding: false, uiux: false, webDev: false, contentStrategy: false, other: false },
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.contactWrapper}>
      <Navbar />

      <main className={styles.contactMain}>
        <div className={styles.contentContainer}>

          {/* LEFT SIDE */}
          <div className={styles.leftColumn}>
            <h1 className={styles.headline}>
              <span className={styles.highlight}>LET&apos;S START</span> WITH QUESTIONS.<br />
              AND END WITH ALIGNMENT.
            </h1>
            <p className={styles.description}>
              We believe in understanding deeply and intentionally. This gives us a headstart
              on the creative process and the momentum to build the best. Reach out to us today
              and let&apos;s build some amazing things together!
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.infoLine}></div>
              <div>
                <a href="mailto:dev@studiodezu.com" className={styles.email}>
                  dev@studiodezu.com
                </a>
                <div className={styles.socialIcons}>
                  {/* LinkedIn */}
                  <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className={styles.socialIcon} aria-label="Facebook">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className={styles.socialIcon} aria-label="Instagram">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM CARD) */}
          <div className={styles.rightColumn}>
            <div className={styles.formCard}>
              <div className={styles.tabs}>
                <button
                  className={`${styles.tabBtn} ${activeTab === "message" ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab("message")}
                >
                  Send Message
                </button>
                <button
                  className={`${styles.tabBtn} ${activeTab === "call" ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab("call")}
                >
                  Book A Call
                </button>
              </div>

              {status === "success" ? (
                <div style={{ padding: "40px 20px", textAlign: "center", color: "#ABFF4F" }}>
                  <p style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>Message sent! ✓</p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                    We&apos;ll get back to you shortly at dev@studiodezu.com
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    style={{ marginTop: "20px", background: "none", border: "1px solid #ABFF4F", color: "#ABFF4F", padding: "8px 20px", borderRadius: "4px", cursor: "pointer" }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <input type="text" name="name" placeholder="Name" className={styles.input} value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="E-Mail" className={styles.input} value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className={styles.row}>
                    <input type="tel" name="phone" placeholder="Phone Number" className={styles.input} value={formData.phone} onChange={handleChange} />
                    <input type="text" name="company" placeholder="Company Name" className={styles.input} value={formData.company} onChange={handleChange} />
                  </div>

                  <div className={styles.servicesGroup}>
                    <label className={styles.groupLabel}>What Services Are You Interested In?</label>
                    <div className={styles.checkboxes}>
                      <label className={styles.checkboxItem}><input type="checkbox" name="branding" checked={formData.services.branding} onChange={handleChange} /> Branding</label>
                      <label className={styles.checkboxItem}><input type="checkbox" name="uiux" checked={formData.services.uiux} onChange={handleChange} /> UI/UX Design</label>
                      <label className={styles.checkboxItem}><input type="checkbox" name="webDev" checked={formData.services.webDev} onChange={handleChange} /> Website Development</label>
                      <label className={styles.checkboxItem}><input type="checkbox" name="contentStrategy" checked={formData.services.contentStrategy} onChange={handleChange} /> Content Strategy</label>
                      <label className={styles.checkboxItem}><input type="checkbox" name="other" checked={formData.services.other} onChange={handleChange} /> Other</label>
                    </div>
                  </div>

                  <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder="Talk About Your Project"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                  {status === "error" && (
                    <p style={{ color: "#ff6b6b", fontSize: "13px", marginBottom: "8px" }}>
                      Something went wrong. Please try again or email us directly at dev@studiodezu.com
                    </p>
                  )}

                  <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>


      </main>


      <Footer />
    </div>
  );
}