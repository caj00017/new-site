import './App.css'
import TypeIt from 'typeit'
import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Home from './components/Home';

import transition from './transition';

function App() {

  const location = useLocation();

  useEffect(() => {
    new TypeIt("#title", {
      speed: 25,
      waitUntilVisible: true,
    }).go();
  }, []);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App;
