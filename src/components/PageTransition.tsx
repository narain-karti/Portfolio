"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, MotionConfig } from "framer-motion";

const EASE_OUT_CUBIC = [0.22, 1, 0.36, 1] as const;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        key={pathname}
        className="transition-wrapper"
        initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.54, ease: EASE_OUT_CUBIC }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
