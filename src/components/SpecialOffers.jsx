import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Gift, Sparkles, Coffee, Star } from "lucide-react";

function SpecialOffers() {
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
    ["6deg", "-6deg"]
  );

  const rotateY = useTransform(
    mouseX,
    [-0.5, 0.5],
    ["-8deg", "8deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseXFromCenter =
      e.clientX - rect.left - rect.width / 2;

    const mouseYFromCenter =
      e.clientY - rect.top - rect.height / 2;

    x.set(mouseXFromCenter / rect.width);
    y.set(mouseYFromCenter / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#2b1b14]
        py-20
        sm:py-24
      "
    >
    
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
          pointer-events-none
          absolute
          -left-40
          top-10
          h-96
          w-96
          rounded-full
          bg-[#c68b59]
          blur-[120px]
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
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#8b5e3c]
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.94,
            rotateX: 8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
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
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-[#c68b59]/30
            bg-gradient-to-br
            from-[#6f4e37]
            via-[#4b2d1d]
            to-[#2b1b14]
            p-8
            shadow-[0_35px_90px_rgba(0,0,0,0.4)]
            [transform-style:preserve-3d]
            sm:p-12
            lg:p-16
          "
        >

    
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-72
              w-72
              rounded-full
              bg-[#c68b59]
              blur-3xl
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-72
              w-72
              rounded-full
              bg-[#e5c19d]
              blur-3xl
            "
          />

          <motion.div
            initial={{
              x: "-120%",
            }}
            whileHover={{
              x: "120%",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              w-1/3
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "
          />

          <div
            className="
              relative
              z-10
              grid
              items-center
              gap-12
              lg:grid-cols-[1fr_auto]
            "
          >

            <div
              style={{
                transform: "translateZ(45px)",
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#e5c19d]/20
                  bg-black/20
                  px-4
                  py-2
                  text-[#e5c19d]
                  backdrop-blur-md
                "
              >
                <motion.span
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <Gift size={19} />
                </motion.span>

                <span
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-widest
                  ">
                  Today's Special
                </span>
              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="
                  max-w-7Xl
                  text-3xl
                  font-black
                  leading-tight
                  text-white
                  sm:text-5xl
                "
              >
                Buy 2 Cappuccinos,

                <motion.span
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
                  Get 1 Dessert Free!
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.6,
                }}
                className="
                  mt-5
                  max-w-xl
                  leading-7
                  text-[#d8c6ba]
                "
              >
                Treat yourself and someone special.
                Enjoy our creamy cappuccinos with a
                delicious dessert on us.
              </motion.p>

              <motion.a
                href="#menu"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.6,
                }}
                className="
                  group/btn
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#c68b59]
                  px-6
                  py-3.5
                  font-bold
                  text-white
                  shadow-[0_15px_35px_rgba(198,139,89,0.25)]
                  transition-all
                  duration-300
                  hover:bg-[#d49a68]
                  hover:shadow-[0_20px_45px_rgba(198,139,89,0.4)]
                "
              >
                Order Now

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover/btn:translate-x-2
                  "
                />
              </motion.a>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -20,
                z: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                z: 60,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 14,
              }}
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, -3, 3, 0],
              }}
              className="
                relative
                mx-auto
                flex
                h-40
                w-40
                shrink-0
                items-center
                justify-center
                rounded-full
                border-4
                border-dashed
                border-[#e5c19d]/60
                bg-gradient-to-br
                from-[#d49a68]
                to-[#a96d42]
                shadow-[0_25px_60px_rgba(0,0,0,0.4)]
                [transform-style:preserve-3d]
                sm:h-48
                sm:w-48
              "
            >

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-3
                  rounded-full
                  border
                  border-[#e5c19d]/20
                "
              />

              <motion.div
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-5
                  rounded-full
                  bg-[#f2c49d]
                  blur-2xl
                "
              />
              <div
                className="
                  relative
                  z-10
                  text-center
                  text-white
                  [transform:translateZ(30px)]
                "
              >
                <Sparkles
                  className="mx-auto mb-1"
                  size={22}
                />

                <p className="text-4xl font-black">
                  25%
                </p>

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-wider
                  "
                >
                  Special Offer
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              transform: "translateZ(70px)",
            }}
            className="
              absolute
              right-8
              top-8
              hidden
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-3
              text-[#e5c19d]
              backdrop-blur-md
              sm:block
            "
          >
            <Coffee size={22} />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-8
              right-1/3
              hidden
              text-[#e5c19d]/70
              sm:block
            "
          >
            <Star
              size={18}
              fill="currentColor"
            />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
            className="
              absolute
              left-1/3
              top-8
              hidden
              text-[#c68b59]/70
              sm:block
            "
          >
            <Sparkles size={18} />
          </motion.div>

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[2rem]
              border
              border-white/5
              transition-all
              duration-500
              group-hover:border-[#d9a878]/40
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default SpecialOffers;