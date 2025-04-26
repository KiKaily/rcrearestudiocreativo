"use client";

import { motion } from "framer-motion";

export const Partners = () => {
  return (
    <section id="partners" className="py-16 px-6 bg-black">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Example partner logos */}
        <img src="/partner1.png" alt="Partner 1" className="h-12 mx-auto opacity-80 hover:opacity-100 transition-opacity" />
        <img src="/partner2.png" alt="Partner 2" className="h-12 mx-auto opacity-80 hover:opacity-100 transition-opacity" />
        <img src="/partner3.png" alt="Partner 3" className="h-12 mx-auto opacity-80 hover:opacity-100 transition-opacity" />
        <img src="/partner4.png" alt="Partner 4" className="h-12 mx-auto opacity-80 hover:opacity-100 transition-opacity" />
      </motion.div>
    </section>
  );
};
