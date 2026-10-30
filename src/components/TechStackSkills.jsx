import React from 'react';

// --- Official Technology Icons (Clean SVG Paths) ---
const SkillIcon = ({ type }) => {
  switch (type) {
    case 'cpp':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" stroke="#00599C" strokeWidth="1.8" fill="#00599C" fillOpacity="0.15" />
          <path d="M10.5 9a3.5 3.5 0 100 6h1" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
          <path d="M14.5 10.5v3M13 12h3M18.5 10.5v3M17 12h3" stroke="#a3e635" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'python':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v2.8h5.9V7H7.3S4 6.6 4 11.2c0 4.6 2.9 4.4 2.9 4.4h1.7v-2.4s-.1-2.9 2.8-2.9h4.9s2.7.1 2.7-2.6V4.7S19.4 2 11.9 2zm-1.8 1.7a1 1 0 110 2 1 1 0 010-2z" fill="#38BDF8" />
          <path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-2.8H9.1V17h7.6s3.3.4 3.3-4.2c0-4.6-2.9-4.4-2.9-4.4h-1.7v2.4s.1 2.9-2.8 2.9H7.7s-2.7-.1-2.7 2.6v3s-.4 2.7 7.1 2.7zm1.8-1.7a1 1 0 110-2 1 1 0 010 2z" fill="#FACC15" />
        </svg>
      );
    case 'javascript':
      return (
        <svg className="w-5 h-5 flex-shrink-0 rounded-sm" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" fillOpacity="0.15" stroke="#F7DF1E" strokeWidth="1.5" />
          <path d="M7 17.5c.8.5 1.7.7 2.5.4 1-.4 1.5-1.4 1.5-2.8V9h-2v6c0 .6-.2 1-.6 1.1-.4.1-.9 0-1.4-.3v1.7zm8.3.1c1.3 0 2.4-.6 3.1-1.5l-1.3-1c-.4.5-1 .8-1.7.8-.8 0-1.4-.4-1.4-1.1 0-.6.4-.9 1.5-1.3 1.8-.7 2.7-1.4 2.7-2.7 0-1.5-1.2-2.5-3-2.5-1.3 0-2.3.5-3 1.3l1.2 1c.5-.5 1.1-.7 1.7-.7.7 0 1.2.4 1.2 1 0 .5-.4.8-1.4 1.2-1.9.7-2.8 1.4-2.8 2.8 0 1.8 1.4 2.9 3.2 2.9z" fill="#F7DF1E" />
        </svg>
      );
    case 'java':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M8 18.5c2.5.5 5.5.5 8 0M7 21c3.5.7 7.5.7 10 0M14 12c1.5-1.5 2-3 1.5-4.5-1-.5-2.5.5-2.5 2s-1.5 2.5-.5 2.5z" stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M10 13c1.5-1.5 2-3 1.5-4.5-1-.5-2.5.5-2.5 2s-1.5 2.5-.5 2.5z" stroke="#F97316" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M6 15c4 .8 8 .8 12 0 .5 2-1 4-6 4s-6.5-2-6-4z" fill="#EA580C" fillOpacity="0.2" stroke="#EA580C" strokeWidth="1.5" />
        </svg>
      );
    case 'react':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" stroke="#00D8FF" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" stroke="#00D8FF" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" stroke="#00D8FF" strokeWidth="1.4" />
          <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 6c-3.6 0-5.8 1.8-6.6 5.4 1.3-1.8 2.9-2.5 4.8-2 1.1.3 1.9 1.1 2.8 2 1.4 1.5 3 3.2 6.6 3.2 3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.9 2.5-4.8 2-1.1-.3-1.9-1.1-2.8-2-1.4-1.5-3-3.2-6.6-3.2zm-7 6c-3.6 0-5.8 1.8-6.6 5.4 1.3-1.8 2.9-2.5 4.8-2 1.1.3 1.9 1.1 2.8 2 1.4 1.5 3 3.2 6.6 3.2 3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.9 2.5-4.8 2-1.1-.3-1.9-1.1-2.8-2-1.4-1.5-3-3.2-6.6-3.2z" fill="#38BDF8" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z" stroke="#68A063" strokeWidth="1.6" fill="#68A063" fillOpacity="0.15" />
          <path d="M12 7.5v9M7.5 10l9 5M16.5 10l-9 5" stroke="#34D399" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case 'git':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M21.6 10.8l-8.4-8.4c-.8-.8-2-.8-2.8 0L8.6 4.2l3.4 3.4c.7-.2 1.6 0 2.2.6.6.6.8 1.5.6 2.2l3.3 3.3c.7-.2 1.6 0 2.2.6 1 .9 1 2.5 0 3.5-.9 1-2.5 1-3.5 0-.7-.7-.9-1.7-.5-2.5l-3.1-3.1v4.8c.3.2.6.5.7.9.7 1.1.4 2.6-.7 3.3-1.1.7-2.6.4-3.3-.7-.7-1.1-.4-2.6.7-3.3.4-.3.9-.4 1.4-.4V9.6c-.5 0-1-.1-1.4-.4-.9-.6-1.3-1.7-1-2.7L2.4 12c-.8.8-.8 2 0 2.8l8.4 8.4c.8.8 2 .8 2.8 0l8-8c.8-.8.8-2 0-2.8v-1.6z" fill="#F05032" />
        </svg>
      );
    case 'dsa':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="5" r="3" className="stroke-emerald-400 fill-emerald-500/20" strokeWidth="1.8" />
          <circle cx="6" cy="18" r="3" className="stroke-lime-400 fill-lime-500/20" strokeWidth="1.8" />
          <circle cx="18" cy="18" r="3" className="stroke-emerald-400 fill-emerald-500/20" strokeWidth="1.8" />
          <path d="M10 7.5L7.5 15.5M14 7.5l2.5 8" className="stroke-emerald-400/70" strokeWidth="1.6" />
        </svg>
      );
    case 'oop':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="7" height="7" rx="1.5" className="stroke-lime-400 fill-lime-500/20" strokeWidth="1.8" />
          <rect x="14" y="4" width="7" height="7" rx="1.5" className="stroke-emerald-400 fill-emerald-500/20" strokeWidth="1.8" />
          <rect x="8.5" y="14" width="7" height="7" rx="1.5" className="stroke-teal-400 fill-teal-500/20" strokeWidth="1.8" />
          <path d="M6.5 11v1.5a1 1 0 001 1h1M17.5 11v1.5a1 1 0 01-1 1h-1" className="stroke-emerald-400/80" strokeWidth="1.5" />
        </svg>
      );
    case 'dbms':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#34D399" strokeWidth="1.8" fill="#34D399" fillOpacity="0.2" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#34D399" strokeWidth="1.8" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#A3E635" strokeWidth="1.8" />
        </svg>
      );
    case 'os':
      return (
        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="3" className="stroke-teal-400 fill-teal-500/20" strokeWidth="1.8" />
          <rect x="9" y="9" width="6" height="6" rx="1" className="stroke-emerald-400 fill-emerald-400/40" strokeWidth="1.6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" className="stroke-teal-300" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 flex-shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
          <path d="M12 8v8M8 12h8" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
};

// --- Skill Badge with Hover Scale, Glow, and Interactive Tooltip ---
const SkillBadge = ({ skill }) => {
  // Tooltip theme configuration based on comfort level
  const getLevelConfig = (level) => {
    switch (level) {
      case 'Proficient':
        return {
          pillBorder: 'border-emerald-500/25 hover:border-emerald-400',
          tooltipBg: 'bg-emerald-950/95 border-emerald-400/80 text-emerald-300',
          indicator: 'bg-emerald-400 shadow-[0_0_8px_#10b981]',
          badgeText: 'text-emerald-400',
        };
      case 'Familiar':
        return {
          pillBorder: 'border-lime-500/25 hover:border-lime-400',
          tooltipBg: 'bg-lime-950/95 border-lime-400/80 text-lime-300',
          indicator: 'bg-lime-400 shadow-[0_0_8px_#a3e635]',
          badgeText: 'text-lime-400',
        };
      case 'Currently Learning':
      default:
        return {
          pillBorder: 'border-teal-500/25 hover:border-teal-400',
          tooltipBg: 'bg-teal-950/95 border-teal-400/80 text-teal-300',
          indicator: 'bg-teal-400 shadow-[0_0_8px_#2dd4bf] animate-ping',
          badgeText: 'text-teal-300',
        };
    }
  };

  const config = getLevelConfig(skill.level);

  return (
    <div className="group/badge relative">
      {/* Interactive Tooltip (Revealed on hover above badge) */}
      <div className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 group-hover/badge:opacity-100 group-hover/badge:-translate-y-1 transition-all duration-200 z-30 flex flex-col items-center">
        <div
          className={`px-3 py-1 rounded-lg text-[11px] font-mono font-semibold whitespace-nowrap shadow-[0_8px_20px_rgba(0,0,0,0.8)] border backdrop-blur-md flex items-center gap-1.5 ${config.tooltipBg}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${config.indicator}`} />
          <span>{skill.level}</span>
        </div>
        {/* Triangle arrow */}
        <div className="w-2 h-2 -mt-1 rotate-45 bg-carbon-dark border-r border-b border-emerald-500/40" />
      </div>

      {/* Main Skill Pill Badge */}
      <div
        className={`relative flex items-center gap-3 px-4 py-3 rounded-xl bg-carbon-dark/85 backdrop-blur-md border ${config.pillBorder} transition-all duration-300 transform group-hover/badge:scale-105 group-hover/badge:shadow-[0_0_20px_rgba(16,185,129,0.3),inset_0_0_12px_rgba(16,185,129,0.06)] group-hover/badge:bg-carbon-card/90 cursor-default select-none`}
      >
        {/* Subtle light sweep */}
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />

        {/* Tech Icon */}
        <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-carbon/80 border border-emerald-500/15 group-hover/badge:border-emerald-400/40 transition-colors">
          <SkillIcon type={skill.icon} />
        </div>

        {/* Tech Name & Subtle Level Tag */}
        <div className="flex flex-col">
          <span className="text-sm font-bold text-zinc-200 group-hover/badge:text-white transition-colors leading-tight">
            {skill.name}
          </span>
          <span className={`text-[10px] font-mono ${config.badgeText} tracking-wider mt-0.5`}>
            {skill.level}
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Tech Stack & Skills Section ---
export const TechStackSkills = () => {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      tag: "01 // CORE SYNTAX",
      icon: "⚡",
      description: "Foundational programming languages used for systems engineering, problem solving, and full-stack development.",
      skills: [
        { name: "C++", level: "Proficient", icon: "cpp" },
        { name: "Python", level: "Proficient", icon: "python" },
        { name: "JavaScript", level: "Proficient", icon: "javascript" },
        { name: "Java", level: "Familiar", icon: "java" },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks & Tools",
      tag: "02 // DEV TOOLCHAIN",
      icon: "🛠️",
      description: "Modern web frameworks, utility-first styling toolchains, server runtimes, and collaborative version control.",
      skills: [
        { name: "React", level: "Proficient", icon: "react" },
        { name: "Tailwind CSS", level: "Proficient", icon: "tailwind" },
        { name: "Node.js", level: "Familiar", icon: "nodejs" },
        { name: "Git/GitHub", level: "Proficient", icon: "git" },
      ],
    },
    {
      id: "concepts",
      title: "Core CS Concepts",
      tag: "03 // CS FOUNDATIONS",
      icon: "🧠",
      description: "Theoretical pillars and system design principles learned through coursework and hackathons at KSIT CSE.",
      skills: [
        { name: "Data Structures", level: "Proficient", icon: "dsa" },
        { name: "OOP", level: "Proficient", icon: "oop" },
        { name: "DBMS", level: "Familiar", icon: "dbms" },
        { name: "OS", level: "Currently Learning", icon: "os" },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 pt-2">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>TECHNICAL ARSENAL // 2ND YEAR CSE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Tech Stack & Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            A categorized breakdown of my daily programming languages, libraries, tools, and theoretical computer science fundamentals.
          </p>
        </div>

        {/* Comfort Level Legend Pill */}
        <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-carbon-dark/90 border border-emerald-500/20 text-[11px] font-mono text-zinc-400 self-start sm:self-auto backdrop-blur-md">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-300">Proficient</span>
          </span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-lime-400" />
            <span className="text-zinc-300">Familiar</span>
          </span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-zinc-300">Learning</span>
          </span>
        </div>
      </div>

      {/* 3 Tidy Category Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-carbon-card/65 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(16,185,129,0.12)] overflow-hidden"
          >
            {/* Top Emerald Neon Accent Line */}
            <div className="pointer-events-none absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md bg-carbon-dark border border-emerald-500/20 text-emerald-400">
                  {category.tag}
                </span>
                <span className="text-base">{category.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-2">
                {category.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                {category.description}
              </p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 pt-4 border-t border-carbon-border/70">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSkills;

