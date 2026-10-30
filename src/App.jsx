import React from 'react';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowcaseSections from './components/ShowcaseSections';
import Footer from './components/Footer';

export const App = () => {
  return (
    <div className="min-h-screen relative bg-carbon text-zinc-100 selection:bg-emerald-500/30 selection:text-lime-300">
      {/* Interactive Mouse Feature (Easter Egg: Cursor Follower & Trailing Light Spark) */}
      <CursorFollower />

      {/* Subtle Animated Matrix-Dot Grid on HTML5 Canvas */}
      <MatrixGridCanvas />

      {/* Cyber Vignette Overlay for Crisp Readability */}
      <div className="fixed inset-0 pointer-events-none z-[1] cyber-vignette opacity-70" />

      {/* Floating Frosted-Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ShowcaseSections />
      </main>

      {/* Clean Cyber-Emerald Footer */}
      <Footer />
    </div>
  );
};

export default App;
