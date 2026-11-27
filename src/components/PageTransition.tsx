"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, MotionConfig } from "motion/react";

const EASE_OUT_CUBIC = [0.22, 1, 0.36, 1] as const;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        key={pathname}
        className="transition-wrapper"
        style={{ minHeight: "100dvh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, ease: EASE_OUT_CUBIC }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
