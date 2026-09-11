'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function MaskedHeading({ children, className = "", delay = 0 }) {
  return (
    <div className="overflow-hidden inline-block leading-none">
      <motion.div
        initial={{ y: "115%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.85,
          delay: delay,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function FadeInUp({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.75,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
