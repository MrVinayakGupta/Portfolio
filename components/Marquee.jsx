'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sparkles, Code2, Award, Zap, ShieldCheck, Database } from 'lucide-react';

export default function Marquee() {
  const { isDark } = useTheme();

  const items = [
    { text: "MERN Stack Architecture", icon: Code2 },
    { text: "Next.js 14 App Router", icon: Zap },
    { text: "Delta Apna College Certified", icon: Award },
    { text: "Lighthouse 98/100 Performance", icon: Sparkles },
    { text: "MongoDB Data Pipelines", icon: Database },
    { text: "Resilient RESTful APIs", icon: ShieldCheck },
    { text: "React.js State Systems", icon: Code2 },
    { text: "Cloudinary CDN Pipelines", icon: Zap },
    { text: "Scaler React Masterclass", icon: Award },
  ];

  return (
    <div className={`w-full py-5 overflow-hidden border-y transition-colors duration-300 select-none ${
      isDark 
        ? 'bg-[#060913] border-slate-800/80 text-slate-300' 
        : 'bg-white border-amber-200 text-slate-800 shadow-sm'
    }`}>
      <div className="flex w-[200%] animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-6 whitespace-nowrap font-mono text-xs uppercase tracking-widest font-semibold"
            >
              <Icon className={`w-3.5 h-3.5 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
              <span>{item.text}</span>
              <span className={`mx-3 text-[10px] ${isDark ? 'text-slate-700' : 'text-amber-300'}`}>✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
