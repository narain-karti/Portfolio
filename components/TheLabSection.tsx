'use client';

import React, { useState } from 'react';
import {
  FlaskConical,
  Sparkles,
  ChevronRight,
  Filter,
  CheckCircle,
  Clock,
  Activity,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DATA, LabExperiment } from '@/lib/portfolio-data';
import { TapeElement, StickyNote, StampSeal } from './ScrapbookArtifacts';

export function TheLabSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeExp, setActiveExp] = useState<LabExperiment | null>(null);

  const categories = ['ALL', 'VISION', 'AI/ML', 'AGENTS', 'SYSTEMS', 'SPACE'];

  const filteredExperiments = PORTFOLIO_DATA.labExperiments.filter((exp) => {
    if (selectedCategory === 'ALL') return true;
    return exp.category === selectedCategory;
  });

  return (
    <section id="lab-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f1e8] border-b border-neutral-300 paper-grid">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-neutral-900 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <FlaskConical className="w-4 h-4 text-emerald-700" />
              <span>SECTION 04 // EXPERIMENTAL LOGS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight">
              THE LAB
            </h2>
            <p className="text-sm sm:text-base font-mono text-neutral-600 max-w-2xl">
              “Experiments, prototypes, rabbit holes and things that started as ‘what if?’”
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xs border transition-all ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white font-bold border-neutral-900'
                    : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sticky Notes & Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredExperiments.map((exp, idx) => (
            <StickyNote
              key={exp.id}
              color={exp.color}
              rotate={exp.rotation}
              className="space-y-3 font-mono"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-black/10 pb-2 text-[11px]">
                <span className="font-bold text-neutral-900 bg-black/5 px-2 py-0.5 rounded-xs">
                  {exp.code}
                </span>
                <span className="text-neutral-500">{exp.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-base text-neutral-950 leading-snug">
                {exp.title}
              </h3>

              {/* Hypothesis */}
              <div className="space-y-1 text-xs text-neutral-800">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                  HYPOTHESIS:
                </span>
                <p className="text-[11px] leading-relaxed bg-black/5 p-2 rounded-xs">
                  {exp.hypothesis}
                </p>
              </div>

              {/* Result & Takeaway */}
              <div className="space-y-1 text-xs text-neutral-800">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                  VERIFIED RESULT:
                </span>
                <p className="text-[11px] text-neutral-900 font-semibold">
                  {exp.result}
                </p>
              </div>

              {/* Status Stamp */}
              <div className="pt-2 border-t border-black/10 flex items-center justify-between">
                <StampSeal
                  text={exp.status}
                  variant={exp.status === 'VALIDATED' ? 'emerald' : 'blue'}
                  rotate={-1}
                  className="text-[9px]"
                />
                <span className="text-[10px] text-neutral-500 italic">
                  {exp.category}
                </span>
              </div>
            </StickyNote>
          ))}
        </div>
      </div>
    </section>
  );
}
