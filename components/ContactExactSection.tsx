'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Send, CheckCircle2, Copy, Sparkles, ExternalLink, Phone, Mail, Globe, Linkedin, Github } from 'lucide-react';

interface ContactExactSectionProps {
  nameMode?: string;
}

export function ContactExactSection({}: ContactExactSectionProps) {
  const [message, setMessage] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'studyusage2008@gmail.com';
  const directPhone = '+91-9176257316';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setMessage('');
      setEmailInput('');
    }, 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact-view" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 notebook-ruled-bg overflow-hidden select-none">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ========================================================= */}
        {/* PART 1: TRUSTED BY & "LET'S TALK"                         */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Handwritten: trusted by */}
          <div>
            <span className="font-handwriting text-2xl sm:text-3xl text-neutral-900 font-bold">
              collaborators &amp; platforms ✦
            </span>
          </div>

          {/* Logo Pill Badges matching the design */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: 'NxtWave', bg: 'bg-[#fed7aa]', text: 'text-amber-950' },
              { name: 'IIT Madras', bg: 'bg-[#fecdd3]', text: 'text-rose-950' },
              { name: 'OpenAI Academy', bg: 'bg-[#bae6fd]', text: 'text-blue-950' },
              { name: 'ThinkersCave', bg: 'bg-[#fef08a]', text: 'text-yellow-950' },
              { name: 'AXOWEB Tech', bg: 'bg-[#fed7aa]', text: 'text-orange-950' },
              { name: 'PyPI Community', bg: 'bg-[#a7f3d0]', text: 'text-emerald-950' },
            ].map((partner) => (
              <span
                key={partner.name}
                className={`${partner.bg} ${partner.text} font-spacemono font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000]`}
              >
                {partner.name}
              </span>
            ))}
          </div>

          {/* Big Yellow Smiley Face 🙂 Icon */}
          <div className="pt-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#fde047] border-3 border-black flex items-center justify-center shadow-[4px_4px_0px_#000] relative mx-auto hover:scale-105 transition-transform duration-200 cursor-pointer">
              {/* Eyes */}
              <div className="absolute top-8 left-6 w-3 h-3 bg-black rounded-full" />
              <div className="absolute top-8 right-6 w-3 h-3 bg-black rounded-full" />
              {/* Smile SVG */}
              <svg
                className="w-12 h-6 text-black mt-5"
                viewBox="0 0 40 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <path d="M 4 4 Q 20 22 36 4" />
              </svg>
            </div>
          </div>

          {/* Giant Block Pixel Title: LET'S TALK */}
          <div className="pt-2">
            <h2 className="font-pixel text-5xl sm:text-6xl md:text-7xl text-black tracking-tight">
              LET&apos;S TALK
            </h2>
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-neutral-800 font-typewriter mt-3 leading-relaxed">
              Got an engineering role, a startup project, or a distributed systems problem? Send it over—I respond to all inquiries.
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* PART 2: CONTACT SCRAPBOOK & MESSAGE NOTEPAD               */}
        {/* ========================================================= */}
        <div className="space-y-12">
          
          {/* Header with 'say hi' + Blue Vector Box around CONTACT */}
          <div className="flex flex-col items-center text-center">
            {/* Handwritten 'say hi' + Arrow */}
            <div className="flex flex-col items-center -mb-2">
              <span className="font-handwriting text-2xl text-neutral-900 font-bold">
                say hi
              </span>
              <svg
                className="w-6 h-6 text-neutral-800 -mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v14" />
                <path d="m7 12 5 5 5-5" />
              </svg>
            </div>

            {/* Blue Vector Selection Box around CONTACT */}
            <div className="vector-select-box bg-transparent px-8 py-2 relative">
              <div className="select-handle -top-1 -left-1" />
              <div className="select-handle -top-1 -right-1" />
              <div className="select-handle -bottom-1 -left-1" />
              <div className="select-handle -bottom-1 -right-1" />
              <h3 className="font-pixel text-4xl sm:text-5xl text-black tracking-tight">
                CONTACT
              </h3>
            </div>
          </div>

          {/* Three-Column Scrapbook Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Polaroid (Hardware & Systems) */}
            <div className="md:col-span-3 flex justify-center md:justify-start order-2 md:order-1">
              <div className="w-44 sm:w-48 polaroid-card -rotate-4 relative group">
                {/* White Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/80 border-x border-dashed border-black/20 shadow-2xs rotate-6 z-10" />
                
                <div className="relative w-full h-48 bg-neutral-900 rounded-xs overflow-hidden mb-2">
                  <Image
                    src="https://picsum.photos/seed/art-gallery-people/400/500"
                    alt="Lab Space"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center font-handwriting text-xs text-neutral-800 font-bold">
                  lab &bull; 2026
                </div>
              </div>
            </div>

            {/* Center Yellow Sticky Note Dispatcher Card */}
            <div className="md:col-span-6 bg-[#fef08a] p-6 sm:p-8 rounded-xl border-2 border-black shadow-[6px_6px_0px_#000] space-y-4 relative order-1 md:order-2">
              <p className="text-xs sm:text-sm font-spacemono font-bold text-neutral-950 leading-snug">
                GOT A PROJECT, A HARD PROBLEM, OR JUST WANT TO SAY HI? SEND IT OVER, I READ EVERY MESSAGE.
              </p>

              {submitted ? (
                <div className="bg-white/95 p-6 rounded-lg border-2 border-black text-center space-y-2 shadow-xs">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-spacemono font-bold text-sm text-neutral-950">MESSAGE DISPATCHED!</p>
                  <p className="text-xs text-neutral-800 font-typewriter">
                    Thanks for reaching out! I&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Your email address..."
                      className="w-full bg-white/95 px-3 py-2 text-xs font-spacemono border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me a story, or a project idea..."
                      className="w-full bg-white/95 px-3 py-2 text-xs font-typewriter border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-black text-white font-spacemono text-xs font-bold tracking-widest uppercase rounded border-2 border-black hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000]"
                  >
                    <span>SEND IT! &gt;&gt;</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Polaroid (Desk Items / Gadgets) */}
            <div className="md:col-span-3 flex justify-center md:justify-end order-3">
              <div className="w-44 sm:w-48 polaroid-card rotate-4 relative group">
                {/* White Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/80 border-x border-dashed border-black/20 shadow-2xs -rotate-6 z-10" />
                
                <div className="relative w-full h-48 bg-neutral-100 rounded-xs overflow-hidden mb-2">
                  <Image
                    src="https://picsum.photos/seed/gadgets-layout/400/500"
                    alt="Desk Gear"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center font-handwriting text-xs text-neutral-800 font-bold">
                  gear &amp; tools
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Footer Section */}
          <div className="pt-8 border-t-2 border-black/10 flex flex-col items-center text-center space-y-4">
            {/* Handwritten: Open to new work and good partners */}
            <p className="font-handwriting text-xl sm:text-2xl text-neutral-900 font-bold flex items-center gap-2">
              <span>✦</span>
              <span>Open to full-time roles, internships &amp; high-impact contracts</span>
            </p>

            {/* Email and Phone Contact Pill */}
            <div className="flex flex-wrap items-center justify-center gap-3 font-spacemono">
              <div 
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-black rounded-full text-xs font-bold text-neutral-950 cursor-pointer hover:bg-neutral-100 shadow-[2px_2px_0px_#000] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{directEmail}</span>
                {copiedEmail ? (
                  <span className="text-[10px] text-emerald-600 font-bold">COPIED!</span>
                ) : (
                  <Copy className="w-3 h-3 text-neutral-600" />
                )}
              </div>

              <a
                href={`tel:${directPhone}`}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#fef08a] border-2 border-black rounded-full text-xs font-bold text-neutral-950 hover:bg-[#fde047] shadow-[2px_2px_0px_#000] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{directPhone}</span>
              </a>
            </div>

            {/* Social Pill Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <a
                href="https://linkedin.com/in/narainkarti"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1 bg-white hover:bg-neutral-100 border-2 border-black text-black font-spacemono text-xs font-bold rounded-full shadow-[2px_2px_0px_#000] transition-all hover:scale-105 inline-flex items-center gap-1.5"
              >
                <Linkedin className="w-3 h-3 text-[#0A66C2]" />
                <span>LINKEDIN</span>
              </a>
              <a
                href="https://github.com/narain-karti"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1 bg-white hover:bg-neutral-100 border-2 border-black text-black font-spacemono text-xs font-bold rounded-full shadow-[2px_2px_0px_#000] transition-all hover:scale-105 inline-flex items-center gap-1.5"
              >
                <Github className="w-3 h-3" />
                <span>GITHUB</span>
              </a>
              <a
                href="mailto:studyusage2008@gmail.com"
                className="px-3.5 py-1 bg-white hover:bg-neutral-100 border-2 border-black text-black font-spacemono text-xs font-bold rounded-full shadow-[2px_2px_0px_#000] transition-all hover:scale-105 inline-flex items-center gap-1.5"
              >
                <Mail className="w-3 h-3" />
                <span>EMAIL</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

