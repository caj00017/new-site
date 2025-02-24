
import TypeIt from 'typeit'
import { useEffect } from 'react';
import Navbar from './Navbar';

import transition from '../transition';

function Projects() {

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
          <div className="item">
            <h1 id="title">Projects</h1>
          </div>
          <div className="item">
            <ul>
              <li>This page is a work in progress.</li>
              <li>Come back later to see what's up!</li>
            </ul>
          </div>
          <div className='container'>
            <div className='item'>
              <p>Here are some of the projects I have worked on:</p>
              <p><b>TaskGarden<br /></b>TaskGarden was a task management webapp I created along side several other teammates for my CS 230 Web Development class at WVU.
              In the app, the user is able to create and manage a list of tasks, and with each task complete, they can earn points to upgrade a virtual plant, granting them a sense of progress. It's a very rudimentary project, with it being my first and all, however I think it turned out alright. Click the screenshot below to try the app for yourself.</p>
              <a href="https://taskgarden-8c627.web.app/"><img src="..\taskgarden-ss.png" /></a>
              <p className="subtitle">TaskGarden © 2024 Christopher Jones, Elijah Hall, Daniel Campa, Gillian Breeden, Sandrik Tabidze</p>
              <p>The frontend of the app was implemented using ReactJS and the backend using Google Firestore. The app is also hosted with the help of Google Firebase, making use of their Firebase Hosting Service. The app was created in Spring of 2024, over the course of a few months. While I believe I could have created an app of equal quality by myself, I owe credit for the joint development of the app to my CS 230 teammates.</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default transition(Projects)