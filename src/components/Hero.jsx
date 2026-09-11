
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {ArrowRight,Coffee,Sparkles,Play,Star,Leaf,} from "lucide-react";

function Hero() {
 

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, {
    stiffness: 150,
    damping: 20,
  });

  const mouseY = useSpring(y, {
    stiffness: 150,
    damping: 20,
  });

  const rotateX = useTransform(
    mouseY,
    [-0.5, 0.5],
    ["15deg", "-15deg"]
  );

  const rotateY = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["-15deg", "15deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXFromCenter =
      e.clientX - rect.left - width / 2;

    const mouseYFromCenter =
      e.clientY - rect.top - height / 2;

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
        overflow-hidden
        bg-[#1e140f]
        [perspective:1500px]
      "
    >
    
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2200&q=90"
          alt="Freshly brewed coffee"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
        <div className="absolute inset-0 bg-[#1e140f]/75" />
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#1e140f]
            via-[#2b1b14]/80
            to-[#2b1b14]/30
          "
        />
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-72
            bg-gradient-to-t
            from-[#1e140f]
            to-transparent
          "
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#c68b59]
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#8b5e3c]
            blur-[150px]
          "
        />
      </div>

      {/* ============================================
          FLOATING PARTICLES
      ============================================ */}

      <motion.span
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[8%]
          top-[25%]
          h-2
          w-2
          rounded-full
          bg-[#e5c19d]
        "
      />

      <motion.span
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[12%]
          top-[20%]
          h-3
          w-3
          rounded-full
          bg-[#c68b59]
        "
      />

      <motion.span
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[25%]
          left-[45%]
          h-2
          w-2
          rounded-full
          bg-[#e5c19d]
        "
      />

      {/* ============================================
          MAIN CONTENT
      ============================================ */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-full
          items-center
          px-4
          pb-16
          pt-32
          sm:px-6
          lg:px-8
        "
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* ==========================================
              LEFT CONTENT
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center lg:text-left"
          >
            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#c68b59]/40
                bg-[#2b1b14]/60
                px-4
                py-2
                text-sm
                text-[#e5c19d]
                shadow-lg
                backdrop-blur-md
              "
            >
              <Sparkles
                size={15}
                className="text-[#c68b59]"
              />

              Freshly Roasted Every Day
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
              }}
              className="
                text-5xl
                font-black
                leading-[1.02]
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl
              "
            >
              Your Daily Cup

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
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-6
                max-w-xl
                text-base
                leading-7
                text-[#d9c7bb]
                sm:text-lg
                lg:mx-0
              "
            >
              Discover handcrafted coffee made from carefully
              selected beans, roasted with passion and served
              with warmth, comfort, and a little bit of magic.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.65,
                duration: 0.7,
              }}
              className="
                mt-8
                flex
                flex-col
                justify-center
                gap-4
                sm:flex-row
                lg:justify-start
              "
            >
              {/* Explore Menu */}

              <motion.a
                href="#menu"
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#c68b59]
                  px-7
                  py-4
                  font-bold
                  text-white
                  shadow-[0_15px_35px_rgba(198,139,89,0.25)]
                  transition
                  duration-300
                  hover:bg-[#d9a878]
                  hover:shadow-[0_20px_45px_rgba(198,139,89,0.4)]
                "
              >
                Explore Menu

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </motion.a>

              {/* Our Story */}

              <motion.a
                href="#about"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  px-7
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition
                  duration-300
                  hover:border-[#c68b59]
                  hover:bg-[#c68b59]/10
                  hover:text-[#e5c19d]
                "
              >
                <Play
                  size={16}
                  fill="currentColor"
                />

                Our Story
              </motion.a>
            </motion.div>

            {/* Statistics */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.85,
                duration: 0.7,
              }}
              className="
                mt-10
                flex
                justify-center
                gap-6
                border-t
                border-white/10
                pt-7
                lg:justify-start
                lg:gap-10
              "
            >
              <div>
                <p className="text-2xl font-black text-white">
                  10+
                </p>

                <p className="mt-1 text-xs text-[#b9a79b]">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">
                  50+
                </p>

                <p className="mt-1 text-xs text-[#b9a79b]">
                  Coffee Varieties
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">
                  1K+
                </p>

                <p className="mt-1 text-xs text-[#b9a79b]">
                  Happy Customers
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ==========================================
              INTERACTIVE 3D COFFEE CUP
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              x: 80,
              rotateY: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              rotateY: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
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
              max-w-xl
              cursor-pointer
              [transform-style:preserve-3d]
            "
          >
            {/* Main Glow */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-10
                rounded-full
                bg-[#c68b59]
                blur-[80px]
              "
            />

            {/* Rotating Orbit */}

            <motion.div
              animate={{
                rotateZ: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-2
                rounded-full
                border
                border-[#c68b59]/30
                [transform-style:preserve-3d]
              "
            >
              <span
                className="
                  absolute
                  -left-2
                  top-1/2
                  h-4
                  w-4
                  rounded-full
                  bg-[#c68b59]
                  shadow-[0_0_20px_#c68b59]
                "
              />

              <span
                className="
                  absolute
                  right-8
                  top-10
                  h-3
                  w-3
                  rounded-full
                  bg-[#e5c19d]
                  shadow-[0_0_15px_#e5c19d]
                "
              />

              <span
                className="
                  absolute
                  bottom-10
                  right-1/4
                  h-2
                  w-2
                  rounded-full
                  bg-[#a96d42]
                "
              />
            </motion.div>

            {/* ========================================
                CUP CONTAINER
            ======================================== */}

            <motion.div
              animate={{
                y: [0, -14, 0],
                rotateZ: [0, 1, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                mx-auto
                flex
                aspect-square
                max-w-md
                items-center
                justify-center
                rounded-full
                border
                border-[#c68b59]/30
                bg-gradient-to-br
                from-[#6f4e37]/90
                via-[#3b2418]/90
                to-[#17100c]
                shadow-[0_40px_100px_rgba(0,0,0,0.55)]
                [transform-style:preserve-3d]
              "
            >
              {/* Inner Rings */}

              <div className="absolute inset-8 rounded-full border border-[#c68b59]/20" />

              <div className="absolute inset-14 rounded-full border border-[#e5c19d]/10" />

              {/* Floor Shadow */}

              <div
                className="
                  absolute
                  bottom-20
                  h-8
                  w-52
                  rounded-full
                  bg-black/60
                  blur-2xl
                "
              />

              {/* ======================================
                  CUP BODY
              ====================================== */}

              <div
                className="
                  relative
                  flex
                  h-52
                  w-60
                  items-start
                  justify-center
                  rounded-b-[5rem]
                  rounded-t-[2.5rem]
                  bg-gradient-to-br
                  from-[#f4e4d5]
                  via-[#d8bc9f]
                  to-[#9a7253]
                  shadow-[inset_-25px_-20px_40px_rgba(0,0,0,0.3),0_30px_50px_rgba(0,0,0,0.5)]
                  sm:h-56
                  sm:w-64
                  [transform:translateZ(60px)]
                "
              >
                {/* Cup Rim */}

                <div
                  className="
                    absolute
                    -top-7
                    left-1/2
                    flex
                    h-20
                    w-52
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-[50%]
                    bg-gradient-to-br
                    from-[#5c3a28]
                    via-[#2a1910]
                    to-[#0f0805]
                    shadow-[inset_0_5px_15px_rgba(255,255,255,0.15)]
                    sm:w-56
                  "
                >
                  {/* Coffee */}

                  <div
                    className="
                      relative
                      h-14
                      w-40
                      overflow-hidden
                      rounded-[50%]
                      bg-gradient-to-t
                      from-[#1a0e08]
                      to-[#2e180f]
                      shadow-[inset_0_8px_20px_rgba(198,139,89,0.3)]
                      sm:w-44
                    "
                  >
                    <motion.div
                      animate={{
                        opacity: [0.4, 0.7, 0.4],
                        scale: [0.98, 1.02, 0.98],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-tr
                        from-transparent
                        via-[#c68b59]/20
                        to-transparent
                      "
                    />

                    {/* Latte Art */}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="
                          relative
                          flex
                          h-8
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border-2
                          border-[#d4a373]/70
                          bg-[#c68b59]/20
                          shadow-[0_0_10px_rgba(198,139,89,0.4)]
                        "
                      >
                        <div className="h-4 w-6 rounded-full border border-[#fefae0]/80" />

                        <div
                          className="
                            absolute
                            -bottom-2
                            h-3
                            w-1.5
                            rounded-full
                            bg-[#d4a373]/80
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cup Logo */}

                <div
                  className="
                    absolute
                    top-20
                    flex
                    flex-col
                    items-center
                    text-[#5c3a28]
                  "
                >
                  <Coffee
                    size={30}
                    className="drop-shadow-sm"
                  />

                  <span
                    className="
                      mt-1
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.25em]
                    "
                  >
                    Dina & Cafe
                  </span>
                </div>


                <div
                  className="
                    absolute
                    -right-16
                    top-12
                    h-28
                    w-20
                    rounded-r-[3.5rem]
                    border-[13px]
                    border-[#cca88c]
                    bg-transparent
                    shadow-[inset_-6px_-6px_12px_rgba(0,0,0,0.3),5px_5px_15px_rgba(0,0,0,0.2)]
                  "
                />
              </div>


              <div
                className="
                  pointer-events-none
                  absolute
                  -top-16
                  left-1/2
                  flex
                  -translate-x-1/2
                  gap-4
                "
              >
                <motion.span
                  animate={{
                    y: [0, -25],
                    opacity: [0, 0.5, 0],
                    scale: [0.8, 1.2, 1.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="
                    h-16
                    w-2.5
                    rounded-full
                    bg-gradient-to-t
                    from-white/0
                    via-white/30
                    to-white/0
                    blur-md
                  "
                />

                <motion.span
                  animate={{
                    y: [0, -30],
                    opacity: [0, 0.4, 0],
                    scale: [0.8, 1.3, 1.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                  className="
                    h-20
                    w-2.5
                    rounded-full
                    bg-gradient-to-t
                    from-white/0
                    via-white/25
                    to-white/0
                    blur-md
                  "
                />

                <motion.span
                  animate={{
                    y: [0, -22],
                    opacity: [0, 0.5, 0],
                    scale: [0.8, 1.2, 1.4],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: 1.4,
                    ease: "easeOut",
                  }}
                  className="
                    h-14
                    w-2
                    rounded-full
                    bg-gradient-to-t
                    from-white/0
                    via-white/30
                    to-white/0
                    blur-md
                  "
                />
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-2
                top-10
                rounded-2xl
                border
                border-white/10
                bg-[#2b1b14]/70
                p-4
                shadow-2xl
                backdrop-blur-xl
                sm:-left-6
                [transform:translateZ(40px)]
              "
            >
              <div className="flex items-center gap-2">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#c68b59]
                  "
                >
                  <Star
                    size={17}
                    fill="currentColor"
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-xs text-[#b9a79b]">
                    Customer Rating
                  </p>

                  <p className="font-bold text-white">
                    4.9 / 5.0
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateZ: [0, -2, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-3
                right-0
                rounded-2xl
                border
                border-white/10
                bg-[#2b1b14]/75
                p-4
                shadow-2xl
                backdrop-blur-xl
                sm:-right-5
                [transform:translateZ(40px)]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#c68b59]/20
                  "
                >
                  <Coffee
                    size={23}
                    className="text-[#c68b59]"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-[#b9a79b]
                    "
                  >
                    Today's Favorite
                  </p>

                  <p className="mt-1 font-bold text-white">
                    Caramel Latte
                  </p>

                  <div className="mt-1 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={11}
                        fill="currentColor"
                        className="text-[#c68b59]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 15, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-2
                top-0
                text-[#c68b59]
                sm:-right-8
                [transform:translateZ(50px)]
              "
            >
              <Leaf
                size={35}
                strokeWidth={1}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
        }}
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/50
          sm:flex
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
          "
        >
          Scroll to explore
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            h-8
            w-[1px]
            bg-gradient-to-b
            from-[#c68b59]
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}

export default Hero;
