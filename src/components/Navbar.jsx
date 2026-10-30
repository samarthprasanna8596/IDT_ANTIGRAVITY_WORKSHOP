import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-carbon/80 backdrop-blur-xl border-emerald-500/25 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.12)] py-2.5 px-4 sm:px-6'
            : 'bg-carbon/50 backdrop-blur-md border-emerald-500/15 shadow-[0_8px_30px_rgba(0,0,0,0.4)] py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Name / Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-carbon-dark border border-emerald-500/30 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all duration-300">
              <span className="font-mono text-emerald-400 text-sm font-bold">&gt;_</span>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-base text-zinc-100 group-hover:text-emerald-300 transition-colors">
                SAMARTH<span className="text-emerald-400">.P</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-500/80 -mt-1 uppercase">
                CS @ KSIT
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-1.5 text-sm font-medium text-zinc-300 hover:text-emerald-300 rounded-lg hover:bg-emerald-500/10 transition-all duration-200 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-emerald-400 to-lime-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action / Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-mono font-medium text-emerald-300 border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-500/15 hover:border-emerald-400 transition-all duration-200 shadow-[0_0_12px_rgba(16,185,129,0.1)] hover:shadow-[0_0_16px_rgba(16,185,129,0.25)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LET'S CONNECT</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-emerald-500/25 bg-carbon-dark text-zinc-300 hover:text-emerald-300 hover:border-emerald-400 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-carbon-border/60 flex flex-col gap-1 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-emerald-500/60">&rarr;</span>
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-carbon-border/40 flex justify-center">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-xs font-mono font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 to-lime-400"
              >
                LET'S CONNECT // GET IN TOUCH
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

