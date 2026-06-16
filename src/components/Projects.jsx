// src/components/Projects.jsx
import { useEffect } from 'react';

import transition from '../transition';
import ProjectCard from './ProjectCard';
import { projects } from '../data/content';

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="page">
      <header className="page-head">
        <h1>Projects</h1>
        <p className="page-sub">
          A mix of things I&apos;m building now, coursework I&apos;m proud of, and writing I&apos;ve done
          along the way.
        </p>
      </header>

      <section className="block">
        <h2 className="section-label">Currently building</h2>
        <div className="project-stack">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} featured />
          ))}
        </div>
      </section>

      <section className="block">
        <h2 className="section-label">Earlier work</h2>
        <div className="project-stack">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

    </main>
  );
}

export default transition(Projects);
