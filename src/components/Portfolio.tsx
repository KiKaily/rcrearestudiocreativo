import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Lightbox } from "./Lightbox";
import { OptimizedImage } from "./OptimizedImage";

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
    images: ["./babel1.png", "./babel2.png"],
    link: "https://www.instagram.com/crisminguillon/", // Add the link here
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
    images: ["./elroure1.webp", "./elroure2.webp", "./elroure3.webp", "./elroure4.webp", "./elroure5.webp"],
    link: "https://www.elroure.org/es", // Add the link here
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
  const [selectedProject, setSelectedProject] = useState<{ src: string; alt: string; title: string } | null>(null);
  const [imageIndices, setImageIndices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) => {
        const newIndices = { ...prev };
        projects.forEach((project) => {
          if ("images" in project && project.images) {
            const currentIndex = newIndices[project.title] || 0;
            newIndices[project.title] = (currentIndex + 1) % project.images.length;
          }
        });
        return newIndices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getProjectImage = (project: typeof projects[0]) => {
    if ("images" in project && project.images) {
      const currentIndex = imageIndices[project.title] || 0;
      return project.images[currentIndex];
    }
    return project.image;
  };

  const openLightbox = (project: typeof projects[0]) => {
    setSelectedProject({
      src: getProjectImage(project),
      alt: project.title,
      title: project.title
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
                <OptimizedImage
                  src={getProjectImage(project)}
                  alt={project.title}
                  className="object-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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
          />
        )}
      </div>
    </section>
  );
};
