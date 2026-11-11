import { ImageIcon } from "lucide-react";
import { useState } from "react";
import type { Photo as PhotoData } from "../data/content";
import s from "./About.module.css";

/**
 * Polaroid-style photo. If the file is missing, dev builds show a labelled
 * placeholder (so you know which file to add) and production hides the slot.
 */
export function Photo({ photo }: { photo: PhotoData }) {
  const [missing, setMissing] = useState(false);
  if (missing && !import.meta.env.DEV) return null;

  return (
    <figure className={s.frame}>
      {missing ? (
        <div className={s.photoPlaceholder}>
          <ImageIcon aria-hidden="true" />
          <span>Add public{photo.src}</span>
        </div>
      ) : (
        <img src={photo.src} alt={photo.alt} loading="lazy" style={{ objectPosition: photo.focus }} onError={() => setMissing(true)} />
      )}
    </figure>
  );
}
