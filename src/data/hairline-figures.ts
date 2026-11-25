// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Self-contained JS kernel from @lucasmarkes/hairline
import HL from "../lib/hairline-kernel";
import type { HairlineFigureSpec } from "../components/HairlineFigure";

const {
  Cam,
  clamp,
  facing,
  fit,
  flatDot,
  mk,
  place,
  pointer,
  prism,
  proj,
  put,
  rad,
  register,
  rings,
  spring,
  stepS,
  tdone,
  tset,
  tval,
  tween,
  unproj,
  disposer,
  solid,
  poly,
  ringAt,
  rrect,
} = HL;

/**
 * 1. Quorum Council Ring — 6 isometric monoliths around a sunken telemetry hub.
 * Rest pose highlights Seat 04; hovering lifts nearest monolith via spring physics.
 */
export const quorumRingFigure: HairlineFigureSpec = {
  name: "quorum-ring",
  means: "Six council monoliths around a telemetry hub lift under the pointer by proximity.",
  range: [42, 68, 105],
  tour: [
    [154, 140],
    [246, 152],
    [202, 210],
    null,
  ],
  mount({ stage, svg, read }, value, onStepHover) {
    const bag = disposer();
    const C = Cam(45, 0.5, 1.56);
    const PB = 6, MAX_H = 52, RAD = 46, W = 18, SEATS = 6;
    const REST_H = [14, 24, 17, 34, 19, 26];
    const REST_MARK = 3;

    fit(
      C,
      [
        [-76, -76, -PB],
        [76, 76, -PB],
        [76, -76, -PB],
        [-76, 76, -PB],
        [0, 0, MAX_H + 8],
      ],
      200,
      166
    );
    const P = proj(C),
      front = facing(C);
    let reach = value,
      active = -1;

    const g = mk("g", {}, svg);
    const [pr, pi] = rings(-74, -74, 74, 74, 12, 2.4);
    put(solid(g), prism(P, front, pr, pi, -PB, 0));

    const [hr, hiRing] = rings(-19, -19, 19, 19, 19, 1.6);
    put(solid(g), prism(P, front, hr, hiRing, 0, 5));
    const hubDots: SVGElement[] = [];
    for (let k = 0; k < 6; k++) hubDots.push(flatDot(g, C, 0.75, k === REST_MARK ? "dot" : "dot off"));

    const raw: { i: number; cx: number; cy: number; ring: unknown[]; inner: unknown[]; h0: number }[] = [];
    for (let i = 0; i < SEATS; i++) {
      const a = rad(i * 60 - 20);
      const cx = Math.cos(a) * RAD,
        cy = Math.sin(a) * RAD;
      const [ring, inner] = rings(cx - W / 2, cy - W / 2, cx + W / 2, cy + W / 2, 4.2, 1.1);
      raw.push({ i, cx, cy, ring, inner, h0: REST_H[i] });
    }
    raw.sort((a, b) => a.cx + a.cy - (b.cx + b.cy));

    const seats = raw.map((s) => {
      const el = solid(g);
      const dots: SVGElement[] = [];
      for (let k = 0; k < SEATS; k++) {
        dots.push(flatDot(el.g, C, 0.52, k === s.i ? "dot m" : "dot off"));
      }
      return {
        ...s,
        sp: spring(s.h0, { eps: 0.04 }),
        drawn: NaN,
        dots,
        el,
      };
    });

    function drawSeat(s: (typeof seats)[number]) {
      const h = Math.max(2, s.sp.x);
      if (h === s.drawn) return;
      s.drawn = h;
      put(s.el, prism(P, front, s.ring, s.inner, 0, h));
      for (let k = 0; k < SEATS; k++) {
        const col = (k % 3) - 1,
          row = Math.floor(k / 3) - 0.5;
        place(s.dots[k], P(s.cx + col * 3.8, s.cy + row * 4.2, h));
      }
    }

    function syncHighlights() {
      const lit = active >= 0 ? active : REST_MARK;
      seats.forEach((s) => {
        const on = s.i === lit;
        s.el.sil.classList.toggle("hi", on);
        s.dots[s.i].className.baseVal = on ? "dot" : "dot m";
      });
      hubDots.forEach((d, k) => {
        const a = rad(k * 60 - 20);
        place(d, P(Math.cos(a) * 10, Math.sin(a) * 10, 5));
        d.className.baseVal = k === lit ? "dot" : "dot off";
      });
    }

    const B = register(stage, (dt: number) => {
      let moving = false;
      for (const s of seats) {
        if (stepS(s.sp, dt)) moving = true;
        drawSeat(s);
      }
      return moving;
    });
    bag.add(B.unregister);

    function applySeat(idx: number) {
      active = idx;
      if (idx < 0) {
        seats.forEach((s) => {
          s.sp.t = s.h0;
        });
        read.textContent = "rest";
      } else {
        const chosen = seats.find((s) => s.i === idx) ?? seats[0];
        seats.forEach((s) => {
          const d = Math.hypot(s.cx - chosen.cx, s.cy - chosen.cy);
          const w = clamp(1 - d / (reach * 1.45), 0, 1);
          s.sp.t = s.i === idx ? MAX_H : clamp(s.h0 * (0.65 + 0.45 * w), 8, MAX_H - 12);
        });
        read.textContent = `seat 0${idx + 1}`;
      }
      onStepHover?.(idx);
      syncHighlights();
      B.wake();
    }

    function pickSeat(pt: [number, number] | null) {
      if (!pt) return -1;
      let best = seats[0],
        bestD = Infinity;
      for (const s of seats) {
        const w = unproj(C, pt[0], pt[1], s.h0);
        const d = Math.hypot(s.cx - w[0], s.cy - w[1]);
        if (d < bestD) {
          bestD = d;
          best = s;
        }
      }
      return bestD <= reach ? best.i : -1;
    }

    syncHighlights();
    seats.forEach(drawSeat);

    bag.add(
      pointer(stage, {
        move: (p: [number, number]) => applySeat(pickSeat(p)),
        leave: () => applySeat(-1),
      })
    );
    bag.add(() => svg.replaceChildren());

    return {
      set: (v: number) => {
        reach = v;
      },
      focusStep: (idx: number) => applySeat(idx >= 0 && idx < SEATS ? idx : -1),
      destroy: bag.dispose,
    };
  },
};

/**
 * 2. Edge Compute Field — 6×6 beveled telemetry matrix (based on Terrain / HL springs).
 * Ideal for DATADOC Polars shards & Project K Jetson tensor cluster telemetry.
 */
export const edgeFieldFigure: HairlineFigureSpec = {
  name: "edge-field",
  means: "36 isometric compute pillars rise on springs under the pointer and fall off with distance.",
  range: [20, 42, 72],
  tour: [
    [140, 155],
    [255, 145],
    [200, 200],
    null,
  ],
  mount({ stage, svg, read }, value) {
    const bag = disposer();
    const N = 6,
      CELL = 18,
      FOOT = 14,
      HMAX = 54,
      EXT = N * CELL,
      PB = 5;
    let R = value;
    let over: [number, number] | null = null;

    const C = Cam(45, 0.5, 1.54);
    fit(
      C,
      [
        [-6, -6, -PB],
        [EXT + 6, EXT + 6, -PB],
        [EXT + 6, -6, -PB],
        [-6, EXT + 6, -PB],
        [0, 0, HMAX * 0.78],
      ],
      200,
      166
    );
    const P = proj(C),
      front = facing(C);

    const g = mk("g", {}, svg);
    const [pr, pi] = rings(-6, -6, EXT + 6, EXT + 6, 9, 2.2);
    put(solid(g), prism(P, front, pr, pi, -PB, 0));

    const cols: {
      i: number;
      j: number;
      h0: number;
      ring: unknown[];
      inner: unknown[];
      sp: { x: number; v: number; t: number };
      el: { g: SVGGElement; sil: SVGPathElement; cr: SVGPathElement };
      drawn: number;
    }[] = [];

    for (let s = 0; s <= 2 * (N - 1); s++) {
      for (let i = 0; i < N; i++) {
        const j = s - i;
        if (j < 0 || j >= N) continue;
        const u = i / (N - 1),
          v = j / (N - 1);
        const h0 =
          4 +
          24 * Math.exp(-((u - 0.25) ** 2 + (v - 0.72) ** 2) / 0.08) +
          14 * Math.exp(-((u - 0.78) ** 2 + (v - 0.28) ** 2) / 0.045);
        const x0 = i * CELL + (CELL - FOOT) / 2,
          y0 = j * CELL + (CELL - FOOT) / 2;
        const [ring, inner] = rings(x0, y0, x0 + FOOT, y0 + FOOT, 3.0, 1.0);
        cols.push({ i, j, h0, ring, inner, sp: spring(h0, { eps: 0.04 }), el: solid(g), drawn: NaN });
      }
    }

    const peak = cols.reduce((a, b) => (b.h0 > a.h0 ? b : a));
    const byCell = new Map<string, (typeof cols)[number]>();
    cols.forEach((c) => byCell.set(`${c.i},${c.j}`, c));

    const mark = mk("g", {}, g);
    const md: SVGElement[] = [];
    for (let k = 0; k < 9; k++) md.push(flatDot(mark, C, 0.58, k === 4 ? "dot" : "dot m"));
    let mc: (typeof cols)[number] | null = null;
    let want = peak;

    const falloff = (u: number) =>
      u <= 0 ? 1 : u <= 0.42 ? 1 - (u / 0.42) * 0.68 : u <= 1 ? 0.32 - ((u - 0.42) / 0.58) * 0.22 : 0.1;

    function drawMark() {
      if (want !== mc) {
        mc = want;
        mc.el.g.after(mark);
      }
      const cx = (mc.i + 0.5) * CELL,
        cy = (mc.j + 0.5) * CELL,
        h = Math.max(0.8, mc.sp.x);
      md.forEach((el, k) => place(el, P(cx + ((k % 3) - 1) * 3.1, cy + (Math.floor(k / 3) - 1) * 3.1, h)));
    }

    function drawCol(c: (typeof cols)[number]) {
      const h = Math.max(0.8, c.sp.x);
      if (h === c.drawn) return;
      c.drawn = h;
      put(c.el, prism(P, front, c.ring, c.inner, 0, h));
      c.el.sil.classList.toggle("hi", h > HMAX * 0.48);
    }

    const B = register(stage, (dt: number) => {
      let m = false;
      for (const c of cols) {
        if (stepS(c.sp, dt)) m = true;
        drawCol(c);
      }
      drawMark();
      return m;
    });
    bag.add(B.unregister);

    function retarget() {
      for (const c of cols) {
        if (!over) {
          c.sp.t = c.h0;
          continue;
        }
        const dx = (c.i + 0.5) * CELL - over[0],
          dy = (c.j + 0.5) * CELL - over[1];
        c.sp.t = HMAX * falloff(Math.hypot(dx, dy) / R);
      }
      if (over) {
        const i = clamp(Math.floor(over[0] / CELL), 0, N - 1),
          j = clamp(Math.floor(over[1] / CELL), 0, N - 1);
        want = byCell.get(`${i},${j}`) ?? peak;
        read.textContent = `node ${i}·${j}`;
      } else {
        want = peak;
        read.textContent = "rest";
      }
      B.wake();
    }

    cols.forEach(drawCol);
    drawMark();

    bag.add(
      pointer(stage, {
        move: (p: [number, number]) => {
          over = unproj(C, p[0], p[1], 0);
          retarget();
        },
        leave: () => {
          over = null;
          retarget();
        },
      })
    );
    bag.add(() => svg.replaceChildren());

    return {
      set: (v: number) => {
        R = v;
        if (over) retarget();
      },
      destroy: bag.dispose,
    };
  },
};

/**
 * 3. Pipeline Layers — 4 Exploded Architecture Slabs (synced with /work dossier steps 01..04).
 * Rest holds an asymmetric stepped explosion; hovering separates tiers along EASE_LIFT.
 */
export const pipelineLayersFigure: HairlineFigureSpec = {
  name: "pipeline-layers",
  means: "Four stacked system plates separate and highlight the inspected pipeline tier.",
  range: [10, 18, 28],
  tour: [
    [200, 210],
    [200, 165],
    [200, 120],
    [200, 82],
    null,
  ],
  mount({ stage, svg, read }, value, onStepHover) {
    const bag = disposer();
    const N = 4,
      TH = 5.5,
      BASE_Z = [10, 28, 46, 64];
    let gap = value,
      act = -1;

    const C = Cam(45, 0.5, 1.58);
    fit(
      C,
      [
        [-58, -58, -4],
        [58, 58, -4],
        [58, -58, -4],
        [-58, 58, -4],
        [0, 0, 118],
      ],
      200,
      170
    );
    const P = proj(C),
      front = facing(C);

    const g = mk("g", {}, svg);
    // Base reference plate + corner guide frame
    const baseOuter = rrect(-54, -54, 54, 54, 9, 5);
    mk("path", { d: poly(ringAt(P, baseOuter, 0)), class: "lo" }, g);

    const slabs = Array.from({ length: N }, (_, i) => {
      const half = 44 - i * 2.5;
      const [ring, inner] = rings(-half, -half, half, half, 7 - i * 0.4, 1.4);
      const grp = mk("g", {}, g);
      const guide = mk("path", { class: "nf dash lo" }, grp);
      const slab = solid(grp);
      const dots = Array.from({ length: N }, (_, k) =>
        flatDot(grp, C, 0.72, k === i ? "dot m" : "dot off")
      );
      return {
        i,
        half,
        ring,
        inner,
        slab,
        guide,
        dots,
        zTw: tween(BASE_Z[i]),
        drawn: NaN,
      };
    });

    function drawSlab(s: (typeof slabs)[number], now: number) {
      const z = tval(s.zTw, now);
      if (z === s.drawn) return;
      s.drawn = z;
      put(s.slab, prism(P, front, s.ring, s.inner, z, z + TH));
      const cA = P(-s.half + 5, -s.half + 5, z);
      const cB = P(-s.half + 5, -s.half + 5, 0);
      s.guide.setAttribute("d", HL.seg(cA, cB));
      s.dots.forEach((d, k) => place(d, P(s.half - 8 - k * 5.2, s.half - 7, z + TH)));
    }

    function sync(now: number) {
      const lit = act >= 0 ? act : 1;
      slabs.forEach((s, i) => {
        const delay = act >= 0 ? Math.abs(i - act) * 38 : Math.abs(i - 1) * 30;
        const offset = act < 0 ? 0 : i < act ? -i * 2.5 : i === act ? 10 + gap * 0.35 : (i - act) * gap * 0.55;
        const targetZ = clamp(BASE_Z[i] + offset, 6, 108);
        tset(s.zTw, targetZ, now, delay);
        const on = i === lit;
        s.slab.sil.classList.toggle("hi", on);
        s.dots[i].className.baseVal = on ? "dot" : "dot m";
      });
    }

    const B = register(stage, (_dt: number, now: number) => {
      let moving = false;
      for (const s of slabs) {
        drawSlab(s, now);
        if (!tdone(s.zTw, now)) moving = true;
      }
      return moving;
    });
    bag.add(B.unregister);

    // Precompute rest centers on screen for deterministic hit testing (rule 01)
    const restY = slabs.map((s, i) => P(0, 0, BASE_Z[i] + TH * 0.5)[1]);

    function setActive(next: number) {
      if (next === act) return;
      act = next;
      read.textContent = act < 0 ? "rest" : `tier 0${act + 1}`;
      onStepHover?.(act);
      sync(performance.now());
      B.wake();
    }

    function hit(pt: [number, number]) {
      let best = -1,
        bestD = Infinity;
      restY.forEach((ry, i) => {
        const d = Math.abs(pt[1] - ry);
        if (d < bestD && d < 32 && Math.abs(pt[0] - 200) < 125) {
          bestD = d;
          best = i;
        }
      });
      return best;
    }

    sync(performance.now());
    slabs.forEach((s) => drawSlab(s, performance.now()));

    bag.add(
      pointer(stage, {
        move: (p: [number, number]) => setActive(hit(p)),
        leave: () => setActive(-1),
      })
    );
    bag.add(() => svg.replaceChildren());

    return {
      set: (v: number) => {
        gap = v;
        if (act >= 0) {
          sync(performance.now());
          B.wake();
        }
      },
      focusStep: (idx: number) => setActive(idx >= 0 && idx < N ? idx : -1),
      destroy: bag.dispose,
    };
  },
};

/**
 * 4. Terminal Rig (adopted via /hairline-adopt from assets/terminal_profile.svg)
 * Dual-pane 2:1 console: left 5×6 dot-portrait matrix, right 3 rising metric bars.
 */
export const terminalRigFigure: HairlineFigureSpec = {
  name: "terminal-rig",
  means: "Dual-pane 2:1 terminal console with dot-portrait matrix and rising telemetry bars.",
  range: [12, 22, 32],
  tour: [
    [142, 168],
    [260, 148],
    [250, 185],
    null,
  ],
  mount({ stage, svg, read }, value) {
    const bag = disposer();
    const W = 124,
      H = 62,
      TH = 5.5,
      PB = 4;
    const BARS = [
      { y: 15, len: 42, rest: 9.5 },
      { y: 27, len: 38, rest: 3.5 },
      { y: 39, len: 34, rest: 5.5 },
    ];
    let reach = value,
      sel = -1;

    const C = Cam(45, 0.5, 2.2);
    fit(
      C,
      [
        [-64, -34, -PB],
        [64, 34, -PB],
        [64, -34, -PB],
        [-64, 34, -PB],
        [0, 0, 34],
      ],
      200,
      168
    );
    const P = proj(C),
      front = facing(C);

    const g = mk("g", {}, svg);
    const [br, bi] = rings(-W / 2, -H / 2, W / 2, H / 2, 7, 1.8);
    put(solid(g), prism(P, front, br, bi, -PB, TH));

    const topDots = [0, 1, 2].map((k) => flatDot(g, C, 0.8, k === 0 ? "dot" : "dot m"));
    topDots.forEach((d, k) => place(d, P(-W / 2 + 9 + k * 5.5, -H / 2 + 6, TH)));
    mk("path", { d: HL.seg(P(-W / 2 + 4, -H / 2 + 11, TH), P(W / 2 - 4, -H / 2 + 11, TH)), class: "nf lo" }, g);
    mk("path", { d: HL.seg(P(-2, -H / 2 + 14, TH), P(-2, H / 2 - 4, TH)), class: "nf dash lo" }, g);

    const MASK = [
      0, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
      0, 1, 1, 1, 0,
      0, 0, 1, 0, 0,
      0, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
    ];
    const pDots: { el: SVGElement; on: boolean }[] = [];
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 5; col++) {
        const idx = row * 5 + col;
        const dot = flatDot(g, C, 1.05, MASK[idx] ? "dot m" : "dot off");
        place(dot, P(-W / 2 + 13 + col * 8.2, -H / 2 + 17 + row * 7.2, TH));
        pDots.push({ el: dot, on: !!MASK[idx] });
      }
    }

    const bars = BARS.map((b, i) => {
      const x0 = 5,
        y0 = -H / 2 + b.y,
        x1 = x0 + b.len,
        y1 = y0 + 7.5;
      const [ring, inner] = rings(x0, y0, x1, y1, 2.2, 0.8);
      mk("path", { d: HL.seg(P(x0, y0 - 2.6, TH), P(x0 + 22, y0 - 2.6, TH)), class: "nf lo" }, g);
      return {
        ...b,
        i,
        cx: (x0 + x1) / 2,
        cy: (y0 + y1) / 2,
        ring,
        inner,
        sp: spring(TH + b.rest, { eps: 0.04 }),
        el: solid(g),
        drawn: NaN,
      };
    });

    function drawBar(b: (typeof bars)[number]) {
      const z1 = Math.max(TH + 0.8, b.sp.x);
      if (z1 === b.drawn) return;
      b.drawn = z1;
      put(b.el, prism(P, front, b.ring, b.inner, TH, z1));
    }

    function syncPalette() {
      const litBar = sel >= 1 ? sel : sel < 0 ? 1 : -1;
      bars.forEach((b, i) => b.el.sil.classList.toggle("hi", litBar === i + 1));
      pDots.forEach((d) => {
        if (d.on) d.el.className.baseVal = sel === 0 ? "dot" : "dot m";
      });
    }

    const B = register(stage, (dt: number) => {
      let moving = false;
      for (const b of bars) {
        if (stepS(b.sp, dt)) moving = true;
        drawBar(b);
      }
      return moving;
    });
    bag.add(B.unregister);

    function choose(pt: [number, number] | null) {
      if (!pt) {
        sel = -1;
        bars.forEach((b) => {
          b.sp.t = TH + b.rest;
        });
        read.textContent = "rest";
      } else {
        const w = unproj(C, pt[0], pt[1], TH);
        if (w[0] < -4 && Math.abs(w[0]) < W / 2 && Math.abs(w[1]) < H / 2) {
          sel = 0;
          bars.forEach((b, i) => {
            b.sp.t = TH + (i === 0 ? 4 : 2);
          });
          read.textContent = "id matrix";
        } else {
          let best = 0,
            bestD = Infinity;
          bars.forEach((b, i) => {
            const d = Math.hypot(w[0] - b.cx, w[1] - b.cy);
            if (d < bestD) {
              bestD = d;
              best = i;
            }
          });
          if (bestD <= 32) {
            sel = best + 1;
            bars.forEach((b, i) => {
              b.sp.t = TH + (i === best ? reach : 1.5);
            });
            read.textContent = `metric 0${best + 1}`;
          } else {
            sel = -1;
            bars.forEach((b) => {
              b.sp.t = TH + b.rest;
            });
            read.textContent = "rest";
          }
        }
      }
      syncPalette();
      B.wake();
    }

    bars.forEach(drawBar);
    syncPalette();

    bag.add(pointer(stage, { move: choose, leave: () => choose(null) }));
    bag.add(() => svg.replaceChildren());

    return {
      set: (v: number) => {
        reach = v;
      },
      destroy: bag.dispose,
    };
  },
};
