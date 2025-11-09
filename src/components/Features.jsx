import React from 'react';
import { CheckCircle2, Workflow, ShieldCheck, Bot, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: 'AI onboarding assistant',
    desc: 'Answers questions about your org, policies, tools, and culture—instantly, 24/7.',
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: 'Interactive tutorials',
    desc: 'Step‑by‑step guides with checklists, progress tracking, and rich media walkthroughs.',
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: 'Role‑based workflows',
    desc: 'Personalized flows for employees, contractors, and customers across departments.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Compliance ready',
    desc: 'SOC 2 and ISO‑aligned controls with exportable audit evidence and access logs.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <CheckCircle2 className="h-4 w-4" /> Why teams choose BlueOnboard
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Tutorials and AI guidance built for enterprises
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Deliver clear, consistent onboarding with an AI guide, interactive lessons, and secure access.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                {f.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
