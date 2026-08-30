'use client';

import React from 'react';
import {
  Briefcase,
  CheckCircle,
  Download,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Award,
  ChevronRight,
  Sparkles,
  FileText,
  Building,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/lib/portfolio-data';
import { StampSeal } from './ScrapbookArtifacts';

interface RecruiterModeViewProps {
  onSelectProject: (project: Project) => void;
  onExitRecruiterMode: () => void;
  onOpenResume: () => void;
}

export function RecruiterModeView({
  onSelectProject,
  onExitRecruiterMode,
  onOpenResume,
}: RecruiterModeViewProps) {
  const { profile, proofStrip, featuredProjects, experienceChapters } = PORTFOLIO_DATA;

  return (
    <div className="w-full min-h-screen bg-[#faf8f3] py-8 px-4 sm:px-6 lg:px-8 font-sans animate-fadeIn text-neutral-900">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Recruiter Mode Banner */}
        <div className="bg-amber-400 border-2 border-neutral-950 p-4 rounded-xs shadow-[4px_4px_0px_#121316] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-neutral-950" />
            <span className="font-bold text-neutral-950 text-sm">
              RECRUITER MODE: 45-SECOND EXECUTIVE SCAN
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResume}
              className="px-3 py-1 bg-neutral-950 text-white font-bold rounded-xs hover:bg-neutral-800 transition-colors shadow-xs"
            >
              VIEW RESUME
            </button>
            <button
              type="button"
              onClick={onExitRecruiterMode}
              className="px-3 py-1 bg-white text-neutral-950 border border-neutral-900 font-bold rounded-xs hover:bg-neutral-100 transition-colors"
            >
              EXIT TO SCRAPBOOK OS
            </button>
          </div>
        </div>

        {/* Executive Summary & Header */}
        <div className="bg-white border-2 border-neutral-950 p-6 sm:p-8 rounded-xs shadow-[5px_5px_0px_#121316] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-neutral-900 pb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
                NARAIN KARTI
              </h1>
              <p className="text-sm font-mono text-blue-800 font-bold mt-0.5">
                AI/ML Engineer · Systems Builder · Concurrent BS (IIT Madras) & B.Tech AI (NxtWave IAT)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <a
                href="https://github.com/narain-karti"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-neutral-100 border border-neutral-300 rounded hover:bg-white flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="px-3 py-1.5 bg-neutral-950 text-white rounded hover:bg-blue-700 flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          <p className="text-base text-neutral-800 leading-relaxed">
            “I build intelligent systems for ambitious problems.” Systems engineer and AI builder with a proven track record of winning national-tier competitions (BRAVE Startups 1st, OpenAI Academy ₹3L Prize Runner-Up, TakeOver’26 Top Rank, NASA Space Settlement Zonal Award), publishing open-source libraries (DataDoc on PyPI), and deploying production enterprise architectures (Axoweb Technologies Co-Founder with ₹7L+ revenue).
          </p>
        </div>

        {/* Key Verified Proof Grid */}
        <div className="space-y-3">
          <div className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider">
            EXECUTIVE CREDENTIALS & RECEIPTS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {proofStrip.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xs border border-neutral-300 shadow-2xs space-y-1 font-mono text-xs"
              >
                <span className="text-[10px] text-blue-800 font-bold block">{item.stat}</span>
                <div className="font-bold text-neutral-950 font-sans">{item.title}</div>
                <div className="text-[11px] text-neutral-600">{item.context}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Flagship Projects */}
        <div className="space-y-4">
          <div className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider">
            TOP 4 FLAGSHIP PRODUCTION PROJECTS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.slice(0, 4).map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="bg-white p-5 rounded-xs border-2 border-neutral-900 shadow-[3px_3px_0px_#121316] hover:shadow-[5px_5px_0px_#121316] transition-all cursor-pointer space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-neutral-900">{proj.number} {'//'} {proj.title}</span>
                    <span className="text-[10px] bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-bold">
                      {proj.status}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {proj.tags.slice(0, 4).map((t) => (
                      <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 bg-neutral-100 border rounded text-neutral-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t flex items-center justify-between font-mono text-xs text-blue-700 font-bold">
                  <span>Inspect Architecture</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="space-y-3">
          <div className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider">
            EXPERIENCE TIMELINE
          </div>

          <div className="bg-white border-2 border-neutral-900 p-5 rounded-xs shadow-[4px_4px_0px_#121316] space-y-4">
            {experienceChapters.map((exp, idx) => (
              <div key={exp.id} className="border-b last:border-b-0 pb-3 last:pb-0 space-y-1 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="font-bold text-neutral-950 font-sans text-sm">{exp.company}</span>
                  <span className="text-neutral-500 text-[11px]">{exp.period}</span>
                </div>
                <div className="text-blue-800 font-bold">{exp.role}</div>
                <p className="text-xs text-neutral-700 font-sans">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
