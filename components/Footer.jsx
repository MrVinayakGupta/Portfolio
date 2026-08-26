'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 relative transition-colors duration-300 ${
      isDark ? 'bg-[#060a12] border-slate-800/80 text-slate-400' : 'bg-white border-amber-200 text-slate-600'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-slate-900' : 'border-amber-100'
        }`}>
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-extrabold text-xs shadow-md ${
              isDark 
                ? 'bg-gradient-to-tr from-sky-500 to-indigo-600' 
                : 'bg-gradient-to-tr from-amber-500 via-amber-600 to-yellow-600'
            }`}>
              VG
            </div>
            <div>
              <div className={`font-bold text-sm font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </div>
              <div className={`text-[11px] font-mono font-medium ${
                isDark ? 'text-sky-400' : 'text-amber-700'
              }`}>
                Full-Stack MERN Developer
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className={`flex flex-wrap items-center justify-center gap-6 text-xs font-semibold ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <a href="#about" className={isDark ? "hover:text-white transition-colors" : "hover:text-amber-700 transition-colors"}>About</a>
            <a href="#skills" className={isDark ? "hover:text-white transition-colors" : "hover:text-amber-700 transition-colors"}>Skills</a>
            <a href="#projects" className={isDark ? "hover:text-white transition-colors" : "hover:text-amber-700 transition-colors"}>Projects</a>
            <a href="#education" className={isDark ? "hover:text-white transition-colors" : "hover:text-amber-700 transition-colors"}>Education</a>
            <a href="#terminal" className={isDark ? "hover:text-white transition-colors" : "hover:text-amber-700 transition-colors"}>Console</a>
            <a href="#contact" className={isDark ? "hover:text-white transition-colors" : "hover:text-amber-700 transition-colors"}>Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-full transition-colors border ${
                isDark 
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800' 
                  : 'bg-white hover:bg-amber-50 text-slate-600 hover:text-amber-700 border-amber-200 shadow-sm'
              }`}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-full transition-colors border ${
                isDark 
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800' 
                  : 'bg-white hover:bg-amber-50 text-slate-600 hover:text-amber-700 border-amber-200 shadow-sm'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2 rounded-full transition-colors border ${
                isDark 
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800' 
                  : 'bg-white hover:bg-amber-50 text-slate-600 hover:text-amber-700 border-amber-200 shadow-sm'
              }`}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-full transition-colors ml-1 border ${
                isDark 
                  ? 'bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border-sky-500/30' 
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 shadow-sm'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
          <div>
            &copy; {new Date().getFullYear()} Vinayak Gupta. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1.5 font-medium">
            <span>Engineered with</span>
            <span className={`font-mono font-bold ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>
              Next.js 14 & Three.js
            </span>
            <span>in Jaunpur, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
