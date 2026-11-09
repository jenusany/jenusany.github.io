import { skills } from "../data/content";
import s from "./Section.module.css";

export function Skills() {
  return (
    <div className={s.grid4}>
      {skills.map((group) => (
        <section key={group.title} className={s.panel}>
          <h2>{group.title}</h2>
          <ul className={s.list}>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
