import React, { useState } from 'react';
import FeaturedProjects from './FeaturedProjects';
import TechStackSkills from './TechStackSkills';
import EducationCampusJourney from './EducationCampusJourney';
import ContactSection from './ContactSection';

export const ShowcaseSections = () => {
  const [toastNotice, setToastNotice] = useState('');

  const triggerToast = (msg) => {
    setToastNotice(msg);
    setTimeout(() => setToastNotice(''), 4000);
  };

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-24 space-y-24">
      {/* Action Notification Toast */}
      {toastNotice && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-carbon-card border border-emerald-500/50 text-emerald-300 text-xs font-mono shadow-[0_0_25px_rgba(16,185,129,0.35)] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{toastNotice}</span>
        </div>
      )}

      {/* 1. FEATURED PROJECTS SHOWCASE (Directly below Hero section) */}
      <FeaturedProjects onActionToast={triggerToast} />

      {/* 2. TECH STACK & SKILLS (Directly below Projects) */}
      <TechStackSkills />

      {/* 3. EDUCATION & CAMPUS JOURNEY (Directly below Skills) */}
      <EducationCampusJourney />

      {/* 4. About Section */}
      <section id="about" className="scroll-mt-24 pt-6">
        <div className="p-8 sm:p-10 rounded-2xl bg-carbon-card/50 border border-emerald-500/20 backdrop-blur-md">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2">
            <span>04 //</span>
            <span>ABOUT SAMARTH</span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Driven Student Developer & Engineer</h2>
          <div className="grid md:grid-cols-3 gap-6 text-zinc-300 leading-relaxed">
            <div className="md:col-span-2 space-y-4">
              <p>
                I am currently a Computer Science & Engineering undergraduate student at KSIT (K.S. Institute of Technology). I love unraveling complex software problems and transforming creative concepts into clean, high-performance web products.
              </p>
              <p>
                My journey started with foundational programming and has rapidly evolved toward modern full-stack web engineering, algorithms, and artificial intelligence. When I am not coding, I participate in collegiate hackathons, explore open-source tech, and collaborate with peer developers on campus.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-carbon-dark/80 border border-emerald-500/20 font-mono text-xs space-y-2.5">
              <div className="text-emerald-400 font-bold">// QUICK SPEC SHEET</div>
              <div className="text-zinc-400">College: <span className="text-zinc-200">KSIT, Bengaluru</span></div>
              <div className="text-zinc-400">Cohort: <span className="text-lime-400">Class of 2029</span></div>
              <div className="text-zinc-400">Email: <span className="text-emerald-400">samarthp906@gmail.com</span></div>
              <div className="text-zinc-400">Status: <span className="text-lime-400">Seeking Internships & Open-Source</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GET IN TOUCH (Contact Section) */}
      <ContactSection />
    </div>
  );
};

export default ShowcaseSections;
