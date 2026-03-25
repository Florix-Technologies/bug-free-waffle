'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const hotspots = [
  {
    id: 1,
    title: 'Surface Analysis',
    value: '99.2%',
    metric: 'Coverage',
    position: { top: '20%', left: '15%' },
    delay: 0,
  },
  {
    id: 2,
    title: 'Moisture Detection',
    value: '12.4mm',
    metric: 'Average Depth',
    position: { top: '40%', right: '20%' },
    delay: 0.2,
  },
  {
    id: 3,
    title: 'Density Mapping',
    value: '847 kg/m³',
    metric: 'Compaction',
    position: { bottom: '25%', left: '25%' },
    delay: 0.4,
  },
  {
    id: 4,
    title: 'Temperature Variance',
    value: '21.3°C',
    metric: 'Optimal Range',
    position: { top: '60%', right: '15%' },
    delay: 0.6,
  },
];

export const DataHotspots = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative h-screen">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2187&auto=format&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />

        {/* Hotspots */}
        <div className="relative h-full w-full">
          {hotspots.map((hotspot) => (
            <Hotspot key={hotspot.id} {...hotspot} />
          ))}
        </div>

        {/* Title overlay */}
        <motion.div
          className="absolute top-10 left-10 right-10 md:left-20 md:right-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Live Data Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            Real-time scanning and analysis of critical environmental metrics
          </p>
        </motion.div>
      </div>
    </div>
  );
};

interface PositionType {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const Hotspot = ({
  title,
  value,
  metric,
  position,
  delay,
}: {
  title: string;
  value: string;
  metric: string;
  position: PositionType;
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="absolute"
      style={position}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        inView
          ? {
              opacity: [0, 0.3, 1, 0.3, 1],
              scale: [0.8, 0.9, 1],
            }
          : {}
      }
      transition={{
        duration: 0.6,
        delay,
        times: [0, 0.2, 0.4, 0.6, 1],
      }}
    >
      <motion.div
        className="glass-card scanning-box glow-border p-4 min-w-[200px]"
        whileHover={{ scale: 1.05 }}
      >
        {/* Pulsing dot indicator */}
        <div className="absolute -top-2 -right-2 flex items-center justify-center">
          <motion.div
            className="w-3 h-3 bg-blue-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute w-6 h-6 border-2 border-blue-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="text-xs uppercase tracking-wider text-blue-400 mb-2">
          {title}
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-400">{metric}</div>

        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg"
          animate={{
            background: [
              'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
            ],
          }}
        >
          <motion.div
            className="w-full h-full"
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)',
              height: '50%',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Connecting line */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-12 bg-blue-500/50"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ delay: delay + 0.3, duration: 0.3 }}
        style={{ transformOrigin: 'top' }}
      />
    </motion.div>
  );
};
