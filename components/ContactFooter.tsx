'use client';

import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  Send,
  CheckCircle,
  Terminal,
  Cpu,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { TapeElement, StampSeal } from './ScrapbookArtifacts';

interface ContactFooterProps {
  onOpenResume: () => void;
}

export function ContactFooter({ onOpenResume }: ContactFooterProps) {
  const [message, setMessage] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [sentStatus, setSentStatus] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    setSentStatus(true);
    setTimeout(() => {
      // Form mailto trigger
      window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=Project%20Collaboration%20with%20Narain&body=${encodeURIComponent(
        `From: ${senderEmail}\n\n${message}`
      )}`;
    }, 600);
  };

  return (
    <footer id="contact-section" className="w-full bg-[#121316] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-2 border-neutral-900 font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto space-y-12 select-text">
        {/* Contact Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Dramatic Big Text & Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] text-yellow-400 font-bold uppercase tracking-widest block">
                SECTION 11 // CONTACT & DISPATCH
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white font-sans leading-[0.95]">
                LET’S BUILD<br />
                <span className="text-blue-400">SOMETHING</span><br />
                AMBIGUOUS.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed max-w-xl">
              Got an ambitious systems problem? Building something experimental in AI, Edge CV, or Space? Let’s connect and make it real.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xs transition-colors shadow-md text-xs font-mono"
              >
                <Mail className="w-4 h-4" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </a>

              <a
                href="https://github.com/narain-karti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white rounded-xs transition-colors text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/narain-karti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-white rounded-xs transition-colors text-xs font-mono"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 bg-white text-neutral-950 font-bold rounded-xs hover:bg-neutral-100 transition-colors text-xs font-mono"
              >
                <FileText className="w-4 h-4" />
                <span>Resume Dossier</span>
              </button>
            </div>
          </div>

          {/* Right: Quick Interactive Dispatch Terminal (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-700 p-5 rounded-xs space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 text-[11px] text-neutral-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-bold text-white">DIRECT INBOX DISPATCH</span>
              </div>
              <span className="text-emerald-400">READY</span>
            </div>

            {sentStatus ? (
              <div className="p-6 text-center space-y-2 bg-emerald-950/40 rounded border border-emerald-800">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-sm font-bold text-white">Message Prepared</p>
                <p className="text-[11px] text-neutral-300">
                  Opening mail client to complete direct dispatch to Narain Karti.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-3 text-xs font-mono">
                <div>
                  <label className="text-[10px] text-neutral-400 block mb-1">YOUR EMAIL OR CALLSIGN</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. founder@company.com"
                    className="w-full bg-black/60 border border-neutral-700 px-3 py-2 rounded text-white text-xs outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 block mb-1">MESSAGE / AMBITIOUS PROBLEM</label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me what you're building or what problem needs solving..."
                    className="w-full bg-black/60 border border-neutral-700 px-3 py-2 rounded text-white text-xs outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-yellow-400 hover:bg-yellow-300 text-neutral-950 font-bold rounded flex items-center justify-center gap-2 text-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom System Metadata & Copyright */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-mono">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-white">NARAIN KARTI</span>
            <span>·</span>
            <span>AI / ML × DATA SCIENCE × SYSTEMS × SPACE</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-neutral-500">“Built with curiosity. Designed with intention.”</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded transition-colors"
              title="Return to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="text-center text-[10px] text-neutral-600 font-mono border-t border-neutral-900 pt-3">
          NARAIN.OS · STATUS: ONLINE · VERSION: 2026.08.30 · VERIFIED ARTIFACT
        </div>
      </div>
    </footer>
  );
}
