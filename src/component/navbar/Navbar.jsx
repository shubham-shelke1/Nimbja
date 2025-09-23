// Navbar.jsx
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.png"; // adjust path if needed


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  

  return (
    <div>
      {/* 🔹 Top bar */}
      <div className="bg-[#2d312f] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-2 text-xs sm:text-sm space-y-2 sm:space-y-0">
        {/* Left - Contact info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <a
              href="tel:02027212597"
              className="hover:underline text-blue-400"
            >
              020-272 12 597
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <MdEmail />
            <a
              href="mailto:hr@nimbjasolution.com"
              className="hover:underline text-blue-400"
            >
              hr@nimbjasolution.com
            </a>
          </div>
        </div>

        {/* Right - Search & Links */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative w-40 sm:w-72">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-10 py-1.5 sm:py-2 rounded-full border border-gray-400 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-white text-xs sm:text-sm"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-sm sm:text-lg" />
          </div>

          <a href="#" className="hidden sm:inline hover:underline">
            Help Center
          </a>
          <a href="#" className="hidden sm:inline hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hidden sm:inline hover:underline">
            Sitemap
          </a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
  <img
    src={logo}
    alt="logo"
    className="h-8 sm:h-10"
  />
</Link>
          <span className="text-green-600 font-bold text-sm sm:text-lg whitespace-nowrap">
            Nimbja Security Solutions Pvt Ltd
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 font-semibold">
          <li>
            <Link to="/" className="text-blue-600 hover:text-green-600">
              Home
            </Link>
          </li>
         <li className="relative">
  {/* Dropdown Trigger */}
  <button
    className="flex items-center text-black hover:text-green-600 focus:outline-none"
    onMouseEnter={() => setServicesOpen(true)}
    onMouseLeave={() => setServicesOpen(false)}
  >
    IT Services ▾
  </button>

  {/* Dropdown Menu */}
  {servicesOpen && (
    <div
      className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-50 w-64"
      onMouseEnter={() => setServicesOpen(true)}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <ul className="py-2">
        <li>
          <Link
            to="/services/service1"
            className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
          >
            Software Development Application
          </Link>
        </li>
        <li>
          <Link
            to="/services/service2"
            className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
          >
            Software Testing - Manual & Automation
          </Link>
        </li>
        <li>
          <Link
            to="/services/service3"
            className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
          >
            Mobile Development & Testing
          </Link>
        </li>
      </ul>
    </div>
  )}
</li>


          <li>
            <Link to="/aboutus" className="hover:text-green-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/career" className="hover:text-green-600">
              Career
            </Link>
          </li>
          <li>
            <Link to="/health" className="hover:text-green-600">
              US Health Care
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button (hidden on mobile) */}
        <button className="hidden sm:inline bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 sm:px-5 py-2 rounded-md font-medium hover:opacity-90">
          Let’s get started
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-3 font-medium">
          <Link to="/" className="block text-blue-600">
            Home
          </Link>

          <button
            className="flex items-center justify-between w-full"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            IT Services ▾
          </button>
          {servicesOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/services/service1" className="block hover:text-green-600">
                Software Development Application
              </Link>
              <Link to="/services/service2" className="block hover:text-green-600">
                Software Testing - Manual & Automation
              </Link>
              <Link to="/services/service3" className="block hover:text-green-600">
                Mobile Development & Testing
              </Link>
            </div>
          )}

          <Link to="/solutions" className="block hover:text-green-600">
            Solutions
          </Link>
          <Link to="/aboutus" className="block hover:text-green-600">
            About Us
          </Link>
          <Link to="/career" className="block hover:text-green-600">
            Career
          </Link>
          <Link to="/health" className="block hover:text-green-600">
            US Health Care
          </Link>
          <Link to="/contact" className="block hover:text-green-600">
            Contact
          </Link>

          {/* CTA in mobile */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md font-medium hover:opacity-90">
            Let’s get started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
