'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// Green and complementary color palette
const colorPalette = [
  '#F0FFF4', // Very light mint
  '#E6F9F0', // Light mint
  '#C6F6D5', // Lighter green
  '#9AE6B4', // Light green
  '#68D391', // Medium light green
  '#48BB78', // Fresh green
  '#38A169', // Medium green
  '#2F855A', // Dark green
  '#276749', // Very dark green
  '#22543D', // Deep green
  '#1C4532', // Almost black green
  '#14362A', // Darkest green
];

interface PixelProps {
  pixel: {
    id: string;
    color: string;
    colorIndex: number;
    row: number;
    col: number;
  };
  scrollYProgress: MotionValue<number>;
}

const Pixel = ({ pixel, scrollYProgress }: PixelProps) => {
  const fadeStart = pixel.colorIndex * 0.05;
  const fadeEnd = fadeStart + 0.25;

  const opacity = useTransform(scrollYProgress, [fadeStart, fadeEnd], [1, 0]);
  const blur = useTransform(scrollYProgress, [fadeStart, fadeEnd], [6, 0]);
  const scale = useTransform(scrollYProgress, [fadeStart, fadeStart + 0.1], [1, 1.03]);

  return (
    <motion.div
      key={pixel.id}
      className="relative w-full h-full backdrop-blur-2xl border border-white/30 overflow-hidden group cursor-pointer"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        opacity,
        filter: `blur(${blur}px)`,
        scale,
        boxShadow: `
          inset 0 0 80px rgba(255, 255, 255, 0.2),
          inset 0 0 40px rgba(255, 255, 255, 0.15),
          0 0 12px rgba(255, 255, 255, 0.1),
          inset -4px -4px 20px rgba(0, 0, 0, 0.1)
        `,
      }}
      whileHover={{
        scale: 1.08,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      transition={{
        scale: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
      }}
    >
      {/* Full liquid glass effect with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/15 to-transparent" />

      {/* Top shine for glass effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

      {/* Bottom shadow for depth */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/15 to-transparent" />

      {/* Left edge highlight */}
      <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-white/20 to-transparent" />

      {/* Animated shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Frosted texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
        backgroundSize: '8px 8px',
      }} />

      {/* Logo container - business consultancy logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <motion.div
          className="w-16 h-16 flex items-center justify-center"
          initial={{ scale: 0, rotate: -45 }}
          whileHover={{ scale: 1.1, rotate: 0 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          <img
            src="/consultancy-logo.svg"
            alt="Consultancy Logo"
            className="w-full h-full object-contain drop-shadow-lg filter brightness-110"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const HeroPixelReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smoother transformations with 3D parallax
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 0.5, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.8], [1.3, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]);
  const imageRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -3, 0]);

  // Generate pixel grid - Bigger pixels
  const pixels = useMemo(() => {
    const cols = 6;
    const rows = 4;
    const pixelArray = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const colorIndex = Math.floor(Math.random() * colorPalette.length);
        const color = colorPalette[colorIndex];

        pixelArray.push({
          id: `${row}-${col}`,
          color,
          colorIndex,
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
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black" style={{ perspective: "1200px" }}>
        {/* Background image with 3D parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            scale: imageScale,
            opacity: imageOpacity,
            y: imageY,
            rotateX: imageRotateX,
            rotateY: imageRotateY,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)',
            }}
          />
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        </motion.div>

        {/* Smooth Pixel Grid with Liquid Glass Effect - Bigger pixels */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-4" style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
        }}>
          {pixels.map((pixel) => (
            <Pixel key={pixel.id} pixel={pixel} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Initial Hero text - fades out slowly */}
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

        {/* New text that appears when background reveals - Much slower */}
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
              transition={{ ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              You&apos;re not alone — and it&apos;s fixable
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-white drop-shadow-lg leading-relaxed font-[family-name:var(--font-inter)]"
              style={{
                y: useTransform(scrollYProgress, [0.45, 0.65], [80, 0]),
              }}
              transition={{ ease: [0.43, 0.13, 0.23, 0.96] }}
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
