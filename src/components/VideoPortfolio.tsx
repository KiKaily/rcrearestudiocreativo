
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

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
    title: "Espacios Vivos",
    description: "Narrativas visuales de espacios transformados",
    thumbnailUrl: "./babel.png",
    videoUrl: "#",
  },
  {
    id: "2",
    title: "Ritmos Internos",
    description: "Experiencias sensoriales a través del movimiento",
    thumbnailUrl: "./marypepper.jpg",
    videoUrl: "#",
  },
  {
    id: "3",
    title: "Transparencias",
    description: "El diálogo entre luz y sombra",
    thumbnailUrl: "./macondo.png",
    videoUrl: "#",
  },
];

export const VideoPortfolio = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = (id: string) => {
    if (activeVideo === id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveVideo(id);
      setIsPlaying(true);
    }
  };

  return (
    <section id="video-portfolio" className="py-24 px-4 relative overflow-hidden">
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
            fototeca & videoteca
          </motion.span>
        </h2>
        
        <motion.p 
          className="text-white/80 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Narrativa visual que trasciende los límites convencionales, 
          redefiniendo la verticalidad como nuevo estándar creativo.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                  <img 
                    src={item.thumbnailUrl} 
                    alt={item.title}
                    className="object-cover w-full h-full opacity-80 transition-transform hover:scale-105 duration-700"
                  />
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
        
        <div className="relative mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="mr-2">Destacados</span>
            <div className="h-[1px] flex-grow bg-white/30 ml-4"></div>
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
                  <Card className="border-0 bg-transparent">
                    <CardContent className="p-1">
                      <AspectRatio ratio={1/2} className="overflow-hidden rounded-lg border border-white/10">
                        <div className="relative h-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                          <div className="absolute inset-0 overflow-hidden">
                            <motion.img 
                              src={videoItems[index % videoItems.length].thumbnailUrl}
                              className="object-cover h-full w-full opacity-70"
                              alt="Featured content"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.6 }}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                          <div className="relative z-10 text-white p-4 mt-auto self-end">
                            <span className="text-sm font-medium bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                              {index % 2 === 0 ? "Fotografía" : "Video"}
                            </span>
                          </div>
                        </div>
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="right-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button className="group flex items-center gap-2 text-white mx-auto border border-white/30 py-2 px-6 rounded-full hover:bg-white/10 transition-all duration-300">
            <span>Ver galería completa</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
