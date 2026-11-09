import { motion } from "framer-motion";
import { useEffect, type ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { channelGradient, type Channel } from "../data/channels";
import { sound } from "../lib/sound";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { Skills } from "../sections/Skills";
import styles from "./SectionScreen.module.css";

const sections: Record<string, ComponentType> = {
  about: About,
  projects: Projects,
  skills: Skills,
  contact: Contact,
};

export function SectionScreen({ channel }: { channel: Channel }) {
  const navigate = useNavigate();
  const id = channel.id;
  const Section = sections[id];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      sound.back();
      navigate("/menu", { state: { from: id } });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [id, navigate]);

  const Icon = channel.icon;

  return (
    <motion.div
      className={styles.page}
      role="dialog"
      aria-modal="true"
      aria-labelledby="section-title"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.35 }}
    >
      <header className={styles.header} style={{ background: channelGradient(channel) }}>
        <Icon className={styles.icon} strokeWidth={1.6} aria-hidden="true" />
        <h1 id="section-title" className={styles.title}>{channel.title}</h1>
      </header>

      <main className={styles.content}>
        {Section ? <Section /> : <p>Coming soon.</p>}
      </main>

      <footer className={styles.footer}>
        <button
          type="button"
          className="pill"
          onClick={() => {
            sound.back();
            navigate("/menu", { state: { from: channel.id } });
          }}
          onMouseEnter={() => sound.hover()}
        >
          Menu
        </button>
      </footer>
    </motion.div>
  );
}
