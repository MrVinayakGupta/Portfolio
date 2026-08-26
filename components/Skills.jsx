'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Wrench, 
  Cpu 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';

export default function Skills() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Sparkles },
    { id: 'frontend', label: 'Frontend UI', icon: Layers },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'database', label: 'Databases', icon: Database },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'tools', label: 'Tools & Cloud', icon: Wrench },
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
    <section id="skills" className={`py-28 relative transition-colors duration-300 ${
      isDark ? 'bg-[#080d1a]/50' : 'bg-[#f7f5f0]/60'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono mb-3 ${
            isDark 
              ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400' 
              : 'bg-amber-500/15 border border-amber-400 text-amber-900 font-semibold'
          }`}>
            <Cpu className="w-3 h-3" />
            <span>02. TECHNICAL MATRIX</span>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight font-serif ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & <span className="gradient-accent italic">Capabilities</span>
          </h2>
          
          <p className={`max-w-xl mt-3 text-sm leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Engineered with modern full-stack standards—from responsive React components to optimized MongoDB schemas and secure REST APIs.
          </p>
        </motion.div>

        {/* Minimalist Tabs with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20 scale-105'
                      : 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white shadow-md shadow-amber-500/20 scale-105'
                    : isDark
                      ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-amber-200/80 shadow-sm'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid with Animated Re-order & Scroll Reveal */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {currentSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className={`glass-card p-4 sm:p-5 rounded-2xl border transition-all duration-300 group ${
                  isDark 
                    ? 'border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/80' 
                    : 'border-amber-200/80 hover:border-amber-400 hover:bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div>
                    <h4 className={`text-sm font-bold font-serif transition-colors ${
                      isDark ? 'text-white group-hover:text-sky-300' : 'text-slate-900 group-hover:text-amber-700'
                    }`}>
                      {skill.name}
                    </h4>
                    <span className={`text-[10.5px] font-mono ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {skill.category}
                    </span>
                  </div>
                  
                  <div className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${
                    isDark 
                      ? 'text-sky-400 bg-sky-950/40 border-sky-800/40' 
                      : 'text-amber-800 bg-amber-100/70 border-amber-300'
                  }`}>
                    {skill.level}%
                  </div>
                </div>

                {/* Progress bar with synchronized animated width */}
                <div className={`w-full h-1 rounded-full overflow-hidden ${
                  isDark ? 'bg-slate-800' : 'bg-amber-100'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      isDark 
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-500' 
                        : 'bg-gradient-to-r from-amber-500 to-yellow-600'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
