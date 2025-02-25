
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
              <h2>Research Projects</h2>
            </div>
            <div className='item'>
              <h4>Research I have conducted as part of my WVU coursework so far.</h4>
            </div>
            <div className='item'>
              <p><b>Author, Research Report: The Benefits and Drawbacks of Generative AI Use for Programming Work</b> (Unpublished, available upon request).</p>
              <ul>
                <li>Conducted an in-depth analysis of generative AI's impact on the programming field, highlighting productivity enhancements for experienced developers and risks of over-reliance among novice programmers.</li>
                <li>Synthesized insights from scholarly research and interviews with faculty experts.</li>
                <li>Explored ethical and practical implications of AI in software development, emphasizing best practices for effective AI use in the workplace.</li>
              </ul>
              <p>A copy of my research report can be accessed <a href="">here</a>.</p>
            </div>
            <div className='item'>
              <h2>Academic Projects</h2>
            </div>
            <div className='item'>
              <h4>Other projects I have completed as part of my WVU coursework so far.</h4>
            </div>
            <div className='item'>
              <p><b>TaskGarden<br /></b>TaskGarden was a task management webapp I created along side several other teammates for my CS 230 Web Development class at WVU.
              In the app, the user is able to create and manage a list of tasks, and with each task complete, they can earn points to upgrade a virtual plant, granting them a sense of progress. It's a very rudimentary project, with it being my first and all, however I think it turned out alright. Click the screenshot below to try the app for yourself. Please note that the app is not designed for mobile devices.</p>
              <a href="https://taskgarden-8c627.web.app/" target="_blank"><img src="..\taskgarden-ss.png" /></a>
              <p className="subtitle">TaskGarden © 2024 Christopher Jones, Elijah Hall, Daniel Campa, Gillian Breeden, Sandrik Tabidze</p>
              <p>The frontend of the app was implemented using ReactJS and the backend using Google Firestore. The app is also hosted with the help of Google Firebase, making use of their Firebase Hosting Service. The app was created in Spring of 2024, over the course of a few months. While I believe I could have created an app of equal quality by myself, I owe credit for the joint development of the app to my CS 230 teammates.</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default transition(Projects)