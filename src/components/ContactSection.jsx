import React, { useState, useRef } from 'react';

/**
 * Magnetic Button with physics translation on mouse hover
 */
const MagneticButton = ({ children, className = '', href, ...props }) => {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 && offset.y === 0 ? 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.08s ease-out',
      }}
      className={`inline-flex items-center justify-center will-change-transform ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: 'Samarth',
    email: 'samarthp906@gmail.com',
    message: 'Ready to build',
  });
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'sent'
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitStatus === 'submitting') return;

    setSubmitStatus('submitting');
    setTimeout(() => {
      setSubmitStatus('sent');
      setToastMessage('Message transmitted successfully! I will reach out soon.');

      // Reset feedback after a few seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 4500);
    }, 1200);
  };

  return (
    <section id="contact" className="scroll-mt-24 pt-4">
      <div className="relative rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-carbon-card/90 via-carbon-card/70 to-carbon-dark border border-emerald-500/30 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(16,185,129,0.12)] overflow-hidden">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-0 right-1/4 w-80 h-40 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-36 bg-lime-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-carbon-dark/80 border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>05 // INITIATE TRANSMISSION</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
            Let’s Collaborate & Build
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed mb-10">
            Open for summer internships, open-source projects, or tech chats. Drop me a message!
          </p>

          {/* Interactive Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Samarth"
                  className="w-full px-4 py-3 rounded-xl bg-carbon-dark/90 border border-emerald-500/25 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 font-mono text-sm transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="samarthp906@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-carbon-dark/90 border border-emerald-500/25 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 font-mono text-sm transition-all"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                Message / Project Scope
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Ready to build"
                className="w-full px-4 py-3 rounded-xl bg-carbon-dark/90 border border-emerald-500/25 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 font-mono text-sm transition-all resize-none"
              />
            </div>

            {/* Submit Button with Animated Emerald Spinner & Success Feedback */}
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className={`relative min-w-[220px] inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold font-mono text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 active:translate-y-0 ${
                  submitStatus === 'sent'
                    ? 'bg-emerald-500 text-zinc-950 border border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.7)]'
                    : 'bg-gradient-to-r from-emerald-400 via-emerald-500 to-lime-400 text-zinc-950 hover:shadow-[0_0_40px_rgba(16,185,129,0.65)]'
                }`}
              >
                {submitStatus === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4 text-zinc-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}

                {submitStatus === 'submitting' && (
                  <>
                    {/* Emerald Loading Spinner */}
                    <svg className="animate-spin w-4 h-4 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Transmitting...</span>
                  </>
                )}

                {submitStatus === 'sent' && (
                  <>
                    <span>Message Sent! 🚀</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Feedback Toast */}
          {toastMessage && (
            <div className="mt-4 px-4 py-2 rounded-xl bg-carbon-dark border border-emerald-500/40 text-emerald-300 text-xs font-mono shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              {toastMessage}
            </div>
          )}

          {/* Divider */}
          <div className="w-full my-8 border-t border-emerald-500/15" />

          {/* Direct Links with Magnetic Hover Effect */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              // Direct Connectivity Nodes
            </span>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* GitHub Magnetic Link */}
              <MagneticButton
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group px-5 py-3 rounded-xl bg-carbon-dark/90 border border-emerald-500/25 hover:border-emerald-400 text-zinc-300 hover:text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <svg className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </div>
              </MagneticButton>

              {/* LinkedIn Magnetic Link */}
              <MagneticButton
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group px-5 py-3 rounded-xl bg-carbon-dark/90 border border-emerald-500/25 hover:border-emerald-400 text-zinc-300 hover:text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <svg className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </div>
              </MagneticButton>

              {/* Email Magnetic Link */}
              <MagneticButton
                href="mailto:samarthp906@gmail.com"
                className="group px-5 py-3 rounded-xl bg-carbon-dark/90 border border-emerald-500/25 hover:border-emerald-400 text-zinc-300 hover:text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <svg className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>samarthp906@gmail.com</span>
                </div>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

