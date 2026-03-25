'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const cards = [
  {
    title: 'Real-Time Analytics',
    description: 'Process millions of data points in real-time with advanced AI algorithms',
    delay: 0,
    speed: 0.3,
  },
  {
    title: 'Predictive Intelligence',
    description: 'Forecast trends and patterns before they emerge with machine learning',
    delay: 0.1,
    speed: 0.5,
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your existing tools and workflows effortlessly',
    delay: 0.2,
    speed: 0.4,
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with global security standards',
    delay: 0.3,
    speed: 0.6,
  },
];

export const StickyBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Pinned background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop)',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Floating cards container */}
        <div className="relative h-full w-full flex items-end justify-center pb-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              style={{
                y: useTransform(scrollYProgress, [0, 1], [400, -200]),
              }}
            >
              {cards.map((card, index) => (
                <FloatingCard
                  key={index}
                  {...card}
                  scrollProgress={scrollYProgress}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingCard = ({
  title,
  description,
  scrollProgress,
  index,
}: {
  title: string;
  description: string;
  delay: number;
  speed: number;
  scrollProgress: MotionValue<number>;
  index: number;
}) => {
  const y = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [100 + index * 50, 0, -100 - index * 30]
  );
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
      <div className="mt-6 flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">
        <span className="text-sm font-semibold">Learn more</span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </motion.div>
  );
};
