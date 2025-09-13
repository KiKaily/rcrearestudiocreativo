import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { OptimizedImage } from "./OptimizedImage";

export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="hero-section min-h-screen flex items-center justify-center pt-16">
      <div className="w-full max-w-6xl px-0 relative">
        {/* Logo and Text Container */}
        <div className="relative mx-auto w-fit flex flex-col items-start">
          {/* Logo Section */}
          <motion.div
            className="w-64 md:w-[35rem] relative"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <OptimizedImage
              src="./logo.png"
              webpSrc="./logo.webp"
              alt="Logo"
              className="w-full h-auto block"
              loading="eager"
              sizes="(max-width: 768px) 256px, 560px"
              width={560}
              height={315}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className={`
              text-white
              ${isMobile ? 'text-sm' : 'text-xl md:text-2xl'}
              mt-[-0.0rem] 
              space-y-1
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="max-w-[35rem]">
              <p className="font-bold">estudio creativo</p>
              <p className="font-normal">diseño gráfico, web, foto y video</p>
              <p className="italic opacity-90">comunicación honesta</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
