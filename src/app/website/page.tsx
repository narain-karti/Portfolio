"use client";

import { useState } from "react";
import { ArrowUpRight, Play, Pause } from "lucide-react";
import Link from "next/link";
import HairlineFigure from "../../components/HairlineFigure";
import { WordReveal, RevealBlock } from "../../components/MotionPrimitives";
import {
  quorumRingFigure,
  edgeFieldFigure,
  pipelineLayersFigure,
  terminalRigFigure,
} from "../../data/hairline-figures";
import { NARAIN_PROFILE, RESEARCH_DIRECTIONS } from "../../data/portfolio-data";

const FIGURES = [
  { id: "quorum", label: "Quorum Ring", spec: quorumRingFigure, note: "Six council plinths responding to pointer proximity." },
  { id: "field", label: "Tensor Field", spec: edgeFieldFigure, note: "36 isometric compute pillars on independent springs." },
  { id: "pipeline", label: "Pipeline Stack", spec: pipelineLayersFigure, note: "Four exploded layers lifting smoothly on inspection." },
  { id: "terminal", label: "Terminal Rig", spec: terminalRigFigure, note: "Dual-pane isometric console adapted from SVG telemetry." },
] as const;

export default function ResearchLabPage() {
  const [selectedId, setSelectedId] = useState<(typeof FIGURES)[number]["id"]>("quorum");
  const [intensity, setIntensity] = useState(0.5);
  const [touring, setTouring] = useState(true);

  const activeFig = FIGURES.find((f) => f.id === selectedId) ?? FIGURES[0];

  return (
    <div className="subpage-shell">
      <div className="subpage-container" style={{ maxWidth: "1060px" }}>
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Research &amp; Open Source</span>
          </div>
          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            <Link href="/downloads" className="subtle-link">
              Resources &amp; Resume →
            </Link>
            <Link href="/graph" className="subtle-link">
              Knowledge Graph →
            </Link>
          </div>
        </nav>

        <header style={{ marginBottom: "2.5rem" }}>
          <WordReveal as="h1" className="page-title" stagger={0.025}>
            Research tracks and open source.
          </WordReveal>
          <WordReveal as="p" className="hero-subcopy" delay={0.1} stagger={0.015}>
            Exploring local model serving, zero-copy data pipelines, adversarial multi-agent setups, and interactive geometric tools.
          </WordReveal>
        </header>

        {/* Active Research Directions */}
        <section style={{ marginBottom: "3.25rem" }}>
          <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
            Current Focus Areas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.1rem",
            }}
          >
            {RESEARCH_DIRECTIONS.map((dir, idx) => (
              <RevealBlock key={dir.id} delay={idx * 0.06} interactive>
                <Link
                  href={dir.linkedHref}
                  style={{
                    background: "#131314",
                    border: "1px solid #242427",
                    borderRadius: "14px",
                    padding: "1.35rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    gap: "12px",
                    transition: "transform 0.18s ease, border-color 0.18s ease",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                      <span className={`meta-label ${dir.status === "Validated System" ? "meta-label-accent" : ""}`}>
                        {dir.status}
                      </span>
                      <ArrowUpRight size={15} color="#888" />
                    </div>
                    <h3 style={{ fontSize: "1.14rem", marginBottom: "8px" }}>{dir.title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.56 }}>
                      {dir.summary}
                    </p>
                  </div>

                  <div className="meta-label" style={{ color: "rgba(255,255,255,0.52)" }}>
                    {dir.focusAreas.join(" · ")}
                  </div>
                </Link>
              </RevealBlock>
            ))}
          </div>
        </section>

        {/* Interactive Hairline Workbench */}
        <RevealBlock
          style={{
            background: "#131314",
            border: "1px solid #242427",
            borderRadius: "16px",
            padding: "1.5rem",
            marginBottom: "3.25rem",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "14px", marginBottom: "1.15rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {FIGURES.map((f) => {
                const on = f.id === selectedId;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedId(f.id)}
                    className={`filter-tab ${on ? "filter-tab-active" : ""}`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <button
                type="button"
                onClick={() => setTouring((t) => !t)}
                className="subtle-link"
                style={{ background: "transparent", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                {touring ? <Pause size={13} /> : <Play size={13} />}
                {touring ? "Pause tour" : "Auto tour"}
              </button>
              <a
                href="/hairline-terminal-rig.html"
                target="_blank"
                rel="noopener noreferrer"
                className="subtle-link"
                style={{ color: "#6ee7b7", display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                Standalone view <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div
            style={{
              background: "#0f0f10",
              border: "1px solid #222226",
              borderRadius: "12px",
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <HairlineFigure
              figure={activeFig.spec}
              plateColor="#0f0f10"
              intensity={intensity}
              autoTour={touring}
              showReadout={false}
              style={{ maxWidth: "520px", aspectRatio: "5 / 4" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              marginTop: "1rem",
            }}
          >
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.68)" }}>{activeFig.note}</p>

            <label
              className="meta-label"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span>Spread</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                style={{ width: "130px", accentColor: "#6ee7b7", cursor: "pointer" }}
              />
              <span style={{ color: "#fff", minWidth: "3ch" }}>{Math.round(intensity * 100)}%</span>
            </label>
          </div>
        </RevealBlock>

        {/* Open Source & Live Links */}
        <section>
          <h2 className="section-heading" style={{ marginBottom: "1.15rem" }}>
            Open Source &amp; Public Packages
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { name: "GitHub Repositories", desc: "DATADOC, MECH-G, Project-MELV, Quorum, DECEPTRIX, Elio & Walkthrough.", href: NARAIN_PROFILE.github },
              { name: "PyPI: datadoc-cli", desc: "Polars zero-copy dataset curation CLI.", href: NARAIN_PROFILE.pypi },
              { name: "AxoWeb Technologies", desc: "Systems studio building cloud backends, AI agents & automation.", href: NARAIN_PROFILE.axowebUrl },
              { name: "Eduvia Platform", desc: "Student cohorts, Doomathon & hackathon mentorship.", href: NARAIN_PROFILE.eduviaUrl },
            ].map((item, idx) => (
              <RevealBlock key={item.name} delay={idx * 0.04}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#131314",
                    border: "1px solid #242427",
                    borderRadius: "12px",
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    gap: "10px",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.06rem", marginBottom: "6px" }}>{item.name}</h3>
                    <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.66)", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                  <span className="meta-label meta-label-accent" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    Visit <ArrowUpRight size={13} />
                  </span>
                </a>
              </RevealBlock>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
