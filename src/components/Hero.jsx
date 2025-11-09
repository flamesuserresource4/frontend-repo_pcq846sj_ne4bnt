import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-slate-900/70 dark:via-slate-900/30 dark:to-slate-900/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-slate-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-black/5 dark:bg-slate-800/60 dark:text-slate-200">Modern • Minimal • Secure</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Enterprise onboarding, made effortless
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Streamline invites, approvals, and access across your organization. A clean, compliant, and delightful onboarding experience for teams of any size.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              Start free trial
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg bg-white/80 backdrop-blur text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-white/90 dark:bg-slate-800/60 dark:text-white dark:ring-slate-700"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
