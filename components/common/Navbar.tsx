'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Bold
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/webinars"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Webinars
            </Link>
            <Link
              href="/courses"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/business"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Business
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
