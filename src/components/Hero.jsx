import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Coffee, Sparkles, Play, Star } from "lucide-react";

function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;

    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        max-w-[100vw]
        overflow-hidden
        bg-[#1e140f]
        [perspective:1500px]
      "
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2200&q=90"
          alt="Freshly brewed coffee"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1e140f]/80 sm:bg-[#1e140f]/75" />
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#1e140f]
            via-[#2b1b14]/70
            to-[#1e140f]/50
            lg:bg-gradient-to-r
            lg:from-[#1e140f]
            lg:via-[#2b1b14]/80
            lg:to-[#2b1b14]/30
          "
        />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#1e140f] to-transparent" />
        
        {/* Adjusted responsive blur blobs to prevent horizontal overflow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute
            -left-10
            top-10
            h-[250px]
            w-[250px]
            rounded-full
            bg-[#c68b59]
            blur-[90px]
            sm:-left-40
            sm:top-20
            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[150px]
          "
        />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute
            -right-10
            bottom-10
            h-[250px]
            w-[250px]
            rounded-full
            bg-[#8b5e3c]
            blur-[90px]
            sm:-right-40
            sm:bottom-10
            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[150px]
          "
        />
      </div>

      {/* Main Content Container */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-4
          pb-20
          pt-28
          sm:px-6
          lg:px-8
        "
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#c68b59]/40
                bg-[#2b1b14]/80
                px-4
                py-2
                text-xs
                font-medium
                text-[#e5c19d]
                shadow-lg
                backdrop-blur-md
                sm:text-sm
              "
            >
              <Sparkles size={15} className="text-[#c68b59]" />
              Freshly Roasted Every Day
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="
                text-4xl
                font-black
                leading-[1.1]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Your Daily Cup{" "}
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#e5c19d]
                  via-[#c68b59]
                  to-[#a96d42]
                  bg-clip-text
                  text-transparent
                "
              >
                of Happiness.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-[#d9c7bb]
                sm:text-base
                lg:text-lg
              "
            >
              Discover handcrafted coffee made from carefully selected beans, roasted with passion and served with warmth, comfort, and a little bit of magic.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="
                mt-8
                flex
                w-full
                flex-col
                justify-center
                gap-3
                sm:w-auto
                sm:flex-row
                lg:justify-start
              "
            >
              <motion.a
                href="#menu"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#c68b59]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(198,139,89,0.3)]
                  transition-all
                  duration-300
                  hover:bg-[#d9a878]
                  sm:px-7
                  sm:py-4
                  sm:text-base
                "
              >
                Explore Menu
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#c68b59]
                  hover:bg-[#c68b59]/10
                  hover:text-[#e5c19d]
                  sm:px-7
                  sm:py-4
                  sm:text-base
                "
              >
                <Play size={15} fill="currentColor" />
                Our Story
              </motion.a>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="
                mt-10
                grid
                w-full
                max-w-md
                grid-cols-3
                gap-4
                border-t
                border-white/10
                pt-6
                lg:max-w-none
              "
            >
              <div>
                <p className="text-xl font-black text-white sm:text-2xl">10+</p>
                <p className="mt-1 text-[11px] text-[#b9a79b] sm:text-xs">Years Experience</p>
              </div>
              <div>
                <p className="text-xl font-black text-white sm:text-2xl">50+</p>
                <p className="mt-1 text-[11px] text-[#b9a79b] sm:text-xs">Coffee Varieties</p>
              </div>
              <div>
                <p className="text-xl font-black text-white sm:text-2xl">1K+</p>
                <p className="mt-1 text-[11px] text-[#b9a79b] sm:text-xs">Happy Customers</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Interactive 3D Coffee Cup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[300px]
              scale-[0.8]
              cursor-pointer
              sm:max-w-lg
              sm:scale-100
              [transform-style:preserve-3d]
            "
          >
            {/* Main Glow */}
            <div className="absolute inset-10 rounded-full bg-[#c68b59] blur-[70px] opacity-30" />

            {/* Cup Container */}
            <div
              className="
                relative
                mx-auto
                flex
                aspect-square
                max-w-sm
                items-center
                justify-center
                rounded-full
                border
                border-[#c68b59]/30
                bg-gradient-to-br
                from-[#6f4e37]/90
                via-[#3b2418]/90
                to-[#17100c]
                shadow-[0_30px_80px_rgba(0,0,0,0.5)]
                [transform-style:preserve-3d]
              "
            >
              <div className="absolute inset-8 rounded-full border border-[#c68b59]/20" />

              {/* Cup Body */}
              <div
                className="
                  relative
                  flex
                  h-48
                  w-52
                  items-start
                  justify-center
                  rounded-b-[4rem]
                  rounded-t-[2rem]
                  bg-gradient-to-br
                  from-[#f4e4d5]
                  via-[#d8bc9f]
                  to-[#9a7253]
                  shadow-[inset_-20px_-15px_30px_rgba(0,0,0,0.3),0_25px_40px_rgba(0,0,0,0.5)]
                  sm:h-52
                  sm:w-60
                  [transform:translateZ(40px)]
                "
              >
                {/* Cup Rim */}
                <div
                  className="
                    absolute
                    -top-6
                    left-1/2
                    flex
                    h-16
                    w-44
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-[50%]
                    bg-gradient-to-br
                    from-[#5c3a28]
                    via-[#2a1910]
                    to-[#0f0805]
                    sm:w-52
                  "
                >
                  <div
                    className="
                      relative
                      h-12
                      w-36
                      overflow-hidden
                      rounded-[50%]
                      bg-gradient-to-t
                      from-[#1a0e08]
                      to-[#2e180f]
                      sm:w-40
                    "
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex h-7 w-10 items-center justify-center rounded-full border-2 border-[#d4a373]/70 bg-[#c68b59]/20">
                        <div className="h-3 w-5 rounded-full border border-[#fefae0]/80" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cup Logo */}
                <div className="absolute top-16 flex flex-col items-center text-[#5c3a28]">
                  <Coffee size={26} />
                  <span className="mt-1 text-[8px] font-black uppercase tracking-[0.2em]">
                    Dina & Cafe
                  </span>
                </div>

                {/* Handle */}
                <div
                  className="
                    absolute
                    -right-14
                    top-10
                    h-24
                    w-16
                    rounded-r-[3rem]
                    border-[11px]
                    border-[#cca88c]
                    bg-transparent
                  "
                />
              </div>
            </div>

            {/* Floating Rating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute
                left-0
                top-6
                rounded-xl
                border
                border-white/10
                bg-[#2b1b14]/85
                p-3
                shadow-xl
                backdrop-blur-md
                sm:-left-4
                [transform:translateZ(30px)]
              "
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c68b59]">
                  <Star size={14} fill="currentColor" className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-[#b9a79b]">Customer Rating</p>
                  <p className="text-xs font-bold text-white sm:text-sm">4.9 / 5.0</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Favorite Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute
                bottom-0
                right-0
                rounded-xl
                border
                border-white/10
                bg-[#2b1b14]/85
                p-3
                shadow-xl
                backdrop-blur-md
                sm:-right-2
                [transform:translateZ(30px)]
              "
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c68b59]/20">
                  <Coffee size={20} className="text-[#c68b59]" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-[#b9a79b]">
                    Today's Favorite
                  </p>
                  <p className="text-xs font-bold text-white sm:text-sm">Caramel Latte</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;