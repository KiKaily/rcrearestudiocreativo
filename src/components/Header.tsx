'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${isScrolled || isOpen ? 'bg-white/10 backdrop-blur-md' : 'bg-transparent'}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white text-lg">
          <a href="#Portfolio" className="hover:underline">portfolio</a>
          <a href="#PhotoGallery" className="hover:underline">foto</a>
          <a href="#VideoPortfolio" className="hover:underline">video</a>
          <a href="#Team" className="hover:underline">nosotros</a>
          <a href="#Partners" className="hover:underline">hemos trabajado con</a>
          <a href="#Footer" className="hover:underline">contacto</a>

        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none z-[70] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-3xl">
            {isOpen ? '×' : (
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </span>
        </button>
      </div>

      {/* Blur Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="blur-overlay"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/30 z-40"
            style={{ WebkitBackdropFilter: 'blur(12px)' }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, backgroundColor: 'rgba(255, 255, 255, 0)' }}
            animate={{ opacity: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
            exit={{ opacity: 0, backgroundColor: 'rgba(255, 255, 255, 0)' }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex flex-col items-center justify-center space-y-8 text-black text-2xl z-[60]"
          >
            <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#team" onClick={() => setIsOpen(false)}>Team</a>
            <a href="#partners" onClick={() => setIsOpen(false)}>Partners</a>
            <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
