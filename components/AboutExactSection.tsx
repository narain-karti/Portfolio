'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Code, Terminal, Brain, Server, Award, GraduationCap, Briefcase, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { TechBrandIcon } from './TechBrandIcons';

interface AboutExactSectionProps {
  nameMode?: string;
}

interface TechItem {
  name: string;
  category: 'languages' | 'ai-ml' | 'backend' | 'systems-cloud' | 'tools-data';
  categoryLabel: string;
  provenIn: string;
  level: string;
}

const TECH_CATALOG: TechItem[] = [
  // 1. Languages (From Resume: Python, JavaScript, TypeScript, C++, SQL)
  { name: 'Python', category: 'languages', categoryLabel: 'LANGUAGES', provenIn: 'DataDoc CLI / Project K', level: 'Core Language' },
  { name: 'TypeScript', category: 'languages', categoryLabel: 'LANGUAGES', provenIn: 'Quorum / Web Lab', level: 'Full-Stack' },
  { name: 'JavaScript', category: 'languages', categoryLabel: 'LANGUAGES', provenIn: 'Full-Stack Web Apps', level: 'Production' },
  { name: 'C++', category: 'languages', categoryLabel: 'LANGUAGES', provenIn: 'Edge Performance & Algo', level: 'Systems Core' },
  { name: 'SQL', category: 'languages', categoryLabel: 'LANGUAGES', provenIn: 'IIT Madras / RDS Postgres', level: 'Relational DB' },

  // 2. Frameworks (From Resume: React, Node.js, Express, FastAPI + Flutter)
  { name: 'React', category: 'backend', categoryLabel: 'FRAMEWORKS', provenIn: 'Quorum Flow / Admin Web', level: 'Frontend' },
  { name: 'Node.js', category: 'backend', categoryLabel: 'FRAMEWORKS', provenIn: 'Quorum & Microservices', level: 'Event-Driven' },
  { name: 'Express', category: 'backend', categoryLabel: 'FRAMEWORKS', provenIn: 'ThinkersCave APIs', level: 'REST Backend' },
  { name: 'FastAPI', category: 'backend', categoryLabel: 'FRAMEWORKS', provenIn: 'AI Inference Backends', level: 'High Throughput' },
  { name: 'Flutter', category: 'backend', categoryLabel: 'FRAMEWORKS', provenIn: '3-App Car-Wash Platform', level: 'Cross-Platform Mobile' },

  // 3. AI / ML (From Resume: Machine Learning, Generative AI, LLMs, Agentic AI, RAG, LangChain, PyTorch, TensorFlow, Fine-Tuning, Prompt Engineering, Model Evaluation, Vector DBs, Computer Vision, YOLOv8)
  { name: 'Agentic AI', category: 'ai-ml', categoryLabel: 'AI / ML & AGENTS', provenIn: 'Quorum / Microdolphin', level: 'Autonomous Swarms' },
  { name: 'Generative AI & LLMs', category: 'ai-ml', categoryLabel: 'AI / ML & AGENTS', provenIn: 'Quorum / ThinkersCave', level: 'Prompt & Evaluation' },
  { name: 'RAG & Knowledge Graphs', category: 'ai-ml', categoryLabel: 'AI / ML & AGENTS', provenIn: 'ThinkersCave Support Bot', level: 'Graph Retrieval' },
  { name: 'LangChain', category: 'ai-ml', categoryLabel: 'AI / ML & AGENTS', provenIn: 'Tool-Calling Workflows', level: 'Chains & Routing' },
  { name: 'PyTorch', category: 'ai-ml', categoryLabel: 'AI / ML & AGENTS', provenIn: 'DECEPTRIX & Deep Learning', level: 'Model Training' },
  { name: 'TensorFlow', category: 'ai-ml', categoryLabel: 'AI / ML & AGENTS', provenIn: 'Neural Pipelines', level: 'Inference' },
  { name: 'Computer Vision & YOLOv8', category: 'ai-ml', categoryLabel: 'AI / ML & AGENTS', provenIn: 'Project K Edge Jetson', level: 'Real-Time Edge' },
  { name: 'Vector Databases', category: 'ai-ml', categoryLabel: 'AI / ML & AGENTS', provenIn: 'Semantic Embeddings', level: 'Vector Indexing' },

  // 4. Systems (From Resume: System Design, Distributed Systems, Kubernetes, CI/CD, Docker + AWS, Jetson, MQTT)
  { name: 'System Design', category: 'systems-cloud', categoryLabel: 'SYSTEMS & CLOUD', provenIn: 'Enterprise Backends', level: 'Architecture' },
  { name: 'Distributed Systems', category: 'systems-cloud', categoryLabel: 'SYSTEMS & CLOUD', provenIn: 'Edge-Cloud Coordination', level: 'Distributed Mesh' },
  { name: 'AWS (Lambda, RDS, SQS, ElastiCache, Cognito)', category: 'systems-cloud', categoryLabel: 'SYSTEMS & CLOUD', provenIn: 'AXOWEB 5-Role Platform', level: 'Serverless Cloud' },
  { name: 'Docker', category: 'systems-cloud', categoryLabel: 'SYSTEMS & CLOUD', provenIn: 'Microdolphin Sandboxes', level: 'Containers' },
  { name: 'Kubernetes', category: 'systems-cloud', categoryLabel: 'SYSTEMS & CLOUD', provenIn: 'Cluster Management', level: 'Orchestration' },
  { name: 'CI/CD', category: 'systems-cloud', categoryLabel: 'SYSTEMS & CLOUD', provenIn: 'Automated Deployments', level: 'Pipelines' },
  { name: 'NVIDIA Jetson', category: 'systems-cloud', categoryLabel: 'SYSTEMS & CLOUD', provenIn: 'Project K Edge Vision', level: 'Hardware Edge' },

  // 5. Tools (From Resume: Git, GitHub, Supabase, REST APIs + Polars, Firebase, SQLite)
  { name: 'Git & GitHub', category: 'tools-data', categoryLabel: 'TOOLS & DATA', provenIn: 'github.com/narain-karti', level: 'Version Control' },
  { name: 'Supabase', category: 'tools-data', categoryLabel: 'TOOLS & DATA', provenIn: 'PostgreSQL Backend & Auth', level: 'BaaS' },
  { name: 'REST APIs', category: 'tools-data', categoryLabel: 'TOOLS & DATA', provenIn: 'Microservices & Webhooks', level: 'Integration' },
  { name: 'Polars (PyPI)', category: 'tools-data', categoryLabel: 'TOOLS & DATA', provenIn: 'DataDoc 0.42s 1M-Row EDA', level: 'Rust Data Engine' },
  { name: 'Firebase', category: 'tools-data', categoryLabel: 'TOOLS & DATA', provenIn: 'Tri-App Car-Wash Suite', level: 'Realtime Sync' },
  { name: 'SQLite', category: 'tools-data', categoryLabel: 'TOOLS & DATA', provenIn: 'Quorum Local Monorepo', level: 'Embedded DB' },
];

export function AboutExactSection({ nameMode = 'NARAIN' }: AboutExactSectionProps) {
  const [activeTab, setActiveTab] = useState<'work-bio' | 'experience' | 'toolkit' | 'education'>('work-bio');
  const [techFilter, setTechFilter] = useState<'all' | 'languages' | 'ai-ml' | 'backend' | 'systems-cloud' | 'tools-data'>('all');

  const filteredTech = techFilter === 'all' 
    ? TECH_CATALOG 
    : TECH_CATALOG.filter((t) => t.category === techFilter);

  return (
    <section id="about-view" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 notebook-ruled-bg border-b border-black/10 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* ========================================================= */}
        {/* PART 1: "what's up" INTRO & QUICK SUMMARY                 */}
        {/* ========================================================= */}
        <div className="relative">
          {/* Handwritten Annotation: about me! */}
          <div className="mb-4 flex items-center justify-between">
            <span className="font-handwriting text-3xl sm:text-4xl text-neutral-900 font-bold -rotate-1 inline-block">
              about me! ✎
            </span>
            <div className="font-spacemono text-[11px] text-neutral-600 bg-white/90 px-3 py-1 border border-black/20 rounded shadow-2xs">
              LOCATION: CHENNAI, INDIA // DUAL DEGREE 2029
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Polaroid: Portrait with Beanie (Taped at two corners) */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="w-44 sm:w-48 polaroid-card -rotate-3 relative group">
                {/* White Tape top-left */}
                <div className="absolute -top-3 -left-3 w-14 h-4 bg-white/90 border-x border-dashed border-black/20 shadow-2xs -rotate-45 z-10" />
                {/* White Tape bottom-left */}
                <div className="absolute -bottom-2 -left-2 w-12 h-3.5 bg-white/90 border-x border-dashed border-black/20 shadow-2xs rotate-45 z-10" />
                
                <div className="relative w-full h-48 bg-neutral-200 rounded-xs overflow-hidden mb-2">
                  <Image
                    src="/images/hero_avatar.jpg"
                    alt="Narain Karti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center font-handwriting text-base text-neutral-800 font-bold">
                  narain · builder
                </div>
              </div>
            </div>

            {/* Center: "what's up" Window Card */}
            <div className="md:col-span-6 bg-[#fcfbf7] p-6 sm:p-7 rounded-xl border-2 border-black shadow-[4px_4px_0px_#18181b] space-y-4 relative">
              {/* Tab Header: what's up */}
              <div className="inline-flex items-center gap-1.5 bg-[#fde047] px-3 py-1 border border-black rounded text-xs font-spacemono font-bold text-neutral-950 shadow-2xs">
                <span>[+]</span>
                <span>SYSTEM SUMMARY</span>
              </div>

              {/* Core Philosophy Paragraph with typewriter font */}
              <p className="text-xs sm:text-sm text-neutral-900 leading-relaxed font-typewriter">
                I am an AI systems engineer, open-source author, and startup co-founder studying AI/ML at <strong className="text-black bg-yellow-100 px-1 border-b-2 border-yellow-400">NxtWave IAT</strong> and Data Science at <strong className="text-black bg-blue-100 px-1 border-b-2 border-blue-400">IIT Madras</strong>. I build agentic orchestrations, high-throughput microservices, edge computer vision models, and production platforms that solve real bottlenecks.
              </p>

              {/* Skill Pills matching the design */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 bg-[#fde047] text-neutral-950 font-spacemono text-[11px] font-bold px-2.5 py-1 rounded-full border border-black shadow-2xs">
                  <TechBrandIcon name="agentic" size={14} />
                  <span>Agentic AI &amp; LLMs</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#5eead4] text-teal-950 font-spacemono text-[11px] font-bold px-2.5 py-1 rounded-full border border-black shadow-2xs">
                  <TechBrandIcon name="python" size={14} />
                  <span>YOLOv8 &amp; Jetson</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#f472b6] text-pink-950 font-spacemono text-[11px] font-bold px-2.5 py-1 rounded-full border border-black shadow-2xs">
                  <TechBrandIcon name="polars" size={14} />
                  <span>Polars &amp; PyPI</span>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab('toolkit')}
                  className="px-2.5 py-1 rounded-full bg-[#3b82f6] text-white font-spacemono font-bold text-[11px] hover:bg-blue-700 transition-colors shadow-2xs border border-black flex items-center gap-1"
                  title="View full tech stack matrix"
                >
                  <span>FULL STACK</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Polaroid: Hardware Lab */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <div className="w-44 sm:w-48 polaroid-card rotate-3 relative group">
                {/* White tape on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/90 border-x border-dashed border-black/20 shadow-2xs rotate-6 z-10" />
                
                <div className="relative w-full h-48 bg-neutral-900 rounded-xs overflow-hidden mb-2">
                  <Image
                    src="/images/hardware_lab.jpg"
                    alt="AI Hardware Lab"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center font-handwriting text-base text-neutral-800 font-bold">
                  edge gear &amp; lab ⚡
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PART 2: THE MULTI-TAB DOSSIER (WORK BIO, EXP, STACK, EDU) */}
        {/* ========================================================= */}
        <div className="space-y-6">
          {/* Huge Block Pixel Header: ABOUT */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b-2 border-black/10 pb-3">
            <div className="flex items-center gap-3">
              <h2 className="font-pixel text-4xl sm:text-5xl md:text-6xl text-black tracking-tight">
                ABOUT DOSSIER
              </h2>
              <span className="font-handwriting text-2xl text-rose-600 font-bold rotate-6">
                verified ⚡
              </span>
            </div>
            <div className="font-spacemono text-xs text-neutral-800 bg-[#fef08a] px-3 py-1 border border-black rounded shadow-2xs font-bold">
              OPEN FOR RESEARCH &amp; PRODUCT ROLES
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Vertical Side Tab Pills */}
            <div className="md:col-span-3 flex md:flex-col gap-2.5 flex-wrap">
              {/* Tab 1: WORK BIO (Pink) */}
              <button
                type="button"
                onClick={() => setActiveTab('work-bio')}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-spacemono font-bold tracking-wider uppercase transition-all border-2 ${
                  activeTab === 'work-bio'
                    ? 'bg-[#f472b6] text-neutral-950 border-black shadow-[3px_3px_0px_#000]'
                    : 'bg-white text-neutral-700 border-black/30 hover:bg-neutral-100 hover:border-black'
                }`}
              >
                <span>[01] WORK BIO</span>
                <span>→</span>
              </button>

              {/* Tab 2: EXPERIENCE (Yellow) */}
              <button
                type="button"
                onClick={() => setActiveTab('experience')}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-spacemono font-bold tracking-wider uppercase transition-all border-2 ${
                  activeTab === 'experience'
                    ? 'bg-[#fde047] text-neutral-950 border-black shadow-[3px_3px_0px_#000]'
                    : 'bg-white text-neutral-700 border-black/30 hover:bg-neutral-100 hover:border-black'
                }`}
              >
                <span>[02] EXPERIENCE</span>
                <span>→</span>
              </button>

              {/* Tab 3: TOOLKIT WITH LOGOS (Blue) */}
              <button
                type="button"
                onClick={() => setActiveTab('toolkit')}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-spacemono font-bold tracking-wider uppercase transition-all border-2 ${
                  activeTab === 'toolkit'
                    ? 'bg-[#60a5fa] text-neutral-950 border-black shadow-[3px_3px_0px_#000]'
                    : 'bg-white text-neutral-700 border-black/30 hover:bg-neutral-100 hover:border-black'
                }`}
              >
                <span>[03] TECH STACK</span>
                <span className="text-[10px] bg-black text-white px-1.5 py-0.2 rounded">SVG</span>
              </button>

              {/* Tab 4: EDUCATION & HONORS (Mint) */}
              <button
                type="button"
                onClick={() => setActiveTab('education')}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-spacemono font-bold tracking-wider uppercase transition-all border-2 ${
                  activeTab === 'education'
                    ? 'bg-[#a7f3d0] text-neutral-950 border-black shadow-[3px_3px_0px_#000]'
                    : 'bg-white text-neutral-700 border-black/30 hover:bg-neutral-100 hover:border-black'
                }`}
              >
                <span>[04] ACADEMICS</span>
                <span>→</span>
              </button>

              <div className="hidden md:block pt-4 text-center">
                <div className="p-3 bg-[#faf8f3] border border-black/20 rounded font-spacemono text-[11px] text-neutral-600 space-y-1">
                  <div className="font-bold text-neutral-900">DIRECT DISPATCH:</div>
                  <div className="text-neutral-800 font-bold">+91-9176257316</div>
                  <div className="text-[10px] text-blue-700 truncate">studyusage2008@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Main Lined Paper Story Card */}
            <div className="md:col-span-9 bg-white p-6 sm:p-8 rounded-xl border-2 border-black shadow-[5px_5px_0px_#18181b] relative overflow-hidden">
              {/* Yellow Tape Badge on Top */}
              <div className="flex items-center justify-between flex-wrap gap-2 mb-6 border-b border-black/10 pb-3">
                <span className="inline-flex items-center gap-1.5 bg-[#fef08a] text-neutral-950 font-spacemono text-xs font-bold px-3 py-1 border border-black shadow-2xs rotate-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>
                    {activeTab === 'work-bio'
                      ? 'FOUNDER & ARCHITECT NARRATIVE'
                      : activeTab === 'experience'
                      ? 'TRACK RECORD & INDUSTRY INTERNSHIPS'
                      : activeTab === 'toolkit'
                      ? 'AUTHENTIC TECH STACK MATRIX (VERIFIED LOGOS)'
                      : 'CONCURRENT DUAL DEGREES & HONORS'}
                  </span>
                </span>
                <span className="font-spacemono text-[11px] text-neutral-500">
                  SYSTEM DOC // 2026
                </span>
              </div>

              {/* ========================================================= */}
              {/* TAB 1: WORK BIO                                           */}
              {/* ========================================================= */}
              {activeTab === 'work-bio' && (
                <div className="space-y-4 text-xs sm:text-sm text-neutral-800 leading-relaxed font-typewriter">
                  <p className="font-bold text-neutral-950 text-base font-spacemono">
                    Co-Founder of AXOWEB Technologies, National Hackathon Winner, and dual-degree student at NxtWave IAT &amp; IIT Madras.
                  </p>
                  <p>
                    I co-founded <strong className="text-black underline decoration-yellow-400">AXOWEB Technologies</strong>, where we won the BRAVE Startups National Competition and drove revenue past <strong className="text-black">₹7 Lakhs</strong> within our first 3 months. We architected and delivered end-to-end production software: from building a 3-app Flutter/React/Firebase car-wash platform, to designing AWS serverless microservices (Lambda, RDS PostgreSQL, ElastiCache, SQS, Cognito) powering a university grievance platform across 5 distinct permission levels.
                  </p>
                  <p>
                    My technical focus centers on <strong className="text-black">Agentic AI &amp; Multi-Agent Systems</strong> (building autonomous debate orchestrations like Quorum, and NL prompt-to-app engines at Microdolphin), <strong className="text-black">Edge Computer Vision</strong> (YOLOv8 + NVIDIA Jetson for emergency traffic preemption in Project K), and <strong className="text-black">High-Performance Data Engineering</strong> (author of <code className="bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-300 font-spacemono text-xs font-bold text-blue-800">datadoc-cli</code> on PyPI).
                  </p>
                  <p>
                    Whether it&apos;s shipping production code at 2 AM for a national buildathon or deploying low-latency microservices for enterprise clients, I thrive at the intersection of AI architecture, data performance, and rock-solid systems design.
                  </p>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: EXPERIENCE                                         */}
              {/* ========================================================= */}
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {/* Item 1: AXOWEB */}
                  <div className="p-4 bg-[#faf8f3] rounded-lg border-2 border-black shadow-2xs space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2 border-b border-black/10 pb-2">
                      <div className="font-spacemono font-bold text-sm text-black flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black" />
                        <span>AXOWEB Technologies — Co-Founder</span>
                      </div>
                      <span className="font-spacemono text-[11px] text-neutral-800 bg-[#fde047] px-2 py-0.5 rounded border border-black font-bold">
                        ₹7L+ Revenue &bull; BRAVE National Winner
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-neutral-800 space-y-1.5 font-typewriter">
                      <li>Co-founded digital solutions startup; won BRAVE Startups National Competition and grew revenue past ₹7L in 3 months.</li>
                      <li>Shipped a three-app Flutter/React/Firebase car-wash platform end-to-end, including client pitch deck and commercial proposal.</li>
                      <li>Designed AWS microservice architecture (Lambda, RDS PostgreSQL, ElastiCache, SQS, Cognito) for university grievance platform serving 5 user roles.</li>
                    </ul>
                  </div>

                  {/* Item 2: ThinkersCave */}
                  <div className="p-4 bg-white rounded-lg border border-black/30 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2 border-b border-black/10 pb-2">
                      <div className="font-spacemono font-bold text-sm text-black flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-black" />
                        <span>ThinkersCave — Software Developer (Intern)</span>
                      </div>
                      <span className="font-spacemono text-[11px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-black/10">
                        RAG &amp; Knowledge Graphs
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-neutral-800 space-y-1.5 font-typewriter">
                      <li>Restructured client data into a knowledge graph and built a RAG + tool-calling customer support agent across a website chatbot and WhatsApp bot.</li>
                      <li>Contributed to an AI-integrated Learning Management System (LMS) and hotel management system.</li>
                    </ul>
                  </div>

                  {/* Item 3: Microdolphin */}
                  <div className="p-4 bg-white rounded-lg border border-black/30 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2 border-b border-black/10 pb-2">
                      <div className="font-spacemono font-bold text-sm text-black flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500 border border-black" />
                        <span>Microdolphin — Agentic AI Engineer (Intern)</span>
                      </div>
                      <span className="font-spacemono text-[11px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-black/10">
                        Prompt-to-App AI Engine
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-neutral-800 space-y-1.5 font-typewriter">
                      <li>Designed backend architecture and multi-agent orchestration for a production-grade platform generating full-stack applications from natural-language prompts.</li>
                    </ul>
                  </div>

                  {/* Item 4: Tribe Fortis & Allytriz */}
                  <div className="p-4 bg-white rounded-lg border border-black/30 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2 border-b border-black/10 pb-2">
                      <div className="font-spacemono font-bold text-sm text-black flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-black" />
                        <span>Tribe Fortis &amp; Allytriz Technologies — Mobile/Web Developer (Intern)</span>
                      </div>
                      <span className="font-spacemono text-[11px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-black/10">
                        Mobile &amp; Full-Stack
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-neutral-800 space-y-1.5 font-typewriter">
                      <li>Built AI-driven fitness app features (real-time tracking, trainer-synced workout/diet routines) at Tribe Fortis.</li>
                      <li>Delivered full-stack web applications from design through cloud deployment at Allytriz.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 3: TOOLKIT WITH REAL SVG BRAND LOGOS MATRIX          */}
              {/* ========================================================= */}
              {activeTab === 'toolkit' && (
                <div className="space-y-5">
                  {/* Category Filter Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-black/10">
                    <button
                      type="button"
                      onClick={() => setTechFilter('all')}
                      className={`px-3 py-1 rounded text-xs font-spacemono font-bold border transition-all ${
                        techFilter === 'all'
                          ? 'bg-black text-white border-black shadow-2xs'
                          : 'bg-neutral-100 text-neutral-700 border-neutral-300 hover:bg-neutral-200'
                      }`}
                    >
                      ALL ({TECH_CATALOG.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setTechFilter('ai-ml')}
                      className={`px-3 py-1 rounded text-xs font-spacemono font-bold border transition-all ${
                        techFilter === 'ai-ml'
                          ? 'bg-purple-600 text-white border-purple-800 shadow-2xs'
                          : 'bg-purple-50 text-purple-900 border-purple-200 hover:bg-purple-100'
                      }`}
                    >
                      AI / ML &amp; AGENTS
                    </button>
                    <button
                      type="button"
                      onClick={() => setTechFilter('languages')}
                      className={`px-3 py-1 rounded text-xs font-spacemono font-bold border transition-all ${
                        techFilter === 'languages'
                          ? 'bg-blue-600 text-white border-blue-800 shadow-2xs'
                          : 'bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100'
                      }`}
                    >
                      LANGUAGES
                    </button>
                    <button
                      type="button"
                      onClick={() => setTechFilter('backend')}
                      className={`px-3 py-1 rounded text-xs font-spacemono font-bold border transition-all ${
                        techFilter === 'backend'
                          ? 'bg-emerald-600 text-white border-emerald-800 shadow-2xs'
                          : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
                      }`}
                    >
                      BACKEND &amp; WEB
                    </button>
                    <button
                      type="button"
                      onClick={() => setTechFilter('systems-cloud')}
                      className={`px-3 py-1 rounded text-xs font-spacemono font-bold border transition-all ${
                        techFilter === 'systems-cloud'
                          ? 'bg-amber-600 text-white border-amber-800 shadow-2xs'
                          : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                      }`}
                    >
                      SYSTEMS &amp; CLOUD
                    </button>
                    <button
                      type="button"
                      onClick={() => setTechFilter('tools-data')}
                      className={`px-3 py-1 rounded text-xs font-spacemono font-bold border transition-all ${
                        techFilter === 'tools-data'
                          ? 'bg-rose-600 text-white border-rose-800 shadow-2xs'
                          : 'bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100'
                      }`}
                    >
                      TOOLS &amp; DATA
                    </button>
                  </div>

                  {/* Interactive Tech Microchips Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {filteredTech.map((item, idx) => (
                      <div
                        key={idx}
                        className="retro-chip p-3 rounded-lg relative flex flex-col justify-between group hover:border-blue-600"
                      >
                        {/* Top: Icon + Name */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded bg-[#faf8f3] border border-black/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <TechBrandIcon name={item.name} size={20} />
                          </div>
                          <div className="min-w-0">
                            <div className="font-spacemono font-bold text-xs text-neutral-950 truncate">
                              {item.name}
                            </div>
                            <div className="text-[10px] font-spacemono text-neutral-500 uppercase truncate">
                              {item.categoryLabel}
                            </div>
                          </div>
                        </div>

                        {/* Bottom: Verified Provenance Pill */}
                        <div className="mt-2.5 pt-2 border-t border-dashed border-black/10 flex items-center justify-between text-[10px] font-spacemono">
                          <span className="text-neutral-600 truncate font-semibold">
                            {item.provenIn}
                          </span>
                          <span className="text-emerald-700 font-bold bg-emerald-50 px-1 rounded">
                            ✓
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-[#faf8f5] border border-black/20 rounded text-center font-typewriter text-xs text-neutral-700">
                    All technologies listed above have been verified in shipped open-source repositories, client production platforms, or hackathon-winning builds.
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 4: EDUCATION & HONORS                                 */}
              {/* ========================================================= */}
              {activeTab === 'education' && (
                <div className="space-y-6">
                  {/* Concurrent Dual Degrees */}
                  <div className="space-y-3">
                    <div className="text-xs font-spacemono font-bold text-neutral-900 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-700" />
                      <span>CONCURRENT DUAL DEGREES (2025 – 2029)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-[#faf8f3] rounded-lg border-2 border-black shadow-2xs space-y-1 relative">
                        <div className="absolute top-2 right-2 text-[10px] font-spacemono bg-yellow-200 px-1.5 py-0.5 rounded border border-black font-bold">
                          DEGREE 1
                        </div>
                        <div className="font-spacemono font-bold text-xs text-neutral-950">
                          NxtWave Institute of Advanced Technologies
                        </div>
                        <div className="text-xs text-neutral-800 font-typewriter font-semibold">
                          B.Tech, Computer Science Engineering (AI/ML)
                        </div>
                        <div className="text-[11px] font-spacemono text-neutral-600 pt-1">
                          Chennai, India &bull; Class of 2029
                        </div>
                      </div>

                      <div className="p-4 bg-[#faf8f3] rounded-lg border-2 border-black shadow-2xs space-y-1 relative">
                        <div className="absolute top-2 right-2 text-[10px] font-spacemono bg-blue-200 px-1.5 py-0.5 rounded border border-black font-bold">
                          DEGREE 2
                        </div>
                        <div className="font-spacemono font-bold text-xs text-neutral-950">
                          Indian Institute of Technology, Madras (IITM)
                        </div>
                        <div className="text-xs text-neutral-800 font-typewriter font-semibold">
                          B.S., Data Science and Applications
                        </div>
                        <div className="text-[11px] font-spacemono text-neutral-600 pt-1">
                          Concurrent Program &bull; Class of 2029
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Honors & Awards */}
                  <div className="space-y-3 pt-2 border-t border-black/10">
                    <div className="text-xs font-spacemono font-bold text-neutral-900 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-700" />
                      <span>HONORS, PRIZES &amp; NATIONAL RECOGNITIONS</span>
                    </div>

                    <div className="space-y-2.5 text-xs font-typewriter text-neutral-900">
                      <div className="flex items-start gap-2.5 bg-yellow-50 p-3 rounded-lg border border-yellow-300">
                        <span className="font-bold text-amber-800 font-spacemono text-sm">🏆</span>
                        <div>
                          <strong className="text-black font-spacemono">National Runner-Up, OpenAI Academy × NxtWave GenAI Buildathon (₹3 Lakh Prize)</strong>
                          <div className="text-neutral-700 mt-0.5">Awarded for Project K: AI-Powered Traffic Intelligence &amp; Emergency Preemption Platform.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 bg-purple-50 p-3 rounded-lg border border-purple-300">
                        <span className="font-bold text-purple-800 font-spacemono text-sm">🎖️</span>
                        <div>
                          <strong className="text-black font-spacemono">Top Rank, National Hackathon TakeOver&apos;26</strong>
                          <div className="text-neutral-700 mt-0.5">Awarded for Quorum: Multi-Agent Boardroom Decision System.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 bg-emerald-50 p-3 rounded-lg border border-emerald-300">
                        <span className="font-bold text-emerald-800 font-spacemono text-sm">🚀</span>
                        <div>
                          <strong className="text-black font-spacemono">BRAVE Startups National Competition Winner</strong>
                          <div className="text-neutral-700 mt-0.5">Won People&apos;s Choice &amp; Best Innovation Awards with AXOWEB Technologies.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 bg-blue-50 p-3 rounded-lg border border-blue-300">
                        <span className="font-bold text-blue-800 font-spacemono text-sm">🪐</span>
                        <div>
                          <strong className="text-black font-spacemono">Zonal Award, NASA Space Settlement Design Contest</strong>
                          <div className="text-neutral-700 mt-0.5">Recognized for autonomous space settlement life-support systems &amp; orbital design.</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 bg-neutral-50 p-3 rounded-lg border border-neutral-300">
                        <span className="font-bold text-neutral-800 font-spacemono text-sm">⚡</span>
                        <div>
                          <strong className="text-black font-spacemono">5+ Hackathon Victories</strong>
                          <div className="text-neutral-700 mt-0.5">Consistently leading engineering teams to top podium finishes in national-level hackathons.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


