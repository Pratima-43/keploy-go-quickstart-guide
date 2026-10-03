'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0f17] py-12 transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
            <div className="w-5 h-5 rounded bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
              K
            </div>
            Keploy Go DevRel Guide
          </div>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <span>Built for DevRel Candidate Assignment</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://keploy.io/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors flex items-center gap-1"
          >
            Official Keploy Docs <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://github.com/keploy/samples-go"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors flex items-center gap-1"
          >
            samples-go Repository <GithubIcon className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
