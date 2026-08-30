'use client';

import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechBrandIcon({ name, className = 'w-4 h-4', size = 18 }: TechIconProps) {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  // High quality authentic brand SVG icons
  switch (norm) {
    case 'python':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M11.9 1.2c-5.4 0-5.1 2.3-5.1 2.3l.01 2.4h5.2v.8H4.6S1.2 6.3 1.2 11.9c0 5.6 3 5.4 3 5.4h1.8v-2.5s-.1-3 3-3h5.1s2.9.1 2.9-2.8V4.1s.4-2.9-5.1-2.9zm-2.8 1.7a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/>
          <path d="M12.1 22.8c5.4 0 5.1-2.3 5.1-2.3l-.01-2.4h-5.2v-.8h7.4s3.4.4 3.4-5.2c0-5.6-3-5.4-3-5.4h-1.8v2.5s.1 3-3 3h-5.1s-2.9-.1-2.9 2.8v4.9s-.4 2.9 5.1 2.9zm2.8-1.7a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/>
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.75 14.5c-.35 1.7-1.7 2.5-3.3 2.5-2.2 0-3.45-1.5-3.45-3.8 0-2.4 1.35-3.8 3.5-3.8 1.6 0 2.8.8 3.2 2.3h-1.6c-.3-.8-.9-1.2-1.6-1.2-1.2 0-1.85 1-1.85 2.7 0 1.7.65 2.7 1.85 2.7.8 0 1.35-.45 1.65-1.4h1.6zm4.8 2.3h-1.7V11.2h-2.3V9.6h6.3v1.6h-2.3v5.6z" fill="#FFFFFF" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7.5 17.5c.8.5 1.8.8 2.8.8 1.9 0 3.1-.9 3.1-2.8v-6h-1.9v6c0 .8-.5 1.2-1.3 1.2-.5 0-1-.2-1.4-.4l-1.3 1.2zm8.5.1c1.1.6 2.3.9 3.5.9 2.5 0 3.9-1.2 3.9-3.2 0-1.8-1.1-2.6-2.8-3.3-.9-.4-1.5-.7-1.5-1.3 0-.5.4-.9 1.2-.9.7 0 1.5.3 2.1.7l1-1.4c-.9-.6-2-1-3.2-1-2.3 0-3.7 1.3-3.7 3.1 0 1.7 1.1 2.6 2.7 3.3.9.4 1.6.7 1.6 1.4 0 .6-.5 1-1.4 1-.9 0-1.9-.4-2.6-1l-1.1 1.4z" fill="#000000" />
        </svg>
      );

    case 'cpp':
    case 'c':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00599C" />
          <path d="M10.8 7.2C9.7 6.4 8.2 6.5 7.1 7.4 5.7 8.5 5 10.3 5.4 12c.4 1.8 1.8 3.1 3.5 3.3 1.4.1 2.8-.5 3.5-1.7l-1.6-1c-.4.7-1.1 1-1.8 1-.9 0-1.7-.7-1.9-1.6-.2-1 .3-2 1.2-2.4.7-.3 1.6-.2 2.2.3l1.3-1.7zm4.2 3.3v1h-1.2v1.5h1.2v1h1.5v-1h1.2v-1.5H16.5v-1H15zm4.8 0v1h-1.2v1.5h1.2v1h1.5v-1h1.2v-1.5h-1.2v-1h-1.5z" fill="#FFFFFF"/>
        </svg>
      );

    case 'react':
    case 'reactjs':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      );

    case 'nextjs':
    case 'next':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path d="M15.5 8.5v7h-1.8V9.8l-5.4 6.7H6.5v-8h1.8v5.5l5.2-6.5h2z" fill="#FFFFFF" />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#339933" />
          <path d="M12 4.4L5.2 8.3v7.8L12 20l6.8-3.9V8.3L12 4.4zm0 2.6l4.5 2.6v5.2L12 17.4l-4.5-2.6V9.6L12 7z" fill="#FFFFFF" />
        </svg>
      );

    case 'fastapi':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#059669" />
          <path d="M13 3L6 14h5l-2 7 9-12h-5l2-6z" fill="#FFFFFF" />
        </svg>
      );

    case 'pytorch':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M13.5 3.2L11 5.7c2.5 2.5 2.5 6.6 0 9.1-2.5 2.5-6.6 2.5-9.1 0L4.4 12.3c3.8 3.8 10 3.8 13.8 0 3.8-3.8 3.8-10 0-13.8l-4.7 4.7z" fill="#EE4C2C" />
          <circle cx="15.5" cy="5.5" r="1.5" fill="#EE4C2C" />
        </svg>
      );

    case 'tensorflow':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5l7.5 4.3v4.3L12 6.8l-7.5 4.3V6.8L12 2.5zm0 8.6l6 3.5-3 1.7-3-1.7V22l-3-1.7v-7.3l-3 1.7-3-1.7 6-3.5 3 1.7 3-1.7z" fill="#FF6F00" />
        </svg>
      );

    case 'opencv':
    case 'computervision':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="7" cy="7" r="4.5" fill="#FF0000" />
          <circle cx="17" cy="7" r="4.5" fill="#00FF00" />
          <circle cx="12" cy="16.5" r="4.5" fill="#0000FF" />
          <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
        </svg>
      );

    case 'yolov8':
    case 'yolo':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#111827" />
          <path d="M5 6h3v5h4V6h3v12h-3v-5H8v5H5V6z" fill="#10B981" />
        </svg>
      );

    case 'polars':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0284C7" />
          <path d="M6 18V6h5a4 4 0 010 8H8v4H6zm2-6h3a2 2 0 100-4H8v4zm7 6V6h2v12h-2z" fill="#FFFFFF" />
        </svg>
      );

    case 'langchain':
    case 'agenticai':
    case 'agentic':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#1C3C3C" />
          <path d="M6 9l6-4 6 4v6l-6 4-6-4V9z" stroke="#22C55E" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="3" fill="#22C55E" />
        </svg>
      );

    case 'huggingface':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10.5" fill="#FFD21E" />
          <circle cx="8.5" cy="10" r="1.5" fill="#000000" />
          <circle cx="15.5" cy="10" r="1.5" fill="#000000" />
          <path d="M8 14.5c1.2 1.8 4.8 1.8 8 0" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'docker':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M2.5 13.5c.8 3.5 4 6 8.5 6 7 0 10.5-4.5 10.5-8.5 0-.5 0-1-.2-1.5-1 0-2.5.5-3.5 1.5-.5-1.5-2-2.5-3.5-2.5H12V7H9V4H6v4.5H2.5v5z" fill="#2496ED" />
          <rect x="6" y="9.5" width="2" height="2" fill="#FFFFFF" />
          <rect x="9" y="9.5" width="2" height="2" fill="#FFFFFF" />
          <rect x="12" y="9.5" width="2" height="2" fill="#FFFFFF" />
          <rect x="9" y="6.5" width="2" height="2" fill="#FFFFFF" />
        </svg>
      );

    case 'kubernetes':
    case 'k8s':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#326CE5" />
          <path d="M12 4.5l6.5 3.8v7.4L12 19.5l-6.5-3.8V8.3L12 4.5zm0 2.5L7.5 9.5v5l4.5 2.5 4.5-2.5v-5L12 7z" fill="#FFFFFF" />
        </svg>
      );

    case 'aws':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#232F3E" />
          <path d="M6 14.5c2.5 1.8 6.5 2.5 11 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 13l2 2-2 1.5" fill="#FF9900" />
        </svg>
      );

    case 'azure':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M4 19h12.5l-6-15H4l4.5 9-4.5 6zm9 0h7l-5.5-12-3 5.5 3 6.5h-1.5z" fill="#0089D6" />
        </svg>
      );

    case 'nvidia':
    case 'jetson':
    case 'jetsonedge':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#76B900" />
          <path d="M7 8c2.5-1.5 5.5-1.5 8 0 2 1.2 3 3 3 5 0 2.8-2 5-5 5-2.2 0-4-1.2-4.8-3H14c.5.8 1.5 1.2 2.5 1.2 1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5c-1 0-2 .5-2.5 1.2H6.2C7 10 9 8.5 12 8.5c2.5 0 4.5 1 5.5 2.5l1.5-1.5C17.5 7.5 15 6.5 12 6.5 9 6.5 6.5 7.8 5 10v4h2V8z" fill="#FFFFFF" />
        </svg>
      );

    case 'supabase':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M13.5 2L4 14.5h8L10.5 22 20 9.5h-8l1.5-7.5z" fill="#3ECF8E" />
        </svg>
      );

    case 'firebase':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M4.5 17.5L7 3.5l3.5 6.5-6 7.5zm15 0L17 7.5l-2.5 4.5 5 5.5zM12 13.5l2.5-4.5 2.5 8.5-5 2.5-5-2.5 5-4z" fill="#FFCA28" />
          <path d="M12 20l5-2.5-2.5-8.5L12 13.5z" fill="#FFA000" />
        </svg>
      );

    case 'postgresql':
    case 'sql':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#336791" />
          <path d="M12 4.5c3.5 0 6 2 6 5.5 0 3-2 5-5 5.5v3.5h-2V15c-3-.5-5-2.5-5-5.5 0-3.5 2.5-5.5 6-5.5zm0 2c-2.2 0-4 1.3-4 3.5 0 2 1.8 3.5 4 3.5s4-1.5 4-3.5c0-2.2-1.8-3.5-4-3.5z" fill="#FFFFFF" />
        </svg>
      );

    case 'sqlite':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#003B57" />
          <path d="M6 7.5C6 6.1 8.7 5 12 5s6 1.1 6 2.5v9c0 1.4-2.7 2.5-6 2.5s-6-1.1-6-2.5v-9zm2 3c1 .6 2.5.9 4 .9s3-.3 4-.9V9c-1 .6-2.5.9-4 .9s-3-.3-4-.9v1.5zm0 3c1 .6 2.5.9 4 .9s3-.3 4-.9v-1.5c-1 .6-2.5.9-4 .9s-3-.3-4-.9V13.5zm0 3c1 .6 2.5.9 4 .9s3-.3 4-.9V15c-1 .6-2.5.9-4 .9s-3-.3-4-.9v1.5z" fill="#00ADEF"/>
        </svg>
      );

    case 'flutter':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M14.5 2L5 11.5l3 3L17.5 5 14.5 2zm0 8l-6 6 3 3 6-6-3-3zm-3 9l3 3h6l-6-6-3 3z" fill="#02569B" />
          <path d="M14.5 19l3 3h6l-6-6-3 3z" fill="#0175C2" />
        </svg>
      );

    case 'git':
    case 'github':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#181717" />
          <path d="M12 3.5C7.3 3.5 3.5 7.3 3.5 12c0 3.8 2.4 6.9 5.8 8.1.4.1.6-.2.6-.4v-1.5c-2.4.5-2.9-1.1-2.9-1.1-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.3.9 1.3.9.8 1.3 2 .9 2.5.7.1-.6.3-.9.6-1.1-1.9-.2-3.9-.9-3.9-4.1 0-.9.3-1.6.9-2.2-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.3.8.7-.2 1.4-.3 2.1-.3.7 0 1.4.1 2.1.3 1.6-1 2.3-.8 2.3-.8.5 1.1.2 2 .1 2.2.6.6.9 1.3.9 2.2 0 3.2-2 3.9-3.9 4.1.3.3.6.8.6 1.7v2.5c0 .2.2.5.6.4 3.4-1.1 5.8-4.3 5.8-8.1 0-4.7-3.8-8.5-8.5-8.5z" fill="#FFFFFF" />
        </svg>
      );

    default:
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3B82F6" />
          <path d="M8 8l4 4-4 4m5 0h3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}
