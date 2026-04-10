import { useRef, useState } from 'react';
import { BarChart2, BrainCircuit, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, OrcidIcon } from '../components/shared/SocialIcons';
import { motion } from 'framer-motion';
import SectionLabel from '../components/shared/SectionLabel';
import ArrowLink from '../components/shared/ArrowLink';
import { projects } from '../data/projects';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }
  })
};

const blogPosts = [
  {
    id: 1,
    date: 'Mar 15, 2025',
    category: 'Machine Learning',
    title: 'Understanding Mixture of Experts in Modern LLMs',
  },
  {
    id: 2,
    date: 'Feb 28, 2025',
    category: 'Analytics',
    title: 'Real-Time Dashboards: D3.js vs. Observable Plot',
  },
  {
    id: 3,
    date: 'Jan 20, 2025',
    category: 'GenAI',
    title: 'Building Production-Ready RAG Pipelines at Scale',
  },
];

const testimonials = [
  {
    quote: "An exceptionally talented developer. The ML pipeline they built cut our inference costs by 40% with zero drop in accuracy.",
    name: "Dr. Sarah Chen",
    role: "Head of AI, TechCorp",
    initials: "SC"
  },
  {
    quote: "Their data visualizations turned raw numbers into stories our stakeholders actually understood. Delivery was flawless.",
    name: "Marcus Rivera",
    role: "Product Director, DataFlow",
    initials: "MR"
  },
];

const services = [
  { icon: <BarChart2 size={26} />, title: 'Analytics & Visualization', count: 7, featured: true },
  { icon: <BrainCircuit size={26} />, title: 'Machine Learning', count: 4, featured: false },
  { icon: <Sparkles size={26} />, title: 'GenAI & LLMs', count: 5, featured: false },
];

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const contactRef = useRef(null);

  const previewProjects = projects.slice(0, 3);

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero section">
        <div className="container hero-grid">
          {/* Left */}
          <motion.div className="hero-left" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="hero-icon-row">
              <div className="hero-badge"><Sparkles size={14} /> &nbsp;Available for Collaboration</div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <SectionLabel>Introduction</SectionLabel>
            </motion.div>
            <motion.h1 variants={fadeUp} className="hero-name">
             Hi, I'm Dipean Dasgupta.
            </motion.h1>
            <motion.div variants={fadeUp} className="hero-underline" />
            <motion.div variants={fadeUp} className="hero-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
              <a href="https://orcid.org/0009-0000-4751-2976" target="_blank" rel="noopener noreferrer" aria-label="ORCID"><OrcidIcon size={20} /></a>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <SectionLabel>Introduction</SectionLabel>
            <h2 className="hero-subtitle">ML Engineer | AI Researcher</h2>
            <p className="hero-body">
              Dedicated Computer Science graduate and researcher with a strong focus on analytical thinking and precision
              in problem-solving. Research experience on Edge Artificial Intelligence and Machine Learning, hardware accel
              eration and spatial research, focusing on energy-efficient and sustainable solutions that drive green computing
              and climate-friendly innovation.
            </p>
            <ArrowLink
              href="#"
              onClick={(e) => { e.preventDefault(); contactRef.current?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              My story
            </ArrowLink>
            <div className="hero-photo">
              <img src="/profile.jpg" alt="Dipean Dasgupta" className="profile-img" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT TEASER + STATS ===== */}
      <section className="section contact-teaser">
        <div className="container grid-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="section-heading">Any Type Of Query &amp; Discussion.</h2>
            <a href="mailto: dipeandasgupta@gmail.com" className="email-link">
               dipeandasgupta@gmail.com <ArrowRight size={14} />
            </a>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="stats-col">
            <blockquote className="quote-text">
              "You can't use up creativity. The more you use, the more you have."
            </blockquote>
            <div className="stats-row">
              <div className="stat">
                <span className="stat-num">2+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">15+</span>
                <span className="stat-label">Successfull projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="section-header-row">
            <SectionLabel>Services</SectionLabel>
          </motion.div>
          <div className="services-grid">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className={`service-card ${svc.featured ? 'featured' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="svc-icon">{svc.icon}</div>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-count">{svc.count} Projects</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="section">
        <div className="container">
          <div className="portfolio-header">
            <div>
              <SectionLabel>Portfolio</SectionLabel>
              <h2 className="section-heading">All Creative Works, Selected Projects.</h2>
            </div>
            <button className="arrow-link" onClick={() => window.open('/projects', '_blank', 'noopener,noreferrer')}>
              Explore more <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid-3 portfolio-grid">
            {previewProjects.map((proj, i) => (
              <motion.div
                key={proj.id}
                className="portfolio-card card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="portfolio-thumb" style={{ background: proj.gradient }} />
                <div className="portfolio-info">
                  <span className="tag">{proj.category.replace(/-/g, ' ')}</span>
                  <h3 className="portfolio-title">{proj.title}</h3>
                  <p className="portfolio-desc">{proj.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG + TESTIMONIALS ===== */}
      {/*
          <section className="section">
          <div className="container blog-section grid-2">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="section-heading">What's new? My blog and news.</h2>
              <div className="blog-list">
                {blogPosts.map((post, i) => (
                  <motion.article key={post.id} className="blog-item" variants={fadeUp} custom={i}>
                    <div className="blog-meta">
                      <span className="blog-date mono">{post.date}</span>
                      <span className="tag">{post.category}</span>
                    </div>
                    <h4 className="blog-title">{post.title}</h4>
                    <ArrowLink href="#">Read more</ArrowLink>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            <motion.div className="testimonial-col" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <SectionLabel>Testimonials</SectionLabel>
              <div className="testimonial-card card">
                <div className="testimonial-avatar">{testimonials[testimonialIdx].initials}</div>
                <blockquote className="testimonial-quote">"{testimonials[testimonialIdx].quote}"</blockquote>
                <div className="testimonial-person">
                  <strong>{testimonials[testimonialIdx].name}</strong>
                  <span className="text-secondary">{testimonials[testimonialIdx].role}</span>
                </div>
                <div className="testimonial-dots">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`dot ${i === testimonialIdx ? 'active' : ''}`}
                      onClick={() => setTestimonialIdx(i)}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
          </section>
          */}
      
      
      

      {/* ===== CONTACT ===== */}

      <section className="section contact-form-section" id="contact" ref={contactRef}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="section-heading">Got a research idea? Let's talk.</h2>
            <p className="text-secondary" style={{ marginTop: '1rem', lineHeight: 1.8 }}>
              Whether you have a research idea, a dataset to analyze, or an ML challenge — I'd love to hear about it.
            </p>
            <a href="mailto:dipeandasgupta@gmail.com" className="email-link" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              dipeandasgupta@gmail.com<ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
