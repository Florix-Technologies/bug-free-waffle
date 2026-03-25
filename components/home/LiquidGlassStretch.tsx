'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const LiquidGlassStretch = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Stretch from top to bottom as user scrolls
  const height = useTransform(scrollYProgress, [0, 0.8], ['0vh', '100vh']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [20, 0, 0, 10]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Sticky container for the stretch effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] md:w-[60vw] lg:w-[50vw]"
          style={{
            height,
            opacity,
            filter: `blur(${blur}px)`,
          }}
        >
          {/* Main liquid glass panel */}
          <div className="relative w-full h-full">
            {/* Glass effect with gradient */}
            <div
              className="absolute inset-0 rounded-3xl backdrop-blur-3xl border border-white/30"
              style={{
                background: `
                  linear-gradient(135deg,
                    rgba(255, 255, 255, 0.15) 0%,
                    rgba(255, 255, 255, 0.08) 25%,
                    rgba(255, 255, 255, 0.12) 50%,
                    rgba(255, 255, 255, 0.05) 75%,
                    rgba(255, 255, 255, 0.1) 100%
                  )
                `,
                boxShadow: `
                  inset 0 0 100px rgba(255, 255, 255, 0.2),
                  inset 0 0 50px rgba(255, 255, 255, 0.15),
                  0 0 80px rgba(255, 255, 255, 0.1),
                  0 20px 60px rgba(0, 0, 0, 0.3)
                `,
              }}
            >
              {/* Top shine */}
              <div
                className="absolute top-0 left-0 w-full h-1/3 rounded-t-3xl"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)',
                }}
              />

              {/* Left edge highlight */}
              <div
                className="absolute left-0 top-0 w-1/4 h-full rounded-l-3xl"
                style={{
                  background: 'linear-gradient(to right, rgba(255, 255, 255, 0.25), transparent)',
                }}
              />

              {/* Right edge shadow */}
              <div
                className="absolute right-0 top-0 w-1/4 h-full rounded-r-3xl"
                style={{
                  background: 'linear-gradient(to left, rgba(0, 0, 0, 0.15), transparent)',
                }}
              />

              {/* Bottom shadow */}
              <div
                className="absolute bottom-0 left-0 w-full h-1/3 rounded-b-3xl"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)',
                }}
              />

              {/* Frosted glass texture */}
              <div
                className="absolute inset-0 opacity-40 rounded-3xl"
                style={{
                  backgroundImage: `radial-gradient(circle at 3px 3px, rgba(255, 255, 255, 0.3) 1.5px, transparent 0)`,
                  backgroundSize: '12px 12px',
                }}
              />

              {/* Liquid distortion effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `
                    radial-gradient(ellipse at top, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0.2) 0%, transparent 50%)
                  `,
                }}
                animate={{
                  backgroundPosition: ['0% 0%, 0% 100%', '100% 0%, 100% 100%', '0% 0%, 0% 100%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Flowing shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                }}
                animate={{
                  y: ['-100%', '200%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glowing edges */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  boxShadow: `
                    inset 0 0 60px rgba(255, 255, 255, 0.15),
                    0 0 40px rgba(255, 255, 255, 0.08)
                  `,
                }}
              />
            </div>

            {/* Additional glass layers for depth */}
            <motion.div
              className="absolute inset-4 rounded-2xl backdrop-blur-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                boxShadow: 'inset 0 0 40px rgba(255, 255, 255, 0.1)',
              }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
