"use client";
import { useState, useRef, useEffect } from "react";

const internships = [
  {
    company: "LiaAI SaaS Web Development Intern (Code Bind Technologies, Trichy)",
    date: "July 2023",
    description: "Worked as a SaaS web development intern, gained experience in web development using HTML, CSS, and PHP. Collaborated with a team to build and maintain SaaS products and improve product functionality.",
  },
  {
    company: "Pupil SaaS Web Development Intern (Pantech Solutions, Chennai)",
    date: "July 2022",
    description: "Worked as a SaaS web development intern, gained experience in web development using Java technologies. Collaborated with a team to build and maintain SaaS products and improve product functionality.",
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

export default function InternshipPage() {
  const [theme, setTheme] = useState("dark");
  const internRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    internRefs.current.forEach((ref) => {
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
        <h1 className="edu-title">Internships</h1>
        <div className="edu-list">
          {internships.map((intern, idx) => (
            <div
              className="edu-card scroll-animate"
              key={idx}
              ref={el => { internRefs.current[idx] = el; }}
              style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
            >
              <h2 className="edu-degree" style={{ fontSize: '1.2rem', margin: 0 }}>{intern.company}</h2>
              <div className="edu-inst" style={{ fontSize: '1rem', marginBottom: 6 }}>{intern.date}</div>
              <div className="edu-dur">{intern.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 