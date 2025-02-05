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
          <h1 id="title">Hi, my name is Chris!<br />This is my website!</h1>
        </div>
        <div className="item">
          <ul>
            <li>This website is a work in progress.</li>
            <li>Come back later to see what's up!</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default transition(Home);
