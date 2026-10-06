// src/components/Nav.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/homelab', label: 'Homelab' },
  { to: '/about', label: 'About' },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          CJ<span className="nav-brand-dot">.</span>
        </NavLink>

        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
