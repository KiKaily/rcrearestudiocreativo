import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    name: "Noel cresencio",
    role: "creativo, comunicador, fotógrafo y editor de vídeo",
    image: "./noel.jpg",
    description: "Responsable de comunicación, web y redes sociales. Formado en educación viva, terapeuta psico-corporal y comunicación consciente. El más autodidacta y multidisciplinar del equipo. El solucionador de problemas. Capaz de crear una web sin ser programador. Curioso por naturaleza, de acción eficiente y pensamiento innovador. Apasionado sobre cómo funciona el mundo y las relaciones humanas. Pregúntale sobre cualquier cosa y te podrá decir algo interesante al respecto. Colabora en los diseños, webs, fotos, videos y procesos en redes sociales.",
    social: {
      instagram: "https://www.instagram.com/noelcrefoto/",
      linkedin: "https://www.linkedin.com/in/noelcresencio/",
      behance: "https://www.behance.net/noelcresencio"
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
    <section id="Team" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          nosotros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-white opacity-90 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 mb-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="./linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                  </a>
                )}
                {member.social.behance && (
                  <a href={member.social.behance} target="_blank" rel="noopener noreferrer">
                    <img src="./behance.svg" alt="Behance" className="w-6 h-6" />
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <img src="./instagram.svg" alt="Instagram" className="w-6 h-6" />
                  </a>
                )}
                {member.social.pinterest && (
                  <a href={member.social.pinterest} target="_blank" rel="noopener noreferrer">
                    <img src="./pinterest.svg" alt="Pinterest" className="w-6 h-6" />
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