"use client";
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for smooth scrolling
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const sections = [
    { title: "Home", href: "/#home" },
    { title: "About", href: "/#about" },
    { title: "Services", href: "/#services" },
    { title: "Client", href: "/#testimonials" },
    { title: "Contact", href: "/#contact" },
  ];

  const socials = [
    { name: "Facebook", icon: Facebook, href: "https://web.facebook.com/ppsgroupinc/?_rdc=1&_rdr#" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/ppsgroupinc/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/ppsgroupinc/" },
  ];

  return (
    <footer className="bg-[#3A7C7A] text-gray-800 border-t border-gray-800">
      {/* === TOP SECTION === */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        {/* Logo + Description */}
        <div className="">
          <img
            src="/logo.jpeg" // Replace with your actual logo path
            alt="PPS Group Logo"
            className="h-15 mb-5 w-80 object-contain"
          />
          <p className="leading-relaxed text-black max-w-xs">
            PPS Group delivers precision performance solutions - driving
            innovation, efficiency, and excellence across industries.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:pl-12">
          <h3 className="text-lg font-semibold text-white mb-5">Sections</h3>
          <ul className="flex flex-col space-y-2">
            {sections.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href} // Use Link for smooth scrolling
                  className="transition-colors text-black hover:text-[#36afe7] duration-200"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="md:pl-6">
          <h3 className="text-lg font-semibold text-white mb-5">Socials</h3>
          <ul className="flex flex-col space-y-3">
            {socials.map(({ name, icon: Icon, href }, i) => (
              <li key={i} className="flex items-center gap-3">
                <Icon size={17} className="text-gray-800" />
                <a
                  href={href}
                  className="hover:text-[#36afe7] text-black transition-colors duration-200"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* === DIVIDER === */}
      <div className="border-t border-gray-200"></div>

      {/* === BOTTOM SECTION === */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between text-gray-300 gap-3">
        <p>© 2025 JM Vehicle. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a
            href="/terms-conditions"
            className="hover:text-white text-white transition-colors duration-200"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <span>
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              className="text-white hover:underline font-medium"
            >
              Ansely
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}