import {
  FiPhone,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { Link } from "react-scroll";
import scalaLogo from "../assets/scalaLogo.png";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-[#03152D] via-[#0A2D63] to-[#2563EB] text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-16 pb-12 border-b border-white/10">

          {/* Left */}
          <div>

            <div className="flex items-center gap-3 mb-8">
              <img
                src={scalaLogo}
                alt="Scala"
                className="w-8 h-8 object-contain"
              />

              <h2 className="text-3xl font-semibold">
                Scala Technologies
              </h2>
            </div>

            <p className="text-white/70 text-[17px] leading-8 max-w-sm mb-10">
              Where Innovation Meets Execution.
              Delivering scalable,
              user-centric software that
              makes a real impact.
            </p>

            {/* Social */}
            <div className="flex gap-4">

              <a
                href="tel:+919876543210"
                className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FiPhone size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FiLinkedin size={20} />
              </a>

              <a
                href="mailto:info@scalatechnologies.com"
                className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FiMail size={20} />
              </a>

            </div>

          </div>

          {/* Company */}
          <div>

            <p className="text-xs tracking-[4px] uppercase text-white/50 mb-8">
              Company
            </p>

            <div className="space-y-5 text-white/80">

              <Link
                to="hero"
                smooth={true}
                duration={500}
                offset={-120}
                className="block cursor-pointer hover:text-white"
              >
                Home
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-120}
                className="block cursor-pointer hover:text-white"
              >
                About Us
              </Link>

              <p className="cursor-pointer hover:text-white">
                Careers
              </p>

              <Link
                to="innovation"
                smooth={true}
                duration={500}
                offset={-120}
                className="block cursor-pointer hover:text-white"
              >
                Impact
              </Link>

            </div>

          </div>

          {/* Products */}
          <div>

            <p className="text-xs tracking-[4px] uppercase text-white/50 mb-8">
              Products
            </p>

            <div className="space-y-5 text-white/80">

              <p
                onClick={() => {
                  document
                    .getElementById("products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });

                  setTimeout(() => {
                    window.productsSwiper?.slideTo(0);
                  }, 500);
                }}
                className="cursor-pointer hover:text-white"
              >
                SPACZ
              </p>

              <p
                onClick={() => {
                  document
                    .getElementById("products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });

                  setTimeout(() => {
                    window.productsSwiper?.slideTo(1);
                  }, 500);
                }}
                className="cursor-pointer hover:text-white"
              >
                STRIKE
              </p>

              <p className="cursor-pointer hover:text-white">
                Custom SaaS
              </p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <p className="text-xs tracking-[4px] uppercase text-white/50 mb-8">
              Contact
            </p>

            <div className="space-y-5 text-white/80">

              <p className="cursor-pointer hover:text-white">
                Support
              </p>

              <p className="cursor-pointer hover:text-white">
                Sales
              </p>

              <p className="cursor-pointer hover:text-white">
                Privacy Policy
              </p>

              <p className="cursor-pointer hover:text-white">
                Terms & Conditions
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-white/50">

          <p>
            Copyright © 2026 Scala Technologies.
            All rights reserved.
          </p>

          <div className="flex gap-8 mt-5 md:mt-0">

            <p className="cursor-pointer hover:text-white">
              Cookie Policy
            </p>

            <p className="cursor-pointer hover:text-white">
              Security
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;