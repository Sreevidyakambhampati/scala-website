function CTA() {
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeBCxOXks614CK11ksgmr0Mi-Cg8eYYLnZjwdJ7cT0ZvNm60g/viewform";

  const handleContact = () => {
    window.open(formLink, "_blank");
  };

  const handleDemo = () => {
    window.open(formLink, "_blank");
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl md:text-6xl font-bold text-[#0B1B34] leading-tight">
          Ready to Build the{" "}
          <span className="text-[#2563EB]">
            Future
          </span>{" "}
          with Us?
        </h2>

        <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl mx-auto">
          Whether you're looking for a powerful SaaS platform or a custom
          digital solution, we're here to help you navigate the complexities
          of modern engineering.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">

          <button
            onClick={handleContact}
            className="px-12 py-5 bg-[#2563EB] text-white text-xl font-semibold rounded-2xl hover:bg-[#1D4ED8] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </button>

          <button
            onClick={handleDemo}
            className="px-12 py-5 border border-gray-300 text-[#0B1B34] text-xl font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300"
          >
            Schedule a Demo
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTA;