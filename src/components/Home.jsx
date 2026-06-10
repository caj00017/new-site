// src/components/Home.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import TypeIt from 'typeit';

import transition from '../transition';
import ProjectCard from './ProjectCard';
import ContactLinks from './ContactLinks';
import { profile, projects } from '../data/content';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    new TypeIt('#title', { speed: 28, waitUntilVisible: true }).go();
  }, []);

  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <header className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Hi, I&apos;m</p>
          <h1 id="title">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <ContactLinks />
        </div>

        <Avatar
          name="Chris Jones"
          size="180"
          round
          src={profile.avatar}
          alt="Chris Jones headshot"
          className="hero-avatar"
        />
      </header>

      <section className="block">
        <div className="block-head">
          <h2>Featured work</h2>
          <Link to="/projects" className="block-link">
            All projects →
          </Link>
        </div>
        <p className="block-intro">
          What I&apos;m building right now: a network scanner I&apos;m writing in Go, and a
          distributed machine-learning platform I&apos;m helping ship as my senior capstone.
        </p>

        <div className="project-stack">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} featured />
          ))}
        </div>
      </section>

      <section className="block cta-block">
        <h2>Additional information</h2>
        <p>
          Browse my full project list, my work and research experience, or more about my
          background.
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
