import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tutorials from './components/Tutorials';
import CTA from './components/CTA';
import Assistant from './components/Assistant';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Tutorials />
        <CTA />
      </main>
      <Assistant />
      <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} BlueOnboard — Guided tutorials and AI assistance for organizational onboarding.
        </p>
      </footer>
    </div>
  );
}

export default App;
