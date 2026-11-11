import { useEffect, useRef, useState } from "react";
import styles from "./Cursor.module.css";

// Fingertip position inside the 44px icon, so clicks land where the finger points.
const HOTSPOT_X = 15;
const HOTSPOT_Y = 4;

// Closed outline of the hand, so the fill covers the whole hand (the line-art icon
// alone is made of open strokes, which left the palm see-through).
const HAND_SILHOUETTE =
  "M6 14V4a2 2 0 0 1 4 0V9a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15Z";
// Finger separation lines drawn over the fill.
const HAND_DETAILS = [
  "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
  "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",
  "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",
];

function Hand({ className }: { className: string }) {
  return (
    <svg className={className} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={HAND_SILHOUETTE} />
      {HAND_DETAILS.map((d) => (
        <path key={d} d={d} fill="none" />
      ))}
    </svg>
  );
}

export function Cursor() {
  const [enabled] = useState(() => window.matchMedia("(pointer: fine)").matches);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("custom-cursor");
    const el = ref.current!;

    const move = (e: PointerEvent) => {
      el.style.transform = `translate(${e.clientX - HOTSPOT_X}px, ${e.clientY - HOTSPOT_Y}px)`;
      el.dataset.visible = "true";
      const interactive = (e.target as Element | null)?.closest("button, a, [role='button']");
      el.dataset.hover = interactive ? "true" : "false";
    };
    const down = () => (el.dataset.pressed = "true");
    const up = () => (el.dataset.pressed = "false");
    const leave = () => (el.dataset.visible = "false");

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("pointerleave", leave);
    return () => {
      root.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("pointerleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={ref} className={styles.cursor} data-visible="false" aria-hidden="true">
      <Hand className={styles.icon} />
    </div>
  );
}
