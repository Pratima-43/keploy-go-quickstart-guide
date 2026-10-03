'use client';

import React, { useState } from 'react';
import { ChevronDown, AlertCircle, Terminal, HelpCircle } from 'lucide-react';
import CopyButton from './CopyButton';

interface TroubleshootingItem {
  id: string;
  question: string;
  symptom: string;
  solution: string;
  command?: string;
}

const items: TroubleshootingItem[] = [
  {
    id: 'docker-not-running',
    question: 'Docker daemon or Docker Desktop is not running',
    symptom: 'Cannot connect to the Docker daemon at unix:///var/run/docker.sock or error establishing Docker socket connection.',
    solution: 'Keploy requires a running Docker engine when containerizing Go applications with PostgreSQL. Ensure Docker Desktop is launched.',
    command: 'docker ps',
  },
  {
    id: 'keploy-not-found',
    question: 'Keploy CLI command is not found in terminal',
    symptom: "'keploy' is not recognized as an internal or external command, operable program or batch file.",
    solution: 'Verify installation or ensure the path where Keploy binary was saved is included in your system PATH environment variable.',
    command: 'keploy --version',
  },
  {
    id: 'postgres-conn',
    question: 'Database connection failed: dial tcp 127.0.0.1:5432 connection refused',
    symptom: 'Go application panics during startup while connecting to local PostgreSQL.',
    solution: 'Inside Docker Compose networks, containers cannot reach each other on localhost. In main.go, update the database host from localhost to postgres (or postgresDb service alias).',
  },
  {
    id: 'port-in-use',
    question: 'Port 8082 or 5432 is already occupied',
    symptom: 'bind: address already in use error during docker compose up.',
    solution: 'Identify and safely stop any existing process using port 8082 or 5432 before launching Keploy.',
    command: 'netstat -ano | findstr :8082',
  },
  {
    id: 'delay-timing',
    question: 'Test suite starts replaying before Docker app is fully initialized',
    symptom: 'Keploy test reports connection refused errors immediately when test mode begins.',
    solution: 'Increase the --build-delay parameter (e.g. --build-delay 50) and --delay parameter (e.g. --delay 10) to give PostgreSQL health checks enough time to pass.',
    command: 'keploy test -c "docker compose up" --container-name "echoApp" --build-delay 50 --delay 10',
  },
];

export default function TroubleshootingAccordion() {
  const [openId, setOpenId] = useState<string | null>('postgres-conn');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="troubleshooting" className="my-10 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131b2e] shadow-sm scroll-mt-24">
      <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-orange-500" />
          Beginner Troubleshooting Guide
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Quick solutions to common environment, connection, and timing issues encountered during setup
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(item.id)}
                type="button"
                className="w-full p-4 flex items-center justify-between text-left font-semibold text-sm text-slate-900 dark:text-slate-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-orange-500' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300 space-y-2.5">
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Symptom:</strong>{' '}
                    <span className="font-mono text-[11px] text-rose-600 dark:text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded">
                      {item.symptom}
                    </span>
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-slate-100">Solution:</strong>{' '}
                    {item.solution}
                  </div>
                  {item.command && (
                    <div className="mt-2 pt-2 flex items-center justify-between bg-slate-900 text-slate-100 px-3 py-2 rounded-lg font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-orange-400" />
                        <span>{item.command}</span>
                      </div>
                      <CopyButton text={item.command} />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
