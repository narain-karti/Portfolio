"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { WordReveal, RevealBlock } from "../../components/MotionPrimitives";
import { NARAIN_PROFILE, RESEARCH_DIRECTIONS } from "../../data/portfolio-data";

export default function ResearchLabPage() {
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
          <WordReveal as="h1" className="page-title" stagger={0.028}>
            Research tracks and open source.
          </WordReveal>
          <WordReveal as="p" className="hero-subcopy" delay={0.1} stagger={0.016}>
            Exploring local model serving, zero-copy data pipelines, adversarial multi-agent setups, and interactive geometric tools.
          </WordReveal>
        </header>

        {/* Active Research Directions */}
        <section style={{ marginBottom: "3.5rem" }}>
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
              <RevealBlock key={item.name} delay={idx * 0.05} interactive>
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
