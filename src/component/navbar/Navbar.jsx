// Navbar.jsx
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow">
      {/* 🔹 Top bar */}
      <div className="bg-[#2d312f] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-2 text-xs sm:text-sm space-y-2 sm:space-y-0">
        {/* Left - Contact info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <a href="tel:02027212597" className="hover:underline text-blue-400">
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
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 sm:h-12" />
          </Link>
          <span className="text-green-600 font-bold text-sm sm:text-lg whitespace-nowrap">
            Nimbja Security Solutions Pvt Ltd
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 font-semibold">
          <li>
            <Link to="/" className="text-black-600 hover:text-green-600">
              Home
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center text-black hover:text-green-600 focus:outline-none">
              IT Services ▾
            </button>

            {/* Dropdown */}
            <div
              className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 transform transition-all duration-300 ease-out ${
                servicesOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <ul className="py-2">
                <li>
                  <Link
                    to="/software"
                    className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
                  >
                    Software Development Application
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testing"
                    className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
                  >
                    Software Testing - Manual & Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mobile"
                    className="block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
                  >
                    Mobile Development & Testing
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/aboutus" className="hover:text-green-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/carrer" className="hover:text-green-600">
              Carrier
            </Link>
          </li>
          <li>
            <Link to="/us" className="hover:text-green-600">
              US Health Care
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger (mobile only) */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-3 font-medium">
          <Link to="/" className="block text-blue-600">
            Home
          </Link>

          {/* Mobile Dropdown */}
          <button
            className="flex items-center justify-between w-full"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            IT Services ▾
          </button>
          {servicesOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/software" className="block hover:text-green-600">
                Software Development Application
              </Link>
              <Link to="/testing" className="block hover:text-green-600">
                Software Testing - Manual & Automation
              </Link>
              <Link to="/mobile" className="block hover:text-green-600">
                Mobile Development & Testing
              </Link>
            </div>
          )}

          <Link to="/aboutus" className="block hover:text-green-600">
            About Us
          </Link>
          <Link to="/carrer" className="block hover:text-green-600">
            Carrier
          </Link>
          <Link to="/us" className="block hover:text-green-600">
            US Health Care
          </Link>
          <Link to="/contact" className="block hover:text-green-600">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
