'use client';

import React from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';

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
}: NavbarHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent pointer-events-none py-2 sm:py-3 px-2 sm:px-6 select-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4 pointer-events-auto">
        
        {/* Left Side: NK Badge + Nav Pill Capsule */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          
          {/* NK Badge */}
          <button
            type="button"
            onClick={() => onSelectTab('home')}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f43f5e] hover:bg-[#e11d48] text-white flex items-center justify-center font-spacemono font-extrabold text-xs sm:text-sm tracking-tighter shadow-[2px_2px_0px_#000] border-2 border-black shrink-0 transition-transform active:scale-95"
            aria-label="Home"
          >
            NK
          </button>

          {/* Nav Capsule - scrollable on mobile */}
          <nav className="flex items-center gap-0.5 sm:gap-1 bg-[#e7e1d4]/95 backdrop-blur-md border-2 border-black rounded-full p-0.5 sm:p-1 shadow-[2px_2px_0px_#000] overflow-x-auto scrollbar-none">
            {([
              { id: 'home' as NavTab, icon: '★', label: 'HOME' },
              { id: 'about' as NavTab, icon: '👤', label: 'ABOUT' },
              { id: 'case-study' as NavTab, icon: '∷', label: 'WORK' },
              { id: 'playground' as NavTab, icon: '✦', label: 'PINS' },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-spacemono font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-[#f59e0b] text-neutral-950 shadow-xs border border-black'
                    : 'text-neutral-700 hover:text-neutral-950 hover:bg-black/5'
                }`}
                aria-label={tab.label}
              >
                <span className="text-[10px]">{tab.icon}</span>
                <span className="hidden xs:inline sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side: Social + Actions */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          
          {/* Social circles - hide some on very small screens */}
          <a
            href="https://www.linkedin.com/in/narainkarti"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white flex items-center justify-center font-spacemono font-bold text-[10px] sm:text-xs shadow-[1.5px_1.5px_0px_#000] border border-black transition-transform hover:scale-105"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href="https://github.com/narain-karti"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white items-center justify-center font-spacemono font-bold text-[10px] sm:text-xs shadow-[1.5px_1.5px_0px_#000] border border-black transition-transform hover:scale-105"
            aria-label="GitHub"
          >
            git
          </a>

          <a
            href="mailto:studyusage2008@gmail.com"
            className="hidden sm:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0d9488] hover:bg-[#0f766e] text-white items-center justify-center font-spacemono font-bold text-[10px] sm:text-xs shadow-[1.5px_1.5px_0px_#000] border border-black transition-transform hover:scale-105"
            aria-label="Email"
          >
            @
          </a>

          {/* RESUME - hide on mobile */}
          <Link
            href="/resume"
            className="hidden md:inline-flex items-center gap-1 px-3 sm:px-3.5 py-1 rounded-full text-xs font-spacemono font-bold text-emerald-950 bg-[#bbf7d0] hover:bg-[#86efac] border-2 border-black shadow-[2px_2px_0px_#000] transition-all"
            aria-label="View Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </Link>

          {/* RECRUITER Pill - hide on smaller screens */}
          {onOpenRecruiter && (
            <button
              type="button"
              onClick={onOpenRecruiter}
              className="hidden lg:inline-flex items-center px-3 py-1 rounded-full text-xs font-spacemono font-bold text-sky-950 bg-sky-100 hover:bg-sky-200 border-2 border-black transition-all shadow-[2px_2px_0px_#000]"
            >
              DOSSIER
            </button>
          )}

          {/* CONTACT */}
          <button
            type="button"
            onClick={() => onSelectTab('contact')}
            className={`flex items-center gap-0.5 sm:gap-1 px-2 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-spacemono font-bold uppercase tracking-wider transition-all border-2 border-black ${
              activeTab === 'contact'
                ? 'bg-black text-white shadow-xs'
                : 'bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_#000]'
            }`}
            aria-label="Contact"
          >
            <span className="text-rose-600 text-xs">♥</span>
            <span className="hidden xs:inline sm:inline">CONTACT</span>
          </button>

        </div>
      </div>
    </header>
  );
}
