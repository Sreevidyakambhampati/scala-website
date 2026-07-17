import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaCloud,
  FaRocket,
  FaCode,
} from "react-icons/fa";

function Hero() {
  const text = "Simplifying Work";

  const services = [
    {
      title: "React",
      icon: <FaReact />,
      top: "15%",
      left: "55%",
    },
    {
      title: "Java",
      icon: <FaJava />,
      top: "35%",
      left: "80%",
    },
    {
      title: "SaaS",
      icon: <FaCloud />,
      top: "70%",
      left: "65%",
    },
    {
      title: "Animations",
      icon: <FaRocket />,
      top: "65%",
      left: "25%",
    },
    {
      title: "Development",
      icon: <FaCode />,
      top: "20%",
      left: "20%",
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden w-full min-h-screen pt-24 bg-[#f7f7f8] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-600 uppercase tracking-[4px] text-xs font-semibold mb-8"
          >
            WE BELIEVE
          </motion.p>

          <div className="space-y-2">

            {/* Typing Effect */}
            <motion.h1
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                delay: 2,
                repeat: Infinity,
              }}
              className="text-5xl md:text-7xl font-bold text-[#07162d] leading-tight"
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Slide Up */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 120,
              }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: {
                  duration: 1,
                  delay: 1.6,
                },
                y: {
                  duration: 2,
                  delay: 1.6,
                  repeat: Infinity,
                },
              }}
              className="text-5xl md:text-7xl font-bold text-blue-600 leading-tight"
            >
              Empowering Growth
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-10 max-w-2xl text-gray-600 text-lg leading-9"
          >
            We create digital solutions that solve real-world challenges,
            empower communities, and help organizations deliver better
            experiences every day.
          </motion.p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center items-center h-[500px]">

          {/* Glow */}
          <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-[120px]" />

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0],
              }}
              transition={{
                delay: 2 + index * 0.2,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute"
              style={{
                top: service.top,
                left: service.left,
              }}
            >
              <div className="bg-white shadow-2xl rounded-3xl px-6 py-4 flex items-center gap-3 border border-gray-100">

                <div className="text-blue-600 text-2xl">
                  {service.icon}
                </div>

                <p className="font-semibold text-gray-800">
                  {service.title}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;