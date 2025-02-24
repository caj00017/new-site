
import TypeIt from 'typeit'
import { useEffect } from 'react';
import Navbar from './Navbar';

import transition from '../transition';

function About() {

    useEffect(() => {
      window.scrollTo(0, 0);
      new TypeIt("#title", {
        speed: 25,
        waitUntilVisible: true,
      }).go();
    }, []);
  
    return (
      <>
        <div className="container" id='page'>
          <div className="item">
            <h1 id="title">About Me</h1>
          </div>
          <div className="item">
            <ul>
              <li>This page is a work in progress.</li>
              <li>Come back later to see what's up!</li>
            </ul>
          </div>
          <div className='item'>
            <p>
              I am a junior in Computer Science and Cybersecurity at West Virginia University.<br />
              Included on this site are pages detailing my work and study experience related to CS,
              and I have linked the <a href="https://github.com/caj00017/new-site" target="_blank">GitHub</a> repository for this website as well as my <a href="https://docs.google.com/document/d/10JcE1dX6knykYlBcg6qi-wDnr8QXoQ0rM_FexEAuVbw/edit?tab=t.0" target="_blank">resume</a>.<br />
            </p>
          </div>
        </div>
      </>
    )
  }
  
  export default transition(About)