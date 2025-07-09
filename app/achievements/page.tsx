"use client";
import { motion } from "framer-motion";

const achievements = [
  "Winner award (twice) in AIIT project exp7 23 with my group : OBSTACLES AVOIDANCE AND TRENCH DETECTION ROVER",
  "Volunteered at the Innovation Centre in the department for 2 years, coordinating events and led multiple student teams, contributing to a culture of creativity, problem-solving among peers."
];

export default function Achievements() {
  return (
    <section className="achievements-hero">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        className="achievements-hero-content"
      >
        <div className="achievements-hero-text">
          <h1 className="achievements-title">
            <span className="teal-accent">Achievements</span>
          </h1>
          <p className="achievements-tagline">
            Celebrating milestones and contributions along my journey.
          </p>
        </div>
        <div className="achievements-hero-img">
          {/* Placeholder SVG icon for achievements */}
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70" cy="70" r="60" fill="#fff" stroke="#14b8a6" strokeWidth="10" />
            <path d="M70 40L70 100" stroke="#14b8a6" strokeWidth="8" strokeLinecap="round"/>
            <path d="M55 85L70 100L85 85" stroke="#14b8a6" strokeWidth="8" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>
      <div className="achievements-section-list">
        <div className="achievements-cards">
          {achievements.map((ach, idx) => (
            <motion.div
              className="achievement-card"
              key={ach}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 + idx * 0.08, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
            >
              {ach}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 