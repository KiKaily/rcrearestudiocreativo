import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  title?: string;
  isVideo?: boolean;
}

export const Lightbox = ({ isOpen, onClose, src, alt, title, isVideo }: LightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Blurred backdrop */}
          <motion.div
            className="absolute inset-0"
            initial={{ 
              opacity: 0,
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)"
            }}
            animate={{ 
              opacity: 1,
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(0, 0, 0, 0.6)"
            }}
            exit={{ 
              opacity: 0,
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)"
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              WebkitBackdropFilter: "blur(16px)"
            }}
          />
          
          {/* Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* Media - Image or Video */}
            {isVideo ? (
              <video
                src={src}
                controls
                autoPlay
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <img
                src={src}
                alt={alt}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
            )}
            
            {/* Title */}
            {title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-medium text-center">{title}</h3>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};