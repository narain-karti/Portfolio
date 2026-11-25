"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import TransitionLink from "../components/TransitionLink";
import HairlineFigure from "../components/HairlineFigure";
import { edgeFieldFigure, pipelineLayersFigure } from "../data/hairline-figures";
import { EXPERIENCES, FLAGSHIP_PROJECTS } from "../data/portfolio-data";
import { ArrowRight, ArrowUpRight, Share2, Download, GitBranch } from "lucide-react";

const INTRO_FULL_NAME = "Narain Karti";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [typedName, setTypedName] = useState("");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const dismissIntro = useCallback(() => {
    setShowIntro(false);
    try {
      sessionStorage.setItem("nk_intro_seen", "1");
    } catch {
      // ignore sessionStorage restrictions
    }
  }, []);

  // Fast, skippable initial entrance animation (plays once per browser tab session)
  useEffect(() => {
    try {
      if (sessionStorage.getItem("nk_intro_seen") === "1") {
        return;
      }
    } catch {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setShowIntro(true);
    let idx = 0;
    let holdTimer: ReturnType<typeof setTimeout> | null = null;
    const typeTimer = setInterval(() => {
      idx++;
      setTypedName(INTRO_FULL_NAME.slice(0, idx));
      if (idx >= INTRO_FULL_NAME.length) {
        clearInterval(typeTimer);
        holdTimer = setTimeout(() => dismissIntro(), 520);
      }
    }, 60);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        dismissIntro();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearInterval(typeTimer);
      if (holdTimer) clearTimeout(holdTimer);
      window.removeEventListener("keydown", onKey);
    };
  }, [dismissIntro]);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const cleanups: (() => void)[] = [];
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--x", `${x}%`);
        card.style.setProperty("--y", `${y}%`);
      };
      card.addEventListener("mousemove", onMove, { passive: true });
      cleanups.push(() => card.removeEventListener("mousemove", onMove));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      {showIntro && (
        <div
          className="name-intro"
          onClick={dismissIntro}
          role="dialog"
          aria-label="Entrance introduction"
        >
          <div className="name-container">
            <h1>{typedName || "\u00A0"}</h1>
            <div className="animated-cursor" aria-hidden="true" />
          </div>
          <p className="intro-tagline">
            Building intelligent systems · Exploring what&apos;s next
          </p>
          <span className="intro-skip-hint">Click anywhere or press any key to enter</span>
        </div>
      )}

      <main className="exact-layout">
        {/* Compact Identity & Direct Action Bar */}
        <header className="home-top-strip">
          <div className="home-identity-group">
            <strong className="home-brand-name">NARAIN KARTI</strong>
            <span className="home-brand-sep">/</span>
            <span className="home-brand-sub">
              AI SYSTEMS · ENGINEERING · RESEARCH · ENTREPRENEURSHIP
            </span>
          </div>

          <div className="home-top-actions">
            <a
              href="https://github.com/narain-karti"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-card-pill home-graph-btn home-hide-xs"
            >
              <GitBranch size={12} /> GitHub
            </a>
            <a
              href="/Narain_Karti_Resume.pdf"
              download="Narain_Karti_Resume.pdf"
              className="grid-card-pill home-graph-btn home-hide-xs"
            >
              <Download size={12} /> Résumé PDF
            </a>
            <TransitionLink
              href="/graph"
              className="grid-card-pill grid-card-pill-live home-graph-btn"
            >
              <Share2 size={12} />
              <span className="home-graph-btn-text">Knowledge Graph →</span>
            </TransitionLink>
          </div>
        </header>

        <div className="exact-grid">
          {/* 1. PERSONAL POSITIONING & IDENTITY */}
          <TransitionLink href="/about" className="grid-area-about">
            <div
              className="grid-card"
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
            >
              <div className="grid-card-top">
                <span className="grid-card-kicker">01 / IDENTITY &amp; STORY</span>
                <span className="card-top-right">
                  <span className="grid-card-pill">IIT Madras × NIAT</span>
                  <ArrowUpRight size={14} className="card-corner-arrow" />
                </span>
              </div>

              <div className="bento-about-visual">
                <div className="bento-about-chips">
                  <span className="mini-tag">AI / ML &amp; Data Science</span>
                  <span className="mini-tag">AI Infrastructure</span>
                  <span className="mini-tag">Product Engineering</span>
                </div>
                <div className="home-avatar-frame">
                  <Image
                    src="/images/hero_avatar.jpg"
                    alt="Narain Karti"
                    width={98}
                    height={98}
                    priority
                  />
                </div>
              </div>

              <div className="grid-card-bottom">
                <h2>Building intelligent systems. Exploring what&apos;s next.</h2>
                <p className="grid-card-desc">
                  I don&apos;t want to just use technology — I want to understand it, improve it, and engineer products from the ground up.
                </p>
                <span className="grid-card-cta">
                  Read my story &amp; interactive rig <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </TransitionLink>

          {/* 2. FEATURED BUILDS (Explained High-Signal Proof) */}
          <TransitionLink href="/work" className="grid-area-work">
            <div
              className="grid-card"
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
            >
              <div className="grid-card-top">
                <span className="grid-card-kicker">02 / FEATURED BUILDS</span>
                <span className="card-top-right">
                  <span className="grid-card-pill grid-card-pill-live">
                    {FLAGSHIP_PROJECTS.length} SYSTEMS · PYPI LIVE
                  </span>
                  <ArrowUpRight size={14} className="card-corner-arrow" />
                </span>
              </div>

              <div className="bento-card-split">
                <div className="grid-card-bottom">
                  <h2>Engineering real-world systems.</h2>
                  <div className="home-featured-trio">
                    <div className="home-featured-mini">
                      <strong>DATADOC</strong>
                      <span>0.42s · 2.5K+ pip*</span>
                      <small>Polars Data CLI</small>
                    </div>
                    <div className="home-featured-mini">
                      <strong>PROJECT-MELV</strong>
                      <span>14ms · -99.82% data</span>
                      <small>Edge ANPR Twin</small>
                    </div>
                    <div className="home-featured-mini">
                      <strong>OTOMO</strong>
                      <span>BRAVE Award</span>
                      <small>AI Memory CRM</small>
                    </div>
                  </div>
                  <p className="grid-card-desc">
                    Plus MECH-G (offline Gemma 4), Project K (₹3L OpenAI runner-up), Elio Privacy Agent, Quorum, and Beyond Earth.
                  </p>
                  <span className="grid-card-cta">
                    Explore all {FLAGSHIP_PROJECTS.length} projects &amp; dossiers <ArrowRight size={13} />
                  </span>
                </div>

                <div className="bento-hairline-box" aria-hidden="true">
                  <HairlineFigure figure={edgeFieldFigure} plateColor="#141414" labelPrefix="field" />
                </div>
              </div>
            </div>
          </TransitionLink>

          {/* 3. EXPERIENCE & LEADERSHIP */}
          <TransitionLink href="/builder" className="grid-area-builder">
            <div
              className="grid-card"
              ref={(el) => {
                cardRefs.current[2] = el;
              }}
            >
              <div className="grid-card-top">
                <span className="grid-card-kicker">03 / EXPERIENCE</span>
                <span className="card-top-right">
                  <span className="grid-card-pill">{EXPERIENCES.length} ROLES · 5+ AWARDS</span>
                  <ArrowUpRight size={14} className="card-corner-arrow" />
                </span>
              </div>

              <div className="bento-exp-list">
                <div className="bento-exp-row">
                  <span className="bento-exp-role">AxoWeb Technologies · Founder</span>
                  <span className="bento-exp-metric">₹10L+* · 20+ clients</span>
                </div>
                <div className="bento-exp-row">
                  <span className="bento-exp-role">Eduvia · Creator &amp; Mentor</span>
                  <span className="bento-exp-metric">55+ signups (4d)</span>
                </div>
                <div className="bento-exp-row">
                  <span className="bento-exp-role">Microdolphin &amp; ThinkersCave</span>
                  <span className="bento-exp-metric">Agentic AI &amp; Dev</span>
                </div>
                <div className="bento-exp-row">
                  <span className="bento-exp-role">ACEII &amp; NIAT Tech Club</span>
                  <span className="bento-exp-metric">Joint Sec · Former VP</span>
                </div>
              </div>

              <div className="grid-card-bottom">
                <h2>Experience &amp; Stack</h2>
                <p className="grid-card-desc">
                  Venture execution, internships, campus leadership, awards, and tools I build with.
                </p>
                <span className="grid-card-cta">
                  See full timeline &amp; skills <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </TransitionLink>

          {/* 4. ENGINEERING LOGS (Build Journal) */}
          <TransitionLink href="/blog" className="grid-area-blogs">
            <div
              className="grid-card"
              ref={(el) => {
                cardRefs.current[3] = el;
              }}
            >
              <div className="grid-card-top">
                <span className="grid-card-kicker">04 / ENGINEERING LOGS</span>
                <span className="card-top-right">
                  <span className="grid-card-pill">8 BUILD STORIES</span>
                  <ArrowUpRight size={14} className="card-corner-arrow" />
                </span>
              </div>

              <div className="bento-card-split bento-card-split-compact">
                <div className="grid-card-bottom">
                  <div className="grid-card-meta-row">
                    <span className="mini-tag">LOG 008 · DATADOC</span>
                    <span className="mini-tag">Polars</span>
                  </div>
                  <h2>How Each Build Evolved</h2>
                  <p className="grid-card-desc">
                    Bottlenecks identified, tradeoffs behind Polars &amp; OKF graphs, and commit post-mortems.
                  </p>
                  <span className="grid-card-cta">
                    Read engineering journal <ArrowRight size={13} />
                  </span>
                </div>

                <div className="bento-hairline-box bento-hairline-box-compact" aria-hidden="true">
                  <HairlineFigure figure={pipelineLayersFigure} plateColor="#141414" showReadout={false} />
                </div>
              </div>
            </div>
          </TransitionLink>

          {/* 5 & 6 RIGHT STACK: RESEARCH & LABS + PURPOSEFUL CONNECT */}
          <div className="grid-area-right">
            <TransitionLink href="/website">
              <div
                className="grid-card"
                ref={(el) => {
                  cardRefs.current[4] = el;
                }}
              >
                <div className="grid-card-top">
                  <span className="grid-card-kicker">05 / RESEARCH &amp; LABS</span>
                  <span className="card-top-right">
                    <span className="grid-card-pill">INFRA · OPEN SOURCE</span>
                    <ArrowUpRight size={13} className="card-corner-arrow" />
                  </span>
                </div>

                <div className="grid-card-bottom">
                  <h2>Research &amp; Open Source</h2>
                  <p className="grid-card-desc">
                    Experiments in AI infra, interactive Hairline diagrams, PyPI CLI &amp; exploration notes.
                  </p>
                  <span className="grid-card-cta">
                    Open Research Lab &amp; CV <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </TransitionLink>

            <TransitionLink href="/contact">
              <div
                className="grid-card"
                ref={(el) => {
                  cardRefs.current[5] = el;
                }}
              >
                <div className="grid-card-top">
                  <span className="grid-card-kicker">06 / LET&apos;S CONNECT</span>
                  <span className="card-top-right">
                    <span className="grid-card-pill grid-card-pill-live">Open</span>
                    <ArrowUpRight size={13} className="card-corner-arrow" />
                  </span>
                </div>

                <div className="grid-card-bottom">
                  <h2>Have an interesting problem?</h2>
                  <div className="grid-card-meta-row">
                    <span className="mini-tag">AI Research</span>
                    <span className="mini-tag">Engineering</span>
                    <span className="mini-tag">Startups</span>
                  </div>
                  <span className="grid-card-cta">
                    Let&apos;s build something <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </TransitionLink>
          </div>
        </div>
      </main>
    </>
  );
}
