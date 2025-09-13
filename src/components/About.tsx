import { motion } from "framer-motion";

export const About = () => {
  const paragraphs = [
    "creamos marcas y comunicación con alma, transmitiendo mensajes de forma honesta",
    "la comunicación honesta se centra en la transparencia y el respeto por el receptor, la no invasión, uso de formas agresivas ni manipulación calculada",
    "nuestros procesos destacan por involucrar a las personas detrás de cada marca, dando especial importancia a la presencialidad y a los procesos creativos físicos y tangibles, como valiosas fuentes de imagen e inspiración",
    "nos relacionamos con un trato cálido y ofrecemos una visión y trabajo integral",
    "diseño de marca, gráfico, web, fotografía, vídeo, gestión de redes sociales, packaging, asesoramiento...",
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          {paragraphs.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <p className="text-white text-lg md:text-xl opacity-90">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
