import React, { useState, useRef } from 'react';

/**
 * Interactive 3D Perspective Tilt Project Card
 * Physics:
 * - Dark glass panel with thin emerald border (border-emerald-500/20)
 * - 3D perspective tilt effect dynamically mapped to cursor position
 * - Smooth lift on hover (translateY(-6px))
 * - Soft neon emerald glow around edges
 * - Sleek cursor-tracking shine & glare reflection
 */
export const ProjectCard = ({ project, onActionToast }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    translateY: 0,
    scale: 1,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [glare, setGlare] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D angular rotation (-8deg to +8deg)
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      rotateX: Number(rotateX.toFixed(2)),
      rotateY: Number(rotateY.toFixed(2)),
      translateY: -6,
      scale: 1.02,
    });
    setGlare({ opacity: 1, x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, translateY: 0, scale: 1 });
    setGlare({ opacity: 0, x: 50, y: 50 });
  };

  const handleLinkClick = (e, type, url) => {
    e.preventDefault();
    if (onActionToast) {
      onActionToast(`${type} for "${project.title}" clicked! [${url}]`);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(${tilt.translateY}px) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
        transition: isHovered
          ? 'transform 0.08s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease',
      }}
      className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-carbon-card/75 backdrop-blur-xl border transition-all duration-300 will-change-transform overflow-hidden ${
        isHovered
          ? 'border-emerald-500/60 shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.25)]'
          : 'border-emerald-500/20 shadow-[0_10px_25px_rgba(0,0,0,0.5)]'
      }`}
    >
      {/* 1. Sleek Interactive Shine Overlay (Tracks cursor position) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 260px at ${glare.x}% ${glare.y}%, rgba(16, 185, 129, 0.22), rgba(163, 230, 53, 0.08), transparent 70%)`,
        }}
      />

      {/* 2. Top Edge Neon Emerald Glow Line */}
      <div className="pointer-events-none absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Upper Content */}
      <div className="relative z-10 flex flex-col">
        {/* Header: Category Badge & Project Index */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-carbon-dark/90 border border-emerald-500/25 text-emerald-400 group-hover:border-emerald-400/50 transition-colors">
            {project.categoryBadge}
          </span>
          <span className="font-mono text-xs text-zinc-500 group-hover:text-lime-400 transition-colors">
            // 0{project.id}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-3 tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-6">
          {project.description}
        </p>
      </div>

      {/* Card Lower Content: Tech Badges & Action Buttons */}
      <div className="relative z-10 pt-5 border-t border-carbon-border/70 flex flex-col gap-5">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2">
          {project.techBadges.map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-carbon-dark/90 text-emerald-300/90 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Action Buttons: Live Demo & GitHub Code */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {/* Live Demo Button */}
          <a
            href={project.demoUrl}
            onClick={(e) => handleLinkClick(e, 'Live Demo', project.demoUrl)}
            className="group/btn inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 bg-gradient-to-r from-emerald-400 to-lime-400 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_24px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Live Demo</span>
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* GitHub Code Button */}
          <a
            href={project.codeUrl}
            onClick={(e) => handleLinkClick(e, 'GitHub Code', project.codeUrl)}
            className="group/btn inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium text-emerald-300 border border-emerald-500/30 bg-carbon-dark/80 hover:bg-emerald-500/10 hover:border-emerald-400 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-lime-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

