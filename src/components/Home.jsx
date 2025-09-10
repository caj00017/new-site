import '../App.css'
import TypeIt from 'typeit'
import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Avatar from 'react-avatar';

import Navbar from './Navbar';

import transition from '../transition';

function Home() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    new TypeIt("#title", {
      speed: 25,
      waitUntilVisible: true,
    }).go();
  }, []);

  return (
    <>
      <div className="container">
        <div className="title-block">
          <h1 id="title">cjones.dev</h1>
          <h2>WVU 2026 | Computer Science, Cybersecurity</h2>
        </div>

        <Avatar
          name="Chris Jones"
          size="250"
          round={true}
          style={{ marginBottom: '1.5rem' }}
          src="/IMG_7895.jpg"
        />

        <p>
          Hi! My name is Chris Jones. I'm creating this website to serve as an interactive portfolio/resume detailing my
          work/study experience and other things I've worked on. Linked below are pages where I go into a bit more detail
          about myself and the kind of stuff I like to do.
        </p>

        <h2>About Me</h2>
        <p>
          I am a junior in Computer Science and Cybersecurity at West Virginia University.<br />
          Included on this site are pages detailing my work and study experience related to CS,
          and I have linked the <a href="https://github.com/caj00017/new-site" target="_blank">GitHub</a> repository for this website as well as my <a href="https://docs.google.com/document/d/10JcE1dX6knykYlBcg6qi-wDnr8QXoQ0rM_FexEAuVbw/edit?tab=t.0" target="_blank">resume</a>.<br />
        </p>

        <h2>Research Projects</h2>
        <h4>Research I have conducted as part of my WVU coursework so far.</h4>
        <p><b>Author, Research Report: The Benefits and Drawbacks of Generative AI Use for Programming Work</b> (Unpublished, available upon request).</p>
        <ul>
          <li>Conducted an in-depth analysis of generative AI's impact on the programming field, highlighting productivity enhancements for experienced developers and risks of over-reliance among novice programmers.</li>
          <li>Synthesized insights from scholarly research and interviews with faculty experts.</li>
          <li>Explored ethical and practical implications of AI in software development, emphasizing best practices for effective AI use in the workplace.</li>
        </ul>
        <p>A copy of my research report can be accessed <a href="https://docs.google.com/document/d/16r7Xpsy2Y9nXnA7KpYg6BSHmOL50XLau0qD36neGq28/edit?tab=t.0" target="_blank">here</a>.</p>

        <h2>Academic Projects</h2>
        <h4>Other projects I have completed as part of my WVU coursework so far.</h4>
        <p><b>TaskGarden<br /></b>TaskGarden was a task management webapp I created along side several other teammates for my CS 230 Web Development class at WVU.
        In the app, the user is able to create and manage a list of tasks, and with each task complete, they can earn points to upgrade a virtual plant, granting them a sense of progress. It's a very rudimentary project, with it being my first and all, however I think it turned out alright. Click the screenshot below to try the app for yourself. Please note that the app is not designed for mobile devices.</p>
        <a href="https://taskgarden-8c627.web.app/" target="_blank"><img id="taskGardenScreenshot" src="..\taskgarden-ss.png" /></a>
        <p className="subtitle">TaskGarden © 2024 Christopher Jones, Elijah Hall, Daniel Campa, Gillian Breeden, Sandrik Tabidze</p>
        <p>The frontend of the app was implemented using ReactJS and the backend using Google Firestore. The app is also hosted with the help of Google Firebase, making use of their Firebase Hosting Service. The app was created in Spring of 2024, over the course of a few months. While I believe I could have created an app of equal quality by myself, I owe credit for the joint development of the app to my CS 230 teammates.</p>

        <h2>Work Experience</h2>
        <h3>Robotics Instructor Intern | NASA Katherine Johnson IV&V Education Resource Center | Fairmont, WV</h3>
        <h4>May 2023 – Aug 2023, May 2024 – Aug 2024</h4>
        <p>
          As of July 2024, my only relevant work experience has been with the NASA IV&V Education Resource Center as a Robotics Summer Instructor from May-August 2023 and 2024. My experiences with the ERC are detailed below. This essay was written on July 31st, 2023, on the final day of my first internship with the NASA ERC team.
        </p>
        <p>
          Over the course of the past ten weeks, I’ve had the pleasure of working with the West Virginia Robotics Alliance, founded by the Education Resource Center (ERC) of the NASA Katherine Johnson IV&V Facility in Fairmont, WV. As someone from Elkins, and with very little robotics exposure or experience, I had no idea educational and competitive robotics were so prevalent in our state, so being able to work with the Robotics Alliance this summer was a genuinely eye-opening and fulfilling experience.
        </p>
        <p>
          At the start of the internship, I took part in setting up and assisting with the management of the REC Foundation Aerial Drone Competition in Fairmont. On the first day we set up all the competition fields and assembled their elements. During the next two days, I would assist with queueing teams for competition and managing “pit” areas, which is where teams would spend their downtime before and after competing. This management involved making announcements and assisting with any issues that teams would encounter. Following the drone competition were two weeks of staff training, which included the familiarization of both robotics platforms and the organization of robotics kits. During this time, I also assisted another ERC employee with an ongoing project, which involved the assembly and shipping of robotics kits to an all-girls school in Taiwan.
        </p>
        <p>
          During our several weeks of summer camps, our team traveled to different cities across the state to set up and facilitate robotics camps for students aged 6-12. Our first camp was in South Charleston, followed by Morgantown, Huntington, two Fairmont camps, and ending with Martinsburg. Each VEX IQ camp, for students aged 9-12, generally followed the format of teaching students about the VEX IQ platform, instructing them on how to build a robot, and introducing and playing multiple games, one of which I created, programmed, taught, and facilitated myself–the Freeze Tag game, which involved students dividing into teams of three and attempting to “freeze” the other teams’ robots by touching the bumper sensor on the back.
        </p>
        <p>
          It was wonderful helping the students with assembly and programming and watching them get excited and have fun playing the game. At the end of each camp, we helped students clean up and fully organize their robot kits before we packed everything up and moved back to our base of operations in Fairmont.
        </p>
        <p>
          During the week of July 10-14, I took a break from running summer camps with the Robotics Alliance to help out with the Destination Space overnight camp at Fairmont State University for high-school-aged students. My duties during the week involved having dinner with the students, facilitating evening activities–which usually involved playing games at the Rec Center–making sure all students went to sleep and woke up on time, and escorting them to breakfast and to their morning class.
        </p>
        <p>
          All in all, working with the Robotics Alliance this summer was an extremely enriching experience. I learned a lot, not only about educational robotics, but also about myself. At the beginning of the summer, as someone with little teaching experience and even less in the field of robotics, I never thought I’d be able to do the things I did. Working with the NASA ERC and the WV Robotics Alliance really helped me find a way to combine education with my ongoing passion for technology into something that could very well shape my career in the future.
        </p>
      </div>
    </>
  )
}

export default transition(Home);
