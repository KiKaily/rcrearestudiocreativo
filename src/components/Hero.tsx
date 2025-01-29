import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFB1B1] to-[#9FEFE7]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">Crear</h1>
        <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
          Transformamos ideas en experiencias digitales únicas y memorables
        </p>
      </motion.div>
    </section>
  );
};