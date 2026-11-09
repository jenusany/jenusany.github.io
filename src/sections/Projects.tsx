import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/content";
import s from "./Section.module.css";

export function Projects() {
  return (
    <div className={s.grid2}>
      {projects.map((project) => (
        <article key={project.title} className={s.panel}>
          <h2>{project.title}</h2>
          <p className={s.meta}>{project.year}</p>
          <p style={{ marginTop: 12 }}>{project.description}</p>
          <ul className={s.tags} aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className={s.links}>
            {project.github && (
              <a className={s.link} href={project.github} target="_blank" rel="noopener noreferrer">
                <Github aria-hidden="true" /> Code
              </a>
            )}
            {project.demo && (
              <a className={s.link} href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink aria-hidden="true" /> Live demo
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
