"use client";

import React, { useMemo, ReactNode, memo } from "react";
import { motion } from "framer-motion";
import "./ScrollFloat.css";

interface ScrollFloatProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = memo(
  ({
    children,
    containerClassName = "",
    textClassName = "",
    animationDuration = 0.25,
    stagger = 0.012,
  }) => {
    const words = useMemo(() => {
      if (typeof children !== "string") return null;
      return children.trim().split(/\s+/);
    }, [children]);

    if (!words) {
      return (
        <h2 className={`scroll-float ${containerClassName}`}>
          <span className={`scroll-float-text ${textClassName}`}>{children}</span>
        </h2>
      );
    }

    return (
      <h2 className={`scroll-float ${containerClassName}`}>
        <span className={`scroll-float-text ${textClassName}`}>
          {words.map((word, idx) => (
            <motion.span
              key={`${idx}-${word}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: animationDuration,
                delay: Math.min(idx * stagger, 0.35),
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: "inline-block", marginRight: "0.26em" }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </h2>
    );
  }
);

ScrollFloat.displayName = "ScrollFloat";

export default ScrollFloat;
