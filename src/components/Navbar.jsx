import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // to use menu for mobile view

  const navLinks = [
    { id: 1, title: "Home" },
    { id: 2, title: "About Us" },
    { id: 3, title: "Culture" },
    { id: 4, title: "Products" },
    { id: 5, title: "Contact" },
  ]; //kept this array because we can increase or decrease the links

  return (
     <nav className="w-full bg-[#f5f5f7] shadow-sm relative">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    <div className="h-20 flex items-center justify-between">

      {/* Logo */}
      <img
        src="/logo.png"
        alt="Scala Technologies"
        className="h-12 lg:h-14 object-contain"
      />

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="
              text-gray-600
              hover:text-blue-600
              cursor-pointer
              text-sm
              tracking-wider
              transition
            "
          >
            {link.title}
          </li>
        ))}

        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition">
          Book a Demo
        </button>
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <ul className="lg:hidden bg-white shadow-md flex flex-col gap-5 p-6">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-gray-600 cursor-pointer"
          >
            {link.title}
          </li>
        ))}

        <button className="bg-blue-600 text-white py-3 rounded-xl">
          Book a Demo
        </button>
      </ul>
    )}

  </div>
</nav>
  );
}

export default Navbar;