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

      {/* <ul className="lab-stats">
        {homelab.stats.map((s) => (
          <li key={s.label}>
            <span className="lab-stat-value">{s.value}</span>
            <span className="lab-stat-label">{s.label}</span>
          </li>
        ))}
      </ul> */}

      <section className="block">
        <h2 className="section-label">Infrastructure</h2>
        <div className="lab-grid">
          {homelab.boxes.map((box) => (
            <article key={box.hostname} className="lab-card">
              <div className="lab-card-head">
                <div className="lab-host">
                  <span className={`lab-dot lab-dot--${box.status}`} aria-hidden="true" />
                  <h3 className="lab-hostname">{box.name}</h3>
                </div>
                <span className="lab-status-label">{box.statusLabel}</span>
              </div>
              <div className="lab-card-body">
                <p className="lab-role">{box.role}</p>
                <p className="lab-blurb">{box.blurb}</p>
                <dl className="lab-specs">
                  {box.specs.map((row) => (
                    <div className="lab-spec" key={row.k}>
                      <dt>{row.k}</dt>
                      <dd>{row.v}</dd>
                    </div>
                  ))}
                </dl>
                {box.screenshot && <LabShot {...box.screenshot} />}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="section-label">Services</h2>
        <div className="lab-detail-grid">
          {homelab.services.map((service) => (
            <article key={service.heading} className="lab-detail-card">
              <h3>{service.heading}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="section-label">Observability</h2>
        <p className="block-intro">{homelab.observability.intro}</p>
        <LabShot {...homelab.observability.screenshot} />
        <div className="lab-detail-grid lab-observability-tools">
          {homelab.observability.tools.map((tool) => (
            <article key={tool.heading} className="lab-detail-card">
              <h3>{tool.heading}</h3>
              <p>{tool.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="section-label">Networking and remote access</h2>
        <div className="lab-detail-grid">
          {homelab.networking.map((item) => (
            <article key={item.heading} className="lab-detail-card">
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="section-label">Development and experimentation</h2>
        <div className="lab-detail-grid">
          {homelab.development.map((item) => (
            <article key={item.heading} className="lab-detail-card">
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default transition(Homelab);
