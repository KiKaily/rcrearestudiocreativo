import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Team", href: "#team" },
    { label: "Partners", href: "#partners" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="/" className="text-white text-xl font-bold">rcrea</a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-white text-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex flex-col justify-center items-center space-y-8 text-white text-2xl z-40">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
