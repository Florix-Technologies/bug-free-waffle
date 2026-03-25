'use client';

import { useEffect, useState } from 'react';

export const useScrollProgress = (start: number, end: number) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const startPoint = start * viewportHeight;
      const endPoint = end * viewportHeight;

      if (scrollY < startPoint) {
        setProgress(0);
      } else if (scrollY > endPoint) {
        setProgress(1);
      } else {
        const progress = (scrollY - startPoint) / (endPoint - startPoint);
        setProgress(progress);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [start, end]);

  return progress;
};
