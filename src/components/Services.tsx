import { motion } from "framer-motion";

const services = [
  {
    title: "diseño gráfico",
    description: "Creamos identidades visuales auténticas que te representan y conectan con tu audiencia"
  },
  {
    title: "web",
    description: "Desarrollamos experiencias digitales intuitivas y personalizadas"
  },
  {
    title: "foto",
    description: "Capturamos momentos únicos con una perspectiva honesta y natural"
  },
  {
    title: "video",
    description: "Ofrecemos grabación, edición y montaje de video con un enfoque genuino"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          nuestros servicios
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/80 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            nuestro enfoque
          </h3>
          <div className="space-y-6">
            <p className="text-white/90 text-lg leading-relaxed">
              Usamos la comunicación honesta como base de todo nuestro trabajo, priorizando 
              el respeto hacia las personas usuarias del contenido que creamos.
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              Creemos en la transparencia, la autenticidad y en crear experiencias que 
              conecten de manera genuina, sin manipulación ni invasión.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};