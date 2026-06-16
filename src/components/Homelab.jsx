// src/components/Homelab.jsx
import { useEffect } from 'react';

import transition from '../transition';
import { homelab } from '../data/content';

function Homelab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page">
      <header className="page-head">
        <h1>Homelab</h1>
        <p className="page-sub">{homelab.tagline}</p>
      </header>

      {/* Hardware */}
      <section className="block">
        <h2 className="section-label">Hardware</h2>

        <div className="project-stack">
          {homelab.boxes.map((box) => (
            <article key={box.hostname} className="role">
              <div className="role-head">
                <h2>{box.hostname}</h2>
                <span className="role-dates">{box.ip}</span>
              </div>
              <p className="role-org">{box.role}</p>
              <p className="project-meta">{box.specs}</p>

              <p className="role-note">Running</p>
              <ul className="tech-list">
                {box.services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="block">
        <h2 className="section-label">Why I built it</h2>

        {homelab.why.map((item) => (
          <article key={item.heading} className="role">
            <h3 className="project-name">{item.heading}</h3>
            <p className="project-summary">{item.body}</p>
          </article>
        ))}
      </section>

      {/* Tech tags */}
      <section className="block">
        <h2 className="section-label">Technologies</h2>
        <ul className="tech-list">
          {homelab.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default transition(Homelab);
