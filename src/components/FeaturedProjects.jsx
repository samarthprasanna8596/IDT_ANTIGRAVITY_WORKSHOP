import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

export const PROJECTS_DATA = [
  {
    id: "01",
    title: "Campus Event Finder",
    categoryBadge: "Web App // Campus",
    categories: ["All", "Web Apps", "Mini-Projects"],
    description: "A centralized platform that helps students discover upcoming college events, workshops, hackathons, and cultural activities. Students can explore event details, register for events, and stay updated without missing important campus activities.",
    techBadges: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://demo.example.com/campus-events",
    codeUrl: "https://github.com/samarth-p/campus-event-finder",
  },
  {
    id: "02",
    title: "Smart Attendance Tracker",
    categoryBadge: "AI / ML // Vision",
    categories: ["All", "AI / ML", "Mini-Projects"],
    description: "An intelligent attendance management system that automates student attendance tracking using facial recognition. It uses a camera and computer vision to identify students, record attendance, and reduce manual work for teachers.",
    techBadges: ["Python", "OpenCV", "Face Recognition", "SQLite"],
    demoUrl: "https://demo.example.com/smart-attendance",
    codeUrl: "https://github.com/samarth-p/smart-attendance-tracker",
  },
  {
    id: "03",
    title: "Student Notes Marketplace",
    categoryBadge: "Web App // Academic",
    categories: ["All", "Web Apps", "Mini-Projects"],
    description: "A student-focused platform where users can upload, browse, share, and download academic notes and study materials. It helps students access quality learning resources, collaborate with peers, and prepare for examinations more efficiently.",
    techBadges: ["Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://demo.example.com/notes-marketplace",
    codeUrl: "https://github.com/samarth-p/student-notes-marketplace",
  },
];

export const FeaturedProjects = ({ onActionToast }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filterPills = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const filteredProjects = PROJECTS_DATA.filter((project) =>
    project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="scroll-mt-24 pt-2">
      {/* Header & Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>FEATURED PROJECTS // SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Engineering Practical Solutions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Real-world software built with modern web frameworks, intelligent computer vision, and scalable database architectures.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex flex-wrap items-center gap-2 bg-carbon-dark/90 p-1.5 rounded-2xl border border-emerald-500/20 backdrop-blur-md self-start lg:self-auto">
          {filterPills.map((filter) => {
            const count = PROJECTS_DATA.filter((p) => p.categories.includes(filter)).length;
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-400 to-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'text-zinc-400 hover:text-emerald-300 hover:bg-emerald-500/10'
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-zinc-950/20 text-zinc-900 font-bold'
                      : 'bg-carbon-card text-emerald-400/80 border border-emerald-500/20'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onActionToast={onActionToast}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
