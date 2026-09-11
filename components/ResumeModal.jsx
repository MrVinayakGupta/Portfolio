'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github
} from 'lucide-react';
import { personalInfo, educationData, experienceData, certificationsData, projectsData, skillsData } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';
import { downloadResume } from '../utils/downloadResume';

export default function ResumeModal({ onClose }) {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden ${
          isDark ? 'bg-[#0a0f1d] border-slate-800 text-slate-100' : 'bg-white border-amber-200 text-slate-900'
        }`}
      >
        {/* Modal Header Bar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          isDark ? 'bg-[#060913] border-slate-800' : 'bg-amber-50/80 border-amber-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
              isDark ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' : 'bg-amber-100 text-amber-800 border-amber-300'
            }`}>
              ATS-FRIENDLY RESUME
            </span>
            <span className="text-xs font-mono opacity-50 hidden sm:inline">Vinayak_Gupta_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadResume}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs text-white shadow-md transition-all hover:scale-105 ${
                isDark 
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600' 
                  : 'bg-gradient-to-r from-amber-500 to-yellow-600'
              }`}
              title="Download & Print Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-full border transition-colors ${
                isDark ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800' : 'bg-white hover:bg-amber-50 text-slate-600 hover:text-slate-900 border-amber-200'
              }`}
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: ATS Resume Document Paper View */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-xs sm:text-sm space-y-6">
          
          {/* Resume Header */}
          <div className="text-center border-b pb-6 space-y-2"
            style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)' }}
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">
              {personalInfo.name}
            </h1>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-center gap-2">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
            </div>
            <div className="text-xs flex flex-wrap items-center justify-center gap-3 pt-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-sky-500 hover:underline">
                linkedin.com/in/vinayak-gupta-066424377
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-sky-500 hover:underline">
                github.com/MrVinayakGupta
              </a>
              <span>•</span>
              <a href={personalInfo.portfolioUrl} target="_blank" rel="noreferrer" className="text-sky-500 hover:underline">
                portfolio-mrvinayakgupta.vercel.app
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1 font-mono"
              style={{ borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)' }}
            >
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline font-semibold">
              <span>Bachelor of Computer Application (BCA)</span>
              <span className="font-mono text-xs">2023 – 2026</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Veer Bahadur Singh Purvanchal University, Jaunpur
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1 font-mono"
              style={{ borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)' }}
            >
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-xs">
              <p><strong>Languages:</strong> Java, JavaScript, C, C++</p>
              <p><strong>Frontend:</strong> HTML, CSS, React.js, Bootstrap, Tailwind CSS</p>
              <p><strong>Backend:</strong> Node.js, Express.js, REST APIs</p>
              <p><strong>Databases:</strong> MongoDB, MySQL</p>
              <p><strong>Tools:</strong> Git, GitHub, VS Code</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1 font-mono"
              style={{ borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)' }}
            >
              EXPERIENCE
            </h2>

            {experienceData.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-baseline font-semibold">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="font-mono text-xs">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1 font-mono"
              style={{ borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)' }}
            >
              PROJECTS
            </h2>

            {projectsData.map((proj, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-wrap justify-between items-baseline font-semibold">
                  <span>{proj.title} — {proj.subtitle}</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  GitHub: <a href={proj.github} target="_blank" rel="noreferrer" className="text-sky-500 underline">{proj.github}</a>
                  {proj.live && proj.id === 'travelnest' && (
                    <> &nbsp;|&nbsp; Live Demo: <a href={proj.live} target="_blank" rel="noreferrer" className="text-sky-500 underline">{proj.live}</a></>
                  )}
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1 font-mono"
              style={{ borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)' }}
            >
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <li>Delta – Full Stack Web Development, Apna College</li>
              <li>Scaler Certified React Bootcamp Masterclass, Scaler</li>
            </ul>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
