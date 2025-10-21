import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full font-poppins z-30 transition-all duration-300 ${
        isScrolled ? "bg-transparent" : "bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/logo.jpeg"
            alt="ARCON Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav
          className={`hidden lg:flex space-x-10 font-medium uppercase tracking-wider absolute left-1/2 transform -translate-x-1/2 transition-colors duration-300 ${
            isScrolled ? "text-white" : "text-white"
          }`}
        >
          <a href="/#home" className="hover:text-[#0094D9] transition">
            Home
          </a>
          <a href="/#about" className="hover:text-[#0094D9] transition">
            About
          </a>
          <a href="/#testimonials" className="hover:text-[#0094D9] transition">
            Client
          </a>
          <a href="/#contact" className="hover:text-[#0094D9] transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className={`lg:hidden text-3xl cursor-pointer transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden fixed top-0 left-0 p-3 mt-20 w-full bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-white text-xl font-semibold uppercase tracking-wider transition-transform duration-300 ${
          isOpen
            ? "translate-x-0 max-h-[80vh] overflow-y-auto"
            : "-translate-x-full"
        }`}
      >
        <a href="/#home" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="/#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="/#testimonials" onClick={() => setIsOpen(false)}>
          Client
        </a>
        <a href="/#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </header>
  );
}
