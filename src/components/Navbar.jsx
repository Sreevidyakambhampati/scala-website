import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";


import { motion } from "framer-motion";
import { Link } from "react-scroll";
import scalaLogo from "../assets/SCALA_NOBG.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  // Google Form URL
const handleContactUs = () => {
    document
        .getElementById("cta")
        ?.scrollIntoView({
            behavior: "smooth",
        });
};

  // controls mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  // stores currently active navbar item
  const [active, setActive] =
    useState("Home");

  // detects whether page is scrolled
  const [scrolled, setScrolled] =
    useState(false);

  // controls products dropdown
  const [showProducts, setShowProducts] =
    useState(false);

  // navigation items stored in array
  const navLinks = [
    { id: 1, title: "Home", to: "hero" },
    { id: 2, title: "About Us", to: "about" },
    {
      id: 3,
      title: "Culture",
      to: "innovation",
    },
    {
      id: 4,
      title: "Products",
      to: "products",
    },
    // {
    //   id: 5,
    //   title: "Contact",
    //   to: "contact",
    // },
  ];

  // runs when component loads
 useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (isNavigating) {
    setShowNavbar(true);
    return;
  }

  // Background effect
  setScrolled(currentScrollY > 50);

  if (currentScrollY < 50) {
    setShowNavbar(true);
  } else if (currentScrollY > lastScrollY) {
    setShowNavbar(false);
  } else {
    setShowNavbar(true);
  }

  lastScrollY = currentScrollY;
};

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <motion.nav
      // navbar enters from top which initially invisible with 0.8 duration
    initial={{
  y: -100,
  opacity: 0,
}}
animate={{
  y: showNavbar ? 0 : -120,
  opacity: showNavbar ? 1 : 0,
}}
transition={{
  duration: 0.35,
  ease: "easeInOut",
}}

      // fixed = stays while scrolling
      // left-1/2 + translate-x makes it centered
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl"
    >
      {/* Main navbar container */}
      <div
        className={`
          relative
        flex items-center justify-between
        px-10 lg:px-12
        rounded-xl
        border border-white/20
        shadow-md
        transition-all duration-500

        ${
          scrolled
  ? "h-16 bg-white/90 backdrop-blur-2xl"
  : "h-16 bg-white/80 backdrop-blur-xl"
        }
      `}
      >
        {/* Logo + Mobile Title */}

<div className="flex items-center">

  {/* Logo */}
  <img
    src={scalaLogo}
    alt="Scala"
    className={`object-contain transition-all duration-500 ${
      scrolled ? "h-10" : "h-14"
    }`}
  />

</div>

{/* Mobile Center Title */}
<h1
  className="
    lg:hidden
    absolute
    left-1/2
    -translate-x-1/2
    text-2xl
    font-bold
    bg-gradient-to-r
    from-blue-600
    via-cyan-500
    to-indigo-600
    bg-clip-text
    text-transparent
    pointer-events-none
    select-none
  "
>
  SCALA
</h1>

{/* Desktop Menu */}
<ul className="hidden lg:flex items-center gap-3 relative">

  {navLinks.map((link) => (

    <li
      key={link.id}
      className="relative"
      onMouseEnter={() => {

        setActive(link.title);

        if (link.title === "Products") {
          setShowProducts(true);
        } else {
          setShowProducts(false);
        }
      }}
    >

              {/* Animated blue pill */}

              {active ===
                link.title && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{
                    type:
                      "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              {/* Smooth scroll links */}

              <Link
  to={link.to}
  smooth={true}
  duration={450}
  offset={-120}
  onClick={() => {
    setIsNavigating(true);

    setTimeout(() => {
      setIsNavigating(false);
    }, 600);
  }}
>
  
                <button
                  className={`
                  relative
                  z-10
                  px-5
                  py-2
                  rounded-full
                  flex items-center gap-1
                  transition

                  ${
                    active ===
                    link.title
                      ? "text-white"
                      : "text-gray-700 hover:text-blue-600"
                  }
                `}
                >
                  {link.title}

                  {link.title ===
                    "Products" && (
                    <FiChevronDown />
                  )}
                </button>
              </Link>

             {/* Products Mega Menu */}

{link.title === "Products" &&
  showProducts && (
    <div
      onMouseLeave={() =>
        setShowProducts(false)
      }
      className="
        absolute
        top-16
        left-0
        w-72
        bg-white
        rounded-3xl
        shadow-2xl
        p-6
      "
    >
      <div className="space-y-5">

        {/* SPACZ */}
        <div
          onClick={() => {
            // close dropdown
            setShowProducts(false);

            // scroll to products section
            document
              .getElementById(
                "products"
              )
              ?.scrollIntoView({
                behavior:
                  "smooth",
              });

            // after scrolling,
            // move swiper to first slide
            setTimeout(() => {
              window.productsSwiper?.slideTo(
                0
              );
            }, 500);
          }}
          className="
            hover:bg-gray-50
            p-4
            rounded-2xl
            cursor-pointer
            transition
          "
        >
          <h3 className="font-semibold">
            SPACZ
          </h3>

          <p className="text-sm text-gray-500">
            Smart Study Hall
            Ecosystem
          </p>
        </div>

        {/* STRIKE */}
        <div
          onClick={() => {
            // close dropdown
            setShowProducts(false);

            // scroll to products section
            document
              .getElementById(
                "products"
              )
              ?.scrollIntoView({
                behavior:
                  "smooth",
              });

            // after scrolling,
            // move swiper to second slide
            setTimeout(() => {
              window.productsSwiper?.slideTo(
                1
              );
            }, 500);
          }}
          className="
            hover:bg-gray-50
            p-4
            rounded-2xl
            cursor-pointer
            transition
          "
        >
          <h3 className="font-semibold">
            STRIKE
          </h3>

          <p className="text-sm text-gray-500">
            Business Operations
          </p>
        </div>

      </div>
    </div>
)}
          </li>
        ))}
      </ul>

      {/* CTA */}
  <div className="hidden lg:flex">
  <button
    onClick={handleContactUs}
    className="relative overflow-hidden bg-blue-600 text-white px-7 py-3 rounded-full group"
  >
    <span className="relative z-10">
      Contact Us
    </span>

    {/* Shine animation */}
    <span className="absolute top-0 -left-32 w-24 h-full bg-white/30 rotate-12 group-hover:left-[150%] transition-all duration-1000" />
  </button>
</div>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-3xl"
          onClick={() =>
            setIsMenuOpen(
              !isMenuOpen
            )
          }
        >
          {isMenuOpen ? (
            <FiX />
          ) : (
            <FiMenu />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
          lg:hidden
          mt-5
          bg-white
          rounded-3xl
          shadow-md
          p-6
        "
        >
          <ul className="flex flex-col gap-5">

            {navLinks.map(
              (link) => (
                <Link
                  key={
                    link.id
                  }
                  to={
                    link.to
                  }
                  smooth={true}
                  duration={450}
                  offset={-120}
                >
                    
                  <li
                    className="text-gray-700 cursor-pointer"
                    onClick={() =>
                      setIsMenuOpen(
                        false
                      )
                    }
                  >
                    {
                      link.title
                    }
                  </li>
                </Link>
              )
            )}

            <button
  onClick={() => {
    handleContactUs();
    setIsMenuOpen(false);
}}
  className="bg-blue-600 text-white py-3 rounded-2xl"
>
  Contact Us
</button>

          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;