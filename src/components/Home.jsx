// src/components/Home.jsx
import '../App.css';
import Avatar from 'react-avatar';
import transition from '../transition';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import TypeIt from 'typeit'

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

  useEffect(() => {
    window.scrollTo(0, 0);
    new TypeIt("#title", {
      speed: 25,
      waitUntilVisible: true,
    }).go();
  }, []);

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
          related to CS. My updated resume is also available{" "}
          <a
            href="https://docs.google.com/document/d/10JcE1dX6knykYlBcg6qi-wDnr8QXoQ0rM_FexEAuVbw/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>, as well as my{" "}
          <a
            href="https://www.linkedin.com/in/christopher-jones-729089254/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a> and{" "}
          <a
            href="https://app.joinhandshake.com/profiles/cjones"
            target="_blank"
            rel="noopener noreferrer"
          >
            Handshake
          </a>.
        </p>
      </Section>



      {/* WORK EXPERIENCE */}
      <Section title="Work Experience">
        <h3>Tutor, LCSEE Learning & Mentoring Center | West Virginia University | Morgantown, WV</h3>
        <h4>Sept 2024 - Present</h4>
        <p>
          As a tutor at the LCSEE Learning and Mentoring Center, my primary duty is to offer free 
          help with coursework to students in Computer Science, Cybersecurity, and Computer Engineering...<Link to="/work">read more</Link>
        </p>
        <h3>Robotics Instructor Intern | NASA Katherine Johnson IV&amp;V Education Resource Center | Fairmont, WV</h3>
        <h4>May 2023 – Aug 2023, May 2024 – Aug 2024</h4>
        <p>
          This summer and last, I had the privilege to work with the NASA IV&amp;V Education Resource Center…<Link to="/work">read more</Link>
        </p>
      </Section>

      {/* EDUCATION */}
      <Section title="Education">
        <h3>West Virginia University | Morgantown, WV</h3>
        <h4>BS, Computer Science; BS, Cybersecurity</h4>
        <h4>Aug 2022 - Dec 2026</h4>
        <p>
          <b>GPA:</b> 3.79
        </p>
        <p>
          <b>Relevant coursework</b> includes but is not limited to: Secure Software Development,
          Calculus I-III, Operating System Structure, Web Application Design, File and Data
          Structures, Discrete Mathematics, Analysis of Algorithms
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
          <b>TaskGarden, Spring 2024</b> — A task management web app created for CS 230: Web Application Development where users complete tasks
          to earn points and upgrade a virtual plant. Built with React (frontend) and Firestore (backend), hosted on Firebase, 
          created Spring 2024 over the course of the semester. This project was really fun to build and not only did it help
          me develop valuable webapp development skills but it also sparked a greater interest in software engineering which
          I carry to this day. 
        </p>
        <p>
          Note that the app is rudimentary and unfinished. TaskGarden is best experienced in a 1920x1080 window.
          Click the screenshot below to try the app for yourself. The source code is available via the GitHub repository{" "}
          <a href="https://github.com/WVU-CS230-2024-01-Group10/TaskGarden">here</a>.
        </p>
        <a href="https://taskgarden-8c627.web.app/" target="_blank" rel="noopener noreferrer">
          <img id="taskGardenScreenshot" src="/taskgarden-ss.png" alt="TaskGarden app screenshot" />
        </a>
        <p className="subtitle">
          TaskGarden © 2024 Christopher Jones, Elijah Hall, Daniel Campa, Gillian Breeden, Sandrik Tabidze
        </p>
        <p>

        <p>
          <b>"MergeConflict" MPX, Fall 2024</b> — A rudimentary operating system created for CS 450: Operating System Structure where users
          can create and execute test processes, allocate memory, and perform various other basic OS tasks. 
          Programmed in C and Assembly and tested with QEMU, created Fall 2024 over the course of the semester. 
          This was my most engaging project by far and although it was very difficult at times, it was satisfying to watch it all come
          together and learn meaningful OS programming and debugging skills alongside my CS 450 groupmates. The source code for Release 6.0 of MergeConflict
          is available <a href="https://github.com/WVU-CS450/MergeConflict/releases/tag/R6">here</a>.
        </p>
        <img id="mergeConflictScreenshot" src="/MergeConflict-1.png" alt="MergeConflict console screenshot" />
        <p className="subtitle">
          MergeConflict © 2024 Christopher Jones, Evan Humphrey, Tanner Forbes, Izaak Whetsell
        </p>

        </p>
      </Section>
    </>
  );
}

export default transition(Home);
