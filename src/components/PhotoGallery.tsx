"use client";

import { motion } from "framer-motion";

export const PhotoGallery = () => {
  const photos = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg"];

  return (
    <section id="gallery" className="py-16 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
};
