import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import './Navbar.css';

const handleNewTab = (path) => {
  window.open(path, '_blank', 'noopener,noreferrer');
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <div className="logo-icon">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="logo-text">Dipean Dasgupta</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
          </li>
          <li>
            <button className="nav-link nav-btn" onClick={() => handleNewTab('/resume')}>
              Resume
            </button>
          </li>
          <li>
            <button className="nav-link nav-btn" onClick={() => handleNewTab('/projects')}>
              Projects
            </button>
          </li>
          <li>
            <NavLink to="/publications" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Publications
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link nav-cta ${isActive ? 'active' : ''}`}>
              Contact Me
            </NavLink>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <NavLink to="/" end className="mobile-link" onClick={() => setOpen(false)}>Home</NavLink>
          <button className="mobile-link mobile-btn" onClick={() => { handleNewTab('/resume'); setOpen(false); }}>Resume</button>
          <button className="mobile-link mobile-btn" onClick={() => { handleNewTab('/projects'); setOpen(false); }}>Projects</button>
          <NavLink to="/publications" className="mobile-link" onClick={() => setOpen(false)}>Publications</NavLink>
          <NavLink to="/contact" className="mobile-link" onClick={() => setOpen(false)}>Contact Me</NavLink>
        </div>
      )}
    </nav>
  );
}
