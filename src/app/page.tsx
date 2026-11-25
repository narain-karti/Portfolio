"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HairlineFigure from "../components/HairlineFigure";
import { WordReveal, FloatingElement } from "../components/MotionPrimitives";
import { edgeFieldFigure, pipelineLayersFigure } from "../data/hairline-figures";
import { playIntroChime, playTransition } from "../lib/sound-fx";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const INTRO_NAME_CHARS = "Narain Karti".split("");
const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;

// Module-level flag: plays cinematic entrance on every fresh site load/refresh, skips on internal back-navigation
let hasPlayedSiteEntry = false;

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [introReady, setIntroReady] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const dismissIntro = useCallback(() => {
    setShowIntro(false);
    setIntroReady(true);
    hasPlayedSiteEntry = true;
    playTransition();
  }, []);

  useEffect(() => {
    if (hasPlayedSiteEntry || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      hasPlayedSiteEntry = true;
      setIntroReady(true);
      return;
    }

    setShowIntro(true);
    let soundPlayed = playIntroChime();

    // If browser blocked WebAudio before first gesture, unlock smoothly on first pointer/key event
    const unlockSound = () => {
      if (!soundPlayed) {
        soundPlayed = playIntroChime();
      }
    };
    window.addEventListener("pointerdown", unlockSound, { once: true, passive: true });

    // Hold cleanly after cinematic blur-to-text completes, then dissolve into the site
    const holdTimer = setTimeout(() => dismissIntro(), 2450);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        dismissIntro();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(holdTimer);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", unlockSound);
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
  }, [introReady]);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="name-intro"
            onClick={dismissIntro}
            role="dialog"
            aria-label="Entrance introduction"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03, filter: "blur(12px)" }}
            transition={{ duration: 0.65, ease: EASE_CINEMATIC }}
          >
            <div className="name-container">
              <h1 style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                {INTRO_NAME_CHARS.map((ch, idx) => (
                  <motion.span
                    key={`${idx}-${ch}`}
                    initial={{
                      opacity: 0,
                      filter: "blur(20px)",
                      y: 12,
                      scale: 1.1,
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 1.15,
                      delay: 0.12 + idx * 0.055,
                      ease: EASE_CINEMATIC,
                    }}
                    style={{
                      display: "inline-block",
                      minWidth: ch === " " ? "0.32em" : undefined,
                    }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </h1>
            </div>
            <motion.p
              className="intro-tagline"
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: EASE_CINEMATIC }}
            >
              AI systems, data science, and practical engineering
            </motion.p>
            <motion.span
              className="intro-skip-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Click anywhere or press any key to enter
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {introReady && (
        <main className="exact-layout">
          <div className="exact-grid">
            {/* 01 / HERO */}
            <Link href="/about" className="grid-area-about">
              <motion.div
                className="grid-card"
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 320, damping: 24 } }}
                whileTap={{ scale: 0.992 }}
                transition={{ duration: 0.68, delay: 0.06, ease: EASE_CINEMATIC }}
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
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.72, delay: 0.22, ease: EASE_CINEMATIC }}
                      style={{ display: "inline" }}
                    >
                      <FloatingElement amplitude={3.5} duration={5.8} style={{ display: "contents" }}>
                        <Image
                          src="/assets/sticker_portrait.png"
                          alt="Narain Karti"
                          width={260}
                          height={260}
                          className="hero-portrait-float"
                          priority
                        />
                      </FloatingElement>
                    </motion.div>

                    <WordReveal as="h2" className="hero-tile-heading" delay={0.18} stagger={0.055} duration={0.58}>
                      Narain Karti
                    </WordReveal>
                    <WordReveal as="p" className="grid-card-desc" delay={0.26} stagger={0.024} duration={0.54}>
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
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 320, damping: 24 } }}
                whileTap={{ scale: 0.992 }}
                transition={{ duration: 0.68, delay: 0.14, ease: EASE_CINEMATIC }}
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
                    <WordReveal as="h2" delay={0.24} stagger={0.055} duration={0.58}>
                      Featured Engineering Systems
                    </WordReveal>
                    <WordReveal as="p" className="grid-card-desc" delay={0.32} stagger={0.024} duration={0.54}>
                      DATADOC on PyPI, Project-MELV edge vision, MECH-G offline diagnostics, and Quorum multi-agent debates.
                    </WordReveal>
                    <span className="grid-card-cta">
                      View all projects <ArrowRight size={13} />
                    </span>
                  </div>

                  <div className="bento-hairline-box" aria-hidden="true">
                    <HairlineFigure figure={edgeFieldFigure} plateColor="#131314" autoTour={true} showReadout={false} />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 03 / IMPACT */}
            <Link href="/builder" className="grid-area-builder">
              <motion.div
                className="grid-card"
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 320, damping: 24 } }}
                whileTap={{ scale: 0.992 }}
                transition={{ duration: 0.68, delay: 0.22, ease: EASE_CINEMATIC }}
                ref={(el) => {
                  cardRefs.current[2] = el;
                }}
              >
                <div className="grid-card-top">
                  <span className="grid-card-kicker">03 / IMPACT</span>
                  <ArrowUpRight size={15} className="card-corner-arrow" />
                </div>

                <div className="grid-card-bottom">
                  <WordReveal as="h2" delay={0.3} stagger={0.055} duration={0.58}>
                    Entrepreneurship & Leadership
                  </WordReveal>
                  <WordReveal as="p" className="grid-card-desc" delay={0.38} stagger={0.024} duration={0.54}>
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
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -3, transition: { type: "spring", stiffness: 320, damping: 24 } }}
                whileTap={{ scale: 0.992 }}
                transition={{ duration: 0.68, delay: 0.3, ease: EASE_CINEMATIC }}
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
                    <WordReveal as="h2" delay={0.36} stagger={0.055} duration={0.58}>
                      Research & Open Source
                    </WordReveal>
                    <WordReveal as="p" className="grid-card-desc" delay={0.44} stagger={0.024} duration={0.54}>
                      Notes and experiments on local serving, zero-copy data engines, interactive diagrams, and open-source packages.
                    </WordReveal>
                    <span className="grid-card-cta">
                      Explore research lab <ArrowRight size={13} />
                    </span>
                  </div>

                  <div className="bento-hairline-box bento-hairline-box-compact" aria-hidden="true">
                    <HairlineFigure figure={pipelineLayersFigure} plateColor="#131314" autoTour={true} showReadout={false} />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 05 / ENGINEERING JOURNAL & 06 / CONNECT */}
            <div className="grid-area-right">
              <Link href="/blog">
                <motion.div
                  className="grid-card"
                  initial={{ opacity: 0, y: 22, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 320, damping: 24 } }}
                  whileTap={{ scale: 0.992 }}
                  transition={{ duration: 0.68, delay: 0.38, ease: EASE_CINEMATIC }}
                  ref={(el) => {
                    cardRefs.current[4] = el;
                  }}
                >
                  <div className="grid-card-top">
                    <span className="grid-card-kicker">05 / ENGINEERING JOURNAL</span>
                    <ArrowUpRight size={14} className="card-corner-arrow" />
                  </div>

                  <div className="grid-card-bottom">
                    <WordReveal as="h2" delay={0.44} stagger={0.055} duration={0.58}>
                      Build Logs & Writing
                    </WordReveal>
                    <WordReveal as="p" className="grid-card-desc" delay={0.5} stagger={0.024} duration={0.54}>
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
                  initial={{ opacity: 0, y: 22, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -3, transition: { type: "spring", stiffness: 320, damping: 24 } }}
                  whileTap={{ scale: 0.992 }}
                  transition={{ duration: 0.68, delay: 0.46, ease: EASE_CINEMATIC }}
                  ref={(el) => {
                    cardRefs.current[5] = el;
                  }}
                >
                  <div className="grid-card-top">
                    <span className="grid-card-kicker">06 / CONNECT</span>
                    <ArrowUpRight size={14} className="card-corner-arrow" />
                  </div>

                  <div className="grid-card-bottom">
                    <WordReveal as="h2" delay={0.52} stagger={0.055} duration={0.58}>
                      Let&apos;s Build Something
                    </WordReveal>
                    <WordReveal as="p" className="grid-card-desc" delay={0.58} stagger={0.024} duration={0.54}>
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
      )}
    </>
  );
}
