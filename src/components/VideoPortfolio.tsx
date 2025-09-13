
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";


type VideoItem = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  isHorizontal?: boolean;
};

const videoItems: VideoItem[] = [
  {
    id: "2",
    title: "10 Anys d'arts amb caliu",
    description: "Reel resumen de evento",
    embedUrl: "https://www.youtube.com/embed/NBMx4Dhvul0", // Replace with your actual Vimeo embed URL
    isHorizontal: false,
  },
  {
    id: "1",
    title: "Video Portfolio",
    description: "Una selección de clips grabados para otros trabajos",
    embedUrl: "https://www.youtube.com/embed/zhMRi2sR3ls", // Replace with your actual YouTube embed URL
    isHorizontal: false,
  },
  {
    id: "3",
    title: "Testimonio de Débora",
    description: "Reel de promoción de la formación Savia, de El Roure",
    embedUrl: "https://www.youtube.com/embed/iuIxJHecfV8", // Replace with your actual YouTube embed URL
    isHorizontal: false,
  },
  {
    id: "4",
    title: "Video Horizontal",
    description: "Video en formato horizontal",
    embedUrl: "https://www.youtube.com/embed/_kk8fHHmh_M?si=qHRx6W3dNh_kAR3D", // Replace with your actual YouTube embed URL
    isHorizontal: true,
  },
];

export const VideoPortfolio = () => {
  const verticalVideos = videoItems.filter(video => !video.isHorizontal);
  const horizontalVideos = videoItems.filter(video => video.isHorizontal);

  return (
    <section id="video" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-[20%] left-[10%] w-16 h-64 bg-white/10 rounded-full blur-xl"
        animate={{ 
          x: [0, 20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-[30%] right-[5%] w-32 h-32 bg-white/5 rounded-full blur-2xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            video
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
          {/* Desktop View: 3 vertical videos and 1 horizontal video */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {verticalVideos.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                    <AspectRatio ratio={9/16} className="bg-black">
                      <iframe 
                        src={item.embedUrl}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </AspectRatio>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Horizontal video below */}
            {horizontalVideos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full max-w-4xl mx-auto mb-16"
              >
                <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                  <AspectRatio ratio={16/9} className="bg-black">
                    <iframe 
                      src={horizontalVideos[0].embedUrl}
                      title={horizontalVideos[0].title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white">{horizontalVideos[0].title}</h3>
                    <p className="text-white/70 text-sm">{horizontalVideos[0].description}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Mobile View: All videos stacked */}
          <div className="md:hidden space-y-8">
            {videoItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-xs mx-auto"
              >
                <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                  <AspectRatio ratio={item.isHorizontal ? 16/9 : 9/16} className="bg-black">
                    <iframe 
                      src={item.embedUrl}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};
