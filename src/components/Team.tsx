
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";

const team = [
  {
    name: "Cristina Casas",
    role: "diseñadora gráfica y desarrolladora web",
    image: "./cris.jpg",
    description: "Con más de 10 años de experiencia en diseño y dirección creativa, Cristina lidera nuestro equipo de diseño gráfico con profesionalismo, pasión y una visión innovadora. Su enfoque único combina estrategia y creatividad, especializándose en la conexión con la esencia de la marca.",
    social: {
      linkedin: "https://www.linkedin.com/in/cristinacasasdesign/",
      behance: "https://www.behance.net/cristinacasasdesign?locale=es_ES",
      pinterest: "https://es.pinterest.com/cristinacasas/"
    }
  },
  {
    name: "Noel Cresencio",
    role: "creativo, comunicador, fotógrafo y editor de vídeo",
    image: "./noel.jpg",
    description: "Responsable de comunicación, web, foto, video y redes sociales. Formado en educación viva, terapeuta psico-corporal y comunicación consciente. Muy autodidacta y multidisciplinar. Solucionador de problemas. Capaz de crear una web sin ser programador. Curioso por naturaleza, de acción eficiente y pensamiento innovador. Apasionado sobre cómo funciona el mundo y las relaciones humanas. Pregúntale sobre cualquier cosa y te podrá decir algo interesante al respecto.",
    social: {
      youtube: "https://www.youtube.com/@narunaru.podcast",
      instagram: "https://www.instagram.com/noelcrefoto/"
    }
  },
];

export const Team = () => {
  const [expandedMembers, setExpandedMembers] = useState<string[]>([]);

  const toggleMember = (name: string) => {
    setExpandedMembers(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          nosotros
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6 border-2 border-white rounded-full">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  sizes="192px"
                  width={192}
                  height={192}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-white opacity-90 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 mb-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="./linkedin.svg" alt="LinkedIn" className="w-6 h-6 fill-white" loading="lazy" />
                  </a>
                )}
                {member.social.youtube && (
                  <a href={member.social.youtube} target="_blank" rel="noopener noreferrer">
                    <img src="./youtube.svg" alt="YouTube" className="w-6 h-6 fill-white" loading="lazy" />
                  </a>
                )}
                {member.social.behance && (
                  <a href={member.social.behance} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" className="w-6 h-6 fill-white">
                      <g transform="translate(1.4 1.4) scale(2.81 2.81)">
                        <path d="M 58.938 41.512 c -1.498 0 -2.655 0.431 -3.476 1.278 c -0.827 0.845 -1.342 1.995 -1.553 3.45 h 10.04 v 0 c -0.109 -1.549 -0.626 -2.721 -1.557 -3.522 C 61.468 41.915 60.314 41.512 58.938 41.512 z" />
                        <path d="M 37.047 40.939 c 0.842 -0.513 1.262 -1.425 1.262 -2.735 c 0 -1.447 -0.556 -2.408 -1.671 -2.87 c -0.958 -0.321 -2.185 -0.487 -3.672 -0.487 h -5.79 v 6.863 h 6.583 C 35.111 41.71 36.205 41.453 37.047 40.939 z" />
                        <path d="M 36.964 47.388 c -0.737 -0.341 -1.777 -0.515 -3.111 -0.527 h -6.678 v 8.291 h 6.574 c 1.351 0 2.396 -0.177 3.151 -0.546 c 1.361 -0.678 2.043 -1.969 2.043 -3.885 C 38.943 49.105 38.282 47.988 36.964 47.388 z" />
                        <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 c 24.853 0 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 52.625 30.735 h 12.529 v 3.112 h -0.001 H 52.625 V 30.735 z M 44.115 56.129 c -0.589 0.968 -1.321 1.785 -2.201 2.444 c -0.99 0.761 -2.163 1.283 -3.511 1.562 c -1.352 0.279 -2.816 0.42 -4.393 0.42 H 20 V 29.445 h 15.025 c 3.787 0.062 6.472 1.159 8.058 3.314 c 0.951 1.322 1.423 2.907 1.423 4.751 c 0 1.902 -0.477 3.424 -1.438 4.58 c -0.534 0.648 -1.324 1.238 -2.369 1.77 c 1.583 0.579 2.784 1.492 3.587 2.748 c 0.808 1.252 1.212 2.772 1.212 4.557 C 45.497 53.011 45.042 54.667 44.115 56.129 z M 69.994 50.084 H 53.769 c 0.089 2.24 0.863 3.806 2.329 4.702 c 0.884 0.562 1.956 0.837 3.212 0.837 c 1.324 0 2.403 -0.335 3.233 -1.023 c 0.453 -0.365 0.852 -0.879 1.197 -1.529 h 5.947 c -0.156 1.323 -0.872 2.664 -2.159 4.028 c -1.994 2.167 -4.79 3.253 -8.381 3.253 c -2.967 0 -5.581 -0.916 -7.85 -2.742 c -2.262 -1.832 -3.398 -4.804 -3.398 -8.927 c 0 -3.866 1.02 -6.825 3.066 -8.885 c 2.054 -2.064 4.705 -3.091 7.972 -3.091 c 1.937 0 3.683 0.346 5.24 1.042 c 1.553 0.697 2.836 1.793 3.847 3.3 c 0.915 1.327 1.503 2.862 1.777 4.609 C 69.953 46.677 70.022 48.154 69.994 50.084 z" />
                      </g>
                    </svg>
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" className="w-6 h-6 fill-white">
                      <g transform="translate(1.4 1.4) scale(2.81 2.81)">
                        <path d="M 45 31.77 c -7.444 0 -13.5 6.056 -13.5 13.5 s 6.056 13.5 13.5 13.5 s 13.5 -6.056 13.5 -13.5 S 52.444 31.77 45 31.77 z" />
                        <path d="M 63.718 0 H 26.282 C 11.767 0 0 11.767 0 26.282 v 37.437 C 0 78.233 11.767 90 26.282 90 h 37.437 C 78.233 90 90 78.233 90 63.718 V 26.282 C 90 11.767 78.233 0 63.718 0 z M 45 68.679 c -12.908 0 -23.409 -10.501 -23.409 -23.408 c 0 -12.908 10.501 -23.409 23.409 -23.409 c 12.907 0 23.408 10.501 23.408 23.409 C 68.408 58.178 57.907 68.679 45 68.679 z M 68.922 21.922 c -2.761 0 -5 -2.239 -5 -5 s 2.239 -5 5 -5 s 5 2.239 5 5 S 71.683 21.922 68.922 21.922 z" />
                      </g>
                    </svg>
                  </a>
                )}
                {member.social.pinterest && (
                  <a href={member.social.pinterest} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" className="w-6 h-6 fill-white">
                      <g transform="translate(1.4 1.4) scale(2.81 2.81)">
                        <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 c 24.853 0 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 48.668 56.763 c -3.105 0 -6.025 -1.613 -7.024 -3.519 c 0 0 -1.537 5.851 -1.909 7.285 c -0.692 2.662 -3.763 7.886 -5.66 9.471 l -0.243 -2.17 c -0.268 -2.425 -0.51 -6.153 0.106 -8.8 c 0.557 -2.392 3.594 -15.234 3.594 -15.234 s -0.917 -1.836 -0.917 -4.55 c 0 -4.261 2.47 -7.443 5.545 -7.443 c 2.615 0 3.878 1.963 3.878 4.317 c 0 2.629 -1.674 6.561 -2.538 10.204 c -0.722 3.05 1.53 5.538 4.538 5.538 c 5.447 0 9.634 -5.743 9.634 -14.034 c 0 -7.338 -5.273 -12.468 -12.801 -12.468 c -8.72 0 -13.838 6.541 -13.838 13.3 c 0 2.634 1.015 5.459 2.281 6.994 c 0.25 0.303 0.287 0.569 0.213 0.879 c -0.233 0.968 -0.75 3.05 -0.851 3.476 c -0.134 0.561 -0.444 0.68 -1.025 0.41 c -3.828 -1.782 -6.221 -7.378 -6.221 -11.873 c 0 -9.668 7.024 -18.546 20.25 -18.546 c 10.631 0 18.893 7.576 18.893 17.7 C 64.572 48.262 57.912 56.763 48.668 56.763 z" />
                      </g>
                    </svg>
                  </a>
                )}
              </div>
              <button
                onClick={() => toggleMember(member.name)}
                className="flex items-center justify-center space-x-2 mx-auto text-white hover:text-white/80 transition-colors"
              >
                <span>Ver más</span>
                {expandedMembers.includes(member.name) ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedMembers.includes(member.name) ? "auto" : 0,
                  opacity: expandedMembers.includes(member.name) ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-white opacity-90 mt-4 px-4">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
