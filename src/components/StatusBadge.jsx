import React from 'react';

/**
 * Animated Blinking Radar Pill:
 * '🟢 Student Developer // Open for Internships'
 */
export const StatusBadge = () => {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-mono tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300 cursor-default select-none group">
      {/* Animated Blinking Radar Indicator */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
      </span>
      <span className="text-zinc-200 font-medium">Student Developer</span>
      <span className="text-emerald-500/60 font-light">//</span>
      <span className="text-lime-300 font-semibold flex items-center gap-1">
        Open for Internships
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
      </span>
    </div>
  );
};

export default StatusBadge;

