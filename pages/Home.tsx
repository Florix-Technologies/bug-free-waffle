'use client';

import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Hero Section with Transparent Liquid Glass Pixels */}
      <Hero />

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description: "Learn from CA professionals with 15+ years of trading experience",
                icon: "📊"
              },
              {
                title: "Proven Methods",
                description: "Time-tested strategies backed by accounting principles",
                icon: "✅"
              },
              {
                title: "Personal Support",
                description: "One-on-one mentoring to accelerate your learning",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
                style={{
                  boxShadow: `
                    inset 0 0 40px rgba(255, 255, 255, 0.03),
                    0 10px 30px rgba(0, 0, 0, 0.2)
                  `,
                }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-3xl p-12 md:p-16"
            style={{
              boxShadow: `
                inset 0 0 60px rgba(255, 255, 255, 0.05),
                0 20px 60px rgba(0, 0, 0, 0.3)
              `,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "5000+", label: "Students Taught" },
                { value: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl"
            style={{
              boxShadow: `
                inset 0 0 60px rgba(255, 255, 255, 0.05),
                0 20px 60px rgba(0, 0, 0, 0.3)
              `,
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community and start your journey to financial freedom today.
            </p>
            <motion.button
              className="px-10 py-5 backdrop-blur-xl bg-gradient-to-r from-blue-500/80 to-cyan-500/80 border border-white/20 text-white font-semibold rounded-full text-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
