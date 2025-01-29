import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white"
        >
          <h3 className="text-xl font-bold mb-4">Contacto</h3>
          <p className="opacity-90">
            Email: info@empresa.com
            <br />
            Tel: +34 123 456 789
            <br />
            Dirección: Calle Principal 123
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white"
        >
          <h3 className="text-xl font-bold mb-4">Enlaces</h3>
          <ul className="space-y-2 opacity-90">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#portafolio" className="hover:underline">Portafolio</a></li>
            <li><a href="#nosotros" className="hover:underline">Sobre Nosotros</a></li>
            <li><a href="#partners" className="hover:underline">Partners</a></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white"
        >
          <h3 className="text-xl font-bold mb-4">Síguenos</h3>
          <ul className="space-y-2 opacity-90">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};