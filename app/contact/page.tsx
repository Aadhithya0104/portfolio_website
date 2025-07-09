"use client";
import { motion } from "framer-motion";

const contact = {
  email: "aadhithyaviswanathan@gmail.com",
  phone: "+91-8072660284",
  linkedin: "https://linkedin.com/in/aadhithya-viswanathan",
  github: "https://github.com/aadhithyaviswanathan"
};

export default function Contact() {
  return (
    <section className="contact-hero">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        className="contact-hero-content"
      >
        <div className="contact-hero-text">
          <h1 className="contact-title">
            <span className="teal-accent">Contact</span> Me
          </h1>
          <p className="contact-tagline">
            Let’s connect! Reach out for opportunities, collaborations, or just to say hello.
          </p>
        </div>
        <div className="contact-hero-img">
          {/* Placeholder SVG icon for contact */}
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="80" height="60" rx="16" fill="#fff" stroke="#14b8a6" strokeWidth="10" />
            <circle cx="70" cy="70" r="18" stroke="#14b8a6" strokeWidth="7" fill="#e0f7fa" />
            <path d="M70 52L70 88" stroke="#14b8a6" strokeWidth="6" strokeLinecap="round"/>
            <path d="M60 70L80 70" stroke="#14b8a6" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        </div>
      </motion.div>
      <div className="contact-section-list">
        <div className="contact-cards">
          <a className="contact-card" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="contact-icon" aria-label="LinkedIn">
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="6" fill="#14b8a6"/><path d="M8.5 11.5v7M8.5 8.5v.01M14 15.5v3M14 15.5c0-1.104.896-2 2-2s2 .896 2 2v3M14 15.5v-2c0-1.104-.896-2-2-2s-2 .896-2 2v2" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            LinkedIn
          </a>
          <a className="contact-card" href={contact.github} target="_blank" rel="noopener noreferrer">
            <span className="contact-icon" aria-label="GitHub">
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="6" fill="#14b8a6"/><path d="M14 20.5c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8Z" fill="#fff"/><path d="M14 20.5c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8Z" stroke="#14b8a6" strokeWidth="1.7"/><path d="M11.5 17.5v-1.5c0-.552.448-1 1-1h3c.552 0 1 .448 1 1v1.5M10.5 12.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5Z" stroke="#14b8a6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            GitHub
          </a>
          <a className="contact-card" href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>
            <span className="contact-icon" aria-label="Phone">
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="6" fill="#14b8a6"/><path d="M19.5 17.5c-1.5 1.5-4.5 1.5-6 0l-3-3c-1.5-1.5-1.5-4.5 0-6l1.5-1.5c.5-.5 1.5-.5 2 0l2 2c.5.5.5 1.5 0 2l-1 1c-.5.5-.5 1.5 0 2l2 2c.5.5 1.5.5 2 0l1.5-1.5c.5-.5.5-1.5 0-2l-2-2c-.5-.5-1.5-.5-2 0l-1 1c-.5.5-.5 1.5 0 2l3 3c.5.5 1.5.5 2 0l1.5-1.5c.5-.5.5-1.5 0-2l-2-2c-.5-.5-1.5-.5-2 0l-1 1c-.5.5-.5 1.5 0 2z" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            {contact.phone}
          </a>
          <a className="contact-card" href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer">
            <span className="contact-icon" aria-label="Email">
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="6" fill="#14b8a6"/><path d="M7 10l7 5 7-5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="10" width="14" height="8" rx="2" stroke="#fff" strokeWidth="1.7"/></svg>
            </span>
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
} 