import React, { useEffect, useRef } from 'react';

/**
 * Interactive Matrix-Dot Grid Background
 * Renders an animated canvas grid with wave dynamics that reacts to mouse hover and ripples.
 */
export const MatrixGridCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isHovered: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
        mouseRef.current.isHovered = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove);

    // Grid spacing & physics config
    const spacing = 34; // Distance between matrix dots
    let time = 0;

    const render = () => {
      time += 0.025;

      // Smooth lag / interpolation towards mouse target
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const maxDist = 180; // Proximity ripple radius

      const activeDots = [];

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * spacing;
          const baseY = j * spacing;

          // Continuous wave oscillation
          const wave = Math.sin(i * 0.2 + time) * Math.cos(j * 0.2 + time) * 3;

          // Vector distance to mouse
          const dx = mouseX - baseX;
          const dy = mouseY - baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let posX = baseX;
          let posY = baseY + wave;
          let radius = 1.25;
          let alpha = 0.14;
          let isLime = false;

          if (dist < maxDist) {
            const influence = 1 - dist / maxDist; // Normalized 0 to 1
            const ripple = Math.sin(dist * 0.08 - time * 3) * influence * 8;
            const angle = Math.atan2(dy, dx);

            // Subtle repelling effect & wave displacement
            posX -= Math.cos(angle) * influence * 12;
            posY -= Math.sin(angle) * influence * 12 + ripple;

            radius = 1.25 + influence * 3.2;
            alpha = 0.18 + influence * 0.82;
            if (influence > 0.4) isLime = true;

            activeDots.push({ x: posX, y: posY, alpha, influence });
          }

          // Render dot
          ctx.beginPath();
          ctx.arc(posX, posY, radius, 0, Math.PI * 2);
          if (isLime) {
            ctx.fillStyle = `rgba(163, 230, 53, ${alpha})`; // Bright lime accent
          } else {
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`; // Neon emerald accent
          }
          ctx.fill();
        }
      }

      // Render delicate connecting lines between nearest active dots
      if (activeDots.length > 1) {
        ctx.lineWidth = 0.75;
        for (let a = 0; a < activeDots.length; a++) {
          for (let b = a + 1; b < activeDots.length; b++) {
            const dotA = activeDots[a];
            const dotB = activeDots[b];
            const d = Math.hypot(dotA.x - dotB.x, dotA.y - dotB.y);
            if (d < 45) {
              const lineAlpha = (1 - d / 45) * dotA.influence * 0.35;
              ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(dotA.x, dotA.y);
              ctx.lineTo(dotB.x, dotB.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default MatrixGridCanvas;

