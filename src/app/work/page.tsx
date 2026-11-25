"use client";

import { useState, useEffect, Suspense, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Copy, Check, X, Layers, Terminal } from "lucide-react";
import TransitionLink from "../../components/TransitionLink";
import HairlineFigure from "../../components/HairlineFigure";
import { pipelineLayersFigure } from "../../data/hairline-figures";
import { FLAGSHIP_PROJECTS, OTHER_REPOS, type WorkProject } from "../../data/portfolio-data";

const CATEGORIES = [
  { id: "ALL", label: "All Systems" },
  { id: "AI_ML", label: "Edge AI & LLMs" },
  { id: "DATA_ENGINE", label: "Data Kernels" },
  { id: "AGENTS", label: "Multi-Agent" },
  { id: "VISION", label: "Vision & Forensics" },
  { id: "FULL_STACK", label: "Venture & Cloud" },
  { id: "SPACE", label: "Space Systems" },
] as const;

const ProjectCard = memo(
  ({ project, onInspect }: { project: WorkProject; onInspect: (p: WorkProject) => void }) => {
    const [copied, setCopied] = useState(false);

    const copyPip = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!project.pipCommand) return;
      navigator.clipboard.writeText(project.pipCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };

    return (
      <article
        className="project-card"
        style={{ backgroundColor: "#141414", border: "1px solid #262626", borderRadius: "14px" }}
      >
        <div
          style={{ position: "relative", width: "100%", height: "215px", backgroundColor: "#0e0e0e", cursor: "pointer" }}
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
              background: "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.85) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.72rem",
              padding: "4px 10px",
              borderRadius: "999px",
              background: "rgba(10,10,10,0.78)",
              border: "1px solid rgba(255,255,255,0.16)",
              color: "#f5f5f5",
            }}
          >
            {project.number} · {project.year}
          </div>
          {project.badge && (
            <div
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.68rem",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "rgba(16, 185, 129, 0.16)",
                border: "1px solid rgba(16, 185, 129, 0.45)",
                color: "#6ee7b7",
              }}
            >
              {project.badge}
            </div>
          )}
          <div style={{ position: "absolute", bottom: "14px", left: "16px", right: "16px" }}>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 700, color: "#fff" }}>{project.title}</h3>
          </div>
        </div>

        <div style={{ padding: "1.35rem", display: "flex", flexDirection: "column", flex: 1, gap: "0.9rem" }}>
          <p style={{ fontSize: "0.86rem", color: "#e5e5e5", fontWeight: 500, lineHeight: 1.4 }}>{project.subtitle}</p>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.55, flex: 1 }}>
            {project.summary}
          </p>

          {/* Verified 3-Stat Micro Strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
            {project.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "8px",
                }}
              >
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff" }}>{m.value}</div>
                <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.72rem",
                  padding: "3px 8px",
                  borderRadius: "5px",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.pipCommand && (
            <button
              type="button"
              onClick={copyPip}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#0b0b0b",
                border: "1px solid #303030",
                borderRadius: "8px",
                padding: "8px 12px",
                color: "#d4d4d4",
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.78rem",
                cursor: "pointer",
              }}
            >
              <span>$ {project.pipCommand}</span>
              {copied ? <Check size={14} color="#6ee7b7" /> : <Copy size={14} />}
            </button>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "6px" }}>
            <button
              type="button"
              onClick={() => onInspect(project)}
              style={{
                background: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "7px",
                padding: "0.6rem 1rem",
                fontSize: "0.84rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Layers size={15} />
              Architecture Dossier
            </button>

            {project.blogSlug && (
              <Link
                href={`/blog/${project.blogSlug}`}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "7px",
                  padding: "0.6rem 0.9rem",
                  fontSize: "0.84rem",
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <BookOpen size={14} />
                Read Journey
              </Link>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "7px",
                  padding: "0.6rem 0.85rem",
                  fontSize: "0.84rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Repo <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

function WorkContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeStudy, setActiveStudy] = useState<WorkProject | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number>(-1);

  // Allow direct deep-links like /work?project=datadoc from the Knowledge Graph
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
    setActiveStudy(study);
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
              <TransitionLink href="/">Home</TransitionLink>
              <span>/</span>
              <span className="breadcrumb-current">Work</span>
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <TransitionLink href="/graph" className="grid-card-pill grid-card-pill-live">
                Knowledge Graph →
              </TransitionLink>
              <TransitionLink href="/blog" className="grid-card-pill">
                Read Build Logs →
              </TransitionLink>
            </div>
          </nav>

          <div style={{ marginBottom: "3rem" }}>
            <h1 className="hero-manifesto">
              Engineering systems across Edge AI, data kernels, privacy agents, and cloud infrastructure.
            </h1>
            <p className="hero-subcopy">
              Each system began with a concrete constraint — offline offshore turbines, target leakage in Pandas scripts, or cutting 99.82% off traffic telemetry. Open any dossier for problem context, contribution, architecture, and benchmarks.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2.5rem" }}>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.78rem",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    border: active ? "1px solid #fff" : "1px solid #2b2b2b",
                    backgroundColor: active ? "#fff" : "#151515",
                    color: active ? "#000" : "#b3b3b3",
                    fontWeight: active ? 600 : 400,
                    transition: "all 0.2s ease",
                  }}
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
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1.6rem",
              marginBottom: "5rem",
            }}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onInspect={openStudy} />
            ))}
          </div>

          {/* Other Repositories */}
          <section style={{ marginBottom: "5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
              <Terminal size={18} color="#9a9a9a" />
              <h2 style={{ fontSize: "1.4rem", fontWeight: 600 }}>Additional Open-Source &amp; Client Builds</h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1rem",
              }}
            >
              {OTHER_REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-card"
                  style={{
                    background: "#131313",
                    border: "1px solid #262626",
                    borderRadius: "12px",
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <h3 style={{ fontSize: "1.05rem", color: "#fff" }}>{repo.name}</h3>
                      <ArrowUpRight size={16} color="#888" />
                    </div>
                    <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{repo.desc}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {repo.tech.map((t) => (
                      <span key={t} className="mini-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* CTA Block */}
          <div
            style={{
              padding: "3rem 2rem",
              textAlign: "center",
              background: "#131313",
              borderRadius: "16px",
              border: "1px solid #262626",
            }}
          >
            <h2 style={{ fontSize: "1.85rem", marginBottom: "0.9rem" }}>Want to work on hard problems together?</h2>
            <p style={{ color: "rgba(255,255,255,0.68)", maxWidth: "560px", margin: "0 auto 1.75rem", lineHeight: 1.6 }}>
              I&apos;m open to AI systems engineering roles, applied ML internships, and serious product builds.
            </p>
            <TransitionLink
              href="/contact"
              className="cta-button"
            >
              Get in Touch →
            </TransitionLink>
          </div>
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
              background: "rgba(0, 0, 0, 0.86)",
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
                maxWidth: "680px",
                height: "100%",
                background: "#111",
                borderLeft: "1px solid #2b2b2b",
                overflowY: "auto",
                padding: "2rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <span className="grid-card-pill">{activeStudy.number} · ARCHITECTURE DOSSIER</span>
                <button
                  type="button"
                  onClick={() => setActiveStudy(null)}
                  style={{
                    background: "#202020",
                    border: "1px solid #333",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                  aria-label="Close dossier"
                >
                  <X size={18} />
                </button>
              </div>

              <h2 style={{ fontSize: "2.1rem", marginBottom: "0.4rem" }}>{activeStudy.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "1rem" }}>
                {activeStudy.subtitle}
              </p>

              <div style={{ position: "relative", width: "100%", height: "230px", borderRadius: "12px", overflow: "hidden", marginBottom: "1.75rem", border: "1px solid #2a2a2a" }}>
                <Image src={activeStudy.image} alt={activeStudy.title} fill style={{ objectFit: "cover" }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "2rem" }}>
                {activeStudy.metrics.map((m) => (
                  <div key={m.label} style={{ background: "#181818", border: "1px solid #2a2a2a", borderRadius: "10px", padding: "12px" }}>
                    <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff" }}>{m.value}</div>
                    <div style={{ fontSize: "0.75rem", color: "#9a9a9a", marginTop: "2px" }}>{m.label}</div>
                    <div style={{ fontSize: "0.7rem", color: "#6ee7b7", marginTop: "4px" }}>{m.note}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)", color: "#888", textTransform: "uppercase", marginBottom: "6px" }}>
                    Problem Statement
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.65 }}>{activeStudy.problem}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)", color: "#888", textTransform: "uppercase", marginBottom: "6px" }}>
                    Why It Matters
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.65 }}>{activeStudy.whyItMatters}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)", color: "#888", textTransform: "uppercase", marginBottom: "6px" }}>
                    Specific Contribution
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.84)", lineHeight: 1.65 }}>{activeStudy.contribution}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)", color: "#888", textTransform: "uppercase", marginBottom: "6px" }}>
                    Architectural Insight
                  </h4>
                  <p style={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.65 }}>{activeStudy.insight}</p>
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h4 style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)", color: "#888", textTransform: "uppercase" }}>
                      Interactive System Pipeline (Hover Tiers or Steps)
                    </h4>
                    <span className="mini-tag" style={{ color: hoveredStep >= 0 ? "#6ee7b7" : "#888" }}>
                      {hoveredStep >= 0 ? `Inspecting Tier 0${hoveredStep + 1}` : "Hairline Stack"}
                    </span>
                  </div>

                  <div
                    style={{
                      background: "#141414",
                      border: "1px solid #262626",
                      borderRadius: "12px",
                      padding: "8px",
                      marginBottom: "12px",
                      maxHeight: "235px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <HairlineFigure
                      figure={pipelineLayersFigure}
                      plateColor="#141414"
                      activeStep={hoveredStep}
                      onStepHover={setHoveredStep}
                      labelPrefix="tier"
                      style={{ maxWidth: "285px", aspectRatio: "5 / 4" }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {activeStudy.architectureSteps.map((step, i) => {
                      const highlighted = hoveredStep === i;
                      return (
                        <div
                          key={step.title}
                          onMouseEnter={() => setHoveredStep(i)}
                          onMouseLeave={() => setHoveredStep(-1)}
                          onClick={() => setHoveredStep(highlighted ? -1 : i)}
                          style={{
                            background: highlighted ? "#1b2420" : "#171717",
                            border: highlighted ? "1px solid rgba(110, 231, 183, 0.55)" : "1px solid #292929",
                            borderRadius: "10px",
                            padding: "12px 14px",
                            cursor: "pointer",
                            transition: "border-color 0.2s ease, background-color 0.2s ease",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                            <strong style={{ fontSize: "0.95rem", color: highlighted ? "#6ee7b7" : "#fff" }}>
                              0{i + 1}. {step.title}
                            </strong>
                            <span className="mini-tag">{step.tech}</span>
                          </div>
                          <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.45 }}>{step.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ background: "rgba(16, 185, 129, 0.08)", border: "1px solid rgba(16, 185, 129, 0.25)", borderRadius: "10px", padding: "14px" }}>
                  <h4 style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "#6ee7b7", marginBottom: "4px" }}>
                    KEY TAKEAWAY
                  </h4>
                  <p style={{ fontSize: "0.92rem", color: "#e5e5e5", lineHeight: 1.55 }}>{activeStudy.whatILearned}</p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", paddingTop: "8px", paddingBottom: "2rem" }}>
                  {activeStudy.blogSlug && (
                    <Link
                      href={`/blog/${activeStudy.blogSlug}`}
                      style={{
                        background: "#fff",
                        color: "#000",
                        padding: "0.75rem 1.25rem",
                        borderRadius: "8px",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <BookOpen size={16} /> Read Commit-History Journey
                    </Link>
                  )}
                  {activeStudy.githubUrl && (
                    <a
                      href={activeStudy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#1e1e1e",
                        color: "#fff",
                        border: "1px solid #333",
                        padding: "0.75rem 1.25rem",
                        borderRadius: "8px",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      GitHub Repository <ArrowUpRight size={16} />
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
