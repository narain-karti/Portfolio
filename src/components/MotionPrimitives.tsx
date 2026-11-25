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
 * Word-by-word entrance with subtle rise and blur-to-crisp focus.
 */
export function WordReveal({
  children,
  as = "p",
  className,
  style,
  delay = 0,
  stagger = 0.024,
  duration = 0.38,
  inView = false,
}: WordRevealProps) {
  const words = useMemo(() => children.trim().split(/\s+/), [children]);
  const Tag = as;

  const capDelay = Math.min(words.length * stagger, 0.52);
  const step = words.length > 1 ? capDelay / words.length : stagger;

  return (
    <Tag className={className} style={style}>
      {words.map((word, idx) =>
        inView ? (
          <motion.span
            key={`${idx}-${word}`}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.12 }}
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
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
  interactive?: boolean;
}

/**
 * Section or card entrance with optional spring hover lift.
 */
export function RevealBlock({
  children,
  className,
  style,
  delay = 0,
  y = 16,
  inView = true,
  interactive = false,
}: RevealBlockProps) {
  const hoverProps = interactive
    ? {
        whileHover: {
          y: -3,
          transition: { type: "spring" as const, stiffness: 360, damping: 26 },
        },
        whileTap: { scale: 0.992 },
      }
    : {};

  if (inView) {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, y, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.44, delay, ease: EASE_OUT_CUBIC }}
        {...hoverProps}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.44, delay, ease: EASE_OUT_CUBIC }}
      {...hoverProps}
    >
      {children}
    </motion.div>
  );
}

/**
 * Gentle continuous ambient levitation for focal elements.
 */
export function FloatingElement({
  children,
  className,
  style,
  amplitude = 4,
  duration = 5.2,
}: {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
