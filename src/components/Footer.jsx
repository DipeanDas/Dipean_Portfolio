import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, OrcidIcon } from './shared/SocialIcons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <div className="logo-icon">
            <Zap size={20} fill="currentColor" />
          </div>
        </div>
        <p className="footer-tagline">Thanks for scrolling, that's all folks.</p>
        <div className="footer-socials">
          <a href="https://github.com/DipeanDas" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
          <a href="https://www.linkedin.com/in/dasguptadipean/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
          <a href="https://orcid.org/0009-0000-4751-2976" target="_blank" rel="noopener noreferrer" aria-label="ORCID"><OrcidIcon size={18} /></a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Dipean Dasgupta. All rights reserved.</p>
      </div>
    </footer>
  );
}
