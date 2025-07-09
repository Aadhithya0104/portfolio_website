"use client";
import { useState, useRef, useEffect } from "react";

const technicalSkills = [
  "Languages – Python, SQL",
  "Scripting Languages – HTML, CSS",
  "Development Tools – Git, Github"
];

export default function SkillsPage() {
  const [theme, setTheme] = useState("dark");
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-in");
          }
        });
      },
      { threshold: 0.2 }
    );
    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={theme === "dark" ? "edu-dark" : "edu-light"} style={{ minHeight: "100vh", transition: "background 0.5s" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: 24 }}>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="theme-toggle-btn"
        >
          {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
      <div className="edu-hero">
        <h1 className="edu-title">Technical Skills</h1>
        <div className="edu-list">
          {technicalSkills.map((skill, idx) => (
            <div
              className="edu-card scroll-animate"
              key={idx}
              ref={el => { skillRefs.current[idx] = el; }}
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
            >
              <h2 className="edu-degree" style={{ fontSize: '1.1rem', margin: 0 }}>{skill}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 