'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ArrowUpRight,
  Info,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className={`py-28 relative transition-colors duration-300 ${
      isDark ? 'bg-[#05070d]' : 'bg-[#fbfaf8]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Architectural Index */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mb-16 border-b pb-6"
          style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(217,119,6,0.18)' }}
        >
          <div className="flex items-center gap-2 text-xs font-mono mb-2">
            <span className={isDark ? "text-sky-400 font-bold" : "text-amber-700 font-bold"}>Fig. 04 / 06</span>
            <span className={isDark ? "text-slate-500" : "text-slate-400"}>—</span>
            <span className={isDark ? "text-slate-400" : "text-slate-600"}>SELECTED PRODUCTION SYSTEMS</span>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="gradient-accent italic">Case Studies</span>
          </h2>
          
          <p className={`max-w-xl mt-3 text-sm leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Production-grade full-stack web applications featuring high-performance REST APIs, MongoDB data pipelines, secure authentication, and modern React interfaces.
          </p>
        </motion.div>

        {/* Minimalist Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-card rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                isDark 
                  ? 'border-slate-800/90 hover:border-sky-500/50 hover:shadow-luxury-dark' 
                  : 'border-amber-200/90 hover:border-amber-400 hover:shadow-luxury'
              }`}
            >
              {/* Card Banner Header */}
              <div className={`p-6 sm:p-8 border-b ${
                isDark 
                  ? 'border-slate-800/80 bg-gradient-to-b from-[#0a0f1d] to-transparent' 
                  : 'border-amber-100 bg-gradient-to-b from-amber-50/70 to-transparent'
              }`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-3 py-0.5 rounded-full text-xs font-mono font-bold border ${
                    isDark 
                      ? 'bg-sky-500/15 text-sky-400 border-sky-500/30' 
                      : 'bg-amber-500/15 text-amber-800 border-amber-300'
                  }`}>
                    {project.badge}
                  </span>
                  
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 ${
                    isDark 
                      ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60' 
                      : 'text-emerald-800 bg-emerald-100 border-emerald-300'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{project.status}</span>
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-extrabold font-serif transition-colors ${
                  isDark ? 'text-white group-hover:text-sky-300' : 'text-slate-900 group-hover:text-amber-700'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-xs sm:text-sm font-semibold mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.subtitle}
                </p>

                {/* Minimalist Metrics */}
                <div className="grid grid-cols-3 gap-2 mt-5">
                  {project.metrics.map((metric, i) => (
                    <div 
                      key={i} 
                      className={`p-2.5 rounded-2xl border text-center ${
                        isDark 
                          ? 'bg-[#060913] border-slate-800' 
                          : 'bg-white border-amber-200/80 shadow-sm'
                      }`}
                    >
                      <div className={`text-xs sm:text-sm font-extrabold font-serif ${
                        isDark ? 'text-sky-400' : 'text-amber-700'
                      }`}>{metric.val}</div>
                      <div className={`text-[10px] truncate font-medium ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4 flex-1">
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  {project.highlights.slice(0, 2).map((point, idx) => (
                    <div key={idx} className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 5).map((t, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                          isDark 
                            ? 'bg-slate-900 text-slate-300 border-slate-800' 
                            : 'bg-white text-slate-700 border-amber-200 shadow-sm'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                        isDark ? 'bg-slate-900 text-sky-400' : 'bg-amber-100 text-amber-800'
                      }`}>
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Actions Footer with Prominent Live Website Button */}
              <div className={`p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t ${
                isDark ? 'border-transparent' : 'border-amber-100/60'
              }`}>
                
                {/* Live Website Button */}
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs text-white shadow-md transition-all hover:scale-105 active:scale-95 ${
                    isDark 
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sky-500/20' 
                      : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 shadow-amber-500/25'
                  }`}
                  title="Visit Live Website"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-semibold text-xs border transition-all ${
                      isDark 
                        ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800' 
                        : 'bg-white hover:bg-amber-50 text-slate-700 border-amber-200 shadow-sm'
                    }`}
                  >
                    <Info className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                    <span>Blueprint</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-full border transition-all ${
                      isDark 
                        ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800' 
                        : 'bg-white hover:bg-amber-50 text-slate-700 border-amber-200 shadow-sm'
                    }`}
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* GitHub Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`glass-card p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left ${
            isDark ? 'border-slate-800' : 'border-amber-200/90'
          }`}
        >
          <div className="space-y-1">
            <h3 className={`text-base sm:text-lg font-bold flex items-center justify-center sm:justify-start gap-2 font-serif ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <Github className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
              <span>Explore More Repositories on GitHub</span>
            </h3>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Review branches, commits, and open-source contributions directly on Vinayak's GitHub profile.
            </p>
          </div>
          
          <a
            href="https://github.com/MrVinayakGupta"
            target="_blank"
            rel="noreferrer"
            className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs border transition-all hover:scale-105 ${
              isDark 
                ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700' 
                : 'bg-white hover:bg-amber-50 text-slate-900 border-amber-300 shadow-sm'
            }`}
          >
            <span>@MrVinayakGupta</span>
            <ExternalLink className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
          </a>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
