// src/components/Experience.jsx
import { useEffect } from 'react';

import transition from '../transition';
import { experience } from '../data/content';

function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tutor, nasa] = experience;

  return (
    <main className="page">
      <header className="page-head">
        <h1>Experience</h1>
        <p className="page-sub">Where I&apos;ve worked, taught, and researched so far.</p>
      </header>

      {/* Tutoring */}
      <section className="role">
        <div className="role-head">
          <h2>{tutor.role}</h2>
          <span className="role-dates">{tutor.dates}</span>
        </div>
        <p className="role-org">
          {tutor.org} · {tutor.location}
        </p>
        <p>{tutor.summary}</p>
        <p className="role-note">Courses I&apos;m qualified to tutor (passed with an A):</p>
        <ul className="course-grid">
          {tutor.courses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {/* NASA */}
      <section className="role">
        <div className="role-head">
          <h2>{nasa.role}</h2>
          <span className="role-dates">{nasa.dates}</span>
        </div>
        <p className="role-org">
          {nasa.org} · {nasa.location}
        </p>
        <p>{nasa.summary}</p>

        <figure className="video-container">
          <iframe
            src="https://www.youtube.com/embed/QQJnMR5dfwg?si=qsE-n_aSL2JtLxV2"
            title="The Robotic Freeze Tag Activity"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <figcaption>The Robotic Freeze Tag activity I designed and ran</figcaption>
        </figure>

        <details className="reflection">
          <summary>Read my reflection from the final day of my first NASA internship</summary>
          <p className="reflection-note">Written July 31st, 2023.</p>
          <p>
            Over the course of the past ten weeks, I&apos;ve had the pleasure of working with the West
            Virginia Robotics Alliance, founded by the Education Resource Center (ERC) of the NASA
            Katherine Johnson IV&amp;V Facility in Fairmont, WV. As someone from Elkins, and with very
            little robotics exposure or experience, I had no idea educational and competitive robotics
            were so prevalent in our state, so being able to work with the Robotics Alliance this summer
            was a genuinely eye-opening and fulfilling experience.
          </p>
          <p>
            At the start of the internship, I took part in setting up and assisting with the management
            of the REC Foundation Aerial Drone Competition in Fairmont. On the first day we set up all
            the competition fields and assembled their elements. During the next two days, I would assist
            with queueing teams for competition and managing &ldquo;pit&rdquo; areas, which is where teams
            would spend their downtime before and after competing. This management involved making
            announcements and assisting with any issues that teams would encounter. Following the drone
            competition were two weeks of staff training, which included the familiarization of both
            robotics platforms and the organization of robotics kits. During this time, I also assisted
            another ERC employee with an ongoing project, which involved the assembly and shipping of
            robotics kits to an all-girls school in Taiwan.
          </p>
          <figure className="float-media">
            <img src="/IMG_9778_Original.png" alt="VEX IQ Full Volume competition field" loading="lazy" />
            <figcaption>VEX IQ Full Volume field</figcaption>
          </figure>
          <p>
            During our several weeks of summer camps, our team traveled to different cities across the
            state to set up and facilitate robotics camps for students aged 6&ndash;12. Our first camp was
            in South Charleston, followed by Morgantown, Huntington, two Fairmont camps, and ending with
            Martinsburg. Each VEX IQ camp, for students aged 9&ndash;12, generally followed the format of
            teaching students about the VEX IQ platform, instructing them on how to build a robot, and
            introducing and playing multiple games, one of which I created, programmed, taught, and
            facilitated myself: the Freeze Tag game, which involved students dividing into teams of three
            and attempting to &ldquo;freeze&rdquo; the other teams&apos; robots by touching the bumper sensor
            on the back.
          </p>
          <p>
            It was wonderful helping the students with assembly and programming and watching them get
            excited and have fun playing the game. At the end of each camp, we helped students clean up and
            fully organize their robot kits before we packed everything up and moved back to our base of
            operations in Fairmont.
          </p>
          <p>
            During the week of July 10&ndash;14, I took a break from running summer camps with the Robotics
            Alliance to help out with the Destination Space overnight camp at Fairmont State University for
            high-school-aged students. My duties during the week involved having dinner with the students,
            facilitating evening activities (which usually involved playing games at the Rec Center),
            making sure all students went to sleep and woke up on time, and escorting them to breakfast and
            to their morning class.
          </p>
          <p>
            All in all, working with the Robotics Alliance was an extremely enriching experience. I learned
            a lot, not only about educational robotics, but also about myself. At the beginning of the
            summer, as someone with little teaching experience and even less in the field of robotics, I
            never thought I&apos;d be able to do the things I did. Working with the NASA ERC and the WV
            Robotics Alliance really helped me find a way to combine education with my ongoing passion for
            technology into something that could very well shape my career in the future.
          </p>
        </details>
      </section>
    </main>
  );
}

export default transition(Experience);
