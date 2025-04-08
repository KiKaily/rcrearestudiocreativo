
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Sample photo items
const photoItems = [
  { id: "1", title: "Llorar", thumbnailUrl: "./fotos/1.jpg" },
  { id: "2", title: "Begoña", thumbnailUrl: "./fotos/2.jpg" },
  { id: "3", title: "Abeja", thumbnailUrl: "./fotos/3.jpg" },
  { id: "4", title: "Falda", thumbnailUrl: "./fotos/4.jpg" },
  { id: "5", title: "Zafu", thumbnailUrl: "./fotos/5.jpg" },
  { id: "6", title: "Cera", thumbnailUrl: "./fotos/6.jpg" },
  { id: "7", title: "Cortina", thumbnailUrl: "./fotos/7.jpg" },
  { id: "8", title: "Flor", thumbnailUrl: "./fotos/8.jpg" },
  { id: "9", title: "Girasoles", thumbnailUrl: "./fotos/9.jpg" },
  { id: "10", title: "Playa", thumbnailUrl: "./fotos/10.jpg" },
  { id: "11", title: "Castillo", thumbnailUrl: "./fotos/11.jpg" },
  { id: "12", title: "Cortina2", thumbnailUrl: "./fotos/12.jpg" },
  { id: "13", title: "ParejaAlhambra", thumbnailUrl: "./fotos/13.jpg" },
  { id: "14", title: "Gotas", thumbnailUrl: "./fotos/14.jpg" },
  { id: "15", title: "Lavanda", thumbnailUrl: "./fotos/15.jpg" },
  { id: "16", title: "burbuja", thumbnailUrl: "./fotos/16.jpg" },
  { id: "17", title: "Puente", thumbnailUrl: "./fotos/17.jpg" },
  { id: "18", title: "Trabajando", thumbnailUrl: "./fotos/18.jpg" },
  { id: "19", title: "CieloHierba", thumbnailUrl: "./fotos/19.jpg" },
  { id: "20", title: "Caracolito", thumbnailUrl: "./fotos/20.jpg" },
  { id: "21", title: "Gato", thumbnailUrl: "./fotos/21.jpg" },
  { id: "22", title: "Caracol", thumbnailUrl: "./fotos/22.jpg" },
  { id: "23", title: "Poste", thumbnailUrl: "./fotos/23.jpg" },
  { id: "24", title: "Zippo", thumbnailUrl: "./fotos/24.jpg" },
  { id: "25", title: "Micromundo", thumbnailUrl: "./fotos/25.jpg" },
  { id: "26", title: "Vela", thumbnailUrl: "./fotos/26.jpg" },
  { id: "27", title: "Musgo", thumbnailUrl: "./fotos/27.jpg" },
  { id: "28", title: "Nube", thumbnailUrl: "./fotos/28.jpg" },
  { id: "29", title: "FlorPincho", thumbnailUrl: "./fotos/29.jpg" },
  { id: "30", title: "mariposa", thumbnailUrl: "./fotos/30.jpg" },
  { id: "31", title: "Piedra", thumbnailUrl: "./fotos/31.jpg" },
  { id: "32", title: "SalyTierra", thumbnailUrl: "./fotos/32.jpg" },
  { id: "33", title: "PuestadeSol", thumbnailUrl: "./fotos/33.jpg" },
  { id: "34", title: "Telaraña", thumbnailUrl: "./fotos/34.jpg" },
  { id: "35", title: "Copas", thumbnailUrl: "./fotos/35.jpg" },
];

export const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const photosPerPage = 15; // Reduced from 20 to 15 to fit 3 rows (5 photos per row)
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
    <section id="foto" className="py-24 px-4 relative overflow-hidden">
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
            foto
          </motion.span>
        </h2>
        
        <motion.p 
          className="text-white/80 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
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
