import { motion } from 'framer-motion';
import SectionLabel from '../components/shared/SectionLabel';
import { publications } from '../data/publications';
import './Publications.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  })
};

const statusColors = {
  "Early Publication Patent": "#10b981",
  "Under-Review": "#f59e0b",
  "Manuscript In Preparation": "#3b82f6"
};

export default function Publications() {
  return (
    <div className="publications-page">
      <div className="container">
        <motion.div className="pubs-header" initial="hidden" animate="visible" variants={fadeUp}>
          <SectionLabel>Publications</SectionLabel>
          <h1 className="pubs-heading">Publications &amp; Patents.</h1>
          <p className="pubs-subheading">
            Research papers, patents, and technical contributions in AI, Deep Learning, and Environmental Science.
          </p>
        </motion.div>

        <div className="pubs-list">
          {publications.map((pub, i) => (
            <motion.article
              key={pub.id}
              className="pub-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <div className="pub-year-col">
                <span className="pub-year">{pub.year}</span>
                {pub.status && (
                  <span
                    className="pub-status-badge"
                    style={{ backgroundColor: statusColors[pub.status] || '#6b7280' }}
                  >
                    {pub.status}
                  </span>
                )}
              </div>
              <div className="pub-content">
                <h2 className="pub-title">{pub.title}</h2>
                <p className="pub-authors">{pub.authors.join(', ')}</p>
                <p className="pub-venue">{pub.venue}</p>
                <div className="pub-abstract-wrap">
                  <p className="pub-abstract">{pub.abstract}</p>
                </div>
                <div className="pub-tags">
                  {pub.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
