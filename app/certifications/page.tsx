"use client";
import { motion } from "framer-motion";

const certifications = [
  "Fundamentals of Digital Marketing – Google Digital Garage",
  "Personal Branding – Coursera",
  "Content Marketing and Social Media – HubSpot Academy"
];

export default function Certifications() {
  return (
    <section className="certifications-hero">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        className="certifications-hero-content"
      >
        <div className="certifications-hero-text">
          <h1 className="certifications-title">
            <span className="teal-accent">Certifications</span>
          </h1>
          <p className="certifications-tagline">
            Recognized learning and achievements from leading platforms.
          </p>
        </div>
        <div className="certifications-hero-img">
          {/* Placeholder SVG icon for certifications */}
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="80" height="60" rx="16" fill="#fff" stroke="#14b8a6" strokeWidth="10" />
            <circle cx="70" cy="70" r="18" stroke="#14b8a6" strokeWidth="7" fill="#e0f7fa" />
            <path d="M70 52L70 88" stroke="#14b8a6" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>
      <div className="certifications-section-list">
        <div className="certifications-cards">
          {certifications.map((cert, idx) => (
            <motion.div
              className="certification-card"
              key={cert}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 + idx * 0.08, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 