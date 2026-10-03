'use client';

import React from 'react';

interface StepCardProps {
  stepNumber: string | number;
  title: string;
  description: string;
  children?: React.ReactNode;
  badge?: string;
  id?: string;
}

export default function StepCard({
  stepNumber,
  title,
  description,
  children,
  badge,
  id,
}: StepCardProps) {
  const formattedNumber = String(stepNumber).padStart(2, '0');

  return (
    <div
      id={id}
      className="my-10 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131b2e] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center font-mono font-bold text-lg border border-orange-500/20 shrink-0">
            {formattedNumber}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
              {description}
            </p>
          </div>
        </div>
        {badge && (
          <span className="self-start md:self-auto px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-4">{children}</div>
    </div>
  );
}
