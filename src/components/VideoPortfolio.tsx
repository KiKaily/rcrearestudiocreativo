
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type VideoItem = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
};

const videoItems: VideoItem[] = [
  {
    id: "1",
    title: "Video Portfolio",
    description: "Una selección de clips grabados para otros trabajos",
    thumbnailUrl: "./artsambcaliureel.jpg",
    videoUrl: "./artsambcaliureel.mp4",
  },
  {
    id: "2",
    title: "10 Anys d'arts amb caliu",
    description: "Reel resumen de evento",
    thumbnailUrl: "./artsambcaliureel.jpg",
    videoUrl: "./artsambcaliureel.mp4",
  },
  {
    id: "3",
    title: "Testimonio de Débora",
    description: "Reel de promoción de la formación Savia, de El Roure",
    thumbnailUrl: "./deborareel.jpg",
    videoUrl: "deborareel.mp4",
  },
];

export const VideoPortfolio = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRefs = useRef<{[key: string]: HTMLVideoElement | null}>({});

  const togglePlay = (id: string) => {
    if (activeVideo === id) {
      const videoElement = videoRefs.current[id];
      if (videoElement) {
        if (isPlaying) {
          videoElement.pause();
        } else {
          videoElement.play();
        }
        setIsPlaying(!isPlaying);
      }
    } else {
      // If another video was playing, pause it
      if (activeVideo && videoRefs.current[activeVideo]) {
        videoRefs.current[activeVideo]?.pause();
      }
      
      setActiveVideo(id);
      setIsPlaying(true);
      
      // Play the new video after a small delay to ensure the state has updated
      setTimeout(() => {
        const videoElement = videoRefs.current[id];
        if (videoElement) {
          videoElement.play().catch(err => {
            console.error("Error playing video:", err);
            setIsPlaying(false);
          });
        }
      }, 50);
    }
  };

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
          {/* Desktop View: Grid of videos */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
            {videoItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                  <AspectRatio ratio={9/16} className="bg-black">
                    {activeVideo === item.id ? (
                      <video 
                        ref={el => { videoRefs.current[item.id] = el }}
                        src={item.videoUrl} 
                        poster={item.thumbnailUrl}
                        className="object-cover w-full h-full cursor-pointer"
                        playsInline
                        loop
                        onClick={() => togglePlay(item.id)}
                        onEnded={() => setIsPlaying(false)}
                        onError={() => {
                          console.error(`Error with video: ${item.videoUrl}`);
                          setIsPlaying(false);
                        }}
                      />
                    ) : (
                      <img 
                        src={item.thumbnailUrl} 
                        alt={item.title}
                        className="object-cover w-full h-full opacity-80 transition-transform hover:scale-105 duration-700 cursor-pointer"
                        onClick={() => togglePlay(item.id)}
                      />
                    )}
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View with all videos stacked */}
          <div className="md:hidden space-y-8">
            {videoItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-xs mx-auto"
              >
                <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                  <AspectRatio ratio={9/16} className="bg-black">
                    {activeVideo === item.id ? (
                      <video 
                        ref={el => { videoRefs.current[item.id] = el }}
                        src={item.videoUrl} 
                        poster={item.thumbnailUrl}
                        className="object-cover w-full h-full cursor-pointer"
                        playsInline
                        loop
                        onClick={() => togglePlay(item.id)}
                        onEnded={() => setIsPlaying(false)}
                        onError={() => {
                          console.error(`Error with video: ${item.videoUrl}`);
                          setIsPlaying(false);
                        }}
                      />
                    ) : (
                      <img 
                        src={item.thumbnailUrl} 
                        alt={item.title}
                        className="object-cover w-full h-full opacity-80 cursor-pointer"
                        onClick={() => togglePlay(item.id)}
                      />
                    )}
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

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="https://www.instagram.com/rcrear.estudio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white mx-auto border border-white/30 py-2 px-6 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <span>Ver más en instagram</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
