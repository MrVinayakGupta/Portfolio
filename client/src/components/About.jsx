import React from 'react';
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

export default function About({ theme }) {
  const isDark = theme === 'dark';

  const pillars = [
    {
      icon: Code2,
      title: "MERN Stack Mastery",
      color: isDark ? "text-sky-400" : "text-amber-700",
      bgColor: isDark ? "bg-sky-500/10" : "bg-amber-500/15",
      borderColor: isDark ? "border-sky-500/20" : "border-amber-300",
      description: "Crafting end-to-end architectures using React.js, Node.js, Express, and MongoDB with modular patterns and reusable state."
    },
    {
      icon: Zap,
      title: "Performance & SSR",
      color: isDark ? "text-amber-400" : "text-yellow-700",
      bgColor: isDark ? "bg-amber-500/10" : "bg-yellow-500/15",
      borderColor: isDark ? "border-amber-500/20" : "border-yellow-300",
      description: "Prioritizing low-latency execution, Lighthouse 98/100 UI speeds, CDN asset offloading via Cloudinary, and database query optimization."
    },
    {
      icon: ShieldCheck,
      title: "Resilient Security & Auth",
      color: isDark ? "text-emerald-400" : "text-emerald-700",
      bgColor: isDark ? "bg-emerald-500/10" : "bg-emerald-500/15",
      borderColor: isDark ? "border-emerald-500/20" : "border-emerald-300",
      description: "Implementing bulletproof JWT authentication, Bcrypt password hashing, protected routing, and centralized error handling middleware."
    },
    {
      icon: GitBranch,
      title: "Modern Engineering Workflow",
      color: isDark ? "text-purple-400" : "text-amber-800",
      bgColor: isDark ? "bg-purple-500/10" : "bg-amber-500/15",
      borderColor: isDark ? "border-purple-500/20" : "border-amber-300",
      description: "Experienced with Git version control, RESTful API contract design in Postman, clean code standards, and agile collaboration."
    }
  ];

  return (
    <section id="about" className={`py-20 relative transition-colors duration-300 ${
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. ABOUT VINAYAK</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Web Solutions with <span className="gradient-text">Precision & Speed</span>
          </h2>
          
          <p className={`max-w-2xl mt-3 text-sm sm:text-base ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Bridging theoretical computer science principles with real-world full-stack development to build responsive, scalable, and secure applications.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className={`text-xl font-bold flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <GraduationCap className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>Background & Philosophy</span>
              </h3>
              
              <p className={`leading-relaxed text-sm sm:text-base ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                I am a motivated, detail-oriented Computer Science graduate (<span className={`font-bold ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>BCA 2023–2026</span> at Veer Bahadur Singh Purvanchal University, Jaunpur). From deep algorithmic foundations to responsive frontend design, I thrive on turning complex business requirements into intuitive web applications.
              </p>

              <p className={`leading-relaxed text-sm sm:text-base ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                My core expertise centers around the <strong className={isDark ? "text-white" : "text-slate-900"}>MERN stack</strong> and modern web standards. Whether optimizing MongoDB aggregations to reduce query time by 35%, configuring Cloudinary CDNs to accelerate image delivery by 50%, or architecting secure JWT-protected APIs, I prioritize performance and user experience at every tier.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className={`px-3 py-1 rounded-lg border ${
                  isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-amber-200 text-slate-700 shadow-sm'
                }`}>📍 Jaunpur, Uttar Pradesh</span>
                
                <span className={`px-3 py-1 rounded-lg border ${
                  isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-amber-200 text-slate-700 shadow-sm'
                }`}>🎓 BCA (Purvanchal Univ.)</span>
                
                <span className={`px-3 py-1 rounded-lg border ${
                  isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-amber-200 text-slate-700 shadow-sm'
                }`}>⚡ MERN & REST APIs</span>
              </div>
            </div>

            {/* Quote / Highlight */}
            <div className={`mt-6 pt-6 border-t flex items-center justify-between text-xs sm:text-sm ${
              isDark ? 'border-slate-800/80 text-slate-400' : 'border-amber-200 text-slate-600'
            }`}>
              <span className="italic">"Continuous improvement through hands-on experience and real feedback."</span>
              <a 
                href="#projects" 
                className={`font-semibold flex items-center gap-1 transition-colors ${
                  isDark ? 'text-sky-400 hover:text-sky-300' : 'text-amber-700 hover:text-amber-800'
                }`}
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`glass-panel p-5 rounded-3xl flex flex-col justify-center items-center text-center transition-all group ${
                  isDark ? 'hover:border-sky-500/40' : 'hover:border-amber-400 shadow-sm'
                }`}
              >
                <div className={`text-3xl sm:text-4xl font-extrabold group-hover:scale-105 transition-transform ${
                  isDark ? 'text-sky-400' : 'text-amber-600'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-bold mt-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {stat.label}
                </div>
                <div className={`text-xs mt-1 font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 4 Pillars of Engineering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`glass-panel p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark 
                    ? `border-slate-800 hover:bg-slate-800/60` 
                    : `border-amber-200/90 hover:bg-white hover:border-amber-400`
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className={`text-base font-bold mb-2 ${
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
