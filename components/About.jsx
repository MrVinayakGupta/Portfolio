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
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';

export default function About() {
  const { isDark } = useTheme();

  const pillars = [
    {
      icon: Code2,
      title: "MERN Stack Engineering",
      color: isDark ? "text-sky-400" : "text-amber-700",
      bgColor: isDark ? "bg-sky-500/10" : "bg-amber-500/15",
      borderColor: isDark ? "border-slate-800" : "border-amber-200",
      description: "End-to-end applications built with React.js, Next.js, Node.js, Express, and MongoDB using scalable MVC structures and state management."
    },
    {
      icon: Zap,
      title: "Performance & SSR",
      color: isDark ? "text-amber-400" : "text-yellow-700",
      bgColor: isDark ? "bg-amber-500/10" : "bg-yellow-500/15",
      borderColor: isDark ? "border-slate-800" : "border-amber-200",
      description: "Lighthouse 98/100 UI speed, sub-100ms API response latency, and CDN image asset delivery with Cloudinary."
    },
    {
      icon: ShieldCheck,
      title: "Resilient Auth & Security",
      color: isDark ? "text-emerald-400" : "text-emerald-700",
      bgColor: isDark ? "bg-emerald-500/10" : "bg-emerald-500/15",
      borderColor: isDark ? "border-slate-800" : "border-amber-200",
      description: "Stateless JWT authentication, Bcrypt password salting, centralized async error handlers, and protected API routes."
    },
    {
      icon: GitBranch,
      title: "Modern Agile Standards",
      color: isDark ? "text-purple-400" : "text-amber-800",
      bgColor: isDark ? "bg-purple-500/10" : "bg-amber-500/15",
      borderColor: isDark ? "border-slate-800" : "border-amber-200",
      description: "Clean Git workflows, Postman API contract testing, component reusability, and continuous software refinement."
    }
  ];

  return (
    <section id="about" className={`py-28 relative transition-colors duration-300 ${
      isDark ? 'bg-[#080c16]' : 'bg-[#faf9f6]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono mb-3 ${
            isDark 
              ? 'bg-sky-500/10 border border-sky-500/20 text-sky-400' 
              : 'bg-amber-500/15 border border-amber-400 text-amber-900 font-semibold'
          }`}>
            <Sparkles className="w-3 h-3" />
            <span>01. ABOUT VINAYAK</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-display ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Building Web Solutions with <span className="gradient-accent">Precision</span>
          </h2>
          
          <p className={`max-w-xl mt-3 text-sm leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Bridging computer science fundamentals with modern production full-stack engineering to build resilient digital experiences.
          </p>
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Card */}
          <div className={`lg:col-span-7 glass-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between ${
            isDark ? 'text-slate-200' : 'text-slate-800'
          }`}>
            <div className="space-y-4">
              <h3 className={`text-xl font-bold flex items-center gap-2 font-display ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <GraduationCap className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>Background & Engineering Philosophy</span>
              </h3>
              
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                I am a detail-oriented Computer Science graduate (<strong className={isDark ? "text-white" : "text-slate-900"}>BCA 2023–2026</strong> at Veer Bahadur Singh Purvanchal University, Jaunpur) and certified in Full-Stack Web Development through Apna College's Delta program.
              </p>

              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                My core expertise is centered around the <strong className={isDark ? "text-sky-400" : "text-amber-700"}>MERN stack</strong> and modern React/Next.js workflows. Whether optimizing MongoDB aggregations to accelerate retrieval by 35%, configuring Cloudinary CDNs to boost media delivery by 50%, or architecting bulletproof JWT authentication pipelines, I prioritize performance, scalability, and code cleanliness.
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
              <span className="italic">"Crafting clean code through hands-on experience and real feedback."</span>
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
          </div>

          {/* Minimalist Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`glass-card p-6 rounded-3xl flex flex-col justify-center items-center text-center transition-all ${
                  isDark ? 'hover:border-sky-500/40' : 'hover:border-amber-400'
                }`}
              >
                <div className={`text-3xl sm:text-4xl font-extrabold font-display ${
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
              </div>
            ))}
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`glass-card p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark ? 'border-slate-800/80 hover:bg-slate-900/60' : 'border-amber-200/80 hover:bg-white'
                }`}
              >
                <div className={`w-11 h-11 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className={`text-sm font-bold mb-1.5 font-display ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>{item.title}</h4>
                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
