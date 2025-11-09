import React from 'react';
import { PlayCircle, CheckCircle, LayoutList } from 'lucide-react';

const tutorials = [
  {
    title: 'Get set up with core tools',
    steps: 5,
    desc: 'Access email, calendar, and chat. Configure SSO and 2FA in minutes.',
  },
  {
    title: 'Security & compliance basics',
    steps: 4,
    desc: 'Review policies, complete training, and acknowledge key controls.',
  },
  {
    title: 'Your first project walkthrough',
    steps: 6,
    desc: 'Follow a guided tour with tasks, docs, and links tailored to your role.',
  },
];

export default function Tutorials() {
  return (
    <section id="how" className="relative py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <LayoutList className="h-4 w-4" /> Onboarding tutorials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Learn by doing with guided lessons
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Short, actionable modules with progress tracking. Resume anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((t) => (
            <div key={t.title} className="group rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                  <PlayCircle className="h-5 w-5" />
                </div>
                <div className="text-xs text-slate-500">{t.steps} steps</div>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t.desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-200/60 px-3 py-2 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                Start module <CheckCircle className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
