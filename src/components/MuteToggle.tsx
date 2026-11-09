import { Volume2, VolumeX } from "lucide-react";
import { setMuted, unlockAudio, useMuted } from "../lib/sound";
import styles from "./MuteToggle.module.css";

export function MuteToggle() {
  const muted = useMuted();
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => {
        unlockAudio();
        setMuted(!muted);
      }}
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
      aria-pressed={muted}
    >
      {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
    </button>
  );
}
