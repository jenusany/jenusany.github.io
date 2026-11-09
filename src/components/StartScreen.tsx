import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../data/content";
import { sound, unlockAudio } from "../lib/sound";
import styles from "./StartScreen.module.css";

// [left %, size px, rise duration s, delay s]: hand-scattered so bubbles don't line up.
const BUBBLES = [
  [4, 46, 15, -2], [14, 82, 19, -11], [27, 38, 13, -6], [38, 64, 17, -14], [49, 30, 12, -3],
  [58, 90, 21, -9], [69, 44, 14, -12], [78, 58, 18, -4], [88, 34, 13, -8], [94, 72, 20, -16],
] as const;

export function StartScreen() {
  const navigate = useNavigate();
  const started = useRef(false);

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    unlockAudio();
    // Give the AudioContext a tick to resume before playing the jingle.
    setTimeout(sound.start, 30);
    navigate("/menu");
  }, [navigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.key === "Tab") return;
      start();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [start]);

  return (
    <motion.main
      className={styles.screen}
      onClick={start}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.4 } }}
    >
      <div className={styles.bubbles} aria-hidden="true">
        {BUBBLES.map(([left, size, duration, delay], i) => (
          <span key={i} style={{ left: `${left}%`, width: size, animationDuration: `${duration}s`, animationDelay: `${delay}s` }} />
        ))}
      </div>

      <div className={styles.card}>
        <p className={styles.welcome}>Welcome</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.headline}>{profile.headline}</p>
        <div className={styles.divider} />
        <button type="button" className={styles.prompt} onClick={start}>
          Click anywhere or press any key to start
        </button>
      </div>

      <p className={styles.footnote}>Best experienced with sound on 🔊</p>
    </motion.main>
  );
}
