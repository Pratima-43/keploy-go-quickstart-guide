'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon, BookOpen, Terminal, ShieldAlert } from 'lucide-react';
import GithubIcon from './GithubIcon';

interface HeaderProps {
  githubUrl?: string;
}

export default function Header({ githubUrl = 'https://github.com/Pratima-43/keploy-go-quickstart-guide' }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    requestAnimationFrame(() => {
      setDarkMode(isDark);
      setMounted(true);
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    });
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0b0f17]/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo / Badge */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-105 transition-transform">
            K
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
              Keploy <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">Go DevRel</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 -mt-0.5">
              Echo + PostgreSQL Guide
            </span>
          </div>
        </a>

        {/* Navigation items */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#overview" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Quickstart
          </a>
          <a href="#how-it-works" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1.5">
            <Terminal className="w-4 h-4" /> How It Works
          </a>
          <a href="#troubleshooting" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4" /> Troubleshooting
          </a>
        </nav>

        {/* Right side tools */}
        <div className="flex items-center gap-3">
          {/* Theme switch */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
              type="button"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          )}

          {/* GitHub Repository button */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-xs"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
