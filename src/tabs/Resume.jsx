import { motion } from 'framer-motion';
import { Download, Globe, ExternalLink } from 'lucide-react';
import SectionLabel from '../components/shared/SectionLabel';
import './Resume.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } })
};

const experience = [
  {
    role: "Research Intern",
    company: "IIIT Vadodara, FRI Dehradun ",
    period: " May 2025-January 2026",
    points: [
      "Developed a Spatio-Temporal Informer-based deep learning framework for multivariate forecasting of river water quality across 44 monitoring sites spanning 16 Indian Himalayan rivers.",
      "Achieved high predictive performance (R²: 0.94 for BOD, 0.96 for DO), significantly outperforming baseline machine learning models such as XGBoost and SVR.",
      "Built an end-to-end scalable pipeline integrating data preprocessing, temporal-spatial embeddings, model training, and deployment-ready components for real-time environmental monitoring."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Unified Mentor Private Limited",
    period: "May 2024– July 2024",
    points: [
      "Collected and updated project datasets to ensure data completeness and consistency.",
      "Performed data preprocessing and exploratory analysis to uncover key insights and indicators.",
      "Developed dashboards and visualizations, and contributed to automated report generation."
    ]
  },
  // {
  //   role: "Full Stack Developer",
  //   company: "Digital Agency",
  //   period: "2018 – 2020",
  //   points: [
  //     "Built 20+ React/Node.js applications for enterprise clients",
  //     "Introduced CI/CD pipelines reducing deployment time from days to hours",
  //     "Mentored 3 junior developers"
  //   ]
  // }
];

const education = [
  {
    degree: "BTech Computer Science and Engineering",
    school: "Indian Institute of Information Technology, Vadodara",
    period: "2021 – 2025",
    note: "CGPA: 7.78/ 10"
  },
  // {
  //   degree: "B.S. Computer Science",
  //   school: "University of California, Berkeley",
  //   period: "2012 – 2016",
  //   note: "Summa Cum Laude · Dean's List"
  // }
];

const certifications = [
  {
    title: "Data Science",
    issuer: "GeeksForGeeks",
    year: "2024",
    driveUrl: "https://media.geeksforgeeks.org/courses/certificates/f4b5b72beab8764a8541de2c8f2dfc1e.pdf"
  },
  {
    title: "Python",
    issuer: "Cisco",
    year: "2023",
    driveUrl: "https://drive.google.com/file/d/1-qzSmKXT09O3_0ZtZE9f0edSyzymtJnV/view"
  },
  {
    title: "Research Methodology",
    issuer: "Elsevier",
    year: "2025",
    driveUrl: "https://drive.google.com/drive/folders/1wgShKxJMEMXEadVuGdjhv96-9aKM_5P5"
  },
  {
    title: "PowerBi",
    issuer: "Simplilearn",
    year: "2023",
    driveUrl: "https://certificates.simplicdn.net/share/4479369_1693244082.pdf"
  },
  {
    title: "R",
    issuer: "Google",
    year: "2024",
    driveUrl: "https://www.coursera.org/account/accomplishments/verify/NSVG7R5YNHKF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "GEE",
    issuer: "GRS Fusion",
    year: "2025",
    driveUrl: "https://drive.google.com/file/d/1_wZrg4IBVC4vQoAT8rKgCha6jppZJ90Z/view"
  },
];

const skills = [
  { name: "Python & ML Stack" },
  { name: "Data Analytics" },
  { name: "Data Visualization" },
  { name: "Databases and SQL" },
  { name: "Large Language Models" },
  { name: "Geospatial Analysis" },
];

const skillTags = ["PyTorch", "TensorFlow", "PostgreSQL", "scikit-learn","R","Verilog","Google Earth Engine","PowerBI","MS Excel"];

const languages = [
  { lang: "English", level: "Working Proficiency" },
  { lang: "Bangla", level: "Native" },
  // { lang: "Hindi", level: "Native" },
];

const handleDownload = () => {
  window.open('https://drive.google.com/uc?export=download&id=1YJ3vyRUimm3O9sMUNDauRpc7yZALH9PC', '_blank');
};

export default function Resume() {
  return (
    <div className="resume-page">
      {/* Top Bar */}
      <div className="resume-topbar">
        <div className="container resume-topbar-inner">
          <div className="logo-badge"><span>Resume</span></div>
          <button className="btn-accent" onClick={handleDownload}>
            <Download size={16} /> Download PDF
          </button>
        </div>
      </div>

      <div className="container resume-body">
        {/* Left Panel */}
        <motion.aside className="resume-left" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
          <motion.div className="profile-section" variants={fadeUp}>
           <img className="profile_dip-img"
                src="/profile.jpg"
                alt="profile" />
            <h1 className="profile-name">Dipean Dasgupta</h1>
            <p className="profile-title">ML Engineer</p>
          </motion.div>

          <motion.div className="resume-section" variants={fadeUp}>
            <SectionLabel>Contact</SectionLabel>
            <div className="contact-list">
              <a href="mailto:dipeandasgupta@gmail.com" className="contact-item"><Globe size={14}/> dipeandasgupta@gmail.com</a>
              {/* <span className="contact-item"><Globe size={14}/> yourname.dev</span> */}
              <span className="contact-item"><Globe size={14}/> Dhaka, Bangladesh</span>
            </div>
          </motion.div>

          <motion.div className="resume-section" variants={fadeUp}>
            <SectionLabel>Skills</SectionLabel>
            <div className="skill-bars">
              {skills.map(s => (
                <div key={s.name} className="skill-bar-item">
                  <div className="skill-bar-label">
                    <span>{s.name}</span>
                    <span>{s.level}</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="resume-section" variants={fadeUp}>
            <SectionLabel>Tech Stack</SectionLabel>
            <div className="tag-grid">
              {skillTags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>

          <motion.div className="resume-section" variants={fadeUp}>
            <SectionLabel>Languages</SectionLabel>
            <div className="lang-list">
              {languages.map(l => (
                <div key={l.lang} className="lang-item">
                  <span className="lang-name">{l.lang}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.aside>

        {/* Right Panel */}
        <div className="resume-right">
          {/* Experience */}
          <motion.section initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="resume-section-header">
              <SectionLabel>Experience</SectionLabel>
            </motion.div>
            <div className="timeline">
              {experience.map((exp, i) => (
                <motion.div key={exp.role} className="timeline-item" variants={fadeUp} custom={i}>
                  <div className="timeline-marker">
                    <div className="timeline-dot" />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h2 className="timeline-role">{exp.role}</h2>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-company">{exp.company}</p>
                    <ul className="timeline-points">
                      {exp.points.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section style={{ marginTop: '3rem' }} initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="resume-section-header">
              <SectionLabel>Education</SectionLabel>
            </motion.div>
            <div className="timeline">
              {education.map((edu, i) => (
                <motion.div key={edu.degree} className="timeline-item" variants={fadeUp} custom={i}>
                  <div className="timeline-marker">
                    <div className="timeline-dot" />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h2 className="timeline-role">{edu.degree}</h2>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    <p className="timeline-company">{edu.school}</p>
                    <p className="timeline-note">{edu.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section style={{ marginTop: '3rem' }} initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="resume-section-header">
              <SectionLabel>Certifications</SectionLabel>
            </motion.div>
            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <motion.a
                  key={cert.title}
                  href={cert.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card"
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="cert-card-top">
                    <span className="cert-year">{cert.year}</span>
                    <ExternalLink size={14} className="cert-link-icon" />
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </motion.a>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
