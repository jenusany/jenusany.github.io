import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { player, worlds, type World } from "../data/content";
import { sound } from "../lib/sound";
import s from "./About.module.css";
import { Photo } from "./Photo";

/* ---------- Player sprite (original pixel art) ---------- */

// K hair · E headband · A ear cups · S skin · H hoodie · W strings · P pants · B shoes
const SPRITE = [
  "...KKKKK....",
  "..KKKKKKK...",
  ".EKKKKKKKE..",
  ".ASSSSSSSA..",
  ".ASKSSSKSA..",
  "..SSSSSSS...",
  "..SSKKKSS...",
  "...SSSSS....",
  "..HHHHHHH...",
  ".HHHWHWHHH..",
  ".HHHHHHHHH..",
  "SHHHHHHHHHS.",
  "..HHHHHHH...",
  "..PPP.PPP...",
  "..PPP.PPP...",
  ".BBBB.BBBB..",
];
const PALETTE: Record<string, string> = {
  K: "#1b1b1f",
  E: "#2d2d33",
  A: "#33c3f0",
  S: "#a5683f",
  H: "#4f2683",
  W: "#ffffff",
  P: "#2d333b",
  B: "#111111",
};

function Sprite() {
  return (
    <svg className={s.sprite} viewBox="0 0 12 16" shapeRendering="crispEdges" aria-hidden="true">
      {SPRITE.flatMap((row, y) =>
        [...row].map((c, x) => (c === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={PALETTE[c]} />)),
      )}
    </svg>
  );
}

/* ---------- HUD ---------- */

function Hud({ coins, stage }: { coins: number; stage: string }) {
  return (
    <section className={s.hud} aria-label="Player status">
      <div>
        <span className={s.hudLabel}>Player</span>
        <span className={s.hudValue}>{player.name}</span>
      </div>
      <div>
        <span className={s.hudLabel}>Coins</span>
        <span className={s.hudValue}>
          <span className={s.coinIcon} aria-hidden="true" /> ×{String(coins).padStart(2, "0")}
        </span>
      </div>
      <div>
        <span className={s.hudLabel}>World</span>
        <span className={s.hudValue}>{stage}</span>
      </div>
      <p className={s.hudSub}>{player.subtitle}</p>
    </section>
  );
}

/* ---------- Overworld map ---------- */

// Horizontal position of each level block on the map, in %.
const nodeX = (i: number) => 12 + (i * 76) / (worlds.length - 1);

function Overworld({
  activeIndex,
  visited,
  onChoose,
}: {
  activeIndex: number;
  visited: Set<string>;
  onChoose: (index: number) => void;
}) {
  const hop = useAnimationControls();
  const firstRender = useRef(true);

  // Hop the character to the chosen level (no hop on first render).
  useEffect(() => {
    const left = `${nodeX(activeIndex)}%`;
    if (firstRender.current) {
      firstRender.current = false;
      hop.set({ left });
      return;
    }
    void hop.start({
      left,
      y: [0, -46, 0],
      transition: { left: { duration: 0.55, ease: "easeInOut" }, y: { duration: 0.55, times: [0, 0.45, 1], ease: "easeOut" } },
    });
  }, [activeIndex, hop]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = Math.min(worlds.length - 1, Math.max(0, activeIndex + step));
    onChoose(next);
    e.currentTarget.querySelector<HTMLButtonElement>(`[data-index="${next}"]`)?.focus();
  };

  return (
    <div className={s.map}>
      <div className={s.cloud} style={{ top: "14%", left: "8%" }} />
      <div className={s.cloud} style={{ top: "6%", left: "58%", scale: 0.8 }} />
      <div className={`${s.cloud} ${s.cloudSlow}`} style={{ top: "26%", left: "80%", scale: 0.6 }} />
      <div className={s.hill} style={{ left: "-6%", width: "38%", height: "48%" }} />
      <div className={s.hill} style={{ left: "52%", width: "30%", height: "36%" }} />
      <div className={s.path} aria-hidden="true" />

      <div className={s.nodes} role="tablist" aria-label="Levels" onKeyDown={onKeyDown}>
        {worlds.map((world, i) => {
          const selected = i === activeIndex;
          return (
            <button
              key={world.id}
              type="button"
              role="tab"
              id={`level-tab-${world.id}`}
              aria-selected={selected}
              aria-controls="level-panel"
              aria-label={`Level ${world.stage}: ${world.name}`}
              tabIndex={selected ? 0 : -1}
              data-index={i}
              className={s.block}
              style={{ left: `${nodeX(i)}%` }}
              onClick={() => onChoose(i)}
              onMouseEnter={() => sound.hover()}
            >
              <span className={s.blockEmoji} aria-hidden="true">
                {world.emoji}
              </span>
              {world.stage}
              {visited.has(world.id) && <span className={s.cleared} aria-hidden="true" />}
            </button>
          );
        })}
      </div>

      <motion.div className={s.player} animate={hop} style={{ left: `${nodeX(0)}%` }}>
        <Sprite />
      </motion.div>

      <div className={s.ground} aria-hidden="true" />
    </div>
  );
}

/* ---------- Level stage ---------- */

function Stage({ world, isLast, onNext }: { world: World; isLast: boolean; onNext: () => void }) {
  const navigate = useNavigate();
  return (
    <motion.div
      className={s.stage}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
    >
      <header className={s.stageHeader} style={{ background: `linear-gradient(180deg, ${world.colors[0]}, ${world.colors[1]})` }}>
        <span className={s.stageNo}>World {world.stage}</span>
        <h2>
          <span aria-hidden="true">{world.emoji}</span> {world.name}
        </h2>
        <p>{world.tagline}</p>
      </header>

      <div className={s.stageBody}>
        <div className={s.copy}>
          {world.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}

          {world.levels && (
            <ol className={s.levels}>
              {world.levels.map((lvl) => (
                <li key={lvl.level}>
                  <span className={s.levelBadge}>{lvl.level}</span>
                  <div>
                    <h3>{lvl.title}</h3>
                    <p className={s.when}>{lvl.when}</p>
                    <p>{lvl.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}

          <div className={s.coins}>
            <h3>Coins collected</h3>
            <ul>
              {world.achievements.map((a, i) => (
                <motion.li key={a} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 + i * 0.12 }}>
                  <span className={s.coinIcon} aria-hidden="true" />
                  {a}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {world.photos.length > 0 && (
          <div className={s.photos}>
            {world.photos.map((photo) => (
              <Photo key={photo.src} photo={photo} />
            ))}
          </div>
        )}
      </div>

      <footer className={s.clear}>
        <span className={s.clearText}>
          <span aria-hidden="true">🚩</span> Level clear!
        </span>
        {isLast && world.link ? (
          <button
            type="button"
            className={s.nextBtn}
            onMouseEnter={() => sound.hover()}
            onClick={() => {
              sound.select();
              navigate(`/channel/${world.link!.channel}/start`);
            }}
          >
            {world.link.label} ▶
          </button>
        ) : (
          <button type="button" className={s.nextBtn} onMouseEnter={() => sound.hover()} onClick={onNext}>
            Next level ▶
          </button>
        )}
      </footer>
    </motion.div>
  );
}

/* ---------- Page ---------- */

export function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visited, setVisited] = useState(() => new Set([worlds[0].id]));
  const mapRef = useRef<HTMLDivElement>(null);
  const active = worlds[activeIndex];
  const coins = worlds.filter((w) => visited.has(w.id)).reduce((sum, w) => sum + w.achievements.length, 0);

  const choose = (index: number) => {
    if (index === activeIndex) return;
    const world = worlds[index];
    sound.jump();
    setActiveIndex(index);
    if (!visited.has(world.id)) {
      setTimeout(sound.coin, 450);
      setVisited((prev) => new Set(prev).add(world.id));
    }
  };

  const next = () => {
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    choose(Math.min(activeIndex + 1, worlds.length - 1));
  };

  return (
    <div className={s.about}>
      <Hud coins={coins} stage={active.stage} />
      <div ref={mapRef} className={s.mapWrap}>
        <h2 className={s.selectTitle}>Pick a level</h2>
        <Overworld activeIndex={activeIndex} visited={visited} onChoose={choose} />
      </div>
      <div id="level-panel" role="tabpanel" aria-labelledby={`level-tab-${active.id}`}>
        <Stage key={active.id} world={active} isLast={activeIndex === worlds.length - 1} onNext={next} />
      </div>
    </div>
  );
}
