import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl px-4"
      >
        <div className="max-w-[35rem] mx-auto flex flex-col items-center">
          <motion.div
            className="w-64 h-64 md:w-[35rem] md:h-[35rem] mx-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
          >
            <img 
              src="./logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                console.error('Image failed to load:', e);
                const imgElement = e.target as HTMLImageElement;
                imgElement.src = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e';
              }}
            />
          </motion.div>
          <motion.div 
            className="text-white text-xl md:text-2xl w-full text-left space-y-2 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="font-bold">estudio creativo</p>
            <p>diseño gráfico</p>
            <p>comunicación honesta</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};