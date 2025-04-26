"use client";

import { motion } from "framer-motion";

export const Portfolio = () => {
  const projects = [
    { title: "Proyecto 1", image: "/project1.jpg" },
    { title: "Proyecto 2", image: "/project2.jpg" },
    { title: "Proyecto 3", image: "/project3.jpg" },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-white text-lg">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
