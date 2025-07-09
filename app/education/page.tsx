"use client";
import { useState } from "react";

const educationData = [
  {
    degree: "B.E in Information Technology (CGPA: 7.2)",
    institution: "GOVERNMENT COLLEGE OF ENGINEERING | ERODE",
    duration: "Nov 2021 – May 2025",
  },
  {
    degree: "Diploma in Mechatronics Engineering (79%)",
    institution: "KONGU POLYTECHNIC COLLEGE | ERODE",
    duration: "July 2018 – June 2020",
  },
  {
    degree: "SSLC (81%)",
    institution: "JAYCEES MATRIC HIGHER SECONDARY SCHOOL | ERODE",
    duration: "Apr 2018",
  },
];

export default function EducationPage() {
  const [theme, setTheme] = useState("dark");

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
        <h1 className="edu-title">Education</h1>
        <div className="edu-list">
          {educationData.map((edu, idx) => (
            <div className="edu-card" key={idx} style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
              <h2 className="edu-degree">{edu.degree}</h2>
              <div className="edu-inst">{edu.institution}</div>
              <div className="edu-dur">{edu.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 