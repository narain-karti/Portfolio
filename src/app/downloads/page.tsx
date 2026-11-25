"use client";

import { useState } from "react";
import { Download, Copy, Check, ArrowUpRight, Layers, FileText, Package, Globe } from "lucide-react";
import TransitionLink from "../../components/TransitionLink";
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
            <TransitionLink href="/">Home</TransitionLink>
            <span>/</span>
            <span className="breadcrumb-current">Resources &amp; Tools</span>
          </div>
          <TransitionLink href="/website" className="grid-card-pill">
            Open Research &amp; Labs →
          </TransitionLink>
        </nav>

        <div style={{ marginBottom: "3rem" }}>
          <h1 className="hero-manifesto">Resources, Résumé &amp; Developer Tools.</h1>
          <p className="hero-subcopy">
            Organized cleanly across downloadable documents, published Python CLI tools, live engineering ventures, and standalone interactive experiments.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem", marginBottom: "3.5rem" }}>
          {/* Category 1: Official Resume PDF */}
          <section
            style={{
              background: "#141414",
              border: "1px solid #2b2b2b",
              borderRadius: "14px",
              padding: "1.75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#6ee7b7", marginBottom: "0.75rem" }}>
              <FileText size={14} /> 01 · RÉSUMÉ &amp; ACADEMIC CREDENTIALS
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "0.9rem" }}>
              <h2 style={{ fontSize: "1.45rem" }}>Narain Karti — Official Résumé (PDF)</h2>
              <div style={{ display: "flex", gap: "8px" }}>
                <span className="grid-card-pill grid-card-pill-live">ATS-Ready · 2026</span>
                <span className="grid-card-pill">IIT Madras × NIAT</span>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "1.4rem", fontSize: "0.94rem" }}>
              Covers concurrent IIT Madras B.S. (Data Science) &amp; NIAT B.Tech (CSE AI/ML), AxoWeb execution (₹7L+ initial 90d → ₹10L+ milestone), Microdolphin &amp; ThinkersCave internships, Project K (₹3L), DATADOC, Project-MELV, Otomo, Quorum, Elio, and NASA Space Settlement Zonal Award.
            </p>
            <a
              href="/Narain_Karti_Resume.pdf"
              download="Narain_Karti_Resume.pdf"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#ffffff",
                color: "#000000",
                padding: "0.75rem 1.4rem",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "0.92rem",
              }}
            >
              <Download size={16} />
              Download Résumé PDF
            </a>
          </section>

          {/* Category 2: Developer CLI & Packages */}
          <section
            style={{
              background: "#141414",
              border: "1px solid #2b2b2b",
              borderRadius: "14px",
              padding: "1.75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#6ee7b7", marginBottom: "0.75rem" }}>
              <Package size={14} /> 02 · DEVELOPER TOOLS &amp; PACKAGES
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "0.9rem" }}>
              <h2 style={{ fontSize: "1.45rem" }}>DataDoc CLI (`datadoc-cli`)</h2>
              <span className="grid-card-pill">PyPI v0.6.1 · 2,500+ Reported Installs*</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "1.25rem", fontSize: "0.94rem" }}>
              Polars-backed dataset diagnostics CLI profiling 1M rows in 0.42s with leakage-safe serialized preprocessing pipelines and LiteLLM auto-research.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              <button
                type="button"
                onClick={copyPip}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#0a0a0a",
                  border: "1px solid #353535",
                  color: "#e5e5e5",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.86rem",
                  padding: "0.7rem 1.15rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <span>$ pip install datadoc-cli</span>
                {copiedPip ? <Check size={15} color="#6ee7b7" /> : <Copy size={15} />}
              </button>

              <a
                href={NARAIN_PROFILE.pypi}
                target="_blank"
                rel="noopener noreferrer"
                className="grid-card-pill"
                style={{ padding: "0.7rem 1.1rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                PyPI Package <ArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/narain-karti/DATADOC"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-card-pill"
                style={{ padding: "0.7rem 1.1rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                GitHub Source <ArrowUpRight size={14} />
              </a>
            </div>
          </section>

          {/* Category 3: Live Ventures & Digital Presence */}
          <section
            style={{
              background: "#141414",
              border: "1px solid #2b2b2b",
              borderRadius: "14px",
              padding: "1.75rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#6ee7b7", marginBottom: "0.9rem" }}>
              <Globe size={14} /> 03 · LIVE VENTURES &amp; PLATFORMS
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              <a
                href={NARAIN_PROFILE.axowebUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#0e0e10", border: "1px solid #26262a", borderRadius: "10px", padding: "1.1rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <strong>AxoWeb Technologies</strong>
                  <ArrowUpRight size={14} color="#6ee7b7" />
                </div>
                <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.45 }}>
                  Systems studio: AWS cloud, AI agents, workflow automation &amp; client delivery (`axoweb.in`).
                </p>
              </a>

              <a
                href={NARAIN_PROFILE.eduviaUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#0e0e10", border: "1px solid #26262a", borderRadius: "10px", padding: "1.1rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <strong>Eduvia Cohorts</strong>
                  <ArrowUpRight size={14} color="#6ee7b7" />
                </div>
                <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.45 }}>
                  Student hackathon mentorship, Doomathon &amp; startup cohorts (`IG: @eduviaa · LI: eduvia-x`).
                </p>
              </a>
            </div>
          </section>

          {/* Category 4: Labs & Technical Artifacts */}
          <section
            style={{
              background: "#121214",
              border: "1px solid #242426",
              borderRadius: "14px",
              padding: "1.5rem 1.75rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Layers size={22} color="#9a9a9a" />
              <div>
                <h3 style={{ fontSize: "1.08rem" }}>04 · Interactive Labs &amp; Hairline Benchmarks</h3>
                <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.62)" }}>
                  Inspect standalone isometric hardware/telemetry HTML scenes or explore research notes.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <a
                href="/hairline-terminal-rig.html"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-card-pill grid-card-pill-live"
              >
                Adopted Rig HTML ↗
              </a>
              <a
                href="/hairline-quorum-ring.html"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-card-pill"
              >
                Quorum Bench ↗
              </a>
              <TransitionLink href="/website" className="grid-card-pill">
                Open Research Lab →
              </TransitionLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
