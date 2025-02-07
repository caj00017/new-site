import '../App.css'
import TypeIt from 'typeit'
import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Navbar from './Navbar';

import transition from '../transition';

function Home() {

  const location = useLocation();

  useEffect(() => {
    new TypeIt("#title", {
      speed: 25,
      waitUntilVisible: true,
    }).go();
  }, []);

  return (
    <>
      <div className="container">
        <div className="item">
          <h1 id="title">cjones.dev</h1>
        </div>
        <div className="item">
          <ul>
            <li>This website is a work in progress.</li>
            <li>Come back later to see what's up!</li>
          </ul>
        </div>
        <div className="item">
            <p>
              Hi! My name is Chris Jones. I'm creating this website to serve as an interactive portfolio/resume detailing my work/study experience and other things I've worked on. Linked below are pages where I go into a bit more detail about myself and the kind of stuff I like to do.
            </p>
        </div>
      </div>
    </>
  )
}

export default transition(Home);
