import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaJava,
  FaCloud,
  FaRocket,
  FaCode,
} from "react-icons/fa";

//import heroBg from "../assets/backgroundhero.png";
import scalaLogo from "../assets/scalaLogo_background.png";

function Hero() {
  const text = "Simplifying Work";

  const services = [
    { title: "React", icon: <FaReact /> },
    { title: "Java", icon: <FaJava /> },
    { title: "SaaS", icon: <FaCloud /> },
    { title: "Animations", icon: <FaRocket /> },
    { title: "Development", icon: <FaCode /> },
  ];

  // ---- Orbit rotation state ----
  const [orbitAngle, setOrbitAngle] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      setOrbitAngle((prev) => prev + 0.006); // rotation speed
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  // ---- Orbit geometry (shared by ring + services) ----
  const radiusX = 185;
  const radiusY = 72;
  const tiltDeg = -24;
  const tilt = (tiltDeg * Math.PI) / 180;

  // ---- Smooth opacity curve: depth -1 (back) -> 1 (front) maps to opacity ----
  const depthToOpacity = (depth, min = 0.08, max = 1) =>
    min + (max - min) * ((depth + 1) / 2);

  // ---- Build the ring as small segments, each with its own computed opacity ----
  const numSegments = 48;
  const ringPoint = (angle) => {
    const px = radiusX * Math.cos(angle);
    const py = radiusY * Math.sin(angle);
    const x = px * Math.cos(tilt) - py * Math.sin(tilt);
    const y = px * Math.sin(tilt) + py * Math.cos(tilt);
    return { x: 260 + x, y: 260 + y };
  };

  const ringSegments = Array.from({ length: numSegments }, (_, i) => {
    const a0 = (i / numSegments) * Math.PI * 2;
    const a1 = ((i + 1) / numSegments) * Math.PI * 2;
    const mid = (a0 + a1) / 2;
    const depth = Math.sin(mid); // -1 back -> 1 front
    const p0 = ringPoint(a0);
    const p1 = ringPoint(a1);
    return {
      key: `seg-${i}`,
      p0,
      p1,
      depth,
      opacity: depthToOpacity(depth, 0.06, 1),
      isFront: depth >= 0,
    };
  });

  const backSegments = ringSegments.filter((s) => !s.isFront);
  const frontSegments = ringSegments.filter((s) => s.isFront);

  return (
    <section
  id="hero"
  className="relative overflow-hidden w-full min-h-screen pt-24 flex items-center bg-white"
>
  {/* Main background */}
<div className="absolute inset-0 overflow-hidden">

  {/* Right glow */}
  <div className="absolute right-[-250px] top-[-120px] w-[900px] h-[900px] rounded-full bg-blue-500/20 blur-[180px]" />

  {/* Center glow */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-400/10 blur-[140px]" />

</div>
<div className="absolute -top-52 -left-52 pointer-events-none opacity-25">
  {[...Array(9)].map((_, i) => (
    <div
      key={i}
      className="absolute border border-blue-400 rounded-full"
      style={{
        width: `${380 + i * 45}px`,
        height: `${380 + i * 45}px`,
        left: `${-i * 22}px`,
        top: `${-i * 22}px`,
      }}
    />
  ))}
</div>
<svg
  className="absolute bottom-0 left-0 w-full"
  viewBox="0 0 1440 220"
  preserveAspectRatio="none"
>
  <path
    d="
      M0,120
      C250,220
      450,20
      720,120
      C980,220
      1180,60
      1440,120
      L1440,220
      L0,220
      Z
    "
    fill="#2563EB"
    opacity="0.08"
  />
</svg>
<svg
  className="absolute bottom-0 left-0 w-full"
  viewBox="0 0 1440 220"
  preserveAspectRatio="none"
>
  <path
    d="
      M0,160
      C240,80
      520,220
      760,150
      C980,80
      1180,180
      1440,110
      L1440,220
      L0,220
      Z
    "
    fill="#2563EB"
    opacity="0.05"
  />
</svg>
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold text-[#07162d] leading-tight"
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
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

        {/* RIGHT */}
        <div className="relative hidden lg:flex justify-center items-center h-[650px]">

          {/* Background Glow */}
          <div className="absolute w-[650px] h-[650px] rounded-full bg-blue-500/20 blur-[160px]" />

          {/* Ring - back segments (behind planet, dim, fading toward the very back) */}
          <svg
            className="absolute w-[520px] h-[520px] pointer-events-none z-10"
            viewBox="0 0 520 520"
          >
            <g>
              {backSegments.map((seg) => (
                <line
                  key={seg.key}
                  x1={seg.p0.x}
                  y1={seg.p0.y}
                  x2={seg.p1.x}
                  y2={seg.p1.y}
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity={seg.opacity}
                />
              ))}
            </g>
          </svg>

          {/* Planet */}
          <div className="relative z-20 flex items-center justify-center">
            <div className="absolute w-[430px] h-[430px] rounded-full bg-blue-500/20 blur-[120px]" />
            <div className="absolute w-[330px] h-[330px] rounded-full bg-blue-400/20 blur-[90px]" />
            <div className="absolute w-[240px] h-[240px] rounded-full bg-indigo-400/20 blur-[70px]" />

            <div
              className="relative w-[320px] h-[320px] rounded-full overflow-hidden backdrop-blur-3xl border border-white/40 shadow-[0_40px_80px_rgba(0,0,0,.18)] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,.45), rgba(219,233,255,.25))",
              }}
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_25%,white,transparent_65%)]" />
              <img
                src={scalaLogo}
                className="relative z-10 w-40 object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Ring - front segments (above planet, brightest near the front-most point) */}
          <svg
            className="absolute w-[520px] h-[520px] pointer-events-none z-30"
            viewBox="0 0 520 520"
          >
            <defs>
              <filter id="orbitGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#orbitGlow)">
              {frontSegments.map((seg) => (
                <line
                  key={seg.key}
                  x1={seg.p0.x}
                  y1={seg.p0.y}
                  x2={seg.p1.x}
                  y2={seg.p1.y}
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity={seg.opacity}
                />
              ))}
            </g>
          </svg>

          {/* Orbiting service badges - smooth fade, same depth formula as the ring */}
          {services.map((service, i) => {
            const angle = orbitAngle + (i * (Math.PI * 2)) / services.length;

            const px = radiusX * Math.cos(angle);
            const py = radiusY * Math.sin(angle);

            const x = px * Math.cos(tilt) - py * Math.sin(tilt);
            const y = px * Math.sin(tilt) + py * Math.cos(tilt);

            const depth = Math.sin(angle); // -1 (back) to 1 (front)
            const opacity = depthToOpacity(depth, 0, 1); // fully 0 at the back, fully 1 at the front
            const scale = 0.8 + 0.2 * ((depth + 1) / 2);
            const isFront = depth >= 0;

            return (
              <div
                key={service.title}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
                  zIndex: isFront ? 40 : 5,
                  opacity,
                  pointerEvents: opacity > 0.5 ? "auto" : "none",
                  transition: "opacity 0.05s linear",
                }}
              >
                <div className="px-5 py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-white shadow-[0_20px_40px_rgba(0,0,0,.15)] flex items-center gap-3">
                  <div className="text-blue-600 text-xl">{service.icon}</div>
                  <span className="font-semibold text-gray-700 whitespace-nowrap">
                    {service.title}
                  </span>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Hero;