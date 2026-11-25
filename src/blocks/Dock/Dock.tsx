"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState, memo } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export type DockItemData = {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
  active?: boolean;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  baseItemSize?: number;
  magnification?: number;
  spring?: SpringOptions;
  activeLabel?: string;
};

const DockItem = memo(
  ({
    item,
    mouseX,
    baseItemSize,
    maxScale,
    distance,
    springConfig,
  }: {
    item: DockItemData;
    mouseX: ReturnType<typeof useMotionValue<number>>;
    baseItemSize: number;
    maxScale: number;
    distance: number;
    springConfig: SpringOptions;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Pure GPU transform magnification (zero CSS width/height reflow at 60fps!)
    const mouseDistance = useTransform(mouseX, (val: number) => {
      if (!Number.isFinite(val)) return distance * 2;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return distance * 2;
      return val - rect.x - rect.width / 2;
    });

    const targetScale = useTransform(mouseDistance, [-distance, 0, distance], [1, maxScale, 1]);
    const scale = useSpring(targetScale, springConfig);
    const liftY = useTransform(scale, [1, maxScale], [0, -7]);

    return (
      <div
        ref={ref}
        style={{
          width: baseItemSize,
          height: baseItemSize,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              style={{
                position: "absolute",
                bottom: "calc(100% + 14px)",
                left: "50%",
                x: "-50%",
                backgroundColor: "#141414",
                color: "#f5f5f5",
                padding: "4px 9px",
                borderRadius: "7px",
                fontSize: "11px",
                fontWeight: 500,
                fontFamily: "var(--font-mono), monospace",
                whiteSpace: "nowrap",
                pointerEvents: "none",
                border: "1px solid #333333",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.5)",
                zIndex: 10000,
              }}
              role="tooltip"
            >
              {item.label}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{
            width: "100%",
            height: "100%",
            scale,
            y: liftY,
            transformOrigin: "bottom center",
            willChange: "transform",
          }}
          whileTap={{ scale: 0.92 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Link
            href={item.href}
            prefetch={true}
            className={`site-dock-item ${item.active ? "site-dock-item-active" : ""}`}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "11px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={(e) => {
              e.stopPropagation();
              item.onClick?.();
            }}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            aria-label={item.label}
            aria-current={item.active ? "page" : undefined}
          >
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {item.icon}
            </span>

            {item.active && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  width: "4px",
                  height: "4px",
                  borderRadius: "999px",
                  backgroundColor: "#6ee7b7",
                }}
              />
            )}
          </Link>
        </motion.div>
      </div>
    );
  }
);

DockItem.displayName = "DockItem";

const Dock = ({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 320, damping: 22 },
  magnification = 58,
  distance = 110,
  baseItemSize = 42,
  activeLabel = "NARAIN.OS",
}: DockProps) => {
  const mouseX = useMotionValue(Infinity);
  const [mounted, setMounted] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const w = window.innerWidth;
    setViewportWidth(w);
    // Keep narrow phones uncluttered by starting dock collapsed into compact menu pill
    if (w <= 560) setCollapsed(true);
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    setMounted(true);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isCompact = viewportWidth <= 720;
  const isTiny = viewportWidth <= 440;
  const adjustedBase = isTiny ? 30 : isCompact ? 34 : baseItemSize;
  const maxScale = isCompact ? 1.08 : magnification / baseItemSize;

  if (!mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: isCompact ? "10px" : "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        pointerEvents: "none",
        zIndex: 90000,
        padding: "0 8px",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {collapsed ? (
          <motion.button
            key="dock-collapsed"
            type="button"
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.94 }}
            transition={{ duration: 0.14 }}
            onClick={() => setCollapsed(false)}
            className="site-dock-panel"
            style={{
              pointerEvents: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 15px",
              borderRadius: "999px",
              color: "#f5f5f5",
              cursor: "pointer",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
            }}
            aria-label="Expand navigation dock"
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "999px",
                backgroundColor: "#6ee7b7",
              }}
            />
            <span>Menu · {activeLabel}</span>
            <ChevronUp size={14} style={{ opacity: 0.78 }} />
          </motion.button>
        ) : (
          <motion.nav
            key="dock-expanded"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.14 }}
            onMouseMove={(e) => {
              if (!isCompact) mouseX.set(e.clientX);
            }}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={`site-dock-panel ${className}`}
            style={{
              pointerEvents: "auto",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: isTiny ? "4px" : isCompact ? "6px" : "8px",
              padding: isTiny ? "6px 7px 8px" : isCompact ? "7px 9px 9px" : "8px 12px 10px",
              borderRadius: "16px",
              maxWidth: "calc(100vw - 16px)",
              overflowX: isTiny ? "auto" : "visible",
            }}
            aria-label="Portfolio navigation dock"
          >
            {items.map((item) => (
              <DockItem
                key={item.label}
                item={item}
                mouseX={mouseX}
                baseItemSize={adjustedBase}
                maxScale={maxScale}
                distance={distance}
                springConfig={spring}
              />
            ))}

            <div
              style={{
                width: "1px",
                height: `${Math.round(adjustedBase * 0.58)}px`,
                backgroundColor: "#2e2e2e",
                margin: "0 2px",
                flexShrink: 0,
              }}
            />

            <motion.button
              type="button"
              onClick={() => setCollapsed(true)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              title="Minimize dock"
              aria-label="Minimize navigation dock"
              className="site-dock-item"
              style={{
                width: adjustedBase,
                height: adjustedBase,
                borderRadius: "11px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9a9a9a",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <ChevronDown size={isTiny ? 14 : 16} />
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
};

export default Dock;
