"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const technicalSkills = [
  {
    group: "Languages",
    skills: [
      { name: "Python", logo: "/python.jpg" },
      { name: "SQL", logo: "/SQL.png" },
      { name: "TypeScript", logo: "/typescript.png" },
    ],
  },
  {
    group: "Framework",
    skills: [
      { name: "Next.js", logo: "/next-js.png" },
    ],
  },
  {
    group: "Styling",
    skills: [
      { name: "Tailwind CSS", logo: "/tailwind-css.png" },
    ],
  },
  {
    group: "Development Tools",
    skills: [
      { name: "Git", logo: "/git.png" },
      { name: "Cursor", logo: "/cursor.jpg" },
      { name: "Vercel", logo: "/vercel.png" },
      { name: "Neon", logo: "/Neon.png" },
    ],
  },
];

const softSkills = [
  "Creativity & Problem-Solving",
  "Communication",
  "Adaptability",
  "Team Collaboration",
  "Analytical Thinking",
  "Project Management"
];

export default function Skills() {
  return (
    <section className="skills-hero">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        className="skills-hero-content"
      >
        <div className="skills-hero-text">
          <h1 className="skills-title">
            <span className="teal-accent">Skills</span> & Expertise
          </h1>
          <p className="skills-tagline">
            A blend of technical proficiency and soft skills to deliver impactful results.
          </p>
        </div>
        <div className="skills-hero-img">
          {/* Placeholder SVG icon for skills */}
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="65" stroke="#14b8a6" strokeWidth="10" fill="#fff" />
            <path d="M70 40L70 100" stroke="#14b8a6" strokeWidth="8" strokeLinecap="round"/>
            <path d="M40 70L100 70" stroke="#14b8a6" strokeWidth="8" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>
      <div className="skills-section-list">
        <h2 className="skills-section-title">Technical Skills</h2>
        {technicalSkills.map((group, groupIdx) => (
          <div key={group.group} style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 700, color: "#0e9488", fontSize: "1.13rem", marginBottom: 8 }}>{group.group}</div>
            <div className="skills-cards">
              {group.skills.map((skill, idx) => (
                <motion.div
                  className="skill-card skill-logo-card"
                  key={skill.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.1 + (groupIdx * 0.2) + idx * 0.08, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
                >
                  <div className="skill-logo-img-wrap">
                    <Image src={skill.logo} alt={skill.name} width={48} height={48} className="skill-logo-img" />
                  </div>
                  <div className="skill-logo-label">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        <h2 className="skills-section-title">Soft Skills</h2>
        <div className="skills-cards">
          {softSkills.map((skill, idx) => (
            <motion.div
              className="skill-card"
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 + idx * 0.08, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 