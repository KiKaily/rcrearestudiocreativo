import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbox } from "./Lightbox";

const gifItems = [
  { id: "1", title: "Arts amb caliu", thumbnailUrl: "./artsambcaliureel.jpg" },
  { id: "2", title: "Portfolio Recrear", thumbnailUrl: "./portfolioreelrcrear.jpg" },
  { id: "3", title: "Testimonio Débora", thumbnailUrl: "./deborareel.jpg" },
  { id: "4", title: "Mary Pepper", thumbnailUrl: "./marypepper.jpg" },
  { id: "5", title: "Cristina", thumbnailUrl: "./cris.jpg" },
  { id: "6", title: "Noel", thumbnailUrl: "./noel.jpg" },
  { id: "7", title: "Evento Cultural", thumbnailUrl: "./fotos/1.jpg" },
  { id: "8", title: "Sesión Retrato", thumbnailUrl: "./fotos/2.jpg" },
  { id: "9", title: "Video Promocional", thumbnailUrl: "./fotos/3.jpg" },
  { id: "10", title: "Documental", thumbnailUrl: "./fotos/4.jpg" },
];

export const VideoGifs = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedGif, setSelectedGif] = useState<{ src: string; alt: string; title: string } | null>(null);

  const openLightbox = (item: { id: string; title: string; thumbnailUrl: string }) => {
    setSelectedGif({
      src: item.thumbnailUrl,
      alt: item.title,
      title: item.title
    });
    setLightboxOpen(true);
  };

  return (
    <div className="mt-16">
      <motion.h3 
        className="text-2xl font-bold text-center mb-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        momentos en movimiento
      </motion.h3>
      
      <div className="grid grid-cols-5 gap-4">
        {gifItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <img 
              src={item.thumbnailUrl} 
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white p-2">
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedGif && (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          src={selectedGif.src}
          alt={selectedGif.alt}
          title={selectedGif.title}
        />
      )}
    </div>
  );
};