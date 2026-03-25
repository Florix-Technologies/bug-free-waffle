'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Capture',
    description:
      'High-resolution data collection using advanced sensor arrays and IoT devices deployed across your infrastructure.',
    icon: '📸',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    number: '02',
    title: 'Analyse',
    description:
      'Machine learning algorithms process millions of data points to identify patterns, anomalies, and actionable insights.',
    icon: '🔍',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    number: '03',
    title: 'Report',
    description:
      'Automated report generation with customizable dashboards, real-time alerts, and comprehensive visualization tools.',
    icon: '📊',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    number: '04',
    title: 'Perform',
    description:
      'Implement data-driven strategies with precision recommendations and continuous performance optimization.',
    icon: '🚀',
    color: 'from-green-500 to-emerald-500',
  },
];

export const ProcessAccordion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                A systematic approach to transforming raw data into actionable intelligence
              </p>
            </motion.div>

            {/* Right side - Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Step
                  key={step.id}
                  step={step}
                  index={index}
                  scrollProgress={scrollYProgress}
                  totalSteps={steps.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StepType {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const Step = ({
  step,
  index,
  scrollProgress,
  totalSteps,
}: {
  step: StepType;
  index: number;
  scrollProgress: MotionValue<number>;
  totalSteps: number;
}) => {
  const stepStart = index / totalSteps;
  const stepEnd = (index + 1) / totalSteps;

  const opacity = useTransform(
    scrollProgress,
    [stepStart - 0.1, stepStart, stepEnd, stepEnd + 0.1],
    [0.3, 1, 1, 0.3]
  );

  const scale = useTransform(
    scrollProgress,
    [stepStart - 0.1, stepStart, stepEnd, stepEnd + 0.1],
    [0.95, 1.05, 1.05, 0.95]
  );

  const x = useTransform(
    scrollProgress,
    [stepStart - 0.1, stepStart, stepEnd, stepEnd + 0.1],
    [20, 0, 0, 20]
  );

  return (
    <motion.div
      style={{ opacity, scale, x }}
      className="glass-card p-6 md:p-8 relative overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      {/* Number badge */}
      <div className="flex items-start gap-6">
        <motion.div
          className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {step.number}
        </motion.div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{step.icon}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {step.title}
            </h3>
          </div>
          <p className="text-gray-400 leading-relaxed">{step.description}</p>
        </div>
      </div>

      {/* Progress indicator */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color}`}
        style={{
          width: useTransform(
            scrollProgress,
            [stepStart, stepEnd],
            ['0%', '100%']
          ),
        }}
      />
    </motion.div>
  );
};
