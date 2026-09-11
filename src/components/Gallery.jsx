import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { galleryItems } from "../data/galleryData";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex]);
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#f8f3ed] py-20 sm:py-28"
    >
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#c68b59]/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#6f4e37]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Gallery"
          title="A Taste of Dina & Cafe"
          description="Take a glimpse into our coffee, our café, and the moments that make us special."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 60,
                rotateX: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -14,
                rotateX: 4,
                rotateY: index % 2 === 0 ? -4 : 4,
                scale: 1.015,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1200,
              }}
              className={`group relative overflow-hidden rounded-[2rem] bg-[#2b1b14] shadow-xl ${
                index === 0 || index === 5
                  ? "lg:h-96"
                  : "lg:h-72"
              }`}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-64 w-full object-cover lg:h-full cursor-pointer"
                onClick={() => handleOpen(item, index)}
                whileHover={{
                  scale: 1.15,
                  rotate: index % 2 === 0 ? 1.5 : -1.5,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#1e140f]/95 via-[#2b1b14]/20 to-transparent pointer-events-none"
                initial={{ opacity: 0.45 }}
                whileHover={{ opacity: 0.9 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -20,
                  z: 40,
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  z: 80,
                }}
                transition={{ duration: 0.4 }}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white shadow-xl backdrop-blur-md pointer-events-none"
              >
                <Camera size={19} />
              </motion.div>

              <motion.div
                className="absolute inset-x-0 bottom-0 p-6 pointer-events-none"
                initial={{ y: 12 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                  }}
                  className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d9a878]"
                >
                  {item.type}
                </motion.span>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </h3>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "55%" }}
                  transition={{ duration: 0.4 }}
                  className="mt-3 h-0.5 rounded-full bg-[#c68b59]"
                />
              </motion.div>

              <motion.button
                type="button"
                onClick={() => handleOpen(item, index)}
                initial={{ opacity: 0, scale: 0.7 }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                }}
                className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-[#c68b59]"
                aria-label={`View ${item.title}`}
              >
                <Maximize2 size={17} />
              </motion.button>

              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 transition duration-500 group-hover:border-[#d9a878]/60" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl bg-[#2b1b14] shadow-2xl border border-white/10"
            >
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-[#c68b59]"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-[#c68b59]"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-[#c68b59]"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="max-h-[60vh] lg:max-h-[80vh] lg:w-2/3 bg-black flex items-center justify-center">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="h-full w-full object-contain max-h-[70vh]"
                  />
                </div>
                <div className="p-6 lg:w-1/3 flex flex-col justify-center bg-[#2b1b14] text-white">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9a878]">
                    {selectedImage.type}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold">{selectedImage.title}</h3>
                  <div className="mt-4 h-0.5 w-12 rounded-full bg-[#c68b59]" />
                  <p className="mt-4 text-sm text-[#f8f3ed]/80">
                    Explore more moments captured right here at Dina & Cafe. Experience the warmth and passion in every detail.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;