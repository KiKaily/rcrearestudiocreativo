
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
        <motion.div
  className="w-64 h-64 md:w-[35rem] md:h-[35rem] mx-auto"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  drag
  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
  dragElastic={0.1}
>
  {!isMobile && (
    <img 
      src="./logo.png" 
      alt="Logo" 
      className="w-full h-full object-contain"
    />
  )}
</motion.div>
          
          <motion.div 
  className={`
    text-white absolute 
    ${isMobile ? 'flex flex-row items-center text-sm bottom-5 left-0' : 'text-xl md:text-2xl bottom-12 left-0'}
    w-full text-left space-y-2 ${isMobile ? 'space-y-0 space-x-6' : ''}
  `}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  whileHover={{ scale: 1.02 }}
>
  <div>
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
