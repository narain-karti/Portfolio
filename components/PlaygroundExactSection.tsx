'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  Github,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Award,
  Package,
  FileCode,
  Copy,
  Check,
  Filter
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface BoardProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'AI_AGENTS' | 'SYSTEMS' | 'OPEN_SOURCE' | 'RESEARCH';
  categoryLabel: string;
  image: string;
  badge: string;
  badgeColor: string;
  tags: string[];
  githubUrl?: string;
  pypiUrl?: string;
  pipCommand?: string;
  pinColor: string;
  rotation: number;
}

const BOARD_PROJECTS: BoardProject[] = [
  {
    id: 'datadoc',
    number: '01',
    title: 'DATADOC CLI',
    subtitle: 'Polars-Powered Dataset Diagnostics & Curation',
    category: 'OPEN_SOURCE',
    categoryLabel: 'PyPI PACKAGE',
    image: '/images/datadoc_showcase.jpg',
    badge: 'PUBLISHED ON PYPI',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-400',
    tags: ['Polars', 'Rust Engine', 'Python', 'AI Agents', 'PyPI'],
    githubUrl: 'https://github.com/narain-karti/DATADOC',
    pypiUrl: 'https://pypi.org/project/datadoc-cli/',
    pipCommand: 'pip install datadoc-cli',
    pinColor: '#10b981',
    rotation: -1.5,
  },
  {
    id: 'quorum',
    number: '02',
    title: 'QUORUM OS',
    subtitle: 'Multi-Agent Autonomous Executive Boardroom',
    category: 'AI_AGENTS',
    categoryLabel: 'MULTI-AGENT',
    image: '/images/quorum_showcase.jpg',
    badge: 'TAKEOVER’26 TOP RANK',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-400',
    tags: ['ReactFlow', 'Fastify', 'Multi-Agent', 'SQLite', 'TypeScript'],
    githubUrl: 'https://github.com/narain-karti/Quorum',
    pinColor: '#a855f7',
    rotation: 1.2,
  },
  {
    id: 'project-k',
    number: '03',
    title: 'PROJECT K',
    subtitle: 'Edge AI Traffic Signal & Emergency Preemption',
    category: 'SYSTEMS',
    categoryLabel: 'EDGE VISION',
    image: '/images/project_k_showcase.jpg',
    badge: '₹3L PRIZE · NATIONAL 2ND',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-400',
    tags: ['YOLOv8', 'NVIDIA Jetson', 'SUMO RL', 'MQTT', 'PyTorch'],
    githubUrl: 'https://github.com/narain-karti/Project-K',
    pinColor: '#f59e0b',
    rotation: -1.8,
  },
  {
    id: 'axoweb',
    number: '04',
    title: 'AXOWEB PLATFORM',
    subtitle: 'Tri-App Ecosystem & 5-Role AWS Microservices',
    category: 'SYSTEMS',
    categoryLabel: 'STARTUP & AWS',
    image: '/images/axoweb_showcase.jpg',
    badge: 'BRAVE WINNER · ₹7L+ REVENUE',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-400',
    tags: ['AWS Lambda', 'RDS Postgres', 'Flutter', 'ElastiCache', 'Cognito'],
    githubUrl: 'https://axoweb.in',
    pinColor: '#3b82f6',
    rotation: 1.5,
  },
  {
    id: 'deceptrix',
    number: '05',
    title: 'DECEPTRIX',
    subtitle: 'Multimodal Video Forensic & Deepfake Detector',
    category: 'AI_AGENTS',
    categoryLabel: 'COMPUTER VISION',
    image: '/images/deceptrix_showcase.jpg',
    badge: 'FORENSIC VISION',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-400',
    tags: ['2D FFT', 'Vision Transformers', 'PyTorch', 'Grad-CAM'],
    githubUrl: 'https://github.com/narain-karti/DECEPTRIX',
    pinColor: '#f43f5e',
    rotation: -1.0,
  },
  {
    id: 'beyond-earth',
    number: '06',
    title: 'BEYOND EARTH',
    subtitle: 'Closed-Loop Orbital Stanford Torus Blueprint',
    category: 'RESEARCH',
    categoryLabel: 'SPACE SYSTEMS',
    image: '/images/space_settlement.jpg',
    badge: 'NASA ZONAL AWARD',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-400',
    tags: ['1.0g Centrifugal', 'CELSS Bio-Loop', 'Lunar ISRU', 'NASA'],
    githubUrl: 'https://github.com/narain-karti',
    pinColor: '#6366f1',
    rotation: 1.8,
  },
  {
    id: 'retrod-pms',
    number: '07',
    title: 'RETROD PMS',
    subtitle: 'Lead Generation & Pipeline Automation',
    category: 'OPEN_SOURCE',
    categoryLabel: 'AUTOMATION',
    image: '/images/hardware_lab.jpg',
    badge: 'TYPESCRIPT TOOL',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-400',
    tags: ['TypeScript', 'Lead Gen', 'Automation', 'REST APIs'],
    githubUrl: 'https://github.com/narain-karti/RETROD-PMS-LEAD-GEN',
    pinColor: '#14b8a6',
    rotation: -1.2,
  },
  {
    id: 'expense-splitter',
    number: '08',
    title: 'EXPENSE SPLITTER',
    subtitle: 'Native Mobile Financial Reconciliation App',
    category: 'SYSTEMS',
    categoryLabel: 'MOBILE KOTLIN',
    image: '/images/hero_avatar.jpg',
    badge: 'KOTLIN ANDROID',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-400',
    tags: ['Kotlin', 'Android SDK', 'Fintech', 'Algorithms'],
    githubUrl: 'https://github.com/narain-karti/Expense-Splitter',
    pinColor: '#0ea5e9',
    rotation: 1.0,
  },
];

export function PlaygroundExactSection() {
  const [filter, setFilter] = useState<'ALL' | 'AI_AGENTS' | 'SYSTEMS' | 'OPEN_SOURCE' | 'RESEARCH'>('ALL');
  const [copiedPip, setCopiedPip] = useState<boolean>(false);
  const [macMessage, setMacMessage] = useState<string>('hello.');

  const filteredProjects = filter === 'ALL'
    ? BOARD_PROJECTS
    : BOARD_PROJECTS.filter((p) => p.category === filter);

  const handleCopyPip = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedPip(true);
    setTimeout(() => setCopiedPip(false), 2000);
  };

  const handleMacClick = () => {
    const messages = ['hello.', 'system: online', '0.42s benchmark', 'pip install datadoc-cli', 'takeover 26 rank #1', 'jetson ready'];
    const next = messages[(messages.indexOf(macMessage) + 1) % messages.length];
    setMacMessage(next);
  };

  return (
    <section id="playground-view" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 notebook-ruled-bg border-b border-black/10 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header: Clean Functional Pinboard Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-black pb-4">
          <div>
            <div className="flex items-center gap-2 font-spacemono text-xs text-neutral-600 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>INTERACTIVE ENGINEERING WORKBENCH // ALL PROJECTS</span>
            </div>
            <h2 className="font-pixel text-4xl sm:text-5xl md:text-6xl text-black tracking-tight uppercase">
              PROJECT PINBOARD
            </h2>
            <p className="font-typewriter text-xs sm:text-sm text-neutral-700 max-w-2xl mt-1">
              Click any project card to open its source code on GitHub, inspect live packages on PyPI, or review blueprints.
            </p>
          </div>

          {/* Quick Pip Install Banner */}
          <div className="bg-neutral-900 text-neutral-200 px-3.5 py-2 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] flex items-center gap-2.5 font-spacemono text-xs shrink-0">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-neutral-100">pip install datadoc-cli</span>
            <button
              type="button"
              onClick={() => handleCopyPip('pip install datadoc-cli')}
              className="p-1 hover:bg-neutral-800 rounded text-neutral-300 hover:text-white transition-colors"
              title="Copy install command"
            >
              {copiedPip ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-spacemono font-bold text-neutral-600 flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3" />
            <span>FILTER:</span>
          </span>
          {[
            { id: 'ALL', label: `ALL (${BOARD_PROJECTS.length})` },
            { id: 'AI_AGENTS', label: 'AI & AGENTS' },
            { id: 'SYSTEMS', label: 'SYSTEMS & CLOUD' },
            { id: 'OPEN_SOURCE', label: 'OPEN SOURCE & CLI' },
            { id: 'RESEARCH', label: 'SPACE & RESEARCH' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as any)}
              className={`px-3 py-1 rounded-full text-xs font-spacemono font-bold border transition-all ${
                filter === tab.id
                  ? 'bg-black text-white border-black shadow-2xs'
                  : 'bg-white/90 text-neutral-800 border-neutral-400 hover:bg-neutral-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pinboard Canvas Grid */}
        <div className="relative w-full bg-[#f8f6ef] rounded-xl border-2 border-black shadow-[8px_8px_0px_#000] p-4 sm:p-6 md:p-8 paper-grid">
          
          {/* Top Interactive Mac Terminal Banner */}
          <div className="mb-8 p-4 bg-[#e5e0d3] rounded-lg border-2 border-black shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Retro Mac Mini Monitor */}
              <div 
                onClick={handleMacClick}
                className="w-14 h-14 bg-[#242b35] rounded-md border-2 border-black flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform shrink-0 shadow-inner group"
                title="Click Macintosh to cycle messages"
              >
                <span className="font-handwriting text-xs text-cyan-300 tracking-wider animate-pulse font-bold text-center px-1">
                  {macMessage}
                </span>
                <span className="text-[7px] font-spacemono text-cyan-400/80">1984</span>
              </div>
              <div>
                <div className="font-spacemono font-bold text-xs text-black flex items-center gap-2">
                  <span>NARAIN.OS // HARDWARE &amp; CODE WORKBENCH</span>
                  <span className="px-1.5 py-0.2 bg-emerald-200 text-emerald-950 rounded text-[10px] border border-black/30">
                    LIVE
                  </span>
                </div>
                <p className="font-typewriter text-xs text-neutral-700">
                  Direct GitHub repository connections. Click any card below to jump into code.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-spacemono text-xs">
              <a
                href="https://github.com/narain-karti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-neutral-800 text-white rounded font-bold border border-black shadow-2xs transition-transform active:scale-95"
              >
                <Github className="w-3.5 h-3.5" />
                <span>FOLLOW @NARAIN-KARTI</span>
              </a>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-lg border-2 border-black shadow-[4px_4px_0px_#18181b] p-4 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] relative group select-text"
              >
                {/* Pushpin / Tape Top Accent */}
                <div 
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-black shadow-xs z-10 flex items-center justify-center"
                  style={{ backgroundColor: proj.pinColor }}
                >
                  <span className="w-1 h-1 rounded-full bg-white/80" />
                </div>

                {/* Top: Header & Badge */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-spacemono text-[10px] font-bold text-neutral-400">
                      [{proj.number}] {proj.categoryLabel}
                    </span>
                    <span className={`text-[9px] font-spacemono font-bold px-1.5 py-0.5 rounded border ${proj.badgeColor}`}>
                      {proj.badge}
                    </span>
                  </div>

                  {/* Project Image Preview */}
                  <div className="relative w-full h-36 bg-neutral-100 rounded-md overflow-hidden border border-black/20 group-hover:border-black transition-colors">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-2 py-1 bg-black/80 text-white font-spacemono text-[10px] font-bold rounded flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        <span>OPEN REPO</span>
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-spacemono font-bold text-sm text-neutral-950 leading-tight">
                      {proj.title}
                    </h3>
                    <p className="font-typewriter text-xs text-neutral-700 mt-1 leading-snug">
                      {proj.subtitle}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-spacemono bg-[#faf8f3] text-neutral-800 px-1.5 py-0.5 rounded border border-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: Action Links */}
                <div className="pt-3 mt-3 border-t border-dashed border-neutral-300 flex items-center justify-between gap-2">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded text-[11px] font-spacemono font-bold border border-black shadow-2xs transition-transform active:scale-95"
                    >
                      {proj.githubUrl.includes('github.com') ? <Github className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                      <span>{proj.githubUrl.includes('github.com') ? 'GITHUB' : 'VISIT SITE'}</span>
                      {proj.githubUrl.includes('github.com') && <ExternalLink className="w-2.5 h-2.5 opacity-70" />}
                    </a>
                  )}

                  {proj.pypiUrl && (
                    <a
                      href={proj.pypiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 py-1.5 px-2.5 bg-blue-100 hover:bg-blue-200 text-blue-950 rounded text-[11px] font-spacemono font-bold border border-blue-400 transition-colors"
                      title="View PyPI Package"
                    >
                      <Package className="w-3 h-3" />
                      <span>PyPI</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-8 pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-spacemono text-neutral-600">
            <span>⚡ All 8 projects actively maintained and verified</span>
            <a
              href="https://github.com/narain-karti?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:underline font-bold flex items-center gap-1"
            >
              <span>Explore all repositories on GitHub</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
