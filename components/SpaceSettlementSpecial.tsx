'use client';

import React from 'react';
import {
  Compass,
  RotateCw,
  Sun,
  Shield,
  Award,
  Globe,
  Radio,
  FileText,
  Activity,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { TapeElement, StampSeal } from './ScrapbookArtifacts';
import { SpaceSettlementSimulator } from './ProjectSimulators';

interface SpaceSettlementSpecialProps {
  onOpenCaseStudy: () => void;
}

export function SpaceSettlementSpecial({ onOpenCaseStudy }: SpaceSettlementSpecialProps) {
  return (
    <section id="space-section" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#09111e] text-slate-100 border-b border-blue-950 blueprint-grid relative overflow-hidden">
      {/* Blueprint Grid Coordinates watermark */}
      <div className="absolute top-4 right-6 font-mono text-[10px] text-cyan-500/60 hidden md:block">
        <p>MISSION DOSSIER: NSS-NASA-A09</p>
        <p>ORBITAL REGIME: EARTH-MOON L5 LAGRANGIAN</p>
        <p>POPULATION TARGET: 10,000 CITIZENS</p>
      </div>

      <div className="max-w-7xl mx-auto space-y-10">
        {/* Dossier Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-500/30 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
              <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>SPECIAL DOSSIER // NASA SPACE SETTLEMENT DESIGN CONTEST</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              BEYOND EARTH
            </h2>
            <p className="text-sm sm:text-base font-mono text-cyan-200/80 max-w-2xl">
              Closed-Loop Orbital Habitat & Life-Support Engineering Blueprint
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <StampSeal text="NASA_ZONAL_AWARD" variant="gold" rotate={-2} />
            <button
              type="button"
              onClick={onOpenCaseStudy}
              className="px-4 py-2 bg-cyan-500 text-slate-950 font-mono text-xs font-bold rounded-xs hover:bg-cyan-400 transition-colors"
            >
              FULL 80-PAGE SPECS
            </button>
          </div>
        </div>

        {/* Blueprint Cutaway & Subsystems Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subsystem 01: Centrifugal Artificial Gravity */}
          <div className="bg-slate-900/80 p-5 rounded-xs border border-cyan-500/30 font-mono text-xs space-y-3 relative">
            <div className="flex items-center justify-between text-[11px] text-cyan-400 border-b border-slate-800 pb-2">
              <span className="font-bold flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5" />
                <span>01 // ARTIFICIAL GRAVITY KINETICS</span>
              </span>
              <span>1.0g EQUIVALENT</span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed font-sans">
              To eliminate physiological bone demineralization and vestibular vertigo without exceeding human Coriolis tolerances (ω ≤ 2.0 RPM), the torus radius is mathematically fixed at:
            </p>

            <div className="bg-slate-950 p-3 rounded border border-cyan-900 text-center text-cyan-300 font-bold text-sm">
              {'R = 224 m  at  ω = 2.0 RPM  ⟹  a = 9.81 m/s² (1.0g)'}
            </div>

            <div className="space-y-1 text-[11px] text-slate-400">
              <div>▪ Rim Velocity: 46.9 m/s</div>
              <div>▪ Tension Load on Composite Spokes: 1.4 GPa</div>
              <div>▪ Atmosphere: 78% N2 / 21% O2 at 101.3 kPa</div>
            </div>
          </div>

          {/* Subsystem 02: Closed-Loop Life Support (CELSS) */}
          <div className="bg-slate-900/80 p-5 rounded-xs border border-cyan-500/30 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[11px] text-cyan-400 border-b border-slate-800 pb-2">
              <span className="font-bold flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5" />
                <span>02 // CELSS LIFE-SUPPORT LOOP</span>
              </span>
              <span className="text-emerald-400">99.7% RECOVERY</span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed font-sans">
              Continuous biological oxygen and food production powered by high-density Chlorella vulgaris photobioreactors paired with multi-tier vertical aeroponic agriculture.
            </p>

            <div className="bg-slate-950 p-2.5 rounded border border-cyan-900 text-[11px] space-y-1 text-slate-300">
              <div className="text-emerald-400 font-bold">Bioreactor Oxygen Yield:</div>
              <div>0.84 kg O2 / m³ / day per photobioreactor bank.</div>
              <div className="text-cyan-400 font-bold pt-1">Water Reclamation:</div>
              <div>Supercritical Water Oxidation (SCWO) + Triple Reverse Osmosis.</div>
            </div>
          </div>

          {/* Subsystem 03: Lunar ISRU & Civilization OS */}
          <div className="bg-slate-900/80 p-5 rounded-xs border border-cyan-500/30 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[11px] text-cyan-400 border-b border-slate-800 pb-2">
              <span className="font-bold flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>03 // ISRU LOGISTICS & GOVERNANCE</span>
              </span>
              <span>L5 NODE</span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed font-sans">
              Raw materials launched from lunar south polar craters via electromagnetic mass drivers. 5-meter lunar regolith outer shell provides passive radiation defense.
            </p>

            <div className="bg-slate-950 p-2.5 rounded border border-cyan-900 text-[11px] space-y-1 text-slate-300">
              <div>▪ Lunar Ice Mining: Shackleton Crater extraction</div>
              <div>▪ Radiation Shielding: 500 g/cm² passive regolith</div>
              <div>▪ Governance: Decentralized cryptographic resource ledger</div>
            </div>
          </div>
        </div>

        {/* Live Interactive Rotational Simulator */}
        <div className="space-y-3">
          <div className="font-mono text-xs text-cyan-400 font-bold uppercase">
            LIVE KINETIC PARAMETER CALCULATOR
          </div>
          <SpaceSettlementSimulator />
        </div>
      </div>
    </section>
  );
}
