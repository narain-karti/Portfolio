'use client';

import React from 'react';

interface TapeElementProps {
  variant?: 'yellow' | 'clear' | 'masking' | 'blue' | 'pink';
  className?: string;
  angle?: number;
  width?: string;
}

export function TapeElement({
  variant = 'yellow',
  className = '',
  angle = -2,
  width = 'w-24',
}: TapeElementProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'clear':
        return 'bg-white/40 border border-black/10 backdrop-blur-[1px]';
      case 'masking':
        return 'bg-[#f4ebd0]/85 border-y border-[#d8caa4]/60 shadow-[0_1px_2px_rgba(0,0,0,0.06)]';
      case 'blue':
        return 'bg-blue-200/60 border border-blue-400/20 backdrop-blur-[1px]';
      case 'pink':
        return 'bg-pink-200/60 border border-pink-400/20 backdrop-blur-[1px]';
      case 'yellow':
      default:
        return 'bg-yellow-200/75 border-y border-yellow-400/30 shadow-[0_1px_3px_rgba(0,0,0,0.05)]';
    }
  };

  return (
    <div
      style={{ transform: `rotate(${angle}deg)` }}
      className={`h-5 ${width} ${getVariantStyles()} pointer-events-none z-20 transition-transform ${className}`}
    >
      {/* Tape serrated edge subtle illusion */}
      <div className="absolute -left-1 top-0 bottom-0 w-1 bg-transparent border-r border-dashed border-black/20" />
      <div className="absolute -right-1 top-0 bottom-0 w-1 bg-transparent border-l border-dashed border-black/20" />
    </div>
  );
}

interface StampSealProps {
  text: string;
  variant?: 'gold' | 'red' | 'blue' | 'emerald' | 'charcoal';
  className?: string;
  rotate?: number;
}

export function StampSeal({
  text,
  variant = 'red',
  className = '',
  rotate = -3,
}: StampSealProps) {
  const getColors = () => {
    switch (variant) {
      case 'gold':
        return 'text-amber-800 border-amber-800 bg-amber-50/50';
      case 'blue':
        return 'text-blue-800 border-blue-800 bg-blue-50/50';
      case 'emerald':
        return 'text-emerald-800 border-emerald-800 bg-emerald-50/50';
      case 'charcoal':
        return 'text-neutral-800 border-neutral-800 bg-neutral-100/50';
      case 'red':
      default:
        return 'text-rose-800 border-rose-800 bg-rose-50/50';
    }
  };

  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-widest font-extrabold uppercase border-2 rounded-sm select-none shadow-xs ${getColors()} ${className}`}
    >
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-75" />
      <span>{text}</span>
    </div>
  );
}

interface StickyNoteProps {
  children: React.ReactNode;
  color?: 'yellow' | 'green' | 'pink' | 'blue' | 'orange';
  rotate?: number;
  className?: string;
  tapeTop?: boolean;
}

export function StickyNote({
  children,
  color = 'yellow',
  rotate = 1,
  className = '',
  tapeTop = true,
}: StickyNoteProps) {
  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return 'bg-[#e6f9ed] text-emerald-950 border-emerald-300 shadow-[2px_3px_10px_rgba(5,150,105,0.12)]';
      case 'pink':
        return 'bg-[#fdebf3] text-pink-950 border-pink-300 shadow-[2px_3px_10px_rgba(244,63,94,0.12)]';
      case 'blue':
        return 'bg-[#e8f2fe] text-blue-950 border-blue-300 shadow-[2px_3px_10px_rgba(37,99,235,0.12)]';
      case 'orange':
        return 'bg-[#fff2e5] text-amber-950 border-amber-300 shadow-[2px_3px_10px_rgba(217,119,6,0.12)]';
      case 'yellow':
      default:
        return 'bg-[#fefbe8] text-yellow-950 border-yellow-300 shadow-[2px_3px_10px_rgba(202,138,4,0.12)]';
    }
  };

  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`relative p-4 border rounded-sm transition-transform hover:scale-[1.02] hover:rotate-0 hover:z-30 ${getColorClasses()} ${className}`}
    >
      {tapeTop && (
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
          <TapeElement variant="yellow" width="w-16" angle={-1} />
        </div>
      )}
      {children}
    </div>
  );
}
