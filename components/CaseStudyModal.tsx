'use client';

import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Award,
  Layers,
  Cpu,
  CheckCircle,
  AlertTriangle,
  FileCode,
  Terminal,
  Activity,
  ArrowRight,
  Shield,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import { Project } from '@/lib/portfolio-data';
import { TapeElement, StampSeal } from './ScrapbookArtifacts';
import {
  ProjectKSimulator,
  DataDocCLISimulator,
  QuorumBoardSimulator,
  PrivacyAgentSimulator,
  SpaceSettlementSimulator,
  AxowebPlatformSimulator,
  DeceptrixSimulator,
  ThinkersCaveSimulator,
} from './ProjectSimulators';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'ARCHITECTURE' | 'SIMULATOR' | 'POSTMORTEM' | 'METRICS'>('OVERVIEW');

  if (!project) return null;

  const { caseStudy } = project;

  const renderSimulator = () => {
    switch (project.id) {
      case 'project-k':
        return <ProjectKSimulator />;
      case 'datadoc':
        return <DataDocCLISimulator />;
      case 'quorum':
        return <QuorumBoardSimulator />;
      case 'privacy-browser-agent':
        return <PrivacyAgentSimulator />;
      case 'beyond-earth':
        return <SpaceSettlementSimulator />;
      case 'axoweb':
        return <AxowebPlatformSimulator />;
      case 'deceptrix':
        return <DeceptrixSimulator />;
      case 'thinkerscave':
        return <ThinkersCaveSimulator />;
      default:
        return (
          <div className="p-6 bg-neutral-900 text-neutral-300 rounded text-center font-mono text-xs">
            Interactive simulation and telemetry data active in repository.
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-xs p-0 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn select-none">
      <div
        id="case-study-modal-container"
        className="relative w-full max-w-5xl bg-[#faf8f2] border-2 border-neutral-900 rounded-t-xl sm:rounded-xs shadow-[8px_8px_0px_#121316] overflow-hidden font-sans select-text max-h-[95vh] sm:max-h-[92vh] flex flex-col"
      >
        {/* Top OS Modal Header Bar */}
        <div className="bg-[#ebe7dc] border-b border-neutral-300 px-4 py-3 flex items-center justify-between gap-3 shrink-0 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-bold text-neutral-900 ml-2">
              NARAIN.OS // CASE_STUDY_DOSSIER_{project.number}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.badge && (
              <span className="hidden sm:inline text-[10px] bg-amber-200/90 text-amber-950 font-bold px-2 py-0.5 border border-amber-400 rounded-xs">
                {project.badge}
              </span>
            )}
            <button
              id="close-case-study-btn"
              type="button"
              onClick={onClose}
              className="p-1 rounded bg-neutral-200 hover:bg-neutral-300 text-neutral-800 transition-colors"
              title="Close Case Study (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-[#f0ede4] border-b border-neutral-300 px-2 sm:px-4 py-1.5 flex items-center gap-1 overflow-x-auto scrollbar-none text-[10px] sm:text-[11px] font-mono shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('OVERVIEW')}
            className={`px-2 sm:px-3 py-1 rounded-xs transition-all font-bold shrink-0 whitespace-nowrap ${
              activeTab === 'OVERVIEW'
                ? 'bg-neutral-950 text-white shadow-xs'
                : 'text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            01_PROBLEM & INSIGHT
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ARCHITECTURE')}
            className={`px-2 sm:px-3 py-1 rounded-xs transition-all font-bold shrink-0 whitespace-nowrap ${
              activeTab === 'ARCHITECTURE'
                ? 'bg-neutral-950 text-white shadow-xs'
                : 'text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            02_ARCHITECTURE BLUEPRINT
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('SIMULATOR')}
            className={`px-2 sm:px-3 py-1 rounded-xs transition-all font-bold shrink-0 whitespace-nowrap ${
              activeTab === 'SIMULATOR'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            03_INTERACTIVE SANDBOX
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('POSTMORTEM')}
            className={`px-2 sm:px-3 py-1 rounded-xs transition-all font-bold shrink-0 whitespace-nowrap ${
              activeTab === 'POSTMORTEM'
                ? 'bg-neutral-950 text-white shadow-xs'
                : 'text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            04_FAILURES & LESSONS
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('METRICS')}
            className={`px-2 sm:px-3 py-1 rounded-xs transition-all font-bold shrink-0 whitespace-nowrap ${
              activeTab === 'METRICS'
                ? 'bg-neutral-950 text-white shadow-xs'
                : 'text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            05_VERIFIED METRICS
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 paper-grid">
          {/* Hero Banner inside dossier */}
          <div className="relative border-b-2 border-neutral-900 pb-5 space-y-2">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 bg-neutral-900 text-white font-bold rounded-xs">
                PROJECT {project.number}
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-700 font-bold">{project.year}</span>
              <span className="text-neutral-500">·</span>
              <span className="text-blue-700 font-bold">STATUS: {project.status}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-mono text-neutral-700 italic">
              {caseStudy.heroTagline}
            </p>

            {/* Quick Links / Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-white font-mono text-xs rounded-xs hover:bg-blue-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.pipCommand && (
                <span className="font-mono text-xs px-2.5 py-1 bg-yellow-200 text-yellow-950 border border-yellow-400 rounded-xs font-bold">
                  {project.pipCommand}
                </span>
              )}
              {project.awardHighlight && (
                <div className="inline-flex items-center gap-1 font-mono text-xs text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  <span>{project.awardHighlight}</span>
                </div>
              )}
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'OVERVIEW' && (
            <div className="space-y-6 animate-fadeIn font-mono text-xs">
              {/* Problem & Insight Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#fdebf3] p-4 rounded-xs border border-rose-300 space-y-2">
                  <div className="flex items-center gap-1.5 text-rose-900 font-bold uppercase tracking-wider text-[11px]">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>01 // THE PROBLEM</span>
                  </div>
                  <p className="text-neutral-900 leading-relaxed text-xs">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="bg-[#e6f9ed] p-4 rounded-xs border border-emerald-300 space-y-2">
                  <div className="flex items-center gap-1.5 text-emerald-900 font-bold uppercase tracking-wider text-[11px]">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>02 // THE CORE INSIGHT</span>
                  </div>
                  <p className="text-neutral-900 leading-relaxed text-xs">
                    {caseStudy.insight}
                  </p>
                </div>
              </div>

              {/* Constraints & Goals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xs border border-neutral-300 space-y-2">
                  <span className="font-bold text-neutral-900 uppercase text-[11px] block border-b pb-1">
                    SYSTEM CONSTRAINTS
                  </span>
                  <ul className="space-y-1.5 text-neutral-700">
                    {caseStudy.constraints.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">▪</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xs border border-neutral-300 space-y-2">
                  <span className="font-bold text-neutral-900 uppercase text-[11px] block border-b pb-1">
                    ENGINEERING OBJECTIVES
                  </span>
                  <ul className="space-y-1.5 text-neutral-700">
                    {caseStudy.goals.map((g, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Thought Process */}
              <div className="bg-[#fdfaf3] p-4 rounded-xs border border-neutral-400 space-y-2">
                <span className="font-bold text-neutral-900 uppercase text-[11px] block">
                  THOUGHT PROCESS & FIRST PRINCIPLES
                </span>
                <p className="text-neutral-800 leading-relaxed text-xs">
                  {caseStudy.thoughtProcess}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE BLUEPRINT */}
          {activeTab === 'ARCHITECTURE' && (
            <div className="space-y-6 animate-fadeIn font-mono text-xs">
              <div className="bg-neutral-950 text-neutral-200 p-5 rounded-xs border border-neutral-800 space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-[11px]">
                  <span className="text-yellow-400 font-bold uppercase tracking-wider">
                    DATA FLOW & SUBSYSTEM SEQUENCE
                  </span>
                  <span className="text-neutral-400">END-TO-END PIPELINE</span>
                </div>

                <div className="space-y-3">
                  {caseStudy.architectureDiagram.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-neutral-900 p-3 rounded-xs border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded bg-neutral-800 text-yellow-300 font-bold flex items-center justify-center shrink-0 text-xs">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="font-bold text-white text-xs">{step.title}</h4>
                          <p className="text-neutral-400 text-[11px] mt-0.5">{step.desc}</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 bg-neutral-800 text-neutral-300 rounded border border-neutral-700 shrink-0 self-end sm:self-center">
                        {step.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Choices Breakdown */}
              <div className="bg-white p-4 rounded-xs border border-neutral-300 space-y-3">
                <span className="font-bold text-neutral-900 uppercase text-[11px] block border-b pb-1">
                  TECHNOLOGY SELECTION RATIONALE
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {caseStudy.techChoices.map((tc, idx) => (
                    <div key={idx} className="p-3 bg-[#faf8f5] rounded border border-neutral-200 space-y-1">
                      <span className="font-bold text-blue-700 text-[11px] block">{tc.tech}</span>
                      <p className="text-[11px] text-neutral-600">{tc.why}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE SIMULATOR */}
          {activeTab === 'SIMULATOR' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between font-mono text-xs text-neutral-600">
                <span className="font-bold text-neutral-900">
                  LIVE INTERACTIVE SYSTEM INSPECTOR
                </span>
                <span>TACTILE SIMULATION ENVIRONMENT</span>
              </div>
              {renderSimulator()}
            </div>
          )}

          {/* TAB 4: FAILURES & POST-MORTEM */}
          {activeTab === 'POSTMORTEM' && (
            <div className="space-y-6 animate-fadeIn font-mono text-xs">
              <div className="bg-[#fff2e5] p-4 rounded-xs border border-amber-300 space-y-3">
                <span className="font-bold text-amber-950 uppercase text-[11px] block">
                  HONEST CHALLENGES & INITIAL FAILURE MODES
                </span>
                <ul className="space-y-2 text-neutral-900">
                  {caseStudy.challengesAndFailures.map((cf, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white/80 p-2.5 rounded border border-amber-200">
                      <span className="text-amber-700 font-bold">⚠</span>
                      <span>{cf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xs border border-neutral-300 space-y-2">
                <span className="font-bold text-neutral-900 uppercase text-[11px] block border-b pb-1">
                  WHAT I LEARNED AS AN ENGINEER
                </span>
                <p className="text-neutral-800 leading-relaxed text-xs">
                  {caseStudy.whatILearned}
                </p>
              </div>

              <div className="bg-[#e8f2fe] p-4 rounded-xs border border-blue-300 space-y-2">
                <span className="font-bold text-blue-950 uppercase text-[11px] block">
                  FUTURE DIRECTION & NEXT ITERATION
                </span>
                <p className="text-neutral-800 leading-relaxed text-xs">
                  {caseStudy.futureDirection}
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: VERIFIED METRICS */}
          {activeTab === 'METRICS' && (
            <div className="space-y-6 animate-fadeIn font-mono text-xs">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {caseStudy.metricsOrFacts.map((m, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xs border-2 border-neutral-900 text-center space-y-1">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold block">{m.label}</span>
                    <div className="text-lg sm:text-xl font-extrabold text-blue-700">{m.value}</div>
                    <span className="text-[10px] text-neutral-600 block">{m.note}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#faf8f2] p-4 rounded-xs border border-neutral-300 space-y-2">
                <span className="font-bold text-neutral-900 uppercase text-[11px] block">
                  KEY PRODUCTION RESULTS
                </span>
                <ul className="space-y-1.5 text-neutral-800">
                  {caseStudy.results.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#ebe7dc] border-t border-neutral-300 px-4 py-3 flex flex-wrap items-center justify-between gap-3 shrink-0 font-mono text-xs">
          <div className="flex items-center gap-2 text-neutral-600 text-[11px]">
            <span>NARAIN.OS // CASE STUDY COMPLETE</span>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-white text-neutral-900 border border-neutral-400 rounded-xs hover:bg-neutral-100 text-[11px]"
              >
                <Github className="w-3 h-3" />
                <span>Source Code</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1 bg-neutral-950 text-white rounded-xs hover:bg-neutral-800 text-[11px] font-bold"
            >
              CLOSE DOSSIER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
