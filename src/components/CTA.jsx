import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin
} from "react-icons/fi";
import toast from "react-hot-toast";

function CTA() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxwz51qjRiA9gSqEoQQqpG6CIrFuhstYXmR5-_iSpe8e8pWo-_4Lg2iL_4nvZnggu982Q/exec";

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
    const response = await fetch(scriptURL, {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (result.status === "success") {
      toast.success(result.message, {
  icon: "✅",
});

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    } else {
      toast.error(result.message, {
  icon: "⚠️",
});
    }
  } catch (err) {
    console.error(err);
    toast.error("Submission Failed", {
  icon: "⚠️",
});
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

          <div
  id="contact-form"
  className="
    rounded-2xl
    bg-white/70
    backdrop-blur-2xl
    border
    border-white/40
    shadow-[0_15px_50px_rgba(37,99,235,0.12)]
    p-10
  "
>

  <h3 className="text-3xl font-bold text-[#0B1B34]">
    Let's Connect
  </h3>

  <p className="mt-2 mb-8 text-gray-500">
    We'd love to hear about your project.
  </p>

  <form
    onSubmit={handleSubmit}
    className="space-y-7"
  >

    {/* Name */}

    <div className="relative">

      <FiUser
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-blue-500
          text-lg
        "
      />

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        minLength={3}
        value={formData.name}
        onChange={handleChange}
        className="
          w-full
          pl-12
          pr-4
          py-4
          rounded-xl
          bg-white
          border
          border-gray-200
          shadow-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>

    {/* Email */}

    <div className="relative">

      <FiMail
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-blue-500
          text-lg
        "
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={handleChange}
        className="
          w-full
          pl-12
          pr-4
          py-4
          rounded-xl
          bg-white
          border
          border-gray-200
          shadow-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>

    {/* Phone */}

    <div className="relative">

      <FiPhone
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-blue-500
          text-lg
        "
      />

      <input
        type="tel"
        name="phone"
        placeholder="Contact Number"
        required
        pattern="[0-9]{10}"
        maxLength={10}
        value={formData.phone}
        onChange={handleChange}
        className="
          w-full
          pl-12
          pr-4
          py-4
          rounded-xl
          bg-white
          border
          border-gray-200
          shadow-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>

    {/* Address */}

    <div className="relative">

      <FiMapPin
        className="
          absolute
          left-4
          top-5
          text-blue-500
          text-lg
        "
      />

      <textarea
        rows="5"
        name="address"
        placeholder="Address"
        required
        value={formData.address}
        onChange={handleChange}
        className="
          w-full
          pl-12
          pr-4
          py-4
          rounded-xl
          bg-white
          border
          border-gray-200
          shadow-sm
          outline-none
          resize-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>

    <button
      type="submit"
      disabled={loading}
      className="
        w-full
        py-4
        rounded-xl
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-cyan-500
        text-white
        font-semibold
        text-lg
        shadow-lg
        hover:-translate-y-1
        hover:shadow-blue-300/50
        active:scale-95
        transition-all
        duration-300
        disabled:opacity-60
      "
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