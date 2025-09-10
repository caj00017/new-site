// src/components/Home.jsx
import '../App.css';
import Avatar from 'react-avatar';
import transition from '../transition';

function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      {title && <h2>{title}</h2>}
      {subtitle && <h4>{subtitle}</h4>}
      {children}
    </section>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="title-block">
          <h1 id="title">Christopher Jones</h1>
          <h2>WVU 2026 | Honors Student in Computer Science, Cybersecurity</h2>
        </div>

        <Avatar
          name="Chris Jones"
          size="220"
          round
          src="/IMG_7895.jpg"     
          alt="Chris Jones headshot"
        />
      </header>

      {/* INTRO */}
      <p className="lede">
        Hi! My name is Chris Jones. I'm creating this website to serve as an interactive
        portfolio/resume detailing my work/study experience and other things I've worked on.
        On this page, you can find a bit more detail about myself and the kind of
        stuff I like to do.
      </p>

      {/* ABOUT */}
      <Section title="About Me">
        <p>
          Motivated third-year Computer Science and Cybersecurity student with a strong academic
          background and hands-on experience in robotics instruction, programming, and AI research. 
          Eager to apply problem-solving and technical skills in innovative software development and 
          cybersecurity roles. On this site, I've included details about my work and study experience 
          related to CS, and I have linked the{" "}
          <a href="https://github.com/caj00017/new-site" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          repository for this website as well as my{" "}
          <a
            href="https://docs.google.com/document/d/10JcE1dX6knykYlBcg6qi-wDnr8QXoQ0rM_FexEAuVbw/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>.
        </p>
      </Section>

      {/* RESEARCH */}
      <Section title="Research Projects" subtitle="Research I have conducted as part of my WVU coursework so far.">
        <p>
          <b>Author, Research Report: The Benefits and Drawbacks of Generative AI Use for Programming Work</b>{" "}
          (Unpublished, available upon request).
        </p>
        <ul>
          <li>
            Conducted an in-depth analysis of generative AI's impact on the programming field,
            highlighting productivity enhancements for experienced developers and risks of
            over-reliance among novice programmers.
          </li>
          <li>Synthesized insights from scholarly research and interviews with faculty experts.</li>
          <li>
            Explored ethical and practical implications of AI in software development, emphasizing
            best practices for effective AI use in the workplace.
          </li>
        </ul>
        <p>
          A copy of my research report can be accessed{" "}
          <a
            href="https://docs.google.com/document/d/16r7Xpsy2Y9nXnA7KpYg6BSHmOL50XLau0qD36neGq28/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </p>
      </Section>

      {/* ACADEMIC PROJECTS */}
      <Section title="Academic Projects" subtitle="Other projects I have completed as part of my WVU coursework so far.">
        <p>
          <b>TaskGarden</b> — A task management web app created for CS 230 where users complete tasks
          to earn points and upgrade a virtual plant. Built with React (frontend) and Firestore
          (backend), hosted on Firebase.
        </p>
        <a href="https://taskgarden-8c627.web.app/" target="_blank" rel="noopener noreferrer">
          <img id="taskGardenScreenshot" src="/taskgarden-ss.png" alt="TaskGarden app screenshot" />
        </a>
        <p className="subtitle">
          TaskGarden © 2024 Christopher Jones, Elijah Hall, Daniel Campa, Gillian Breeden, Sandrik Tabidze
        </p>
        <p>
          Created Spring 2024 over a few months. While I could build something similar solo now, it was
          a team effort then and I credit my CS 230 teammates for the joint development.
        </p>
      </Section>

      {/* WORK EXPERIENCE */}
      <Section title="Work Experience">
        <h3>Robotics Instructor Intern | NASA Katherine Johnson IV&amp;V Education Resource Center | Fairmont, WV</h3>
        <h4>May 2023 – Aug 2023, May 2024 – Aug 2024</h4>
        {/* (Keeping your narrative content intact) */}
        <p>
          As of July 2024, my only relevant work experience has been with the NASA IV&amp;V Education Resource Center…
        </p>
        {/* ...keep the rest of your paragraphs as-is */}
      </Section>
    </>
  );
}

export default transition(Home);
