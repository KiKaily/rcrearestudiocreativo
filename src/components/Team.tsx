"use client";

import { motion } from "framer-motion";

export const Team = () => {
  const members = [
    { name: "Persona 1", role: "Diseñador", image: "/team1.jpg" },
    { name: "Persona 2", role: "Fotógrafo", image: "/team2.jpg" },
    { name: "Persona 3", role: "Desarrollador", image: "/team3.jpg" },
  ];

  return (
    <section id="team" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full mx-auto object-cover mb-4 hover:scale-110 transition-transform"
            />
            <h4 className="text-lg font-semibold">{member.name}</h4>
            <p className="text-sm opacity-70">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
