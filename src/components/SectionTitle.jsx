import { motion } from "framer-motion";

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-full text-center"
    >
      <p
        className={`mb-3 text-sm font-bold uppercase tracking-[0.25em] ${
          light ? "text-[#c68b59]" : "text-[#a56c43]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-black sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#2b1b14]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 ${
            light ? "text-[#d3c0b3]" : "text-[#765f52]"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;