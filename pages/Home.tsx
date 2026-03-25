'use client';

import { Hero } from '@/components/Hero';
import { StickyBackground } from '@/components/StickyBackground';
import { DataHotspots } from '@/components/DataHotspots';
import { ProcessAccordion } from '@/components/ProcessAccordion';
import { DataCounters } from '@/components/DataCounters';
import { Testimonials } from '@/components/Testimonials';
import { SmoothScroll } from '@/components/SmoothScroll';
import { LiquidNavbar } from '@/components/LiquidNavbar';
import { LiquidGlassStretch } from '@/components/LiquidGlassStretch';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <SmoothScroll>
      <LiquidNavbar />
      <main className="relative bg-black">
        {/* Hero Section with Pixel Reveal */}
        <Hero />

        {/* Liquid Glass Stretch Effect */}
        <LiquidGlassStretch />

        {/* Sticky Background with Floating Cards */}
        <StickyBackground />

        {/* Data Hotspots Section */}
        <DataHotspots />

        {/* Process Accordion Section */}
        <ProcessAccordion />

        {/* Data Counters Section */}
        <DataCounters />

        {/* Testimonials Slideshow */}
        <Testimonials />

        {/* Footer CTA Section */}
        <section className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Join thousands of organizations leveraging cutting-edge analytics
                to drive unprecedented growth and efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-20">
                {[
                  { value: '500+', label: 'Enterprise Clients' },
                  { value: '99.9%', label: 'Uptime Guarantee' },
                  { value: '24/7', label: 'Expert Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Animated background elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
