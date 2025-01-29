import { motion } from "framer-motion";

export const About = () => {
  const paragraphs = [
    "Somos un estudio creativo especializado en transformar ideas en experiencias visuales memorables. Nuestro enfoque combina diseño innovador con estrategias efectivas para crear soluciones únicas.",
    "Con años de experiencia en el sector, hemos desarrollado un proceso creativo que garantiza resultados excepcionales. Cada proyecto es una oportunidad para crear algo extraordinario.",
    "Trabajamos en estrecha colaboración con nuestros clientes, asegurándonos de que cada detalle refleje su visión y objetivos. La comunicación y la transparencia son fundamentales en nuestro proceso.",
    "Nuestro compromiso con la excelencia y la innovación nos impulsa a mantenernos a la vanguardia de las últimas tendencias y tecnologías en diseño y comunicación visual.",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
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