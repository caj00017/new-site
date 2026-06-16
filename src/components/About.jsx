// src/components/About.jsx
import { useEffect } from 'react';
import Avatar from 'react-avatar';

import transition from '../transition';
import ContactLinks from './ContactLinks';
import { profile, education, skills } from '../data/content';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page">
      <header className="page-head">
        <h1>About</h1>
        <p className="page-sub">A bit more about who I am and what I&apos;m after.</p>
      </header>

      <section className="about-intro">
        <Avatar name="Chris Jones" size="140" round src={profile.avatar} alt="Chris Jones headshot" />
        <div>
          <p>
            I&apos;m a fourth-year Honors student at West Virginia University pursuing dual degrees in
            Computer Science and Cybersecurity, graduating in December 2026. I&apos;m happiest somewhere
            near the metal (networking, operating systems, distributed infrastructure), and I learn
            best by building tools that force me to understand how things actually work underneath.
          </p>
          <p>
            Right now I'm writing a network mapper in Go to learn the language and the protocols
            firsthand, and helping ship a distributed machine-learning platform as my senior capstone.
            Alongside that I tutor CS, Cybersecurity, and Computer Engineering students, which keeps my
            own fundamentals sharp. I&apos;m looking for software engineering and cybersecurity roles
            where I can keep doing exactly this.
          </p>
          <ContactLinks />
        </div>
      </section>

      <section className="block">
        <h2 className="section-label">Education</h2>
        <div className="edu-card">
          <div className="role-head">
            <h3>{education.school}</h3>
            <span className="role-dates">{education.dates}</span>
          </div>
          <p className="role-org">{education.degree}</p>
          <p className="edu-stats">
            <span>
              <strong>GPA</strong> {education.gpa}
            </span>
            <span>{education.honors}</span>
            <span>{education.location}</span>
          </p>
          <p className="role-note">Relevant coursework</p>
          <ul className="tech-list">
            {education.coursework.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block">
        <h2 className="section-label">Technical skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-group" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="tech-list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default transition(About);
