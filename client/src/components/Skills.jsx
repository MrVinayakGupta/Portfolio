import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  CheckCircle2,
  Atom,
  Palette,
  LayoutGrid,
  FileCode,
  Boxes,
  Zap,
  Network,
  ShieldCheck,
  TableProperties,
  DatabaseZap,
  Gauge,
  GitBranch,
  Terminal,
  Send,
  CloudUpload,
  Coffee,
  Binary
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon resolver helper
const getSkillIcon = (iconName) => {
  const map = {
    Code2, Coffee, Binary, Cpu, Atom, Palette, LayoutGrid, FileCode,
    Boxes, Server, Zap, Network, Layers, ShieldCheck, Database,
    TableProperties, DatabaseZap, Gauge, GitBranch, Terminal, Send, CloudUpload
  };
  const Component = map[iconName] || Code2;
  return <Component className="w-5 h-5" />;
};

export default function Skills({ theme }) {
  const [activeTab, setActiveTab] = useState('all');
  const isDark = theme === 'dark';

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Sparkles },
    { id: 'frontend', label: 'Frontend UI', icon: Layers },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'database', label: 'Databases', icon: Database },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...skillsData.frontend.map(s => ({ ...s, group: 'Frontend' })),
        ...skillsData.backend.map(s => ({ ...s, group: 'Backend' })),
        ...skillsData.database.map(s => ({ ...s, group: 'Database' })),
        ...skillsData.languages.map(s => ({ ...s, group: 'Languages' })),
        ...skillsData.tools.map(s => ({ ...s, group: 'Tools' })),
      ];
    }
    return (skillsData[activeTab] || []).map(s => ({ ...s, group: activeTab.toUpperCase() }));
  };

  const currentSkills = getFilteredSkills();

  return (
    <section id="skills" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-slate-950/60' : 'bg-amber-50/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
            isDark 
              ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400' 
              : 'bg-amber-500/15 border border-amber-400 text-amber-800 font-semibold'
          }`}>
            <Cpu className="w-3.5 h-3.5" />
            <span>02. TECHNICAL MATRIX</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & <span className="gradient-text">Core Competencies</span>
          </h2>
          
          <p className={`max-w-2xl mt-3 text-sm sm:text-base ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Engineered with modern technologies across the full stack—from responsive React interfaces to high-throughput Node.js micro-backends and optimized MongoDB schemas.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 scale-105'
                      : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white shadow-lg shadow-amber-500/25 scale-105'
                    : isDark
                      ? 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-600 hover:text-amber-900 hover:bg-amber-50 border border-amber-200/80 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`glass-panel p-5 rounded-3xl border transition-all duration-300 group ${
                isDark 
                  ? 'border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/90' 
                  : 'border-amber-200/80 hover:border-amber-400 hover:bg-white shadow-sm hover:shadow-amber-500/10'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isDark 
                      ? 'bg-slate-800 text-sky-400 group-hover:bg-sky-500/10 group-hover:text-sky-300' 
                      : 'bg-amber-50 text-amber-700 group-hover:bg-amber-100 group-hover:text-amber-900 shadow-sm'
                  }`}>
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold transition-colors ${
                      isDark ? 'text-white group-hover:text-sky-300' : 'text-slate-900 group-hover:text-amber-700'
                    }`}>
                      {skill.name}
                    </h4>
                    <span className={`text-[11px] font-mono ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
                
                <div className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded border ${
                  isDark 
                    ? 'text-sky-400 bg-sky-950/50 border-sky-800/50' 
                    : 'text-amber-800 bg-amber-100/80 border-amber-300'
                }`}>
                  {skill.level}%
                </div>
              </div>

              {/* Progress bar */}
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${
                isDark ? 'bg-slate-800' : 'bg-amber-100'
              }`}>
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${
                    isDark 
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-500' 
                      : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600'
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stack Highlights Banner */}
        <div className={`mt-12 p-6 rounded-3xl border flex flex-wrap items-center justify-between gap-6 ${
          isDark 
            ? 'bg-gradient-to-r from-sky-950/30 via-slate-900 to-indigo-950/30 border-slate-800' 
            : 'bg-gradient-to-r from-amber-50 via-white to-yellow-50 border-amber-200 shadow-sm'
        }`}>
          <div>
            <h4 className={`text-sm sm:text-base font-bold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Full-Stack MERN Architecture Standard</span>
            </h4>
            <p className={`text-xs mt-1 max-w-2xl ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Equipped with end-to-end knowledge: Client-side routing, JWT stateless auth, MVC folder structure, custom async Express middleware, and MongoDB data modeling.
            </p>
          </div>
          
          <a
            href="#projects"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              isDark 
                ? 'bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40' 
                : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-800 border border-amber-400'
            }`}
          >
            See in Action &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
