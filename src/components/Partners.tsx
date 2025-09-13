
import { motion } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";

const partners = [
  {
    name: "Leonardo Moscoso",
    image: "./leo_blanco.png",
    link: "https://www.leonardomoscoso.com/"
  },
  {
    name: "Cristina Minguillón",
    image: "./cm_blanco.png",
    link: "https://www.instagram.com/crisminguillon/"
  },
  {
    name: "Begoña González",
    image: "./begona_blanco.png",
    link: "https://www.instagram.com/begona_educacionviva/"
  },
  {
    name: "El Roure",
    image: "./roure_blanco.png",
    link: "https://www.elroure.org/es"
  },
  {
    name: "Ajuntament",
    image: "./ajuntament_blanco.png",
    link: "#"
  },
  {
    name: "Kun Koro",
    image: "./kunkoro_blanco.png",
    link: "https://kunkoro.kiwi/"
  },
  {
    name: "La Casita",
    image: "./casita_blanco.png",
    link: "#"
  },
  {
    name: "Maitashi Natural Care",
    image: "./maitashi_blanco.png",
    link: "https://www.instagram.com/maitashi.therapies/?locale=it"
  }
];

export const Partners = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          hemos trabajado con
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square flex items-center justify-center p-4"
            >
              <a 
                href={partner.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105 w-full h-full flex items-center justify-center"
              >
                <OptimizedImage
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
