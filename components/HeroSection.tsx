'use client';

import React, { useState } from 'react';
import {
  ArrowDown,
  FileText,
  Terminal,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Play,
  Github,
  Award,
} from 'lucide-react';
import { TapeElement, StampSeal, StickyNote } from './ScrapbookArtifacts';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenResumeModal: () => void;
  onOpenTerminal: () => void;
}

export function HeroSection({
  onExploreWork,
  onOpenResumeModal,
  onOpenTerminal,
}: HeroSectionProps) {
  const [quickCmdInput, setQuickCmdInput] = useState('');
  const [cmdFeedback, setCmdFeedback] = useState<string | null>(null);

  const handleQuickCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const query = quickCmdInput.trim().toLowerCase();
    if (!query) return;

    if (query.includes('project') || query.includes('work')) {
      document.getElementById('work-section')?.scrollIntoView({ behavior: 'smooth' });
      setCmdFeedback('Navigated to: FEATURED WORK');
    } else if (query.includes('datadoc') || query.includes('pypi')) {
      window.open('https://pypi.org/project/datadoc-cli/', '_blank');
      setCmdFeedback('Opening DataDoc on PyPI...');
    } else if (query.includes('lab') || query.includes('exp')) {
      document.getElementById('lab-section')?.scrollIntoView({ behavior: 'smooth' });
      setCmdFeedback('Navigated to: THE LAB');
    } else if (query.includes('space') || query.includes('nasa')) {
      document.getElementById('space-section')?.scrollIntoView({ behavior: 'smooth' });
      setCmdFeedback('Navigated to: NASA SPACE DOSSIER');
    } else if (query.includes('resume') || query.includes('cv')) {
      onOpenResumeModal();
      setCmdFeedback('Opening verified resume dossier...');
    } else if (query.includes('github')) {
      window.open('https://github.com/narain-karti', '_blank');
      setCmdFeedback('Opening GitHub...');
    } else {
      setCmdFeedback(`Command '${query}' logged to terminal. Launching terminal console...`);
      setTimeout(() => {
        onOpenTerminal();
      }, 600);
    }
  };

  return (
    <section className="relative w-full pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-300/80 paper-grid overflow-hidden">
      {/* Background Subtle Watermark Coordinates */}
      <div className="absolute right-6 top-8 text-[11px] font-mono text-neutral-400 select-none hidden md:block">
        <p>LAT: 13.0827° N · LON: 80.2707° E</p>
        <p>SYSTEM: NARAIN.OS / KARTI_LAB_01</p>
        <p>RUNTIME: DUAL DEGREE (IITM + NXTIAT)</p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Field Note Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="relative inline-block">
            <TapeElement variant="masking" angle={-1} width="w-20" className="-top-3 left-2" />
            <div className="bg-[#fff9e6] px-3 py-1 border border-yellow-400/60 rounded-xs text-[11px] font-mono font-bold tracking-wider text-amber-900 shadow-2xs">
              FIELD_NOTE #001 · PERSONAL OPERATING SYSTEM
            </div>
          </div>

          <span className="text-neutral-400 hidden sm:inline">|</span>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono bg-white/80 px-2.5 py-1 border border-neutral-300 rounded-xs text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">STATUS:</span>
            <span>BUILDING AUTONOMOUS AGENTS & CV SYSTEMS</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Typography, Core Statement, Stickers */}
          <div className="lg:col-span-8 space-y-6">
            {/* Dramatic Name Display */}
            <div className="relative">
              {/* Handwritten sticker label */}
              <div className="absolute -top-5 right-4 sm:right-24 rotate-3 z-10 pointer-events-none">
                <span className="bg-[#fdebf3] text-rose-900 border border-rose-300 text-xs px-2 py-0.5 rounded-xs font-mono font-bold shadow-xs">
                  ★ systems &gt; tutorials
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[#121316] leading-[0.9] select-none font-sans">
                NARAIN<br />
                <span className="text-[#1d4ed8]">KARTI</span>
              </h1>
            </div>

            {/* Core Positioning Statement */}
            <div className="relative pl-4 border-l-4 border-neutral-900 max-w-3xl space-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-snug">
                “I build intelligent systems for ambitious problems.”
              </p>
              <p className="text-sm sm:text-base text-neutral-600 font-mono">
                AI/ML · DATA SCIENCE · AGENTIC AI · COMPUTER VISION · SPACE INNOVATION
              </p>
            </div>

            {/* Micro Sticky Notes / Annotations Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="bg-[#fefbe8] border border-yellow-300 px-3 py-1.5 rounded-xs text-xs font-mono text-amber-950 rotate-[-1deg] shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>currently building: <strong>Privacy-First Browser Agent</strong></span>
              </div>

              <div className="bg-[#e8f2fe] border border-blue-300 px-3 py-1.5 rounded-xs text-xs font-mono text-blue-950 rotate-[1deg] shadow-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>open source: <strong>pip install datadoc-cli</strong></span>
              </div>

              <div className="bg-[#e6f9ed] border border-emerald-300 px-3 py-1.5 rounded-xs text-xs font-mono text-emerald-950 rotate-[-0.5deg] shadow-xs flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-700" />
                <span>prize grant: <strong>₹3L OpenAI Academy Winner</strong></span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-explore-work-btn"
                type="button"
                onClick={onExploreWork}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-950 text-white font-mono text-sm font-bold rounded-xs hover:bg-blue-700 transition-all shadow-md active:translate-y-0.5"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                id="hero-resume-btn"
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white text-neutral-900 border-2 border-neutral-900 font-mono text-sm font-bold rounded-xs hover:bg-neutral-100 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-neutral-700" />
                <span>VERIFIED RESUME</span>
              </button>

              <a
                href="https://github.com/narain-karti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#f0ede4] text-neutral-800 border border-neutral-300 font-mono text-sm rounded-xs hover:bg-white transition-colors"
                title="View Public GitHub"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">github/narain-karti</span>
              </a>
            </div>
          </div>

          {/* Right Column (4 cols): Interactive Scrapbook Card & Terminal Sandbox */}
          <div className="lg:col-span-4 space-y-4">
            {/* Scrapbook System Dossier Card */}
            <div className="relative bg-[#faf8f2] border-2 border-neutral-900 p-5 rounded-xs shadow-[4px_4px_0px_#121316] rotate-[0.5deg]">
              {/* Tape top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <TapeElement variant="yellow" angle={-2} width="w-28" />
              </div>

              <div className="flex items-center justify-between border-b border-neutral-300 pb-2 mb-3 font-mono text-xs text-neutral-500">
                <span className="font-bold text-neutral-900">OPERATING PROFILE</span>
                <span>ID: #NK-2026</span>
              </div>

              {/* Education Scrapbook item */}
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">CONCURRENT DEGREES</span>
                  <div className="mt-1 bg-white p-2.5 border border-neutral-200 rounded-xs space-y-1.5">
                    <div className="flex items-start justify-between">
                      <span className="font-bold text-neutral-900">IIT Madras</span>
                      <span className="text-[10px] px-1 bg-blue-100 text-blue-800 rounded">2029</span>
                    </div>
                    <p className="text-[11px] text-neutral-600">B.S. Data Science & Applications</p>

                    <div className="pt-1.5 border-t border-neutral-100 flex items-start justify-between">
                      <span className="font-bold text-neutral-900">NxtWave IAT</span>
                      <span className="text-[10px] px-1 bg-purple-100 text-purple-800 rounded">2029</span>
                    </div>
                    <p className="text-[11px] text-neutral-600">B.Tech Computer Science (AI/ML)</p>
                  </div>
                </div>

                {/* Rubber Stamp */}
                <div className="pt-1 flex items-center justify-between">
                  <StampSeal text="VERIFIED_BUILDER" variant="charcoal" rotate={-2} />
                  <span className="text-[11px] text-neutral-500 italic font-serif">“open the hood ↓”</span>
                </div>
              </div>
            </div>

            {/* Quick Interactive Terminal Box */}
            <div className="bg-[#18191c] text-[#f0f0f0] p-4 rounded-xs border border-neutral-800 font-mono text-xs shadow-md">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800 text-[11px] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-neutral-300 font-bold">KARTI.SH QUICK EXEC</span>
                </div>
                <span>v1.4</span>
              </div>

              <p className="text-[11px] text-neutral-400 mb-2">
                Type <span className="text-yellow-300">projects</span>, <span className="text-yellow-300">datadoc</span>, <span className="text-yellow-300">lab</span>, or <span className="text-yellow-300">space</span>:
              </p>

              <form onSubmit={handleQuickCommand} className="flex items-center gap-1">
                <span className="text-emerald-400 font-bold">&gt;</span>
                <input
                  type="text"
                  value={quickCmdInput}
                  onChange={(e) => setQuickCmdInput(e.target.value)}
                  placeholder="e.g. datadoc"
                  className="bg-transparent border-none outline-none flex-1 text-white font-mono text-xs placeholder:text-neutral-600"
                />
                <button
                  type="submit"
                  className="px-2 py-0.5 bg-neutral-700 hover:bg-neutral-600 text-[10px] rounded text-neutral-200"
                >
                  RUN
                </button>
              </form>

              {cmdFeedback && (
                <div className="mt-2 text-[11px] text-emerald-300 bg-emerald-950/40 p-1.5 rounded border border-emerald-800/50">
                  {cmdFeedback}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
