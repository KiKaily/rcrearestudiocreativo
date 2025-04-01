
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ArrowRight, ArrowLeft } from "lucide-react";
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
    thumbnailUrl: "./portfolioreel.jpg",
    videoUrl: "https://www.instagram.com/p/DHqRqzbIik9/",
  },
  {
    id: "2",
    title: "10 Anys d'arts amb caliu",
    description: "Reel resumen de evento",
    thumbnailUrl: "./artsambcaliureel.jpg",
    videoUrl: "https://drive.google.com/file/d/1o3edZxYlJ-le_L1mavztVYIwrq8T4-tP/view?usp=sharing",
  },
  {
    id: "3",
    title: "Testimonio de Débora",
    description: "Reel de promoción de la formación Savia, de El Roure",
    thumbnailUrl: "./deborareel.jpg",
    videoUrl: "https://www.instagram.com/reel/Cwubm0etmKl/",
  },
];

export const VideoPortfolio = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videoItems.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoItems.length - 1 : prev - 1));
  };

  // Create arrays of videos based on current index for mobile view
  const visibleVideos = videoItems.slice(currentIndex, currentIndex + 1);
  const needsNavigation = videoItems.length > 1;

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
          {/* Navigation arrows for both desktop and mobile */}
          {needsNavigation && (
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2 z-10">
              <button 
                onClick={prevVideo}
                className="bg-white/10 border border-white/20 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextVideo}
                className="bg-white/10 border border-white/20 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
          
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
                        className="object-cover w-full h-full"
                        playsInline
                        loop
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
                        className="object-cover w-full h-full opacity-80 transition-transform hover:scale-105 duration-700"
                      />
                    )}
                  </AspectRatio>
                  <button 
                    onClick={() => togglePlay(item.id)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 transition-all duration-300 group-hover:bg-white/20">
                      {activeVideo === item.id && isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white" />
                      )}
                    </div>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View with Navigation Arrows */}
          <div className="md:hidden relative">
            <div className="flex justify-center">
              {visibleVideos.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full max-w-xs"
                >
                  <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                    <AspectRatio ratio={9/16} className="bg-black">
                      {activeVideo === item.id ? (
                        <video 
                          ref={el => { videoRefs.current[item.id] = el }}
                          src={item.videoUrl} 
                          poster={item.thumbnailUrl}
                          className="object-cover w-full h-full"
                          playsInline
                          loop
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
                          className="object-cover w-full h-full opacity-80"
                        />
                      )}
                    </AspectRatio>
                    <button 
                      onClick={() => togglePlay(item.id)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                        {activeVideo === item.id && isPlaying ? (
                          <Pause className="w-6 h-6 text-white" />
                        ) : (
                          <Play className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </button>
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
