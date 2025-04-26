"use client";

import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-transparent backdrop-blur-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-white text-lg font-bold tracking-widest hover:scale-105 transition-transform cursor-pointer">
        RCREAR
      </div>

      <nav className="hidden md:flex space-x-8 text-white text-sm tracking-wide">
        <a href="#portfolio" className="hover:opacity-80 transition-opacity">
          Portfolio
        </a>
        <a href="#team" className="hover:opacity-80 transition-opacity">
          Equipo
        </a>
        <a href="#contact" className="hover:opacity-80 transition-opacity">
          Contacto
        </a>
      </nav>
    </motion.header>
  );
};
