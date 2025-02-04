import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "inicio", href: "#inicio" },
    { name: "trabajos", href: "#portafolio" },
    { name: "nosotros", href: "#nosotros" },
    { name: "hemos trabajado con", href: "#partners" },
    { name: "contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="h-8 md:h-12 w-24 md:w-32 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src="./logo.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </motion.a>
        
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white/30 backdrop-blur-sm"
          >
            <nav className="px-4 py-8">
              <ul className="space-y-4 flex flex-col items-center">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full text-center"
                  >
                    <motion.a
                      href={item.href}
                      className="block text-white py-3 px-4 hover:bg-white/10 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};