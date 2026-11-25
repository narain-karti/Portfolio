"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HairlineFigure from "../../components/HairlineFigure";
import { WordReveal, RevealBlock } from "../../components/MotionPrimitives";
import { quorumRingFigure } from "../../data/hairline-figures";
import {
  AWARDS,
  BUILDER_PRINCIPLES,
  EXPERIENCES,
  TOOLKIT,
} from "../../data/portfolio-data";

const QUORUM_ROLES = [
  { id: 0, code: "CEO", note: "Vision" },
  { id: 1, code: "CFO", note: "Runway" },
  { id: 2, code: "CTO", note: "Latency" },
  { id: 3, code: "CONT", note: "Risks" },
  { id: 4, code: "CMO", note: "Market" },
  { id: 5, code: "COO", note: "Ops" },
];

function SkillDots({ level }: { level: number }) {
  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((dot) => (
        <span
          key={dot}
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "2px",
            backgroundColor: dot <= level ? "#ffffff" : "rgba(255,255,255,0.16)",
          }}
        />
      ))}
    </div>
  );
}

export default function BuilderPage() {
  const [activeSeat, setActiveSeat] = useState<number>(-1);
  const categories = [
    { key: "languages", label: "Languages" },
    { key: "ai", label: "AI, Vision & Data" },
    { key: "backend", label: "Systems & Cloud" },
    { key: "frontend", label: "Interfaces & 3D" },
  ] as const;

  return (
    <div className="subpage-shell">
      <div className="subpage-container">
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Impact &amp; Experience</span>
          </div>
          <Link href="/downloads" className="subtle-link">
            Resume PDF →
          </Link>
        </nav>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "center",
            marginBottom: "4rem",
          }}
        >
          <div>
            <WordReveal as="h1" className="page-title" stagger={0.025}>
              Ventures, leadership, and real constraints.
            </WordReveal>
            <WordReveal as="p" className="hero-subcopy" delay={0.1} stagger={0.015}>
              Every role, company, and award here came from shipping work for real people — client systems, student cohorts, and national hackathons.
            </WordReveal>
          </div>

          <RevealBlock
            inView={false}
            delay={0.12}
            style={{
              background: "#131314",
              border: "1px solid #242427",
              borderRadius: "14px",
              padding: "1.15rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span className="meta-label">QUORUM COUNCIL</span>
              <span className="meta-label meta-label-accent">
                {activeSeat >= 0 ? `${QUORUM_ROLES[activeSeat].code} · ${QUORUM_ROLES[activeSeat].note}` : "Hover plinths"}
              </span>
            </div>
            <HairlineFigure
              figure={quorumRingFigure}
              plateColor="#131314"
              activeStep={activeSeat}
              autoTour={activeSeat < 0}
              onStepHover={setActiveSeat}
              showReadout={false}
              style={{ maxWidth: "290px", margin: "0 auto", aspectRatio: "5 / 4" }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px", justifyContent: "center" }}>
              {QUORUM_ROLES.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onMouseEnter={() => setActiveSeat(r.id)}
                  onMouseLeave={() => setActiveSeat(-1)}
                  onClick={() => setActiveSeat(activeSeat === r.id ? -1 : r.id)}
                  className={`filter-tab ${activeSeat === r.id ? "filter-tab-active" : ""}`}
                  style={{ fontSize: "0.72rem" }}
                >
                  {r.code}
                </button>
              ))}
            </div>
          </RevealBlock>
        </div>

        {/* 1. Principles */}
        <section style={{ marginBottom: "4.25rem" }}>
          <h2 className="section-heading" style={{ marginBottom: "1.35rem" }}>
            How I Like to Build
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.15rem" }}>
            {BUILDER_PRINCIPLES.map((p, idx) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 14, scale: 0.99 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 360, damping: 26 } }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.38, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "#131314",
                  border: "1px solid #242427",
                  borderRadius: "14px",
                  padding: "1.4rem",
                }}
              >
                <div className="meta-label meta-label-accent" style={{ marginBottom: "0.6rem" }}>
                  {p.number}
                </div>
                <h3 style={{ fontSize: "1.18rem", marginBottom: "0.55rem" }}>{p.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.56 }}>{p.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. Experience Timeline */}
        <section style={{ marginBottom: "4.25rem" }}>
          <h2 className="section-heading" style={{ marginBottom: "1.35rem" }}>
            Experience &amp; Leadership
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.15rem" }}>
            {EXPERIENCES.map((exp, idx) => (
              <RevealBlock
                key={exp.id}
                delay={Math.min(idx * 0.04, 0.2)}
                interactive
                style={{
                  background: "#131314",
                  border: "1px solid #242427",
                  borderRadius: "14px",
                  padding: "1.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "0.65rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: "1.26rem" }}>{exp.company}</h3>
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="subtle-link"
                          style={{ color: "#6ee7b7" }}
                        >
                          {exp.url.replace("https://", "")} ↗
                        </a>
                      )}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.74)", fontSize: "0.94rem", marginTop: "3px" }}>
                      {exp.role} · <span style={{ color: "#8e8e93" }}>{exp.location}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="meta-label meta-label-accent">{exp.badge}</div>
                    <div className="meta-label" style={{ marginTop: "3px" }}>{exp.period}</div>
                  </div>
                </div>

                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "0.9rem", fontSize: "0.94rem" }}>
                  {exp.summary}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", marginBottom: "0.9rem" }}>
                  {exp.highlights.map((h) => (
                    <li key={h} style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.66)", lineHeight: 1.5 }}>
                      · {h}
                    </li>
                  ))}
                </ul>

                <div className="meta-label" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {exp.stack.join(" · ")}
                </div>
              </RevealBlock>
            ))}
          </div>
        </section>

        {/* 3. Awards */}
        <section style={{ marginBottom: "4.25rem" }}>
          <h2 className="section-heading" style={{ marginBottom: "1.35rem" }}>
            Awards &amp; Competitions
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {AWARDS.map((a, idx) => (
              <RevealBlock key={a.id} delay={idx * 0.05}>
                <Link
                  href={a.linkedProject ? `/work?project=${a.linkedProject}` : "/work"}
                  style={{
                    background: "#131314",
                    border: "1px solid #242427",
                    borderRadius: "14px",
                    padding: "1.35rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    gap: "10px",
                    transition: "transform 0.18s ease, border-color 0.18s ease",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span className="meta-label meta-label-accent">{a.prize}</span>
                      <span className="meta-label">{a.year}</span>
                    </div>
                    <h3 style={{ fontSize: "1.08rem", marginBottom: "6px" }}>{a.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.66)", lineHeight: 1.52 }}>{a.story}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="meta-label">
                    <span>{a.org}</span>
                    <span style={{ color: "#6ee7b7" }}>View project →</span>
                  </div>
                </Link>
              </RevealBlock>
            ))}
          </div>
        </section>

        {/* 4. Tech Matrix */}
        <section>
          <h2 className="section-heading" style={{ marginBottom: "1.35rem" }}>
            Tools I Build With
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {categories.map((cat, idx) => {
              const tools = TOOLKIT.filter((t) => t.category === cat.key);
              return (
                <RevealBlock
                  key={cat.key}
                  delay={idx * 0.05}
                  style={{
                    background: "#131314",
                    border: "1px solid #242427",
                    borderRadius: "14px",
                    padding: "1.4rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.14rem",
                      paddingBottom: "0.75rem",
                      marginBottom: "1rem",
                      borderBottom: "1px solid #222226",
                    }}
                  >
                    {cat.label}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                    {tools.map((tool) => (
                      <div key={tool.name}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3px" }}>
                          <span style={{ fontWeight: 600, fontSize: "0.94rem" }}>{tool.name}</span>
                          <SkillDots level={tool.level} />
                        </div>
                        <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.64)", marginBottom: "3px" }}>
                          {tool.description}
                        </p>
                        <div className="meta-label meta-label-accent">{tool.provenIn}</div>
                      </div>
                    ))}
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
