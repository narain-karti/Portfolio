"use client";

import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Self-contained JS kernel from @lucasmarkes/hairline
import HL from "../lib/hairline-kernel";

export interface HairlineHandle {
  set: (value: number) => void;
  focusStep?: (index: number) => void;
  destroy: () => void;
}

export interface HairlineFigureSpec {
  name: string;
  means: string;
  range: [number, number, number];
  tour: ([number, number] | null)[];
  mount: (
    ctx: { stage: HTMLDivElement; svg: SVGSVGElement; read: { textContent: string } },
    value: number,
    onStepHover?: (idx: number) => void
  ) => HairlineHandle;
}

interface HairlineFigureProps {
  figure: HairlineFigureSpec;
  intensity?: number;
  autoTour?: boolean;
  plateColor?: string;
  activeStep?: number;
  onStepHover?: (idx: number) => void;
  className?: string;
  showReadout?: boolean;
  labelPrefix?: string;
  style?: React.CSSProperties;
}

export default function HairlineFigure({
  figure,
  intensity = 0.5,
  autoTour = false,
  plateColor = "#141414",
  activeStep = -1,
  onStepHover,
  className = "",
  showReadout = true,
  labelPrefix,
  style,
}: HairlineFigureProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HairlineHandle | null>(null);
  const tourRef = useRef<{ stop: () => void } | null>(null);
  const onStepHoverRef = useRef(onStepHover);
  onStepHoverRef.current = onStepHover;

  const [readout, setReadout] = useState("rest");

  // Compute physical slider value from 0..1 intensity
  const [lo, mid, hi] = figure.range;
  const numericVal =
    intensity <= 0.5
      ? lo + (intensity / 0.5) * (mid - lo)
      : mid + ((intensity - 0.5) / 0.5) * (hi - mid);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    HL.inject(document);
    stage.setAttribute("data-hairline", figure.name);
    stage.setAttribute("data-hairline-theme", "dark");
    stage.setAttribute("role", "img");
    stage.setAttribute("aria-label", figure.means);

    const svg = HL.mk("svg", { viewBox: "0 0 400 320", "aria-hidden": "true" }, stage) as SVGSVGElement;

    let text = "rest";
    const read = {
      get textContent() {
        return text;
      },
      set textContent(v: string) {
        text = v == null ? "" : String(v);
        setReadout(text);
      },
    };

    const handle = figure.mount(
      { stage, svg, read },
      numericVal,
      (idx) => onStepHoverRef.current?.(idx)
    );
    handleRef.current = handle;

    if (autoTour && figure.tour && figure.tour.length > 0) {
      tourRef.current = HL.tour(stage, figure.tour);
    }

    return () => {
      tourRef.current?.stop();
      tourRef.current = null;
      handle.destroy();
      handleRef.current = null;
      svg.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [figure]);

  useEffect(() => {
    handleRef.current?.set(numericVal);
  }, [numericVal]);

  useEffect(() => {
    handleRef.current?.focusStep?.(activeStep);
  }, [activeStep]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    tourRef.current?.stop();
    tourRef.current = autoTour && figure.tour ? HL.tour(stage, figure.tour) : null;
    return () => {
      tourRef.current?.stop();
      tourRef.current = null;
    };
  }, [autoTour, figure]);

  return (
    <div
      className={className}
      style={
        {
          position: "relative",
          width: "100%",
          overflow: "hidden",
          ["--hairline-plate" as string]: plateColor,
          ["--hairline-hi" as string]: "#6ee7b7",
          ["--hairline-edge" as string]: "#8e93a4",
          ["--hairline-mid" as string]: "#4b4f5c",
          ["--hairline-lo" as string]: "#262830",
          ["--hairline-stroke" as string]: "1.05",
          ...style,
        } as React.CSSProperties
      }
    >
      {showReadout && (
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "10px",
            zIndex: 3,
            pointerEvents: "none",
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.68rem",
            padding: "3px 8px",
            borderRadius: "999px",
            background: "rgba(10, 10, 10, 0.72)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            color: readout === "rest" ? "#8a8a8a" : "#6ee7b7",
            fontVariantNumeric: "tabular-nums",
            transition: "color 0.2s ease",
          }}
        >
          {labelPrefix ? `${labelPrefix} · ${readout}` : readout}
        </div>
      )}
      <div ref={stageRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
