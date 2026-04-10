import { motion } from 'framer-motion';
import SectionLabel from '../components/shared/SectionLabel';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/shared/SocialIcons';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }
  })
};

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <motion.div className="contact-header" initial="hidden" animate="visible" variants={fadeUp}>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="contact-heading">Got a research idea?<br /> Let's talk.</h1>
        </motion.div>

        <div className="contact-grid contact-grid--centered">
          <motion.div className="contact-info contact-info--full" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            <p className="contact-desc">
              Whether you have a research idea, a dataset to analyze, or an ML challenge — I'd love to hear about it. Reach out and let's build something amazing together.
            </p>

            {/* Email Card */}
            <motion.a
              href="mailto:dipeandasgupta@gmail.com"
              className="contact-email-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={fadeUp}
              custom={2}
            >
              <div className="email-card-icon">
                <Mail size={28} />
              </div>
              <div className="email-card-content">
                <span className="email-card-label">Drop me an email</span>
                <span className="email-card-address">dipeandasgupta@gmail.com</span>
              </div>
              <ArrowRight size={20} className="email-card-arrow" />
            </motion.a>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon"><MapPin size={16} /></div>
                <span className="detail-value">Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/DipeanDas" target="_blank" rel="noopener noreferrer" className="social-btn"><GithubIcon size={18} /><span>GitHub</span></a>
              <a href="https://www.linkedin.com/in/dasguptadipean/" target="_blank" rel="noopener noreferrer" className="social-btn"><LinkedinIcon size={18} /><span>LinkedIn</span></a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
