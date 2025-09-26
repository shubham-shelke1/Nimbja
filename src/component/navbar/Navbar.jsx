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
      {/* <div className="bg-[#2d312f] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-2 text-xs sm:text-sm space-y-2 sm:space-y-0"> */}
        {/* Left - Contact info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">



        </div>
      {/* </div> */}

      {/* 🔹 Main Navbar */}
<div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-r from-[#006D5B] to-[#0A192F]
 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="logo" className="h-9 sm:h-14" />
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
            <button className="flex items-center text-white hover:text-green-600 focus:outline-none">
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
