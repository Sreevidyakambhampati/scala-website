function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen pt-24 bg-[#f7f7f8] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">

        <p className="text-blue-600 uppercase tracking-[4px] text-xs font-semibold mb-8">
          WE BELIEVE
        </p>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold text-[#07162d] leading-tight">
            Simplifying Work
          </h1>

          <h1 className="text-5xl md:text-7xl font-bold text-blue-600 leading-tight">
            Empowering Growth
          </h1>
        </div>

        <p className="mt-10 max-w-2xl text-gray-600 text-lg leading-9">
          We create digital solutions that solve real-world challenges,
          empower communities, and help organizations deliver better
          experiences every day.
        </p>

        {/* <div className="flex flex-wrap gap-5 mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition duration-300 hover:scale-105">
            Explore Our Products →
          </button>

          <button className="bg-blue-50 border border-blue-100 text-blue-600 px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-100 transition duration-300 hover:scale-105">
            Book a Demo
          </button>
        </div> */}

      </div>
    </section>
  );
}

export default Hero;