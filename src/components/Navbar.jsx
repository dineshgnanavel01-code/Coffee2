import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {Coffee,Home,Info,Image as ImageIcon, Mail, ShoppingBag,User,Menu as MenuIcon,X,Plus,Minus, Trash2,MapPin,Phone,CreditCard,Banknote,CheckCircle2,Clock3,PackageCheck,Truck,ChevronRight,LogOut,UserRound,Heart,Settings,} from "lucide-react";
import { useCart } from "../context/CartContext";

const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: Info,
  },
  {
    name: "Menu",
    href: "#menu",
    icon: Coffee,
  },
  {
    name: "Gallery",
    href: "#gallery",
    icon: ImageIcon,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("cart");
  const [orderId, setOrderId] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const {
    cartItems,
    totalItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  useEffect(() => {
    const shouldLock =
      menuOpen || cartOpen || profileOpen;

    if (shouldLock) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen, cartOpen, profileOpen]);

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  const tax = subtotal * 0.08;

  const deliveryFee =
    subtotal === 0
      ? 0
      : subtotal >= 500
      ? 0
      : 40;

  const grandTotal =
    subtotal + tax + deliveryFee;

  const formatPrice = (price) =>
    `₹${Number(price).toLocaleString("en-IN")}`;

  
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  
  const openCart = () => {
    setMenuOpen(false);
    setProfileOpen(false);
    setCheckoutStep("cart");
    setCartOpen(true);
  };

  const handleCloseCartDrawer = () => {
    setCartOpen(false);

    setTimeout(() => {
      setCheckoutStep("cart");
    }, 300);
  };

  const openProfile = () => {
    setMenuOpen(false);
    setCartOpen(false);
    setProfileOpen(true);
  };

  const closeProfile = () => {
    setProfileOpen(false);
  };

  
  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) return;

    setCheckoutStep("checkout");
  };

  const handleConfirmOrder = (event) => {
    event.preventDefault();

    if (
      !customerName.trim() ||
      !address.trim() ||
      !phone.trim() ||
      !city.trim()
    ) {
      return;
    }

    const generatedId =
      "DB-" +
      Math.floor(
        100000 + Math.random() * 900000
      );

    setOrderId(generatedId);

    clearCart();
    setCheckoutStep("confirmed");
  };

  const handleTrackOrder = () => {
    setCheckoutStep("tracking");
  };

    const handleSignOut = () => {
    setIsLoggedIn(false);
    setProfileOpen(false);
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
    setProfileOpen(false);
  };

  return (
    <>
      
      <motion.header
       
        initial={false}
        animate={{ y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          inset-x-0
          top-0
          z-[100]
          h-[76px]
          w-full
          overflow-visible
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-[#2b1b14]/95 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              : "bg-[#2b1b14]/95 backdrop-blur-md"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[76px]
            w-full
            max-w-[2050px]
            items-center
            gap-2
            px-3
            sm:px-6
            lg:px-10
            xl:px-12
          "
        >
          
          <motion.a
            href="#home"
            onClick={closeMobileMenu}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
              flex
              min-w-0
              shrink-0
              items-center
              gap-2
              sm:gap-3
            "
          >
            <motion.div
              whileHover={{
                rotate: -8,
                scale: 1.06,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="
                relative
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#c68b59]
                text-[#2b1b14]
                shadow-lg
                sm:h-11
                sm:w-11
              "
            >
              <Coffee
                size={20}
                strokeWidth={2.5}
                className="sm:h-[22px] sm:w-[22px]"
              />

              <motion.span
                animate={{
                  opacity: [0.25, 0.6, 0.25],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="
                  pointer-events-none
                  absolute
                  -inset-1
                  rounded-2xl
                  border
                  border-[#d9a878]/60
                "
              />
            </motion.div>

            <div className="min-w-0">
              <p
                className="
                  truncate
                  text-[14px]
                  font-black
                  tracking-tight
                  text-white
                  sm:text-lg
                "
              >
                Dina & Coffee
              </p>

              <p
                className="
                  truncate
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#d9a878]
                  sm:text-[10px]
                  sm:tracking-[0.25em]
                "
              >
                Brew • Relax • Enjoy
              </p>
            </div>
          </motion.a>

          <nav
            aria-label="Main navigation"
            className="
              hidden
              min-w-0
              flex-1
              items-center
              justify-center
              gap-1
              lg:flex
            "
          >
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    group
                    relative
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-full
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-white/80
                    transition-all
                    duration-300
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <motion.span
                    whileHover={{
                      rotate:
                        item.name === "Menu"
                          ? -8
                          : 0,
                      scale: 1.12,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 15,
                    }}
                    className="text-[#d9a878]"
                  >
                    <Icon
                      size={16}
                      strokeWidth={2.2}
                    />
                  </motion.span>

                  <span>{item.name}</span>

                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#c68b59]
                      transition-all
                      duration-300
                      group-hover:w-8
                    "
                  />
                </motion.a>
              );
            })}
          </nav>

        
          <div
            className="
              ml-auto
              flex
              shrink-0
              items-center
              gap-1.5
              sm:gap-2
            "
          >
     

            <motion.button
              type="button"
              onClick={openCart}
              whileHover={{
                scale: 1.05,
                y: -1,
              }}
              whileTap={{
                scale: 0.93,
              }}
              className="
                relative
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition-colors
                hover:bg-[#c68b59]
                sm:h-11
                sm:w-11
              "
              aria-label={`Open cart${
                totalItems > 0
                  ? `, ${totalItems} items`
                  : ""
              }`}
            >
              <ShoppingBag
                size={18}
                className="sm:h-5 sm:w-5"
              />

              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                    }}
                    className="
                      absolute
                      -right-1
                      -top-1
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-[#c68b59]
                      px-1
                      text-[10px]
                      font-black
                      text-[#2b1b14]
                      ring-2
                      ring-[#2b1b14]
                    "
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              type="button"
              onClick={openProfile}
              whileHover={{
                scale: 1.05,
                y: -1,
              }}
              whileTap={{
                scale: 0.93,
              }}
              className="
                hidden
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition-colors
                hover:bg-[#c68b59]
                sm:flex
              "
              aria-label="Open profile"
            >
              <User size={20} />
            </motion.button>


            <motion.button
              type="button"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                transition-colors
                hover:bg-white/20
                lg:hidden
                sm:h-11
                sm:w-11
              "
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                  >
                    <X size={21} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                  >
                    <MenuIcon size={21} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

           <AnimatePresence>
        {menuOpen && (
          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="
                fixed
                inset-0
                z-[90]
                bg-black/55
                backdrop-blur-sm
                lg:hidden
              "
              aria-hidden="true"
            />


            <motion.aside
              id="mobile-menu"
              initial={{
                opacity: 0,
                x: "100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                right-0
                top-[76px]
                z-[110]
                flex
                h-[calc(100dvh-76px)]
                w-[min(92vw,380px)]
                max-w-full
                flex-col
                overflow-x-hidden
                overflow-y-auto
                overscroll-contain
                border-l
                border-white/10
                bg-[#2b1b14]
                p-3
                pb-[max(1rem,env(safe-area-inset-bottom))]
                shadow-2xl
                sm:p-5
                lg:hidden
              "
            >

              <div
                className="
                  mb-4
                  shrink-0
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  sm:mb-5
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#c68b59]
                      text-[#2b1b14]
                    "
                  >
                    <Coffee size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate font-black text-white">
                      Dina & Coffee
                    </p>

                    <p className="truncate text-xs text-[#d9a878]">
                      Freshly brewed happiness
                    </p>
                  </div>
                </div>
              </div>


              <nav
                aria-label="Mobile navigation"
                className="shrink-0 space-y-2"
              >
                {navItems.map(
                  (item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.045,
                        }}
                        whileHover={{
                          x: 5,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className="
                          flex
                          min-h-[54px]
                          w-full
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          border-white/5
                          bg-white/5
                          px-4
                          py-3.5
                          text-sm
                          font-bold
                          text-white/90
                          transition-colors
                          hover:bg-[#c68b59]
                          hover:text-[#2b1b14]
                        "
                      >
                        <Icon
                          size={19}
                          className="shrink-0"
                        />

                        <span className="min-w-0 truncate">
                          {item.name}
                        </span>

                        <ChevronRight
                          size={17}
                          className="
                            ml-auto
                            shrink-0
                            opacity-50
                          "
                        />
                      </motion.a>
                    );
                  }
                )}
              </nav>


              <motion.button
                type="button"
                onClick={openProfile}
                whileTap={{ scale: 0.97 }}
                className="
                  mt-3
                  flex
                  min-h-[54px]
                  w-full
                  shrink-0
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/5
                  px-4
                  py-3.5
                  text-left
                  text-sm
                  font-bold
                  text-white/90
                  hover:bg-white/10
                "
              >
                <User
                  size={19}
                  className="shrink-0"
                />

                <span>My Profile</span>

                <ChevronRight
                  size={17}
                  className="ml-auto shrink-0 opacity-50"
                />
              </motion.button>


              <motion.button
                type="button"
                onClick={openCart}
                whileTap={{ scale: 0.97 }}
                className="
                  mt-2
                  flex
                  min-h-[54px]
                  w-full
                  shrink-0
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/5
                  px-4
                  py-3.5
                  text-left
                  text-sm
                  font-bold
                  text-white/90
                  hover:bg-white/10
                "
              >
                <ShoppingBag
                  size={19}
                  className="shrink-0"
                />

                <span>My Cart</span>

                {totalItems > 0 && (
                  <span
                    className="
                      ml-auto
                      rounded-full
                      bg-[#c68b59]
                      px-2.5
                      py-1
                      text-xs
                      font-black
                      text-[#2b1b14]
                    "
                  >
                    {totalItems}
                  </span>
                )}
              </motion.button>

              <div className="h-6 shrink-0" />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseCartDrawer}
              className="
                fixed
                inset-0
                z-[200]
                bg-black/60
                backdrop-blur-sm
              "
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="
                fixed
                right-0
                top-0
                z-[210]
                flex
                h-[100dvh]
                w-full
                max-w-[520px]
                flex-col
                overflow-hidden
                bg-[#f8f3ed]
                shadow-[-20px_0_80px_rgba(0,0,0,0.3)]
              "
            >

              <div
                className="
                  flex
                  h-[76px]
                  shrink-0
                  items-center
                  justify-between
                  bg-[#2b1b14]
                  px-4
                  py-4
                  text-white
                  sm:px-7
                "
              >
                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#d9a878]
                    "
                  >
                    Dina & Coffee
                  </p>

                  <h2 className="mt-1 truncate text-xl font-black sm:text-2xl">
                    {checkoutStep === "cart" &&
                      "Your Cart"}

                    {checkoutStep === "checkout" &&
                      "Checkout"}

                    {checkoutStep ===
                      "confirmed" &&
                      "Order Confirmed"}

                    {checkoutStep === "tracking" &&
                      "Track Order"}
                  </h2>
                </div>

                <motion.button
                  type="button"
                  onClick={handleCloseCartDrawer}
                  whileHover={{
                    rotate: 90,
                    scale: 1.08,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="
                    ml-3
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    hover:bg-white/20
                  "
                  aria-label="Close cart"
                >
                  <X size={20} />
                </motion.button>
              </div>


              {checkoutStep === "cart" && (
                <div className="flex min-h-0 flex-1 flex-col">
                  {cartItems.length === 0 ? (
                    <div
                      className="
                        flex
                        flex-1
                        flex-col
                        items-center
                        justify-center
                        overflow-y-auto
                        px-6
                        text-center
                      "
                    >
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                          rotate: [
                            0,
                            -2,
                            2,
                            0,
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="
                          mb-6
                          flex
                          h-24
                          w-24
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#eee4da]
                          text-[#7b5138]
                        "
                      >
                        <Coffee size={42} />
                      </motion.div>

                      <h3 className="text-2xl font-black text-[#2b1b14]">
                        Your cart is empty
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-[#806b5f]">
                        Looks like you haven't
                        added your favorite coffee
                        yet. Explore our menu and
                        find something delicious.
                      </p>

                      <motion.a
                        href="#menu"
                        onClick={handleCloseCartDrawer}
                        whileHover={{
                          scale: 1.04,
                          y: -2,
                        }}
                        whileTap={{ scale: 0.96 }}
                        className="
                          mt-7
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-[#2b1b14]
                          px-6
                          py-3.5
                          text-sm
                          font-bold
                          text-white
                          shadow-lg
                        "
                      >
                        <Coffee size={17} />
                        Explore Menu
                      </motion.a>
                    </div>
                  ) : (
                    <>
                      <div
                        className="
                          min-h-0
                          flex-1
                          space-y-4
                          overflow-y-auto
                          p-4
                          sm:p-7
                        "
                      >
                        <AnimatePresence initial={false}>
                          {cartItems.map((item) => (
                            <motion.div
                              key={item.id}
                              layout
                              initial={{
                                opacity: 0,
                                x: 30,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              exit={{
                                opacity: 0,
                                x: -30,
                                height: 0,
                              }}
                              className="
                                overflow-hidden
                                rounded-3xl
                                border
                                border-[#dfd1c7]
                                bg-white
                                p-3
                                shadow-sm
                              "
                            >
                              <div className="flex gap-3">
                                <div
                                  className="
                                    h-20
                                    w-20
                                    shrink-0
                                    overflow-hidden
                                    rounded-2xl
                                    bg-[#eee4da]
                                    sm:h-24
                                    sm:w-24
                                  "
                                >
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="
                                      h-full
                                      w-full
                                      object-cover
                                    "
                                  />
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0">
                                      <h3 className="truncate text-sm font-black text-[#2b1b14]">
                                        {item.name}
                                      </h3>

                                      <p className="mt-1 truncate text-xs text-[#9a8a80]">
                                        {item.category}
                                      </p>
                                    </div>

                                    <button
                                      type="button"
                                      onClick={() =>
                                        removeFromCart(
                                          item.id
                                        )
                                      }
                                      className="
                                        flex
                                        h-8
                                        w-8
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        text-[#a98e80]
                                        hover:bg-red-50
                                        hover:text-red-500
                                      "
                                      aria-label={`Remove ${item.name}`}
                                    >
                                      <Trash2 size={15} />
                                    </button>
                                  </div>

                                  <div className="mt-3 flex items-center justify-between gap-2">
                                    <div className="flex items-center rounded-full border border-[#dfd1c7] bg-[#f8f3ed]">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          decreaseQuantity(
                                            item.id
                                          )
                                        }
                                        className="
                                          flex
                                          h-8
                                          w-8
                                          items-center
                                          justify-center
                                          rounded-full
                                          hover:bg-[#eee4da]
                                        "
                                      >
                                        <Minus size={13} />
                                      </button>

                                      <span className="w-7 text-center text-xs font-black">
                                        {item.quantity}
                                      </span>

                                      <button
                                        type="button"
                                        onClick={() =>
                                          increaseQuantity(
                                            item.id
                                          )
                                        }
                                        className="
                                          flex
                                          h-8
                                          w-8
                                          items-center
                                          justify-center
                                          rounded-full
                                          hover:bg-[#eee4da]
                                        "
                                      >
                                        <Plus size={13} />
                                      </button>
                                    </div>

                                    <p className="text-sm font-black text-[#a15f37]">
                                      {formatPrice(
                                        Number(item.price) *
                                          item.quantity
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>


                      <div
                        className="
                          shrink-0
                          border-t
                          border-[#dfd1c7]
                          bg-white
                          p-4
                          sm:p-7
                        "
                      >
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between text-[#806b5f]">
                            <span>Subtotal</span>

                            <span className="font-semibold text-[#2b1b14]">
                              {formatPrice(subtotal)}
                            </span>
                          </div>

                          <div className="flex justify-between text-[#806b5f]">
                            <span>Tax (8%)</span>

                            <span className="font-semibold text-[#2b1b14]">
                              {formatPrice(tax)}
                            </span>
                          </div>

                          <div className="flex justify-between text-[#806b5f]">
                            <span>Delivery</span>

                            <span className="font-semibold text-[#2b1b14]">
                              {deliveryFee === 0
                                ? "FREE"
                                : formatPrice(
                                    deliveryFee
                                  )}
                            </span>
                          </div>

                          {subtotal > 0 &&
                            subtotal < 500 && (
                              <p className="rounded-xl bg-[#f8f3ed] px-3 py-2 text-xs text-[#9a693f]">
                                Add{" "}
                                {formatPrice(
                                  500 - subtotal
                                )}{" "}
                                more for free
                                delivery.
                              </p>
                            )}

                          <div className="my-3 h-px bg-[#eee4da]" />

                          <div className="flex items-center justify-between">
                            <span className="text-base font-black">
                              Total
                            </span>

                            <span className="text-xl font-black text-[#a15f37] sm:text-2xl">
                              {formatPrice(grandTotal)}
                            </span>
                          </div>
                        </div>

                        <motion.button
                          type="button"
                          onClick={handleProceedToCheckout}
                          whileHover={{
                            scale: 1.02,
                            y: -2,
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="
                            mt-5
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-[#2b1b14]
                            px-5
                            py-4
                            text-sm
                            font-black
                            text-white
                            shadow-lg
                            hover:bg-[#a15f37]
                          "
                        >
                          Proceed to Checkout
                          <ChevronRight size={17} />
                        </motion.button>
                      </div>
                    </>
                  )}
                </div>
              )}


              {checkoutStep === "checkout" && (
                <form
                  onSubmit={handleConfirmOrder}
                  className="
                    min-h-0
                    flex-1
                    overflow-y-auto
                  "
                >
                  <div className="space-y-5 p-4 sm:p-7">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#a15f37]">
                        Delivery Details
                      </p>

                      <div className="space-y-3">
                        <div className="relative">
                          <UserRound
                            size={17}
                            className="
                              absolute
                              left-4
                              top-1/2
                              -translate-y-1/2
                              text-[#9a8a80]
                            "
                          />

                          <input
                            type="text"
                            value={customerName}
                            onChange={(e) =>
                              setCustomerName(
                                e.target.value
                              )
                            }
                            placeholder="Full Name"
                            required
                            className="
                              w-full
                              rounded-2xl
                              border
                              border-[#dfd1c7]
                              bg-white
                              py-3.5
                              pl-11
                              pr-4
                              text-base
                              outline-none
                              transition-all
                              placeholder:text-[#b3a299]
                              focus:border-[#c68b59]
                              focus:ring-4
                              focus:ring-[#c68b59]/10
                            "
                          />
                        </div>

                        <div className="relative">
                          <MapPin
                            size={17}
                            className="
                              absolute
                              left-4
                              top-4
                              text-[#9a8a80]
                            "
                          />

                          <textarea
                            value={address}
                            onChange={(e) =>
                              setAddress(
                                e.target.value
                              )
                            }
                            placeholder="Delivery Address"
                            required
                            rows={3}
                            className="
                              w-full
                              resize-none
                              rounded-2xl
                              border
                              border-[#dfd1c7]
                              bg-white
                              py-3.5
                              pl-11
                              pr-4
                              text-base
                              outline-none
                              transition-all
                              placeholder:text-[#b3a299]
                              focus:border-[#c68b59]
                              focus:ring-4
                              focus:ring-[#c68b59]/10
                            "
                          />
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="relative">
                            <MapPin
                              size={17}
                              className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-[#9a8a80]
                              "
                            />

                            <input
                              type="text"
                              value={city}
                              onChange={(e) =>
                                setCity(
                                  e.target.value
                                )
                              }
                              placeholder="City"
                              required
                              className="
                                w-full
                                rounded-2xl
                                border
                                border-[#dfd1c7]
                                bg-white
                                py-3.5
                                pl-11
                                pr-4
                                text-base
                                outline-none
                                focus:border-[#c68b59]
                                focus:ring-4
                                focus:ring-[#c68b59]/10
                              "
                            />
                          </div>

                          <div className="relative">
                            <Phone
                              size={17}
                              className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-[#9a8a80]
                              "
                            />

                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) =>
                                setPhone(
                                  e.target.value
                                )
                              }
                              placeholder="Phone Number"
                              required
                              className="
                                w-full
                                rounded-2xl
                                border
                                border-[#dfd1c7]
                                bg-white
                                py-3.5
                                pl-11
                                pr-4
                                text-base
                                outline-none
                                focus:border-[#c68b59]
                                focus:ring-4
                                focus:ring-[#c68b59]/10
                              "
                            />
                          </div>
                        </div>
                      </div>
                    </div>


                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#a15f37]">
                        Payment Method
                      </p>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {[
                          {
                            name: "UPI",
                            icon: CreditCard,
                          },
                          {
                            name: "Card",
                            icon: CreditCard,
                          },
                          {
                            name: "Cash on delivery",
                            icon: Banknote,
                          },
                        ].map((method) => {
                          const Icon = method.icon;

                          const selected =
                            paymentMethod ===
                            method.name;

                          return (
                            <button
                              key={method.name}
                              type="button"
                              onClick={() =>
                                setPaymentMethod(
                                  method.name
                                )
                              }
                              className={`
                                flex
                                min-h-[90px]
                                flex-col
                                items-center
                                justify-center
                                gap-2
                                rounded-2xl
                                border
                                p-3
                                text-xs
                                font-bold
                                transition-all
                                ${
                                  selected
                                    ? "border-[#c68b59] bg-[#c68b59]/10 text-[#8a542f] ring-2 ring-[#c68b59]/10"
                                    : "border-[#dfd1c7] bg-white text-[#806b5f] hover:border-[#c68b59]/50"
                                }
                              `}
                            >
                              <Icon size={20} />

                              <span className="text-center">
                                {method.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>


                    <div className="rounded-3xl bg-[#2b1b14] p-5 text-white">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-white/60">
                          Payable Amount
                        </span>

                        <span className="text-xl font-black text-[#d9a878] sm:text-2xl">
                          {formatPrice(grandTotal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="
                      sticky
                      bottom-0
                      border-t
                      border-[#dfd1c7]
                      bg-white
                      p-4
                      sm:p-7
                    "
                  >
                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.97 }}
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#2b1b14]
                        px-6
                        py-4
                        text-sm
                        font-black
                        text-white
                        shadow-lg
                        hover:bg-[#a15f37]
                      "
                    >
                      <CheckCircle2 size={18} />
                      Confirm Order
                    </motion.button>
                  </div>
                </form>
              )}


              {checkoutStep === "confirmed" && (
                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    items-center
                    justify-center
                    overflow-y-auto
                    px-5
                    py-10
                    text-center
                  "
                >
                  <motion.div
                    initial={{
                      scale: 0,
                      rotate: -20,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 12,
                    }}
                    className="
                      flex
                      h-24
                      w-24
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#dce8d3]
                      text-[#5d7d45]
                    "
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>

                  <h3 className="mt-7 text-2xl font-black text-[#2b1b14] sm:text-3xl">
                    Order Confirmed!
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#806b5f]">
                    Thank you for ordering from
                    Dina & Coffee. Your freshly
                    brewed favorites are being
                    prepared.
                  </p>

                  <div
                    className="
                      mt-7
                      w-full
                      max-w-sm
                      rounded-3xl
                      border
                      border-[#dfd1c7]
                      bg-white
                      p-5
                      text-left
                      shadow-sm
                    "
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#9a8a80]">
                        Order ID
                      </span>

                      <span className="font-black text-[#a15f37]">
                        {orderId}
                      </span>
                    </div>

                    <div className="my-4 h-px bg-[#eee4da]" />

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f8f3ed] text-[#a15f37]">
                        <Clock3 size={18} />
                      </div>

                      <div>
                        <p className="text-sm font-bold">
                          Estimated delivery
                        </p>

                        <p className="mt-0.5 text-xs text-[#806b5f]">
                          25–40 minutes
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="
                      mt-6
                      flex
                      w-full
                      max-w-sm
                      flex-col
                      gap-3
                      sm:flex-row
                    "
                  >
                    <motion.button
                      type="button"
                      onClick={handleTrackOrder}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#2b1b14]
                        px-5
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      <Truck size={17} />
                      Track Order
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={handleCloseCartDrawer}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        border
                        border-[#dfd1c7]
                        bg-white
                        px-5
                        py-3.5
                        text-sm
                        font-bold
                        text-[#2b1b14]
                      "
                    >
                      Continue Shopping
                    </motion.button>
                  </div>
                </div>
              )}

          
              {checkoutStep === "tracking" && (
                <div className="flex-1 overflow-y-auto p-4 sm:p-7">
                  <div className="rounded-3xl bg-[#2b1b14] p-5 text-white sm:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9a878]">
                      Order ID
                    </p>

                    <h3 className="mt-2 text-xl font-black sm:text-2xl">
                      {orderId}
                    </h3>

                    <p className="mt-2 text-sm text-white/60">
                      Estimated delivery: 25–40 minutes
                    </p>
                  </div>

                  <div className="mt-7">
                    {[
                      {
                        title: "Order Confirmed",
                        description:
                          "Your order has been successfully received.",
                        icon: CheckCircle2,
                        active: true,
                      },
                      {
                        title:
                          "Preparing Your Coffee",
                        description:
                          "Our baristas are preparing your order.",
                        icon: Coffee,
                        active: true,
                      },
                      {
                        title: "Out for Delivery",
                        description:
                          "Your order will soon be on its way.",
                        icon: Truck,
                        active: false,
                      },
                      {
                        title: "Delivered",
                        description:
                          "Enjoy your coffee!",
                        icon: PackageCheck,
                        active: false,
                      },
                    ].map((step, index) => {
                      const Icon = step.icon;

                      return (
                        <div
                          key={step.title}
                          className="relative flex gap-4"
                        >
                          {index !== 3 && (
                            <div
                              className={`
                                absolute
                                left-5
                                top-10
                                h-14
                                w-px
                                ${
                                  step.active
                                    ? "bg-[#c68b59]"
                                    : "bg-[#dfd1c7]"
                                }
                              `}
                            />
                          )}

                          <motion.div
                            animate={
                              step.active
                                ? {
                                    scale: [
                                      1,
                                      1.08,
                                      1,
                                    ],
                                  }
                                : {}
                            }
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className={`
                              relative
                              z-10
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              ${
                                step.active
                                  ? "bg-[#c68b59] text-[#2b1b14]"
                                  : "bg-[#eee4da] text-[#9a8a80]"
                              }
                            `}
                          >
                            <Icon size={18} />
                          </motion.div>

                          <div className="pb-8">
                            <h4
                              className={`
                                text-sm
                                font-black
                                ${
                                  step.active
                                    ? "text-[#2b1b14]"
                                    : "text-[#9a8a80]"
                                }
                              `}
                            >
                              {step.title}
                            </h4>

                            <p className="mt-1 text-xs leading-5 text-[#806b5f]">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-3 rounded-3xl border border-[#dfd1c7] bg-white p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f8f3ed] text-[#a15f37]">
                        <MapPin size={18} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-black text-[#2b1b14]">
                          Delivery Address
                        </p>

                        <p className="mt-1 break-words text-sm leading-5 text-[#806b5f]">
                          {address ||
                            "Your delivery address"}

                          {city ? `, ${city}` : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {profileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProfile}
              className="
                fixed
                inset-0
                z-[300]
                bg-black/60
                backdrop-blur-sm
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 22,
              }}
              className="
                fixed
                left-1/2
                top-1/2
                z-[310]
                w-[calc(100%-24px)]
                max-w-md
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-[2rem]
                bg-[#f8f3ed]
                shadow-[0_35px_100px_rgba(0,0,0,0.35)]
                sm:w-[calc(100%-32px)]
              "
            >

              <div
                className="
                  relative
                  overflow-hidden
                  bg-[#2b1b14]
                  px-5
                  pb-7
                  pt-6
                  text-white
                  sm:px-6
                  sm:pt-7
                "
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    border
                    border-white/10
                  "
                />

                <button
                  type="button"
                  onClick={closeProfile}
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    hover:bg-white/20
                  "
                  aria-label="Close profile"
                >
                  <X size={17} />
                </button>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c68b59] text-[#2b1b14] shadow-xl sm:h-16 sm:w-16">
                    <User
                      size={25}
                      className="sm:h-7 sm:w-7"
                    />
                  </div>

                  <div className="min-w-0">
                    {isLoggedIn ? (
                      <>
                        <p className="text-lg font-black sm:text-xl">
                          Dinesh
                        </p>

                        <p className="truncate text-xs text-white/60 sm:text-sm">
                          dinesh@example.com
                        </p>

                        <span className="mt-2 inline-flex rounded-full bg-[#d9a878]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d9a878]">
                          Gold Member
                        </span>
                      </>
                    ) : (
                      <>
                        <p className="text-lg font-black sm:text-xl">
                          Welcome
                        </p>

                        <p className="text-xs text-white/60 sm:text-sm">
                          Sign in to your account
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>


              {isLoggedIn ? (
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="rounded-2xl bg-white p-3 text-center sm:p-4">
                      <p className="text-lg font-black text-[#2b1b14] sm:text-xl">
                        12
                      </p>

                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#9a8a80] sm:text-[10px]">
                        Orders
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-3 text-center sm:p-4">
                      <p className="text-lg font-black text-[#2b1b14] sm:text-xl">
                        8
                      </p>

                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#9a8a80] sm:text-[10px]">
                        Favorites
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-3 text-center sm:p-4">
                      <p className="text-lg font-black text-[#2b1b14] sm:text-xl">
                        250
                      </p>

                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-[#9a8a80] sm:text-[10px]">
                        Points
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 sm:mt-5">
                    <button
                      type="button"
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-2xl
                        bg-white
                        px-4
                        py-3.5
                        text-left
                        text-sm
                        font-bold
                        text-[#2b1b14]
                        hover:bg-[#eee4da]
                      "
                    >
                      <Heart
                        size={18}
                        className="text-[#a15f37]"
                      />

                      My Favorites

                      <ChevronRight
                        size={16}
                        className="ml-auto text-[#9a8a80]"
                      />
                    </button>

                    <button
                      type="button"
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-2xl
                        bg-white
                        px-4
                        py-3.5
                        text-left
                        text-sm
                        font-bold
                        text-[#2b1b14]
                        hover:bg-[#eee4da]
                      "
                    >
                      <Settings
                        size={18}
                        className="text-[#a15f37]"
                      />

                      Account Settings

                      <ChevronRight
                        size={16}
                        className="ml-auto text-[#9a8a80]"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-2xl
                        bg-red-50
                        px-4
                        py-3.5
                        text-left
                        text-sm
                        font-bold
                        text-red-600
                        hover:bg-red-100
                      "
                    >
                      <LogOut size={18} />

                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-5 sm:p-6">
                  <p className="text-center text-sm leading-6 text-[#806b5f]">
                    Sign in to view your orders,
                    favorites and rewards.
                  </p>

                  <motion.button
                    type="button"
                    onClick={handleSignIn}
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      mt-5
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#2b1b14]
                      px-6
                      py-4
                      text-sm
                      font-black
                      text-white
                    "
                  >
                    <User size={17} />
                    Sign In
                  </motion.button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;