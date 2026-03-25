'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';

const metrics = [
  {
    id: 1,
    label: 'Turf Quality Index',
    value: 69,
    suffix: '%',
    color: 'from-blue-500 to-cyan-500',
    icon: '🌱',
  },
  {
    id: 2,
    label: 'Coverage Accuracy',
    value: 98,
    suffix: '%',
    color: 'from-green-500 to-emerald-500',
    icon: '🎯',
  },
  {
    id: 3,
    label: 'Response Time',
    value: 247,
    suffix: 'ms',
    color: 'from-purple-500 to-pink-500',
    icon: '⚡',
  },
  {
    id: 4,
    label: 'Data Points Analyzed',
    value: 15,
    suffix: 'M+',
    color: 'from-orange-500 to-red-500',
    icon: '📈',
  },
  {
    id: 5,
    label: 'System Uptime',
    value: 99.9,
    suffix: '%',
    color: 'from-indigo-500 to-blue-500',
    icon: '⏱️',
  },
  {
    id: 6,
    label: 'Active Sensors',
    value: 1247,
    suffix: '',
    color: 'from-teal-500 to-green-500',
    icon: '📡',
  },
];

export const DataCounters = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Performance Metrics
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time performance indicators showcasing our system&apos;s capabilities
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.id} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface MetricType {
  id: number;
  label: string;
  value: number;
  suffix: string;
  color: string;
  icon: string;
}

const MetricCard = ({ metric, index }: { metric: MetricType; index: number }) => {
  const { ref, count } = useCountUp(metric.value, 2500);

  return (
    <motion.div
      ref={ref}
      className="glass-card p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Icon */}
      <motion.div
        className="text-5xl mb-4"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {metric.icon}
      </motion.div>

      {/* Counter */}
      <div className="relative z-10 mb-4">
        <motion.div
          className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
        >
          {count}
          {metric.suffix}
        </motion.div>
      </div>

      {/* Label */}
      <div className="text-gray-400 text-lg font-medium">{metric.label}</div>

      {/* Animated border */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${metric.color}`}
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
      />

      {/* Pulsing indicator */}
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};
