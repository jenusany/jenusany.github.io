import { experience, leadership, type Role } from "../data/content";
import s from "./Section.module.css";

function RoleCard({ role }: { role: Role }) {
  return (
    <article className={s.panel}>
      <div className={s.roleHead}>
        <div>
          <h3>{role.title}</h3>
          <p className={s.org}>{role.org}</p>
        </div>
        <p className={s.meta}>
          {role.dates}
          <br />
          {role.location}
        </p>
      </div>
      <ul className={s.points}>
        {role.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <div className={s.stack}>
      <h2 className={s.heading}>Work</h2>
      {experience.map((role) => (
        <RoleCard key={role.org + role.title} role={role} />
      ))}
      <h2 className={s.heading}>Leadership</h2>
      {leadership.map((role) => (
        <RoleCard key={role.org + role.title} role={role} />
      ))}
    </div>
  );
}
