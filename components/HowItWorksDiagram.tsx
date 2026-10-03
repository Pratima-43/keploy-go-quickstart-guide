'use client';

import React, { useState } from 'react';
import { ArrowRight, Database, Server, Radio, ShieldCheck, FileCode, CheckCircle2 } from 'lucide-react';

export default function HowItWorksDiagram() {
  const [activeTab, setActiveTab] = useState<'record' | 'test'>('record');

  return (
    <div id="how-it-works" className="my-10 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131b2e] shadow-sm scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Radio className="w-5 h-5 text-orange-500 animate-pulse" />
            How Keploy Works Under The Hood
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Understanding the distinction between Traffic Interception (Record) and Dependency Mocking (Test)
          </p>
        </div>

        {/* Phase selector tabs */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold self-start md:self-auto border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('record')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'record'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            1. Record Mode
          </button>
          <button
            onClick={() => setActiveTab('test')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'test'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            2. Test & Replay Mode
          </button>
        </div>
      </div>

      {/* Visual Flow Diagram */}
      {activeTab === 'record' ? (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-900 dark:text-orange-200 text-xs font-medium">
            <strong>Record Phase Goal:</strong> Intercept real HTTP API requests and PostgreSQL socket queries, automatically generating editable YAML test suites and dependency mocks.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
            {/* Step 1 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold mb-2">
                cURL
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">API Request</span>
              <span className="text-[11px] text-slate-500 mt-1">POST /url {"{url: ...}"}</span>
            </div>

            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl border border-orange-500/40 bg-orange-500/5 dark:bg-orange-500/10 flex flex-col items-center text-center relative">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold mb-2">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">Go Echo App</span>
              <span className="text-[11px] text-orange-600 dark:text-orange-400 mt-1 font-semibold">Keploy eBPF / Proxy</span>
            </div>

            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mb-2">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">PostgreSQL</span>
              <span className="text-[11px] text-slate-500 mt-1">Queries captured</span>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileCode className="w-6 h-6 text-orange-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Generated Artifacts:</div>
                <div className="text-xs font-mono text-slate-400">keploy/test-set-0/tests/test-1.yaml & mocks.yaml</div>
              </div>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Noise automatically ignored (ts, Date)
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-900 dark:text-sky-200 text-xs font-medium">
            <strong>Test Phase Goal:</strong> Replay recorded API transactions against the app using captured database mocks, eliminating the need to reset live DB tables.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
            {/* Step 1 */}
            <div className="p-4 rounded-xl border border-orange-500/40 bg-orange-500/5 dark:bg-orange-500/10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold mb-2">
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">Keploy Test Runner</span>
              <span className="text-[11px] text-slate-500 mt-1">Replays test-1.yaml</span>
            </div>

            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center font-bold mb-2">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Go Echo App</span>
              <span className="text-[11px] text-slate-500 mt-1">Executes route handler</span>
            </div>

            <div className="hidden md:flex justify-center">
              <ArrowRight className="w-5 h-5 text-slate-400" />
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-500/10 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-slate-100">Mock Response</span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">Served from mocks.yaml</span>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-200 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs leading-relaxed">
              <strong>Assertion Result:</strong> Keploy compares the live HTTP status (200 OK) and response structure against recorded baseline. All assertions pass without live PostgreSQL mutations!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
