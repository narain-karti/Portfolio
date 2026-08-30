'use client';

import React, { useState } from 'react';
import {
  Wrench,
  CheckCircle,
  ExternalLink,
  Code,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '@/lib/portfolio-data';
import { TapeElement } from './ScrapbookArtifacts';

interface SkillsMatrixProps {
  onSelectProjectName?: (projectName: string) => void;
}

export function SkillsMatrix({ onSelectProjectName }: SkillsMatrixProps) {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    appliedIn: string[];
    category: string;
  } | null>({
    name: 'Agentic AI & Multi-Agent Systems',
    level: 'Adversarial & collaborative agent orchestration',
    appliedIn: ['Quorum', 'Microdolphin', 'ThinkersCave', 'Privacy Browser Agent'],
    category: 'AI / ML & AGENTIC SYSTEMS',
  });

  return (
    <section id="skills-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f2efe7] border-b border-neutral-300 paper-grid">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-neutral-900 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <Wrench className="w-4 h-4 text-blue-700" />
              <span>SECTION 09 // CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight">
              INTERACTIVE SKILL MATRIX
            </h2>
            <p className="text-sm sm:text-base font-mono text-neutral-600 max-w-2xl">
              No fake progress bars. Click any technology to inspect where it was verified in real code.
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-500 bg-white p-2.5 border border-neutral-300 rounded-xs self-start md:self-auto">
            <span>PROVENANCE: </span>
            <strong className="text-neutral-900">LINKED TO REPOSITORIES & CHAPTERS</strong>
          </div>
        </div>

        {/* Interactive Capability Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Interactive Category Cards */}
          <div className="lg:col-span-8 space-y-6">
            {PORTFOLIO_DATA.skillsMatrix.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="bg-white p-5 rounded-xs border-2 border-neutral-900 shadow-[3px_3px_0px_#121316] space-y-3"
              >
                <div className="flex items-center justify-between border-b pb-2 font-mono text-xs">
                  <span className="font-bold text-neutral-950 uppercase tracking-wider">
                    {cat.category}
                  </span>
                  <span className="text-[10px] text-neutral-500">{cat.description}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  {cat.skills.map((sk) => {
                    const isSelected = selectedSkill?.name === sk.name;
                    return (
                      <button
                        key={sk.name}
                        type="button"
                        onClick={() =>
                          setSelectedSkill({
                            name: sk.name,
                            level: sk.levelDescription,
                            appliedIn: sk.appliedIn,
                            category: cat.category,
                          })
                        }
                        className={`px-3 py-1.5 rounded-xs border transition-all text-xs font-semibold ${
                          isSelected
                            ? 'bg-neutral-950 text-yellow-300 border-neutral-950 shadow-xs scale-102 font-bold'
                            : 'bg-[#faf8f3] text-neutral-800 border-neutral-300 hover:bg-neutral-200 hover:border-neutral-800'
                        }`}
                      >
                        {sk.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (4 cols): Sticky Provenance Dossier Box */}
          <div className="lg:col-span-4 sticky top-20">
            {selectedSkill ? (
              <div className="bg-[#faf8f3] border-2 border-neutral-900 p-5 rounded-xs shadow-[5px_5px_0px_#121316] relative space-y-4 font-mono text-xs">
                <div className="absolute -top-3 left-6">
                  <TapeElement variant="yellow" angle={-2} width="w-20" />
                </div>

                <div className="border-b pb-2">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold block">
                    INSPECTED CAPABILITY
                  </span>
                  <h3 className="font-sans font-bold text-lg text-neutral-950 mt-0.5">
                    {selectedSkill.name}
                  </h3>
                  <span className="text-[11px] text-blue-800 block mt-0.5">
                    {selectedSkill.level}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold block">
                    VERIFIED IN PROJECTS & CHAPTERS:
                  </span>
                  <div className="space-y-1.5">
                    {selectedSkill.appliedIn.map((proj, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-white p-2 rounded border border-neutral-300 flex items-center justify-between text-xs font-bold text-neutral-900"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          <span>{proj}</span>
                        </div>
                        <span className="text-[10px] text-neutral-400 font-mono">PROVEN</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-neutral-500 italic font-sans border-t border-neutral-200">
                  Every listed skill is backed by shipped code or research dossiers in this portfolio.
                </div>
              </div>
            ) : (
              <div className="p-6 bg-white border border-neutral-300 rounded font-mono text-xs text-neutral-500 text-center">
                Click any skill on the left to inspect real application provenance.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
