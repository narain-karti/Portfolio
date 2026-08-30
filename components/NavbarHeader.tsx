'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, FileText, Heart } from 'lucide-react';

export type NavTab = 'home' | 'about' | 'case-study' | 'playground' | 'contact';

interface NavbarHeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenRecruiter?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
}

export function NavbarHeader({
  activeTab,
  onSelectTab,
  onOpenRecruiter,
  soundEnabled,
  onToggleSound,
}: NavbarHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent pointer-events-none py-2.5 sm:py-3 px-3 sm:px-6 select-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-2 sm:gap-4 pointer-events-auto">
        
        {/* Left Side: Circular "NK" Badge + Warm Beige Nav Pill Capsule */}
        <div className="flex items-center gap-2 sm:gap-3 flex-nowrap shrink-0 overflow-x-auto py-0.5 scrollbar-none">
          
          {/* Circular Coral-Red "NK" Badge */}
          <button
            type="button"
            onClick={() => onSelectTab('home')}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f43f5e] hover:bg-[#e11d48] text-white flex items-center justify-center font-spacemono font-extrabold text-xs sm:text-sm tracking-tighter shadow-[2px_2px_0px_#000] border-2 border-black shrink-0 transition-transform active:scale-95"
            title="Narain Karti — Portfolio Home"
          >
            NK
          </button>

          {/* Warm Beige Capsule Nav Container */}
          <nav className="flex items-center gap-1 bg-[#e7e1d4]/95 backdrop-blur-md border-2 border-black rounded-full p-1 shadow-[2px_2px_0px_#000]">
            {/* ★ HOME TAB */}
            <button
              type="button"
              onClick={() => onSelectTab('home')}
              className={`flex items-center gap-1 px-3 sm:px-3.5 py-1 rounded-full text-xs font-spacemono font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'home'
                  ? 'bg-[#f59e0b] text-neutral-950 shadow-xs border border-black'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-black/5'
              }`}
            >
              <span className="text-[11px]">★</span>
              <span>HOME</span>
            </button>

            {/* 👤 ABOUT TAB */}
            <button
              type="button"
              onClick={() => onSelectTab('about')}
              className={`flex items-center gap-1 px-3 sm:px-3.5 py-1 rounded-full text-xs font-spacemono font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'about'
                  ? 'bg-[#f59e0b] text-neutral-950 shadow-xs border border-black'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-black/5'
              }`}
            >
              <svg className="w-3.5 h-3.5 inline fill-current" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>ABOUT</span>
            </button>

            {/* ∷ CASE STUDY TAB */}
            <button
              type="button"
              onClick={() => onSelectTab('case-study')}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full text-xs font-spacemono font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'case-study'
                  ? 'bg-[#f59e0b] text-neutral-950 shadow-xs border border-black'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-black/5'
              }`}
            >
              <span className="text-[10px] tracking-tight font-mono">∷</span>
              <span>CASE STUDY</span>
            </button>

            {/* ✦ PLAYGROUND TAB */}
            <button
              type="button"
              onClick={() => onSelectTab('playground')}
              className={`flex items-center gap-1 px-3 sm:px-3.5 py-1 rounded-full text-xs font-spacemono font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'playground'
                  ? 'bg-[#f59e0b] text-neutral-950 shadow-xs border border-black'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-black/5'
              }`}
            >
              <span className="text-[11px]">✦</span>
              <span>PLAYGROUND</span>
            </button>

            {/* 📄 RESUME TAB */}
            <Link
              href="/resume"
              className="flex items-center gap-1 px-3 sm:px-3.5 py-1 rounded-full text-xs font-spacemono font-bold uppercase tracking-wider transition-all whitespace-nowrap bg-[#a7f3d0] text-emerald-950 hover:bg-[#86efac] border border-black/30 shadow-2xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-900" />
              <span>RESUME</span>
            </Link>
          </nav>
        </div>

        {/* Right Side: Social Circles [in, git, @] + RESUME/RECRUITER pill + ♥ CONTACT pill */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* Circular Orange "in" (LinkedIn) */}
          <a
            href="https://www.linkedin.com/in/narainkarti"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white flex items-center justify-center font-spacemono font-bold text-xs shadow-[1.5px_1.5px_0px_#000] border border-black transition-transform hover:scale-105"
            title="LinkedIn Profile: narainkarti"
          >
            in
          </a>

          {/* Circular Magenta/Pink "git" (GitHub) */}
          <a
            href="https://github.com/narain-karti"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white flex items-center justify-center font-spacemono font-bold text-xs shadow-[1.5px_1.5px_0px_#000] border border-black transition-transform hover:scale-105"
            title="GitHub Profile: narain-karti"
          >
            git
          </a>

          {/* Circular Teal "@" (Email) */}
          <a
            href="mailto:studyusage2008@gmail.com"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0d9488] hover:bg-[#0f766e] text-white flex items-center justify-center font-spacemono font-bold text-xs shadow-[1.5px_1.5px_0px_#000] border border-black transition-transform hover:scale-105"
            title="Email: studyusage2008@gmail.com"
          >
            @
          </a>

          {/* RESUME Action Button */}
          <Link
            href="/resume"
            className="hidden sm:inline-flex items-center gap-1 px-3 sm:px-3.5 py-1 rounded-full text-xs font-spacemono font-bold text-emerald-950 bg-[#bbf7d0] hover:bg-[#86efac] border-2 border-black shadow-[2px_2px_0px_#000] transition-all"
            title="View Visual & ATS Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </Link>

          {/* RECRUITER Pill Button */}
          {onOpenRecruiter && (
            <button
              type="button"
              onClick={onOpenRecruiter}
              className="hidden lg:inline-flex items-center px-3 py-1 rounded-full text-xs font-spacemono font-bold text-sky-950 bg-sky-100 hover:bg-sky-200 border-2 border-black transition-all shadow-[2px_2px_0px_#000]"
            >
              DOSSIER
            </button>
          )}

          {/* ♥ CONTACT Pill Button with Black Border */}
          <button
            type="button"
            onClick={() => onSelectTab('contact')}
            className={`flex items-center gap-1 px-3 sm:px-4 py-1 rounded-full text-xs font-spacemono font-bold uppercase tracking-wider transition-all border-2 border-black ${
              activeTab === 'contact'
                ? 'bg-black text-white shadow-xs'
                : 'bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_#000]'
            }`}
          >
            <span className="text-rose-600 text-xs">♥</span>
            <span>CONTACT</span>
          </button>

        </div>
      </div>
    </header>
  );
}

