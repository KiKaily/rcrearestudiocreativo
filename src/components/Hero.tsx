import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-black via-[#0d0d0d] to-black animate-gradient-slow">
      <div className="w-full max-w-6xl px-4 relative">
        {/* Container for Logo and Text */}
        <div className="relative mx-auto w-fit flex flex-col items-start">
          {/* Logo */}
          <motion.div
            className="w-64 h-64 md:w-[35rem] md:h-[35rem] relative cursor-pointer"
            whileHover={{ scale: 1.03, rotate: 1 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
          >
            <img 
              src="./logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="text-white text-base sm:text-lg md:text-xl mt-6 space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <div className="max-w-[35rem]">
              <p className="font-bold tracking-widest">estudio creativo</p>
              <p className="opacity-80">diseño gráfico, web, foto y video</p>
              <p className="opacity-70 italic">comunicación honesta</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
