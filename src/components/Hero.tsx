import { motion } from "framer-motion";
import { AlignLeft } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <motion.div
          className="w-64 h-64 md:w-96 md:h-96 mx-auto mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.1}
        >
          <img 
            src="/rcrear/logo.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.p 
          className="text-white text-xl md:text-2xl max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <text-align><p><b>estudio creativo</b></p></text-align>
          
          <text-align><p>diseño gráfico</p></text-align>
          
          <text-align><p>comunicación honesta</p></text-align>
        </motion.p>
      </motion.div>
    </section>
  );
};