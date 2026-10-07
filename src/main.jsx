import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LinkedInRedirect from './components/LinkedInRedirect.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/linkedin" element={<LinkedInRedirect />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
