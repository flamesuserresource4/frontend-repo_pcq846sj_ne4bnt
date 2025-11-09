import React from 'react';
import { Shield, Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 px-4 py-3 shadow-sm">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <Shield size={18} />
            </div>
            <span className="font-semibold text-slate-900 dark:text-white">BlueOnboard</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a>
            <a href="#how" className="hover:text-slate-900 dark:hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
              <User size={18} /> Sign in
            </a>
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500">
              <Rocket size={16} /> Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
