"use client";

import { useState, useEffect, Suspense, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Copy, Check, X, ArrowRight } from "lucide-react";
import HairlineFigure from "../../components/HairlineFigure";
import { WordReveal, RevealBlock } from "../../components/MotionPrimitives";
import { pipelineLayersFigure } from "../../data/hairline-figures";
import { FLAGSHIP_PROJECTS, OTHER_REPOS, type WorkProject } from "../../data/portfolio-data";

const CATEGORIES = [
  { id: "ALL", label: "All" },
  { id: "AI_ML", label: "Edge AI & LLMs" },
  { id: "DATA_ENGINE", label: "Data Engines" },
  { id: "AGENTS", label: "Multi-Agent" },
  { id: "VISION", label: "Vision" },
  { id: "FULL_STACK", label: "Ventures" },
  { id: "SPACE", label: "Space" },
] as const;

const ProjectCard = memo(
  ({
    project,
    index,
    onInspect,
  }: {
    project: WorkProject;
    index: number;
    onInspect: (p: WorkProject) => void;
  }) => {
    const primaryMetric = project.metrics[0];
    const topTags = project.tags.slice(0, 3).join(" · ");

    return (
      <motion.article
        className="project-card"
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -4, transition: { type: "spring", stiffness: 360, damping: 26 } }}
        whileTap={{ scale: 0.992 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.4, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
        style={{ backgroundColor: "#131314", border: "1px solid #242427", borderRadius: "14px" }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
            backgroundColor: "#0e0e10",
            cursor: "pointer",
            overflow: "hidden",
          }}
          onClick={() => onInspect(project)}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(10,10,10,0.08) 0%, rgba(19,19,20,0.92) 100%)",
            }}
          />
          <div style={{ position: "absolute", bottom: "14px", left: "18px", right: "18px" }}>
            <div className="meta-label" style={{ marginBottom: "4px" }}>
              {project.number} · {project.year}
              {primaryMetric ? ` · ${primaryMetric.value}` : ""}
            </div>
            <h3 style={{ fontSize: "1.42rem", fontWeight: 600, color: "#fff" }}>{project.title}</h3>
          </div>
        </div>

        <div style={{ padding: "1.25rem 1.35rem 1.35rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.75rem" }}>
          <p style={{ fontSize: "0.94rem", color: "rgba(255,255,255,0.74)", lineHeight: 1.56, flex: 1 }}>
            {project.summary}
          </p>

          <div className="meta-label" style={{ color: "rgba(255,255,255,0.52)" }}>
            {topTags}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              paddingTop: "0.65rem",
              borderTop: "1px solid #202024",
            }}
          >
            <button
              type="button"
              onClick={() => onInspect(project)}
              style={{
                background: "transparent",
                color: "#fff",
                border: "none",
                padding: 0,
                fontSize: "0.88rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Read architecture <ArrowRight size={14} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {project.blogSlug && (
                <Link href={`/blog/${project.blogSlug}`} className="subtle-link">
                  Story
                </Link>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="subtle-link"
                  style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}
                >
                  Code <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

function WorkContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeStudy, setActiveStudy] = useState<WorkProject | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number>(-1);
  const [copiedPip, setCopiedPip] = useState(false);

  useEffect(() => {
    const pid = searchParams.get("project");
    if (pid) {
      const found = FLAGSHIP_PROJECTS.find((p) => p.id === pid);
      if (found) {
        setActiveStudy(found);
        setHoveredStep(-1);
      }
    }
  }, [searchParams]);

  const openStudy = (study: WorkProject) => {
    setHoveredStep(-1);
    setCopiedPip(false);
    setActiveStudy(study);
  };

  const copyPip = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedPip(true);
    setTimeout(() => setCopiedPip(false), 1800);
  };

  const filtered =
    selectedCategory === "ALL"
      ? FLAGSHIP_PROJECTS
      : FLAGSHIP_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <div className="subpage-shell">
        <div className="subpage-container">
          <nav className="breadcrumb-nav">
            <div className="breadcrumb-trail">
              <Link href="/">Home</Link>
              <span>/</span>
              <span className="breadcrumb-current">Selected Work</span>
            </div>
            <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
              <Link href="/graph" className="subtle-link">
                Knowledge Graph →
              </Link>
              <Link href="/blog" className="subtle-link">
                Engineering Journal →
              </Link>
            </div>
          </nav>

          <header style={{ marginBottom: "2.25rem" }}>
            <WordReveal as="h1" className="page-title" stagger={0.025}>
              Selected engineering work.
            </WordReveal>
            <WordReveal as="p" className="hero-subcopy" delay={0.1} stagger={0.015}>
              A collection of AI tools, edge vision systems, and backend products I built from scratch. Click any card to look inside the architecture.
            </WordReveal>
          </header>

          {/* Clean Underline Filter Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", marginBottom: "2.25rem", borderBottom: "1px solid #1e1e22", paddingBottom: "8px" }}>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`filter-tab ${active ? "filter-tab-active" : ""}`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
              gap: "1.4rem",
              marginBottom: "4.5rem",
            }}
          >
            {filtered.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} onInspect={openStudy} />
            ))}
          </div>

          {/* Additional Builds */}
          <RevealBlock style={{ marginBottom: "4.5rem" }}>
            <h2 className="section-heading" style={{ marginBottom: "1.25rem" }}>
              Other Open-Source &amp; Client Builds
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
            >
              {OTHER_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
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
                    gap: "12px",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <h3 style={{ fontSize: "1.06rem", color: "#fff" }}>{repo.name}</h3>
                      <ArrowUpRight size={15} color="#888" />
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{repo.desc}</p>
                  </div>
                  <div className="meta-label">{repo.tech.join(" · ")}</div>
                </a>
              ))}
            </div>
          </RevealBlock>

          {/* Clean Footer CTA */}
          <RevealBlock
            style={{
              padding: "2.5rem 1.75rem",
              textAlign: "center",
              background: "#131314",
              borderRadius: "14px",
              border: "1px solid #242427",
            }}
          >
            <h2 className="section-heading" style={{ marginBottom: "0.75rem" }}>
              Want to build something together?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.68)", maxWidth: "50ch", margin: "0 auto 1.5rem" }}>
              I&apos;m open to AI systems roles, applied ML internships, and serious product engineering.
            </p>
            <Link href="/contact" className="cta-button">
              Get in touch →
            </Link>
          </RevealBlock>
        </div>
      </div>

      {/* Case Study Drawer Modal */}
      <AnimatePresence>
        {activeStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveStudy(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.85)",
              zIndex: 200000,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "660px",
                height: "100%",
                background: "#111112",
                borderLeft: "1px solid #26262a",
                overflowY: "auto",
                padding: "2rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                <span className="meta-label meta-label-accent">
                  {activeStudy.number} · {activeStudy.year}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStudy(null)}
                  style={{
                    background: "#1d1d20",
                    border: "1px solid #303035",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "7px",
                    cursor: "pointer",
                  }}
                  aria-label="Close dossier"
                >
                  <X size={17} />
                </button>
              </div>

              <h2 style={{ fontSize: "2rem", marginBottom: "0.35rem" }}>{activeStudy.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.4rem", fontSize: "0.98rem" }}>
                {activeStudy.subtitle}
              </p>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "220px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                  border: "1px solid #26262a",
                }}
              >
                <Image src={activeStudy.image} alt={activeStudy.title} fill style={{ objectFit: "cover" }} />
              </div>

              {activeStudy.pipCommand && (
                <button
                  type="button"
                  onClick={() => copyPip(activeStudy.pipCommand!)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#0b0b0c",
                    border: "1px solid #2a2a2e",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    color: "#d4d4d4",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span>$ {activeStudy.pipCommand}</span>
                  {copiedPip ? <Check size={14} color="#6ee7b7" /> : <Copy size={14} />}
                </button>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "1.75rem" }}>
                {activeStudy.metrics.map((m) => (
                  <div key={m.label} style={{ background: "#171719", border: "1px solid #26262a", borderRadius: "10px", padding: "11px" }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}>{m.value}</div>
                    <div style={{ fontSize: "0.75rem", color: "#9a9aa2", marginTop: "2px" }}>{m.label}</div>
                    <div style={{ fontSize: "0.7rem", color: "#6ee7b7", marginTop: "4px" }}>{m.note}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                <div>
                  <h4 className="meta-label" style={{ marginBottom: "6px" }}>WHAT IT SOLVES</h4>
                  <p style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.65 }}>{activeStudy.problem}</p>
                </div>

                <div>
                  <h4 className="meta-label" style={{ marginBottom: "6px" }}>MY WORK ON IT</h4>
                  <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.65 }}>{activeStudy.contribution}</p>
                </div>

                <div>
                  <h4 className="meta-label" style={{ marginBottom: "6px" }}>KEY IDEA</h4>
                  <p style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.65 }}>{activeStudy.insight}</p>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <h4 className="meta-label">SYSTEM PIPELINE</h4>
                    <span className="meta-label meta-label-accent">
                      {hoveredStep >= 0 ? `Tier 0${hoveredStep + 1}` : "Hover tiers"}
                    </span>
                  </div>

                  <div
                    style={{
                      background: "#131314",
                      border: "1px solid #242427",
                      borderRadius: "12px",
                      padding: "8px",
                      marginBottom: "12px",
                      maxHeight: "220px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <HairlineFigure
                      figure={pipelineLayersFigure}
                      plateColor="#131314"
                      activeStep={hoveredStep}
                      onStepHover={setHoveredStep}
                      showReadout={false}
                      style={{ maxWidth: "270px", aspectRatio: "5 / 4" }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {activeStudy.architectureSteps.map((step, i) => {
                      const highlighted = hoveredStep === i;
                      return (
                        <div
                          key={step.title}
                          onMouseEnter={() => setHoveredStep(i)}
                          onMouseLeave={() => setHoveredStep(-1)}
                          onClick={() => setHoveredStep(highlighted ? -1 : i)}
                          style={{
                            background: highlighted ? "#1a231f" : "#161618",
                            border: highlighted ? "1px solid rgba(110, 231, 183, 0.5)" : "1px solid #26262a",
                            borderRadius: "10px",
                            padding: "11px 14px",
                            cursor: "pointer",
                            transition: "border-color 0.2s ease, background-color 0.2s ease",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                            <strong style={{ fontSize: "0.94rem", color: highlighted ? "#6ee7b7" : "#fff" }}>
                              0{i + 1}. {step.title}
                            </strong>
                            <span className="meta-label">{step.tech}</span>
                          </div>
                          <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.48 }}>{step.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ background: "rgba(16, 185, 129, 0.06)", border: "1px solid rgba(16, 185, 129, 0.22)", borderRadius: "10px", padding: "14px" }}>
                  <h4 className="meta-label meta-label-accent" style={{ marginBottom: "4px" }}>WHAT I LEARNED</h4>
                  <p style={{ fontSize: "0.92rem", color: "#e5e5e5", lineHeight: 1.55 }}>{activeStudy.whatILearned}</p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", paddingTop: "6px", paddingBottom: "1.5rem" }}>
                  {activeStudy.blogSlug && (
                    <Link
                      href={`/blog/${activeStudy.blogSlug}`}
                      style={{
                        background: "#fff",
                        color: "#000",
                        padding: "0.7rem 1.2rem",
                        borderRadius: "8px",
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <BookOpen size={15} /> Read Build Log
                    </Link>
                  )}
                  {activeStudy.githubUrl && (
                    <a
                      href={activeStudy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#1c1c1f",
                        color: "#fff",
                        border: "1px solid #303035",
                        padding: "0.7rem 1.2rem",
                        borderRadius: "8px",
                        fontWeight: 500,
                        fontSize: "0.88rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      GitHub <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={<div className="subpage-shell" />}>
      <WorkContent />
    </Suspense>
  );
}
