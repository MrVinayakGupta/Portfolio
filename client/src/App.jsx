import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import DevTerminal from './components/DevTerminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('vg_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('vg_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-amber-500 selection:text-white transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#0a0f1d] text-slate-100' 
        : 'bg-[#fcfbfa] text-slate-900'
    }`}>
      {/* Fixed Navbar with Theme Toggle */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero theme={theme} onOpenResume={() => setIsResumeOpen(true)} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Education theme={theme} />
        <DevTerminal theme={theme} />
        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Resume Viewer / Print Modal */}
      {isResumeOpen && (
        <ResumeModal theme={theme} onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}
