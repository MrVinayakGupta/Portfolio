import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function Education({ theme }) {
  const isDark = theme === 'dark';

  return (
    <section id="education" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-slate-950/60' : 'bg-amber-50/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-3 ${
            isDark 
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' 
              : 'bg-amber-500/15 border border-amber-400 text-amber-800 font-semibold'
          }`}>
            <GraduationCap className="w-3.5 h-3.5" />
            <span>04. EDUCATION & CERTIFICATIONS</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Academic & <span className="gradient-text">Credentials</span>
          </h2>
          
          <p className={`max-w-2xl mt-3 text-sm sm:text-base ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Structured foundation in Computer Science, software design patterns, and verified industry-recognized certifications from Apna College and Scaler Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Academic Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className={`text-lg font-bold flex items-center gap-2 mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <BookOpen className={`w-5 h-5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
              <span>Academic Degrees</span>
            </h3>

            <div className={`relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 ${
              isDark 
                ? 'before:bg-gradient-to-b before:from-sky-500 before:via-indigo-500 before:to-slate-800' 
                : 'before:bg-gradient-to-b before:from-amber-500 before:via-yellow-500 before:to-amber-200'
            }`}>
              {educationData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet dot */}
                  <div className={`absolute -left-[27px] top-1.5 w-4 h-4 rounded-full border-2 transition-all shadow-md ${
                    isDark 
                      ? 'bg-slate-900 border-sky-400 group-hover:bg-sky-400 shadow-sky-500/50' 
                      : 'bg-white border-amber-600 group-hover:bg-amber-600 shadow-amber-500/30'
                  }`} />

                  <div className={`glass-panel p-5 sm:p-6 rounded-3xl border transition-all ${
                    isDark 
                      ? 'border-slate-800 hover:border-sky-500/30' 
                      : 'border-amber-200/90 hover:border-amber-400 shadow-sm'
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

                    <h4 className={`text-base sm:text-lg font-bold transition-colors ${
                      isDark ? 'text-white group-hover:text-sky-300' : 'text-slate-900 group-hover:text-amber-700'
                    }`}>
                      {item.degree}
                    </h4>
                    
                    <p className={`text-xs sm:text-sm font-medium mt-0.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {item.institution}
                    </p>

                    <p className={`text-xs mt-2 leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>

                    {item.highlight && (
                      <div className={`mt-3 inline-block text-[11px] font-mono px-2.5 py-1 rounded border ${
                        isDark 
                          ? 'text-sky-400/90 bg-slate-900/80 border-slate-800' 
                          : 'text-amber-800 bg-amber-50 border-amber-200 font-semibold'
                      }`}>
                        {item.highlight}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Verified Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className={`text-lg font-bold flex items-center gap-2 mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <Award className="w-5 h-5 text-amber-500" />
              <span>Verified Industry Certifications</span>
            </h3>

            <div className="space-y-5">
              {certificationsData.map((cert, idx) => (
                <div 
                  key={idx}
                  className={`glass-panel p-6 rounded-3xl border transition-all relative overflow-hidden group shadow-lg ${
                    isDark 
                      ? 'border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-slate-900/80 hover:border-amber-500/40 shadow-amber-500/5' 
                      : 'border-amber-300 bg-gradient-to-b from-amber-50/90 to-white hover:border-amber-500 shadow-amber-500/10'
                  }`}
                >
                  {/* Decorative badge glow */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-bl-full pointer-events-none -z-0" />

                  <div className="relative z-10 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold shadow-sm ${
                        isDark ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-800'
                      }`}>
                        <Award className="w-5 h-5" />
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
                      <h4 className={`text-base sm:text-lg font-bold transition-colors ${
                        isDark ? 'text-white group-hover:text-amber-300' : 'text-slate-900 group-hover:text-amber-800'
                      }`}>
                        {cert.title}
                      </h4>
                      
                      <p className={`text-xs font-mono mt-1 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        Issued by <span className={`font-bold ${isDark ? 'text-slate-200' : 'text-amber-900'}`}>{cert.issuer}</span>
                      </p>

                      {cert.credentialId && (
                        <div className={`text-[11px] font-mono mt-1 flex items-center gap-1.5 ${
                          isDark ? 'text-amber-400/90' : 'text-amber-800 font-semibold'
                        }`}>
                          <span>Credential ID:</span>
                          <span className={`px-2 py-0.5 rounded border font-mono ${
                            isDark ? 'bg-slate-950/80 border-slate-800 text-amber-300' : 'bg-white border-amber-200 text-slate-900'
                          }`}>
                            {cert.credentialId}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className={`text-xs leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {cert.description}
                    </p>

                    {/* Covered Competencies */}
                    <div className="space-y-1.5 pt-1">
                      <div className={`text-[11px] font-mono uppercase tracking-wider ${
                        isDark ? 'text-slate-400' : 'text-amber-900 font-semibold'
                      }`}>
                        Key Competencies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className={`px-2 py-0.5 rounded text-[11px] font-mono border ${
                              isDark 
                                ? 'bg-slate-800/80 border-slate-700 text-slate-300' 
                                : 'bg-white border-amber-200 text-slate-700 shadow-sm'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Learning Card */}
            <div className={`glass-panel p-5 rounded-3xl border text-xs space-y-2 ${
              isDark ? 'border-slate-800 text-slate-400' : 'border-amber-200 text-slate-600 shadow-sm'
            }`}>
              <div className={`font-bold flex items-center gap-1.5 ${
                isDark ? 'text-slate-200' : 'text-slate-900'
              }`}>
                <Sparkles className={`w-4 h-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                <span>Continuous Lifelong Learning</span>
              </div>
              <p>
                Regularly applying concepts in MERN full-stack development, server performance tuning, and scalable API architecture.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
