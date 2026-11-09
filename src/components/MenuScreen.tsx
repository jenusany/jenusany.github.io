import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Navigate, useMatch, useNavigate, useParams } from "react-router-dom";
import { findChannel, type Channel } from "../data/channels";
import { inertProps } from "../lib/inert";
import { sound } from "../lib/sound";
import { BottomBar } from "./BottomBar";
import { ChannelGrid } from "./ChannelGrid";
import { ChannelPreview } from "./ChannelPreview";
import { SectionScreen } from "./SectionScreen";
import styles from "./MenuScreen.module.css";

/**
 * The menu stays mounted for every route past the start screen; the channel
 * preview (/channel/:id) and section page (/channel/:id/start) layer over it.
 */
export function MenuScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const inSection = useMatch("/channel/:id/start") !== null;
  const selected = findChannel(id);

  if (id && !selected) return <Navigate to="/menu" replace />;
  if (inSection && selected?.kind !== "section") return <Navigate to={`/channel/${id}`} replace />;

  const open = (channel: Channel) => {
    sound.select();
    navigate(`/channel/${channel.id}`);
  };

  return (
    <motion.div
      className={styles.screen}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <h1 className="visually-hidden">Jenusan Yogarajah: portfolio channels</h1>
      <LayoutGroup>
        <main className={styles.gridArea} {...inertProps(!!selected)}>
          <ChannelGrid selectedId={selected?.id} onOpen={open} />
        </main>
        <BottomBar inert={!!selected} />
        <AnimatePresence>
          {selected && !inSection && <ChannelPreview key={`preview-${selected.id}`} channel={selected} />}
          {selected && inSection && <SectionScreen key={`section-${selected.id}`} channel={selected} />}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}
