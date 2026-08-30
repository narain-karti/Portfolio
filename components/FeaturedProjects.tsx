'use client';

import React from 'react';
import {
  ExternalLink,
  Github,
  Award,
  ChevronRight,
  Sparkles,
  Terminal,
  Activity,
  Cpu,
  Layers,
  FileText,
  Rocket,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/lib/portfolio-data';
import { TapeElement, StampSeal } from './ScrapbookArtifacts';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
  activeModuleFilter: string;
}

export function FeaturedProjects({
  onSelectProject,
  activeModuleFilter,
}: FeaturedProjectsProps) {
  const filteredProjects = PORTFOLIO_DATA.featuredProjects.filter((proj) => {
    if (activeModuleFilter === 'ALL') return true;
    if (activeModuleFilter === 'AI_ML') return proj.category === 'AI_ML' || proj.tags.includes('COMPUTER VISION');
    if (activeModuleFilter === 'AGENTS') return proj.category === 'AGENTS' || proj.tags.includes('AI AGENTS');
    if (activeModuleFilter === 'DATA') return proj.category === 'DATA_SCIENCE' || proj.tags.includes('DATA ENGINEERING');
    if (activeModuleFilter === 'SPACE') return proj.category === 'SPACE';
    return true;
  });

  return (
    <section id="work-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-300 paper-grid">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-neutral-900 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <span className="w-2 h-2 bg-blue-700" />
              <span>SECTION 03 // PORTFOLIO ARCHIVES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight">
              FEATURED WORK
            </h2>
            <p className="text-sm sm:text-base font-mono text-neutral-600 max-w-2xl">
              “Things I built because the obvious solution wasn’t interesting enough.”
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-500 bg-white p-2.5 border border-neutral-300 rounded-xs self-start md:self-auto space-y-1">
            <div className="flex justify-between gap-4">
              <span>INDEXED PROJECTS:</span>
              <strong className="text-neutral-900">{filteredProjects.length} ACTIVE</strong>
            </div>
            <div className="flex justify-between gap-4 text-[11px] text-neutral-400">
              <span>STATUS:</span>
              <span className="text-emerald-700 font-bold">PRODUCTION & ACTIVE BUILDS</span>
            </div>
          </div>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const isAlternate = idx % 2 === 1;
            const rotationClass = idx % 3 === 0 ? 'rotate-[-0.5deg]' : idx % 3 === 1 ? 'rotate-[0.5deg]' : 'rotate-0';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`relative bg-[#faf8f3] border-2 border-neutral-900 p-6 rounded-xs shadow-[5px_5px_0px_#121316] transition-all hover:shadow-[7px_7px_0px_#121316] hover:translate-y-[-2px] flex flex-col justify-between ${rotationClass}`}
              >
                {/* Scrapbook Tape Element */}
                <div className={`absolute -top-3 ${isAlternate ? 'right-8' : 'left-8'}`}>
                  <TapeElement
                    variant={idx % 2 === 0 ? 'yellow' : 'masking'}
                    angle={idx % 2 === 0 ? -2 : 2}
                    width="w-24"
                  />
                </div>

                <div className="space-y-4">
                  {/* Top Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-neutral-500 border-b border-neutral-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-neutral-900 text-white font-bold flex items-center justify-center text-[10px]">
                        {project.number}
                      </span>
                      <span className="font-bold text-neutral-900">{project.year}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className={`px-2 py-0.5 rounded-xs text-[10px] font-bold uppercase tracking-wider ${
                        project.status === 'SHIPPED'
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : project.status === 'OPEN_SOURCE'
                          ? 'bg-blue-100 text-blue-900 border border-blue-300'
                          : project.status === 'RESEARCH_DOSSIER'
                          ? 'bg-purple-100 text-purple-900 border border-purple-300'
                          : 'bg-amber-100 text-amber-900 border border-amber-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Award / Highlight Badge */}
                  {project.badge && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100/80 border border-amber-300 rounded-xs text-xs font-mono font-bold text-amber-950">
                      <Award className="w-3.5 h-3.5 text-amber-700" />
                      <span>{project.badge}</span>
                    </div>
                  )}

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                    {project.summary}
                  </p>

                  {/* Pip Command for DataDoc */}
                  {project.pipCommand && (
                    <div className="bg-neutral-900 text-white font-mono text-xs p-2.5 rounded-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-yellow-400" />
                        <code className="text-yellow-300">{project.pipCommand}</code>
                      </div>
                      <span className="text-[10px] text-neutral-400">PyPI Package</span>
                    </div>
                  )}

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 bg-white border border-neutral-300 rounded-xs text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-950 text-white font-bold rounded-xs hover:bg-blue-700 transition-colors shadow-xs"
                  >
                    <span>DEEP CASE STUDY & BLUEPRINT</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-white border border-neutral-300 rounded-xs text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
