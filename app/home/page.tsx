"use client";
import { useState } from 'react';
import Image from 'next/image';

const contact = {
  email: "aadhithyaviswanathan@gmail.com",
  phone: "+91-8072660284",
  location: "Erode, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/aadhithya-viswanathan-0bb0a62b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/Aadhithya0104"
};

const sections = [
  { key: 'education', label: 'Education' },
  { key: 'skills', label: 'Technical Skills' },
  { key: 'softSkills', label: 'Soft Skills' },
  { key: 'areaOfInterest', label: 'Area of Interest' },
  { key: 'projects', label: 'Projects' },
  { key: 'internship', label: 'Internships' },
  { key: 'achievements', label: 'Achievements' },
  { key: 'certifications', label: 'Certifications' },
];

const sectionData = {
  education: [
    {
      degree: "B.TECH in Information Technology (CGPA: 7.2)",
      institution: "GOVERNMENT COLLEGE OF ENGINEERING | ERODE",
      duration: "Nov 2021 – May 2025",
    },
    {
      degree: "Diploma in Mechatronics Engineering (79%)",
      institution: "KONGU POLYTECHNIC COLLEGE | ERODE",
      duration: "July 2018 – June 2020",
    },
    {
      degree: "SSLC",
      institution: "JAYCEES MATRIC HIGHER SECONDARY SCHOOL (81%) | ERODE",
      duration: "Apr 2018",
    },
  ],
  skills: [
    "Languages – Python, SQL",
    "Scripting Languages – HTML, CSS",
    "Development Tools – Git, Github"
  ],
  softSkills: [
    "Creativity & Problem-Solving",
    "Communication and Customer Support",
    "Adaptability & Team Collaboration",
    "Analytical Thinking",
    "Project Management"
  ],
  areaOfInterest: [
    "Digital Marketing",
    "Data Analysis",
    "Social Media Advertising"
  ],
  projects: [
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
  ],
  internship: [
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
  ],
  achievements: [
    "Winner award (twice) in AIIT project exp7 23 with my group : OBSTACLES AVOIDANCE AND TRENCH DETECTION ROVER",
    "Volunteered at the Innovation Centre in the department for 2 years, coordinating events and led multiple student teams, contributing to a culture of creativity, problem-solving among peers."
  ],
  certifications: [
    "Fundamentals of Digital Marketing – Google Digital Garage",
    "Personal Branding – Coursera",
    "Content Marketing and Social Media – HubSpot Academy"
  ]
};

function ThemeLogoSwitcher({ theme, setTheme }: { theme: string; setTheme: (t: string) => void }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-logo-switcher"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <span role="img" aria-label="Light Mode" style={{ fontSize: 28 }}>🌞</span>
      ) : (
        <span role="img" aria-label="Dark Mode" style={{ fontSize: 28 }}>🌙</span>
      )}
    </button>
  );
}

function SectionTabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      className={`resume-tab-btn${active ? ' active' : ''}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState('education');

  return (
    <div className={theme === "dark" ? "resume-electric" : "resume-pale"} style={{ minHeight: '100vh', transition: 'background 0.5s' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 24 }}>
        <ThemeLogoSwitcher theme={theme} setTheme={setTheme} />
      </div>
      <div className="resume-container">
        <div className="resume-header">
          <Image
            src="/profile.jpg"
            alt="Profile"
            className="resume-photo"
            width={130}
            height={130}
            priority
          />
          <div className="resume-title-block">
            <h1 className="resume-name">AADHITHYA VISWANATHAN</h1>
            <div className="resume-contact">
              <span>{contact.email}</span> | <span>{contact.phone}</span> | <span>{contact.location}</span>
            </div>
            <div className="resume-links">
              <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span> | </span>
              <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="resume-summary">
          To secure a position where I can apply my skills and grow within a supportive team.
        </div>
        <div className="resume-tabs">
          {sections.map((section) => (
            <SectionTabButton
              key={section.key}
              active={activeSection === section.key}
              onClick={() => setActiveSection(section.key)}
            >
              {section.label}
            </SectionTabButton>
          ))}
        </div>
        <div className="resume-section-content">
          <SectionContent section={activeSection} theme={theme} />
        </div>
      </div>
    </div>
  );
}

function SectionContent({ section, theme }: { section: string; theme: string }) {
  switch (section) {
    case 'education':
      return (
        <div className="resume-section-list">
          {sectionData.education.map((edu, idx) => (
            <div className="edu-card scroll-animate" key={idx} style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
              <h2 className="edu-degree">{edu.degree}</h2>
              <div className="edu-inst">{edu.institution}</div>
              <div className="edu-dur">{edu.duration}</div>
            </div>
          ))}
        </div>
      );
    case 'skills':
      return (
        <div className="resume-section-list">
          {sectionData.skills.map((skill, idx) => (
            <div className="edu-card scroll-animate" key={idx} style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
              <h2 className="edu-degree" style={{ fontSize: '1.1rem', margin: 0 }}>{skill}</h2>
            </div>
          ))}
        </div>
      );
    case 'softSkills':
      return (
        <div className="resume-section-list">
          {sectionData.softSkills.map((skill, idx) => (
            <div className="edu-card scroll-animate" key={idx} style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
              <h2 className="edu-degree" style={{ fontSize: '1.1rem', margin: 0 }}>{skill}</h2>
            </div>
          ))}
        </div>
      );
    case 'areaOfInterest':
      return (
        <div className="resume-section-list">
          {sectionData.areaOfInterest.map((interest, idx) => (
            <div className="edu-card scroll-animate" key={idx} style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
              <h2 className="edu-degree" style={{ fontSize: '1.1rem', margin: 0 }}>{interest}</h2>
            </div>
          ))}
        </div>
      );
    case 'projects':
      return (
        <div className="resume-section-list">
          {sectionData.projects.map((proj, idx) => (
            <div className="edu-card scroll-animate" key={idx} style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
              <h2 className="edu-degree" style={{ fontSize: '1.2rem', margin: 0 }}>{proj.title}</h2>
              <div className="edu-inst" style={{ fontSize: '1rem', marginBottom: 6 }}>{proj.date}</div>
              <div className="edu-dur" style={{ marginBottom: 8 }}>{proj.description}</div>
              <div style={{ fontSize: '0.98rem', color: theme === 'dark' ? '#00c6ff' : '#1976d2', fontWeight: 600 }}>Tech: {proj.tech}</div>
            </div>
          ))}
        </div>
      );
    case 'internship':
      return (
        <div className="resume-section-list">
          {sectionData.internship.map((intern, idx) => (
            <div className="edu-card scroll-animate" key={idx} style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
              <h2 className="edu-degree" style={{ fontSize: '1.2rem', margin: 0 }}>{intern.company}</h2>
              <div className="edu-inst" style={{ fontSize: '1rem', marginBottom: 6 }}>{intern.date}</div>
              <div className="edu-dur">{intern.description}</div>
            </div>
          ))}
        </div>
      );
    case 'achievements':
      return (
        <div className="resume-section-list">
          {sectionData.achievements.map((ach, idx) => (
            <div className="edu-card scroll-animate" key={idx} style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
              <h2 className="edu-degree" style={{ fontSize: '1.1rem', margin: 0 }}>{ach}</h2>
            </div>
          ))}
        </div>
      );
    case 'certifications':
      return (
        <div className="resume-section-list">
          {sectionData.certifications.map((cert, idx) => (
            <div className="edu-card scroll-animate" key={idx} style={{ animationDelay: `${0.2 + idx * 0.2}s` }}>
              <h2 className="edu-degree" style={{ fontSize: '1.1rem', margin: 0 }}>{cert}</h2>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
} 