
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Sample photo items
const photoItems = [
  { id: "1", title: "Espacios", thumbnailUrl: "./babel.png" },
  { id: "2", title: "Personas", thumbnailUrl: "./marypepper.jpg" },
  { id: "3", title: "Lugares", thumbnailUrl: "./macondo.png" },
  { id: "4", title: "Texturas", thumbnailUrl: "./leonardo.png" },
  { id: "5", title: "Momentos", thumbnailUrl: "./begona.png" },
  { id: "6", title: "Detalles", thumbnailUrl: "./kunkoro.png" },
  { id: "7", title: "Emociones", thumbnailUrl: "./elroure.png" },
  { id: "8", title: "Espacios", thumbnailUrl: "./babel.png" },
  { id: "9", title: "Personas", thumbnailUrl: "./marypepper.jpg" },
  { id: "10", title: "Lugares", thumbnailUrl: "./macondo.png" },
  { id: "11", title: "Texturas", thumbnailUrl: "./leonardo.png" },
  { id: "12", title: "Momentos", thumbnailUrl: "./begona.png" },
  { id: "13", title: "Detalles", thumbnailUrl: "./kunkoro.png" },
  { id: "14", title: "Emociones", thumbnailUrl: "./elroure.png" },
  { id: "15", title: "Espacios", thumbnailUrl: "./babel.png" },
  { id: "16", title: "Personas", thumbnailUrl: "./marypepper.jpg" },
  { id: "17", title: "Lugares", thumbnailUrl: "./macondo.png" },
  { id: "18", title: "Texturas", thumbnailUrl: "./leonardo.png" },
  { id: "19", title: "Momentos", thumbnailUrl: "./begona.png" },
  { id: "20", title: "Detalles", thumbnailUrl: "./kunkoro.png" },
  { id: "21", title: "Emociones", thumbnailUrl: "./elroure.png" },
  { id: "22", title: "Espacios", thumbnailUrl: "./babel.png" },
  { id: "23", title: "Personas", thumbnailUrl: "./marypepper.jpg" },
  { id: "24", title: "Lugares", thumbnailUrl: "./macondo.png" },
];

export const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const photosPerPage = 20;
  const totalPages = Math.ceil(photoItems.length / photosPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  const visiblePhotos = photoItems.slice(
    currentPage * photosPerPage, 
    (currentPage + 1) * photosPerPage
  );

  return (
    <section id="photo-gallery" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-[10%] right-[15%] w-20 h-80 bg-white/5 rounded-full blur-xl"
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-[20%] left-[8%] w-40 h-40 bg-white/10 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            fototeca
          </motion.span>
        </h2>
        
        <motion.p 
          className="text-white/80 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Colección fotográfica que captura momentos, espacios y emociones en su esencia más pura.
        </motion.p>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-8">
            {visiblePhotos.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="aspect-square relative overflow-hidden group"
              >
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-2 text-white">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevPage}
                className="bg-white/10 border border-white/20 text-white hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="sr-only">Anterior</span>
              </button>
              <div className="flex items-center text-white font-medium">
                {currentPage + 1} / {totalPages}
              </div>
              <button 
                onClick={nextPage}
                className="bg-white/10 border border-white/20 text-white hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
                <span className="sr-only">Siguiente</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
