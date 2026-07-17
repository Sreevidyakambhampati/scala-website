import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

function Innovation() {
  return (
    <section
      id="innovation"
      className="py-24 bg-[#f5f8ff]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-[#f5f8ff] px-10 py-20">

          {/* Background X */}

          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[420px] font-bold text-[#e9edf8] select-none pointer-events-none">
            X
          </h1>

          <div
  className="
    relative z-10
    grid
    min-[778px]:grid-cols-2
    gap-8
    lg:gap-16
    items-center
  "
>


            {/* Left */}

            <div>

              <h2 className="text-6xl lg:text-7xl font-bold leading-tight text-[#07162d]">

                Where

                <br />

                <span className="text-blue-600">
                  Innovation
                </span>

                <br />

                Meets

                <br />

                Execution
              </h2>

              <p className="mt-10 text-gray-600 text-xl leading-10 max-w-lg">
                At Scala Technologies, innovation begins with
                understanding people. We believe technology
                should solve real challenges, create meaningful
                opportunities, and make everyday experiences
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
    animate={{ y: [0, -20, 0] }}
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
    <span
      className="
        absolute
        -top-4
        left-6
        w-[2px]
        h-8
        bg-blue-500
        rotate-[-25deg]
      "
    />

    <span
      className="
        absolute
        -top-4
        right-6
        w-[2px]
        h-8
        bg-blue-500
        rotate-[25deg]
      "
    />

    <FaLightbulb
      className="
        text-[120px]
        min-[778px]:text-[240px]
        min-[1200px]:text-[320px]
        text-blue-600
        drop-shadow-xl
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