import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-16">
      <div className="w-full max-w-6xl px-0 relative">
        {/* Logo and Text Container */}
        <div className="relative mx-auto w-fit">
          {/* Logo Section */}
          <motion.div
            className="w-64 h-64 md:w-[35rem] md:h-[35rem] relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="./logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className={`
              text-white 
              text-sm sm:text-base md:text-xl lg:text-2xl 
              mt-1 sm:mt-2 md:mt-3 lg:mt-4
              space-y-2
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="max-w-[35rem]">
              <p className="font-bold">estudio creativo</p>
              <p>diseño gráfico, web, foto y video</p>
              <p>comunicación honesta</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
