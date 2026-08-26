'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, FileText, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';

export default function Navbar({ onOpenResume }) {
  const { theme, isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Console', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'terminal', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-6 pointer-events-none transition-all duration-300">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-6xl rounded-full px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-400 pointer-events-auto flex items-center justify-between ${
          scrolled
            ? isDark 
              ? 'navbar-glass-dark' 
              : 'navbar-glass-light'
            : isDark
              ? 'bg-[#080c16]/50 backdrop-blur-md border border-slate-800/50'
              : 'bg-white/60 backdrop-blur-md border border-amber-200/50'
        }`}
      >
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm transition-transform duration-300 group-hover:scale-105 shadow-md ${
            isDark 
              ? 'bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-sky-500/20' 
              : 'bg-gradient-to-tr from-amber-500 via-amber-600 to-yellow-600 text-white shadow-amber-500/25'
          }`}>
            VG
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-sm tracking-tight font-display transition-colors ${
              isDark ? 'text-white group-hover:text-sky-400' : 'text-slate-900 group-hover:text-amber-700'
            }`}>
              {personalInfo.name}
            </span>
            <span className={`text-[10px] font-mono flex items-center gap-1 font-medium ${
              isDark ? 'text-slate-400' : 'text-amber-800'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block"></span>
              <span>Full-Stack Dev</span>
            </span>
          </div>
        </a>

        {/* Minimalist Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-transparent">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'text-sky-400 bg-sky-500/10'
                      : 'text-amber-900 bg-amber-500/15'
                    : isDark
                      ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-amber-100/50'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${
                      isDark ? 'bg-sky-400' : 'bg-amber-600'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions (Theme toggle + Resume + Contact) */}
        <div className="hidden lg:flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-amber-300 hover:bg-slate-800'
                : 'bg-white border-amber-200 text-amber-700 hover:bg-amber-50 shadow-sm'
            }`}
            title={isDark ? "Switch to Golden Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-700" />}
          </button>

          {/* Resume Preview */}
          <button
            onClick={onOpenResume}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all active:scale-95 ${
              isDark
                ? 'text-slate-300 bg-slate-900/80 border-slate-800 hover:bg-slate-800'
                : 'text-slate-700 bg-white border-amber-200 hover:bg-amber-50 shadow-sm'
            }`}
          >
            <FileText className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
            <span>Resume</span>
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white rounded-full shadow-md transition-all hover:scale-105 active:scale-95 ${
              isDark
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-sky-500/20'
                : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 shadow-amber-500/25'
            }`}
          >
            <Send className="w-3 h-3" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full border text-xs ${
              isDark ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-white border-amber-200 text-amber-700'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full border ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-amber-200 text-slate-800'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-20 left-4 right-4 rounded-3xl p-5 border shadow-2xl backdrop-blur-2xl pointer-events-auto md:hidden ${
              isDark 
                ? 'bg-[#0a0f1d]/95 border-slate-800 text-slate-200' 
                : 'bg-white/95 border-amber-200 text-slate-800'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                    isDark ? 'hover:bg-slate-800/80' : 'hover:bg-amber-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className={`pt-3 mt-1 border-t flex flex-col gap-2 ${
                isDark ? 'border-slate-800' : 'border-amber-200'
              }`}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-2xl border ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-white border-amber-200 text-slate-800'
                  }`}
                >
                  <FileText className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                  <span>View / Download Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-white rounded-2xl shadow-md ${
                    isDark ? 'bg-gradient-to-r from-sky-500 to-indigo-600' : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
