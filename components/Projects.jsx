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
import LineDivider from './LineDivider';

export default function Projects() {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className={`py-28 relative transition-colors duration-300 ${
      isDark ? 'bg-[#05070d]' : 'bg-[#fbfaf8]'
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
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            <span className={isDark ? "text-sky-400 font-bold" : "text-amber-700 font-bold"}>SELECTED PRODUCTION WORK</span>
            <span className="opacity-40">/</span>
            <span className={isDark ? "text-slate-400" : "text-slate-600"}>FULL-STACK APPLICATIONS</span>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="gradient-accent italic">Case Studies</span>
          </h2>

          <p className={`max-w-2xl mt-4 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Production-grade full-stack web applications featuring high-performance REST APIs, MongoDB data pipelines, secure authentication, and modern React interfaces.
          </p>
        </motion.div>

        <LineDivider />

        {/* Sticky Stacking Cards Container */}
        <div className="relative my-12 space-y-16">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              data-cursor-project="true"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`sticky rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl ${
                isDark 
                  ? 'bg-[#0a0f1d] border-slate-800 hover:border-sky-500/50' 
                  : 'bg-white border-amber-200/90 hover:border-amber-400 shadow-luxury'
              }`}
              style={{
                top: `calc(7rem + ${idx * 24}px)`,
                zIndex: idx + 10,
                marginBottom: idx === projectsData.length - 1 ? '0' : '3rem'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-7 sm:p-10">
                
                {/* Left Column: Project Overview & Specs */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                        isDark 
                          ? 'bg-sky-500/15 text-sky-400 border-sky-500/30' 
                          : 'bg-amber-500/15 text-amber-800 border-amber-300'
                      }`}>
                        {project.badge}
                      </span>
                      
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                        isDark 
                          ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60' 
                          : 'text-emerald-800 bg-emerald-100 border-emerald-300'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>{project.status}</span>
                      </span>

                      <span className="text-xs font-mono opacity-50">
                        // PROJECT 0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-3xl sm:text-4xl font-extrabold font-serif tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-sm sm:text-base font-semibold ${
                      isDark ? 'text-sky-400' : 'text-amber-700'
                    }`}>
                      {project.subtitle}
                    </p>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {project.summary}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2">
                      {project.highlights.slice(0, 3).map((point, i) => (
                        <div key={i} className={`flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-mono border ${
                            isDark 
                              ? 'bg-slate-900 text-slate-300 border-slate-800' 
                              : 'bg-amber-50/70 text-slate-700 border-amber-200 shadow-sm'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Action Buttons with Prominent Live Website Trigger */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t"
                    style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(217,119,6,0.18)' }}
                  >
                    {/* Live Website Demo Button */}
                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white shadow-md transition-all hover:scale-105 active:scale-95 ${
                        isDark 
                          ? 'bg-gradient-to-r from-sky-500 to-indigo-600 shadow-sky-500/20' 
                          : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 shadow-amber-500/25'
                      }`}
                      title="Visit Live Website Demo"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Website Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`flex items-center gap-1.5 px-4 py-3 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
                        isDark 
                          ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800' 
                          : 'bg-white hover:bg-amber-50 text-slate-700 border-amber-200 shadow-sm'
                      }`}
                    >
                      <Info className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                      <span>System Blueprint</span>
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-3 rounded-full border transition-all ${
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

                {/* Right Column: Key Performance Metrics & Architecture Overview */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                  
                  {/* Big Numerals Metrics */}
                  <div className="grid grid-cols-1 gap-3">
                    {project.metrics.map((metric, i) => (
                      <div 
                        key={i} 
                        className={`p-5 rounded-3xl border transition-all ${
                          isDark 
                            ? 'bg-[#060913] border-slate-800' 
                            : 'bg-amber-50/50 border-amber-200/80 shadow-sm'
                        }`}
                      >
                        <div className="text-xs font-mono font-medium opacity-60 uppercase mb-1">{metric.label}</div>
                        <div className={`text-2xl sm:text-3xl font-extrabold font-serif ${
                          isDark ? 'text-sky-400' : 'text-amber-700'
                        }`}>{metric.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Overview Box */}
                  {project.architecture && (
                    <div className={`p-5 rounded-3xl border ${
                      isDark ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-amber-200 text-slate-700 shadow-sm'
                    }`}>
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase mb-2">
                        <Layers className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Core Tech Architecture</span>
                      </div>
                      <p className="text-xs font-mono leading-relaxed opacity-80">
                        {project.architecture.backend}
                      </p>
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className={`glass-card p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left ${
            isDark ? 'border-slate-800' : 'border-amber-200/90'
          }`}
        >
          <div className="space-y-1">
            <h3 className={`text-lg sm:text-xl font-bold flex items-center justify-center sm:justify-start gap-2 font-serif ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <Github className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
              <span>Explore More Repositories on GitHub</span>
            </h3>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Review branches, commits, and open-source contributions directly on Vinayak's GitHub profile.
            </p>
          </div>
          
          <a
            href="https://github.com/MrVinayakGupta"
            target="_blank"
            rel="noreferrer"
            className={`shrink-0 flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm border transition-all hover:scale-105 ${
              isDark 
                ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700' 
                : 'bg-white hover:bg-amber-50 text-slate-900 border-amber-300 shadow-sm'
            }`}
          >
            <span>@MrVinayakGupta</span>
            <ExternalLink className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
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
