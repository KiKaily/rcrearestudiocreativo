import { motion } from "framer-motion";

const team = [
  {
    name: "Cristina García",
    role: "Directora Creativa",
    image: "/lovable-uploads/ad1f47f2-9950-4d60-ad70-217fec9cdab1.png",
  },
  {
    name: "Noé Greenwood",
    role: "Diseñador Senior",
    image: "/lovable-uploads/ad1f47f2-9950-4d60-ad70-217fec9cdab1.png",
  },
];

export const Team = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#FFB1B1] to-[#9FEFE7]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Nosotros
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
              <p className="text-white opacity-90">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};