// src/components/Home.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import transition from '../transition';
import ProjectCard from './ProjectCard';
import ContactLinks from './ContactLinks';
import { profile, projects } from '../data/content';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <header className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">FIELD NOTE 001 / CANDIDATE PROFILE</p>
          <h1 id="title"><span>CHRIS</span><span>JONES</span></h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <ContactLinks />
        </div>
        <aside className="hero-terminal" aria-label="Candidate status">
          <div className="terminal-head">STATUS://OPEN</div>
          <p>&gt; LOCATION <span>MORGANTOWN, WV</span></p>
          <p>&gt; GRADUATION <span>DEC 2026</span></p>
          <p>&gt; FOCUS <span>NETWORK DEFENSE</span></p>
          <p>&gt; CURRENT_OP <span>PORTMANGO</span></p>
          <div className="packet-art" aria-hidden="true">01001010<br/>11000101<br/>00110110<br/>10101101</div>
        </aside>
      </header>

      <section className="block">
        <div className="block-head">
          <div><p className="kicker">SELECTED OPERATIONS</p><h2>Field work</h2></div>
          <Link to="/projects" className="block-link">
            All projects →
          </Link>
        </div>
        <p className="block-intro">
          Proof of work across network discovery, Linux infrastructure, distributed systems, and low-level software.
        </p>

        <div className="project-stack">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} featured />
          ))}
        </div>
      </section>

      <section className="block cta-block">
        <p className="terminal-prompt">&gt; INITIALIZE CONTACT<span className="cursor">█</span></p>
        <h2>Let&apos;s inspect the network.</h2>
        <p>
          I&apos;m looking for cybersecurity and networking teams where curiosity, careful testing,
          and a willingness to understand the whole stack matter.
        </p>
        <div className="cta-row">
          <Link to="/projects" className="btn btn-primary">
            Browse projects
          </Link>
          <Link to="/experience" className="btn btn-ghost">
            Work & research
          </Link>
          <Link to="/about" className="btn btn-ghost">
            About me
          </Link>
        </div>
      </section>
    </>
  );
}

export default transition(Home);
