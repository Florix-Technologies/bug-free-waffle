'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "This tool has given us the insights we never thought were possible in our trading strategy.",
    author: "Sarah Johnson",
    role: "Senior Trader & Portfolio Manager",
    avatar: "SJ",
  },
  {
    id: 2,
    quote: "What a fantastic AI! It has completely transformed the way I approach problems and develop solutions.",
    author: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    avatar: "MA",
  },
  {
    id: 3,
    quote: "I made a leap with the help of this platform, it was so easy to use. I'm so glad this happened because it revolutionized my business model and production process.",
    author: "Tyler Durden",
    role: "Creative Director & Business Owner",
    avatar: "TD",
  },
  {
    id: 4,
    quote: "My trading has become truly professional. It's revolutionized my problem-solving and decision-making process.",
    author: "Michael Chen",
    role: "Quantitative Analyst",
    avatar: "MC",
  },
  {
    id: 5,
    quote: "The results are always impressive. This platform has helped us to not only meet but exceed our performance targets.",
    author: "Jack Brown",
    role: "Performance Manager",
    avatar: "JB",
  },
  {
    id: 6,
    quote: "The efficiency it brings is unmatched. It has helped us cut costs and improve our operations significantly.",
    author: "Eva Green",
    role: "Operations Director",
    avatar: "EG",
  },
];

export const TestimonialsSlideshow = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#133336] via-[#1a2332] to-black py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #367D8A 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Used by traders around the world
          </h2>
          <p className="text-xl text-gray-400 font-[family-name:var(--font-inter)]">
            Everyone uses our product, except for the people who don&apos;t use it.
          </p>
        </motion.div>

        {/* Infinite Scrolling Testimonials */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * testimonials.length / 3 + '%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group relative flex-shrink-0 w-[350px]"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Quote */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed font-[family-name:var(--font-inter)] min-h-[120px]">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#367D8A] to-[#285F6B] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Accent border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#367D8A] to-[#285F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
