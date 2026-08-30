'use client';

import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Github,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Wrench,
  CheckCircle,
  Layout,
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { StampSeal } from './ScrapbookArtifacts';
import { VisualResumePoster } from './VisualResumePoster';

import Image from 'next/image';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<'poster' | 'dossier'>('poster');

  if (!isOpen) return null;

  const { profile, experienceChapters, achievementsReceipts, skillsMatrix, featuredProjects } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-2 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn select-none">
      <div className="relative w-full max-w-4xl bg-white border-2 border-neutral-950 rounded-xs shadow-[8px_8px_0px_#121316] my-auto overflow-hidden font-sans select-text max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#ebe7dc] border-b border-neutral-300 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 shrink-0 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-bold text-neutral-900 ml-2 hidden sm:inline">
              NARAIN.OS // VERIFIED_RESUME_DOSSIER.PDF
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="inline-flex items-center p-0.5 bg-neutral-200/80 rounded-md border border-neutral-400 text-[11px] font-spacemono">
              <button
                type="button"
                onClick={() => setActiveTab('poster')}
                className={`px-2.5 py-1 rounded font-bold transition-all flex items-center gap-1 ${
                  activeTab === 'poster'
                    ? 'bg-[#1d4ed8] text-white shadow-xs'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                <Layout className="w-3 h-3" />
                <span>POSTER VIEW</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('dossier')}
                className={`px-2.5 py-1 rounded font-bold transition-all flex items-center gap-1 ${
                  activeTab === 'dossier'
                    ? 'bg-black text-white shadow-xs'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                <FileText className="w-3 h-3" />
                <span>DOSSIER</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-neutral-400 rounded-xs text-neutral-800 text-[11px] font-bold flex items-center gap-1"
            >
              <Printer className="w-3 h-3" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded bg-neutral-200 hover:bg-neutral-300 text-neutral-800"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 bg-neutral-100">
          {activeTab === 'poster' ? (
            <div className="p-2 sm:p-4 md:p-6">
              <VisualResumePoster onPrint={handlePrint} />
            </div>
          ) : (
            <div className="p-6 sm:p-8 md:p-10 space-y-6 text-neutral-900 bg-white">
              {/* Header Info */}
              <div className="border-b-2 border-neutral-900 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black shrink-0 bg-neutral-100 shadow-xs">
                    <Image
                      src="/images/hero_avatar.jpg"
                      alt="Narain Karti"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
                      NARAIN KARTI
                    </h1>
                    <p className="text-xs sm:text-sm font-mono text-blue-800 font-bold mt-0.5">
                      AI/ML Engineer · Systems Builder · Data Scientist
                    </p>
                    <p className="text-[11px] text-neutral-600 font-mono">
                      “I build intelligent systems for ambitious problems.”
                    </p>
                  </div>
                </div>

                <div className="font-mono text-xs text-neutral-700 space-y-1 text-left sm:text-right">
                  <div>Email: <a href={`mailto:${profile.email}`} className="text-blue-700 underline">{profile.email}</a></div>
                  <div>GitHub: <a href={profile.github} target="_blank" rel="noreferrer" className="text-blue-700 underline">github.com/narain-karti</a></div>
                  <div>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 underline">linkedin.com/in/narain-karti</a></div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 border-b pb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-neutral-900" />
                  <span>EDUCATION</span>
                </h2>

                <div className="space-y-3 font-mono text-xs">
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-1">
                      <div>
                        <div className="font-bold text-neutral-950 text-sm font-sans">{edu.institution}</div>
                        <div className="text-blue-800 font-bold">{edu.degree}</div>
                        <div className="text-neutral-600 font-sans text-[11px]">{edu.focus}</div>
                      </div>
                      <span className="text-neutral-500 text-[11px] shrink-0 font-bold">{edu.timeline}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-3">
                <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 border-b pb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>HONORS &amp; COMPETITION RECEIPTS</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                  {achievementsReceipts.map((ach) => (
                    <div key={ach.id} className="p-2.5 bg-[#faf8f3] border border-neutral-300 rounded-xs space-y-0.5">
                      <div className="font-bold text-neutral-950 font-sans">{ach.title}</div>
                      <div className="text-blue-800 font-bold text-[11px]">{ach.award}</div>
                      <div className="text-neutral-600 text-[10px]">{ach.prize}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 border-b pb-1 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-blue-700" />
                  <span>PROFESSIONAL &amp; FOUNDER EXPERIENCE</span>
                </h2>

                <div className="space-y-4 font-mono text-xs">
                  {experienceChapters.map((exp) => (
                    <div key={exp.id} className="space-y-1.5 pb-3 border-b border-neutral-200">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline">
                        <div className="font-bold text-neutral-950 font-sans text-sm">{exp.role} @ {exp.company}</div>
                        <span className="text-neutral-500 text-[11px] font-bold">{exp.period}</span>
                      </div>
                      <p className="text-neutral-700 font-sans text-xs">{exp.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#ebe7dc] border-t border-neutral-300 px-4 py-3 flex items-center justify-between shrink-0 font-mono text-xs">
          <span className="text-neutral-500 text-[11px]">VERIFIED DOSSIER · NARAIN KARTI</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1 bg-neutral-950 text-white font-bold rounded-xs hover:bg-neutral-800 text-[11px]"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
