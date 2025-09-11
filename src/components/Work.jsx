// src/components/Work.jsx
import { useEffect } from "react";
import transition from "../transition";
import TypeIt from 'typeit'
import { Link } from "react-router-dom";

function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      {title && <h2>{title}</h2>}
      {subtitle && <h4>{subtitle}</h4>}
      {children}
    </section>
  );
}

function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
    new TypeIt("#title", {
      speed: 25,
      waitUntilVisible: true,
    }).go();
  }, []);

  return (
    <>
      {/* Back to home link */}
      <Link to="/" className="back-home" aria-label="Back to home">
        {/* inline SVG so you don't need an icon lib */}
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* HERO (matches Home’s structure) */}
      <header className="hero">
        <div className="title-block">
          <h1 id="title">Work Experience</h1>
        </div>
      </header>

      {/* Tutoring Section */}
      <Section 
        title="Tutor, LCSEE Learning & Mentoring Center"
        subtitle="West Virginia University · Morgantown, WV · Sept 2024 - Present" 
      >
        <p>
          As a tutor at the LCSEE Learning and Mentoring Center, my primary duty is to offer free 
          help with coursework to students in Computer Science, Cybersecurity, and Computer Engineering.
        </p>
        <p>
          The WVU courses I am qualified to tutor for (passed with an A) are as follows:
          <ul>
            <li>CS 110 Introduction to Computer Science</li>
            <li>CS 111 Introduction to Data Structures</li>
            <li>CS 210 File and Data Structures</li>
            <li>CS 220 Discrete Mathematics</li>
            <li>CS 310 Principles of Programming Languages</li>
            <li>CS 320 Analysis of Algorithms</li>
            <li>CS 330/L Intro to Software Engineering/Lab</li>
            <li>CS 350 Computer System Concepts.</li>
            <li>CPE 271/L Intro to Digital Logic Design/Lab</li>
            <li>CS 450 Operating System Structure</li>
            <li>CYBE 366 Secure Software Development</li>
          </ul>
        </p>
      </Section>

      {/* NASA Section */}
      <Section
        title="Robotics Instructor Intern"
        subtitle="NASA Katherine Johnson IV&V Education Resource Center · Fairmont, WV · May 2023 – Aug 2023, May 2024 – Aug 2024"
      >
        <p>
          This summer and last, I had the privilege to work with the NASA IV&amp;V Education
          Resource Center as a Robotics Summer Instructor from May–August 2023 and 2024. 
          My experiences with the ERC are detailed below. This essay was written on July 31st, 
          2023, on the final day of my first internship with the NASA ERC team.
        </p>
        <figure className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QQJnMR5dfwg?si=qsE-n_aSL2JtLxV2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <figcaption>The Robotic Freeze Tag Activity</figcaption>
        </figure>
        <p>
          Over the course of the past ten weeks, I’ve had the pleasure of working with the West Virginia
          Robotics Alliance, founded by the Education Resource Center (ERC) of the NASA Katherine Johnson 
          IV&V Facility in Fairmont, WV. As someone from Elkins, and with very little robotics exposure or 
          experience, I had no idea educational and competitive robotics were so prevalent in our state, 
          so being able to work with the Robotics Alliance this summer was a genuinely eye-opening and 
          fulfilling experience.
        </p>
        <p>
          At the start of the internship, I took part in setting up and assisting with the management of 
          the REC Foundation Aerial Drone Competition in Fairmont. On the first day we set up all the competition 
          fields and assembled their elements. During the next two days, I would assist with queueing teams for 
          competition and managing “pit” areas, which is where teams would spend their downtime before and after 
          competing. This management involved making announcements and assisting with any issues that teams would 
          encounter. Following the drone competition were two weeks of staff training, which included the 
          familiarization of both robotics platforms and the organization of robotics kits. During this time, I 
          also assisted another ERC employee with an ongoing project, which involved the assembly and shipping of
          robotics kits to an all-girls school in Taiwan.
        </p>
        <p>
          During our several weeks of summer camps, our team traveled to different cities across the state to set
          up and facilitate robotics camps for students aged 6-12. Our first camp was in South Charleston, followed
          by Morgantown, Huntington, two Fairmont camps, and ending with Martinsburg. Each VEX IQ camp, for students
          aged 9-12, generally followed the format of teaching students about the VEX IQ platform, instructing them
          on how to build a robot, and introducing and playing multiple games, one of which I created, programmed,
          taught, and facilitated myself–the Freeze Tag game, which involved students dividing into teams of three
          and attempting to “freeze” the other teams’ robots by touching the bumper sensor on the back.
        </p>
        <figure className="float-media">
          <img src="/IMG_9778_Original.png" alt="field" />
          <figcaption>Vex IQ Full Volume Field</figcaption>
        </figure>
        <p>
          It was wonderful helping the students with assembly and programming and watching them get excited and have
          fun playing the game. At the end of each camp, we helped students clean up and fully organize their robot 
          kits before we packed everything up and moved back to our base of operations in Fairmont.
        </p>
        <p>
          During the week of July 10-14, I took a break from running summer camps with the Robotics Alliance to help
          out with the Destination Space overnight camp at Fairmont State University for high-school-aged students. 
          My duties during the week involved having dinner with the students, facilitating evening activities–which 
          usually involved playing games at the Rec Center–making sure all students went to sleep and woke up on time, 
          and escorting them to breakfast and to their morning class.
        </p>
        <p>
          All in all, working with the Robotics Alliance this summer was an extremely enriching experience. I learned a
          lot, not only about educational robotics, but also about myself. At the beginning of the summer, as someone with
          little teaching experience and even less in the field of robotics, I never thought I’d be able to do the things
          I did. Working with the NASA ERC and the WV Robotics Alliance really helped me find a way to combine education
          with my ongoing passion for technology into something that could very well shape my career in the future.
        </p>
        <Link to="/">&lt;&lt; Back home</Link>
      </Section>
    </>
  );
}

export default transition(Work);
