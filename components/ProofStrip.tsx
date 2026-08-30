'use client';

import React, { useState } from 'react';
import {
  Award,
  Trophy,
  Rocket,
  Zap,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { StampSeal } from './ScrapbookArtifacts';

interface ProofStripProps {
  onSelectProject: (projectId: string) => void;
}

export function ProofStrip({ onSelectProject }: ProofStripProps) {
  const [selectedProofIndex, setSelectedProofIndex] = useState<number | null>(null);

  const proofItems = [
    {
      id: 'brave',
      title: 'BRAVE Startups National Winner',
      tagline: 'Winner · Best Innovation & People’s Choice Awards',
      stat: 'NATIONAL 1ST',
      highlight: '₹7L+ Revenue in 3 Mo',
      projectRef: 'axoweb',
      story: 'Secured 1st place nationwide in the BRAVE Startups competition with Axoweb Technologies. Delivered end-to-end commercial solutions including a 3-app car-wash platform and AWS enterprise grievance system.',
      stamp: 'BRAVE_1ST_PLACE',
      color: 'border-amber-400 bg-amber-50/70',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    {
      id: 'openai',
      title: 'OpenAI Academy × NxtWave',
      tagline: 'National Runner-Up · GenAI Buildathon',
      stat: '₹3,00,000 PRIZE',
      highlight: 'Project K Edge Traffic Platform',
      projectRef: 'project-k',
      story: 'Awarded ₹3 Lakh cash grant for architecting Project K—an edge AI traffic optimization engine running real-time YOLOv8 accident detection and adaptive multi-agent signal balancing on NVIDIA Jetson hardware.',
      stamp: '3L_CASH_GRANT',
      color: 'border-blue-400 bg-blue-50/70',
      tagColor: 'bg-blue-100 text-blue-900 border-blue-300',
    },
    {
      id: 'nasa',
      title: 'NASA Space Settlement Contest',
      tagline: 'Zonal Award Winner · Beyond Earth',
      stat: 'NASA ZONAL',
      highlight: 'Orbital Closed-Loop Habitat',
      projectRef: 'beyond-earth',
      story: 'Laureate in the NASA Space Settlement Design Contest for authoring an 80-page engineering dossier covering rotational artificial gravity kinetics (2.0 RPM torus), closed-loop algal life support (CELSS), and lunar ISRU logistics.',
      stamp: 'NASA_LAUREATE',
      color: 'border-purple-400 bg-purple-50/70',
      tagColor: 'bg-purple-100 text-purple-900 border-purple-300',
    },
    {
      id: 'takeover',
      title: 'TakeOver’26 National Hackathon',
      tagline: 'Top Rank Winner · Quorum Multi-Agent',
      stat: 'TOP RANK',
      highlight: 'Autonomous C-Suite Board',
      projectRef: 'quorum',
      story: 'Engineered Quorum: an autonomous multi-agent board of directors simulating dialectic debates (CEO, CFO, CMO, CTO, Contrarian) rendered in real-time ReactFlow graph interfaces.',
      stamp: 'TAKEOVER_WINNER',
      color: 'border-emerald-400 bg-emerald-50/70',
      tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
    {
      id: 'hackathons',
      title: '5+ Hackathon Victories',
      tagline: 'Including 3 National-Level Titles',
      stat: '3× NATIONAL WINS',
      highlight: 'Rapid Production Prototypes',
      projectRef: 'project-k',
      story: 'Demonstrated consistent championship track record across national circuits, translating complex distributed architectures into winning production code within 24–48 hours.',
      stamp: 'CHAMPION_RECORD',
      color: 'border-rose-400 bg-rose-50/70',
      tagColor: 'bg-rose-100 text-rose-900 border-rose-300',
    },
    {
      id: 'degrees',
      title: 'Dual Degree Academic Foundation',
      tagline: 'IIT Madras (BS DS) + NxtWave IAT (B.Tech AI)',
      stat: 'DUAL TRACK',
      highlight: 'Math Rigor + Production Systems',
      projectRef: 'about-section',
      story: 'Pursuing concurrent degrees: B.S. Data Science & Applications at IIT Madras (statistical learning & computing foundations) and B.Tech CSE (AI/ML) at NxtWave IAT.',
      stamp: 'IITM_ACADEMIC_PROOF',
      color: 'border-neutral-400 bg-white',
      tagColor: 'bg-neutral-100 text-neutral-900 border-neutral-300',
    },
  ];

  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-[#f5f2e9] border-b border-neutral-300">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-neutral-900" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900">
              HIGH-SIGNAL PROOF & VERIFIED RECEIPTS
            </h2>
            <span className="text-[11px] text-neutral-500 hidden md:inline">
              (Click any card to inspect evidence dossier)
            </span>
          </div>
          <span className="text-[11px] text-neutral-500 bg-white/70 px-2 py-0.5 border border-neutral-300 rounded-xs self-start sm:self-auto">
            6 VERIFIED ACADEMIC & INDUSTRY MILESTONES
          </span>
        </div>

        {/* Proof Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {proofItems.map((item, idx) => {
            const isSelected = selectedProofIndex === idx;
            return (
              <div
                key={item.id}
                id={`proof-card-${item.id}`}
                onClick={() => setSelectedProofIndex(isSelected ? null : idx)}
                className={`group relative p-4 rounded-xs border-2 transition-all cursor-pointer select-none ${
                  item.color
                } ${
                  isSelected
                    ? 'ring-2 ring-neutral-900 shadow-md translate-y-[-2px]'
                    : 'hover:border-neutral-800 hover:shadow-xs'
                }`}
              >
                {/* Header row with Stat Badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs border uppercase tracking-wider ${item.tagColor}`}>
                    {item.stat}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-neutral-400 transition-transform ${
                      isSelected ? 'rotate-90 text-neutral-900' : 'group-hover:translate-x-0.5'
                    }`}
                  />
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-sans font-bold text-sm sm:text-base text-neutral-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-neutral-600 mt-0.5">
                  {item.tagline}
                </p>

                {/* Expanded Proof Dossier View */}
                {isSelected && (
                  <div className="mt-3 pt-3 border-t border-neutral-300/80 font-mono text-xs text-neutral-800 space-y-2 animate-fadeIn">
                    <p className="text-[11px] leading-relaxed text-neutral-700">
                      {item.story}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <StampSeal text={item.stamp} variant="charcoal" rotate={-1} className="text-[9px]" />

                      {item.projectRef && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.projectRef === 'about-section') {
                              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              onSelectProject(item.projectRef);
                            }
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:underline"
                        >
                          <span>Inspect Project</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
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
