import { Pointer } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./Cursor.module.css";

// Fingertip position inside the 40px icon, so clicks land where the finger points.
const HOTSPOT_X = 13;
const HOTSPOT_Y = 3;

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
      <Pointer className={styles.icon} size={40} strokeWidth={1.6} />
    </div>
  );
}
