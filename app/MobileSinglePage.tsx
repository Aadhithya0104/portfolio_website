"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Home = dynamic(() => import("./home/page"));
const Skills = dynamic(() => import("./skills/page"));
const Projects = dynamic(() => import("./projects/page"));
const Experience = dynamic(() => import("./experience/page"));
const Achievements = dynamic(() => import("./achievements/page"));
const Certifications = dynamic(() => import("./certifications/page"));
const Contact = dynamic(() => import("./contact/page"));

const sections = [
  { id: "home", label: "Home", Component: Home },
  { id: "skills", label: "Skills", Component: Skills },
  { id: "projects", label: "Projects", Component: Projects },
  { id: "experience", label: "Experience", Component: Experience },
  { id: "achievements", label: "Achievements", Component: Achievements },
  { id: "certifications", label: "Certifications", Component: Certifications },
  { id: "contact", label: "Contact", Component: Contact },
];

export default function MobileSinglePage() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  return (
    <div style={{ position: "relative" }}>
      {sections.map(({ id, label, Component }, idx) => (
        <section id={id} key={id} style={{ marginBottom: 32 }}>
          <Component />
          {idx < sections.length - 1 && (
            <div style={{
              width: "80%",
              margin: "32px auto 0 auto",
              borderBottom: "1.5px solid #23283a",
              opacity: 0.5,
              borderRadius: 2,
            }} />
          )}
        </section>
      ))}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 24,
            right: 18,
            zIndex: 999,
            background: "#23283a",
            color: "#f5f6fa",
            border: "none",
            borderRadius: "50%",
            width: 48,
            height: 48,
            fontSize: 24,
            boxShadow: "0 2px 8px #0008",
            cursor: "pointer",
            opacity: 0.85,
          }}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
} 