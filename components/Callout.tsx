'use client';

import React from 'react';
import { Info, Lightbulb, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'tip' | 'warning' | 'success';
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: {
      border: 'border-l-sky-500 border-sky-200 dark:border-sky-900/40 bg-sky-50/60 dark:bg-sky-950/20 text-sky-950 dark:text-sky-200',
      icon: <Info className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />,
      defaultTitle: 'Developer Note',
    },
    tip: {
      border: 'border-l-amber-500 border-amber-200 dark:border-amber-900/40 bg-amber-50/60 dark:bg-amber-950/20 text-amber-950 dark:text-amber-200',
      icon: <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />,
      defaultTitle: 'Pro Tip',
    },
    warning: {
      border: 'border-l-orange-500 border-orange-200 dark:border-orange-900/40 bg-orange-50/60 dark:bg-orange-950/20 text-orange-950 dark:text-orange-200',
      icon: <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />,
      defaultTitle: 'Important Warning',
    },
    success: {
      border: 'border-l-emerald-500 border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-950 dark:text-emerald-200',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />,
      defaultTitle: 'Success Insight',
    },
  };

  const config = styles[type] || styles.info;

  return (
    <div className={`my-6 p-4 rounded-r-xl border border-l-4 shadow-xs ${config.border}`}>
      <div className="flex items-start gap-3">
        {config.icon}
        <div className="space-y-1 text-sm leading-relaxed">
          <div className="font-semibold tracking-wide text-xs uppercase opacity-90">
            {title || config.defaultTitle}
          </div>
          <div className="text-slate-700 dark:text-slate-300">{children}</div>
        </div>
      </div>
    </div>
  );
}
