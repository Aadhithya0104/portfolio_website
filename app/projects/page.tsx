"use client";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    title: "Obstacles Avoidance and Trench Detection Rover (AIIT project exp7 23)",
    date: "Oct 2023",
    description: "Designed and developed an 'Obstacles Avoidance and Trench Detection Rover' using Arduino, IR sensors, and actuators. Enabled the rover to recognize and avoid obstacles and trenches more remotely, enhancing automation and situational awareness.",
    tech: "Arduino, IR sensors, actuators",
  },
  {
    title: "E-commerce Website",
    date: "Jan 2023",
    description: "Designed and built a full functional e-commerce website that enables users to browse and purchase products, and manage orders, utilizing HTML, CSS and JS for dynamic back-end functionality.",
    tech: "HTML, CSS, JS, MYSQL, JAVASCRIPT",
  },
  {
    title: "Social Media Login Integration (Personal Project)",
    date: "Aug 2022",
    description: "Integrated Google and Facebook login APIs for easy and secure user entry; enhanced onboarding and streamlined access.",
    tech: "Google and Facebook login APIs",
  },
  {
    title: "SEO and Data Analysis",
    date: "Aug 2022",
    description: "Achieved a 35% growth in follower count and 10% boost in online conversions within three months. Conducted SEO research to identify trending keywords in the technology niche.",
    tech: "SEO, Data Analysis",
  },
];

function ThemeToggleButton({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle-btn theme-toggle-icon"
      aria-label="Toggle theme"
      style={{ marginLeft: 8 }}
    >
      {theme === "dark" ? (
        <span role="img" aria-label="Light Mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark Mode">🌙</span>
      )}
    </button>
  );
}

export default function ProjectsPage() {
  const [theme, setTheme] = useState("dark");
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={theme === "dark" ? "edu-dark" : "edu-light"} style={{ minHeight: "100vh", transition: "background 0.5s" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: 24 }}>
        <ThemeToggleButton theme={theme} setTheme={setTheme} />
      </div>
      <div className="edu-hero">
        <h1 className="edu-title">Projects</h1>
        <div className="edu-list">
          {projects.map((proj, idx) => (
            <div
              className="edu-card scroll-animate"
              key={idx}
              ref={el => { projectRefs.current[idx] = el; }}
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
            >
              <h2 className="edu-degree" style={{ fontSize: '1.2rem', margin: 0 }}>{proj.title}</h2>
              <div className="edu-inst" style={{ fontSize: '1rem', marginBottom: 6 }}>{proj.date}</div>
              <div className="edu-dur" style={{ marginBottom: 8 }}>{proj.description}</div>
              <div style={{ fontSize: '0.98rem', color: theme === 'dark' ? '#ffd700' : '#1976d2', fontWeight: 600 }}>Tech: {proj.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 