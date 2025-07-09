"use client";
import Link from 'next/link';
import './globals.css';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/home', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/contact', label: 'Contact' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <nav className="apple-nav">
          <div className="logo-text">Aadhithya</div>
          <button
            className="nav-hamburger"
            aria-label="Open navigation menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span className="nav-hamburger-bar" />
            <span className="nav-hamburger-bar" />
            <span className="nav-hamburger-bar" />
          </button>
          <div className={`nav-links${navOpen ? ' nav-links-open' : ''}`}>
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href} className="nav-link" onClick={() => setNavOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
