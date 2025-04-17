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
        <div className="relative max-w-[35rem] mx-auto">
          {/* Logo Section */}
          <motion.div
            className={`
              text-white absolute 
              ${isMobile ? 'text-sm bottom-5 left-4' : 'text-xl md:text-2xl bottom-12 left-0'}
              w-full text-left space-y-2
            `}
            style={isMobile ? { left: '1rem' } : { left: 0 }} /* Moves text to the right in mobile */
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="max-w-[35rem]">
              <p className="font-bold">estudio creativo</p>
              <p>diseño gráfico, web, foto y video</p>
              <p>comunicación honesta</p>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className={`
              text-white absolute 
              ${isMobile ? 'text-sm bottom-5 left-8' : 'text-xl md:text-2xl bottom-12 left-0'}
              w-full text-left space-y-2
            `}
            style={isMobile ? { left: '2rem' } : { left: 0 }} /* Moves text further to the right in mobile */
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="max-w-[35rem]">
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