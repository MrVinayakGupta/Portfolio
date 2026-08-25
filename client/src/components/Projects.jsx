import React, { useState } from 'react';
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
  TrendingUp
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ theme }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-[#0a0f1d]' : 'bg-[#faf8f5]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
            isDark 
              ? 'bg-sky-500/10 border border-sky-500/20 text-sky-400' 
              : 'bg-amber-500/15 border border-amber-400 text-amber-800 font-semibold'
          }`}>
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. FEATURED WORK</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Full-Stack <span className="gradient-text">Engineering Projects</span>
          </h2>
          
          <p className={`max-w-2xl mt-3 text-sm sm:text-base ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Production-oriented web applications showcasing REST API architecture, database performance, secure authentication, and modern UI engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`glass-panel rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-2xl ${
                isDark 
                  ? 'border-slate-800 hover:border-sky-500/50 hover:shadow-sky-500/10' 
                  : 'border-amber-200/90 hover:border-amber-400 hover:shadow-amber-500/15'
              }`}
            >
              {/* Card Top Banner */}
              <div className={`p-6 sm:p-7 border-b ${
                isDark 
                  ? 'border-slate-800/80 bg-gradient-to-b from-slate-900/90 to-transparent' 
                  : 'border-amber-200 bg-gradient-to-b from-amber-50/70 to-transparent'
              }`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                    isDark 
                      ? 'bg-sky-500/15 text-sky-400 border-sky-500/30' 
                      : 'bg-amber-500/15 text-amber-800 border-amber-300'
                  }`}>
                    {project.badge}
                  </span>
                  
                  <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                    isDark 
                      ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60' 
                      : 'text-emerald-800 bg-emerald-100 border-emerald-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold transition-colors ${
                  isDark ? 'text-white group-hover:text-sky-300' : 'text-slate-900 group-hover:text-amber-700'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-xs sm:text-sm font-semibold mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.subtitle}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {project.metrics.map((metric, i) => (
                    <div 
                      key={i} 
                      className={`p-2 rounded-xl border text-center ${
                        isDark 
                          ? 'bg-slate-950/60 border-slate-800' 
                          : 'bg-white border-amber-200 shadow-sm'
                      }`}
                    >
                      <div className={`text-xs sm:text-sm font-extrabold font-mono ${
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
              <div className="p-6 sm:p-7 space-y-4 flex-1">
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {project.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 pt-1">
                  {project.highlights.slice(0, 2).map((point, idx) => (
                    <div key={idx} className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-3">
                  <div className={`text-[11px] font-mono uppercase tracking-wider mb-2 ${
                    isDark ? 'text-slate-400' : 'text-amber-900 font-semibold'
                  }`}>
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 6).map((t, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-mono border ${
                          isDark 
                            ? 'bg-slate-800 text-slate-300 border-slate-700/80' 
                            : 'bg-white text-slate-700 border-amber-200 shadow-sm'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-bold ${
                        isDark ? 'bg-slate-800/60 text-sky-400' : 'bg-amber-100 text-amber-800'
                      }`}>
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className={`p-6 sm:p-7 pt-0 flex items-center justify-between gap-3 border-t ${
                isDark ? 'border-transparent' : 'border-amber-100'
              }`}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs border transition-all ${
                    isDark 
                      ? 'bg-slate-800/80 hover:bg-slate-700 text-white border-slate-700 hover:border-sky-500/50' 
                      : 'bg-white hover:bg-amber-50 text-slate-800 border-amber-200 hover:border-amber-400 shadow-sm'
                  }`}
                >
                  <Info className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                  <span>Architecture & Details</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-bold text-xs transition-all shadow-md ${
                    isDark 
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-sky-500/20' 
                      : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 shadow-amber-500/25'
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <div className={`glass-panel p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left ${
          isDark ? 'border-slate-800' : 'border-amber-200/90 shadow-sm'
        }`}>
          <div className="space-y-1">
            <h3 className={`text-lg font-bold flex items-center justify-center sm:justify-start gap-2 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <Github className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
              <span>Explore More Repositories & Open Source</span>
            </h3>
            <p className={`text-xs sm:text-sm ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Check out all source code commits, branches, and experimental scripts directly on Vinayak's GitHub profile.
            </p>
          </div>
          
          <a
            href="https://github.com/MrVinayakGupta"
            target="_blank"
            rel="noreferrer"
            className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all hover:scale-105 ${
              isDark 
                ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' 
                : 'bg-white hover:bg-amber-50 text-slate-800 border-amber-300 shadow-sm'
            }`}
          >
            <span>Visit @MrVinayakGupta</span>
            <ExternalLink className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          theme={theme}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
