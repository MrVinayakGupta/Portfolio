import React, { useState, useEffect } from 'react';
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
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { downloadResume } from '../utils/downloadResume';

export default function Hero({ theme, onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const isDark = theme === 'dark';

  const roles = [
    "Full-Stack MERN Developer",
    "Delta Certified (Apna College)",
    "React.js & Node.js Specialist",
    "BCA Scholar (VBS Purvanchal)",
    "Scalable REST API Architect"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center bg-grid-pattern overflow-hidden">
      
      {/* Ambient background glows */}
      {isDark ? (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-400/20 rounded-full blur-[130px] pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-yellow-500/15 rounded-full blur-[110px] pointer-events-none -z-10" />
          <div className="absolute bottom-10 left-10 w-[320px] h-[320px] bg-amber-300/20 rounded-full blur-[110px] pointer-events-none -z-10" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium shadow-sm ${
              isDark 
                ? 'bg-slate-800/80 border border-slate-700/80 text-slate-300 shadow-inner' 
                : 'bg-white/95 border border-amber-300/80 text-amber-900 shadow-amber-500/10'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold">{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className={`text-sm sm:text-base font-mono font-semibold tracking-wide ${
                isDark ? 'text-sky-400' : 'text-amber-700'
              }`}>
                Hi, I'm
              </p>
              
              <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight leading-none ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {personalInfo.name}
              </h1>
              
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-3xl font-extrabold gradient-text">
                  {roles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Summary Text */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Computer Science (BCA) graduate & Delta Full-Stack Web Development certified developer. Specialized in the <span className={`font-bold ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>MERN stack</span> (React, Node, Express, MongoDB) with high performance and secure architecture.
            </p>

            {/* Quick Contact & Location Meta */}
            <div className={`flex flex-wrap items-center gap-4 text-xs sm:text-sm ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span className="font-medium">{personalInfo.location}</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-500" />
                <a 
                  href={`tel:${personalInfo.rawPhone}`} 
                  className={`font-medium transition-colors ${
                    isDark ? 'hover:text-emerald-300' : 'hover:text-emerald-700'
                  }`}
                >
                  {personalInfo.phone}
                </a>
              </div>
              
              <button 
                onClick={copyEmail}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono transition-all ${
                  isDark 
                    ? 'bg-slate-800/60 hover:bg-slate-700/60 border-slate-700 text-slate-300' 
                    : 'bg-white hover:bg-amber-50 border-amber-200 text-slate-700 shadow-sm'
                }`}
                title="Click to copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />}
                <span>{copied ? "Copied Email!" : personalInfo.email}</span>
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm text-white shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 ${
                  isDark
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-sky-500/25 hover:shadow-sky-500/40'
                    : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 shadow-amber-500/30 hover:shadow-amber-500/45'
                }`}
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct Resume Download */}
              <button
                onClick={downloadResume}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm text-white shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-black/20'
                    : 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 shadow-amber-500/20'
                }`}
                title="Download Official Resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              {/* View Resume Preview */}
              <button
                onClick={onOpenResume}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-semibold text-sm border transition-all ${
                  isDark
                    ? 'bg-slate-900/60 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white'
                    : 'bg-white/90 hover:bg-amber-50 border-amber-200 text-slate-800 shadow-sm'
                }`}
              >
                <FileText className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-2xl border transition-all hover:scale-110 ${
                  isDark
                    ? 'bg-slate-800/70 border-slate-700/80 text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-slate-800'
                    : 'bg-white border-amber-200/90 text-slate-700 hover:text-amber-700 hover:border-amber-400 hover:bg-amber-50 shadow-sm'
                }`}
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-2xl border transition-all hover:scale-110 ${
                  isDark
                    ? 'bg-slate-800/70 border-slate-700/80 text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-slate-800'
                    : 'bg-white border-amber-200/90 text-slate-700 hover:text-amber-700 hover:border-amber-400 hover:bg-amber-50 shadow-sm'
                }`}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-3 rounded-2xl border transition-all hover:scale-110 ${
                  isDark
                    ? 'bg-slate-800/70 border-slate-700/80 text-slate-300 hover:text-white hover:border-sky-500/50 hover:bg-slate-800'
                    : 'bg-white border-amber-200/90 text-slate-700 hover:text-amber-700 hover:border-amber-400 hover:bg-amber-50 shadow-sm'
                }`}
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Code Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Card Glow Outline */}
              <div className={`absolute -inset-1 rounded-3xl opacity-40 blur-lg transition duration-700 ${
                isDark 
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600' 
                  : 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 opacity-60'
              }`}></div>
              
              <div className={`relative rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-xl ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-800' 
                  : 'bg-white/95 border-amber-300/80 shadow-amber-900/10'
              }`}>
                
                {/* Header */}
                <div className={`flex items-center justify-between px-4 py-3 border-b ${
                  isDark ? 'bg-slate-950/80 border-slate-800/80' : 'bg-amber-50/80 border-amber-200'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  </div>
                  
                  <div className={`text-xs font-mono flex items-center gap-1.5 ${
                    isDark ? 'text-slate-400' : 'text-amber-900 font-semibold'
                  }`}>
                    <Code2 className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                    <span>vinayak-developer.js</span>
                  </div>
                  
                  <div className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
                    isDark 
                      ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60' 
                      : 'text-emerald-700 bg-emerald-100 border-emerald-300'
                  }`}>
                    Live
                  </div>
                </div>

                {/* Code Window Content */}
                <div className={`p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto space-y-1 ${
                  isDark ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  <div>
                    <span className={isDark ? "text-purple-400" : "text-purple-700 font-bold"}>const</span> <span className={isDark ? "text-sky-400" : "text-amber-700 font-bold"}>developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>name:</span> <span className={isDark ? "text-emerald-300" : "text-emerald-700 font-semibold"}>"{personalInfo.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>qualification:</span> <span className={isDark ? "text-emerald-300" : "text-emerald-700 font-semibold"}>"BCA (2023-2026)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>certificates:</span> [
                    <span className={isDark ? "text-amber-300" : "text-amber-700 font-bold"}>"Delta (Apna College)"</span>, <span className={isDark ? "text-amber-300" : "text-amber-700 font-bold"}>"Scaler React"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>coreStack:</span> [
                    <span className={isDark ? "text-amber-300" : "text-amber-700 font-bold"}>"React"</span>, <span className={isDark ? "text-amber-300" : "text-amber-700 font-bold"}>"Node.js"</span>, <span className={isDark ? "text-amber-300" : "text-amber-700 font-bold"}>"Express"</span>, <span className={isDark ? "text-amber-300" : "text-amber-700 font-bold"}>"MongoDB"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>keyProjects:</span> [
                    <span className={isDark ? "text-sky-300" : "text-blue-700 font-bold"}>"TravelNest"</span>, <span className={isDark ? "text-sky-300" : "text-blue-700 font-bold"}>"Pinspire"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>status:</span> <span className={isDark ? "text-indigo-400" : "text-amber-700 font-bold"}>"Ready for impact"</span>
                  </div>
                  <div>&#125;;</div>
                  <div className={`pt-2 ${isDark ? "text-slate-500" : "text-slate-400"}`}>// Verified Delta Credential: 6a79ab1b5b9e304352072d50 🚀</div>
                </div>

                {/* Bottom Stats inside card */}
                <div className={`grid grid-cols-2 gap-2 p-3 border-t text-center ${
                  isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-amber-50/60 border-amber-200'
                }`}>
                  <div className={`p-2 rounded-xl ${isDark ? 'bg-slate-900/50' : 'bg-white shadow-sm border border-amber-200/60'}`}>
                    <div className={`text-base font-extrabold ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>Delta</div>
                    <div className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Full Stack Certified</div>
                  </div>
                  <div className={`p-2 rounded-xl ${isDark ? 'bg-slate-900/50' : 'bg-white shadow-sm border border-amber-200/60'}`}>
                    <div className={`text-base font-extrabold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>98/100</div>
                    <div className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Lighthouse SSR</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
