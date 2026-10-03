'use client';

import React, { useEffect, useState } from 'react';

interface ToCItem {
  id: string;
  label: string;
}

const tocItems: ToCItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'step-1', label: '1. Get the App' },
  { id: 'step-2', label: '2. Configure PostgreSQL' },
  { id: 'step-3', label: '3. Record Traffic' },
  { id: 'step-4', label: '4. First API Request' },
  { id: 'step-5', label: '5. Follow Short URL' },
  { id: 'step-6', label: '6. Keploy Artifacts' },
  { id: 'step-7', label: '7. Replay Tests' },
  { id: 'how-it-works', label: 'How Keploy Works' },
  { id: 'why-it-matters', label: 'Why This Matters' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  { id: 'next-steps', label: 'Next Steps' },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(tocItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-24 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#131b2e]/70 backdrop-blur-md">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
          On This Page
        </h4>
        <nav className="space-y-1.5 text-xs font-medium">
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block py-1 px-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold border-l-2 border-orange-500 translate-x-1'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
