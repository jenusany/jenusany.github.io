import { Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { inertProps } from "../lib/inert";
import { sound } from "../lib/sound";
import styles from "./BottomBar.module.css";

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

export function BottomBar({ inert }: { inert: boolean }) {
  const navigate = useNavigate();
  const now = useNow();
  const hours = now.getHours() % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const period = now.getHours() < 12 ? "AM" : "PM";
  const date = now.toLocaleDateString(undefined, { weekday: "short", month: "numeric", day: "numeric" });

  const go = (id: string) => {
    sound.select();
    navigate(`/channel/${id}`);
  };

  return (
    <footer className={styles.bar} {...inertProps(inert)}>
      <time className={styles.clock} dateTime={now.toISOString()}>
        <span className={styles.time}>
          {hours}
          <span className={styles.colon}>:</span>
          {minutes}
          <small>{period}</small>
        </span>
      </time>

      <svg className={styles.shape} viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f9fafb" />
            <stop offset="1" stopColor="#dfe4e9" />
          </linearGradient>
        </defs>
        <path
          d="M0 18 C 90 18 150 62 250 62 L 750 62 C 850 62 910 18 1000 18 L 1000 150 L 0 150 Z"
          fill="url(#barFill)"
          stroke="#c9d0d7"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <button type="button" className={`${styles.round} ${styles.left}`} onClick={() => go("about")} onMouseEnter={() => sound.hover()} aria-label="About me">
        <User strokeWidth={2.2} />
      </button>

      <span className={styles.date}>{date}</span>

      <button type="button" className={`${styles.round} ${styles.right}`} onClick={() => go("contact")} onMouseEnter={() => sound.hover()} aria-label="Contact me">
        <Mail strokeWidth={2.2} />
      </button>
    </footer>
  );
}
