"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TransitionLink from "../../components/TransitionLink";
import ScrollFloat from "../../blocks/TextAnimations/ScrollFloat/ScrollFloat";
import HairlineFigure from "../../components/HairlineFigure";
import { terminalRigFigure } from "../../data/hairline-figures";
import { NARAIN_PROFILE } from "../../data/portfolio-data";

export default function AboutPage() {
  return (
    <div className="subpage-shell">
      <div className="subpage-container">
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <TransitionLink href="/">Home</TransitionLink>
            <span>/</span>
            <span className="breadcrumb-current">About</span>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <TransitionLink href="/graph" className="grid-card-pill">
              Explore Knowledge Graph →
            </TransitionLink>
            <span className="grid-card-pill grid-card-pill-live">{NARAIN_PROFILE.availability}</span>
          </div>
        </nav>

        {/* Smooth Word Intro */}
        <div style={{ marginBottom: "2.25rem" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#6ee7b7", marginBottom: "0.75rem" }}>
            {NARAIN_PROFILE.headline.toUpperCase()}
          </div>
          <ScrollFloat textClassName="about-intro-text" animationDuration={0.22} stagger={0.012}>
            {NARAIN_PROFILE.positioningStatement}
          </ScrollFloat>
        </div>

        {/* 3-Panel Visual Spectrum (Pixel Art Stickers + Photo) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="portrait-grid"
        >
          <div className="portrait-card">
            <Image
              src="/assets/sticker_architect.png"
              alt="Narain Pixel Architect"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "contain", padding: "1.5rem 1.5rem 3.5rem" }}
            />
            <div className="portrait-caption">01 // SYSTEM SKETCHING (32-BIT PIXEL)</div>
          </div>

          <div className="portrait-card">
            <Image
              src="/images/hero_avatar.jpg"
              alt="Narain Karti"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="portrait-caption">02 // CHENNAI · IITM × NXTWAVE</div>
          </div>

          <div className="portrait-card">
            <Image
              src="/assets/sticker_coffee.png"
              alt="Narain Pixel Coffee Mode"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "contain", padding: "1.5rem 1.5rem 3.5rem" }}
            />
            <div className="portrait-caption">03 // LATE-NIGHT DEBUGGING (32-BIT PIXEL)</div>
          </div>
        </motion.div>

        <div className="spectrum-line">
          Mostly somewhere between prototyping at 2 AM and shipping{" "}
          <motion.span
            className="spectrum-word"
            animate={{ opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            real systems
          </motion.span>
        </div>

        {/* Personal Notes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {NARAIN_PROFILE.bioParagraphs.map((para, idx) => (
            <div
              key={idx}
              style={{
                background: "#131313",
                border: "1px solid #242424",
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#888", marginBottom: "0.65rem" }}>
                NOTE 0{idx + 1}
              </div>
              <p style={{ fontSize: "0.98rem", lineHeight: 1.66, color: "rgba(255,255,255,0.86)" }}>{para}</p>
            </div>
          ))}
        </div>

        {/* Adopted Hairline Isometric Terminal Rig + Original Terminal SVG */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: "#888" }}>
              PROFILE RIG // SVG + /hairline-adopt ISOMETRIC CONSOLE
            </span>
            <a
              href="/hairline-terminal-rig.html"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-card-pill"
            >
              Open Standalone Rig ↗
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.25rem",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "#141414",
                border: "1px solid #282828",
                borderRadius: "14px",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#6ee7b7", marginBottom: "6px" }}>
                ADOPTED 3D CONSOLE (HOVER LEFT MATRIX OR RIGHT BARS)
              </div>
              <HairlineFigure
                figure={terminalRigFigure}
                plateColor="#141414"
                labelPrefix="rig"
                style={{ maxWidth: "420px", margin: "0 auto" }}
              />
            </div>

            <div
              style={{
                background: "#0d1117",
                border: "1px solid #2b2b2b",
                borderRadius: "14px",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/terminal_profile.svg"
                alt="Narain Karti Terminal Telemetry"
                width={920}
                height={468}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* Dual Degree Education & Academic Milestones */}
        <section style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.55rem", marginBottom: "1.25rem" }}>Education &amp; Academic Distinctions</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.25rem", marginBottom: "1.25rem" }}>
            {NARAIN_PROFILE.education.map((edu) => (
              <div
                key={edu.institution}
                style={{
                  background: "#141414",
                  border: "1px solid #262626",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="grid-card-pill">{edu.short}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: "#888" }}>{edu.period}</span>
                </div>
                <h3 style={{ fontSize: "1.18rem", marginBottom: "6px" }}>{edu.institution}</h3>
                <div style={{ fontSize: "0.94rem", color: "#e5e5e5", marginBottom: "8px", fontWeight: 500 }}>
                  {edu.degree}
                </div>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{edu.focus}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.85rem" }}>
            {NARAIN_PROFILE.academicAchievements.map((item) => (
              <div
                key={item}
                style={{
                  background: "#121214",
                  border: "1px solid #242426",
                  borderRadius: "10px",
                  padding: "0.95rem 1.15rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "#6ee7b7",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* Three-Pillar Future Vision */}
        <section style={{ marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "1.55rem", marginBottom: "1.25rem" }}>Long-Term Direction: Research → Products → Open Source</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {NARAIN_PROFILE.threePillars.map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  background: "#141414",
                  border: "1px solid #262626",
                  borderRadius: "12px",
                  padding: "1.35rem",
                }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#6ee7b7", marginBottom: "8px" }}>
                  {pillar.title}
                </div>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.55 }}>{pillar.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open for */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", color: "#9a9a9a", marginBottom: "1.25rem", fontWeight: 500 }}>
            What I love working on
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {NARAIN_PROFILE.services.map((service) => (
              <h3 key={service} className="hire-service-item">
                {service}
              </h3>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
