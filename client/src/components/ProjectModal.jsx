import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  TrendingUp
} from 'lucide-react';

export default function ProjectModal({ project, theme, onClose }) {
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      {/* Modal Card */}
      <div 
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-8 ${
          isDark 
            ? 'bg-slate-900 border-slate-700 shadow-sky-500/10 text-slate-200' 
            : 'bg-white border-amber-300 shadow-amber-900/15 text-slate-800'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2.5 rounded-full transition-colors ${
            isDark 
              ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700' 
              : 'bg-amber-50 text-slate-500 hover:text-slate-900 hover:bg-amber-100'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
              isDark 
                ? 'bg-sky-500/20 text-sky-400 border-sky-500/30' 
                : 'bg-amber-500/15 text-amber-800 border-amber-300'
            }`}>
              {project.badge}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
              isDark 
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                : 'bg-emerald-100 text-emerald-800 border-emerald-300'
            }`}>
              {project.status}
            </span>
          </div>
          
          <h3 className={`text-2xl sm:text-3xl font-extrabold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {project.title}
          </h3>
          
          <p className={`text-sm sm:text-base font-semibold mt-1 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {project.subtitle}
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className={`grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl border ${
          isDark 
            ? 'bg-slate-950/70 border-slate-800' 
            : 'bg-amber-50/70 border-amber-200 shadow-sm'
        }`}>
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className={`text-sm sm:text-lg font-extrabold font-mono ${
                isDark ? 'text-sky-400' : 'text-amber-700'
              }`}>{m.val}</div>
              <div className={`text-[11px] font-medium ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="mb-6 space-y-3">
          <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
            isDark ? 'text-slate-400' : 'text-amber-900'
          }`}>
            <TrendingUp className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
            <span>Engineering Highlights & Impact</span>
          </h4>
          
          <div className="space-y-2.5">
            {project.highlights.map((bullet, idx) => (
              <div key={idx} className={`flex items-start gap-3 text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isDark ? 'bg-sky-500/10 text-sky-400' : 'bg-amber-500/15 text-amber-700'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Breakdown */}
        {project.architecture && (
          <div className={`mb-6 p-5 rounded-2xl border ${
            isDark 
              ? 'bg-slate-800/40 border-slate-700/60' 
              : 'bg-white border-amber-200 shadow-sm'
          }`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
              isDark ? 'text-slate-400' : 'text-amber-900'
            }`}>
              <Layers className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-amber-600'}`} />
              <span>Architectural Blueprint</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {Object.entries(project.architecture).map(([key, val]) => (
                <div key={key} className={`p-2.5 rounded-lg border ${
                  isDark ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-amber-50/50 border-amber-200/80 text-slate-700'
                }`}>
                  <span className={`font-bold capitalize ${isDark ? 'text-sky-400' : 'text-amber-800'}`}>{key}: </span>
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
            isDark ? 'text-slate-400' : 'text-amber-900'
          }`}>
            Technologies & Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${
                  isDark 
                    ? 'bg-slate-800 text-slate-200 border-slate-700' 
                    : 'bg-white text-slate-700 border-amber-200 shadow-sm'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className={`flex flex-wrap items-center justify-between gap-4 pt-4 border-t ${
          isDark ? 'border-slate-800' : 'border-amber-200'
        }`}>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border transition-all ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' 
                  : 'bg-white hover:bg-amber-50 text-slate-800 border-amber-300 shadow-sm'
              }`}
            >
              <Github className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
              <span>View GitHub Repository</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white transition-all shadow-md ${
              isDark
                ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-sky-500/20'
                : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 shadow-amber-500/25'
            }`}
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
}
