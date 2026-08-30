'use client';

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  X,
  Search,
  ArrowRight,
  Sparkles,
  Briefcase,
  FileText,
  FlaskConical,
  Compass,
  GitBranch,
  Mail,
  Zap,
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/lib/portfolio-data';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onToggleRecruiterMode: () => void;
  onOpenResume: () => void;
}

export function CommandPaletteModal({
  isOpen,
  onClose,
  onSelectProject,
  onToggleRecruiterMode,
  onOpenResume,
}: CommandPaletteModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // handled in parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    {
      id: 'recruiter',
      label: 'Toggle Recruiter Mode (45s Executive Scan)',
      icon: Briefcase,
      action: () => {
        onToggleRecruiterMode();
        onClose();
      },
    },
    {
      id: 'resume',
      label: 'View Verified Resume Dossier',
      icon: FileText,
      action: () => {
        onOpenResume();
        onClose();
      },
    },
    {
      id: 'pypi',
      label: 'Open DataDoc CLI on PyPI (pip install datadoc-cli)',
      icon: Terminal,
      action: () => {
        window.open('https://pypi.org/project/datadoc-cli/', '_blank');
        onClose();
      },
    },
    {
      id: 'github',
      label: 'Open Public GitHub Profile (github/narain-karti)',
      icon: GitBranch,
      action: () => {
        window.open('https://github.com/narain-karti', '_blank');
        onClose();
      },
    },
    {
      id: 'space',
      label: 'Jump to NASA Space Settlement Dossier',
      icon: Compass,
      action: () => {
        document.getElementById('space-section')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'lab',
      label: 'Jump to The Lab (Research Experiments)',
      icon: FlaskConical,
      action: () => {
        document.getElementById('lab-section')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'contact',
      label: 'Jump to Contact / Dispatch Message',
      icon: Mail,
      action: () => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
  ];

  const filteredProjects = PORTFOLIO_DATA.featuredProjects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredActions = quickActions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 bg-black/75 backdrop-blur-xs p-4 animate-fadeIn select-none">
      <div className="relative w-full max-w-2xl bg-[#141518] text-white border-2 border-neutral-700 rounded-xs shadow-2xl overflow-hidden font-mono text-xs select-text">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800 bg-neutral-900/90">
          <Search className="w-4 h-4 text-neutral-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search project (e.g. project-k, datadoc, space, resume)..."
            className="w-full bg-transparent border-none outline-none text-white placeholder:text-neutral-500 font-mono text-xs"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-3 max-h-96 overflow-y-auto space-y-4">
          {/* Projects results */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase font-bold px-2 block">
                PROJECTS & CASE STUDIES
              </span>
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    onSelectProject(p);
                    onClose();
                  }}
                  className="w-full text-left p-2.5 rounded-xs hover:bg-neutral-800 flex items-center justify-between group transition-colors"
                >
                  <div>
                    <div className="font-bold text-white group-hover:text-yellow-300">
                      {p.number} {'//'} {p.title}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-sans">{p.subtitle}</div>
                  </div>
                  <span className="text-[10px] text-neutral-500 group-hover:text-white">
                    INSPECT →
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          {filteredActions.length > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase font-bold px-2 block">
                SYSTEM COMMANDS & ACTIONS
              </span>
              {filteredActions.map((act) => {
                const Icon = act.icon;
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={act.action}
                    className="w-full text-left p-2 rounded-xs hover:bg-neutral-800 flex items-center justify-between text-neutral-300 hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-3.5 h-3.5 text-blue-400" />
                      <span>{act.label}</span>
                    </div>
                    <span className="text-[10px] text-neutral-500">EXEC</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-neutral-950 px-4 py-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-500">
          <span>NARAIN.OS COMMAND DECK</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
