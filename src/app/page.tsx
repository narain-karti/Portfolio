"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HairlineFigure from "../components/HairlineFigure";
import { WordReveal } from "../components/MotionPrimitives";
import { edgeFieldFigure, pipelineLayersFigure } from "../data/hairline-figures";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const INTRO_FULL_NAME = "Narain Karti";
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

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
        holdTimer = setTimeout(() => dismissIntro(), 480);
      }
    }, 55);

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
          <p className="intro-tagline">AI systems, data science, and practical engineering</p>
          <span className="intro-skip-hint">Click anywhere or press any key to enter</span>
        </div>
      )}

      <main className="exact-layout">
        <div className="exact-grid">
          {/* 01 / HERO */}
          <Link href="/about" className="grid-area-about">
            <motion.div
              className="grid-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.04, ease: EASE_OUT }}
              ref={(el) => {
                cardRefs.current[0] = el;
              }}
            >
              <div className="grid-card-top">
                <span className="grid-card-kicker">01 / HERO</span>
                <ArrowUpRight size={15} className="card-corner-arrow" />
              </div>

              <div className="hero-tile-body">
                <div className="hero-wrap-flow">
                  {/* Transparent portrait floated cleanly so heading & intro wrap around it */}
                  <Image
                    src="/assets/sticker_portrait.png"
                    alt="Narain Karti"
                    width={92}
                    height={92}
                    className="hero-portrait-float"
                    priority
                  />
                  <WordReveal as="h2" className="hero-tile-heading" delay={0.1} stagger={0.04}>
                    Narain Karti
                  </WordReveal>
                  <WordReveal as="p" className="grid-card-desc" delay={0.16} stagger={0.015}>
                    AI systems engineer studying Data Science at IIT Madras and AI/ML at NIAT. Building offline models, data tools, and software that lasts.
                  </WordReveal>
                </div>

                <span className="grid-card-cta" style={{ marginTop: "10px" }}>
                  Read my story <ArrowRight size={13} />
                </span>
              </div>
            </motion.div>
          </Link>

          {/* 02 / SELECTED WORK */}
          <Link href="/work" className="grid-area-work">
            <motion.div
              className="grid-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.09, ease: EASE_OUT }}
              ref={(el) => {
                cardRefs.current[1] = el;
              }}
            >
              <div className="grid-card-top">
                <span className="grid-card-kicker">02 / SELECTED WORK</span>
                <ArrowUpRight size={15} className="card-corner-arrow" />
              </div>

              <div className="bento-card-split">
                <div className="grid-card-bottom">
                  <WordReveal as="h2" delay={0.14} stagger={0.04}>
                    Featured Engineering Systems
                  </WordReveal>
                  <WordReveal as="p" className="grid-card-desc" delay={0.2} stagger={0.015}>
                    DATADOC on PyPI, Project-MELV edge vision, MECH-G offline diagnostics, and Quorum multi-agent debates.
                  </WordReveal>
                  <span className="grid-card-cta">
                    View all projects <ArrowRight size={13} />
                  </span>
                </div>

                <div className="bento-hairline-box" aria-hidden="true">
                  <HairlineFigure figure={edgeFieldFigure} plateColor="#131314" showReadout={false} />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* 03 / IMPACT */}
          <Link href="/builder" className="grid-area-builder">
            <motion.div
              className="grid-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14, ease: EASE_OUT }}
              ref={(el) => {
                cardRefs.current[2] = el;
              }}
            >
              <div className="grid-card-top">
                <span className="grid-card-kicker">03 / IMPACT</span>
                <ArrowUpRight size={15} className="card-corner-arrow" />
              </div>

              <div className="grid-card-bottom">
                <WordReveal as="h2" delay={0.18} stagger={0.04}>
                  Entrepreneurship & Leadership
                </WordReveal>
                <WordReveal as="p" className="grid-card-desc" delay={0.24} stagger={0.015}>
                  AxoWeb studio across 20+ clients, Eduvia cohorts, ACEII Joint Secretary, internships, and national hackathon wins.
                </WordReveal>
                <span className="grid-card-cta">
                  Experience &amp; awards <ArrowRight size={13} />
                </span>
              </div>
            </motion.div>
          </Link>

          {/* 04 / RESEARCH */}
          <Link href="/website" className="grid-area-research">
            <motion.div
              className="grid-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.19, ease: EASE_OUT }}
              ref={(el) => {
                cardRefs.current[3] = el;
              }}
            >
              <div className="grid-card-top">
                <span className="grid-card-kicker">04 / RESEARCH</span>
                <ArrowUpRight size={15} className="card-corner-arrow" />
              </div>

              <div className="bento-card-split bento-card-split-compact">
                <div className="grid-card-bottom">
                  <WordReveal as="h2" delay={0.22} stagger={0.04}>
                    Research & Open Source
                  </WordReveal>
                  <WordReveal as="p" className="grid-card-desc" delay={0.27} stagger={0.015}>
                    Notes and experiments on local serving, zero-copy data engines, interactive diagrams, and open-source packages.
                  </WordReveal>
                  <span className="grid-card-cta">
                    Explore research lab <ArrowRight size={13} />
                  </span>
                </div>

                <div className="bento-hairline-box bento-hairline-box-compact" aria-hidden="true">
                  <HairlineFigure figure={pipelineLayersFigure} plateColor="#131314" showReadout={false} />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* 05 / ENGINEERING JOURNAL & 06 / CONNECT */}
          <div className="grid-area-right">
            <Link href="/blog">
              <motion.div
                className="grid-card"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.24, ease: EASE_OUT }}
                ref={(el) => {
                  cardRefs.current[4] = el;
                }}
              >
                <div className="grid-card-top">
                  <span className="grid-card-kicker">05 / ENGINEERING JOURNAL</span>
                  <ArrowUpRight size={14} className="card-corner-arrow" />
                </div>

                <div className="grid-card-bottom">
                  <WordReveal as="h2" delay={0.26} stagger={0.04}>
                    Build Logs & Writing
                  </WordReveal>
                  <WordReveal as="p" className="grid-card-desc" delay={0.31} stagger={0.015}>
                    Engineering decisions, debugging stories, and architectural breakdowns.
                  </WordReveal>
                  <span className="grid-card-cta">
                    Read the journal <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                className="grid-card"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.29, ease: EASE_OUT }}
                ref={(el) => {
                  cardRefs.current[5] = el;
                }}
              >
                <div className="grid-card-top">
                  <span className="grid-card-kicker">06 / CONNECT</span>
                  <ArrowUpRight size={14} className="card-corner-arrow" />
                </div>

                <div className="grid-card-bottom">
                  <WordReveal as="h2" delay={0.31} stagger={0.04}>
                    Let&apos;s Build Something
                  </WordReveal>
                  <WordReveal as="p" className="grid-card-desc" delay={0.35} stagger={0.015}>
                    Collaboration, research opportunities, startup discussions, and contact details.
                  </WordReveal>
                  <span className="grid-card-cta">
                    Get in touch <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
