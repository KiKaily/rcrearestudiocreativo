import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl px-4"
      >
        <div className="relative max-w-[35rem] mx-auto text-center">
          {/* Logo Section */}
          <motion.div
            className="mx-auto mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="./logo.png"
              alt="Logo"
              className="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className={`
              text-white 
              ${isMobile ? 'text-sm' : 'text-xl md:text-2xl'}
              w-full text-left space-y-2
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="max-w-[35rem] mx-auto">
              <p className="font-bold">estudio creativo</p>
              <p>diseño gráfico, web, foto y video</p>
              <p>comunicación honesta</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};