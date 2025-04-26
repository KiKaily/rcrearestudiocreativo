"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="w-full text-white text-center py-8 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <p className="text-sm mb-2">&copy; {new Date().getFullYear()} RCREAR Estudio Creativo</p>
      <p className="text-xs opacity-50">Diseño gráfico, web, fotografía y video</p>
    </motion.footer>
  );
};
