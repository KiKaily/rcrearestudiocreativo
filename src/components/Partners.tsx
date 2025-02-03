import { motion } from "framer-motion";

const partners = [
  {
    name: "Leonardo Moscoso",
    image: "./leo_blanco.png"
  },
  {
    name: "El Roure",
    image: "./roure_blanco.png"
  },
  {
    name: "Begoña González",
    image: "./begona_blanco.png"
  },
  {
    name: "Cristina Minguillón",
    image: "./cm_blanco.png"
  },
  {
    name: "Ajuntament",
    image: "./ajuntament_blanco.png"
  },
  {
    name: "Kun Koro",
    image: "./kunkoro_blanco.png"
  },
  {
    name: "La Casita",
    image: "./casita_blanco.png"
  }
];

export const Partners = () => {
  return (
    <section id="Partners" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#443427" }}>
          hemos trabajado con
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};