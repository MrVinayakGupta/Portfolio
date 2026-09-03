'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Zap, 
  ShieldCheck, 
  GitBranch, 
  GraduationCap, 
  Sparkles,
  ArrowUpRight,
  Database,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';

export default function About() {
  const { isDark } = useTheme();

  const pillars = [
    {
      icon: Code2,
      number: "01",
      title: "MERN Stack Engineering",
      color: isDark ? "text-sky-400" : "text-amber-700",
      bgColor: isDark ? "bg-sky-500/10" : "bg-amber-500/15",
      description: "End-to-end applications built with React.js, Next.js 14, Node.js, Express, and MongoDB utilizing scalable modular MVC patterns and optimized state pipelines."
    },
    {
      icon: Zap,
      number: "02",
      title: "Performance & SSR Optimization",
      color: isDark ? "text-amber-400" : "text-yellow-700",
      bgColor: isDark ? "bg-amber-500/10" : "bg-yellow-500/15",
      description: "Lighthouse 98/100 UI responsiveness, sub-100ms API response latency, and CDN image asset delivery with Cloudinary and Multer integration."
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Resilient Auth & Cryptography",
      color: isDark ? "text-emerald-400" : "text-emerald-700",
      bgColor: isDark ? "bg-emerald-500/10" : "bg-emerald-500/15",
      description: "Stateless JSON Web Token (JWT) authentication, Bcrypt password salting protocols, centralized error handlers, and guarded route middleware."
    },
    {
      icon: Database,
      number: "04",
      title: "Data Pipelines & Schema Indexing",
      color: isDark ? "text-purple-400" : "text-amber-800",
      bgColor: isDark ? "bg-purple-500/10" : "bg-amber-500/15",
      description: "Optimized MongoDB schema indexing accelerating query response by 35%, schema validation via Mongoose, and relational SQL structure design."
    }
  ];

  return (
    <section id="about" className={`py-28 relative transition-colors duration-300 ${
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
            <span className={isDark ? "text-sky-400 font-bold" : "text-amber-700 font-bold"}>Fig. 02 / 06</span>
            <span className={isDark ? "text-slate-500" : "text-slate-400"}>—</span>
            <span className={isDark ? "text-slate-400" : "text-slate-600"}>PHILOSOPHY & CAPABILITY</span>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Building Digital Systems for the Way <span className="gradient-accent italic block sm:inline">People Live & Work</span>
          </h2>
          
          <p className={`max-w-2xl mt-4 text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Approaching software architecture with clarity, structural precision, and close attention to detail—from schema design to fluid user interfaces.
          </p>
        </motion.div>

        {/* Narrative & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Narrative Card */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-7 glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}
          >
            <div className="space-y-4">
              <h3 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 font-serif ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <GraduationCap className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>Engineering Background</span>
              </h3>
              
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                I am a detail-oriented Computer Science graduate (<strong className={isDark ? "text-white" : "text-slate-900"}>BCA 2023–2026</strong> at Veer Bahadur Singh Purvanchal University, Jaunpur) and certified in Full-Stack Web Development through Apna College's Delta program.
              </p>

              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                My technical philosophy emphasizes scalable foundations: creating resilient MVC backends in Node/Express, indexing NoSQL documents in MongoDB for 35% speed gains, offloading heavy media to Cloudinary CDNs, and crafting ultra-responsive React & Next.js user interfaces with zero hydration overhead.
              </p>

              <div className="pt-3 flex flex-wrap gap-2 text-xs font-mono">
                <span className={`px-3 py-1 rounded-full border ${
                  isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-amber-200 text-slate-700 shadow-sm'
                }`}>📍 Jaunpur, Uttar Pradesh</span>
                
                <span className={`px-3 py-1 rounded-full border ${
                  isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-amber-200 text-slate-700 shadow-sm'
                }`}>🎓 BCA (Purvanchal Univ.)</span>
                
                <span className={`px-3 py-1 rounded-full border ${
                  isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-amber-200 text-slate-700 shadow-sm'
                }`}>⚡ Delta Certified</span>
              </div>
            </div>

            <div className={`mt-6 pt-6 border-t flex items-center justify-between text-xs ${
              isDark ? 'border-slate-800 text-slate-400' : 'border-amber-100 text-slate-500'
            }`}>
              <span className="italic font-serif">"Crafting clean code through hands-on experience and real feedback."</span>
              <a 
                href="#projects" 
                className={`font-semibold flex items-center gap-1 transition-colors ${
                  isDark ? 'text-sky-400 hover:text-sky-300' : 'text-amber-700 hover:text-amber-800'
                }`}
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {personalInfo.stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.03 }}
                className={`glass-card p-6 rounded-3xl flex flex-col justify-center items-center text-center transition-all ${
                  isDark ? 'hover:border-sky-500/40' : 'hover:border-amber-400'
                }`}
              >
                <div className={`text-3xl sm:text-4xl font-extrabold font-serif ${
                  isDark ? 'text-sky-400' : 'text-amber-600'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-xs font-bold mt-1.5 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {stat.label}
                </div>
                <div className={`text-[11px] mt-0.5 font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* 4 Pillars Grid (Architectural Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className={`glass-card p-6 rounded-3xl border transition-all duration-300 relative ${
                  isDark ? 'border-slate-800/80 hover:bg-slate-900/60' : 'border-amber-200/80 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-mono font-bold ${isDark ? 'text-slate-600' : 'text-amber-300'}`}>
                    {item.number}
                  </span>
                </div>

                <h4 className={`text-sm font-bold mb-1.5 font-serif ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>{item.title}</h4>
                
                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
