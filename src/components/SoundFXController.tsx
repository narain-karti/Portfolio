"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { playClick, playHover, playTransition } from "../lib/sound-fx";

/**
 * Global delegated sound controller:
 * - Subtle tactile click on links, buttons, and cards
 * - Whisper tick on card/dock hover
 * - Airy transition tone on route change
 */
export default function SoundFXController() {
  const pathname = usePathname();
  const mountedRef = useRef(false);
  const lastHoverElRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    playTransition();
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], [role='link'], .grid-card, .project-card, .filter-tab, .site-dock-item"
      );
      if (interactive) {
        playClick();
      }
    };

    const onPointerOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = e.target as Element | null;
      if (!target) return;
      const hoverable = target.closest(
        ".grid-card, .site-dock-item, .filter-tab, .portrait-card, .project-card"
      );
      if (hoverable && hoverable !== lastHoverElRef.current) {
        lastHoverElRef.current = hoverable;
        playHover();
      } else if (!hoverable) {
        lastHoverElRef.current = null;
      }
    };

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerover", onPointerOver);
    };
  }, []);

  return null;
}
