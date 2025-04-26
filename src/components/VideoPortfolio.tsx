"use client";

import { motion } from "framer-motion";

export const VideoPortfolio = () => {
  const videos = [
    { title: "Video 1", embedUrl: "https://www.youtube.com/embed/yourvideoid1" },
    { title: "Video 2", embedUrl: "https://www.youtube.com/embed/yourvideoid2" },
  ];

  return (
    <section id="videos" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <iframe
              src={video.embedUrl}
              className="w-full h-64 md:h-80"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4 className="text-white text-center mt-2">{video.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
