"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled || isOpen ? "backdrop-blur-md" : "backdrop-blur-sm"
      } transition-all duration-500`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white text-lg">
          <Link href="#portfolio" className="hover:underline">Portfolio</Link>
          <Link href="#team" className="hover:underline">Team</Link>
          <Link href="#partners" className="hover:underline">Partners</Link>
          <Link href="#contact" className="hover:underline">Contacto</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span> // X icon
          ) : (
            <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-black text-2xl z-40"
          >
            <Link href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="#team" onClick={() => setIsOpen(false)}>Team</Link>
            <Link href="#partners" onClick={() => setIsOpen(false)}>Partners</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contacto</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
