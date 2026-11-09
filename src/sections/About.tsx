import { about } from "../data/content";
import s from "./Section.module.css";

export function About() {
  return (
    <div className={s.stack}>
      <div className={s.grid2}>
        <section className={s.panel}>
          <h2>My Journey</h2>
          <p>{about.journey}</p>
        </section>
        <section className={s.panel}>
          <h2>Beyond Code</h2>
          <p>{about.beyondCode}</p>
        </section>
      </div>
      <div className={s.grid4}>
        {about.interests.map((interest) => (
          <section key={interest.title} className={s.panel}>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
