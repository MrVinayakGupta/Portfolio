'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, Copy, Check } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';
import { useTheme } from './ThemeProvider';

export default function DevTerminal() {
  const { isDark } = useTheme();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Vinayak Architecture Engine v2.5 (x86_64-fullstack)\nType 'help' or click any quick command chip below to explore.\n-----------------------------------------------------------`
    }
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const quickCommands = ['help', 'skills', 'projects', 'education', 'certs', 'contact'];

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    let response = terminalCommands[trimmed];
    if (!response) {
      response = `Command not recognized: '${trimmed}'. Type 'help' to see all valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: cmd },
      { type: 'response', text: response }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const copyTerminalOutput = () => {
    const text = history.map(h => (h.type === 'user' ? `> ${h.text}` : h.text)).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className={`py-28 relative transition-colors duration-300 ${
      isDark ? 'bg-[#05070d]' : 'bg-[#fbfaf8]'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Architectural Index */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mb-12 border-b pb-6"
          style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(217,119,6,0.18)' }}
        >
          <div className="flex items-center gap-2 text-xs font-mono mb-2">
            <span className={isDark ? "text-purple-400 font-bold" : "text-amber-700 font-bold"}>Fig. 06 / 06</span>
            <span className={isDark ? "text-slate-500" : "text-slate-400"}>—</span>
            <span className={isDark ? "text-slate-400" : "text-slate-600"}>INTERACTIVE CONSOLE & QUERY ENGINE</span>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight font-serif ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Developer <span className="gradient-accent italic">CLI Playground</span>
          </h2>
          
          <p className={`max-w-md mt-2 text-xs sm:text-sm leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Run real-time console commands to inspect Vinayak's technical profile directly.
          </p>
        </motion.div>

        {/* Minimalist Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`rounded-3xl border shadow-2xl overflow-hidden ${
            isDark 
              ? 'bg-[#0a0f1d] border-slate-800' 
              : 'bg-white border-amber-300 shadow-luxury'
          }`}
        >
          
          {/* Header Bar */}
          <div className={`flex items-center justify-between px-5 py-3.5 border-b ${
            isDark ? 'bg-[#060913] border-slate-800' : 'bg-amber-50/70 border-amber-200'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
              <span className={`text-xs font-mono font-medium ml-2 ${
                isDark ? 'text-slate-400' : 'text-slate-700'
              }`}>vinayak@portfolio: ~</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyTerminalOutput}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  isDark 
                    ? 'bg-slate-900 text-slate-400 hover:text-white' 
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-amber-200 shadow-sm'
                }`}
                title="Copy Terminal Logs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              
              <button
                onClick={() => setHistory([])}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  isDark 
                    ? 'bg-slate-900 text-slate-400 hover:text-rose-400' 
                    : 'bg-white text-slate-600 hover:text-rose-600 border border-amber-200 shadow-sm'
                }`}
                title="Clear Terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Command Chips */}
          <div className={`px-5 py-2.5 border-b flex flex-wrap items-center gap-2 ${
            isDark ? 'bg-[#060913] border-slate-800' : 'bg-amber-50/40 border-amber-100'
          }`}>
            <span className={`text-[11px] font-mono ${
              isDark ? 'text-slate-500' : 'text-amber-800 font-semibold'
            }`}>Quick query:</span>
            
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className={`px-3 py-0.5 rounded-full text-[11px] font-mono font-medium transition-colors border ${
                  isDark 
                    ? 'bg-slate-900 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border-slate-800' 
                    : 'bg-white hover:bg-amber-100 text-slate-700 hover:text-amber-900 border-amber-200 shadow-sm'
                }`}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div 
            className={`p-6 font-mono text-xs sm:text-sm min-h-[220px] max-h-[340px] overflow-y-auto space-y-3 cursor-text ${
              isDark ? 'text-slate-300' : 'text-slate-800'
            }`}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, index) => (
              <div key={index} className="leading-relaxed">
                {item.type === 'user' ? (
                  <div className={`flex items-center gap-2 font-bold ${
                    isDark ? 'text-sky-400' : 'text-amber-700'
                  }`}>
                    <span>vinayak@web:~$</span>
                    <span className={isDark ? 'text-white' : 'text-slate-900'}>{item.text}</span>
                  </div>
                ) : (
                  <pre className={`whitespace-pre-wrap font-mono text-xs sm:text-sm ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {item.text}
                  </pre>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleSubmit} className={`flex items-center gap-2 px-5 py-3 border-t ${
            isDark ? 'bg-[#060913] border-slate-800' : 'bg-amber-50/70 border-amber-200'
          }`}>
            <span className={`font-mono text-xs sm:text-sm shrink-0 font-bold ${
              isDark ? 'text-sky-400' : 'text-amber-700'
            }`}>vinayak@web:~$</span>
            
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'skills', 'projects', 'contact')..."
              className={`flex-1 bg-transparent border-none text-xs sm:text-sm font-mono focus:outline-none focus:ring-0 ${
                isDark 
                  ? 'text-white placeholder:text-slate-600' 
                  : 'text-slate-900 placeholder:text-slate-400'
              }`}
            />
            
            <button
              type="submit"
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1 transition-colors border ${
                isDark 
                  ? 'bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 border-sky-500/30' 
                  : 'bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 border-amber-300'
              }`}
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>

        </motion.div>

      </div>
    </section>
  );
}
