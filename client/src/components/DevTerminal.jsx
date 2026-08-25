import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2, Copy, Check } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

export default function DevTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Vinayak OS v2.0 (x86_64-fullstack)\nType 'help' or click any quick command chip below to explore.\n-----------------------------------------------------------`
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
    <section id="terminal" className="py-20 bg-[#0a0f1d] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>05. INTERACTIVE CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer <span className="gradient-text">CLI Playground</span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-3 text-xs sm:text-sm">
            Experience an interactive terminal interface. Run live commands to inspect Vinayak's technical profile directly.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl shadow-sky-500/5 overflow-hidden">
          
          {/* Header bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs font-mono text-slate-400 ml-2">vinayak@portfolio: ~</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyTerminalOutput}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                title="Copy Terminal Logs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setHistory([])}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors text-xs flex items-center gap-1"
                title="Clear Terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Command Chips */}
          <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500">Quick run:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-0.5 rounded-md bg-slate-800 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border border-slate-700 text-[11px] font-mono transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div 
            className="p-5 font-mono text-xs sm:text-sm text-slate-300 min-h-[260px] max-h-[380px] overflow-y-auto space-y-3"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, index) => (
              <div key={index} className="leading-relaxed">
                {item.type === 'user' ? (
                  <div className="flex items-center gap-2 text-sky-400 font-semibold">
                    <span>vinayak@web:~$</span>
                    <span className="text-white">{item.text}</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap font-mono text-slate-300 text-xs sm:text-sm">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 bg-slate-900/90 border-t border-slate-800">
            <span className="text-sky-400 font-mono text-xs sm:text-sm shrink-0">vinayak@web:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'skills', 'projects', 'contact')..."
              className="flex-1 bg-transparent border-none text-white text-xs sm:text-sm font-mono focus:outline-none focus:ring-0 placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 text-xs font-mono flex items-center gap-1 transition-colors"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
