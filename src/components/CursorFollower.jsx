import React, { useEffect, useRef } from 'react';

/**
 * Interactive Mouse Feature (Easter Egg)
 * A subtle custom cursor follower with gentle trailing light spark physics.
 * Lerps smoothly across the viewport, completely pointer-events-none.
 */
export const CursorFollower = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId;
    let isVisible = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current && ringRef.current) {
          dotRef.current.style.opacity = '1';
          ringRef.current.style.opacity = '1';
        }
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.opacity = '0';
        ringRef.current.style.opacity = '0';
      }
    };

    const animate = () => {
      // Smooth linear interpolation for trailing light ring
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Outer trailing luminous emerald aura */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-emerald-400/40 bg-emerald-500/10 shadow-[0_0_18px_rgba(16,185,129,0.35)] z-50 opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />
      {/* Inner trailing spark */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-lime-300 shadow-[0_0_10px_#a3e635] z-50 opacity-0 transition-opacity duration-200"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CursorFollower;

