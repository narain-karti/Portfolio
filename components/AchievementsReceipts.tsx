'use client';

import React from 'react';
import {
  Award,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Trophy,
  ShieldCheck,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA, AchievementReceipt } from '@/lib/portfolio-data';
import { TapeElement, StampSeal } from './ScrapbookArtifacts';

interface AchievementsReceiptsProps {
  onSelectProjectRef?: (projectRef: string) => void;
}

export function AchievementsReceipts({ onSelectProjectRef }: AchievementsReceiptsProps) {
  const triggerConfetti = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x, y },
      colors: ['#facc15', '#2563eb', '#059669', '#f43f5e', '#d97706'],
    });
  };

  return (
    <section id="achievements-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-300 paper-grid">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-neutral-900 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <Trophy className="w-4 h-4 text-amber-700" />
              <span>SECTION 08 // COMPETITION RECEIPTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight">
              THE RECEIPTS
            </h2>
            <p className="text-sm sm:text-base font-mono text-neutral-600 max-w-2xl">
              “Collected evidence, awards, and national competition victories.”
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-500 bg-white p-2.5 border border-neutral-300 rounded-xs self-start md:self-auto">
            <span>VERIFICATION STATUS: </span>
            <strong className="text-emerald-700 font-bold">100% DOCUMENTED EVIDENCE</strong>
          </div>
        </div>

        {/* Receipts Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.achievementsReceipts.map((receipt, idx) => (
            <div
              key={receipt.id}
              onClick={triggerConfetti}
              className="group relative bg-[#faf8f3] border-2 border-neutral-900 p-5 rounded-xs shadow-[4px_4px_0px_#121316] hover:shadow-[6px_6px_0px_#121316] hover:translate-y-[-2px] transition-all flex flex-col justify-between space-y-4 cursor-pointer select-none"
            >
              {/* Tape top right */}
              <div className="absolute -top-3 right-6">
                <TapeElement variant={idx % 2 === 0 ? 'yellow' : 'masking'} angle={idx % 2 === 0 ? 2 : -2} width="w-20" />
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2 text-[11px] text-neutral-500">
                  <span className="font-bold text-neutral-900">{receipt.year}</span>
                  <span className="px-1.5 py-0.5 bg-neutral-200 text-neutral-800 rounded font-bold">
                    {receipt.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-sans font-bold text-lg text-neutral-950 group-hover:text-blue-700 transition-colors">
                    {receipt.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-800 font-bold mt-0.5">
                    {receipt.award}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {receipt.organization}
                  </p>
                </div>

                <p className="text-xs text-neutral-700 font-sans leading-relaxed">
                  {receipt.evidenceStory}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                <StampSeal text={receipt.stampText} variant="charcoal" rotate={-2} className="text-[9px]" />

                {receipt.prize && (
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                    {receipt.prize}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
