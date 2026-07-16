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
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-8">
                  <Icon className="text-blue-600 text-xl" />
                </div>

                <h3 className="text-3xl font-semibold text-[#0B1B34] mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default About;