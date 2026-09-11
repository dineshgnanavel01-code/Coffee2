import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { testimonials } from "../data/testimonialsData";

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[active];

  return (
    <section className="bg-[#2b1b14] py-20 sm:py-28">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="Loved By Coffee Lovers"
          description="Here's what our customers say about their Dina & Cafe experience."
          light/>

        <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="flex h-full flex-col items-center text-center">
              <div className="mb-5 rounded-full bg-[#c68b59]/15 p-4">
                <Quote size={28} className="text-[#c68b59]" />
              </div>

              <div className="mb-5 flex gap-1">
                {Array.from({ length: testimonial.rating }).map(
                  (_, index) => (
                    <Star
                      key={index}
                      size={17}
                      fill="currentColor"
                      className="text-[#c68b59]" />
                  )
                )}
              </div>

              <p className="max-w-full text-lg leading-8 text-[#eadbd1] sm:text-xl">
                "{testimonial.review}"
              </p>

              <div className="mt-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#c68b59] text-lg font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <h3 className="mt-3 font-bold text-white">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-[#bca99c]">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === active
                    ? "w-7 bg-[#c68b59]"
                    : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;