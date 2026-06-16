import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Homelab from './components/Homelab';
import Home from './components/Home';

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <div className="shell">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/homelab" element={<Homelab />} />
            {/* legacy path kept so old links don't 404 */}
            <Route path="/work" element={<Experience />} />
          </Routes>
        </AnimatePresence>

        <footer className="footer">
          Christopher Jones · {new Date().getFullYear()} · References available upon request
        </footer>
      </div>
    </>
  )
}

export default App;
