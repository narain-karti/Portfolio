"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "motion/react";
import Link from "next/link";
import React, { useEffect, useRef, useState, memo } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, LayoutGrid, Volume2, VolumeX } from "lucide-react";
import { isSoundMuted, setSoundMuted, playToggle } from "../../lib/sound-fx";

export type DockItemData = {
  icon: React.ReactNode;
  label: string;
  href: string;
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
    isMobile,
    onNavigate,
  }: {
    item: DockItemData;
    mouseX: ReturnType<typeof useMotionValue<number>>;
    baseItemSize: number;
    maxScale: number;
    distance: number;
    springConfig: SpringOptions;
    isMobile: boolean;
    onNavigate?: () => void;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseDistance = useTransform(mouseX, (val: number) => {
      if (!Number.isFinite(val)) return distance * 2;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return distance * 2;
      return val - rect.x - rect.width / 2;
    });

    const targetScale = useTransform(mouseDistance, [-distance, 0, distance], [1, maxScale, 1]);
    const scale = useSpring(targetScale, springConfig);
    const liftY = useTransform(scale, [1, maxScale], [0, -5]);

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
          {isHovered && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.14 }}
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
            scale: isMobile ? 1 : scale,
            y: isMobile ? 0 : liftY,
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
              borderRadius: "9px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate?.();
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
                  bottom: isMobile ? "3px" : "-6px",
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
  spring = { mass: 0.1, stiffness: 300, damping: 24 },
  magnification = 44,
  distance = 86,
  baseItemSize = 34,
  activeLabel = "NARAIN.OS",
}: DockProps) => {
  const mouseX = useMotionValue(Infinity);
  const [mounted, setMounted] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const [collapsed, setCollapsed] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const w = window.innerWidth;
    setViewportWidth(w);
    setMuted(isSoundMuted());
    // Mobile viewports start collapsed into a compact floating bubble
    if (w <= 680) setCollapsed(true);

    const onResize = () => {
      const nextW = window.innerWidth;
      setViewportWidth(nextW);
      if (nextW <= 680) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    window.addEventListener("resize", onResize, { passive: true });
    setMounted(true);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = viewportWidth <= 680;
  const isTablet = viewportWidth > 680 && viewportWidth <= 920;
  const adjustedBase = isMobile ? 36 : isTablet ? 32 : baseItemSize;
  const itemGap = isMobile ? 6 : isTablet ? 8 : 10;
  const maxScale = isMobile ? 1 : isTablet ? 1.18 : magnification / baseItemSize;

  const toggleCollapse = (next: boolean) => {
    setCollapsed(next);
    playToggle(!next);
  };

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    setSoundMuted(next);
    if (!next) {
      playToggle(true);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        pointerEvents: "none",
        zIndex: 90000,
        padding: "0 10px",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {collapsed ? (
          <motion.button
            key="dock-bubble"
            type="button"
            initial={{ opacity: 0, y: 12, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.85 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 360, damping: 24 }}
            onClick={() => toggleCollapse(false)}
            className="site-dock-panel"
            style={{
              pointerEvents: "auto",
              width: isMobile ? "44px" : "auto",
              height: isMobile ? "44px" : "auto",
              padding: isMobile ? 0 : "6px 12px",
              borderRadius: "999px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              color: "#f5f5f5",
              cursor: "pointer",
              position: "relative",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.7rem",
            }}
            aria-label={`Open navigation menu (${activeLabel})`}
            title={`Menu · ${activeLabel}`}
          >
            <LayoutGrid size={15} strokeWidth={1.75} />
            {!isMobile && <span>{activeLabel}</span>}
            <span
              style={{
                position: isMobile ? "absolute" : "static",
                top: isMobile ? "8px" : undefined,
                right: isMobile ? "8px" : undefined,
                width: "5px",
                height: "5px",
                borderRadius: "999px",
                backgroundColor: "#6ee7b7",
              }}
            />
          </motion.button>
        ) : (
          <motion.nav
            key="dock-expanded"
            initial={{ opacity: 0, y: 14, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            onMouseMove={(e) => {
              if (!isMobile) mouseX.set(e.clientX);
            }}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={`site-dock-panel ${className}`}
            style={
              isMobile
                ? {
                    pointerEvents: "auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
                    gap: "6px",
                    padding: "8px 10px",
                    borderRadius: "16px",
                    width: "fit-content",
                    maxWidth: "calc(100vw - 20px)",
                    justifyItems: "center",
                    alignItems: "center",
                  }
                : {
                    pointerEvents: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: `${itemGap}px`,
                    padding: isTablet ? "5px 10px" : "6px 12px",
                    borderRadius: "14px",
                    maxWidth: "calc(100vw - 16px)",
                  }
            }
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
                isMobile={isMobile}
                onNavigate={isMobile ? () => setCollapsed(true) : undefined}
              />
            ))}

            {!isMobile && (
              <div
                style={{
                  width: "1px",
                  height: `${Math.round(adjustedBase * 0.56)}px`,
                  backgroundColor: "#2e2e32",
                  margin: "0 2px",
                  flexShrink: 0,
                }}
              />
            )}

            <motion.button
              type="button"
              onClick={toggleSound}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              title={muted ? "Unmute sound FX" : "Mute sound FX"}
              aria-label={muted ? "Unmute sound effects" : "Mute sound effects"}
              className="site-dock-item"
              style={{
                width: adjustedBase,
                height: adjustedBase,
                borderRadius: "9px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: muted ? "#6b7280" : "#6ee7b7",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </motion.button>

            <motion.button
              type="button"
              onClick={() => toggleCollapse(true)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              title="Minimize dock"
              aria-label="Minimize navigation dock"
              className="site-dock-item"
              style={{
                width: adjustedBase,
                height: adjustedBase,
                borderRadius: "9px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9a9a9a",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <ChevronDown size={14} />
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
};

export default Dock;
