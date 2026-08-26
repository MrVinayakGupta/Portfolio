'use client';

import React from 'react';
import { 
  X, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ShieldCheck 
} from 'lucide-react';
import { personalInfo, educationData, certificationsData, projectsData } from '../data/portfolioData';
import { downloadResume } from '../utils/downloadResume';
import { useTheme } from './ThemeProvider';

export default function ResumeModal({ onClose }) {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
          isDark 
            ? 'bg-[#0c1222] border-slate-700 shadow-sky-500/10' 
            : 'bg-white border-amber-300 shadow-luxury'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className={`flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b ${
          isDark ? 'bg-[#080c18] border-slate-800' : 'bg-amber-50/90 border-amber-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold font-serif ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Vinayak Gupta — Official Resume
            </span>
            <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full border ${
              isDark 
                ? 'text-sky-400 bg-sky-950/60 border-sky-800' 
                : 'text-amber-800 bg-amber-100 border-amber-300'
            }`}>
              PDF / Print Ready
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadResume}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs text-white transition-all shadow-md active:scale-95 ${
                isDark
                  ? 'bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 shadow-sky-500/20'
                  : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 shadow-amber-500/25'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-full transition-colors ${
                isDark 
                  ? 'bg-slate-800 text-slate-400 hover:text-white' 
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-amber-200 shadow-sm'
              }`}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className={`overflow-y-auto p-6 sm:p-10 space-y-8 font-sans ${
          isDark ? 'bg-[#080d1a] text-slate-200' : 'bg-white text-slate-800'
        }`}>
          
          {/* Header */}
          <div className={`text-center border-b pb-6 space-y-2 ${
            isDark ? 'border-slate-800' : 'border-amber-200'
          }`}>
            <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase font-serif ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {personalInfo.name}
            </h1>
            
            <p className={`text-sm font-bold font-mono ${
              isDark ? 'text-sky-400' : 'text-amber-700'
            }`}>
              {personalInfo.role} • Jaunpur, Uttar Pradesh
            </p>
            
            <div className={`flex flex-wrap justify-center items-center gap-4 text-xs pt-2 ${
              isDark ? 'text-slate-300' : 'text-slate-600 font-medium'
            }`}>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-emerald-500" /> {personalInfo.phone}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Mail className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} /> {personalInfo.email}</span>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={isDark ? "text-sky-400 hover:underline" : "text-amber-700 hover:underline font-bold"}>LinkedIn</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className={isDark ? "text-sky-400 hover:underline" : "text-amber-700 hover:underline font-bold"}>GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className={`text-xs font-bold font-mono uppercase tracking-wider border-b pb-1 ${
              isDark ? 'text-sky-400 border-slate-800' : 'text-amber-800 border-amber-200'
            }`}>
              Professional Summary
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className={`text-xs font-bold font-mono uppercase tracking-wider border-b pb-1 ${
              isDark ? 'text-sky-400 border-slate-800' : 'text-amber-800 border-amber-200'
            }`}>
              Technical Skills
            </h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <div><strong className={isDark ? "text-white" : "text-slate-900"}>Languages:</strong> Java, JavaScript (ES6+), C, C++</div>
              <div><strong className={isDark ? "text-white" : "text-slate-900"}>Frontend:</strong> React.js, Next.js, Tailwind CSS, Bootstrap, HTML5, CSS3</div>
              <div><strong className={isDark ? "text-white" : "text-slate-900"}>Backend:</strong> Node.js, Express.js, EJS SSR, RESTful APIs</div>
              <div><strong className={isDark ? "text-white" : "text-slate-900"}>Databases:</strong> MongoDB (Mongoose ODM), MySQL</div>
              <div><strong className={isDark ? "text-white" : "text-slate-900"}>Architecture & Auth:</strong> JWT, Bcrypt, Multer, Cloudinary API</div>
              <div><strong className={isDark ? "text-white" : "text-slate-900"}>Tools & Workflow:</strong> Git, GitHub, VS Code, Postman</div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className={`text-xs font-bold font-mono uppercase tracking-wider border-b pb-1 ${
              isDark ? 'text-sky-400 border-slate-800' : 'text-amber-800 border-amber-200'
            }`}>
              Key Engineering Projects
            </h2>

            {projectsData.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className={`text-sm font-bold font-serif ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {project.title} <span className={`text-xs font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>| {project.category}</span>
                  </h3>
                  <a href={project.github} target="_blank" rel="noreferrer" className={`text-xs font-mono font-semibold hover:underline ${
                    isDark ? 'text-sky-400' : 'text-amber-700'
                  }`}>
                    GitHub Repo
                  </a>
                </div>
                <ul className={`list-disc pl-5 space-y-1 text-xs ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className={`text-xs font-bold font-mono uppercase tracking-wider border-b pb-1 ${
              isDark ? 'text-sky-400 border-slate-800' : 'text-amber-800 border-amber-200'
            }`}>
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <div className={`font-bold font-serif ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</div>
                    <div className={isDark ? "text-slate-400" : "text-slate-600"}>{edu.institution}</div>
                  </div>
                  <div className={`text-right font-mono font-bold ${
                    isDark ? 'text-sky-400' : 'text-amber-700'
                  }`}>
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className={`text-xs font-bold font-mono uppercase tracking-wider border-b pb-1 ${
              isDark ? 'text-sky-400 border-slate-800' : 'text-amber-800 border-amber-200'
            }`}>
              Verified Certifications
            </h2>
            {certificationsData.map((cert, idx) => (
              <div key={idx} className="flex flex-wrap justify-between items-center text-xs gap-2 py-1">
                <div>
                  <span className={`font-bold font-serif ${isDark ? 'text-white' : 'text-slate-900'}`}>{cert.title}</span> — <span className={isDark ? "text-slate-400" : "text-slate-600"}>{cert.issuer}</span>
                  {cert.credentialId && (
                    <span className={`ml-2 px-2 py-0.5 rounded font-mono text-[11px] ${
                      isDark ? 'bg-slate-900 text-amber-300 border border-slate-800' : 'bg-amber-100 text-amber-900 font-semibold'
                    }`}>
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
                <div className={`font-mono font-bold ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                  Verified Certificate
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
