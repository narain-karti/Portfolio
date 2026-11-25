"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Cpu } from "lucide-react";
import TransitionLink from "../../components/TransitionLink";
import HairlineFigure from "../../components/HairlineFigure";
import { quorumRingFigure } from "../../data/hairline-figures";
import {
  AWARDS,
  BUILDER_PRINCIPLES,
  EXPERIENCES,
  TOOLKIT,
} from "../../data/portfolio-data";

const QUORUM_ROLES = [
  { id: 0, code: "CEO", note: "Strategic Vision" },
  { id: 1, code: "CFO", note: "Burn Ceiling" },
  { id: 2, code: "CTO", note: "Latency & Scale" },
  { id: 3, code: "CONT", note: "Red-Team Flaws" },
  { id: 4, code: "CMO", note: "Market Positioning" },
  { id: 5, code: "COO", note: "Execution Risk" },
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
            backgroundColor: dot <= level ? "#ffffff" : "rgba(255,255,255,0.18)",
          }}
        />
      ))}
    </div>
  );
}

export default function BuilderPage() {
  const [activeSeat, setActiveSeat] = useState<number>(-1);
  const categories = [
    { key: "languages", label: "Core Languages" },
    { key: "ai", label: "AI, Vision & Data Kernels" },
    { key: "backend", label: "Distributed Systems & Edge" },
    { key: "frontend", label: "Interfaces & 3D Visualization" },
  ] as const;

  return (
    <>
      <div className="subpage-shell">
        <div className="subpage-container">
          <nav className="breadcrumb-nav">
            <div className="breadcrumb-trail">
              <TransitionLink href="/">Home</TransitionLink>
              <span>/</span>
              <span className="breadcrumb-current">Builder&apos;s Index</span>
            </div>
            <TransitionLink href="/downloads" className="grid-card-pill">
              Download Resume PDF →
            </TransitionLink>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "2rem",
              alignItems: "center",
              marginBottom: "4rem",
            }}
          >
            <div>
              <h1 className="hero-manifesto">
                Built around constraints: RAM limits, edge latency, and systems that keep running offline.
              </h1>
              <p className="hero-subcopy">
                Every role, award, and tool listed here comes from real launches — PyPI packages, client contracts, or national hackathon builds.
              </p>
            </div>

            <div
              style={{
                background: "#141414",
                border: "1px solid #262626",
                borderRadius: "16px",
                padding: "1.15rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#888" }}>
                  DIALECTIC ENGINE // QUORUM RING
                </span>
                <span className="mini-tag" style={{ color: activeSeat >= 0 ? "#6ee7b7" : "#9a9a9a" }}>
                  {activeSeat >= 0 ? `${QUORUM_ROLES[activeSeat].code} · ${QUORUM_ROLES[activeSeat].note}` : "Hover plinths"}
                </span>
              </div>
              <HairlineFigure
                figure={quorumRingFigure}
                plateColor="#141414"
                activeStep={activeSeat}
                onStepHover={setActiveSeat}
                labelPrefix="quorum"
                style={{ maxWidth: "300px", margin: "0 auto", aspectRatio: "5 / 4" }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
                {QUORUM_ROLES.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onMouseEnter={() => setActiveSeat(r.id)}
                    onMouseLeave={() => setActiveSeat(-1)}
                    onClick={() => setActiveSeat(activeSeat === r.id ? -1 : r.id)}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      border: activeSeat === r.id ? "1px solid #6ee7b7" : "1px solid #2b2b2b",
                      background: activeSeat === r.id ? "rgba(110, 231, 183, 0.14)" : "#0e0e0e",
                      color: activeSeat === r.id ? "#6ee7b7" : "#a3a3a3",
                      cursor: "pointer",
                    }}
                  >
                    0{r.id + 1} {r.code}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 1. Engineering Principles */}
          <section style={{ marginBottom: "4.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
              <Cpu size={18} color="#9a9a9a" />
              <h2 style={{ fontSize: "1.5rem" }}>Engineering Principles</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {BUILDER_PRINCIPLES.map((p, idx) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  style={{
                    background: "#141414",
                    border: "1px solid #262626",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    position: "relative",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#6ee7b7", marginBottom: "0.7rem" }}>
                    PRINCIPLE {p.number}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "0.6rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.55 }}>{p.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 2. Experience Timeline */}
          <section style={{ marginBottom: "4.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
              <Briefcase size={18} color="#9a9a9a" />
              <h2 style={{ fontSize: "1.5rem" }}>
                Experience, Ventures &amp; Leadership ({EXPERIENCES.length} Roles)
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  style={{
                    background: "#141414",
                    border: "1px solid #262626",
                    borderRadius: "14px",
                    padding: "1.65rem",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "0.65rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <h3 style={{ fontSize: "1.3rem" }}>{exp.company}</h3>
                        <span className="mini-tag">{exp.kind}</span>
                        {exp.url && (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#6ee7b7" }}
                          >
                            {exp.url.replace("https://", "")} ↗
                          </a>
                        )}
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", marginTop: "3px" }}>
                        {exp.role} · <span style={{ color: "#888" }}>{exp.location}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                      <span className="grid-card-pill grid-card-pill-live">{exp.badge}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#888" }}>{exp.period}</span>
                    </div>
                  </div>

                  <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: "1rem", fontSize: "0.95rem" }}>
                    {exp.summary}
                  </p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", marginBottom: "1rem" }}>
                    {exp.highlights.map((h) => (
                      <li key={h} style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.5 }}>
                        • {h}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.stack.map((s) => (
                      <span key={s} className="mini-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Verified Awards */}
          <section style={{ marginBottom: "4.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
              <Award size={18} color="#9a9a9a" />
              <h2 style={{ fontSize: "1.5rem" }}>Competition Podiums &amp; Grants (5+ Wins)</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
              {AWARDS.map((a) => (
                <TransitionLink
                  key={a.id}
                  href={a.linkedProject ? `/work?project=${a.linkedProject}` : "/work"}
                  style={{
                    background: "#131313",
                    border: "1px solid #262626",
                    borderRadius: "12px",
                    padding: "1.35rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "10px",
                    transition: "transform 0.16s ease, border-color 0.16s ease",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span className="grid-card-pill grid-card-pill-live">{a.prize}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#888" }}>{a.year}</span>
                    </div>
                    <h3 style={{ fontSize: "1.05rem", marginBottom: "6px" }}>{a.title}</h3>
                    <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{a.story}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#6ee7b7" }}>
                    <span>{a.org}</span>
                    <span>Inspect project →</span>
                  </div>
                </TransitionLink>
              ))}
            </div>
          </section>

          {/* 4. Categorized Tech Stack */}
          <section>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Production Tech Matrix</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
              {categories.map((cat) => {
                const tools = TOOLKIT.filter((t) => t.category === cat.key);
                return (
                  <div
                    key={cat.key}
                    style={{
                      background: "#141414",
                      border: "1px solid #262626",
                      borderRadius: "14px",
                      padding: "1.4rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.12rem",
                        paddingBottom: "0.75rem",
                        marginBottom: "1rem",
                        borderBottom: "1px solid #262626",
                      }}
                    >
                      {cat.label}
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                      {tools.map((tool) => (
                        <div
                          key={tool.name}
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            borderRadius: "8px",
                            padding: "10px 12px",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                            <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{tool.name}</span>
                            <SkillDots level={tool.level} />
                          </div>
                          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.62)", marginBottom: "4px" }}>
                            {tool.description}
                          </p>
                          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#6ee7b7" }}>
                            Shipped in: {tool.provenIn}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
