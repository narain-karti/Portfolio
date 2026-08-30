'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, ZoomOut, RotateCcw, Sparkles, Move } from 'lucide-react';

export function PlaygroundExactSection() {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleZoomIn = () => setZoomLevel((z) => Math.min(130, z + 10));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(70, z - 10));
  const handleResetZoom = () => setZoomLevel(100);

  return (
    <section id="playground-view" className="relative w-full py-12 sm:py-16 px-4 sm:px-6 notebook-ruled-bg border-b border-black/10 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header: Handwritten 'playground' + Block 'JUST FOR FUN' */}
        <div className="text-center mb-8 relative">
          <span className="font-handwriting text-2xl sm:text-3xl text-neutral-900 font-bold block -mb-2">
            playground
          </span>
          <h2 className="font-pixel text-4xl sm:text-5xl md:text-6xl text-black tracking-tight">
            JUST FOR FUN
          </h2>
        </div>

        {/* Moodboard Frame / Canvas Area */}
        <div className="relative w-full min-h-[560px] sm:min-h-[620px] bg-[#fdfbf7] rounded-xl border-2 border-black shadow-[6px_6px_0px_#000] p-4 sm:p-8 overflow-hidden transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
        >
          {/* Subtle grid on canvas */}
          <div className="absolute inset-0 paper-grid opacity-60 pointer-events-none" />

          {/* ITEM 1: Top-Left Polaroid "random shot" */}
          <div 
            onClick={() => setActiveItem('gallery')}
            className="absolute top-4 left-4 sm:left-12 w-40 sm:w-48 polaroid-card -rotate-3 z-10 cursor-pointer hover:z-30 hover:rotate-0 transition-all duration-200"
          >
            {/* White washi tape on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/80 border-x border-dashed border-black/20 shadow-2xs rotate-2" />
            <div className="relative w-full h-44 sm:h-52 bg-neutral-900 rounded-xs overflow-hidden mb-2">
              <Image
                src="https://picsum.photos/seed/museum-shot-dark/400/500"
                alt="Random Shot"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-handwriting text-neutral-800">
              <span>random shot</span>
              <span className="text-[10px] font-spacemono text-neutral-500">#04</span>
            </div>
          </div>

          {/* ITEM 2: Retro Macintosh Classic with "hello" CRT Screen */}
          <div 
            onClick={() => setActiveItem('mac')}
            className="absolute top-8 left-1/2 -translate-x-1/2 w-48 sm:w-56 bg-[#e2ded5] p-3 sm:p-4 rounded-xl border-2 border-neutral-800 shadow-xl z-20 cursor-pointer hover:scale-105 transition-all duration-200"
          >
            {/* White washi tape */}
            <div className="absolute -top-3 right-6 w-14 h-4 bg-white/70 border-x border-dashed border-black/20 shadow-2xs rotate-12" />
            {/* Mac CRT Bezel */}
            <div className="bg-[#242b35] p-3 rounded-lg border border-black/40 shadow-inner flex flex-col items-center justify-center h-32 sm:h-36 relative overflow-hidden">
              {/* Scanlines */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent bg-size-[100%_4px] pointer-events-none" />
              <span className="font-handwriting text-3xl sm:text-4xl text-cyan-300 tracking-wider animate-pulse">
                hello.
              </span>
              <span className="text-[9px] font-spacemono text-cyan-400/80 mt-2">
                Macintosh 1984 OS
              </span>
            </div>
            {/* Disk slot and logo */}
            <div className="flex items-center justify-between mt-2.5 px-1">
              <div className="w-16 h-1.5 bg-neutral-800 rounded-xs" />
              <div className="w-2.5 h-2.5 rounded-full bg-linear-to-tr from-rose-400 via-amber-300 to-emerald-400" />
            </div>
          </div>

          {/* ITEM 3: Top-Right Polaroid "first trim" (Architecture) */}
          <div 
            onClick={() => setActiveItem('arch')}
            className="absolute top-6 right-4 sm:right-12 w-40 sm:w-48 polaroid-card rotate-4 z-10 cursor-pointer hover:z-30 hover:rotate-0 transition-all duration-200"
          >
            {/* White washi tape */}
            <div className="absolute -top-3 right-6 w-14 h-4 bg-white/80 border-x border-dashed border-black/20 shadow-2xs -rotate-6" />
            <div className="relative w-full h-44 sm:h-52 bg-neutral-200 rounded-xs overflow-hidden mb-2">
              <Image
                src="https://picsum.photos/seed/arch-sculpture/400/500"
                alt="First Trim"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-handwriting text-neutral-800">
              <span>first trim</span>
              <span className="text-[10px] font-spacemono text-neutral-500">#09</span>
            </div>
          </div>

          {/* ITEM 4: 3D Art & Accessories / Gadgets (Bottom Right) */}
          <div 
            onClick={() => setActiveItem('gadgets')}
            className="absolute bottom-6 right-8 sm:right-24 w-44 sm:w-52 polaroid-card -rotate-2 z-15 cursor-pointer hover:z-30 hover:rotate-0 transition-all duration-200"
          >
            <div className="relative w-full h-36 sm:h-44 bg-neutral-900 rounded-xs overflow-hidden mb-2">
              <Image
                src="https://picsum.photos/seed/phone-accessories/400/400"
                alt="Gadgets"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-handwriting text-neutral-800">
              <span>hardware lab</span>
              <span className="text-[10px] font-spacemono text-neutral-500">Jetson Orin</span>
            </div>
          </div>

          {/* ITEM 5: Bottom Left Book / Magazine Polaroid */}
          <div 
            onClick={() => setActiveItem('reading')}
            className="absolute bottom-6 left-6 sm:left-16 w-36 sm:w-44 polaroid-card rotate-3 z-15 cursor-pointer hover:z-30 hover:rotate-0 transition-all duration-200"
          >
            <div className="relative w-full h-36 sm:h-40 bg-neutral-100 rounded-xs overflow-hidden mb-2">
              <Image
                src="https://picsum.photos/seed/art-catalog/400/400"
                alt="Book"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-handwriting text-neutral-800">
              <span>research notes</span>
              <span className="text-[10px] font-spacemono text-neutral-500">RL &bull; Polars</span>
            </div>
          </div>

          {/* FLOATING STICKER PILLS & LABELS MATCHING THE DESIGN */}
          {/* 1. hello world (Blue pill) */}
          <div className="absolute top-20 left-1/4 -rotate-6 z-25 bg-[#93c5fd] text-blue-950 font-spacemono text-xs font-bold px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer hover:scale-110 transition-transform">
            hello world
          </div>

          {/* 2. pixel dream (Mint pill) */}
          <div className="absolute top-36 right-1/3 rotate-6 z-25 bg-[#86efac] text-emerald-950 font-spacemono text-xs font-bold px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer hover:scale-110 transition-transform">
            pixel dream
          </div>

          {/* 3. found (Cyan badge) */}
          <div className="absolute bottom-36 left-1/3 -rotate-12 z-25 bg-[#67e8f9] text-cyan-950 font-spacemono text-[11px] font-bold px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer hover:scale-110 transition-transform">
            SUMO sim
          </div>

          {/* 4. front end (Yellow tag) */}
          <div className="absolute top-16 right-1/4 rotate-12 z-25 bg-[#fef08a] text-amber-950 font-spacemono text-[11px] font-bold px-3 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer hover:scale-110 transition-transform">
            fastify
          </div>

          {/* 5. what is this (Purple pill) */}
          <div className="absolute bottom-28 right-1/3 rotate-3 z-25 bg-[#f0abfc] text-fuchsia-950 font-spacemono text-xs font-bold px-3 py-1 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer hover:scale-110 transition-transform">
            open source
          </div>

          {/* 6. Abstract Generative Cube in Center-Bottom */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-28 sm:h-36 bg-linear-to-tr from-purple-600 via-rose-500 to-amber-400 p-1 rounded-lg shadow-lg rotate-6 z-15 border-2 border-black">
            <div className="w-full h-full bg-neutral-900 rounded flex flex-col items-center justify-center text-center p-2 text-white">
              <Sparkles className="w-6 h-6 text-yellow-300 mb-1 animate-spin-slow" />
              <span className="text-[10px] font-spacemono">GEN_SYS_26</span>
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT ZOOM CONTROLS */}
        <div className="w-full flex items-center justify-between mt-4 px-2">
          <div className="text-xs font-typewriter text-neutral-700 flex items-center gap-2 font-semibold">
            <Move className="w-3.5 h-3.5" />
            <span>Interactive Scrapboard &bull; Click any artifact to inspect</span>
          </div>

          <div className="flex items-center gap-1 bg-white border-2 border-black rounded-full p-1 shadow-[2px_2px_0px_#000]">
            <button
              type="button"
              onClick={handleZoomOut}
              className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-800"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="px-2 text-[11px] font-spacemono font-bold text-neutral-950"
              title="Reset Zoom"
            >
              {zoomLevel}%
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-800"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
