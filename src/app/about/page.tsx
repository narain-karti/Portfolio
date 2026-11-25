"use client";

import Image from "next/image";
import Link from "next/link";
import HairlineFigure from "../../components/HairlineFigure";
import { WordReveal, RevealBlock } from "../../components/MotionPrimitives";
import { terminalRigFigure } from "../../data/hairline-figures";
import { NARAIN_PROFILE } from "../../data/portfolio-data";

const ABOUT_PANELS = [
  {
    src: "/images/about_panel_1.jpg",
    alt: "Isometric architectural systems blueprint",
    caption: "01 · Sketching how systems connect",
  },
  {
    src: "/images/about_panel_2.jpg",
    alt: "Minimalist research notebook on dark desk",
    caption: "02 · Foundations at IIT Madras & NIAT",
  },
  {
    src: "/images/about_panel_3.jpg",
    alt: "South Indian filter coffee beside a glowing laptop at night",
    caption: "03 · Late nights shipping software",
  },
];

export default function AboutPage() {
  return (
    <div className="subpage-shell">
      <div className="subpage-container">
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">About</span>
          </div>
          <Link href="/graph" className="subtle-link">
            Knowledge Graph →
          </Link>
        </nav>

        {/* Calm, Welcoming Intro */}
        <header style={{ marginBottom: "2.25rem", maxWidth: "780px" }}>
          <div className="meta-label meta-label-accent" style={{ marginBottom: "0.75rem" }}>
            ABOUT ME
          </div>
          <WordReveal as="h1" className="about-intro-text" stagger={0.024}>
            {NARAIN_PROFILE.positioningStatement}
          </WordReveal>
        </header>

        {/* 3 Distinct Theme-Matched Images */}
        <RevealBlock className="portrait-grid" inView={false} delay={0.12}>
          {ABOUT_PANELS.map((panel) => (
            <div key={panel.src} className="portrait-card">
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="portrait-caption">{panel.caption}</div>
            </div>
          ))}
        </RevealBlock>

        <RevealBlock className="spectrum-line" delay={0.1}>
          Usually somewhere between sketching an architecture at midnight and{" "}
          <span className="spectrum-word">shipping it cleanly</span>
        </RevealBlock>

        {/* Personal Notes — Calm & Readable */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "1.35rem",
            marginBottom: "4rem",
          }}
        >
          {NARAIN_PROFILE.bioParagraphs.map((para, idx) => (
            <RevealBlock
              key={idx}
              delay={idx * 0.06}
              style={{
                background: "#131314",
                border: "1px solid #242427",
                borderRadius: "14px",
                padding: "1.5rem",
              }}
            >
              <div className="meta-label" style={{ marginBottom: "0.65rem" }}>
                0{idx + 1}
              </div>
              <WordReveal
                as="p"
                inView
                stagger={0.012}
                style={{ fontSize: "0.96rem", lineHeight: 1.66, color: "rgba(255,255,255,0.84)" }}
              >
                {para}
              </WordReveal>
            </RevealBlock>
          ))}
        </div>

        {/* Interactive Console Rig */}
        <RevealBlock style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "1rem",
            }}
          >
            <h2 className="section-heading">Interactive Profile Rig</h2>
            <a
              href="/hairline-terminal-rig.html"
              target="_blank"
              rel="noopener noreferrer"
              className="subtle-link"
            >
              Open standalone view ↗
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
                background: "#131314",
                border: "1px solid #242427",
                borderRadius: "14px",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <HairlineFigure
                figure={terminalRigFigure}
                plateColor="#131314"
                showReadout={false}
                style={{ maxWidth: "420px", margin: "0 auto" }}
              />
            </div>

            <div
              style={{
                background: "#0d1117",
                border: "1px solid #242427",
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
        </RevealBlock>

        {/* Education */}
        <RevealBlock style={{ marginBottom: "4rem" }}>
          <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
            Education &amp; Academic Distinctions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            {NARAIN_PROFILE.education.map((edu) => (
              <div
                key={edu.institution}
                style={{
                  background: "#131314",
                  border: "1px solid #242427",
                  borderRadius: "14px",
                  padding: "1.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span className="meta-label meta-label-accent">{edu.short}</span>
                  <span className="meta-label">{edu.period}</span>
                </div>
                <h3 style={{ fontSize: "1.18rem", marginBottom: "6px" }}>{edu.institution}</h3>
                <div style={{ fontSize: "0.94rem", color: "#e5e5e5", marginBottom: "8px", fontWeight: 500 }}>
                  {edu.degree}
                </div>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>{edu.focus}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.85rem" }}>
            {NARAIN_PROFILE.academicAchievements.map((item) => (
              <div
                key={item}
                style={{
                  background: "#131314",
                  border: "1px solid #242427",
                  borderRadius: "10px",
                  padding: "0.9rem 1.1rem",
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </RevealBlock>

        {/* Three-Pillar Direction */}
        <RevealBlock style={{ marginBottom: "3.5rem" }}>
          <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
            How I Approach Building
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {NARAIN_PROFILE.threePillars.map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  background: "#131314",
                  border: "1px solid #242427",
                  borderRadius: "14px",
                  padding: "1.35rem",
                }}
              >
                <div className="meta-label meta-label-accent" style={{ marginBottom: "8px" }}>
                  {pillar.title}
                </div>
                <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.74)", lineHeight: 1.58 }}>{pillar.detail}</p>
              </div>
            ))}
          </div>
        </RevealBlock>

        {/* Interests */}
        <RevealBlock style={{ marginBottom: "2rem" }}>
          <h2 className="section-heading" style={{ color: "#9a9aa2", marginBottom: "1.1rem" }}>
            What I enjoy working on
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
            {NARAIN_PROFILE.services.map((service) => (
              <h3 key={service} className="hire-service-item">
                {service}
              </h3>
            ))}
          </div>
        </RevealBlock>
      </div>
    </div>
  );
}
