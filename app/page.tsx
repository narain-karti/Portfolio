'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { NavbarHeader, NavTab } from '@/components/NavbarHeader';
import { HeroExactSection } from '@/components/HeroExactSection';
import { AboutExactSection } from '@/components/AboutExactSection';
import { FeaturedWorksExactSection } from '@/components/FeaturedWorksExactSection';
import { CaseStudyExactSection } from '@/components/CaseStudyExactSection';
import { PlaygroundExactSection } from '@/components/PlaygroundExactSection';
import { ContactExactSection } from '@/components/ContactExactSection';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { ResumeModal } from '@/components/ResumeModal';
import { CommandPaletteModal } from '@/components/CommandPaletteModal';
import { PORTFOLIO_DATA, Project } from '@/lib/portfolio-data';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Audio synthesizer for tactile UI clicks
  const playTactileClick = useCallback((freq = 480, duration = 0.04) => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // ignore
    }
  }, [soundEnabled]);

  // Keyboard shortcut listener (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playTactileClick(600, 0.05);
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playTactileClick]);

  const handleSelectNavTab = (tab: NavTab) => {
    playTactileClick(520, 0.04);
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'about') {
      document.getElementById('about-view')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'case-study') {
      document.getElementById('work-view')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'playground') {
      document.getElementById('playground-view')?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'contact') {
      document.getElementById('contact-view')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetailedCaseStudy = (caseStudyId: string) => {
    playTactileClick(540, 0.05);
    // Exact match
    let found = PORTFOLIO_DATA.featuredProjects.find((p) => p.id.toLowerCase() === caseStudyId.toLowerCase());
    
    // Partial or alias matching
    if (!found) {
      found = PORTFOLIO_DATA.featuredProjects.find(
        (p) =>
          p.id.toLowerCase().includes(caseStudyId.toLowerCase()) ||
          p.title.toLowerCase().includes(caseStudyId.toLowerCase()) ||
          caseStudyId.toLowerCase().includes(p.id.toLowerCase())
      );
    }

    if (found) {
      setSelectedProject(found);
    } else {
      // If no matching project found, scroll to case study view
      document.getElementById('case-study-view')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#111827] selection:bg-yellow-200 selection:text-black flex flex-col justify-between relative">
      {/* 1. TOP RETRO BROWSER NAVIGATION BAR */}
      <NavbarHeader
        activeTab={activeTab}
        onSelectTab={handleSelectNavTab}
        soundEnabled={soundEnabled}
        onToggleSound={() => {
          setSoundEnabled((s) => !s);
          if (!soundEnabled) playTactileClick(550, 0.05);
        }}
        onOpenRecruiter={() => setIsResumeModalOpen(true)}
      />

      {/* 2. MAIN ARTBOARD FLOW */}
      <main className="flex-1 w-full">
        {/* ARTBOARD 1: Hero Vector Selection Name & Headline */}
        <HeroExactSection
          onContactClick={() => handleSelectNavTab('contact')}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* ARTBOARD 3 & 4: About Me ("what's up" intro + "ABOUT" with vertical tab stack) */}
        <AboutExactSection />

        {/* ARTBOARD 5 & 6: Featured Works (Tabbed Folder Cards & Project 01/02/03) */}
        <FeaturedWorksExactSection onSelectCaseStudy={handleOpenDetailedCaseStudy} />

        {/* ARTBOARD 7 & 8: Deep Case Study View (Hero, sticky notes, & results swatches) */}
        <CaseStudyExactSection onBackToOverview={() => handleSelectNavTab('case-study')} />

        {/* ARTBOARD 2: Playground ("JUST FOR FUN" retro Mac, polaroids, stickers, zoom controls) */}
        <PlaygroundExactSection />

        {/* ARTBOARD 9 & 10: Trusted By, Smiley, Let's Talk, & Contact Notepad Form */}
        <ContactExactSection />
      </main>

      {/* Interactive Case Study Modal for deep simulators */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Verified Resume Dossier Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Command Palette (⌘K) */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={(proj) => {
          playTactileClick();
          setSelectedProject(proj);
        }}
        onToggleRecruiterMode={() => {}}
        onOpenResume={() => {
          playTactileClick();
          setIsResumeModalOpen(true);
        }}
      />
    </div>
  );
}

