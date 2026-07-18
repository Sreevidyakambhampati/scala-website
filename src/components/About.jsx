import { features } from "../data/features";

function About() {
  return (
    <section id="about" className="bg-[#f6f7fc] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#0B1B34]">
            BUILT AROUND PEOPLE
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-600 text-lg leading-8">
            At Scala, we believe technology should simplify lives,
            improve efficiency, and create meaningful impact.
            We develop scalable software products that help people
            and organizations achieve more through innovation.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-white border border-gray-100 rounded-2xl p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Gradient Background */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#0B1B34] via-[#163B7A] to-[#2563EB]"></div>

                {/* Blue Glow */}

                <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-blue-500/40 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Content */}

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-white/15 backdrop-blur-sm flex items-center justify-center mb-8 transition-all duration-500">
                    <Icon className="text-blue-600 group-hover:text-white text-xl transition-colors duration-500" />
                  </div>

                  <h3 className="text-3xl font-semibold text-[#0B1B34] mb-5 group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-8 group-hover:text-blue-100 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default About;