'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Briefcase,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { educationData, certificationsData, experienceData } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';
import LineDivider from './LineDivider';

export default function Education() {
  const { isDark } = useTheme();

  return (
    <section id="education" className={`py-28 relative transition-colors duration-300 ${
      isDark ? 'bg-[#080d1a]/50' : 'bg-[#f7f5f0]/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start mb-8"
        >
          <div className="flex items-center gap-2 text-xs font-mono mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className={isDark ? "text-emerald-400 font-bold" : "text-amber-700 font-bold"}>ACADEMICS, EXPERIENCE & CERTIFICATES</span>
            <span className="opacity-40">/</span>
            <span className={isDark ? "text-slate-400" : "text-slate-600"}>VERIFIED QUALIFICATIONS</span>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Education, Experience & <span className="gradient-accent italic">Credentials</span>
          </h2>

          <p className={`max-w-xl mt-4 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Computer Science academic foundation combined with practical corporate internships and verified full-stack software development accreditations.
          </p>
        </motion.div>

        <LineDivider />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-12">
          
          {/* Left Column: Academic Degrees & Internships */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Academic Education */}
            <div className="space-y-4">
              <h3 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 font-serif ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <BookOpen className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>Academic Education</span>
              </h3>

              {educationData.map((item, idx) => (
                <div 
                  key={idx}
                  className={`glass-card p-6 sm:p-7 rounded-3xl border transition-all ${
                    isDark 
                      ? 'border-slate-800 hover:border-sky-500/30' 
                      : 'border-amber-200/90 hover:border-amber-400 shadow-sm'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                      isDark 
                        ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' 
                        : 'bg-amber-100 text-amber-800 border-amber-300'
                    }`}>
                      {item.period}
                    </span>
                    
                    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                      isDark 
                        ? 'text-emerald-400 bg-emerald-950/40' 
                        : 'text-emerald-800 bg-emerald-100'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <h4 className={`text-base sm:text-lg font-bold font-serif ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.degree}
                  </h4>
                  
                  <p className={`text-xs font-medium mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.institution}
                  </p>

                  <p className={`text-xs mt-2.5 leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience / Internships from ATS Resume */}
            <div className="space-y-4 pt-2">
              <h3 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 font-serif ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <Briefcase className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>Professional Internships</span>
              </h3>

              {experienceData.map((exp, idx) => (
                <div 
                  key={idx}
                  className={`glass-card p-6 rounded-3xl border transition-all ${
                    isDark 
                      ? 'border-slate-800 hover:border-sky-500/30' 
                      : 'border-amber-200/90 hover:border-amber-400 shadow-sm'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                      isDark 
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' 
                        : 'bg-amber-100 text-amber-800 border-amber-300'
                    }`}>
                      {exp.period}
                    </span>

                    <span className={`text-xs font-mono px-2 py-0.5 rounded border ${
                      isDark ? 'text-slate-400 border-slate-800' : 'text-slate-600 border-amber-200'
                    }`}>
                      {exp.location}
                    </span>
                  </div>

                  <h4 className={`text-base font-bold font-serif ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {exp.role} — <span className={isDark ? 'text-sky-400' : 'text-amber-700'}>{exp.company}</span>
                  </h4>

                  <ul className="mt-3 space-y-1.5 list-disc list-inside text-xs leading-relaxed">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Verified Industry Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 font-serif ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <Award className="w-5 h-5 text-amber-500" />
              <span>Verified Industry Accreditations</span>
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div 
                  key={idx}
                  className={`glass-card p-6 sm:p-7 rounded-3xl border transition-all relative overflow-hidden group ${
                    isDark 
                      ? 'border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-slate-900/60 hover:border-amber-500/40' 
                      : 'border-amber-300/80 bg-gradient-to-b from-amber-50/60 to-white hover:border-amber-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold shadow-sm ${
                        isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-800'
                      }`}>
                        <Award className="w-5 h-5" />
                      </div>
                      
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                        isDark 
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' 
                          : 'bg-amber-100 text-amber-800 border-amber-300'
                      }`}>
                        <ShieldCheck className="w-4 h-4" />
                        <span>{cert.badge}</span>
                      </span>
                    </div>

                    <div>
                      <h4 className={`text-base sm:text-lg font-bold font-serif ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {cert.title}
                      </h4>
                      
                      <p className={`text-xs font-mono mt-1 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        Issued by <span className={`font-bold ${isDark ? 'text-slate-200' : 'text-amber-900'}`}>{cert.issuer}</span>
                      </p>

                      {cert.credentialId && (
                        <div className={`text-xs font-mono mt-1.5 flex items-center gap-1.5 ${
                          isDark ? 'text-amber-400' : 'text-amber-800 font-semibold'
                        }`}>
                          <span>Credential ID:</span>
                          <span className={`px-2 py-0.5 rounded font-mono ${
                            isDark ? 'bg-slate-950 border border-slate-800 text-amber-300' : 'bg-white border border-amber-200 text-slate-900 shadow-sm'
                          }`}>
                            {cert.credentialId}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {cert.description}
                    </p>

                    {/* Competencies */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-mono border ${
                            isDark 
                              ? 'bg-slate-900 text-slate-300 border-slate-800' 
                              : 'bg-white border-amber-200 text-slate-700 shadow-sm'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
