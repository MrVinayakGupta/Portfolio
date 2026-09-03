'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Download, 
  FileText, 
  Code2, 
  Copy, 
  Check,
  Sparkles,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';
import { downloadResume } from '../utils/downloadResume';
import ThreeCanvas from './ThreeCanvas';

export default function Hero({ onOpenResume }) {
  const { theme, isDark } = useTheme();
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full-Stack MERN Architect",
    "Delta Certified Engineer",
    "High-Scale REST API Specialist",
    "React & Next.js Performance Crafter"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[96vh] pt-36 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Interactive 3D Three.js Constellation Canvas */}
      <ThreeCanvas theme={theme} />

      {/* Subtle Ambient Radial Lighting */}
      {isDark ? (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-300/15 rounded-full blur-[150px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-yellow-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Architectural Index Tag (ecoLINEAR inspiration) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b pb-3 mb-8 text-xs font-mono"
          style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(217,119,6,0.18)' }}
        >
          <div className="flex items-center gap-2">
            <span className={isDark ? "text-sky-400 font-bold" : "text-amber-700 font-bold"}>Fig. 01 / 06</span>
            <span className={isDark ? "text-slate-500" : "text-slate-400"}>—</span>
            <span className={isDark ? "text-slate-400" : "text-slate-600"}>FULL-STACK ENGINEERING PRACTICE</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className={isDark ? "text-slate-300 font-semibold" : "text-slate-800 font-semibold"}>{personalInfo.status}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monumental Headline & Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            
            {/* Tagline */}
            <div className="space-y-2">
              <p className={`text-xs sm:text-sm font-mono font-bold tracking-widest uppercase ${
                isDark ? 'text-sky-400' : 'text-amber-700'
              }`}>
                Computer Science Graduate & MERN Engineer
              </p>
              
              <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight font-serif leading-[0.95] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Vinayak <span className="block font-serif italic font-normal gradient-accent">Gupta</span>
              </h1>

              <div className="h-10 sm:h-12 flex items-center pt-1">
                <span className={`text-lg sm:text-2xl font-mono font-bold tracking-tight ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  → {roles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Editorial Bio */}
            <p className={`text-sm sm:text-base leading-relaxed max-w-xl font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              BCA Graduate (2023–2026, VBS Purvanchal University) & Delta Full-Stack Web Development certified engineer. Creating resilient <strong className={isDark ? "text-sky-400" : "text-amber-700"}>MERN stack</strong> architectures, sub-100ms REST APIs, and 98/100 Lighthouse-optimized digital experiences.
            </p>

            {/* Quick Metadata Chips */}
            <div className={`flex flex-wrap items-center gap-3 text-xs font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>{personalInfo.location}</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <a href={`tel:${personalInfo.rawPhone}`} className="hover:underline">
                  {personalInfo.phone}
                </a>
              </div>
              
              <button 
                onClick={copyEmail}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs transition-all ${
                  isDark 
                    ? 'bg-slate-900/90 hover:bg-slate-800 border-slate-800 text-slate-300' 
                    : 'bg-white hover:bg-amber-50 border-amber-200 text-slate-700 shadow-sm'
                }`}
                title="Click to copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />}
                <span>{copied ? "Copied!" : personalInfo.email}</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className={`flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white shadow-xl transition-all hover:scale-105 active:scale-95 ${
                  isDark
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sky-500/25'
                    : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 shadow-amber-500/30'
                }`}
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct Resume Download */}
              <button
                onClick={downloadResume}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white shadow-md transition-all hover:scale-105 active:scale-95 ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                    : 'bg-gradient-to-r from-amber-600 to-yellow-600 shadow-amber-500/20'
                }`}
                title="Download Official Resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              {/* Preview CV Modal */}
              <button
                onClick={onOpenResume}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
                  isDark
                    ? 'bg-slate-900/60 hover:bg-slate-800 border-slate-800 text-slate-300'
                    : 'bg-white hover:bg-amber-50 border-amber-200 text-slate-800 shadow-sm'
                }`}
              >
                <FileText className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-full border transition-all hover:scale-110 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50'
                    : 'bg-white border-amber-200 text-slate-700 hover:text-amber-700 hover:border-amber-400 shadow-sm'
                }`}
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-full border transition-all hover:scale-110 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50'
                    : 'bg-white border-amber-200 text-slate-700 hover:text-amber-700 hover:border-amber-400 shadow-sm'
                }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-2.5 rounded-full border transition-all hover:scale-110 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50'
                    : 'bg-white border-amber-200 text-slate-700 hover:text-amber-700 hover:border-amber-400 shadow-sm'
                }`}
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Architectural Blueprint Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative">
              
              {/* Subtle Glowing Aura */}
              <div className={`absolute -inset-1 rounded-3xl opacity-35 blur-xl transition duration-700 ${
                isDark 
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600' 
                  : 'bg-gradient-to-r from-amber-400 to-yellow-500 opacity-50'
              }`}></div>
              
              <div className={`relative rounded-3xl border shadow-xl overflow-hidden backdrop-blur-xl ${
                isDark 
                  ? 'bg-[#0a0f1d]/90 border-slate-800 text-slate-200' 
                  : 'bg-white/95 border-amber-200 text-slate-800 shadow-luxury'
              }`}>
                
                {/* Minimalist Card Header */}
                <div className={`flex items-center justify-between px-5 py-3.5 border-b ${
                  isDark ? 'bg-[#060913] border-slate-800' : 'bg-amber-50/70 border-amber-100'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  
                  <div className={`text-xs font-mono font-semibold flex items-center gap-1.5 ${
                    isDark ? 'text-slate-400' : 'text-amber-900'
                  }`}>
                    <Code2 className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                    <span>system.spec.json</span>
                  </div>
                  
                  <div className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold flex items-center gap-1 ${
                    isDark 
                      ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60' 
                      : 'text-emerald-800 bg-emerald-100 border-emerald-300'
                  }`}>
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Clean Code Blueprint */}
                <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-1.5">
                  <div>
                    <span className={isDark ? "text-purple-400 font-bold" : "text-purple-700 font-bold"}>const</span> <span className={isDark ? "text-sky-400 font-bold" : "text-amber-700 font-bold"}>DeveloperProfile</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>engineer:</span> <span className={isDark ? "text-emerald-300" : "text-emerald-700 font-semibold"}>"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>credentials:</span> [
                    <span className={isDark ? "text-amber-300" : "text-amber-700 font-bold"}>"Delta Apna College"</span>, <span className={isDark ? "text-amber-300" : "text-amber-700 font-bold"}>"Scaler React"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>coreStack:</span> [
                    <span className={isDark ? "text-sky-300" : "text-blue-700 font-bold"}>"React"</span>, <span className={isDark ? "text-sky-300" : "text-blue-700 font-bold"}>"Node.js"</span>, <span className={isDark ? "text-sky-300" : "text-blue-700 font-bold"}>"Express"</span>, <span className={isDark ? "text-sky-300" : "text-blue-700 font-bold"}>"MongoDB"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>productionApps:</span> [
                    <span className={isDark ? "text-emerald-300" : "text-emerald-700 font-semibold"}>"TravelNest"</span>, <span className={isDark ? "text-emerald-300" : "text-emerald-700 font-semibold"}>"Pinspire"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>credentialID:</span> <span className={isDark ? "text-amber-300" : "text-amber-800 font-semibold"}>"6a79ab1b5b9e304352072d50"</span>
                  </div>
                  <div>&#125;;</div>
                  <div className={`pt-2 text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>// Ready to build high-performance software 🚀</div>
                </div>

                {/* Bottom Highlight Badges */}
                <div className={`grid grid-cols-2 gap-2 p-3 border-t text-center ${
                  isDark ? 'bg-[#060913] border-slate-800' : 'bg-amber-50/50 border-amber-100'
                }`}>
                  <div className={`p-2.5 rounded-2xl ${isDark ? 'bg-slate-900/60' : 'bg-white border border-amber-200/60 shadow-sm'}`}>
                    <div className={`text-sm font-extrabold font-mono ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>Delta MERN</div>
                    <div className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Apna College Certified</div>
                  </div>
                  <div className={`p-2.5 rounded-2xl ${isDark ? 'bg-slate-900/60' : 'bg-white border border-amber-200/60 shadow-sm'}`}>
                    <div className={`text-sm font-extrabold font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>98/100</div>
                    <div className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Lighthouse SSR Score</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
