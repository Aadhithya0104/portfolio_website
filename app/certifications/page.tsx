"use client";
import { useState, useRef, useEffect } from "react";

const certifications = [
  "Fundamentals of Digital Marketing – Google Digital Garage",
  "Personal Branding – Coursera",
  "Content Marketing and Social Media – HubSpot Academy"
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

export default function CertificationsPage() {
  const [theme, setTheme] = useState("dark");
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    certRefs.current.forEach((ref) => {
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
        <h1 className="edu-title">Certifications</h1>
        <div className="edu-list">
          {certifications.map((cert, idx) => (
            <div
              className="edu-card scroll-animate"
              key={idx}
              ref={el => { certRefs.current[idx] = el; }}
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
            >
              <h2 className="edu-degree" style={{ fontSize: '1.1rem', margin: 0 }}>{cert}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 