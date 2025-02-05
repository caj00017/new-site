import './App.css'
import TypeIt from 'typeit'
import { useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {

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
      <Navbar></Navbar>
    </>
  )
}

export default App
