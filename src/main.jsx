import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Mail,
  ServerCog,
  TestTube2,
} from 'lucide-react';
import './styles.css';

const highlights = [
  {
    icon: Code2,
    label: 'Full-Stack Web Development',
    text: 'Skilled in HTML, CSS, JavaScript, Node.js, Vite + React, PHP, Python, and C/C++ across practical software projects.',
  },
  {
    icon: ServerCog,
    label: '30+ Years in Software',
    text: 'More than three decades of hands-on development experience, from low-level programming to modern web applications.',
  },
  {
    icon: Database,
    label: 'Backend & Data',
    text: 'Experienced with backend development, MySQL databases, APIs, scripting, integration, and production-minded problem solving.',
  },
  {
    icon: TestTube2,
    label: 'Playwright Testing',
    text: 'Proficient in using Playwright for browser automation, end-to-end testing, regression checks, and UI verification.',
  },
];

const capabilities = [
  'HTML / CSS / JavaScript / Node.js',
  'Vite + React application development',
  'PHP / Python / C / C++ / MySQL',
  'AI, LLM, agent concepts, and tool-assisted workflows',
  'Playwright end-to-end testing and browser automation',
];

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Jerry Shi home">
            Jerry Shi
          </a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="eyebrow">Software developer and test automation practitioner</p>
            <h1 id="hero-title">Building reliable software with decades of engineering experience.</h1>
            <p className="lead">
              I am a China-based software developer with more than thirty years of experience across web,
              backend, scripting, systems programming, databases, AI-assisted development, and browser automation
              testing.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#work">
                View capabilities
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="secondaryButton" href="https://tigao123.com" target="_blank" rel="noreferrer">
                Visit studio site
              </a>
            </div>
          </div>

          <div className="portraitPanel" aria-label="Abstract portrait card">
            <div className="portraitMark">
              <BrainCircuit size={34} aria-hidden="true" />
              <span>DEV</span>
            </div>
            <div className="signalGrid" aria-hidden="true">
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
            <p>Web engineering. Backend systems. AI awareness. Automated testing.</p>
          </div>
        </div>
      </section>

      <section className="section aboutSection" id="about" aria-labelledby="about-title">
        <div className="sectionHeader">
          <p className="eyebrow">About</p>
          <h2 id="about-title">A practical engineer with broad software development and testing experience.</h2>
        </div>
        <div className="aboutText">
          <p>
            I have more than thirty years of software development experience, working across multiple technology
            generations and programming environments. My strengths include HTML, CSS, JavaScript, Node.js,
            Vite + React, PHP, Python, C/C++, and MySQL.
          </p>
          <p>
            I also follow modern AI development closely, including LLMs, agents, and AI-assisted software
            workflows. For quality assurance and delivery confidence, I use Playwright to build automated browser
            tests, validate user flows, and catch regressions in web applications.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="highlights-title">
        <div className="sectionHeader compact">
          <p className="eyebrow">Experience</p>
          <h2 id="highlights-title">What I bring to software projects.</h2>
        </div>
        <div className="highlightGrid">
          {highlights.map(({ icon: Icon, label, text }) => (
            <article className="highlightCard" key={label}>
              <Icon size={24} aria-hidden="true" />
              <h3>{label}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workBand" id="work" aria-labelledby="work-title">
        <div className="workCopy">
          <p className="eyebrow">Capabilities</p>
          <h2 id="work-title">From application code to automated verification.</h2>
          <p>
            I focus on practical, maintainable software: front-end interfaces, backend services, database-backed
            applications, scripting, and automated tests that make web systems easier to trust and improve.
          </p>
        </div>
        <ul className="capabilityList" aria-label="Technical capabilities">
          {capabilities.map((capability) => (
            <li key={capability}>
              <span />
              {capability}
            </li>
          ))}
        </ul>
      </section>

      <section className="contactSection" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Looking for experienced software development or testing support?</h2>
          <p>
            I welcome conversations about web development, backend systems, AI-assisted workflows, Playwright
            testing, and practical software engineering collaboration.
          </p>
        </div>
        <a className="contactButton" href="mailto:jerryshi68@gmail.com">
          <Mail size={18} aria-hidden="true" />
          Contact via email
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);