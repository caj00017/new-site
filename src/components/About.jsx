
import TypeIt from 'typeit'
import { useEffect } from 'react';
import Navbar from './Navbar';

import transition from '../transition';

function About() {

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
            <h1 id="title">About Me</h1>
          </div>
          <div className="item">
            <ul>
              <li>This page is a work in progress.</li>
              <li>Come back later to see what's up!</li>
            </ul>
          </div>
        </div>
        <Navbar></Navbar>
      </>
    )
  }
  
  export default transition(About)