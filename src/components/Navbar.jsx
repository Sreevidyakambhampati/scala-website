import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {

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
    {
      id: 5,
      title: "Contact",
      to: "contact",
    },
  ];

  // runs when component loads
  useEffect(() => {

    // window.scrollY gives vertical scroll position
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <motion.nav
      // navbar enters from top which initially invisible with 0.8 duration
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}

      // fixed = stays while scrolling
      // left-1/2 + translate-x makes it centered
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl"
    >
      {/* Main navbar container */}
      <div
        className={`
        flex items-center justify-between
        px-8
        rounded-full
        border border-white/20
        shadow-md
        transition-all duration-500

        ${
          scrolled
            ? "h-16 bg-white/85 backdrop-blur-2xl"
            : "h-20 bg-white/70 backdrop-blur-xl"
        }
      `}
      >
        {/* Logo */}

        <img
          src="/logo.png"
          alt="Scala"
          className={`object-contain transition-all duration-500 ${
            scrolled
              ? "h-10"
              : "h-14"
          }`}
        />

        {/* Desktop Menu */}
        {/* hidden below lg scree, viewed for desktop n */}

        <ul className="hidden lg:flex items-center gap-3 relative">

          {navLinks.map((link) => (

            // relative because pill uses absolute positioning
            <li
              key={link.id}
              className="relative"
              onMouseEnter={() => {

                setActive(link.title);

                if (
                  link.title ===
                  "Products"
                ) {
                  setShowProducts(
                    true
                  );
                } else {
                  setShowProducts(
                    false
                  );
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
            className="
            relative
            overflow-hidden
            bg-blue-600
            text-white
            px-7
            py-3
            rounded-full
            group
          "
          >
            <span className="relative z-10">
              Book Demo
            </span>

            {/* Shine effect */}

            <span
              className="
              absolute
              top-0
              -left-32
              w-24
              h-full
              bg-white/30
              rotate-12
              group-hover:left-[150%]
              transition-all
              duration-1000
            "
            />
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

            <button className="bg-blue-600 text-white py-3 rounded-2xl">
              Book Demo
            </button>

          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;