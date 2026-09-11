
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {Star,ShoppingBag,Check, Coffee,} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { menuItems } from "../data/menuData";
import { useCart } from "../context/CartContext";

const categories = [
  "All",
  "Espresso",
  "Cappuccino",
  "Latte",
  "Cold Coffee",
  "Desserts",
  "Bakery",
  "Biscuits",
];

function ProductCard({ item, index, handleAddToCart, addedId }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const imageX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  const imageY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 150,
      damping: 20,
    }
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const isAdded = addedId === item.id;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
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
        border border-white/80
        bg-white
        shadow-[0_12px_35px_rgba(43,27,20,0.08)]
        transition-shadow
        duration-500
        hover:shadow-[0_30px_70px_rgba(43,27,20,0.25)]
        [perspective:1200px]
      "
    >

      <div
        className="
          relative
          h-60
          overflow-hidden
          bg-[#2b1b14]
        "
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.img
          src={item.image}
          alt={item.name}
          loading="lazy"
          style={{
            x: imageX,
            y: imageY,
            scale: isHovered ? 1.16 : 1,
            transformStyle: "preserve-3d",
          }}
          transition={{
            scale: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
            h-full
            w-full
            object-cover
            will-change-transform
          "
        />
        <motion.div
          animate={{
            opacity: isHovered ? 0.8 : 0.55,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/5
            to-transparent
          "
        />

        <motion.div
          animate={{
            y: isHovered ? -5 : 0,
            z: isHovered ? 30 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 15,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/20
            bg-black/35
            px-3
            py-1.5
            text-xs
            font-semibold
            text-white
            shadow-xl
            backdrop-blur-md
          "
        >
          {item.category}
        </motion.div>
        <motion.div
          animate={{
            y: isHovered ? -7 : 0,
            z: isHovered ? 40 : 0,
            scale: isHovered ? 1.08 : 1,
            rotateZ: isHovered ? -2 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 15,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="
            absolute
            bottom-4
            right-4
            rounded-full
            bg-white/95
            px-4
            py-2
            text-sm
            font-black
            text-[#2b1b14]
            shadow-xl
            backdrop-blur
          "
        >
          ₹{Number(item.price).toLocaleString("en-IN")}
        </motion.div>
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? "100%" : "-100%",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-[-50%]
            w-1/2
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
          "
        />
      </div>

      <div
        className="relative p-5"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <motion.h3
            animate={{
              z: isHovered ? 18 : 0,
              x: isHovered ? 2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
              text-lg
              font-extrabold
              leading-tight
              text-[#2b1b14]
              transition-colors
              duration-300
              group-hover:text-[#a15f37]
            "
          >
            {item.name}
          </motion.h3>

          <motion.div
            animate={{
              scale: isHovered ? 1.08 : 1,
              y: isHovered ? -2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 15,
            }}
            className="
              flex
              shrink-0
              items-center
              gap-1
              rounded-full
              bg-[#f8f3ed]
              px-2.5
              py-1
              text-xs
              font-bold
              text-[#9a693f]
            "
          >
            <Star
              size={13}
              fill="currentColor"
            />

            <span>4.9</span>
          </motion.div>
        </div>

        <p
          className="
            mt-3
            min-h-[48px]
            line-clamp-2
            text-sm
            leading-6
            text-[#806b5f]
          "
        >
          {item.description}
        </p>

        <div className="my-4 h-px bg-[#eee4da]" />
        <div className="flex items-center justify-between gap-3">

          <motion.div
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
          >
            <p className="text-xs font-medium text-[#9a8a80]">
              Starting from
            </p>

            <p className="mt-0.5 text-xl font-black text-[#a15f37]">
              ₹{Number(item.price).toLocaleString("en-IN")}
            </p>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => handleAddToCart(item)}
            whileHover={{
              scale: 1.08,
              y: -4,
              rotateZ: -1,
            }}
            whileTap={{
              scale: 0.93,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className={`
              relative
              flex
              min-h-[43px]
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-full
              px-4
              py-2.5
              text-xs
              font-bold
              text-white
              shadow-lg
              transition-colors
              duration-300
              ${
                isAdded
                  ? "bg-[#5d7d45]"
                  : "bg-[#2b1b14] hover:bg-[#c68b59]"
              }
            `}
          >
            {!isAdded && (
              <motion.span
                initial={{
                  x: "-120%",
                }}
                whileHover={{
                  x: "120%",
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  absolute
                  inset-y-0
                  left-0
                  w-1/3
                  skew-x-[-20deg]
                  bg-white/20
                "
              />
            )}

            <AnimatePresence mode="wait">
              {isAdded ? (
                <motion.span
                  key="added"
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.6,
                  }}
                  className="relative z-10 flex items-center gap-2"
                >
                  <Check size={15} />
                  Added
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{
                    opacity: 0,
                    y: 4,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="relative z-10 flex items-center gap-2"
                >
                  <ShoppingBag size={15} />
                  Add to Cart
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[2rem]
          ring-1
          ring-[#c68b59]/30
        "
      />
    </motion.article>
  );
}



function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedId, setAddedId] = useState(null);

  const { addToCart } = useCart();

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const handleAddToCart = (item) => {
    addToCart(item);

    setAddedId(item.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <section
      id="menu"
      className="
        relative
        overflow-hidden
        bg-[#eee4da]
        py-20
        sm:py-28
      "
    >

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-[#c68b59]/10
          blur-3xl
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          bg-[#6f4e37]/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">

        <SectionTitle
          eyebrow="Our Menu"
          title="Coffee Made Your Way"
          description="From rich espresso to refreshing cold brews, discover your next favorite cup."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-[#2b1b14] text-white shadow-xl shadow-[#2b1b14]/20"
                      : "bg-white text-[#6f4e37] shadow-sm hover:bg-[#c68b59] hover:text-white hover:shadow-lg"
                  }
                `}
              >
                {category}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mb-8
            flex
            items-center
            justify-center
            gap-2
            text-sm
            text-[#806b5f]
          "
        >
          <Coffee size={16} />

          <span>
            Showing{" "}
            <strong className="text-[#2b1b14]">
              {filteredItems.length}
            </strong>{" "}
            {filteredItems.length === 1
              ? "coffee"
              : "items"}
          </span>
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              grid
              gap-7
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
            style={{
              perspective: "1500px",
            }}
          >
            {filteredItems.map((item, index) => (
              <ProductCard
                key={item.id}
                item={item}
                index={index}
                handleAddToCart={handleAddToCart}
                addedId={addedId}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              rounded-3xl
              bg-white
              p-12
              text-center
              shadow-xl
            "
          >
            <Coffee
              size={45}
              className="mx-auto text-[#c68b59]"
            />

            <h3 className="mt-4 text-xl font-bold text-[#2b1b14]">
              No items found
            </h3>

            <p className="mt-2 text-sm text-[#806b5f]">
              Please choose another category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Menu;
