"use client";
import { motion } from "framer-motion";

const internships = [
  {
    company: "LiaAI SaaS Web Development Intern (Code Bind Technologies, Trichy)",
    date: "July 2023",
    description:
      "Worked as a SaaS web development intern, gained experience in web development using HTML, CSS, and PHP. Collaborated with a team to build and maintain SaaS products and improve product functionality.",
  },
  {
    company: "Pupil SaaS Web Development Intern (Pantech Solutions, Chennai)",
    date: "July 2022",
    description:
      "Worked as a SaaS web development intern, gained experience in web development using Java technologies. Collaborated with a team to build and maintain SaaS products and improve product functionality.",
  },
];

export default function Experience() {
  return (
    <section className="experience-hero">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        className="experience-hero-content"
      >
        <div className="experience-hero-text">
          <h1 className="experience-title">
            <span className="teal-accent">Experience</span> & Internships
          </h1>
          <p className="experience-tagline">
            Hands-on learning and real-world impact through industry internships.
          </p>
        </div>
        <div className="experience-hero-img">
          {/* Placeholder SVG icon for experience */}
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="80" height="60" rx="16" fill="#fff" stroke="#14b8a6" strokeWidth="10" />
            <rect x="50" y="60" width="40" height="20" rx="6" fill="#14b8a6" fillOpacity="0.18" />
            <circle cx="70" cy="70" r="12" stroke="#14b8a6" strokeWidth="6" fill="#e0f7fa" />
          </svg>
        </div>
      </motion.div>
      <div className="experience-section-list">
        <div className="experience-cards">
          {internships.map((intern, idx) => (
            <motion.div
              className="experience-card"
              key={intern.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 + idx * 0.08, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
            >
              <div className="experience-company">{intern.company}</div>
              <div className="experience-date">{intern.date}</div>
              <div className="experience-desc">{intern.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 