'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';

export default function Education() {
  const { isDark } = useTheme();

  return (
    <section id="education" className={`py-28 relative transition-colors duration-300 ${
      isDark ? 'bg-[#080d1a]/50' : 'bg-[#f7f5f0]/60'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono mb-3 ${
            isDark 
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' 
              : 'bg-amber-500/15 border border-amber-400 text-amber-900 font-semibold'
          }`}>
            <GraduationCap className="w-3 h-3" />
            <span>04. EDUCATION & CREDENTIALS</span>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight font-serif ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Academic & <span className="gradient-accent italic">Certifications</span>
          </h2>
          
          <p className={`max-w-xl mt-3 text-sm leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Academic foundation in Computer Science and verified industry-recognized software engineering credentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Academic Timeline (Slide in from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 font-serif ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <BookOpen className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
              <span>Academic Degrees</span>
            </h3>

            <div className={`relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 ${
              isDark 
                ? 'before:bg-gradient-to-b before:from-sky-500 before:to-slate-800' 
                : 'before:bg-gradient-to-b before:from-amber-500 before:to-amber-200'
            }`}>
              {educationData.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-[27px] top-2 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                    isDark 
                      ? 'bg-slate-900 border-sky-400 group-hover:bg-sky-400' 
                      : 'bg-white border-amber-600 group-hover:bg-amber-600'
                  }`} />

                  <div className={`glass-card p-5 sm:p-6 rounded-3xl border transition-all ${
                    isDark 
                      ? 'border-slate-800 hover:border-sky-500/30' 
                      : 'border-amber-200/90 hover:border-amber-400'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
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

                    <h4 className={`text-sm sm:text-base font-bold font-serif ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {item.degree}
                    </h4>
                    
                    <p className={`text-xs font-medium mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.institution}
                    </p>

                    <p className={`text-xs mt-2 leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Verified Certifications (Slide in from Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 font-serif ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <Award className="w-4 h-4 text-amber-500" />
              <span>Verified Industry Certifications</span>
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  whileHover={{ y: -4 }}
                  className={`glass-card p-6 rounded-3xl border transition-all relative overflow-hidden group ${
                    isDark 
                      ? 'border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-slate-900/60 hover:border-amber-500/40' 
                      : 'border-amber-300/80 bg-gradient-to-b from-amber-50/60 to-white hover:border-amber-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold shadow-sm ${
                        isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-800'
                      }`}>
                        <Award className="w-4 h-4" />
                      </div>
                      
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                        isDark 
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' 
                          : 'bg-amber-100 text-amber-800 border-amber-300'
                      }`}>
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{cert.badge}</span>
                      </span>
                    </div>

                    <div>
                      <h4 className={`text-base font-bold font-serif ${
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
                        <div className={`text-[11px] font-mono mt-1.5 flex items-center gap-1.5 ${
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

                    <p className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {cert.description}
                    </p>

                    {/* Competencies */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className={`px-2.5 py-0.5 rounded-full text-[10.5px] font-mono border ${
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
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
