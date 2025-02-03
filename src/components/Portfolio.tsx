import { motion } from "framer-motion";

const projects = [
  {
    title: "Leonardo Moscoso",
    description: "diseño de marca, web, redes sociales",
    image: "./leonardo.png",
  },
  {
    title: "Begoña González Minguillón",
    description: "diseño gráfico, redes sociales",
    image: "./begona.png",
  },
  {
    title: "Cristina Minguillón",
    description: "diseño gráfico, redes sociales",
    image: "./babel.png",
  },
  {
    title: "Librería Macondo",
    description: "diseño de marca",
    image: "./macondo.png",
  },
  {
    title: "Experiencia Educativa El roure",
    description: "web, diseño gráfico, redes sociales",
    image: "./elroure.png",
  },
  {
    title: "Kun Koro",
    description: "diseño de marca, web",
    image: "./kunkoro.png",
  },
];

export const Portfolio = () => {
  return (
    <section id="Portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          trabajos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
