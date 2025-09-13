import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "inicio", href: "#hero" },
    { name: "servicios", href: "#services" },
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
            <OptimizedImage 
              src="./logo.png" 
              webpSrc="./logo.webp"
              alt="Logo" 
              className="w-full h-full object-contain"
              loading="eager"
              width={120}
              height={68}
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
      </div>

      {/* Light gradient fade effect */}
      <div className="h-6 w-full bg-gradient-to-b from-transparent to-transparent pointer-events-none"></div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              initial={{ 
                opacity: 0,
                backdropFilter: "blur(0px)",
                backgroundColor: "rgba(255, 255, 255, 0)"
              }}
              animate={{ 
                opacity: 1,
                backdropFilter: "blur(16px)",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
              }}
              exit={{ 
                opacity: 0,
                backdropFilter: "blur(0px)",
                backgroundColor: "rgba(255, 255, 255, 0)"
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              onClick={() => setIsOpen(false)}
              style={{
                WebkitBackdropFilter: "blur(16px)"
              }}
            />

            {/* Menu modal with perfectly aligned backgrounds and balanced padding */}
            <motion.div
              className="pt-10 pb-10 px-12 text-center rounded-lg relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              ref={menuRef}
            >
              <div className="absolute inset-0 rounded-lg pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gray-600" style={{ opacity: 0.4 }}></div>
                <div className="absolute inset-0 rounded-lg bg-white" style={{ opacity: 0.15 }}></div>
              </div>
              <ul className="relative z-10 space-y-10">
                {[
                  { name: "inicio", href: "#hero" },
                  { name: "servicios", href: "#services" },
                  { name: "diseño gráfico y web", href: "#portfolio" },
                  { name: "foto", href: "#foto" },
                  { name: "video", href: "#video" },
                  { name: "nosotros", href: "#team" },
                  { name: "hemos trabajado con", href: "#partners" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={((href: string) => (e: React.MouseEvent) => {
                        e.preventDefault();
                        const targetId = href.replace("#", "");
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                          setIsOpen(false);
                        }
                      })(item.href)}
                      className="text-white hover:underline block font-bold text-xl"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
