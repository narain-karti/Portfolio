'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  Layers,
  ArrowRight,
  CheckCircle,
  Building,
  ExternalLink,
  ChevronDown,
  Award,
  Sparkles,
  Server,
  Cloud,
  Cpu,
} from 'lucide-react';
import { PORTFOLIO_DATA, ExperienceChapter } from '@/lib/portfolio-data';
import { TapeElement, StampSeal } from './ScrapbookArtifacts';

export function ExperienceSection() {
  const [expandedChapterId, setExpandedChapterId] = useState<string>('axoweb');

  return (
    <section id="experience-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-300 paper-grid">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-neutral-900 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <Briefcase className="w-4 h-4 text-blue-700" />
              <span>SECTION 05 // CAREER & FOUNDER CHAPTERS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight">
              PLACES WHERE I BUILT THINGS
            </h2>
            <p className="text-sm sm:text-base font-mono text-neutral-600 max-w-2xl">
              Each role presented as a structured engineering and product chapter.
            </p>
          </div>

          <div className="font-mono text-xs bg-white px-3 py-2 border border-neutral-300 rounded-xs self-start md:self-auto space-y-1">
            <div className="text-neutral-500">EXPERIENCE BREADTH:</div>
            <div className="font-bold text-neutral-900">STARTUP CO-FOUNDER + 4 INTERNSHIPS</div>
          </div>
        </div>

        {/* Chapters Stack */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experienceChapters.map((chapter, idx) => {
            const isExpanded = expandedChapterId === chapter.id;
            const isFounder = chapter.id === 'axoweb';

            return (
              <div
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                className={`relative bg-[#faf8f3] border-2 rounded-xs transition-all ${
                  isFounder
                    ? 'border-neutral-950 shadow-[6px_6px_0px_#121316]'
                    : 'border-neutral-800 shadow-[4px_4px_0px_#121316]'
                } ${isExpanded ? 'ring-2 ring-blue-700' : ''}`}
              >
                {/* Scrapbook Tape for Founder */}
                {isFounder && (
                  <div className="absolute -top-3 right-12 z-20">
                    <TapeElement variant="yellow" angle={-1} width="w-28" />
                  </div>
                )}

                {/* Chapter Header Banner (Clickable) */}
                <div
                  onClick={() => setExpandedChapterId(isExpanded ? '' : chapter.id)}
                  className="p-5 sm:p-6 bg-[#f5f2e8] border-b border-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#ede9dc] transition-colors select-none"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-xs">
                        CHAPTER 0{idx + 1}
                      </span>
                      <span className="text-neutral-500">·</span>
                      <span className="font-bold text-neutral-800">{chapter.period}</span>
                      <span className="text-neutral-500">·</span>
                      <span className="text-neutral-600">{chapter.location}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight flex items-center gap-3">
                      <span>{chapter.company}</span>
                      {chapter.badge && (
                        <span className="text-xs font-mono font-bold bg-amber-200 text-amber-950 px-2 py-0.5 rounded border border-amber-400">
                          {chapter.badge}
                        </span>
                      )}
                    </h3>

                    <p className="text-sm font-mono text-blue-800 font-bold">
                      {chapter.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center font-mono text-xs">
                    <span className="hidden md:inline text-neutral-500">
                      {isExpanded ? 'Collapse Chapter' : 'Open Chapter'}
                    </span>
                    <div className={`p-1.5 rounded-full bg-white border border-neutral-300 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4 text-neutral-800" />
                    </div>
                  </div>
                </div>

                {/* Expanded Content Body */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 md:p-8 space-y-6 font-mono text-xs animate-fadeIn">
                    {/* Narrative Arc */}
                    <div className="bg-[#f0ede4] p-3.5 rounded-xs border border-neutral-300 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-bold text-neutral-900 text-[11px] uppercase">
                        NARRATIVE FLOW:
                      </span>
                      <span className="text-blue-800 font-bold text-xs">
                        {chapter.narrativeFlow}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-neutral-800 font-sans leading-relaxed">
                      {chapter.summary}
                    </p>

                    {/* Verified Achievements */}
                    <div className="space-y-2">
                      <span className="font-bold text-neutral-900 uppercase text-[11px] block border-b pb-1">
                        KEY DELIVERABLES & IMPACT
                      </span>
                      <ul className="space-y-1.5">
                        {chapter.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-neutral-800">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span className="text-xs font-sans">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Built Sub-Projects & Architecture Visuals */}
                    {chapter.projectsBuilt && chapter.projectsBuilt.length > 0 && (
                      <div className="space-y-4 pt-2">
                        <span className="font-bold text-neutral-900 uppercase text-[11px] block">
                          SYSTEM ARCHITECTURES BUILT
                        </span>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {chapter.projectsBuilt.map((proj, pIdx) => (
                            <div
                              key={pIdx}
                              className="bg-white p-4 rounded-xs border border-neutral-300 space-y-3 shadow-2xs"
                            >
                              <div className="flex items-start justify-between gap-2 border-b pb-2">
                                <div>
                                  <h4 className="font-bold text-neutral-950 text-sm">
                                    {proj.name}
                                  </h4>
                                  <span className="text-[10px] text-neutral-500">
                                    {proj.category}
                                  </span>
                                </div>
                              </div>

                              <p className="text-xs text-neutral-700 font-sans leading-relaxed">
                                {proj.description}
                              </p>

                              {proj.deliverables && (
                                <div className="bg-[#faf8f2] p-2.5 rounded border border-neutral-200 space-y-1 text-[11px]">
                                  <span className="font-bold text-neutral-900 block text-[10px]">DELIVERED SCOPE:</span>
                                  {proj.deliverables.map((d, dIdx) => (
                                    <div key={dIdx} className="flex items-center gap-1 text-neutral-700">
                                      <span className="text-blue-600">▪</span>
                                      <span>{d}</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {proj.architectureFlow && (
                                <div className="bg-neutral-900 text-neutral-200 p-2.5 rounded text-[10px] space-y-1">
                                  <span className="text-yellow-400 font-bold block">AWS ARCHITECTURE PIPELINE:</span>
                                  <div className="flex flex-wrap items-center gap-1 text-neutral-300">
                                    {proj.architectureFlow.map((step, sIdx) => (
                                      <React.Fragment key={sIdx}>
                                        <span className="bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700">
                                          {step}
                                        </span>
                                        {sIdx < proj.architectureFlow!.length - 1 && (
                                          <span className="text-neutral-500">→</span>
                                        )}
                                      </React.Fragment>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div className="flex flex-wrap gap-1 pt-1">
                                {proj.stack.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[10px] px-2 py-0.5 bg-neutral-100 border rounded text-neutral-700"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Architecture Flow Diagram for Internships */}
                    {chapter.architectureFlow && (
                      <div className="bg-neutral-950 text-neutral-200 p-4 rounded-xs border border-neutral-800 space-y-3">
                        <span className="text-yellow-400 font-bold uppercase text-[11px] block">
                          SYSTEM ARCHITECTURE DIAGRAM
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 text-[10px]">
                          {chapter.architectureFlow.map((step, sIdx) => (
                            <div key={sIdx} className="bg-neutral-900 p-2.5 rounded border border-neutral-800 space-y-1">
                              <span className="text-yellow-300 font-bold">0{sIdx + 1}</span>
                              <div className="font-bold text-white">{step.title}</div>
                              <div className="text-neutral-400 text-[9px]">{step.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills footer */}
                    <div className="pt-3 border-t border-neutral-200 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] text-neutral-500 font-bold uppercase">SKILLS APPLIED:</span>
                      {chapter.skills.map((sk) => (
                        <span key={sk} className="text-[10px] px-2 py-0.5 bg-white border border-neutral-300 rounded text-neutral-800">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
