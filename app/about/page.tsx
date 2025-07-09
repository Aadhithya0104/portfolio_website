"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="about-hero">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
        className="about-hero-content"
      >
        <div className="about-hero-text">
          <h1 className="about-title">
            Hi, I'm <span className="teal-accent">Aadhithya Viswanathan</span>
          </h1>
          <p className="about-tagline">
            Designing digital experiences with passion, precision, and a touch of innovation.
          </p>
        </div>
        <div className="about-hero-img">
          <Image
            src="/profile.jpg"
            alt="Aadhithya Viswanathan"
            width={260}
            height={260}
            className="about-profile-img"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
} 