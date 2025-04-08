
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "inicio", href: "#hero" },
    { name: "diseño gráfico y web", href: "#portfolio" },
    { name: "foto", href: "#foto" },
    { name: "video", href: "#video" },
    { name: "nosotros", href: "#team" },
    { name: "hemos trabajado con", href: "#partners" },
  ];

  const handleScrollToSection = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu after clicking
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full z-50">
      {/* Added strong backdrop-blur effect to properly blur content underneath */}
      <div className="w-full backdrop-blur-lg bg-transparent">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.a
            href="#hero"
            onClick={handleScrollToSection("#hero")}
            className="h-8 md:h-12 w-24 md:w-32 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="./logo.png" alt="Logo" className="w-full h-full object-contain" />
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
      </div>

      {/* Light gradient fade effect */}
      <div className="h-6 w-full bg-gradient-to-b from-transparent to-transparent pointer-events-none"></div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center"
            onClick={(e) => {
              // Close when clicking the backdrop but not the menu itself
              if (e.target === e.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            {/* Updated background to white with 40% opacity and made it larger by padding */}
            <div className="absolute inset-0 backdrop-blur-lg bg-black/30" onClick={() => setIsOpen(false)}></div>
            
            <ul className="py-10 px-8 text-center space-y-10 bg-white/40 backdrop-blur-md rounded-lg relative z-10 scale-130 transform">
              {menuItems.map((item, index) => (
                <li 
                  key={item.name} 
                  className={`
                    ${index === 0 ? 'pt-4' : ''}
                    ${index === menuItems.length - 1 ? 'pb-4' : ''}
                  `}
                >
                  <a
                    href={item.href}
                    onClick={handleScrollToSection(item.href)}
                    className="text-white hover:underline block font-bold text-xl"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
