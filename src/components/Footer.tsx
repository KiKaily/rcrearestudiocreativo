
import { motion } from "framer-motion";

export const Footer = () => {
  const handleScrollToSection = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white"
        >
          <h3 className="text-xl font-bold mb-4 text-white">¿hablamos?</h3>
          <p>
            <a href="mailto:rcrear.com@gmail.com" className="hover:underline">rcrear.com@gmail.com</a>
            <br />
            barcelona, españa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white"
        >
          <h3 className="text-xl font-bold mb-4 text-white">secciones</h3>
          <ul className="space-y-2">
            <li><a href="#hero" onClick={handleScrollToSection('#hero')} className="hover:underline">inicio</a></li>
            <li><a href="#services" onClick={handleScrollToSection('#services')} className="hover:underline">servicios</a></li>
            <li><a href="#portfolio" onClick={handleScrollToSection('#portfolio')} className="hover:underline">diseño gráfico y web</a></li>
            <li><a href="#foto" onClick={handleScrollToSection('#foto')} className="hover:underline">foto</a></li>
            <li><a href="#video" onClick={handleScrollToSection('#video')} className="hover:underline">video</a></li>
            <li><a href="#team" onClick={handleScrollToSection('#team')} className="hover:underline">nosotros</a></li>
            <li><a href="#partners" onClick={handleScrollToSection('#partners')} className="hover:underline">hemos trabajado con</a></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white"
        >
          <h3 className="text-xl font-bold mb-4 text-white">¿conectamos?</h3>
          <ul className="space-y-2">
            <li><a href="https://www.instagram.com/rcrear.estudio/" className="hover:underline">instagram</a></li>
            <li><a href="https://www.linkedin.com/company/105742337/" className="hover:underline">linkedin</a></li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};
