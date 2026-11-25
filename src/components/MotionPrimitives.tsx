"use client";

import React, { useMemo } from "react";
import { motion, type MotionStyle } from "framer-motion";

const EASE_OUT_CUBIC = [0.22, 1, 0.36, 1] as const;

interface WordRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  inView?: boolean;
}

/**
 * Subtle word-by-word entrance animation.
 * Keeps total stagger bounded so long sentences stay crisp and readable.
 */
export function WordReveal({
  children,
  as = "p",
  className,
  style,
  delay = 0,
  stagger = 0.02,
  duration = 0.32,
  inView = false,
}: WordRevealProps) {
  const words = useMemo(() => children.trim().split(/\s+/), [children]);
  const Tag = as;

  const capDelay = Math.min(words.length * stagger, 0.42);
  const step = words.length > 1 ? capDelay / words.length : stagger;

  return (
    <Tag className={className} style={style}>
      {words.map((word, idx) =>
        inView ? (
          <motion.span
            key={`${idx}-${word}`}
            initial={{ opacity: 0, y: 7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration,
              delay: delay + idx * step,
              ease: EASE_OUT_CUBIC,
            }}
            style={{ display: "inline-block", marginRight: idx < words.length - 1 ? "0.27em" : 0 }}
          >
            {word}
          </motion.span>
        ) : (
          <motion.span
            key={`${idx}-${word}`}
            initial={{ opacity: 0, y: 7 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration,
              delay: delay + idx * step,
              ease: EASE_OUT_CUBIC,
            }}
            style={{ display: "inline-block", marginRight: idx < words.length - 1 ? "0.27em" : 0 }}
          >
            {word}
          </motion.span>
        )
      )}
    </Tag>
  );
}

interface RevealBlockProps {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  delay?: number;
  y?: number;
  inView?: boolean;
}

/**
 * Subtle section / card fade-and-rise reveal.
 */
export function RevealBlock({
  children,
  className,
  style,
  delay = 0,
  y = 12,
  inView = true,
}: RevealBlockProps) {
  if (inView) {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.38, delay, ease: EASE_OUT_CUBIC }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay, ease: EASE_OUT_CUBIC }}
    >
      {children}
    </motion.div>
  );
}
