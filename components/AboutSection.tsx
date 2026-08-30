'use client';

import React from 'react';
import {
  Compass,
  Cpu,
  Database,
  Rocket,
  Wrench,
  Award,
  BookOpen,
  Sparkles,
  Layers,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { TapeElement, StampSeal, StickyNote } from './ScrapbookArtifacts';

export function AboutSection() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#faf8f3] border-b border-neutral-300 paper-grid">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-neutral-900 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <span className="w-2 h-2 bg-neutral-900" />
              <span>SECTION 07 // PROFILE & PHILOSOPHY</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight">
              WHO IS NARAIN?
            </h2>
            <p className="text-sm sm:text-base font-mono text-neutral-600 max-w-2xl">
              “I like building systems that sit at the intersection of intelligent software and impossible problems.”
            </p>
          </div>

          <div className="flex items-center gap-2">
            <StampSeal text="SYSTEMS_BUILDER" variant="charcoal" rotate={-2} />
          </div>
        </div>

        {/* Story & Dimensional Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Editorial Narrative & Education Dossier */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border-2 border-neutral-900 p-6 sm:p-8 rounded-xs shadow-[5px_5px_0px_#121316] relative space-y-4">
              <div className="absolute -top-3 left-8">
                <TapeElement variant="yellow" angle={-1} width="w-24" />
              </div>

              <h3 className="font-sans text-xl sm:text-2xl font-bold text-neutral-950">
                Beyond Tutorials: The Architecture-First Mindset
              </h3>

              <div className="space-y-3 font-sans text-sm sm:text-base text-neutral-800 leading-relaxed">
                <p>
                  Most developers learn tools in isolation. My engineering journey started from the opposite direction: tackling problems so ambitious that no single framework or canned tutorial was enough.
                </p>
                <p>
                  Whether designing an edge AI traffic mesh running on NVIDIA Jetson hardware (<strong className="text-neutral-950">Project K</strong>), orchestrating adversarial multi-agent debate graphs (<strong className="text-neutral-950">Quorum</strong>), engineering high-throughput dataset diagnostics with Polars (<strong className="text-neutral-950">DataDoc</strong>), or calculating 1.0g rotational gravity physics for orbital habitats (<strong className="text-neutral-950">NASA Space Settlement</strong>), I obsess over first principles, mass/information balance, and production reliability.
                </p>
                <p>
                  As a co-founder at <strong className="text-neutral-950">Axoweb Technologies</strong>, I led product and cloud architectures that won the national BRAVE Startups competition and scaled to over ₹7L in commercial revenue within 3 months.
                </p>
              </div>

              {/* Verified Education Blocks */}
              <div className="pt-4 border-t border-neutral-200 space-y-3 font-mono text-xs">
                <span className="font-bold text-neutral-900 uppercase text-[11px] block">
                  CONCURRENT ACADEMIC RIGOR
                </span>

                <div className="space-y-2">
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="bg-[#faf8f2] p-3 rounded border border-neutral-300 space-y-1">
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-neutral-950">{edu.institution}</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-neutral-200 text-neutral-800 rounded">
                          {edu.timeline}
                        </span>
                      </div>
                      <div className="text-blue-800 font-bold">{edu.degree}</div>
                      <p className="text-[11px] text-neutral-600 font-sans">{edu.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Multidimensional Map & Core Principles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Dimensional Intersection Map */}
            <div className="bg-[#121316] text-white p-6 rounded-xs border-2 border-neutral-900 shadow-[5px_5px_0px_#121316] font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-[11px]">
                <span className="text-yellow-400 font-bold uppercase tracking-wider">
                  SYSTEM INTERSECTION MAP
                </span>
                <span className="text-neutral-400">5-AXIS VECTOR</span>
              </div>

              <div className="space-y-2.5">
                <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800 flex items-center gap-3">
                  <span className="text-blue-400 font-bold text-sm">01</span>
                  <div>
                    <span className="font-bold text-white">DATA SCIENCE & MATHEMATICS</span>
                    <p className="text-[10px] text-neutral-400">Statistical foundations & columnar data engines (Polars)</p>
                  </div>
                </div>

                <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800 flex items-center gap-3">
                  <span className="text-emerald-400 font-bold text-sm">02</span>
                  <div>
                    <span className="font-bold text-white">AI / ML & COMPUTER VISION</span>
                    <p className="text-[10px] text-neutral-400">YOLOv8 edge perception, Vision Transformers & video forensics</p>
                  </div>
                </div>

                <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800 flex items-center gap-3">
                  <span className="text-purple-400 font-bold text-sm">03</span>
                  <div>
                    <span className="font-bold text-white">AGENTIC SYSTEMS & ORCHESTRATION</span>
                    <p className="text-[10px] text-neutral-400">Multi-agent dialectics, tool calling & local privacy firewalls</p>
                  </div>
                </div>

                <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800 flex items-center gap-3">
                  <span className="text-amber-400 font-bold text-sm">04</span>
                  <div>
                    <span className="font-bold text-white">DISTRIBUTED & CLOUD ENGINEERING</span>
                    <p className="text-[10px] text-neutral-400">AWS serverless, microservices, MQTT telemetry & Flutter</p>
                  </div>
                </div>

                <div className="p-2.5 bg-neutral-900 rounded border border-neutral-800 flex items-center gap-3">
                  <span className="text-cyan-400 font-bold text-sm">05</span>
                  <div>
                    <span className="font-bold text-white">SPACE SYSTEMS THINKING</span>
                    <p className="text-[10px] text-neutral-400">Closed-loop life support, orbital mechanics & extreme constraints</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Operating Principles Sticky Note */}
            <StickyNote color="yellow" rotate={1} className="font-mono text-xs space-y-2">
              <span className="font-bold text-amber-950 uppercase text-[11px] block border-b border-yellow-300 pb-1">
                NARAIN&apos;S OPERATING AXIOMS
              </span>
              <ul className="space-y-1.5 text-neutral-900">
                <li>1. <strong>Systems &gt; Tutorials</strong> — Build real architectures under real constraints.</li>
                <li>2. <strong>Open the hood</strong> — Never trust magical abstractions without inspecting the math.</li>
                <li>3. <strong>Ship with proof</strong> — Public PyPI packages, benchmarks, and working repositories.</li>
              </ul>
            </StickyNote>
          </div>
        </div>
      </div>
    </section>
  );
}
