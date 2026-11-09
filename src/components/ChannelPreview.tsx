import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { channelGradient, type Channel } from "../data/channels";
import { sound } from "../lib/sound";
import styles from "./ChannelPreview.module.css";

export function ChannelPreview({ channel }: { channel: Channel }) {
  const navigate = useNavigate();
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
      // Keeps the overlay mounted while the banner zooms back into its tile.
      exit={{ opacity: 1, transition: { duration: 0.4 } }}
    >
      <motion.div
        layoutId={`channel-${channel.id}`}
        className={styles.banner}
        style={{ background: channelGradient(channel), borderRadius: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 32 }}
      >
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.35 } }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
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
        exit={{ y: "100%", transition: { duration: 0.2 } }}
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
