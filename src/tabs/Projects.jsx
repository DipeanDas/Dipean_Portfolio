import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/shared/SocialIcons';
import SectionLabel from '../components/shared/SectionLabel';
import { projects } from '../data/projects';
import './Projects.css';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'analytics-visualization', label: 'Analytics & Visualization' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'genai-llms', label: 'GenAI & LLMs' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.25 } }
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = projects.filter(p =>
    activeFilter === 'all' ? true : p.category === activeFilter
  );

  return (
    <div className="projects-page">
      {/* Header Bar */}
      <div className="projects-topbar">
        <div className="container projects-topbar-inner">
          <div className="logo-badge-p">Projects</div>
        </div>
      </div>

      <div className="container">
        {/* Title */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="projects-heading">
            All Projects.
            <span className="project-count">{filtered.length}</span>
          </h1>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="project-card"
              >
                <div className="project-thumb" style={{ background: proj.gradient }}>
                  {proj.image && (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="project-thumb-img"
                    />
                  )}
                  <div className="thumb-overlay" />
                </div>
                <div className="project-body">
                  <div className="project-top">
                    <span className="tag">{proj.category.replace(/-/g, ' ')}</span>
                  </div>
                  <h2 className="project-title">{proj.title}</h2>
                  <p className="project-desc">{proj.description}</p>
                  <div className="project-tags">
                    {proj.tags.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn accent">
                      <ExternalLink size={13} /> View Project
                    </a>
                    <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn ghost">
                      <GithubIcon size={13} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
