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
            className="w-64 h-64 md:w-[35rem] md:h-[35rem] mx-auto relative"
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
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
  className={`
    text-white absolute 
    ${isMobile ? 'text-sm bottom-5' : 'text-xl md:text-2xl bottom-12'}
    w-full text-left space-y-2
  `}
  style={{ left: 0 }} // Aligns the text with the left side of the parent container
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  whileHover={{ scale: 1.02 }}
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