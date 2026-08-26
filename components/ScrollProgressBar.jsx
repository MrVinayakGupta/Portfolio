'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function ScrollProgressBar() {
  const { isDark } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-[3px] origin-left z-[100] transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(56,189,248,0.7)]'
          : 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 shadow-[0_0_12px_rgba(217,119,6,0.6)]'
      }`}
    />
  );
}
