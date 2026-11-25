"use client";

import { useState } from "react";
import { ArrowUpRight, Play, Pause, FlaskConical, GitBranch } from "lucide-react";
import TransitionLink from "../../components/TransitionLink";
import HairlineFigure from "../../components/HairlineFigure";
import {
  quorumRingFigure,
  edgeFieldFigure,
  pipelineLayersFigure,
  terminalRigFigure,
} from "../../data/hairline-figures";
import { NARAIN_PROFILE, RESEARCH_DIRECTIONS } from "../../data/portfolio-data";

const FIGURES = [
  { id: "quorum", label: "01 · Quorum Ring", spec: quorumRingFigure, note: "6-seat council ring synced to pointer proximity." },
  { id: "field", label: "02 · Edge Tensor Field", spec: edgeFieldFigure, note: "36-pillar compute matrix rising on independent springs." },
  { id: "pipeline", label: "03 · Pipeline Stack", spec: pipelineLayersFigure, note: "4-tier exploded stack eased on cubic-bezier lifts." },
  { id: "terminal", label: "04 · Terminal Rig (Adopted)", spec: terminalRigFigure, note: "Adopted from terminal_profile.svg via /hairline-adopt." },
] as const;

const WORKFLOW_STAGES = [
  "Problem Discovery",
  "Literature Review",
  "Hypothesis",
  "Experimentation",
  "Technical Results",
  "Research Paper",
  "Real Product",
  "Open Source",
];

export default function ResearchLabPage() {
  const [selectedId, setSelectedId] = useState<(typeof FIGURES)[number]["id"]>("quorum");
  const [intensity, setIntensity] = useState(0.5);
  const [touring, setTouring] = useState(false);

  const activeFig = FIGURES.find((f) => f.id === selectedId) ?? FIGURES[0];

  return (
    <div className="subpage-shell">
      <div className="subpage-container" style={{ maxWidth: "1060px" }}>
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <TransitionLink href="/">Home</TransitionLink>
            <span>/</span>
            <span className="breadcrumb-current">Research, Open Source &amp; Lab</span>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <TransitionLink href="/downloads" className="grid-card-pill">
              Resources &amp; Résumé →
            </TransitionLink>
            <TransitionLink href="/graph" className="grid-card-pill grid-card-pill-live">
              Knowledge Graph →
            </TransitionLink>
          </div>
        </nav>

        <div style={{ marginBottom: "2.5rem" }}>
          <h1 className="hero-manifesto">Research Tracks, Open Source &amp; Interactive Lab.</h1>
          <p className="hero-subcopy">
            Exploring AI infrastructure, leakage-free data kernels, offline industrial models, and adversarial agents — paired with the live isometric Hairline figures built across this site.
          </p>
        </div>

        {/* Research-to-Product Workflow */}
        <section
          style={{
            background: "#131315",
            border: "1px solid #26262a",
            borderRadius: "14px",
            padding: "1.25rem 1.4rem",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#6ee7b7", marginBottom: "10px" }}>
            RESEARCH-TO-PRODUCT METHODOLOGY
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            {WORKFLOW_STAGES.map((stage, i) => (
              <span key={stage} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span className="mini-tag" style={{ color: "#f5f5f5" }}>
                  {stage}
                </span>
                {i < WORKFLOW_STAGES.length - 1 && (
                  <span style={{ color: "#555", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>→</span>
                )}
              </span>
            ))}
          </div>
        </section>

        {/* Active Research Directions */}
        <section style={{ marginBottom: "3.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.25rem" }}>
            <FlaskConical size={18} color="#6ee7b7" />
            <h2 style={{ fontSize: "1.4rem" }}>Investigation Tracks &amp; Experiments</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.1rem",
            }}
          >
            {RESEARCH_DIRECTIONS.map((dir) => (
              <TransitionLink
                key={dir.id}
                href={dir.linkedHref}
                style={{
                  background: "#141414",
                  border: "1px solid #262626",
                  borderRadius: "14px",
                  padding: "1.35rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <span
                      className={
                        dir.status === "Validated System"
                          ? "grid-card-pill grid-card-pill-live"
                          : "grid-card-pill"
                      }
                    >
                      {dir.status}
                    </span>
                    <ArrowUpRight size={15} color="#888" />
                  </div>
                  <h3 style={{ fontSize: "1.12rem", marginBottom: "8px" }}>{dir.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.55 }}>
                    {dir.summary}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {dir.focusAreas.map((f) => (
                    <span key={f} className="mini-tag">
                      {f}
                    </span>
                  ))}
                </div>
              </TransitionLink>
            ))}
          </div>
        </section>

        {/* Interactive Hairline Workbench */}
        <section
          style={{
            background: "#141414",
            border: "1px solid #2a2a2a",
            borderRadius: "16px",
            padding: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {FIGURES.map((f) => {
                const on = f.id === selectedId;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedId(f.id)}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      padding: "7px 12px",
                      borderRadius: "999px",
                      border: on ? "1px solid #6ee7b7" : "1px solid #2f2f2f",
                      background: on ? "rgba(110, 231, 183, 0.14)" : "#0e0e0e",
                      color: on ? "#6ee7b7" : "#a3a3a3",
                      cursor: "pointer",
                    }}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => setTouring((t) => !t)}
                className="grid-card-pill"
                style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                {touring ? <Pause size={13} /> : <Play size={13} />}
                {touring ? "Stop Tour" : "Auto Tour"}
              </button>
              <a
                href="/hairline-terminal-rig.html"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-card-pill grid-card-pill-live"
                style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
              >
                Standalone HTML <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div
            style={{
              background: "#101010",
              border: "1px solid #242424",
              borderRadius: "14px",
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <HairlineFigure
              figure={activeFig.spec}
              plateColor="#101010"
              intensity={intensity}
              autoTour={touring}
              labelPrefix={activeFig.id}
              style={{ maxWidth: "540px", aspectRatio: "5 / 4" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              marginTop: "1.1rem",
            }}
          >
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)" }}>{activeFig.note}</p>

            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.74rem",
                color: "#9a9a9a",
              }}
            >
              <span>Reach / Spread</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                style={{ width: "140px", accentColor: "#6ee7b7", cursor: "pointer" }}
              />
              <span style={{ color: "#fff", minWidth: "3ch" }}>{Math.round(intensity * 100)}%</span>
            </label>
          </div>
        </section>

        {/* Open Source & Live Links */}
        <section>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.1rem" }}>
            <GitBranch size={18} color="#9a9a9a" />
            <h2 style={{ fontSize: "1.35rem" }}>Open Source, PyPI &amp; Ventures</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { name: "GitHub Repositories", desc: "DATADOC, MECH-G, Project-MELV, Quorum, DECEPTRIX, Elio & Walkthrough.", href: NARAIN_PROFILE.github },
              { name: "PyPI: datadoc-cli", desc: "Reported 2,500+ installs — Polars zero-copy dataset curation CLI.", href: NARAIN_PROFILE.pypi },
              { name: "AxoWeb Technologies", desc: "“We don't build websites. We build systems.” Commercial engineering studio.", href: NARAIN_PROFILE.axowebUrl },
              { name: "Eduvia Platform", desc: "Student cohorts, Doomathon & hackathon MVP mentorship.", href: NARAIN_PROFILE.eduviaUrl },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#141414",
                  border: "1px solid #262626",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.06rem", marginBottom: "6px" }}>{item.name}</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.66)", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#6ee7b7", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  Visit <ArrowUpRight size={13} />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
