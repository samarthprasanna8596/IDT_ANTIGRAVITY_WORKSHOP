import React from 'react';

export const EducationCampusJourney = () => {
  const milestones = [
    {
      year: "2026",
      status: "CURRENT FOCUS",
      isActive: true,
      title: "Engineering Student – Building Technical Skills",
      description:
        "Currently pursuing B.Tech in Computer Science, focusing on AI, web development, programming, and real-world project development.",
      tags: ["B.Tech CSE", "AI / Web Dev", "Active Sprints", "KSIT 2nd Year"],
    },
    {
      year: "2025",
      status: "DEVELOPMENT",
      isActive: false,
      title: "Exploring Development & Team Projects",
      description:
        "Strengthened programming fundamentals and collaborated on technical projects, gaining practical experience in software development and problem-solving.",
      tags: ["Hackathons", "Full-Stack Labs", "Peer Code Reviews"],
    },
    {
      year: "2024",
      status: "FOUNDATION",
      isActive: false,
      title: "Started Engineering Journey",
      description:
        "Began my engineering degree, developed an interest in technology, and started learning programming and core computer science concepts.",
      tags: ["Enrolled @ KSIT", "C++ / Python", "Data Structures Intro"],
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "1st Place - University Hackathon",
      category: "Collegiate Winner",
      detail: "Developed rapid solution under 24-hr sprint with peers.",
      accent: "border-emerald-500/25 hover:border-emerald-400",
    },
    {
      icon: "⚡",
      title: "150+ LeetCode Problems Solved",
      category: "Algorithms & DSA",
      detail: "Strong foundations in arrays, trees, graphs & hashing.",
      accent: "border-lime-500/25 hover:border-lime-400",
    },
    {
      icon: "👥",
      title: "Tech Club Organizer",
      category: "Campus Leadership",
      detail: "Mentoring juniors and hosting code debugging meetups.",
      accent: "border-emerald-500/25 hover:border-emerald-400",
    },
    {
      icon: "📜",
      title: "Full-Stack Certified",
      category: "Continuous Learning",
      detail: "Verified hands-on proficiency in React, Node & databases.",
      accent: "border-teal-500/25 hover:border-teal-400",
    },
  ];

  return (
    <section id="campus-life" className="scroll-mt-24 pt-2">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ACADEMICS & MILESTONES // KSIT CSE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Education & Campus Journey
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            My computer science trajectory at KSIT, highlighted by technical milestones, competitive hackathons, and collegiate leadership.
          </p>
        </div>

        {/* Institution Badge */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-carbon-dark/90 border border-emerald-500/25 text-xs font-mono text-emerald-300 self-start sm:self-auto backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>🏛️ KSIT Bengaluru</span>
          <span className="text-zinc-600">•</span>
          <span className="text-lime-300">Class of 2028</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Vertical Illuminated Milestone Timeline (7 cols) */}
        <div className="lg:col-span-7 relative pl-6 sm:pl-8 space-y-7">
          {/* Illuminated Vertical Emerald Line */}
          <div className="absolute left-[15px] sm:left-[19px] top-4 bottom-6 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/80 to-emerald-950/40 shadow-[0_0_12px_rgba(16,185,129,0.5)] pointer-events-none" />

          {milestones.map((item, index) => (
            <div key={item.year} className="relative group">
              {/* Glowing Nodal Dot */}
              <div
                className={`absolute -left-[23px] sm:-left-[27px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-carbon-dark border-2 transition-all duration-300 z-10 ${
                  item.isActive
                    ? 'border-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.7)]'
                    : 'border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_14px_rgba(16,185,129,0.4)]'
                }`}
              >
                {item.isActive ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-300 shadow-[0_0_8px_#a3e635]" />
                  </>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80 group-hover:bg-emerald-300 transition-colors" />
                )}
              </div>

              {/* Milestone Card Content */}
              <div className="p-5 sm:p-6 rounded-2xl bg-carbon-card/70 backdrop-blur-xl border border-emerald-500/20 group-hover:border-emerald-500/50 hover:shadow-[0_12px_30px_rgba(16,185,129,0.16)] transition-all duration-300 transform group-hover:-translate-y-1">
                {/* Year Pill & Status Indicator */}
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-carbon-dark border border-emerald-500/35 text-emerald-300 group-hover:border-emerald-400 transition-colors">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      // {item.status}
                    </span>
                  </div>
                  {item.isActive && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-mono text-lime-300 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                      IN PROGRESS
                    </span>
                  )}
                </div>

                {/* Milestone Headline */}
                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                  <span className="text-emerald-400 font-mono mr-2">{item.year}:</span>
                  {item.title}
                </h3>

                {/* Milestone Description */}
                <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-carbon-dark/90 text-zinc-400 border border-carbon-border group-hover:border-emerald-500/25 group-hover:text-emerald-300/90 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Compact 2x2 Achievement Badges (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-6 sm:p-7 rounded-2xl bg-carbon-card/65 backdrop-blur-xl border border-emerald-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md bg-carbon-dark border border-emerald-500/25 text-emerald-400 uppercase">
                ACCOMPLISHMENTS // CALLOUTS
              </span>
              <span className="text-xs font-mono text-zinc-500">4 Badges</span>
            </div>

            <h3 className="text-xl font-bold text-zinc-100 mb-1.5">
              Achievements & Leadership
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
              Validated extracurriculars, competitive coding streaks, and campus leadership initiatives at KSIT.
            </p>

            {/* 2x2 Grid of Achievement Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {achievements.map((badge) => (
                <div
                  key={badge.title}
                  className={`group/badge p-4 rounded-xl bg-carbon-dark/85 backdrop-blur-md border ${badge.accent} hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:bg-carbon-card/90 transition-all duration-300 transform hover:-translate-y-1 cursor-default select-none relative overflow-hidden`}
                >
                  {/* Subtle hover gradient sheen */}
                  <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />

                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xl">{badge.icon}</span>
                    <span className="text-[10px] font-mono text-emerald-400/80 uppercase">
                      {badge.category}
                    </span>
                  </div>

                  {/* Badge Title */}
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-200 group-hover/badge:text-emerald-300 transition-colors leading-tight mb-1.5">
                    {badge.title}
                  </h4>

                  {/* Badge Detail */}
                  <p className="text-[11px] text-zinc-400 leading-normal font-normal">
                    {badge.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Motivation Callout */}
            <div className="mt-5 pt-4 border-t border-carbon-border/70 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span className="text-emerald-400 font-semibold">// CONTINUOUS GROWTH</span>
              <span className="text-lime-300">CSE Department '28</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCampusJourney;
