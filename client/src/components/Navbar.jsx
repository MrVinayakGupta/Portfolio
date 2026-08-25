import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sun, Moon, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'terminal', 'contact'];
      const scrollPosition = window.scrollY + 200;

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

  const isDark = theme === 'dark';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#0a0f1d]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
            : 'bg-white/85 backdrop-blur-md border-b border-amber-200/60 shadow-lg shadow-amber-900/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg group-hover:scale-105 transition-transform ${
              isDark 
                ? 'bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-sky-500/25' 
                : 'bg-gradient-to-tr from-amber-500 via-amber-600 to-yellow-600 shadow-amber-500/30'
            }`}>
              VG
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tight text-lg transition-colors ${
                isDark 
                  ? 'text-white group-hover:text-sky-400' 
                  : 'text-slate-900 group-hover:text-amber-600'
              }`}>
                {personalInfo.name}
              </span>
              <span className={`text-xs font-mono flex items-center gap-1.5 ${
                isDark ? 'text-sky-400/80' : 'text-amber-700 font-semibold'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block"></span>
                <span>Full-Stack Dev</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className={`hidden md:flex items-center gap-1 backdrop-blur-sm px-4 py-1.5 rounded-full border ${
            isDark 
              ? 'bg-slate-900/60 border-slate-800/80' 
              : 'bg-white/90 border-amber-200/80 shadow-sm'
          }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'bg-sky-500/20 text-sky-400 shadow-sm border border-sky-500/30'
                        : 'bg-amber-500/15 text-amber-800 shadow-sm border border-amber-500/30 font-semibold'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2 group ${
                isDark 
                  ? 'bg-slate-800/90 hover:bg-slate-700 border-slate-700 text-amber-300 hover:text-amber-200 shadow-sm' 
                  : 'bg-white hover:bg-amber-50 border-amber-300 text-amber-700 shadow-sm hover:shadow-amber-500/15'
              }`}
              title={isDark ? "Switch to Golden Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-amber-700 group-hover:-rotate-12 transition-transform duration-300" />
              )}
              <span className="text-xs font-mono font-medium">
                {isDark ? 'Gold Mode' : 'Dark Mode'}
              </span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all shadow-sm active:scale-95 ${
                isDark
                  ? 'text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border-slate-700'
                  : 'text-slate-700 hover:text-slate-900 bg-white hover:bg-amber-50 border-amber-200'
              }`}
            >
              <FileText className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
              <span>Resume</span>
            </button>

            {/* Hire Me Button */}
            <a
              href="#contact"
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold text-white rounded-xl shadow-lg transition-all active:scale-95 ${
                isDark
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-sky-500/20 hover:shadow-sky-500/35'
                  : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 shadow-amber-500/25 hover:shadow-amber-500/40'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border transition-colors ${
                isDark 
                  ? 'bg-slate-800/80 border-slate-700 text-amber-300' 
                  : 'bg-white border-amber-200 text-amber-700'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-700" />}
            </button>

            <button
              onClick={onOpenResume}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1 ${
                isDark 
                  ? 'text-slate-300 bg-slate-800/80 border-slate-700' 
                  : 'text-slate-700 bg-white border-amber-200'
              }`}
            >
              <FileText className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`p-2.5 rounded-xl border focus:outline-none ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:text-white'
                  : 'bg-white border-amber-200 text-slate-800 hover:text-amber-600'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={`md:hidden backdrop-blur-xl border-b px-4 pt-3 pb-6 mt-2 shadow-2xl animate-fadeIn ${
          isDark 
            ? 'bg-[#0d1527]/95 border-slate-800' 
            : 'bg-white/95 border-amber-200'
        }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-slate-200 hover:text-white hover:bg-slate-800/70'
                    : 'text-slate-700 hover:text-amber-800 hover:bg-amber-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className={`pt-3 mt-2 border-t flex flex-col gap-2 ${
              isDark ? 'border-slate-800' : 'border-amber-200'
            }`}>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg ${
                  isDark ? 'text-slate-200 bg-slate-800' : 'text-slate-800 bg-amber-50 border border-amber-200'
                }`}
              >
                <FileText className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>View / Download Resume</span>
              </button>
              
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-white rounded-lg shadow-md ${
                  isDark 
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600' 
                    : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
