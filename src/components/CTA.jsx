function CTA() {
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeBCxOXks614CK11ksgmr0Mi-Cg8eYYLnZjwdJ7cT0ZvNm60g/viewform";

//change mail (ask hr)
  const email = "inquire.scalatechnologies@gmail.com";

  const handleContact = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleDemo = () => {
    window.open(formLink, "_blank");
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl md:text-6xl font-bold text-[#0B1B34] leading-tight">
          Ready to Build the{" "}
          <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#06B6D4] bg-clip-text text-transparent">
            Future
          </span>{" "}
          with Us?
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
          Whether you're looking for a powerful SaaS platform or a custom
          digital solution, we're here to help you navigate the complexities
          of modern engineering.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">

          {/* Contact Button */}
          <button
            onClick={handleContact}
            className="px-12 py-5 rounded-2xl bg-[#2563EB] text-white text-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-[#1D4ED8] transition-all duration-300"
          >
            Contact Us Today
          </button>

          {/* Gradient Border Button */}
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] hover:shadow-lg transition-all duration-300">
            <button
              onClick={handleDemo}
              className="w-full h-full px-12 py-5 rounded-[14px] bg-white text-[#0B1B34] text-xl font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Schedule a Demo
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;