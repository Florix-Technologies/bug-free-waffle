'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export const LiquidNavbar = () => {
  const { scrollY } = useScroll();

  // Move navbar fully to the right side on scroll
  const x = useTransform(scrollY, [0, 500], ['0%', 'calc(100vw - 100px)']);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 100, 500], [1, 1, 0.98]);

  // Hide links and divider when scrolling
  const linksOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const linksWidth = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.nav
      className="fixed top-6 left-0 z-50"
      style={{
        x,
        scale,
        opacity,
      }}
      initial={{ y: 0 }}
      transition={{ ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Dark glass morphism background with teal tint */}
      <motion.div
        className="relative backdrop-blur-xl bg-[#133336]/40 border border-[#367D8A]/30 rounded-full px-8 py-4 shadow-2xl overflow-hidden"
      >
        {/* Liquid shimmer effect with teal color */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#367D8A]/20 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Subtle teal glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#367D8A]/10 to-transparent rounded-full" />

        {/* Navbar content */}
        <div className="relative z-10 flex items-center gap-8">
          {/* Bold S Logo - Always visible */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 relative">
              <Image
                src="/bold-logo.svg"
                alt="Bold Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-semibold text-lg">Bold</span>
          </motion.div>

          {/* Divider - Fades out */}
          <motion.div
            className="w-px h-6 bg-[#367D8A]/40"
            style={{
              opacity: linksOpacity,
              scaleX: linksWidth,
            }}
          />

          {/* Navigation links - Fade out when scrolling */}
          <motion.div
            className="flex items-center gap-6 overflow-hidden"
            style={{
              opacity: linksOpacity,
              width: useTransform(linksWidth, [0, 1], [0, 200]),
            }}
          >
            <a
              href="#home"
              className="text-white/90 hover:text-[#367D8A] transition-colors text-sm font-medium whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#webinars"
              className="text-white/90 hover:text-[#367D8A] transition-colors text-sm font-medium whitespace-nowrap"
            >
              Webinars
            </a>
          </motion.div>
        </div>

        {/* Bottom glow line with teal color */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#367D8A]/40 to-transparent" />
      </motion.div>
    </motion.nav>
  );
};
