// Navbar.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* 🔹 Top bar */}
      <div className="bg-[#0c243d] text-white flex items-center justify-between px-6 py-2 text-sm">
        {/* Left - Contact info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>020- 272 12 597</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail />
            <span>hr@nimbjasolution.com</span>
          </div>
        </div>

        {/* Right - Search & Links */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full border focus:outline-white text-white"
            />
            <FiSearch className="absolute right-3 top-2 text-white" />
          </div>

          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="https://nimbjasolution.com/images/logo.png"
              alt="logo"
              className="h-10"
            />
          </Link>
          <span className="text-green-600 font-bold text-lg whitespace-nowrap">
            Nimbja Security Solutions Pvt Ltd
          </span>
        </div>

        {/* Links */}
        <ul className="flex items-center space-x-6 font-semibold">
          <li>
            <Link to="/" className="text-blue-600 hover:text-green-600">
              Home
            </Link>
          </li>
          <li>
            <div className="relative group">
              <button className="flex items-center">
                IT Services ▾
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md">
                <Link
                  to="/services/service1"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
              Software Developement Application
                </Link>
                <Link
                  to="/services/service2"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                  Software Testing - Manual & Automation
                </Link>
                <Link
                  to="/services/service2"
                  className="block px-6 py-3 hover:bg-gray-100"
                >
                    Mobile Development & Testing

                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/solutions" className="hover:text-green-600">
              Solutions
            </Link>
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

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-md font-medium hover:opacity-90">
          Let’s get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
    