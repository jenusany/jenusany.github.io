import { motion } from "framer-motion";
import { useEffect, useRef, type KeyboardEvent } from "react";
import { useLocation } from "react-router-dom";
import { channelGradient, channels, SLOTS_PER_PAGE, type Channel } from "../data/channels";
import { sound } from "../lib/sound";
import styles from "./ChannelGrid.module.css";

type Props = {
  selectedId?: string;
  onOpen: (channel: Channel) => void;
};

export function ChannelGrid({ selectedId, onOpen }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const returnedFrom = (location.state as { from?: string } | null)?.from;
  const emptySlots = Math.max(0, SLOTS_PER_PAGE - channels.length);

  // When coming back from a channel, put focus back on that channel's tile.
  useEffect(() => {
    if (!returnedFrom || selectedId) return;
    gridRef.current?.querySelector<HTMLButtonElement>(`[data-channel="${returnedFrom}"]`)?.focus({ preventScroll: true });
  }, [returnedFrom, selectedId]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const grid = gridRef.current;
    if (!grid) return;
    const tiles = Array.from(grid.querySelectorAll<HTMLButtonElement>("[data-channel]"));
    const current = tiles.indexOf(document.activeElement as HTMLButtonElement);
    const cols = getComputedStyle(grid).gridTemplateColumns.split(" ").length;
    const step: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols };
    if (!(e.key in step)) return;
    e.preventDefault();
    const next = current === -1 ? 0 : current + step[e.key];
    if (next < 0 || next >= tiles.length) return;
    tiles[next].focus();
    sound.hover();
  };

  return (
    <div ref={gridRef} className={styles.grid} onKeyDown={onKeyDown} aria-label="Channels">
      {channels.map((channel) => {
        const Icon = channel.icon;
        const isSelected = channel.id === selectedId;
        return (
          <button
            key={channel.id}
            type="button"
            className={styles.slot}
            data-channel={channel.id}
            onClick={() => onOpen(channel)}
            onMouseEnter={() => sound.hover()}
            aria-label={`${channel.title}: ${channel.tagline}`}
          >
            {!isSelected && (
              <motion.div
                layoutId={`channel-${channel.id}`}
                className={styles.banner}
                style={{ background: channelGradient(channel), borderRadius: 14 }}
                transition={{ type: "spring", stiffness: 260, damping: 32 }}
              >
                <Icon className={styles.icon} strokeWidth={1.8} aria-hidden="true" />
                <span className={styles.title}>{channel.title}</span>
              </motion.div>
            )}
          </button>
        );
      })}
      {Array.from({ length: emptySlots }, (_, i) => (
        <div key={`empty-${i}`} className={`${styles.slot} ${styles.empty}`} aria-hidden="true" />
      ))}
    </div>
  );
}
