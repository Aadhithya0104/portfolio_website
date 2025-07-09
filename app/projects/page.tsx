"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Obstacles Avoidance and Trench Detection Rover (AIIT project exp7 23)",
    date: "Oct 2023",
    description:
      "Designed and developed an 'Obstacles Avoidance and Trench Detection Rover' using Arduino, IR sensors, and actuators. Enabled the rover to recognize and avoid obstacles and trenches more remotely, enhancing automation and situational awareness.",
    tech: "Arduino, IR sensors, actuators",
  },
  {
    title: "E-commerce Website",
    date: "Jan 2023",
    description:
      "Designed and built a full functional e-commerce website that enables users to browse and purchase products, and manage orders, utilizing HTML, CSS and JS for dynamic back-end functionality.",
    tech: "HTML, CSS, JS, MYSQL, JAVASCRIPT",
  },
  {
    title: "Social Media Login Integration (Personal Project)",
    date: "Aug 2022",
    description:
      "Integrated Google and Facebook login APIs for easy and secure user entry; enhanced onboarding and streamlined access.",
    tech: "Google and Facebook login APIs",
  },
  {
    title: "SEO and Data Analysis",
    date: "Aug 2022",
    description:
      "Achieved a 35% growth in follower count and 10% boost in online conversions within three months. Conducted SEO research to identify trending keywords in the technology niche.",
    tech: "SEO, Data Analysis",
  },
];

export default function Projects() {
  return (
    <section className="projects-hero">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        className="projects-hero-content"
      >
        <div className="projects-hero-text">
          <h1 className="projects-title">
            <span className="teal-accent">Projects</span> Showcase
          </h1>
          <p className="projects-tagline">
            A selection of my work, blending creativity and technology to solve real-world problems.
          </p>
        </div>
        <div className="projects-hero-img">
          {/* Placeholder SVG icon for projects */}
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="100" height="80" rx="18" fill="#fff" stroke="#14b8a6" strokeWidth="10" />
            <circle cx="70" cy="70" r="22" stroke="#14b8a6" strokeWidth="7" fill="#e0f7fa" />
            <rect x="50" y="55" width="40" height="30" rx="8" fill="#14b8a6" fillOpacity="0.18" />
          </svg>
        </div>
      </motion.div>
      <div className="projects-section-list">
        <div className="projects-cards">
          {projects.map((proj, idx) => (
            <motion.div
              className="project-card"
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 + idx * 0.08, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
            >
              <div className="project-title">{proj.title}</div>
              <div className="project-date">{proj.date}</div>
              <div className="project-desc">{proj.description}</div>
              <div className="project-tech">{proj.tech}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 