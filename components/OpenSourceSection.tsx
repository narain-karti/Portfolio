'use client';

import React from 'react';
import {
  GitBranch,
  Github,
  Star,
  ExternalLink,
  Terminal,
  Code,
  Package,
  Layers,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { DataDocCLISimulator } from './ProjectSimulators';
import { TapeElement, StampSeal } from './ScrapbookArtifacts';

export function OpenSourceSection() {
  const { openSourceData } = PORTFOLIO_DATA;

  return (
    <section id="opensource-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-300 paper-grid">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-neutral-900 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <GitBranch className="w-4 h-4 text-emerald-700" />
              <span>SECTION 06 // PUBLIC CODE ECOSYSTEM</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight">
              OPEN SOURCE
            </h2>
            <p className="text-sm sm:text-base font-mono text-neutral-600 max-w-2xl">
              “Things I left on the internet — libraries, agent engines, and public tools.”
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/narain-karti"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-950 text-white font-mono text-xs font-bold rounded-xs hover:bg-neutral-800 transition-colors shadow-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github/narain-karti</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Highlighted PyPI Library: DataDoc Live CLI */}
        <div className="bg-[#faf8f3] border-2 border-neutral-900 p-6 rounded-xs shadow-[5px_5px_0px_#121316] relative space-y-4">
          <div className="absolute -top-3 left-10">
            <TapeElement variant="yellow" angle={-1.5} width="w-24" />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2 font-mono text-xs">
              <Package className="w-4 h-4 text-blue-700" />
              <span className="font-bold text-neutral-900 text-sm">FLAGSHIP PACKAGE: DATADOC-CLI</span>
              <span className="bg-emerald-100 text-emerald-900 text-[10px] px-2 py-0.5 rounded border border-emerald-300 font-bold">
                PYPI VERIFIED
              </span>
            </div>

            <a
              href="https://pypi.org/project/datadoc-cli/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-blue-700 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>View on PyPI</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="font-mono text-xs text-neutral-700 leading-relaxed">
            Autonomous dataset diagnostics, cleaning & automated EDA engine powered by Polars. Try the interactive sandbox below:
          </p>

          <DataDocCLISimulator />
        </div>

        {/* Public Repositories Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="font-bold text-neutral-900 uppercase">
              ORIGINAL BUILDS & TOOLS (VERIFIED PUBLIC REPOSITORIES)
            </span>
            <span className="text-neutral-500">github.com/narain-karti</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {openSourceData.pinnedRepos.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="group p-4 bg-white border border-neutral-300 rounded-xs shadow-2xs hover:border-neutral-900 hover:shadow-xs transition-all flex flex-col justify-between space-y-3 font-mono text-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-950 text-sm group-hover:text-blue-700 transition-colors flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-neutral-600" />
                      <span>{repo.name}</span>
                    </span>
                    <span className="text-[10px] bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200 text-neutral-700">
                      {repo.badge}
                    </span>
                  </div>

                  <p className="text-[11px] text-neutral-600 font-sans leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <span className="font-bold text-neutral-800">{repo.stars}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Curated Research & Domain Forks */}
        <div className="bg-[#f0ede4] p-5 rounded-xs border border-neutral-300 space-y-3 font-mono text-xs">
          <span className="font-bold text-neutral-900 uppercase text-[11px] block">
            CURATED RESEARCH FORKS & REPOSITORIES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {openSourceData.curatedResearch.map((item, idx) => (
              <div key={idx} className="bg-white/80 p-3 rounded border border-neutral-300 space-y-1">
                <span className="font-bold text-neutral-900 text-xs block">{item.name}</span>
                <span className="text-[9px] px-1 bg-neutral-200 rounded text-neutral-700">{item.tag}</span>
                <p className="text-[10px] text-neutral-600 mt-1 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
