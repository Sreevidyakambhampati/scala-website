import { FaQuoteLeft } from "react-icons/fa";

function MissionVision() {
  return (
    <section className="bg-white">

      {/* Quote 

      <div className="max-w-6xl mx-auto px-6 py-28 text-center">

        <FaQuoteLeft className="text-4xl text-blue-600 mx-auto mb-8" />

        <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Great technology is not defined by complexity—
          it's defined by the difference it makes.
        </p>

      </div>

      {/* Mission + Vision */}

      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/missionvission.png')",
        }}
      >
        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-[#03152D]/78"></div>

        <div className="relative max-w-7xl mx-auto px-10 py-28">

          {/* Mission */}

          <div className="max-w-4xl mb-28">

            <p className="text-[#2563eb] text-xs tracking-[6px] uppercase mb-8">
              OUR MISSION
            </p>

            <h2
              className="text-white text-[64px] leading-[1.15] font-semibold mb-10" >        
              To identify real-world challenges and
              develop innovative digital solutions that
              create lasting value.
            </h2>

            <p className="text-gray-300 text-[22px] leading-[1.8] max-w-3xl">
              We aim to empower individuals,
              businesses, and communities through
              technology that remains relevant and
              effective for the long term.
            </p>

          </div>

          {/* Vision */}

          <div className="max-w-4xl">

            <p className="text-[#2563eb] text-xs tracking-[6px] uppercase mb-8">
              OUR VISION
            </p>

            <h2 
              className="text-white text-[64px] leading-[1.15] font-semibold ">
              To build technology that positively
              impacts millions of lives.
            </h2>

            <p
              className="text-gray-300 text-[22px] leading-[1.8] max-w-3xl">
              To create a connected future where
              technology simplifies lives and unlocks
              new opportunities.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default MissionVision;