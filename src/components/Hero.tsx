import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="w-full max-w-6xl px-0 relative"> {/* Removed container padding */}
        {/* Logo Section */}
        <motion.div
          className="w-64 h-64 md:w-[35rem] md:h-[35rem] mx-auto relative"
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
            text-white absolute 
            ${isMobile ? 'text-sm bottom-5 left-4' : 'text-xl md:text-2xl bottom-12 left-1/2'}
            space-y-2
          `}
          style={{
            transform: isMobile ? 'none' : 'translateX(-50%)',
          }}
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
    </section>
  );
};