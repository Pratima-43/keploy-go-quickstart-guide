'use client';

import React from 'react';
import CopyButton from './CopyButton';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = 'bash', title }: CodeBlockProps) {
  const cleanCode = code.trim();

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-lg">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {title ? (
            <span className="ml-2 text-xs font-mono text-slate-300 font-medium">{title}</span>
          ) : (
            <span className="ml-2 text-xs font-mono text-slate-400 uppercase tracking-wider">{language}</span>
          )}
        </div>
        <CopyButton text={cleanCode} />
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">
          <code>{cleanCode}</code>
        </pre>
      </div>
    </div>
  );
}
