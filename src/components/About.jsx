import { motion } from "framer-motion";
import { Coffee, Leaf, Heart, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Coffee Varieties" },
  { number: "1K+", label: "Happy Customers" },
];

function About() {
  return (
    <section id="about" className="bg-[#f8f3ed] py-20 sm:py-28">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Story"
          title="More Than Just Coffee"
          description="We believe every great cup has a story. From carefully selected beans to the final pour, we put passion into everything we serve."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative [perspective:1000px]"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-[#c68b59]/30 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />

            <motion.div
              whileHover={{
                rotateX: 4,
                rotateY: -6,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl shadow-2xl [transform-style:preserve-3d]"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
                alt="Barista crafting coffee"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2b1b14]/80 via-[#2b1b14]/20 to-transparent" />

              <div className="absolute bottom-7 left-7 rounded-2xl border border-white/10 bg-white/15 p-5 backdrop-blur-md [transform:translateZ(40px)]">
                <p className="text-sm text-[#dbc9bc]">Crafted with</p>
                <p className="font-bold text-white">Passion & Care</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#c68b59]/10 px-4 py-2 text-sm font-semibold text-[#8a5837]">
              <Leaf size={16} />
              Since 2016
            </span>

            <h3 className="mt-5 text-3xl font-black text-[#2b1b14] sm:text-4xl">
              Where Every Sip Feels Like Home
            </h3>

            <p className="mt-5 leading-7 text-[#765f52]">
              Brew & Bean started with a simple dream — create a place where
              people could slow down, connect, and enjoy truly exceptional
              coffee.
            </p>

            <p className="mt-4 leading-7 text-[#765f52]">
              Today, we continue that tradition by working with passionate
              farmers, expert roasters, and talented baristas who care about
              every detail.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <Heart className="text-[#c68b59]" size={24} />
                <p className="mt-3 font-bold">Made With Love</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <Leaf className="text-[#c68b59]" size={24} />
                <p className="mt-3 font-bold">Fresh Beans</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <Award className="text-[#c68b59]" size={24} />
                <p className="mt-3 font-bold">Premium Quality</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-[#2b1b14] p-7 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <p className="text-4xl font-black text-[#c68b59]">
                {stat.number}
              </p>
              <p className="mt-2 text-sm text-[#d4c2b6]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;