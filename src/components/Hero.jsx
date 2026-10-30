import React, { useState } from 'react';
import StatusBadge from './StatusBadge';

export const Hero = () => {
  const [toastMessage, setToastMessage] = useState('');

  const handleResumeDownload = (e) => {
    e.preventDefault();
    setToastMessage('Resume requested! Download link active. Connect on GitHub or LinkedIn for the direct PDF.');
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleViewProjects = (e) => {
    e.preventDefault();
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 z-10 overflow-hidden"
    >
      {/* Ambient Cyber-Emerald & Bright Lime Glow Orbs (Strictly no blue gradients) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[780px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-lime-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-12 right-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-24 left-10 w-64 h-64 bg-lime-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Status Radar Pill */}
        <div className="mb-6 sm:mb-8 animate-float">
          <StatusBadge />
        </div>

        {/* Main Headline */}
        <div className="space-y-2 mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-100 leading-[1.12]">
            Hey, I am{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                SAMARTH.P
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 via-emerald-400 to-lime-400 rounded-full opacity-80" />
            </span>
            <br className="hidden sm:inline" />
            <span className="text-zinc-200"> — Building the </span>
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-emerald-200 bg-clip-text text-transparent">
              Future of Tech.
            </span>
          </h1>
        </div>

        {/* Student Bio */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-normal mb-8 sm:mb-10">
          <span className="text-emerald-400 font-medium">2nd Year Computer Science Student at KSIT</span> passionate about{' '}
          <span className="text-zinc-200 font-medium border-b border-emerald-500/40 pb-0.5">web development</span>,{' '}
          <span className="text-zinc-200 font-medium border-b border-lime-400/40 pb-0.5">AI</span>, and building{' '}
          <span className="text-emerald-300 font-medium">real-world projects</span> that make an impact.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          {/* Glowing Emerald Primary Button */}
          <a
            href="#projects"
            onClick={handleViewProjects}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_45px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <span className="tracking-wide">View My Projects</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Outline Secondary Button */}
          <button
            onClick={handleResumeDownload}
            className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-medium text-emerald-300 border border-emerald-500/35 bg-carbon-card/50 hover:bg-emerald-500/10 hover:border-emerald-400 hover:text-white hover:-translate-y-1 active:translate-y-0 transition-all duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
          >
            <svg
              className="w-5 h-5 text-emerald-400 group-hover:text-lime-300 transition-all duration-300 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume / CV</span>
          </button>
        </div>

        {/* Feedback Alert Toast */}
        {toastMessage && (
          <div className="mt-6 px-4 py-2.5 rounded-xl bg-carbon-card border border-emerald-500/50 text-emerald-300 text-xs font-mono shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            {toastMessage}
          </div>
        )}

        {/* Cyber Terminal Stats / Highlights Bar */}
        <div className="mt-14 sm:mt-16 w-full max-w-3xl pt-8 border-t border-emerald-500/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-carbon-card/40 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
            <div className="font-mono text-2xl font-bold text-emerald-400">2nd Year</div>
            <div className="text-xs text-zinc-400 mt-0.5">CSE @ KSIT</div>
          </div>
          <div className="p-3 rounded-xl bg-carbon-card/40 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
            <div className="font-mono text-2xl font-bold text-lime-400">Full-Stack</div>
            <div className="text-xs text-zinc-400 mt-0.5">React & Node.js</div>
          </div>
          <div className="p-3 rounded-xl bg-carbon-card/40 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
            <div className="font-mono text-2xl font-bold text-emerald-400">AI / ML</div>
            <div className="text-xs text-zinc-400 mt-0.5">Exploration & Labs</div>
          </div>
          <div className="p-3 rounded-xl bg-carbon-card/40 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
            <div className="font-mono text-2xl font-bold text-lime-400">100%</div>
            <div className="text-xs text-zinc-400 mt-0.5">Driven by Code</div>
          </div>
        </div>

        {/* Quick Tech Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-400">
          <span className="text-zinc-500">Core Stack:</span>
          <span className="px-2.5 py-1 rounded-md bg-carbon-card border border-emerald-500/20 text-emerald-300">React.js</span>
          <span className="px-2.5 py-1 rounded-md bg-carbon-card border border-emerald-500/20 text-emerald-300">Tailwind CSS</span>
          <span className="px-2.5 py-1 rounded-md bg-carbon-card border border-emerald-500/20 text-emerald-300">JavaScript / TS</span>
          <span className="px-2.5 py-1 rounded-md bg-carbon-card border border-lime-500/20 text-lime-300">Python</span>
          <span className="px-2.5 py-1 rounded-md bg-carbon-card border border-emerald-500/20 text-emerald-300">Git & GitHub</span>
        </div>

        {/* Scroll Indicator */}
        <div
          className="mt-12 flex flex-col items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer"
          onClick={handleViewProjects}
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-emerald-500/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-emerald-400 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

