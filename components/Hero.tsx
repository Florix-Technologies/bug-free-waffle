'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface PixelProps {
  pixel: {
    id: string;
    row: number;
    col: number;
  };
  scrollYProgress: MotionValue<number>;
}

const Pixel = ({ pixel, scrollYProgress }: PixelProps) => {
  const randomDelay = useMemo(() => Math.random() * 0.3, []);
  const fadeStart = randomDelay;
  const fadeEnd = fadeStart + 0.4;

  const opacity = useTransform(scrollYProgress, [fadeStart, fadeEnd], [1, 0]);

  return (
    <motion.div
      className="relative w-full h-full backdrop-blur-2xl border border-white/20 overflow-hidden group cursor-pointer"
      style={{
        opacity,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
        boxShadow: `
          inset 0 0 80px rgba(255, 255, 255, 0.08),
          inset 20px 20px 60px rgba(255, 255, 255, 0.05),
          inset -20px -20px 60px rgba(0, 0, 0, 0.1),
          0 0 20px rgba(255, 255, 255, 0.05)
        `,
      }}
      whileHover={{
        scale: 1.02,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        transition: { duration: 0.3 }
      }}
    >
      {/* Top light reflection */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Left edge highlight */}
      <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-white/20 to-transparent" />

      {/* Right edge shadow */}
      <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-black/10 to-transparent" />

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '12px 12px',
        }}
      />
    </motion.div>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 0.5, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Generate pixel grid - 6 cols x 4 rows
  const pixels = useMemo(() => {
    const cols = 6;
    const rows = 4;
    const pixelArray = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        pixelArray.push({
          id: `${row}-${col}`,
          row,
          col,
        });
      }
    }

    return pixelArray;
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: imageOpacity,
            y: imageY,
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)',
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/40 to-blue-900/60" />
        </motion.div>

        {/* Transparent Liquid Glass Pixel Grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
          {pixels.map((pixel) => (
            <Pixel key={pixel.id} pixel={pixel} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Initial Hero text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]),
          }}
        >
          <div className="text-center px-4 max-w-5xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight font-[family-name:var(--font-playfair)]">
              Are you stuck in the markets without knowing why?
            </h1>
          </div>
        </motion.div>

        {/* Reveal text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            opacity: useTransform(scrollYProgress, [0.4, 0.55, 0.85, 0.95], [0, 1, 1, 0]),
          }}
        >
          <div className="text-center px-4 max-w-5xl">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-2xl leading-tight font-[family-name:var(--font-playfair)]"
              style={{
                y: useTransform(scrollYProgress, [0.4, 0.6], [80, 0]),
              }}
            >
              You&apos;re not alone — and it&apos;s fixable
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white drop-shadow-lg leading-relaxed font-[family-name:var(--font-inter)]"
              style={{
                y: useTransform(scrollYProgress, [0.45, 0.65], [80, 0]),
              }}
            >
              15 years of CA-backed trading education,
              <br />
              built specifically for where you are right now.
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
          }}
        >
          <div className="flex flex-col items-center gap-2 text-white">
            <span className="text-sm uppercase tracking-wider drop-shadow-lg font-[family-name:var(--font-inter)]">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-white rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
