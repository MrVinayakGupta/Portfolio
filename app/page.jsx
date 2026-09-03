'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import DevTerminal from '../components/DevTerminal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ResumeModal from '../components/ResumeModal';
import CustomCursor from '../components/CustomCursor';
import { useTheme } from '../components/ThemeProvider';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-400 select-auto ${
      isDark ? 'bg-[#05070d] text-slate-100' : 'bg-[#fbfaf8] text-slate-900'
    }`}>
      {/* Luxury Trailing Custom Cursor */}
      <CustomCursor />

      {/* Floating Minimalist Frosted Glass Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <DevTerminal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Print Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}
