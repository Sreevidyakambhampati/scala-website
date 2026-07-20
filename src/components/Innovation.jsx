import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import logo from "../assets/scalaLogo.png";

function Innovation() {
  return (
    <section
      id="innovation"
      className="py-24 bg-[#f5f8ff]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-[#f5f8ff] px-10 py-20">

          {/* Background Logo */}
          <img
            src={logo}
            alt=""
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[700px]
              lg:w-[850px]
              opacity-[0.04]
              pointer-events-none
              select-none
              object-contain
            "
          />

          <div
            className="
              relative
              z-10
              grid
              min-[778px]:grid-cols-2
              gap-10
              lg:gap-16
              items-center
            "
          >

            {/* Left Content */}
            <div>

              <h2 className="text-6xl lg:text-7xl font-bold leading-tight text-[#07162d]">

                Where

                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-[#0B1F45]
                    via-[#2563EB]
                    to-[#60A5FA]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Innovation
                </span>

                <br />

                Meets

                <br />

                Execution

              </h2>

              <p className="mt-10 text-gray-600 text-xl leading-10 max-w-lg">
                At Scala Technologies, innovation begins with understanding
                people. We believe technology should solve real challenges,
                create meaningful opportunities, and make everyday experiences
                better.
              </p>

            </div>

            {/* Right */}
<div
  className="
    hidden
    min-[635px]:block
    min-[778px]:flex
    justify-center
    items-center
  "
>
  <motion.div
    animate={{ y: [0, -18, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      relative
      min-[635px]:absolute
      min-[635px]:top-28
      min-[635px]:right-8
      min-[778px]:static
    "
  >
    {/* Glow Behind */}
    <div
      className="
        absolute
        inset-0
        scale-125
        rounded-full
        bg-blue-500/20
        blur-[70px]
      "
    />

    {/* Light Rays */}
    <span className="absolute left-1/2 -top-10 h-10 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-300 to-blue-600" />
    <span className="absolute left-10 top-3 h-8 w-[3px] rotate-[-35deg] rounded-full bg-gradient-to-b from-blue-300 to-blue-600" />
    <span className="absolute right-10 top-3 h-8 w-[3px] rotate-[35deg] rounded-full bg-gradient-to-b from-blue-300 to-blue-600" />
    <span className="absolute left-5 top-16 h-6 w-[3px] rotate-[-65deg] rounded-full bg-blue-300" />
    <span className="absolute right-5 top-16 h-6 w-[3px] rotate-[65deg] rounded-full bg-blue-300" />

    {/* Bulb */}
    <FaLightbulb
      className="
        relative
        z-10

        text-[120px]
        sm:text-[150px]
        md:text-[180px]
        lg:text-[240px]
        xl:text-[300px]

        text-[#2563EB]

        drop-shadow-[0_0_18px_rgba(37,99,235,0.45)]
      "
    />

    {/* Bottom Glow */}
    <div
      className="
        absolute
        left-1/2
        bottom-4
        -translate-x-1/2

        w-24
        h-6

        rounded-full
        bg-blue-400/30
        blur-xl
      "
    />
  </motion.div>
</div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Innovation;