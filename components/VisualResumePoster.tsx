'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, ExternalLink, QrCode, Sparkles } from 'lucide-react';
import { TechBrandIcon } from './TechBrandIcons';

interface VisualResumePosterProps {
  onPrint?: () => void;
}

export function VisualResumePoster({ onPrint }: VisualResumePosterProps) {
  return (
    <div className="w-full bg-[#fdfbf7] text-[#1e293b] font-sans border-2 border-neutral-900 rounded-none shadow-[8px_8px_0px_#1e293b] overflow-hidden select-text relative">
      
      {/* ========================================================================= */}
      {/* 1. TOP HERO BANNER (Cobalt Royal Blue with Cutout Photo & Graphic Badges) */}
      {/* ========================================================================= */}
      <div className="relative w-full bg-[#f6f2e8] border-b-2 border-neutral-900 overflow-hidden pt-6 sm:pt-8">
        
        {/* Background Typography Watermark: "Hello Hello Hello" */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-neutral-300/40 font-black text-6xl sm:text-7xl md:text-8xl tracking-tight select-none pointer-events-none uppercase font-sans whitespace-nowrap z-0 leading-none">
          <div>HELLO</div>
          <div>HELLO</div>
          <div>HELLO</div>
        </div>

        {/* Torn Paper Tape Strips at Corners */}
        <div className="absolute -top-3 left-6 sm:left-12 w-28 sm:w-36 h-8 bg-[#d7ba8d] border-x-2 border-b-2 border-dashed border-amber-900/40 shadow-xs -rotate-6 z-20" />
        <div className="absolute -top-3 right-6 sm:right-12 w-28 sm:w-36 h-8 bg-[#d7ba8d] border-x-2 border-b-2 border-dashed border-amber-900/40 shadow-xs rotate-6 z-20" />

        {/* Top Badges (Left oval pill, Right sketched circle badge) */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 flex items-start justify-between">
          {/* Left Top Oval Badge */}
          <div className="border-2 border-blue-900/40 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 bg-white/80 backdrop-blur-xs shadow-xs -rotate-3">
            <span className="font-handwriting text-lg sm:text-2xl text-blue-900 font-bold tracking-wide">
              AI / ML Systems
            </span>
          </div>

          {/* Right Top Sketched Circular Badge */}
          <div className="border-2 border-blue-900/50 rounded-full px-5 sm:px-7 py-2 sm:py-2.5 bg-white/80 backdrop-blur-xs shadow-xs rotate-2">
            <span className="font-handwriting text-xl sm:text-2xl text-blue-900 font-bold tracking-tight">
              Systems Builder
            </span>
          </div>
        </div>

        {/* Center Portrait Cutout (Taped Corners) */}
        <div className="relative z-20 flex justify-center -mb-8 sm:-mb-12 mt-2">
          <div className="relative w-40 sm:w-48 md:w-56 h-48 sm:h-56 md:h-64 rounded-t-full rounded-b-2xl overflow-hidden border-4 border-white shadow-2xl bg-neutral-900">
            <Image
              src="https://picsum.photos/seed/narain-portrait-chennai/600/700"
              alt="Narain Karti"
              fill
              className="object-cover object-top"
              referrerPolicy="no-referrer"
              priority
            />
            {/* Torn washi tape piece on portrait bottom */}
            <div className="absolute -bottom-2 -left-2 w-16 h-5 bg-[#d7ba8d] border border-dashed border-amber-950/30 rotate-12 z-30" />
            <div className="absolute -top-2 -right-2 w-14 h-5 bg-[#d7ba8d] border border-dashed border-amber-950/30 -rotate-12 z-30" />
          </div>
        </div>

        {/* Main Solid Royal Blue Header Card */}
        <div className="relative z-10 bg-[#1d4ed8] text-white pt-12 sm:pt-16 pb-8 sm:pb-10 px-4 sm:px-8 md:px-12 border-t-2 border-neutral-950 shadow-inner">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Column: Big Name & Bio */}
            <div className="md:col-span-8 space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none font-sans">
                Narain Karti
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-blue-100/95 leading-relaxed font-sans max-w-2xl">
                Passionate AI/ML Systems Engineer &amp; Startup Co-Founder with a track record of building production multi-agent systems, sub-second data engineering tools, and scalable AWS cloud architectures. Co-founder @ AXOWEB (₹7L+ revenue) and Open-Source author of DataDoc CLI (PyPI). I thrive on turning complex system bottlenecks into fast, reliable software.
              </p>
            </div>

            {/* Right Column: Contact Details + Handwritten Arrow + QR */}
            <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right space-y-2">
              <div className="flex items-center gap-2 font-handwriting text-xl sm:text-2xl text-blue-200">
                <span>Dont hesitate to reach out</span>
                <span className="text-2xl">⤷</span>
              </div>

              <div className="space-y-1 font-sans text-xs sm:text-sm font-medium text-white">
                <div className="font-bold text-base sm:text-lg tracking-wide flex items-center md:justify-end gap-1.5">
                  <Phone className="w-4 h-4 text-blue-300 inline" />
                  <a href="tel:+919176257316" className="hover:underline">+91 9176257316</a>
                </div>
                <div className="text-blue-100 flex items-center md:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-300 inline" />
                  <a href="mailto:studyusage2008@gmail.com" className="hover:underline">studyusage2008@gmail.com</a>
                </div>
                <div className="text-blue-200 text-xs flex items-center md:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-300 inline" />
                  <span>Chennai, India</span>
                </div>
              </div>

              {/* Scan QR for Portfolios Box */}
              <div className="pt-2 flex items-center md:justify-end gap-2.5">
                <span className="text-[11px] font-sans font-semibold text-blue-200">
                  Scan QR for<br className="hidden sm:inline" /> Portfolios
                </span>
                <div className="w-12 h-12 bg-white p-1 rounded-sm shadow-md flex items-center justify-center text-neutral-950">
                  <QrCode className="w-10 h-10 text-neutral-900" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. BODY CONTENT (Ivory Warm Paper, Blue Headings, Structured Columns)    */}
      {/* ========================================================================= */}
      <div className="p-6 sm:p-10 md:p-14 space-y-10 sm:space-y-14 bg-[#fdfbf7]">

        {/* ----------------------------------------------------------------------- */}
        {/* SECTION A: EDUCATION (3 Columns)                                        */}
        {/* ----------------------------------------------------------------------- */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d4ed8] font-sans tracking-tight">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-1">
            
            {/* Degree 1 */}
            <div className="space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-neutral-950 uppercase tracking-tight font-sans">
                BACHELORS OF TECHNOLOGY (CSE - AI &amp; ML)
              </h3>
              <p className="text-xs text-neutral-700 font-medium">
                NxtWave Institute of Advanced Technologies (Partner Univ)
              </p>
              <p className="text-xs text-neutral-500 font-sans">
                Chennai, India &bull; 2025 – 2029
              </p>
            </div>

            {/* Degree 2 */}
            <div className="space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-neutral-950 uppercase tracking-tight font-sans">
                BACHELOR OF SCIENCE IN DATA SCIENCE &amp; APPS
              </h3>
              <p className="text-xs text-neutral-700 font-medium">
                Indian Institute of Technology, Madras (IITM)
              </p>
              <p className="text-xs text-neutral-500 font-sans">
                Chennai, India &bull; Concurrent Degree (2025 – 2029)
              </p>
            </div>

            {/* Degree 3 */}
            <div className="space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-neutral-950 uppercase tracking-tight font-sans">
                HIGHER SECONDARY (HSC / SSC)
              </h3>
              <p className="text-xs text-neutral-700 font-medium">
                Physics, Chemistry, Mathematics &amp; Computer Science
              </p>
              <p className="text-xs text-neutral-500 font-sans">
                Chennai, India &bull; Top Distinction
              </p>
            </div>

          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* SECTION B: 3-COLUMN GRID (Area of Expertise, Tools, Soft Skills)        */}
        {/* ----------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 pt-2">
          
          {/* Column 1: Area of expertise (Outlined rounded pills) */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d4ed8] font-sans tracking-tight">
              Area of expertise
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 font-sans text-xs">
              {[
                'Multi-Agent AI',
                'LLM Orchestration',
                'Edge AI / YOLOv8',
                'AWS Serverless',
                'Dataset Eng (Polars)',
                'Fastify & Node.js',
                'PostgreSQL & Redis',
                'System Architecture',
                'React / Next.js',
                'Flutter Mobile'
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-900 rounded-full px-3 py-1.5 text-center font-medium text-neutral-900 bg-white hover:bg-neutral-50 shadow-2xs transition-colors flex items-center justify-center whitespace-nowrap text-[11px]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Tools (App badge icons with skill bars) */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d4ed8] font-sans tracking-tight">
              Tools &amp; Stack
            </h2>

            <div className="grid grid-cols-2 gap-3 font-sans text-xs">
              {[
                { name: 'Python (Polars)', code: 'Py', bg: 'bg-[#3b82f6]', text: 'text-white' },
                { name: 'PyTorch (CUDA)', code: 'Pt', bg: 'bg-[#ee4c2c]', text: 'text-white' },
                { name: 'Fastify / Node', code: 'Ff', bg: 'bg-[#000000]', text: 'text-white' },
                { name: 'Docker / Podman', code: 'Dk', bg: 'bg-[#0284c7]', text: 'text-white' },
                { name: 'AWS Cloud', code: 'Aws', bg: 'bg-[#f59e0b]', text: 'text-neutral-950' },
                { name: 'PostgreSQL', code: 'Pg', bg: 'bg-[#336791]', text: 'text-white' },
                { name: 'Redis / SQS', code: 'Rd', bg: 'bg-[#dc2626]', text: 'text-white' },
                { name: 'LangChain AI', code: 'Lc', bg: 'bg-[#10b981]', text: 'text-neutral-950' },
                { name: 'Next.js / React', code: 'Nx', bg: 'bg-[#111827]', text: 'text-white' },
                { name: 'Flutter / Dart', code: 'Fl', bg: 'bg-[#06b6d4]', text: 'text-neutral-950' }
              ].map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-sm ${tool.bg} ${tool.text} flex items-center justify-center font-bold text-xs shrink-0 shadow-xs`}>
                    {tool.code}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-neutral-900 truncate">{tool.name}</div>
                    <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden mt-0.5">
                      <div className="h-full bg-blue-600 rounded-full w-[90%]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Soft Skills (Hollow circle list) */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1d4ed8] font-sans tracking-tight">
              Soft Skills
            </h2>

            <ul className="space-y-2 text-xs sm:text-sm text-neutral-800 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold text-base leading-none">○</span>
                <span>Technical Leadership &amp; Startup Co-Founding</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold text-base leading-none">○</span>
                <span>High-Pressure Problem Solving &amp; Hackathons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold text-base leading-none">○</span>
                <span>Systems Thinking &amp; Low-Latency Architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold text-base leading-none">○</span>
                <span>Clear Technical Documentation &amp; Diagramming</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold text-base leading-none">○</span>
                <span>Cross-Functional Client &amp; Team Communication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold text-base leading-none">○</span>
                <span>Rapid Prototyping &amp; High-Velocity Execution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neutral-900 font-bold text-base leading-none">○</span>
                <span>Production Reliability &amp; Bug Triage</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* SECTION C: WORK EXPERIENCE (Chronological with Role Descriptions)       */}
        {/* ----------------------------------------------------------------------- */}
        <div className="space-y-6 pt-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d4ed8] font-sans tracking-tight">
            Work Experience
          </h2>

          <div className="space-y-6 font-sans">
            
            {/* Experience Item 1: AXOWEB TECHNOLOGIES */}
            <div className="space-y-1 pb-4 border-b border-neutral-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-bold text-sm sm:text-base text-neutral-950 uppercase tracking-tight">
                  AXOWEB TECHNOLOGIES,
                </h3>
                <span className="text-xs font-semibold text-neutral-600 sm:text-right shrink-0">
                  Feb 2025 – Present (Fulltime)
                </span>
              </div>
              <div className="text-xs font-medium text-neutral-700 italic">
                AI &amp; Digital Solutions Startup, Chennai &bull; National BRAVE Winner
              </div>
              <div className="text-xs font-bold text-neutral-900 pt-0.5">
                Position &ndash; Co-Founder &amp; Lead Systems Architect
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed pt-1">
                Startup Strategy &bull; AWS Serverless Microservices (Lambda, RDS PostgreSQL, ElastiCache, SQS, Cognito) &bull; 3 Live Mobile Apps &bull; Flutter &bull; React &bull; Firebase &bull; Commercial Client Acquisition &bull; ₹7L+ Revenue in First 90 Days
              </p>
            </div>

            {/* Experience Item 2: DATADOC CLI */}
            <div className="space-y-1 pb-4 border-b border-neutral-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-bold text-sm sm:text-base text-neutral-950 uppercase tracking-tight">
                  OPEN SOURCE &amp; PYPI CONTRIBUTIONS,
                </h3>
                <span className="text-xs font-semibold text-neutral-600 sm:text-right shrink-0">
                  Jan 2025 – Present
                </span>
              </div>
              <div className="text-xs font-medium text-neutral-700 italic">
                Python Software Foundation Ecosystem &bull; Open Source Package
              </div>
              <div className="text-xs font-bold text-neutral-900 pt-0.5">
                Position &ndash; Creator &amp; Maintainer, DataDoc CLI
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed pt-1">
                Python Polars Dataset Engine &bull; Sub-second Exploratory Profiling (0.42s on 1,000,000 rows) &bull; Agentic LLM Auto-Repair &bull; PyPI Release (pip install datadoc-cli) &bull; Apache Arrow Multi-Threaded Kernels
              </p>
            </div>

            {/* Experience Item 3: THINKERSCAVE & MICRODOLPHIN */}
            <div className="space-y-1 pb-4 border-b border-neutral-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-bold text-sm sm:text-base text-neutral-950 uppercase tracking-tight">
                  THINKERSCAVE &amp; MICRODOLPHIN,
                </h3>
                <span className="text-xs font-semibold text-neutral-600 sm:text-right shrink-0">
                  Jun 2024 – Dec 2024
                </span>
              </div>
              <div className="text-xs font-medium text-neutral-700 italic">
                Enterprise AI &amp; Natural Language Code Generation Internships
              </div>
              <div className="text-xs font-bold text-neutral-900 pt-0.5">
                Position &ndash; Agentic AI &amp; Backend Engineer
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed pt-1">
                Knowledge Graph RAG Pipelines &bull; Multi-Agent Code Generation Loops &bull; Website &amp; WhatsApp Support Bots &bull; Full-Stack LMS &amp; Hotel Management System Deployments
              </p>
            </div>

            {/* Experience Item 4: NATIONAL HACKATHONS */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-bold text-sm sm:text-base text-neutral-950 uppercase tracking-tight">
                  NATIONAL HACKATHONS &amp; APPLIED RESEARCH LABS,
                </h3>
                <span className="text-xs font-semibold text-neutral-600 sm:text-right shrink-0">
                  2024 – 2026
                </span>
              </div>
              <div className="text-xs font-medium text-neutral-700 italic">
                OpenAI Academy &bull; NxtWave GenAI Buildathon &bull; TakeOver&apos;26
              </div>
              <div className="text-xs font-bold text-neutral-900 pt-0.5">
                Position &ndash; Lead Systems Engineer
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed pt-1">
                Project K (OpenAI Academy National Runner-Up, ₹3L Prize) &bull; Quorum Multi-Agent Executive Debate System (Top Rank TakeOver&apos;26) &bull; Edge AI YOLOv8 on NVIDIA Jetson Orin
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM ROYAL BLUE BANNER (Interests & Certifications)                  */}
      {/* ========================================================================= */}
      <div className="bg-[#1d4ed8] text-white p-6 sm:p-10 border-t-2 border-neutral-950">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interests Oval Badge */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-block border-2 border-white rounded-full px-5 py-1 text-center font-sans font-bold text-sm text-white">
              Interests
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-handwriting text-blue-100 text-lg">
              <span>Distributed Systems</span>
              <span>Neural Networks</span>
              <span>Open Source</span>
              <span>Autonomous Agents</span>
              <span>Robotics &amp; Edge AI</span>
              <span>Hackathons</span>
              <span>System Design</span>
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
              Certifications
            </h2>

            <ul className="space-y-2 text-xs sm:text-sm text-blue-100 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-white font-bold text-base leading-none">○</span>
                <span>OpenAI Academy GenAI Buildathon Winner (₹3L Prize)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-bold text-base leading-none">○</span>
                <span>IIT Madras BS Data Science &amp; Applications Foundational</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-bold text-base leading-none">○</span>
                <span>AWS Cloud Practitioner &amp; Serverless Microservices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white font-bold text-base leading-none">○</span>
                <span>NxtWave Industry-Ready AI/ML Certification</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. FOOTER STRIP (Torn Tape Checkout + Contact Callout)                   */}
      {/* ========================================================================= */}
      <div className="bg-[#faf8f3] border-t-2 border-neutral-900 py-4 sm:py-5 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Tape Strip */}
        <div className="relative">
          <div className="w-auto bg-[#d7ba8d] px-4 py-1.5 border border-dashed border-amber-950/40 -rotate-2 shadow-xs">
            <span className="font-handwriting text-sm sm:text-base font-bold text-neutral-900">
              Checkout github.com/narain-karti
            </span>
          </div>
        </div>

        {/* Center / Right: Let's get Creative */}
        <div className="font-handwriting text-xl sm:text-2xl font-bold text-neutral-950 flex items-center gap-2">
          <span>Let&apos;s get Creative</span>
          <span className="font-sans text-sm sm:text-base text-[#1d4ed8] font-bold">
            +91 9176257316 &bull; studyusage2008@gmail.com
          </span>
        </div>

      </div>

    </div>
  );
}
