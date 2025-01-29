import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Partners", href: "#partners" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">
          Crear
        </a>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-black/30 backdrop-blur-sm"
          >
            <nav className="px-4 pb-4">
              <ul className="space-y-2 flex flex-col items-center">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full text-center"
                  >
                    <a
                      href={item.href}
                      className="block text-white py-2 px-4 hover:bg-white/10 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
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