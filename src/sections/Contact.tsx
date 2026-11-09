import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";
import s from "./Section.module.css";

export function Contact() {
  return (
    <section className={`${s.panel} ${s.center}`}>
      <h2>Feel free to reach out for any reason!</h2>
      <p>I'm always looking for new opportunities, collaborations, and experiences.</p>
      <div className={s.links}>
        <a className={s.link} href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" /> {profile.email}
        </a>
        <a className={s.link} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin aria-hidden="true" /> LinkedIn
        </a>
        <a className={s.link} href={profile.github} target="_blank" rel="noopener noreferrer">
          <Github aria-hidden="true" /> GitHub
        </a>
      </div>
    </section>
  );
}
