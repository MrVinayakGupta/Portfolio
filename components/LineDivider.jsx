'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function LineDivider({ className = "", delay = 0 }) {
  const { isDark } = useTheme();

  return (
    <div className={`w-full overflow-hidden my-6 sm:my-8 ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{
          duration: 1.1,
          delay: delay,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={`h-[1px] w-full origin-left transition-colors duration-300 ${
          isDark ? 'bg-slate-800' : 'bg-amber-200/90'
        }`}
      />
    </div>
  );
}
