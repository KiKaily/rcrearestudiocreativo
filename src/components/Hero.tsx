import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-16">
      <div className="w-full max-w-6xl px-0 relative">
        {/* Logo Section with Tilt Hover Effect */}
        <motion.div
          className="w-64 h-64 md:w-[35rem] md:h-[35rem] mx-auto relative"
          whileHover={{ scale: 1.05, rotate: 10 }} // Tilt effect added
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
            ${isMobile ? 'text-sm bottom-4 left-4' : 'text-xl md:text-2xl bottom-8 left-1/2'}
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
            <p className="font-normal">diseño gráfico, web, foto y video</p> {/* Normal font */}
            <p className="italic">comunicación honesta</p> {/* Italic font */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
