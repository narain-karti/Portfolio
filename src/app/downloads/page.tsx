"use client";

import { useState } from "react";
import { Download, Copy, Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { WordReveal, RevealBlock } from "../../components/MotionPrimitives";
import { NARAIN_PROFILE } from "../../data/portfolio-data";

export default function ResourcesPage() {
  const [copiedPip, setCopiedPip] = useState(false);

  const copyPip = () => {
    navigator.clipboard.writeText("pip install datadoc-cli");
    setCopiedPip(true);
    setTimeout(() => setCopiedPip(false), 1800);
  };

  return (
    <div className="subpage-shell">
      <div className="subpage-container" style={{ maxWidth: "900px" }}>
        <nav className="breadcrumb-nav">
          <div className="breadcrumb-trail">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb-current">Resources</span>
          </div>
          <Link href="/website" className="subtle-link">
            Research &amp; Labs →
          </Link>
        </nav>

        <header style={{ marginBottom: "2.5rem" }}>
          <WordReveal as="h1" className="page-title" stagger={0.025}>
            Resume, packages, and links.
          </WordReveal>
          <WordReveal as="p" className="hero-subcopy" delay={0.1} stagger={0.015}>
            Everything in one place: my PDF resume, the PyPI package, ventures, and standalone interactive experiments.
          </WordReveal>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
          <RevealBlock
            inView={false}
            delay={0.08}
            style={{
              background: "#131314",
              border: "1px solid #242427",
              borderRadius: "14px",
              padding: "1.65rem",
            }}
          >
            <div className="meta-label meta-label-accent" style={{ marginBottom: "0.5rem" }}>
              01 · RESUME
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "0.75rem" }}>
              <h2 className="section-heading">Narain Karti — Resume (PDF)</h2>
              <span className="meta-label">IIT Madras × NIAT · 2026</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "1.35rem", fontSize: "0.94rem" }}>
              Dual-degree education, AxoWeb venture delivery, engineering internships, Project K, DATADOC, Project-MELV, Otomo, Quorum, and NASA Space Settlement Zonal Award.
            </p>
            <a
              href="/Narain_Karti_Resume.pdf"
              download="Narain_Karti_Resume.pdf"
              className="cta-button"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "0.7rem 1.35rem" }}
            >
              <Download size={15} />
              Download PDF
            </a>
          </RevealBlock>

          <RevealBlock
            delay={0.1}
            style={{
              background: "#131314",
              border: "1px solid #242427",
              borderRadius: "14px",
              padding: "1.65rem",
            }}
          >
            <div className="meta-label meta-label-accent" style={{ marginBottom: "0.5rem" }}>
              02 · PYTHON CLI
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "0.75rem" }}>
              <h2 className="section-heading">DataDoc CLI (datadoc-cli)</h2>
              <span className="meta-label">PyPI v0.6.1</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "1.25rem", fontSize: "0.94rem" }}>
              Polars-backed dataset diagnostics CLI that profiles 1M rows in 0.42s and exports leakage-safe preprocessing pipelines.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
              <button
                type="button"
                onClick={copyPip}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#0a0a0b",
                  border: "1px solid #2d2d32",
                  color: "#e5e5e5",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.84rem",
                  padding: "0.65rem 1.05rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <span>$ pip install datadoc-cli</span>
                {copiedPip ? <Check size={14} color="#6ee7b7" /> : <Copy size={14} />}
              </button>

              <a
                href={NARAIN_PROFILE.pypi}
                target="_blank"
                rel="noopener noreferrer"
                className="subtle-link"
                style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                PyPI <ArrowUpRight size={13} />
              </a>
              <a
                href="https://github.com/narain-karti/DATADOC"
                target="_blank"
                rel="noopener noreferrer"
                className="subtle-link"
                style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
              >
                GitHub <ArrowUpRight size={13} />
              </a>
            </div>
          </RevealBlock>

          <RevealBlock
            delay={0.12}
            style={{
              background: "#131314",
              border: "1px solid #242427",
              borderRadius: "14px",
              padding: "1.65rem",
            }}
          >
            <div className="meta-label meta-label-accent" style={{ marginBottom: "0.9rem" }}>
              03 · VENTURES
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              <a
                href={NARAIN_PROFILE.axowebUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#0e0e10", border: "1px solid #242427", borderRadius: "10px", padding: "1.1rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <strong>AxoWeb Technologies</strong>
                  <ArrowUpRight size={14} color="#6ee7b7" />
                </div>
                <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                  Systems studio building AWS backends, AI agents, and workflow automation (axoweb.in).
                </p>
              </a>

              <a
                href={NARAIN_PROFILE.eduviaUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#0e0e10", border: "1px solid #242427", borderRadius: "10px", padding: "1.1rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <strong>Eduvia Cohorts</strong>
                  <ArrowUpRight size={14} color="#6ee7b7" />
                </div>
                <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                  Student hackathon mentorship and startup cohorts (IG: @eduviaa · LI: eduvia-x).
                </p>
              </a>
            </div>
          </RevealBlock>

          <RevealBlock
            delay={0.14}
            style={{
              background: "#131314",
              border: "1px solid #242427",
              borderRadius: "14px",
              padding: "1.45rem 1.65rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.1rem" }}>Standalone Isometric Experiments</h3>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.62)" }}>
                Interactive HTML figures built on the Hairline engine.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="/hairline-terminal-rig.html" target="_blank" rel="noopener noreferrer" className="subtle-link" style={{ color: "#6ee7b7" }}>
                Terminal Rig ↗
              </a>
              <a href="/hairline-quorum-ring.html" target="_blank" rel="noopener noreferrer" className="subtle-link">
                Quorum Ring ↗
              </a>
              <Link href="/website" className="subtle-link">
                Research Lab →
              </Link>
            </div>
          </RevealBlock>
        </div>
      </div>
    </div>
  );
}
