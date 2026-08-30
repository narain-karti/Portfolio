'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Folder, Calendar, Award, Terminal, Cpu, Users, Layers, ExternalLink, CheckCircle2, ShieldCheck, Zap, Database } from 'lucide-react';
import { TechBrandIcon } from './TechBrandIcons';

interface FeaturedWorksExactSectionProps {
  onSelectCaseStudy: (caseStudyId: string) => void;
}

export function FeaturedWorksExactSection({
  onSelectCaseStudy,
}: FeaturedWorksExactSectionProps) {
  const [activeProjectTab, setActiveProjectTab] = useState<'01' | '02' | '03' | '04'>('01');

  return (
    <section id="work-view" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 notebook-ruled-bg border-b border-black/10 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* ========================================================= */}
        {/* PART 1: FEATURED WORKS GALLERY OVERVIEW                   */}
        {/* ========================================================= */}
        <div className="w-full">
          {/* Handwritten: explore my work! */}
          <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
            <span className="font-handwriting text-3xl sm:text-4xl text-neutral-900 font-bold -rotate-1 inline-block">
              explore my work! ⚡
            </span>
            <div className="hidden sm:block font-spacemono text-[11px] text-neutral-600 bg-white px-3 py-1 border border-black/20 rounded shadow-2xs">
              RECRUITER-VERIFIED BUILDS • PRODUCTION PROVEN
            </div>
          </div>

          {/* Massive Block Pixel Header: FEATURED WORKS */}
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-8 border-b-2 border-black/10 pb-3">
            <h2 className="font-pixel text-4xl sm:text-5xl md:text-6xl text-black tracking-tight">
              FEATURED WORKS
            </h2>
            <div className="hidden sm:block font-spacemono text-[10px] sm:text-xs text-neutral-700 font-bold bg-[#fef08a] px-3 py-1 border border-black rounded shadow-2xs">
              OPEN SOURCE • MULTI-AGENT AI • STARTUP PLATFORMS
            </div>
          </div>

          {/* Folder Card Grid (DataDoc CLI & AXOWEB Technologies / Quorum) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full">
            
            {/* FOLDER CARD 1: DataDoc CLI (Replacing Project K folder) */}
            <div 
              onClick={() => onSelectCaseStudy('datadoc')}
              className="group cursor-pointer bg-white rounded-xl border-2 border-black shadow-[5px_5px_0px_#18181b] hover:shadow-[7px_7px_0px_#10b981] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Folder Tab Header */}
              <div className="bg-[#faf8f3] px-3 sm:px-4 py-2 sm:py-2.5 border-b-2 border-black flex flex-wrap items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 font-spacemono text-[10px] sm:text-xs text-neutral-900 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-black" />
                  <span>PYPI: DATADOC-CLI</span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-spacemono font-bold uppercase bg-[#a7f3d0] text-emerald-950 px-2 py-0.5 rounded border border-black shadow-2xs">
                  ⚡ OPEN SOURCE PACKAGE
                </span>
              </div>

              {/* Card Photo Preview */}
              <div className="relative w-full h-56 sm:h-64 bg-neutral-950 overflow-hidden flex items-center justify-center p-4">
                <Image
                  src="/images/datadoc_showcase.jpg"
                  alt="DataDoc CLI Terminal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center p-4">
                  <div className="w-full max-w-sm bg-neutral-950/95 p-3.5 rounded-lg border border-emerald-500/50 text-left font-spacemono text-[11px] shadow-2xl space-y-1">
                    <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-300" />
                      <span>$ pip install datadoc-cli</span>
                    </div>
                    <div className="text-neutral-300 text-[10px]">$ datadoc analyze ./production_telemetry.parquet</div>
                    <div className="text-cyan-400 font-mono text-[10px]">✓ Analyzed 1,000,000 rows in 0.42s (Polars Rust Engine)</div>
                    <div className="text-yellow-300 font-mono text-[10px]">✓ Auto-repaired 3,420 missing nulls with Agentic heuristics</div>
                  </div>
                </div>
                {/* Overlay Badges */}
                <div className="absolute top-3 left-3 bg-black/90 text-white font-spacemono text-[11px] px-2.5 py-1 rounded border border-white/20 flex items-center gap-1.5">
                  <TechBrandIcon name="python" size={14} />
                  <span>POLARS + PYTHON RUST CORE</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#34d399] text-neutral-950 font-spacemono text-[11px] font-bold px-2.5 py-1 rounded border border-black shadow-md">
                  14x FASTER THAN PANDAS
                </div>
              </div>

              {/* Card Info Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-spacemono font-bold text-xl text-neutral-950 group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                      <span>DataDoc CLI &amp; Library</span>
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-800 font-typewriter mt-2 leading-relaxed">
                    High-performance exploratory data analysis (EDA) tool and Python package powered by Polars. Diagnoses anomalies, outliers, schema drifts, and null distributions with sub-second execution and agentic auto-repair.
                  </p>
                </div>

                {/* Recruiter Highlights */}
                <div className="p-2.5 bg-[#faf8f3] rounded border border-black/15 font-typewriter text-xs text-neutral-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold font-spacemono text-[11px] text-neutral-950">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>BENCHMARK: 0.42s on 1M rows &bull; Zero external cloud overhead</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-2 text-[10px] font-spacemono text-neutral-600 border-t border-dashed border-black/20">
                  <span className="font-bold text-neutral-900 bg-neutral-100 px-1.5 py-0.5 rounded border">STACK:</span>
                  <span>Python &bull; Polars &bull; Agentic AI &bull; Click CLI &bull; PyPI Distribution</span>
                </div>
              </div>
            </div>

            {/* FOLDER CARD 2: AXOWEB Technologies */}
            <div 
              onClick={() => onSelectCaseStudy('axoweb')}
              className="group cursor-pointer bg-white rounded-xl border-2 border-black shadow-[5px_5px_0px_#18181b] hover:shadow-[7px_7px_0px_#0f766e] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Folder Tab Header */}
              <div className="bg-[#faf8f3] px-3 sm:px-4 py-2 sm:py-2.5 border-b-2 border-black flex flex-wrap items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 font-spacemono text-[10px] sm:text-xs text-neutral-900 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 border border-black" />
                  <span>STARTUP CO-FOUNDER</span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-spacemono font-bold uppercase bg-[#ccfbf1] text-teal-950 px-2 py-0.5 rounded border border-black shadow-2xs">
                  🏆 ₹7L+ REVENUE
                </span>
              </div>

              {/* Card Photo Preview */}
              <div className="relative w-full h-56 sm:h-64 bg-neutral-950 overflow-hidden">
                <Image
                  src="/images/axoweb_showcase.jpg"
                  alt="AXOWEB Platform"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                {/* Overlay Badges */}
                <div className="absolute top-3 left-3 bg-black/90 text-white font-spacemono text-[11px] px-2.5 py-1 rounded border border-white/20 flex items-center gap-1.5">
                  <TechBrandIcon name="aws" size={14} />
                  <span>AWS SERVERLESS + FLUTTER</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#2dd4bf] text-neutral-950 font-spacemono text-[11px] font-bold px-2.5 py-1 rounded border border-black shadow-md">
                  3 LIVE APPS &bull; 5-ROLE RBAC
                </div>
              </div>

              {/* Card Info Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-spacemono font-bold text-xl text-neutral-950 group-hover:text-teal-700 transition-colors flex items-center gap-2">
                      <span>AXOWEB Technologies</span>
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-teal-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-800 font-typewriter mt-2 leading-relaxed">
                    Full-stack AI &amp; digital solutions company. Shipped a 3-app on-demand mobile platform (Flutter/React/Firebase) and architected university grievance microservices (AWS Lambda, RDS PostgreSQL, SQS, Cognito).
                  </p>
                </div>

                {/* Recruiter Highlights */}
                <div className="p-2.5 bg-[#faf8f3] rounded border border-black/15 font-typewriter text-xs text-neutral-800 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold font-spacemono text-[11px] text-neutral-950">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>FOUNDER IMPACT: National 1st Place &bull; Commercialized to paying clients</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-2 text-[10px] font-spacemono text-neutral-600 border-t border-dashed border-black/20">
                  <span className="font-bold text-neutral-900 bg-neutral-100 px-1.5 py-0.5 rounded border">STACK:</span>
                  <span>AWS Serverless &bull; RDS PostgreSQL &bull; Flutter &bull; React &bull; SQS &bull; Firebase</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* PART 2: DEEP DIVE FOLDER TABS (PROJECT 01 TO 04)          */}
        {/* ========================================================= */}
        <div className="space-y-4 pt-6 w-full">
          {/* Folder Tab Switcher Bar matching the design */}
          <div className="flex items-end gap-1.5 flex-wrap">
            {/* Tab 01: DATADOC CLI (Yellow/Green Tab) */}
            <button
              type="button"
              onClick={() => setActiveProjectTab('01')}
              className={`px-4 py-2.5 text-xs font-spacemono font-bold tracking-wider uppercase transition-all rounded-t-lg border-2 ${
                activeProjectTab === '01'
                  ? 'bg-[#10b981] text-neutral-950 border-black shadow-xs translate-y-0.5 z-10'
                  : 'bg-white text-neutral-800 border-black/30 hover:bg-neutral-100'
              }`}
            >
              [01] DATADOC CLI (PYPI)
            </button>

            {/* Tab 02: QUORUM MULTI-AGENT (Purple Tab) */}
            <button
              type="button"
              onClick={() => setActiveProjectTab('02')}
              className={`px-4 py-2.5 text-xs font-spacemono font-bold tracking-wider uppercase transition-all rounded-t-lg border-2 ${
                activeProjectTab === '02'
                  ? 'bg-[#8b5cf6] text-white border-black shadow-xs translate-y-0.5 z-10'
                  : 'bg-white text-neutral-800 border-black/30 hover:bg-neutral-100'
              }`}
            >
              [02] QUORUM MULTI-AGENT
            </button>

            {/* Tab 03: AXOWEB TECH (Teal Tab) */}
            <button
              type="button"
              onClick={() => setActiveProjectTab('03')}
              className={`px-4 py-2.5 text-xs font-spacemono font-bold tracking-wider uppercase transition-all rounded-t-lg border-2 ${
                activeProjectTab === '03'
                  ? 'bg-[#14b8a6] text-neutral-950 border-black shadow-xs translate-y-0.5 z-10'
                  : 'bg-white text-neutral-800 border-black/30 hover:bg-neutral-100'
              }`}
            >
              [03] AXOWEB TECH
            </button>

            {/* Tab 04: PROJECT K (Blue Tab) */}
            <button
              type="button"
              onClick={() => setActiveProjectTab('04')}
              className={`px-4 py-2.5 text-xs font-spacemono font-bold tracking-wider uppercase transition-all rounded-t-lg border-2 ${
                activeProjectTab === '04'
                  ? 'bg-[#2563eb] text-white border-black shadow-xs translate-y-0.5 z-10'
                  : 'bg-white text-neutral-800 border-black/30 hover:bg-neutral-100'
              }`}
            >
              [04] PROJECT K (TRAFFIC AI)
            </button>
          </div>

          {/* TAB 01: DATADOC CLI SHOWCASE CARD */}
          {activeProjectTab === '01' && (
            <div className="bg-[#064e3b] text-white p-6 sm:p-10 rounded-b-xl rounded-tr-xl border-2 border-black shadow-[6px_6px_0px_#000] grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden w-full">
              <div className="absolute top-3 right-6 w-24 h-5 bg-white/90 border-x border-dashed border-black/30 -rotate-6 z-20" />

              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 font-spacemono text-xs text-emerald-200 font-bold bg-emerald-950/80 px-3 py-1 rounded border border-emerald-400/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PUBLISHED OPEN-SOURCE PACKAGE ON PYPI</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-pixel tracking-tight text-white uppercase">
                  DataDoc CLI &amp; Library
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 font-typewriter leading-relaxed">
                  Polars-backed dataset engineering tool and Python package that automatically diagnoses and fixes missing values, distribution anomalies, and schema drifts with an agentic LLM assistant. Replaces tedious manual exploratory data analysis with deterministic, blazing-fast Rust-based routines.
                </p>

                {/* Recruiter Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-1 font-spacemono text-center">
                  <div className="bg-emerald-950/90 p-2 rounded border border-emerald-600/40">
                    <div className="text-emerald-300 font-bold text-sm">0.42s</div>
                    <div className="text-[10px] text-emerald-200">1M Row Scan</div>
                  </div>
                  <div className="bg-emerald-950/90 p-2 rounded border border-emerald-600/40">
                    <div className="text-yellow-300 font-bold text-sm">14x</div>
                    <div className="text-[10px] text-emerald-200">Faster vs Pandas</div>
                  </div>
                  <div className="bg-emerald-950/90 p-2 rounded border border-emerald-600/40">
                    <div className="text-cyan-300 font-bold text-sm">PyPI</div>
                    <div className="text-[10px] text-emerald-200">Zero-Config CLI</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy('datadoc')}
                    className="inline-flex items-center gap-2 text-xs font-spacemono font-bold tracking-wider uppercase bg-[#a7f3d0] text-emerald-950 px-4 py-2.5 rounded-lg hover:bg-emerald-200 transition-colors shadow-2xs border border-black"
                  >
                    <span>VIEW PACKAGE DOSSIER</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center w-full">
                <div className="w-full max-w-sm bg-black text-emerald-400 rounded-lg p-4 border-2 border-emerald-500/50 relative shadow-2xl font-spacemono text-xs flex flex-col justify-center space-y-2">
                  <div className="text-white font-bold flex items-center gap-1.5 border-b border-emerald-800 pb-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>$ pip install datadoc-cli</span>
                  </div>
                  <div className="text-emerald-300">$ datadoc scan ./transactions.parquet</div>
                  <div className="text-neutral-400 text-[11px]">→ Scanned 1,000,000 records in 0.42s</div>
                  <div className="text-yellow-300 text-[11px]">✓ Health Score: 98.6% (Clean)</div>
                  <div className="text-cyan-300 text-[11px]">✓ Agentic LLM Auto-Repair: Activated</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 02: QUORUM SHOWCASE CARD */}
          {activeProjectTab === '02' && (
            <div className="bg-[#1e1b4b] text-white p-6 sm:p-10 rounded-b-xl rounded-tr-xl border-2 border-black shadow-[6px_6px_0px_#000] grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden w-full">
              <div className="absolute top-3 right-6 w-24 h-5 bg-white/90 border-x border-dashed border-black/30 -rotate-6 z-20" />

              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 font-spacemono text-xs text-purple-300 font-bold bg-purple-950/70 px-3 py-1 rounded border border-purple-500/30">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>TOP RANK &bull; NATIONAL HACKATHON TAKEOVER&apos;26</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-pixel tracking-tight text-white uppercase">
                  Quorum — Multi-Agent Board
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 font-typewriter leading-relaxed">
                  Autonomous multi-agent debate platform simulating executive boardrooms (CMO, CFO, CTO, COO, and an adversarial Contrarian). Built across a 4-package monorepo with ReactFlow node visualizations, Fastify/Node multi-turn loop orchestration, and SQLite chunked persistence.
                </p>

                {/* Recruiter Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-1 font-spacemono text-center">
                  <div className="bg-slate-900/90 p-2 rounded border border-purple-800">
                    <div className="text-purple-400 font-bold text-sm">5 Agents</div>
                    <div className="text-[10px] text-neutral-400">Autonomous Roles</div>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-purple-800">
                    <div className="text-emerald-400 font-bold text-sm">4 Packages</div>
                    <div className="text-[10px] text-neutral-400">Monorepo Architecture</div>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded border border-purple-800">
                    <div className="text-cyan-400 font-bold text-sm">Realtime</div>
                    <div className="text-[10px] text-neutral-400">ReactFlow Graph</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy('quorum')}
                    className="inline-flex items-center gap-2 text-xs font-spacemono font-bold tracking-wider uppercase bg-[#c084fc] text-neutral-950 px-4 py-2.5 rounded-lg hover:bg-purple-300 transition-colors shadow-2xs border border-black"
                  >
                    <span>VIEW MULTI-AGENT ENGINE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center w-full">
                <div className="w-full max-w-sm h-64 bg-slate-950 rounded-lg p-4 border border-purple-500/40 relative shadow-2xl flex flex-col justify-center font-spacemono text-xs space-y-2">
                  <div className="text-purple-400 font-bold flex items-center gap-1.5 border-b border-purple-800/50 pb-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>ROUNDTABLE STREAM:</span>
                  </div>
                  <div className="text-emerald-400 text-[11px]">&gt; CFO: &ldquo;Capital efficiency must exceed 4.2x.&rdquo;</div>
                  <div className="text-rose-400 text-[11px]">&gt; CONTRARIAN: &ldquo;Refuting premise on churn risk.&rdquo;</div>
                  <div className="text-cyan-400 text-[11px]">&gt; CTO: &ldquo;Latency capped at &lt;80ms via Fastify.&rdquo;</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 03: AXOWEB SHOWCASE CARD */}
          {activeProjectTab === '03' && (
            <div className="bg-[#0f766e] text-white p-6 sm:p-10 rounded-b-xl rounded-tr-xl border-2 border-black shadow-[6px_6px_0px_#000] grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden w-full">
              <div className="absolute top-3 right-6 w-24 h-5 bg-white/90 border-x border-dashed border-black/30 rotate-6 z-20" />

              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 font-spacemono text-xs text-teal-200 font-bold bg-teal-900/60 px-3 py-1 rounded border border-teal-300/30">
                  <span className="w-2 h-2 rounded-full bg-teal-300" />
                  <span>₹7L+ REVENUE IN 3 MONTHS &bull; BRAVE NATIONAL WINNER</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-pixel tracking-tight text-white uppercase">
                  AXOWEB Technologies
                </h3>
                <p className="text-xs sm:text-sm text-teal-100 font-typewriter leading-relaxed">
                  Co-founded AI &amp; digital solutions startup. Shipped a 3-app car-wash platform (Flutter, React, Firebase) and engineered an AWS microservice architecture (Lambda, RDS PostgreSQL, ElastiCache, SQS, Cognito) for a university grievance platform serving 5 user roles.
                </p>

                {/* Recruiter Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-1 font-spacemono text-center">
                  <div className="bg-teal-950 p-2 rounded border border-teal-500/40">
                    <div className="text-emerald-300 font-bold text-sm">₹7,00,000+</div>
                    <div className="text-[10px] text-teal-200">Revenue in 3 Mo.</div>
                  </div>
                  <div className="bg-teal-950 p-2 rounded border border-teal-500/40">
                    <div className="text-yellow-300 font-bold text-sm">3 Apps</div>
                    <div className="text-[10px] text-teal-200">Flutter/React/Firebase</div>
                  </div>
                  <div className="bg-teal-950 p-2 rounded border border-teal-500/40">
                    <div className="text-cyan-300 font-bold text-sm">5 Roles</div>
                    <div className="text-[10px] text-teal-200">AWS Microservices</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy('axoweb')}
                    className="inline-flex items-center gap-2 text-xs font-spacemono font-bold tracking-wider uppercase bg-white text-teal-950 px-4 py-2.5 rounded-lg hover:bg-teal-50 transition-colors shadow-2xs border border-black"
                  >
                    <span>EXPLORE STARTUP JOURNEY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center w-full">
                <div className="w-full max-w-sm h-64 bg-teal-950 rounded-lg p-3 border border-teal-400/40 relative shadow-2xl">
                  <div className="relative w-full h-full rounded overflow-hidden">
                    <Image
                      src="/images/axoweb_showcase.jpg"
                      alt="AXOWEB Platform"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 04: PROJECT K SHOWCASE CARD */}
          {activeProjectTab === '04' && (
            <div className="bg-[#121316] text-white p-6 sm:p-10 rounded-b-xl rounded-tr-xl border-2 border-black shadow-[6px_6px_0px_#000] grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden w-full">
              {/* White Washi Tape on top corner */}
              <div className="absolute top-3 right-6 w-24 h-5 bg-white/90 border-x border-dashed border-black/30 rotate-12 z-20" />
              
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 font-spacemono text-xs text-yellow-300 font-bold bg-yellow-950/60 px-3 py-1 rounded border border-yellow-500/30">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span>NATIONAL RUNNER-UP &bull; ₹3 LAKH CASH PRIZE</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-pixel tracking-tight text-white uppercase">
                  Project K — Traffic AI
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-typewriter leading-relaxed">
                  Hybrid edge-cloud system running YOLOv8 on NVIDIA Jetson for sub-second accident detection, combined with multi-agent reinforcement learning in SUMO for adaptive traffic-signal optimization. Coordinates with emergency vehicles via MQTT to guarantee instant green-wave clearance.
                </p>

                {/* Recruiter Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-1 font-spacemono text-center">
                  <div className="bg-neutral-900/90 p-2 rounded border border-neutral-700">
                    <div className="text-emerald-400 font-bold text-sm">38%</div>
                    <div className="text-[10px] text-neutral-400">Delay Reduction</div>
                  </div>
                  <div className="bg-neutral-900/90 p-2 rounded border border-neutral-700">
                    <div className="text-yellow-400 font-bold text-sm">&lt;120ms</div>
                    <div className="text-[10px] text-neutral-400">Jetson Edge Latency</div>
                  </div>
                  <div className="bg-neutral-900/90 p-2 rounded border border-neutral-700">
                    <div className="text-blue-400 font-bold text-sm">100%</div>
                    <div className="text-[10px] text-neutral-400">Ambulance Preemption</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectCaseStudy('project-k')}
                    className="inline-flex items-center gap-2 text-xs font-spacemono font-bold tracking-wider uppercase bg-white text-black px-4 py-2.5 rounded-lg hover:bg-neutral-200 transition-colors shadow-2xs border border-black"
                  >
                    <span>EXPLORE ARCHITECTURE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 flex justify-center w-full">
                <div className="w-full max-w-sm h-64 bg-neutral-900 rounded-lg p-3 border border-neutral-700 relative shadow-2xl">
                  <div className="relative w-full h-full rounded overflow-hidden">
                    <Image
                      src="/images/project_k_showcase.jpg"
                      alt="Project K Sim"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

