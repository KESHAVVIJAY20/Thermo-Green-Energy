import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../assets/Logo_nobg.png"; // Replace with your actual logo path
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [animate, setAnimate] = useState(false);
  const phoneNumber = "9352515020"; // your number
  const message = "Hello, I want to know more about your Products & Services."; // default message

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    setAnimate(true); // trigger fade-up on mount
  }, []);

  return (
    <footer className="relative w-full h-100 md:h-75 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2252767765/photo/men-work-pouring-concrete-slab-at-home-build.webp?a=1&b=1&s=612x612&w=0&k=20&c=PFtK63DEDWpfei1TtwsBWnBFYNBdcdNLeknecod3nXU=')",
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Footer Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full px-6 text-center transition-all duration-700 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Logo */}
        <img
          src={Logo}
          alt="Thermo Green Energy Logo"
          className="w-36 mb-4 mix-blend-color-burn"
        />

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 mb-4 justify-center text-black font-bold text-xl">
          {/* <a href="#home" className="hover:text-green-500 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-green-500 transition-colors">
            About
          </a>
          <a
            href="#services"
            className="hover:text-green-500 transition-colors"
          >
            Services
          </a>
          <a href="#contact" className="hover:text-green-500 transition-colors">
            Contact
          </a> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-600 font-semibold" : "text-gray-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-600 font-semibold" : "text-gray-500"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-600 font-semibold" : "text-gray-500"
              }`
            }
          >
            Our Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-600 font-semibold" : "text-gray-500"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-4 text-black">
          <a href="#" className="hover:text-green-500 transition-colors">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-green-500 transition-colors">
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.instagram.com/thermogreenenergy"
            target="_blank"
            className="hover:text-green-500 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-gray-900 text-sm">
          &copy; {new Date().getFullYear()} Thermo Green Energy Private Limited. 
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
