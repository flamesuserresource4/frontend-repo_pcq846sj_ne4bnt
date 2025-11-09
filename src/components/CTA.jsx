import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-sm dark:border-slate-800">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Ready to modernize onboarding?</h3>
              <p className="mt-1 text-slate-300">Launch in minutes. Integrate with your directory and roll out to your first team today.</p>
            </div>
            <div className="flex w-full max-w-sm flex-col gap-3 md:w-auto md:flex-row">
              <input
                type="email"
                placeholder="Work email"
                className="w-full rounded-lg border border-slate-700/60 bg-white/95 px-4 py-2.5 text-slate-900 placeholder-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <button className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 font-semibold text-slate-900 shadow-sm hover:bg-slate-100">
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
