import { useSyncExternalStore } from "react";

// Original UI sounds synthesized with the Web Audio API (no audio files).
const MUTE_KEY = "portfolio:muted";

let ctx: AudioContext | null = null;
let muted = readMuted();
const listeners = new Set<() => void>();

function readMuted(): boolean {
  try {
    return localStorage.getItem(MUTE_KEY) === "1";
  } catch {
    return false;
  }
}

/** Must be called from a user gesture (click/keypress) before sounds can play. */
export function unlockAudio() {
  if (!ctx) {
    try {
      ctx = new AudioContext();
    } catch {
      return;
    }
  }
  if (ctx.state === "suspended") void ctx.resume();
}

function tone(freq: number, delay: number, duration: number, opts: { type?: OscillatorType; gain?: number; endFreq?: number } = {}) {
  if (muted || !ctx || ctx.state !== "running") return;
  const { type = "sine", gain = 0.06, endFreq } = opts;
  const t = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, t + duration);
  amp.gain.setValueAtTime(0, t);
  amp.gain.linearRampToValueAtTime(gain, t + 0.008);
  amp.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(amp).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + duration + 0.02);
}

export const sound = {
  hover: () => tone(1480, 0, 0.05, { gain: 0.025 }),
  select: () => {
    tone(784, 0, 0.12, { type: "triangle", gain: 0.06 });
    tone(1175, 0.07, 0.18, { type: "triangle", gain: 0.05 });
  },
  back: () => tone(880, 0, 0.16, { type: "triangle", gain: 0.05, endFreq: 440 }),
  /** Short rising sweep when the character hops between levels. */
  jump: () => tone(330, 0, 0.18, { type: "square", gain: 0.03, endFreq: 880 }),
  /** Two bright notes when coins are collected. */
  coin: () => {
    tone(1760, 0, 0.07, { type: "square", gain: 0.025 });
    tone(2349, 0.06, 0.22, { type: "square", gain: 0.025 });
  },
  start: () => {
    [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.07, 0.25, { type: "sine", gain: 0.05 }));
  },
};

export function setMuted(value: boolean) {
  muted = value;
  try {
    localStorage.setItem(MUTE_KEY, value ? "1" : "0");
  } catch {
    /* storage unavailable: keep in-memory value */
  }
  listeners.forEach((l) => l());
}

export function useMuted() {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => muted,
  );
}
