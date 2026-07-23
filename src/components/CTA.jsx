import { useState } from "react";

function CTA() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwyH1FJ2Lbn57LPGFJJBcW6qlrAdG1IwguJkaqE281DeEccriMH-1K1yQxG4qxGq5X4Zg/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("address", formData.address);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      alert("Thank you! We'll contact you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      alert("Submission Failed");
    }

    setLoading(false);
  };

  return (
    <section
      id="cta"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-[#0B1B34]">
              Ready to Build the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Future
              </span>{" "}
              with Us?
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Whether you're looking for a powerful SaaS platform,
              enterprise software, or a custom digital solution,
              Scala Technologies is ready to help transform your ideas
              into scalable products.
            </p>

            <div className="mt-10 rounded-3xl border border-blue-100 bg-white/70 backdrop-blur-lg shadow-lg p-8">

              <div className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
                Let's discuss your project
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B1B34]">
                We'd love to hear from you.
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Share your requirements with us and our team will reach
                out within one business day to discuss the best solution
                for your organization.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="rounded-[30px] bg-white/80 backdrop-blur-xl border border-white shadow-2xl p-10">

            <h3 className="text-3xl font-bold text-[#0B1B34] mb-8">
              Let's Connect
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl bg-blue-50 border border-gray-200 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl bg-blue-50 border border-gray-200 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl bg-blue-50 border border-gray-200 p-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />

              <textarea
                rows="4"
                name="address"
                placeholder="Address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-xl bg-blue-50 border border-gray-200 p-4 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;