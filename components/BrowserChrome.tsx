'use client';

import React from 'react';
import {
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Briefcase,
  FileText,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface BrowserChromeProps {
  recruiterMode: boolean;
  onToggleRecruiterMode: () => void;
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenCommandPalette: () => void;
}

export function BrowserChrome({
  recruiterMode,
  onToggleRecruiterMode,
  activeFilter,
  onSelectFilter,
  soundEnabled,
  onToggleSound,
  onOpenCommandPalette,
}: BrowserChromeProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#ebe7dc]/95 backdrop-blur-md border-b border-neutral-300 shadow-xs select-none">
      {/* Top OS Frame Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-2 text-xs font-mono">
        {/* Left: Window Controls & OS ID */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-inner hover:opacity-80 cursor-pointer" title="System Close (Inspect Home)" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-inner hover:opacity-80 cursor-pointer" title="Minimize / Recruiter Mode" onClick={onToggleRecruiterMode} />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-inner hover:opacity-80 cursor-pointer" title="Launch Command Deck" onClick={onOpenCommandPalette} />
          </div>

          <div className="hidden sm:flex items-center gap-2 border-l border-neutral-300 pl-3">
            <span className="font-bold tracking-tight text-neutral-900 flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-blue-700" />
              <span>NARAIN.OS</span>
            </span>
            <span className="text-[10px] px-1.5 py-0.5 bg-neutral-200/80 text-neutral-700 rounded border border-neutral-300">
              BUILD_2026.08
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Center: Quick Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-[11px]">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('work-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1 rounded hover:bg-neutral-200/80 text-neutral-800 transition-colors"
          >
            WORK
          </button>
          <span className="text-neutral-400">·</span>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('lab-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1 rounded hover:bg-neutral-200/80 text-neutral-800 transition-colors"
          >
            THE LAB
          </button>
          <span className="text-neutral-400">·</span>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('experience-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1 rounded hover:bg-neutral-200/80 text-neutral-800 transition-colors"
          >
            EXPERIENCE
          </button>
          <span className="text-neutral-400">·</span>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('space-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1 rounded hover:bg-neutral-200/80 text-neutral-800 transition-colors"
          >
            SPACE
          </button>
          <span className="text-neutral-400">·</span>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('about-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1 rounded hover:bg-neutral-200/80 text-neutral-800 transition-colors"
          >
            ABOUT
          </button>
          <span className="text-neutral-400">·</span>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('contact-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-2.5 py-1 rounded hover:bg-neutral-200/80 text-neutral-800 transition-colors"
          >
            CONTACT
          </button>
        </nav>

        {/* Right: Recruiter Mode Switch & Terminal Button */}
        <div className="flex items-center gap-2">
          {/* Recruiter Mode Toggle */}
          <button
            id="recruiter-mode-toggle"
            type="button"
            onClick={onToggleRecruiterMode}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm border text-[11px] font-bold transition-all shadow-xs ${
              recruiterMode
                ? 'bg-amber-400 text-neutral-950 border-amber-500 ring-2 ring-amber-300'
                : 'bg-white/80 text-neutral-800 border-neutral-300 hover:bg-white'
            }`}
            title="Toggle high-signal 45-second executive review mode"
          >
            <Briefcase className="w-3 h-3 text-neutral-800" />
            <span className="hidden sm:inline">RECRUITER MODE</span>
            <span className="sm:hidden">RECRUITER</span>
            <span
              className={`w-2 h-2 rounded-full ${
                recruiterMode ? 'bg-black animate-ping' : 'bg-neutral-400'
              }`}
            />
          </button>

          {/* Interactive Command Deck Prompt Launcher */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1 px-2 py-1 bg-neutral-900 text-white rounded-sm border border-neutral-800 text-[11px] hover:bg-neutral-800 transition-colors"
            title="Open Interactive Command Terminal (⌘K)"
          >
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span className="hidden sm:inline">TERMINAL</span>
            <kbd className="hidden lg:inline text-[9px] bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">
              ⌘K
            </kbd>
          </button>

          {/* Sound / Haptic Click Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            className="p-1 rounded text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/80 transition-colors"
            title={soundEnabled ? 'Disable UI sound feedback' : 'Enable UI sound feedback'}
            aria-label="Toggle UI Audio Feedback"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-blue-700" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
