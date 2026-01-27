import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Lightbox } from "./Lightbox";
import { OptimizedImage } from "./OptimizedImage";

const IMAGE_INTERVAL = 4500;
const FADE_DURATION = 800;
const isVideoFile = (src: string) => /\.(mp4|webm|ogg)$/i.test(src);

const projects = [
  {
    title: "Leonardo Moscoso",
    description: "diseño de marca, web, redes sociales",
    images: ["./leonardo1.webp", "./leonardo2.webp"],
    link: "https://www.leonardomoscoso.com/", // Add the link here
  },
  {
    title: "Begoña González Minguillón",
    description: "diseño gráfico, redes sociales",
    image: "./begona.png",
    link: "https://www.instagram.com/begona_educacionviva/", // Add the link here
  },
  {
    title: "Cristina Minguillón",
    description: "diseño gráfico, redes sociales",
    image: "./babel1.webp",
    link: "", // Add the link here
  },
  {
    title: "Librería Macondo",
    description: "diseño de marca",
    image: "./macondo.webp",
    link: "", // Add the link here
  },
  {
    title: "Experiencia Educativa El roure",
    description: "web, diseño gráfico, redes sociales, revista",
    images: ["./elroure1.mp4", "./elroure2.webp", "./elroure3.webp", "./elroure4.webp", "./elroure5.webp"],
    link: "", // Add the link here
  },
  {
    title: "Kun Koro",
    description: "diseño de marca, web",
    image: "./kunkoro.webp",
    link: "https://kunkoro.kiwi/", // Add the link here
  },
];

export const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{ src: string; alt: string; title: string; isVideo?: boolean } | null>(null);
  const [imageIndices, setImageIndices] = useState<{ [key: string]: number }>({});
  const [fadeState, setFadeState] = useState<{ [key: string]: boolean }>({});

  const advanceMedia = useCallback((projectTitle: string, totalItems: number) => {
    // Fade out first, then move to the next asset and fade back in
    setFadeState((prev) => ({ ...prev, [projectTitle]: false }));

    setTimeout(() => {
      setImageIndices((prev) => ({
        ...prev,
        [projectTitle]: ((prev[projectTitle] || 0) + 1) % totalItems,
      }));

      setFadeState((prev) => ({ ...prev, [projectTitle]: true }));
    }, FADE_DURATION);
  }, []);

  useEffect(() => {
    const timeouts: number[] = [];

    projects.forEach((project) => {
      if (!("images" in project) || !project.images) return;

      const currentIndex = imageIndices[project.title] || 0;
      const mediaItems = project.images;
      const currentSrc = mediaItems[currentIndex];
      const totalItems = mediaItems.length;

      // For videos we wait for the natural end event to advance
      if (isVideoFile(currentSrc)) return;

      const timeoutId = window.setTimeout(
        () => advanceMedia(project.title, totalItems),
        IMAGE_INTERVAL
      );

      timeouts.push(timeoutId);
    });

    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, [imageIndices, advanceMedia]);

  const getProjectImage = (project: typeof projects[0]) => {
    if ("images" in project && project.images) {
      const currentIndex = imageIndices[project.title] || 0;
      return project.images[currentIndex];
    }
    return project.image;
  };

  const openLightbox = (project: typeof projects[0]) => {
    const imageSrc = getProjectImage(project);
    setSelectedProject({
      src: imageSrc,
      alt: project.title,
      title: project.title,
      isVideo: isVideoFile(imageSrc)
    });
    setLightboxOpen(true);
  };

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      openLightbox(project);
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          diseño gráfico y web
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-w-16 aspect-h-9">
                {(() => {
                  const currentSrc = getProjectImage(project);
                  const isVideo = isVideoFile(currentSrc);
                  const totalItems = "images" in project && project.images ? project.images.length : 1;

                  if (isVideo) {
                    return (
                      <video
                        src={currentSrc}
                        className="object-cover w-full h-full group-hover:scale-105"
                        style={{
                          transition: `opacity ${FADE_DURATION}ms ease-in-out, transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1)`,
                          opacity: fadeState[project.title] === false ? 0 : 1
                        }}
                        muted
                        autoPlay
                        playsInline
                        onEnded={() => totalItems > 1 && advanceMedia(project.title, totalItems)}
                      />
                    );
                  }

                  return (
                    <OptimizedImage
                      src={currentSrc}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105"
                      style={{
                        transition: `opacity ${FADE_DURATION}ms ease-in-out, transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1)`,
                        opacity: fadeState[project.title] === false ? 0 : 1
                      }}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  );
                })()}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                    <p className="text-sm mt-2 opacity-80">Click para ver el proyecto</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedProject && (
          <Lightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            src={selectedProject.src}
            alt={selectedProject.alt}
            title={selectedProject.title}
            isVideo={selectedProject.isVideo}
          />
        )}
      </div>
    </section>
  );
};
