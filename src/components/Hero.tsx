import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-16 bg-black">
      <div className="w-full max-w-6xl px-4 relative">
        {/* Container for Logo and Text */}
        <div className="relative mx-auto w-fit flex flex-col items-start">
          {/* Logo */}
          <motion.div
            className="w-64 h-64 md:w-[35rem] md:h-[35rem] relative"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <img 
              src="./logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="text-white text-sm sm:text-base md:text-xl lg:text-2xl mt-4 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="max-w-[35rem]">
              <p className="font-bold tracking-wider">estudio creativo</p>
              <p className="opacity-90">diseño gráfico, web, foto y video</p>
              <p className="opacity-80 italic">comunicación honesta</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
