'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, MapPin, Award, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface HeroExactSectionProps {
  onContactClick: () => void;
  onOpenResume?: () => void;
}

export function HeroExactSection({
  onContactClick,
  onOpenResume,
}: HeroExactSectionProps) {
  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 notebook-ruled-bg border-b border-black/10 overflow-hidden select-none flex flex-col justify-center min-h-[calc(100vh-60px)] max-h-[920px]">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative my-auto">
        
        {/* Floating Avatar Red Badge (Left) - IIT Madras / NxtWave */}
        <div className="hidden lg:flex absolute -left-12 xl:-left-16 top-1/2 -translate-y-1/2 flex-col items-center gap-1 z-20">
          <div className="w-13 h-13 rounded-full p-0.5 bg-white border-2 border-rose-500 shadow-md relative overflow-hidden group">
            <Image
              src="https://picsum.photos/seed/narain-coder-tech/200/200"
              alt="Narain Karti"
              fill
              className="object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-[9px] font-spacemono font-bold bg-yellow-200 text-yellow-950 px-1.5 py-0.5 border border-black/30 rounded shadow-2xs">
            IIT-M &amp; NxtWave
          </span>
        </div>

        {/* Floating Award Badge (Right) - ₹3L Hackathon & BRAVE Winner */}
        <div className="hidden lg:flex absolute -right-12 xl:-right-16 top-1/2 -translate-y-1/2 flex-col items-center gap-1 z-20">
          <div className="w-13 h-13 rounded-full p-0.5 bg-white border-2 border-emerald-500 shadow-md relative overflow-hidden flex items-center justify-center bg-emerald-50">
            <Award className="w-6 h-6 text-emerald-700" />
          </div>
          <span className="text-[9px] font-spacemono font-bold bg-emerald-100 text-emerald-950 px-1.5 py-0.5 border border-black/30 rounded shadow-2xs">
            ₹3L Winner
          </span>
        </div>

        {/* 1. TOP ANNOTATION TAGS */}
        <div className="w-full max-w-xl flex items-end justify-between mb-2 relative px-2">
          {/* Top-Left Tag: AGENTIC AI & SYSTEMS (Teal + Tape) */}
          <div className="relative -rotate-2 -translate-y-1">
            <div className="absolute -top-2 left-3 w-12 h-3 bg-white/80 border-x border-dashed border-black/20 shadow-2xs -rotate-3 z-10" />
            <span className="inline-block bg-[#a7f3d0] text-emerald-950 font-spacemono text-[10px] sm:text-[11px] font-bold tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 border border-black shadow-xs">
              AGENTIC AI &amp; SYSTEMS
            </span>
          </div>

          {/* Center Handwritten Annotation: portfolio of + Arrow */}
          <div className="flex flex-col items-center -mb-1">
            <span className="font-handwriting text-xl sm:text-2xl text-neutral-900 tracking-wide font-bold">
              portfolio of
            </span>
            <svg
              className="w-5 h-5 text-neutral-800 -mt-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v14" />
              <path d="m7 12 5 5 5-5" />
            </svg>
          </div>

          {/* Top-Right Tag: SWEAT THE DETAILS (Orange + Tape) */}
          <div className="relative rotate-3 -translate-y-1">
            <div className="absolute -top-2 right-3 w-12 h-3 bg-white/80 border-x border-dashed border-black/20 shadow-2xs rotate-6 z-10" />
            <span className="inline-block bg-[#fed7aa] text-amber-950 font-spacemono text-[10px] sm:text-[11px] font-bold tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 border border-black shadow-xs">
              CO-FOUNDER @ AXOWEB
            </span>
          </div>
        </div>

        {/* 2. VECTOR SELECTION BOX WITH THE GIANT PIXEL NAME */}
        <div className="relative inline-block w-full max-w-2xl mb-4 sm:mb-6">
          {/* The Blue Vector Bounding Box */}
          <div className="vector-select-box bg-transparent px-3 sm:px-8 py-2 sm:py-4 flex items-center justify-center relative group">
            {/* 8 Anchor Handles (Figma / Vector Style) */}
            <div className="select-handle -top-1 -left-1" />
            <div className="select-handle -top-1 left-1/2 -translate-x-1/2" />
            <div className="select-handle -top-1 -right-1" />
            <div className="select-handle top-1/2 -left-1 -translate-y-1/2" />
            <div className="select-handle top-1/2 -right-1 -translate-y-1/2" />
            <div className="select-handle -bottom-1 -left-1" />
            <div className="select-handle -bottom-1 left-1/2 -translate-x-1/2" />
            <div className="select-handle -bottom-1 -right-1" />

            {/* Giant Block Pixel Title (NARAIN KARTI) */}
            <h1 className="font-pixel text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black select-none leading-none">
              NARAIN KARTI
            </h1>
          </div>

          {/* Bottom Attached Meta Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 mt-2 sm:mt-3 px-1">
            {/* Left Pill: AI / ML Engineer & Systems Architect (Yellow) */}
            <span className="bg-[#fde047] text-neutral-950 font-spacemono font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-black shadow-2xs">
              AI/ML Systems &bull; Startup Co-Founder
            </span>

            {/* Center Pill: Open to work */}
            <div className="flex items-center gap-1.5 bg-white text-neutral-800 font-spacemono text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full border border-black shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="tracking-wide uppercase text-[9px] sm:text-[10px]">
                OPEN TO ROLES &bull; CHENNAI &bull; REMOTE
              </span>
            </div>

            {/* Right Pill: Chennai, India (Mint + Tape) */}
            <div className="relative">
              <div className="absolute -top-1.5 -right-1 w-5 h-2.5 bg-white/70 border-x border-dashed border-black/20 rotate-12 z-10" />
              <span className="bg-[#bbf7d0] text-emerald-950 font-spacemono text-[10px] sm:text-xs font-semibold px-2.5 py-1 border border-black shadow-2xs flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-800 inline" />
                <span>Chennai, India</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3. CORE DISPLAY HEADLINE */}
        <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3 my-2 sm:my-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-neutral-950 leading-tight tracking-tight flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 font-typewriter">
            <span>Engineering autonomous AI systems</span>
            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-emerald-600 text-emerald-700 font-spacemono font-bold text-base sm:text-lg leading-none bg-emerald-50 shadow-2xs">
              ⚡
            </span>
            <span className="block sm:inline">that perform in production.</span>
          </h2>
          <p className="text-xs sm:text-sm font-typewriter text-neutral-700 max-w-xl mx-auto leading-relaxed">
            B.Tech CSE (AI/ML) @ NxtWave &bull; B.S. Data Science @ IIT Madras &bull; National Hackathon Winner (OpenAI Academy ₹3L)
          </p>
        </div>

        {/* 4. BUTTON BAR */}
        <div className="mt-3 sm:mt-4 flex items-center gap-3 flex-wrap justify-center">
          <button
            type="button"
            onClick={onContactClick}
            className="px-5 sm:px-6 py-2 sm:py-2.5 bg-black text-white font-spacemono text-xs font-bold tracking-widest uppercase rounded border-2 border-black hover:bg-neutral-800 active:scale-95 transition-all shadow-[3px_3px_0px_#000]"
          >
            GET IN TOUCH
          </button>
          
          <Link
            href="/resume"
            className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#fde047] text-neutral-950 font-spacemono text-xs font-bold tracking-widest uppercase rounded border-2 border-black hover:bg-yellow-400 active:scale-95 transition-all shadow-[3px_3px_0px_#000] flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>DETAILED RESUME PAGE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

