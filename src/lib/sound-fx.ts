"use client";

let audioCtx: AudioContext | null = null;
let lastHoverTs = 0;

const MUTE_KEY = "nk_sound_muted";

export function isSoundMuted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(MUTE_KEY) === "1";
  } catch {
    return false;
  }
}

export function setSoundMuted(muted: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
  } catch {
    // ignore storage limits
  }
}

function getCtx(): AudioContext | null {
  if (typeof window === "undefined" || isSoundMuted()) return null;
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) {
    audioCtx = new Ctx();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Tactile, understated click suited for a dark minimalist interface.
 */
export function playClick(): void {
  const ctx = getCtx();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;

    // Warm low-mid body thud
    const bodyOsc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    bodyOsc.type = "sine";
    bodyOsc.frequency.setValueAtTime(195, now);
    bodyOsc.frequency.exponentialRampToValueAtTime(72, now + 0.032);
    bodyGain.gain.setValueAtTime(0.18, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.036);
    bodyOsc.connect(bodyGain);
    bodyGain.connect(ctx.destination);
    bodyOsc.start(now);
    bodyOsc.stop(now + 0.04);

    // Crisp transient micro-tick
    const tickOsc = ctx.createOscillator();
    const tickGain = ctx.createGain();
    tickOsc.type = "triangle";
    tickOsc.frequency.setValueAtTime(1650, now);
    tickOsc.frequency.exponentialRampToValueAtTime(620, now + 0.012);
    tickGain.gain.setValueAtTime(0.085, now);
    tickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.014);
    tickOsc.connect(tickGain);
    tickGain.connect(ctx.destination);
    tickOsc.start(now);
    tickOsc.stop(now + 0.016);
  } catch {
    // ignore audio decode/state errors
  }
}

/**
 * Soft whisper tick on card / dock hover (rate-limited).
 */
export function playHover(): void {
  const nowMs = performance.now();
  if (nowMs - lastHoverTs < 65) return;
  lastHoverTs = nowMs;

  const ctx = getCtx();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(980, now);
    osc.frequency.exponentialRampToValueAtTime(640, now + 0.014);
    gain.gain.setValueAtTime(0.038, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.016);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.018);
  } catch {
    // ignore
  }
}

/**
 * Subtle harmonic swell for route transitions and panel reveals.
 */
export function playTransition(): void {
  const ctx = getCtx();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(290, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 0.11);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.065, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.14);
  } catch {
    // ignore
  }
}

/**
 * Soft open/close tone for dock or modal toggles.
 */
export function playToggle(open: boolean): void {
  const ctx = getCtx();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(open ? 280 : 410, now);
    osc.frequency.exponentialRampToValueAtTime(open ? 440 : 250, now + 0.075);
    gain.gain.setValueAtTime(0.095, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.085);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // ignore
  }
}

/**
 * Cinematic harmonic chord swell for the initial name blur-to-text entrance.
 */
export function playIntroChime(): boolean {
  const ctx = getCtx();
  if (!ctx || ctx.state !== "running") return false;
  try {
    const now = ctx.currentTime;
    const freqs = [196, 293.66, 392, 587.33]; // G3 - D4 - G4 - D5 calm open fifth chord
    freqs.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(f * 0.985, now + idx * 0.055);
      osc.frequency.exponentialRampToValueAtTime(f, now + idx * 0.055 + 0.45);
      gain.gain.setValueAtTime(0.0001, now + idx * 0.055);
      gain.gain.linearRampToValueAtTime(0.062 / (idx * 0.35 + 1), now + idx * 0.055 + 0.18);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.15 + idx * 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.055);
      osc.stop(now + 1.35 + idx * 0.08);
    });
    return true;
  } catch {
    return false;
  }
}
