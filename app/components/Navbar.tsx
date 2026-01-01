'use client';

import { useState, useEffect } from 'react';
import { FadeContent } from '@appletosolutions/reactbits';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <FadeContent duration={500}>
            <a href="#" className="text-2xl font-bold text-white -ml-2 md:ml-0">
              Portfolio
            </a>
          </FadeContent>

          <FadeContent duration={500} delay={200}>
            <div className="hidden md:flex gap-6">
              <a
                href="#about"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Contacts
              </a>
            </div>
          </FadeContent>
        </div>
      </div>
    </nav>
  );
}

