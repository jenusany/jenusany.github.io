import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { channelGradient, type Channel } from "../data/channels";
import { sound } from "../lib/sound";
import styles from "./ChannelPreview.module.css";

type Rect = { top: number; left: number; right: number; bottom: number };

const CONTROLS_HEIGHT = 130;
const FULL_CLIP = "inset(0px 0px 0px 0px round 0px)";

/** Clip-path that crops the full-screen banner down to the clicked tile's box. */
function clipFromTile(tile: Rect) {
  const bannerHeight = window.innerHeight - CONTROLS_HEIGHT;
  const right = Math.max(0, window.innerWidth - tile.right);
  const bottom = Math.max(0, bannerHeight - tile.bottom);
  return `inset(${tile.top}px ${right}px ${bottom}px ${tile.left}px round 14px)`;
}

export function ChannelPreview({ channel }: { channel: Channel }) {
  const navigate = useNavigate();
  const origin = (useLocation().state as { origin?: Rect } | null)?.origin;
  // Captured once so later re-renders don't restart the reveal.
  const [startClip] = useState(() => (origin ? clipFromTile(origin) : null));
  const startRef = useRef<HTMLButtonElement>(null);
  const Icon = channel.icon;

  const back = () => {
    sound.back();
    navigate("/menu", { state: { from: channel.id } });
  };

  const start = () => {
    sound.select();
    if (channel.kind === "link") window.open(channel.href, "_blank", "noopener,noreferrer");
    else navigate(`/channel/${channel.id}/start`);
  };

  useEffect(() => {
    startRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && back();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-title"
      exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } }}
    >
      <motion.div
        className={styles.banner}
        style={{ background: channelGradient(channel) }}
        // Opened from a tile: grow out of it. Opened another way: gentle fade-in.
        initial={startClip ? { clipPath: startClip } : { opacity: 0, scale: 0.97 }}
        animate={{ clipPath: FULL_CLIP, opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.35 } }}
        >
          <Icon className={styles.icon} strokeWidth={1.4} aria-hidden="true" />
          <h2 id="preview-title" className={styles.title}>
            {channel.title}
          </h2>
          <p className={styles.tagline}>{channel.tagline}</p>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.controls}
        initial={{ y: "100%" }}
        animate={{ y: 0, transition: { delay: 0.15, type: "spring", stiffness: 300, damping: 30 } }}
      >
        <button type="button" className="pill" onClick={back} onMouseEnter={() => sound.hover()}>
          Menu
        </button>
        <button ref={startRef} type="button" className="pill" onClick={start} onMouseEnter={() => sound.hover()}>
          {channel.kind === "link" ? "Open" : "Start"}
        </button>
      </motion.div>
    </motion.div>
  );
}
