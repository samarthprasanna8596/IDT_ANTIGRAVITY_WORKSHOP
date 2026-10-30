import React from 'react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-carbon-border/70 bg-carbon-dark/95 backdrop-blur-md py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Left: Monogram status */}
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-400">KSIT BENGALURU</span>
          <span>•</span>
          <span className="text-emerald-500/80">CYBER-EMERALD v2.0</span>
        </div>

        {/* Center: Exact Required Line */}
        <div className="font-mono text-xs sm:text-sm text-zinc-300 tracking-wide">
          Designed & Engineered by <span className="text-emerald-400 font-semibold">Samarth</span> • <span className="text-lime-300 font-medium">Class of 2029.</span>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon border border-emerald-500/20 hover:border-emerald-400 text-xs font-mono text-zinc-400 hover:text-emerald-300 transition-all duration-200"
          aria-label="Back to top"
        >
          <span>Top</span>
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

