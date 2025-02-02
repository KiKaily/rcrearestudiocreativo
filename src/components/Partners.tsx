import { motion } from "framer-motion";

const partners = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6",
  "Partner 7",
];

export const Partners = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          hemos trabajado con
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src="./leo_blanco.png"
                alt={partner}
                className="max-h-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="./roure_blanco.png"
                alt={partner}
                className="max-h-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="./begona_blanco.png"
                alt={partner}
                className="max-h-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="./cm_blanco.png"
                alt={partner}
                className="max-h-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="./ajuntament_blanco.png"
                alt={partner}
                className="max-h-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="./kunkoro_blanco.png"
                alt={partner}
                className="max-h-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
              <img
                src="./casita_blanco.png"
                alt={partner}
                className="max-h-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};