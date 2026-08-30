'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, Sparkles, CheckCircle2, ChevronRight, Award, Terminal, Cpu, Users, Layers, ExternalLink } from 'lucide-react';
import { TechBrandIcon } from './TechBrandIcons';

interface CaseStudyExactSectionProps {
  onBackToOverview?: () => void;
  initialStudy?: 'datadoc' | 'project-k' | 'quorum' | 'axoweb' | 'wayline' | 'tandem';
}

export function CaseStudyExactSection({ onBackToOverview, initialStudy = 'datadoc' }: CaseStudyExactSectionProps) {
  const [selectedStudy, setSelectedStudy] = useState<'datadoc' | 'project-k' | 'quorum' | 'axoweb' | 'wayline' | 'tandem'>(initialStudy);

  const studyData = {
    'datadoc': {
      date: 'AUG 2026',
      title: 'DATADOC CLI',
      subtitle: 'Polars-backed dataset engineering tool that automatically diagnoses schema corruptions, missing data, and distribution anomalies.',
      pills: ['OPEN SOURCE', 'PYTHON / POLARS', 'CLI TOOLING'],
      role: 'Creator & Maintainer',
      timeline: 'Open Source',
      team: 'Independent Author',
      year: '2026',
      heroBadge: 'PUBLISHED ON PYPI · pip install datadoc-cli',
      heroImage: 'https://picsum.photos/seed/dataset-engineering-code/1200/800',
      resultsText: 'DataDoc replaces slow, boilerplate-heavy exploratory data analysis notebooks with deterministic, instant CLI commands. Leveraging Apache Arrow memory structures and Polars multi-threaded kernels, it scans 1,000,000+ rows in 0.42 seconds and applies agentic schema repairs with zero data corruption.',
      metric1: { value: '0.42s', label: '1M-ROW PROFILING SPEED' },
      metric2: { value: '14x', label: 'FASTER THAN PANDAS EDA' },
      metric3: { value: '100%', label: 'DETERMINISTIC PIPELINES' },
      photo1: 'https://picsum.photos/seed/terminal-cli-screen/600/500',
      photo1Badge: 'TERMINAL DIAGNOSTIC INTERFACE',
      photo2: 'https://picsum.photos/seed/data-analyst-laptop-flow/600/500',
      photo2Badge: 'AGENTIC PLANNER & CHAT REPAIR'
    },
    'project-k': {
      date: 'AUG 2026',
      title: 'PROJECT K',
      subtitle: 'Real-time YOLOv8 edge vision on NVIDIA Jetson, multi-agent RL signal optimization, and MQTT ambulance preemption.',
      pills: ['COMPUTER VISION', 'EDGE AI / JETSON', 'MARL SIMULATION'],
      role: 'AI & Systems Architect',
      timeline: '4 months',
      team: '4 Engineers (Lead)',
      year: '2026',
      heroBadge: 'OPENAI ACADEMY × NXTWAVE HACKATHON · NATIONAL RUNNER-UP (₹3L PRIZE)',
      heroImage: 'https://picsum.photos/seed/smart-traffic-jetson-vision/1200/800',
      resultsText: 'The edge-cloud pipeline achieves sub-120ms vehicle detection and collision triage directly on NVIDIA Jetson Orin. By integrating multi-agent reinforcement learning in SUMO for adaptive traffic signal phasing alongside MQTT-based green wave emergency clearance, junction bottlenecks were cut by 38% with zero ambulance transit delays.',
      metric1: { value: '-38%', label: 'INTERSECTION DELAYS' },
      metric2: { value: '<120ms', label: 'JETSON INFERENCE TIME' },
      metric3: { value: '₹3L Won', label: 'NATIONAL RUNNER-UP PRIZE' },
      photo1: 'https://picsum.photos/seed/jetson-edge-device-desk/600/500',
      photo1Badge: 'JETSON ORIN HARDWARE DEPLOYMENT',
      photo2: 'https://picsum.photos/seed/traffic-control-room-monitors/600/500',
      photo2Badge: 'SUMO SIMULATION BENCHMARKING'
    },
    'quorum': {
      date: 'AUG 2026',
      title: 'QUORUM',
      subtitle: 'Multi-agent debate platform simulating executive boardrooms (CMO, CFO, CTO, COO, Contrarian) for complex decision analysis.',
      pills: ['AGENTIC AI', 'REACTFLOW VISUALIZER', 'FASTIFY / MONOREPO'],
      role: 'Full-Stack & Multi-Agent Lead',
      timeline: 'TakeOver\'26 Hackathon',
      team: 'Top Rank Team',
      year: '2026',
      heroBadge: 'NATIONAL HACKATHON TAKEOVER\'26 · TOP RANK',
      heroImage: 'https://picsum.photos/seed/multi-agent-debate-graph/1200/800',
      resultsText: 'Quorum resolves single-agent hallucinations by running an automated, turn-based boardroom debate with persistent SQLite context indexing and ReactFlow graph streaming. Each persona critiques counterarguments before synthesizing an executive verdict with full traceability.',
      metric1: { value: '5 Roles', label: 'AUTONOMOUS AGENTS' },
      metric2: { value: '<80ms', label: 'GRAPH STREAMING LATENCY' },
      metric3: { value: '100%', label: 'AUDITABLE DEBATE TRANSCRIPTS' },
      photo1: 'https://picsum.photos/seed/network-node-graph-ui/600/500',
      photo1Badge: 'REACTFLOW AGENT TOPOLOGY GRAPH',
      photo2: 'https://picsum.photos/seed/boardroom-ai-executive/600/500',
      photo2Badge: 'EXECUTIVE SYNTHESIS OUTPUT'
    },
    'axoweb': {
      date: '2025 - PRESENT',
      title: 'AXOWEB TECH',
      subtitle: 'Co-founded startup shipping end-to-end AI/digital platforms and enterprise AWS microservices.',
      pills: ['STARTUP FOUNDER', 'AWS SERVERLESS', 'FLUTTER / REACT'],
      role: 'Co-Founder & Lead Architect',
      timeline: 'Startup Venture',
      team: 'Founding Team',
      year: '2025-2026',
      heroBadge: 'BRAVE STARTUPS NATIONAL WINNER · ₹7L+ REVENUE IN 3 MONTHS',
      heroImage: 'https://picsum.photos/seed/startup-office-founders/1200/800',
      resultsText: 'Led development of customer, partner, and admin apps in a tri-part Flutter/React/Firebase car-wash platform. In parallel, designed an AWS-based microservice architecture (Lambda, RDS PostgreSQL, ElastiCache, SQS, Cognito) for a university grievance platform serving 5 distinct roles.',
      metric1: { value: '₹7L+', label: 'REVENUE IN FIRST 3 MONTHS' },
      metric2: { value: '5 Roles', label: 'RBAC AWS MICROSERVICES' },
      metric3: { value: '1st Place', label: 'BRAVE STARTUPS COMPETITION' },
      photo1: 'https://picsum.photos/seed/car-wash-mobile-app/600/500',
      photo1Badge: 'TRI-APP ECOSYSTEM LAUNCH',
      photo2: 'https://picsum.photos/seed/cloud-architecture-serverless/600/500',
      photo2Badge: 'AWS SERVERLESS INFRASTRUCTURE'
    },
    'wayline': {
      date: 'MAR 19, 2026',
      title: 'WAYLINE',
      subtitle: 'Urban multi-modal transit navigation interface designed for glanceable, high-stress station commuter clarity.',
      pills: ['MOBILITY', 'CONSUMER APP', 'TRANSIT UX'],
      role: 'Lead Systems Designer',
      timeline: '6 months',
      team: '3 Engineers, 1 PM',
      year: '2026',
      heroBadge: 'LIVE PILOT DEPLOYMENT · METRO LINE 01 & 02',
      heroImage: 'https://picsum.photos/seed/subway-phone-transit/1200/800',
      resultsText: 'Engineered a glanceable mobile interface for high-density metro stations. Real-time platform step routing reduced trip-planning delays by 47% and minimized missed interchange connections across initial pilot lines.',
      metric1: { value: '47%', label: 'FASTER TRIP PLANNING' },
      metric2: { value: '-55%', label: 'LATE ARRIVALS' },
      metric3: { value: 'Live Network', label: 'SCALE IMPACT' },
      photo1: 'https://picsum.photos/seed/commuter-train-view/600/500',
      photo1Badge: 'PLATFORM IN-HAND VALIDATION',
      photo2: 'https://picsum.photos/seed/commuter-happy-group/600/500',
      photo2Badge: 'METRO STATION LAUNCH DAY'
    },
    'tandem': {
      date: 'MAY 2, 2026',
      title: 'TANDEM',
      subtitle: 'Multi-party balance reconciliation and shared finance ledger with real-time settlement tracking.',
      pills: ['FINTECH', 'MOBILE WALLET', 'SHARED FINANCE'],
      role: 'Design & Systems',
      timeline: '4 months',
      team: '2 Engineers, 1 Designer',
      year: '2026',
      heroBadge: 'EARLY ACCESS BETA · 10K+ TRANSFERS',
      heroImage: 'https://picsum.photos/seed/fintech-dark-app/1200/800',
      resultsText: 'Engineered group financial ledgers with transparent ledger proofs, instant P2P settled balances, and recurring budget envelopes with sub-3 second settlement cycles.',
      metric1: { value: '3.2s', label: 'AVG SETTLEMENT TIME' },
      metric2: { value: '94%', label: 'RETENTION AFTER MONTH 1' },
      metric3: { value: '$1.4M', label: 'TRANSACTION VOLUME' },
      photo1: 'https://picsum.photos/seed/phone-banking-ui/600/500',
      photo1Badge: 'INSTANT RECONCILIATION FLOW',
      photo2: 'https://picsum.photos/seed/coffee-friends-payment/600/500',
      photo2Badge: 'SOCIAL BILL-SPLIT SESSIONS'
    }
  };

  const current = studyData[selectedStudy] || studyData['datadoc'];

  return (
    <section id="case-study-view" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 notebook-ruled-bg border-b border-black/10 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Case Study Switcher Pills */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b-2 border-black/10">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-spacemono text-xs text-neutral-600 font-bold mr-1">SELECT CASE STUDY:</span>
            
            <button
              type="button"
              onClick={() => setSelectedStudy('datadoc')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-spacemono font-bold transition-all border ${
                selectedStudy === 'datadoc'
                  ? 'bg-[#10b981] text-neutral-950 border-black shadow-xs ring-2 ring-black/20'
                  : 'bg-white text-neutral-800 border-black/20 hover:bg-neutral-100'
              }`}
            >
              ⚡ 01. DATADOC (POLARS CLI)
            </button>

            <button
              type="button"
              onClick={() => setSelectedStudy('quorum')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-spacemono font-bold transition-all border ${
                selectedStudy === 'quorum'
                  ? 'bg-[#c084fc] text-neutral-950 border-black shadow-xs'
                  : 'bg-white text-neutral-800 border-black/20 hover:bg-neutral-100'
              }`}
            >
              02. QUORUM (MULTI-AGENT)
            </button>

            <button
              type="button"
              onClick={() => setSelectedStudy('axoweb')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-spacemono font-bold transition-all border ${
                selectedStudy === 'axoweb'
                  ? 'bg-[#2dd4bf] text-neutral-950 border-black shadow-xs'
                  : 'bg-white text-neutral-800 border-black/20 hover:bg-neutral-100'
              }`}
            >
              03. AXOWEB (STARTUP)
            </button>

            <button
              type="button"
              onClick={() => setSelectedStudy('project-k')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-spacemono font-bold transition-all border ${
                selectedStudy === 'project-k'
                  ? 'bg-[#60a5fa] text-neutral-950 border-black shadow-xs'
                  : 'bg-white text-neutral-800 border-black/20 hover:bg-neutral-100'
              }`}
            >
              04. PROJECT K (AI VISION)
            </button>

            <button
              type="button"
              onClick={() => setSelectedStudy('wayline')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-spacemono font-bold transition-all border ${
                selectedStudy === 'wayline'
                  ? 'bg-black text-white border-black shadow-xs'
                  : 'bg-white text-neutral-800 border-black/20 hover:bg-neutral-100'
              }`}
            >
              05. WAYLINE (TRANSIT UX)
            </button>
          </div>

          {onBackToOverview && (
            <button
              type="button"
              onClick={onBackToOverview}
              className="inline-flex items-center gap-1.5 text-xs font-spacemono font-bold text-neutral-800 hover:text-black bg-white px-3 py-1 rounded-lg border border-black/30 shadow-2xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO OVERVIEW</span>
            </button>
          )}
        </div>

        {/* ========================================================= */}
        {/* PART 1: CASE STUDY HERO & METADATA GRID                   */}
        {/* ========================================================= */}
        <div className="space-y-8">
          
          {/* Header Row: Title & Metadata Sticky Notes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Date, Title, Subtitle, Tags */}
            <div className="lg:col-span-7 space-y-4">
              {/* Date */}
              <div className="flex items-center gap-2 font-spacemono text-xs text-neutral-700 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse border border-black" />
                <span>{current.date}</span>
              </div>

              {/* Massive Block Pixel Header */}
              <h2 className="font-pixel text-5xl sm:text-6xl md:text-7xl text-black tracking-tight leading-none uppercase">
                {current.title}
              </h2>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-neutral-900 font-typewriter leading-relaxed font-semibold">
                {current.subtitle}
              </p>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {current.pills.map((pill, idx) => (
                  <span 
                    key={idx} 
                    className={`font-spacemono text-xs font-bold px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] ${
                      idx === 0 ? 'bg-[#fde047] text-neutral-950' : idx === 1 ? 'bg-[#fed7aa] text-amber-950' : 'bg-[#cffafe] text-cyan-950'
                    }`}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col: Metadata Sticky Notes Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 font-spacemono">
              {/* 1. ROLE (Blue Sticky) */}
              <div className="bg-[#bfdbfe] p-3.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] -rotate-1">
                <div className="text-[10px] text-blue-950 uppercase font-extrabold">ROLE</div>
                <div className="text-xs font-bold text-neutral-950 mt-1">
                  {current.role}
                </div>
              </div>

              {/* 2. TIMELINE (Yellow Sticky) */}
              <div className="bg-[#fef08a] p-3.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] rotate-2">
                <div className="text-[10px] text-amber-950 uppercase font-extrabold">TIMELINE</div>
                <div className="text-xs font-bold text-neutral-950 mt-1">
                  {current.timeline}
                </div>
              </div>

              {/* 3. TEAM (Green Sticky) */}
              <div className="bg-[#bbf7d0] p-3.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] rotate-1">
                <div className="text-[10px] text-emerald-950 uppercase font-extrabold">TEAM</div>
                <div className="text-xs font-bold text-neutral-950 mt-1">
                  {current.team}
                </div>
              </div>

              {/* 4. YEAR (Pink Sticky) */}
              <div className="bg-[#fbcfe8] p-3.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_#000] -rotate-2">
                <div className="text-[10px] text-pink-950 uppercase font-extrabold">YEAR</div>
                <div className="text-xs font-bold text-neutral-950 mt-1">
                  {current.year}
                </div>
              </div>
            </div>

          </div>

          {/* Large Hero Photography Mockup Card */}
          <div className="w-full h-80 sm:h-[420px] bg-neutral-900 rounded-xl overflow-hidden border-2 border-black shadow-[6px_6px_0px_#000] relative group">
            <Image
              src={current.heroImage}
              alt={`${current.title} Hero`}
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-700 opacity-90"
              referrerPolicy="no-referrer"
            />
            {/* Context Badge */}
            <div className="absolute top-4 left-4 bg-black/95 text-white font-spacemono text-xs px-3.5 py-1.5 rounded border border-white/30 shadow-lg">
              {current.heroBadge}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* PART 2: METRICS & RESULTS SWATCHES                        */}
        {/* ========================================================= */}
        <div className="space-y-8 pt-4">
          
          {/* Handwritten Annotation: the results */}
          <div className="space-y-2">
            <span className="font-handwriting text-3xl sm:text-4xl text-neutral-900 font-bold block mb-1">
              the results &amp; metrics ⚡
            </span>
            <p className="max-w-3xl text-xs sm:text-sm text-neutral-800 font-typewriter leading-relaxed">
              {current.resultsText}
            </p>
          </div>

          {/* 3 Result Swatches / Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Swatch 1 (Blue) */}
            <div className="bg-[#bfdbfe] p-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between space-y-3 -rotate-1">
              <span className="font-spacemono text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 leading-tight">
                {current.metric1.value}
              </span>
              <div className="font-spacemono text-xs font-bold uppercase tracking-wider text-blue-900 border-t border-blue-400/60 pt-2">
                {current.metric1.label}
              </div>
            </div>

            {/* Swatch 2 (Yellow) */}
            <div className="bg-[#fef08a] p-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between space-y-3 rotate-1">
              <span className="font-spacemono text-3xl sm:text-4xl lg:text-5xl font-black text-amber-950 leading-tight">
                {current.metric2.value}
              </span>
              <div className="font-spacemono text-xs font-bold uppercase tracking-wider text-amber-900 border-t border-amber-400/60 pt-2">
                {current.metric2.label}
              </div>
            </div>

            {/* Swatch 3 (Mint Green) */}
            <div className="bg-[#bbf7d0] p-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] flex flex-col justify-between space-y-3 -rotate-1">
              <span className="font-spacemono text-2xl sm:text-3xl font-black text-emerald-950 leading-tight">
                {current.metric3.value}
              </span>
              <div className="font-spacemono text-xs font-bold uppercase tracking-wider text-emerald-900 border-t border-emerald-400/60 pt-2">
                {current.metric3.label}
              </div>
            </div>

          </div>

          {/* Two Side-by-Side Context Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="relative w-full h-64 sm:h-72 bg-neutral-800 rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_#000]">
              <Image
                src={current.photo1}
                alt={`${current.title} Context 1`}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 text-black font-spacemono text-[11px] font-bold px-2.5 py-1 rounded shadow-xs border border-black">
                {current.photo1Badge}
              </div>
            </div>

            <div className="relative w-full h-64 sm:h-72 bg-neutral-800 rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_#000]">
              <Image
                src={current.photo2}
                alt={`${current.title} Context 2`}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 text-black font-spacemono text-[11px] font-bold px-2.5 py-1 rounded shadow-xs border border-black">
                {current.photo2Badge}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

