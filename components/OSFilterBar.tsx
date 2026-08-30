'use client';

import React from 'react';
import { Layers, Bot, Cpu, Database, Rocket, Shield, GitBranch, Briefcase } from 'lucide-react';

interface OSFilterBarProps {
  activeModule: string;
  onSelectModule: (moduleId: string) => void;
  filteredCount?: number;
}

export function OSFilterBar({
  activeModule,
  onSelectModule,
  filteredCount,
}: OSFilterBarProps) {
  const modules = [
    { id: 'ALL', label: '00_ALL_MODULES', icon: Layers, color: 'hover:border-neutral-900' },
    { id: 'AI_ML', label: '01_AI/ML', icon: Cpu, color: 'hover:border-blue-600' },
    { id: 'AGENTS', label: '02_AGENTS', icon: Bot, color: 'hover:border-indigo-600' },
    { id: 'DATA', label: '03_DATA_SCIENCE', icon: Database, color: 'hover:border-emerald-600' },
    { id: 'SPACE', label: '04_SPACE_SYSTEMS', icon: Rocket, color: 'hover:border-purple-600' },
    { id: 'STARTUP', label: '05_STARTUP_FOUNDER', icon: Briefcase, color: 'hover:border-amber-600' },
    { id: 'OPEN_SOURCE', label: '06_OPEN_SOURCE', icon: GitBranch, color: 'hover:border-teal-600' },
  ];

  return (
    <div className="w-full bg-[#f2efe7] border-y border-neutral-300/80 px-3 sm:px-6 py-2.5 shadow-2xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        {/* Module Label & Mode */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-600 shrink-0">
          <span className="w-2 h-2 rounded-xs bg-neutral-800" />
          <span className="font-bold text-neutral-900 tracking-wider">NARAIN.OS FILTER MATRIX:</span>
          <span className="text-[11px] px-1.5 py-0.5 bg-white/70 border border-neutral-300 rounded text-neutral-700">
            {activeModule === 'ALL' ? 'GLOBAL VIEW' : `FILTER: ${activeModule}`}
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none font-mono text-[11px]">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                id={`filter-${mod.id.toLowerCase()}`}
                type="button"
                onClick={() => onSelectModule(mod.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm border whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs scale-102 font-bold'
                    : 'bg-white/75 text-neutral-700 border-neutral-300 hover:bg-white hover:text-neutral-950'
                }`}
              >
                <Icon className={`w-3 h-3 ${isActive ? 'text-amber-300' : 'text-neutral-500'}`} />
                <span>{mod.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
