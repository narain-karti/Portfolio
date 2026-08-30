'use client';

import React from 'react';
import {
  Clock,
  Terminal,
  Activity,
  CheckCircle,
  GitCommit,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { TapeElement, StampSeal } from './ScrapbookArtifacts';

interface BuildLogSectionProps {
  onSelectProjectRef?: (projectRef: string) => void;
}

export function BuildLogSection({ onSelectProjectRef }: BuildLogSectionProps) {
  return (
    <section id="buildlog-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-300 paper-grid">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-neutral-900 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <Clock className="w-4 h-4 text-blue-700" />
              <span>SECTION 10 // CHRONOLOGICAL FIELD LOGS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight">
              BUILD LOG
            </h2>
            <p className="text-sm sm:text-base font-mono text-neutral-600 max-w-2xl">
              “Continuous engineering momentum, system checkpoints, and release notes.”
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-500 bg-white p-2.5 border border-neutral-300 rounded-xs self-start md:self-auto">
            <span>CHRONOLOGY: </span>
            <strong className="text-neutral-900">VERIFIED ENGINEERING MILESTONES</strong>
          </div>
        </div>

        {/* Timeline Log Grid */}
        <div className="bg-[#faf8f3] border-2 border-neutral-900 p-6 sm:p-8 rounded-xs shadow-[5px_5px_0px_#121316] relative space-y-6 font-mono text-xs">
          <div className="absolute -top-3 right-10">
            <TapeElement variant="masking" angle={-1} width="w-24" />
          </div>

          <div className="space-y-6">
            {PORTFOLIO_DATA.buildLog.map((log, idx) => (
              <div
                key={log.id}
                className="relative pl-6 sm:pl-8 border-l-2 border-neutral-900 space-y-1.5"
              >
                {/* Timeline node dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-neutral-950 border-2 border-yellow-300 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-neutral-950">{log.date}</span>
                    <span className="text-neutral-400">·</span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-900 font-bold rounded-xs border border-blue-300">
                      {log.tag}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 bg-white px-2 py-0.5 border rounded">
                    SYS_STATE: {log.systemState}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-base text-neutral-950">
                  {log.title}
                </h3>

                <p className="text-xs text-neutral-700 font-sans leading-relaxed">
                  {log.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
