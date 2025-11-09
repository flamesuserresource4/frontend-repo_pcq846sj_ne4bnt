import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} BlueOnboard — Clean, compliant onboarding for organizations and enterprises.
        </p>
      </footer>
    </div>
  );
}

export default App;
