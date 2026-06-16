// src/components/Homelab.jsx
import { useEffect } from 'react';

import transition from '../transition';
import LabShot from './LabShot';
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

      <ul className="lab-stats">
        {homelab.stats.map((s) => (
          <li key={s.label}>
            <span className="lab-stat-value">{s.value}</span>
            <span className="lab-stat-label">{s.label}</span>
          </li>
        ))}
      </ul>

      <div className="lab-hero">
        <LabShot
          kind="terminal"
          src={homelab.hero.src}
          alt="fastfetch output for every machine in the lab"
          caption={homelab.hero.caption}
        />
      </div>

      {/* Hardware */}
      <section className="block">
        <h2 className="section-label">The rigs</h2>

        <div className="lab-grid">
          {homelab.boxes.map((box) => (
            <article key={box.hostname} className="lab-card">
              <div className="lab-card-head">
                <div className="lab-host">
                  <span className={`lab-dot lab-dot--${box.status}`} aria-hidden="true" />
                  <span className="lab-hostname">{box.hostname}</span>
                </div>
                <span className="lab-status-label">{box.statusLabel}</span>
              </div>

              <div className="lab-card-body">
                {box.photo && (
                  <LabShot
                    kind="photo"
                    src={box.photo}
                    alt={`${box.hostname} hardware`}
                    caption={`${box.hostname} photo`}
                  />
                )}

                <p className="lab-role">{box.role}</p>
                {box.blurb && <p className="lab-blurb">{box.blurb}</p>}

                <LabShot
                  kind="terminal"
                  src={box.fastfetch}
                  alt={`${box.hostname} system info`}
                  caption={`${box.hostname}: fastfetch`}
                />

                <dl className="lab-specs">
                  {box.specs.map((row) => (
                    <div className="lab-spec" key={row.k}>
                      <dt>{row.k}</dt>
                      <dd>{row.v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="lab-services-label">Running</p>
                <ul className="tech-list">
                  {box.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="block">
        <h2 className="section-label">Why I built it</h2>
        <div className="lab-why">
          {homelab.why.map((item) => (
            <article key={item.heading} className="lab-why-card">
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
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
