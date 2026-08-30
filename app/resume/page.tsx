'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Printer,
  Download,
  Copy,
  Check,
  Mail,
  Phone,
  Linkedin,
  Github,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Sparkles,
  ExternalLink,
  FileText,
  Terminal,
  Cpu,
  Layers,
  Layout
} from 'lucide-react';
import { TechBrandIcon } from '@/components/TechBrandIcons';
import { VisualResumePoster } from '@/components/VisualResumePoster';

export default function ResumePage() {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'poster' | 'tactile' | 'clean'>('poster');

  const handleCopyMarkdown = () => {
    const markdown = `# NARAIN KARTI
Chennai, India | studyusage2008@gmail.com | +91-9176257316
LinkedIn: linkedin.com/in/narainkarti | GitHub: github.com/narain-karti

## EDUCATION
- **NxtWave Institute of Advanced Technologies**, Chennai, India
  B.Tech, Computer Science Engineering (AI/ML) | Expected 2029
- **Indian Institute of Technology, Madras (IITM)**, India
  B.S., Data Science and Applications (Concurrent Degree) | Expected 2029

## EXPERIENCE
- **AXOWEB Technologies — Co-Founder** (Chennai, India)
  - Co-founded AI/digital solutions startup; won the BRAVE Startups National Competition and grew revenue past ₹7L within 3 months.
  - Shipped a three-app Flutter/React/Firebase car-wash platform end-to-end, including client pitch deck and commercial proposal.
  - Designed AWS-based microservice architecture (Lambda, RDS PostgreSQL, ElastiCache, SQS, Cognito) for a university grievance-management platform serving five distinct user roles.
- **ThinkersCave — Software Developer (Intern)**
  - Restructured client data into a knowledge graph and built a RAG + tool-calling customer support agent across a website chatbot and WhatsApp bot.
  - Contributed to an AI-integrated Learning Management System (LMS) and hotel management system.
- **Microdolphin — Agentic AI Engineer (Intern)**
  - Designed backend architecture and multi-agent orchestration for a production-grade platform generating full-stack applications from natural-language prompts.
- **Tribe Fortis & Allytriz Technologies — Mobile/Web Developer (Intern)**
  - Built AI-driven fitness app features (real-time tracking, trainer-synced workout/diet routines) at Tribe Fortis.
  - Delivered full-stack web applications from design through cloud deployment at Allytriz.

## KEY PROJECTS
- **Project K — AI-Powered Traffic Intelligence Platform**
  - Edge-cloud hybrid system with YOLOv8 on NVIDIA Jetson for accident detection, MARL for signal optimization, and MQTT ambulance preemption.
  - National Runner-Up, OpenAI Academy × NxtWave GenAI Buildathon (₹3 Lakh Prize).
- **Quorum — Multi-Agent Executive Debate System**
  - Multi-agent debate orchestration simulating boardroom dynamics (CMO, CFO, CTO, COO, Contrarian). Monorepo with Fastify, ReactFlow, and SQLite.
  - Top Rank at National Hackathon TakeOver'26.
- **DataDoc CLI & Library (PyPI Package)**
  - Polars-backed dataset engineering tool. Diagnoses missing values, outliers, and schema bugs; 1M rows analyzed in 0.42s with AI agent assistance.

## TECHNICAL SKILLS
- Languages: Python, TypeScript, JavaScript, C++, SQL, PostgreSQL, Bash
- AI / ML & Agents: PyTorch, TensorFlow, YOLOv8, OpenCV, LangChain, Polars, Hugging Face, Agentic Loops, RAG
- Frameworks: React, Next.js, Node.js, Express, FastAPI, Fastify, Flutter, Tailwind CSS
- Systems & Cloud: AWS (Lambda, RDS, SQS, ElastiCache, Cognito), Docker, Kubernetes, Linux, MQTT, NVIDIA Jetson
- Tools & BaaS: Git, GitHub, Supabase, Firebase, SQLite, Postman

## HONORS & AWARDS
- National Runner-Up (₹3L Prize) — OpenAI Academy × NxtWave Buildathon
- Top Rank — TakeOver'26 National Hackathon
- Winner — BRAVE Startups National Competition
- Zonal Award — NASA Space Settlement Design Contest
- 5+ National Hackathon Victories
`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#111827] notebook-ruled-bg selection:bg-yellow-200 selection:text-black py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* ========================================================= */}
        {/* TOP TOOLBAR & CONTROLS (Screen Only)                      */}
        {/* ========================================================= */}
        <header className="print:hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-black/30 font-spacemono text-xs font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <div className="flex items-center gap-2 flex-wrap">
            {/* View Mode Toggle */}
            <div className="inline-flex items-center p-1 bg-neutral-100 rounded-lg border border-black/20 text-xs font-spacemono">
              <button
                type="button"
                onClick={() => setViewMode('poster')}
                className={`px-3 py-1 rounded font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'poster'
                    ? 'bg-[#1d4ed8] text-white border border-black shadow-2xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                <span>VISUAL POSTER</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('tactile')}
                className={`px-2.5 py-1 rounded font-bold transition-all ${
                  viewMode === 'tactile'
                    ? 'bg-[#fde047] text-neutral-950 border border-black shadow-2xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                TACTILE DOSSIER
              </button>
              <button
                type="button"
                onClick={() => setViewMode('clean')}
                className={`px-2.5 py-1 rounded font-bold transition-all ${
                  viewMode === 'clean'
                    ? 'bg-black text-white border border-black shadow-2xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                ATS CLEAN
              </button>
            </div>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#60a5fa] hover:bg-blue-500 text-neutral-950 border border-black font-spacemono text-xs font-bold shadow-2xs transition-colors"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            {/* Copy Markdown */}
            <button
              type="button"
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black hover:bg-neutral-800 text-white border border-black font-spacemono text-xs font-bold shadow-2xs transition-colors"
              title="Copy clean text formatted for ATS submission"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED MD' : 'COPY MARKDOWN'}</span>
            </button>
          </div>
        </header>

        {/* Conditional Rendering: Poster Mode VS Document Mode */}
        {viewMode === 'poster' ? (
          <VisualResumePoster onPrint={handlePrint} />
        ) : (
          <main
            className={`bg-white rounded-xl border-2 border-black p-6 sm:p-12 transition-all relative overflow-hidden ${
              viewMode === 'tactile'
                ? 'shadow-[8px_8px_0px_#18181b]'
                : 'shadow-md'
            }`}
          >
          {/* Tactile Stamp & Washi Tape in Dossier Mode */}
          {viewMode === 'tactile' && (
            <>
              {/* Top Washi Tape */}
              <div className="print:hidden absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-100/90 border-x border-dashed border-black/30 rotate-1 shadow-2xs z-20" />
              {/* Verified Stamp Badge */}
              <div className="print:hidden absolute top-6 right-6 sm:top-8 sm:right-8 rotate-6 pointer-events-none">
                <div className="border-2 border-rose-600 rounded px-2.5 py-1 text-center text-rose-600 font-spacemono text-[11px] font-extrabold uppercase tracking-widest bg-rose-50/80 shadow-2xs">
                  VERIFIED ⚡ 2026
                </div>
              </div>
            </>
          )}

          {/* 1. HEADER SECTION */}
          <section className="border-b-2 border-black pb-6 space-y-3">
            <div className="space-y-1">
              <h1 className="font-pixel text-4xl sm:text-5xl text-black tracking-tight uppercase">
                NARAIN KARTI
              </h1>
              <p className="font-spacemono text-xs sm:text-sm font-bold text-neutral-800 tracking-wide">
                AI Systems Engineer &bull; Full-Stack Architect &bull; Open-Source Author
              </p>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-spacemono text-neutral-700 pt-1">
              <span className="flex items-center gap-1">
                <span className="font-bold text-black">LOCATION:</span> Chennai, India
              </span>
              <a
                href="mailto:studyusage2008@gmail.com"
                className="flex items-center gap-1 text-blue-700 hover:underline font-semibold"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>studyusage2008@gmail.com</span>
              </a>
              <a
                href="tel:+919176257316"
                className="flex items-center gap-1 text-neutral-900 hover:underline font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91-9176257316</span>
              </a>
              <a
                href="https://linkedin.com/in/narainkarti"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-800 hover:underline font-semibold"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/narainkarti</span>
              </a>
              <a
                href="https://github.com/narain-karti"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-neutral-900 hover:underline font-semibold"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/narain-karti</span>
              </a>
            </div>
          </section>

          {/* 2. CONCURRENT EDUCATION */}
          <section className="py-6 border-b border-black/20 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-spacemono text-sm sm:text-base font-bold text-black uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>EDUCATION (CONCURRENT DUAL DEGREES)</span>
              </h2>
              <span className="font-spacemono text-[11px] text-neutral-500 font-semibold">2025 — 2029</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#faf8f3] rounded-lg border border-black/30 space-y-1">
                <div className="font-spacemono font-bold text-xs text-neutral-950">
                  NxtWave Institute of Advanced Technologies
                </div>
                <div className="font-typewriter text-xs text-neutral-800 font-bold">
                  B.Tech, Computer Science Engineering (AI/ML)
                </div>
                <div className="font-spacemono text-[11px] text-neutral-600">
                  Chennai, India &bull; Expected 2029
                </div>
              </div>

              <div className="p-4 bg-[#faf8f3] rounded-lg border border-black/30 space-y-1">
                <div className="font-spacemono font-bold text-xs text-neutral-950">
                  Indian Institute of Technology, Madras (IITM)
                </div>
                <div className="font-typewriter text-xs text-neutral-800 font-bold">
                  B.S., Data Science and Applications
                </div>
                <div className="font-spacemono text-[11px] text-neutral-600">
                  Concurrent Degree &bull; Expected 2029
                </div>
              </div>
            </div>
          </section>

          {/* 3. EXPERIENCE SECTION */}
          <section className="py-6 border-b border-black/20 space-y-5">
            <h2 className="font-spacemono text-sm sm:text-base font-bold text-black uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>EXPERIENCE &amp; STARTUP LEADERSHIP</span>
            </h2>

            <div className="space-y-5 text-xs">
              {/* Role 1: AXOWEB */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="font-spacemono font-bold text-xs sm:text-sm text-black flex items-center gap-2">
                    <span>AXOWEB Technologies — Co-Founder</span>
                  </div>
                  <span className="font-spacemono text-[11px] text-neutral-700 bg-[#fde047] px-2 py-0.5 rounded border border-black font-bold">
                    Chennai, India &bull; ₹7L+ Revenue in 3 Mo.
                  </span>
                </div>
                <ul className="list-disc list-inside text-neutral-800 space-y-1 font-typewriter leading-relaxed">
                  <li>
                    Co-founded an AI/digital solutions startup; won the <strong>BRAVE Startups National Competition</strong> and scaled revenue past <strong>₹7 Lakhs</strong> within 3 months.
                  </li>
                  <li>
                    Shipped a 3-app <strong>Flutter, React, Firebase</strong> platform end-to-end, leading client pitch decks and commercial negotiations.
                  </li>
                  <li>
                    Architected AWS serverless microservices (<strong>Lambda, RDS PostgreSQL, ElastiCache, SQS, Cognito</strong>) for a university grievance management platform supporting 5 distinct user access roles.
                  </li>
                </ul>
              </div>

              {/* Role 2: ThinkersCave */}
              <div className="space-y-1.5 pt-3 border-t border-dashed border-black/15">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="font-spacemono font-bold text-xs sm:text-sm text-black">
                    ThinkersCave — Software Developer (Intern)
                  </div>
                  <span className="font-spacemono text-[11px] text-neutral-600">
                    RAG &amp; Knowledge Graphs
                  </span>
                </div>
                <ul className="list-disc list-inside text-neutral-800 space-y-1 font-typewriter leading-relaxed">
                  <li>
                    Restructured client data into a <strong>knowledge graph</strong> and built a RAG + tool-calling customer support agent deployed across website chat and WhatsApp bots.
                  </li>
                  <li>
                    Contributed to an AI-integrated Learning Management System (LMS) and hotel management backend.
                  </li>
                </ul>
              </div>

              {/* Role 3: Microdolphin */}
              <div className="space-y-1.5 pt-3 border-t border-dashed border-black/15">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="font-spacemono font-bold text-xs sm:text-sm text-black">
                    Microdolphin — Agentic AI Engineer (Intern)
                  </div>
                  <span className="font-spacemono text-[11px] text-neutral-600">
                    Agentic AI Orchestration
                  </span>
                </div>
                <ul className="list-disc list-inside text-neutral-800 space-y-1 font-typewriter leading-relaxed">
                  <li>
                    Designed backend microservices and multi-agent orchestration for a production-grade platform generating full-stack software applications directly from natural language prompts.
                  </li>
                </ul>
              </div>

              {/* Role 4: Tribe Fortis & Allytriz */}
              <div className="space-y-1.5 pt-3 border-t border-dashed border-black/15">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="font-spacemono font-bold text-xs sm:text-sm text-black">
                    Tribe Fortis &amp; Allytriz Technologies — Mobile / Web Developer (Intern)
                  </div>
                  <span className="font-spacemono text-[11px] text-neutral-600">
                    Mobile &amp; Cloud Deployment
                  </span>
                </div>
                <ul className="list-disc list-inside text-neutral-800 space-y-1 font-typewriter leading-relaxed">
                  <li>
                    Built AI-driven fitness mobile features (real-time workout tracking, trainer-synced diet engine) at Tribe Fortis.
                  </li>
                  <li>
                    Delivered full-stack web applications from prototype design to cloud production deployment at Allytriz.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. KEY PROJECTS */}
          <section className="py-6 border-b border-black/20 space-y-5">
            <h2 className="font-spacemono text-sm sm:text-base font-bold text-black uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-600" />
              <span>FLAGSHIP PROJECTS</span>
            </h2>

            <div className="space-y-4 text-xs">
              {/* Project 1: Project K */}
              <div className="p-3.5 bg-[#faf8f3] rounded-lg border border-black/20 space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="font-spacemono font-bold text-xs text-black">
                    Project K — AI Traffic Intelligence &amp; Emergency Preemption Platform
                  </div>
                  <span className="font-spacemono text-[10px] bg-yellow-300 text-yellow-950 px-2 py-0.5 rounded border border-black font-bold">
                    🏆 ₹3L PRIZE &bull; NATIONAL RUNNER-UP
                  </span>
                </div>
                <p className="font-typewriter text-neutral-800 leading-relaxed">
                  Hybrid edge-cloud system running YOLOv8 on NVIDIA Jetson for real-time accident detection and multi-agent reinforcement learning for adaptive traffic-signal optimization. Coordinates with ambulances via MQTT to generate automated green-wave priority corridors.
                </p>
                <div className="font-spacemono text-[11px] text-neutral-600 pt-1">
                  <strong>Stack:</strong> YOLOv8 &bull; NVIDIA Jetson &bull; SUMO Simulation &bull; MQTT &bull; AWS Lambda &bull; PyTorch
                </div>
              </div>

              {/* Project 2: Quorum */}
              <div className="p-3.5 bg-[#faf8f3] rounded-lg border border-black/20 space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="font-spacemono font-bold text-xs text-black">
                    Quorum — Multi-Agent Executive Debate System
                  </div>
                  <span className="font-spacemono text-[10px] bg-purple-200 text-purple-950 px-2 py-0.5 rounded border border-black font-bold">
                    🎖️ TOP RANK &bull; TAKEOVER&apos;26 HACKATHON
                  </span>
                </div>
                <p className="font-typewriter text-neutral-800 leading-relaxed">
                  Autonomous multi-agent debate platform simulating boardroom dynamics (CMO, CFO, CTO, COO, Contrarian) to stress-test corporate decisions. Built in a 4-package monorepo with ReactFlow node graphs, Fastify/Node backend orchestration, and SQLite chunked persistence.
                </p>
                <div className="font-spacemono text-[11px] text-neutral-600 pt-1">
                  <strong>Stack:</strong> Agentic AI &bull; TypeScript &bull; React &bull; Fastify &bull; ReactFlow &bull; SQLite
                </div>
              </div>

              {/* Project 3: DataDoc CLI */}
              <div className="p-3.5 bg-[#faf8f3] rounded-lg border border-black/20 space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="font-spacemono font-bold text-xs text-black">
                    DataDoc CLI &amp; Library (Published on PyPI)
                  </div>
                  <span className="font-spacemono text-[10px] bg-emerald-200 text-emerald-950 px-2 py-0.5 rounded border border-black font-bold">
                    📦 OPEN SOURCE
                  </span>
                </div>
                <p className="font-typewriter text-neutral-800 leading-relaxed">
                  High-performance Polars-backed dataset engineering CLI. Diagnoses schema corruptions, missing data, and distribution anomalies across 1,000,000+ rows in 0.42 seconds with an interactive AI repair agent.
                </p>
                <div className="font-spacemono text-[11px] text-neutral-600 pt-1">
                  <strong>Stack:</strong> Python &bull; Polars &bull; Agentic AI &bull; Click &bull; PyPI Packaging
                </div>
              </div>
            </div>
          </section>

          {/* 5. TECHNICAL SKILLS MATRIX (WITH BRAND LOGOS) */}
          <section className="py-6 border-b border-black/20 space-y-4">
            <h2 className="font-spacemono text-sm sm:text-base font-bold text-black uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>TECHNICAL SKILLS &bull; PRODUCTION VERIFIED</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-black/20 space-y-1">
                <div className="font-spacemono font-bold text-neutral-900 flex items-center gap-1.5">
                  <TechBrandIcon name="python" size={16} />
                  <span>LANGUAGES</span>
                </div>
                <div className="font-typewriter text-neutral-700">
                  Python, TypeScript, JavaScript, C++, SQL, PostgreSQL, Bash
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-black/20 space-y-1">
                <div className="font-spacemono font-bold text-neutral-900 flex items-center gap-1.5">
                  <TechBrandIcon name="agentic" size={16} />
                  <span>AI / ML &amp; AGENTIC SYSTEMS</span>
                </div>
                <div className="font-typewriter text-neutral-700">
                  Agentic AI, PyTorch, TensorFlow, YOLOv8, OpenCV, LangChain, Polars, Hugging Face, RAG
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-black/20 space-y-1">
                <div className="font-spacemono font-bold text-neutral-900 flex items-center gap-1.5">
                  <TechBrandIcon name="react" size={16} />
                  <span>FRAMEWORKS &amp; BACKEND</span>
                </div>
                <div className="font-typewriter text-neutral-700">
                  React, Next.js, Node.js, FastAPI, Fastify, Express, Flutter, Tailwind CSS
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-black/20 space-y-1">
                <div className="font-spacemono font-bold text-neutral-900 flex items-center gap-1.5">
                  <TechBrandIcon name="aws" size={16} />
                  <span>SYSTEMS &amp; CLOUD INFRA</span>
                </div>
                <div className="font-typewriter text-neutral-700">
                  AWS (Lambda, RDS, SQS, ElastiCache, Cognito), Docker, Kubernetes, Linux, MQTT, NVIDIA Jetson
                </div>
              </div>
            </div>
          </section>

          {/* 6. HONORS & AWARDS */}
          <section className="pt-6 space-y-3">
            <h2 className="font-spacemono text-sm sm:text-base font-bold text-black uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span>HONORS, AWARDS &amp; RECOGNITIONS</span>
            </h2>

            <div className="space-y-2 text-xs font-typewriter text-neutral-900">
              <div className="flex items-start gap-2">
                <span className="font-spacemono font-bold text-amber-700">🏆</span>
                <div>
                  <strong>National Runner-Up (₹3 Lakh Prize)</strong> — OpenAI Academy × NxtWave GenAI Buildathon (Project K).
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-spacemono font-bold text-purple-700">🎖️</span>
                <div>
                  <strong>Top Rank</strong> — TakeOver&apos;26 National Hackathon (Quorum Multi-Agent Platform).
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-spacemono font-bold text-emerald-700">🚀</span>
                <div>
                  <strong>Winner</strong> — BRAVE Startups National Competition (People&apos;s Choice &amp; Best Innovation Awards with AXOWEB).
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-spacemono font-bold text-blue-700">🪐</span>
                <div>
                  <strong>Zonal Award</strong> — NASA Space Settlement Design Contest (Life-support systems architecture).
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-spacemono font-bold text-neutral-700">⚡</span>
                <div>
                  <strong>5+ Hackathon Victories</strong> — Consistent top podium finishes in national-level technical competitions.
                </div>
              </div>
            </div>
          </section>

        </main>
        )}

        {/* Footer Note */}
        <footer className="print:hidden text-center font-spacemono text-xs text-neutral-600 py-4">
          Narain Karti &bull; Verified Resume &bull; Chennai, India &bull; studyusage2008@gmail.com
        </footer>
      </div>
    </div>
  );
}
