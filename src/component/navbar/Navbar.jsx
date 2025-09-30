// Navbar.jsx
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-500 font-semibold"
      : "text-black-600 hover:text-green-600";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-500 font-semibold block"
      : "block hover:text-green-600";

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow">
      {/* 🔹 Main Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-r from-[#006D5B] to-[#0A192F] text-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-9 sm:h-14" />
          </NavLink>
          <span className="text-white font-bold text-sm sm:text-2xl whitespace-nowrap">
            Nimbja Security Solutions Pvt Ltd
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 font-semibold">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
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
                  <NavLink
                    to="/software"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-5 py-3 text-green-500 font-semibold"
                        : "block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
                    }
                  >
                    Software Development Application
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/testing"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-5 py-3 text-green-500 font-semibold"
                        : "block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
                    }
                  >
                    Software Testing - Manual & Automation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mobile"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-5 py-3 text-green-500 font-semibold"
                        : "block px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
                    }
                  >
                    Mobile Development & Testing
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink to="/aboutus" className={navLinkClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/carrer" className={navLinkClass}>
              Career
            </NavLink>
          </li>
          <li>
            <NavLink to="/ushealth" className={navLinkClass}>
              US Health Care
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Hamburger (mobile only) */}
        <button
          className="lg:hidden text-2xl text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-4 space-y-3 font-medium">
          <NavLink to="/" className={mobileNavLinkClass}>
            Home
          </NavLink>

          {/* Mobile Dropdown */}
          <button
            className="flex items-center justify-between w-full"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            IT Services ▾
          </button>
          {servicesOpen && (
            <div className="ml-4 space-y-2">
              <NavLink to="/software" className={mobileNavLinkClass}>
                Software Development Application
              </NavLink>
              <NavLink to="/testing" className={mobileNavLinkClass}>
                Software Testing - Manual & Automation
              </NavLink>
              <NavLink to="/mobile" className={mobileNavLinkClass}>
                Mobile Development & Testing
              </NavLink>
            </div>
          )}

          <NavLink to="/aboutus" className={mobileNavLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/carrer" className={mobileNavLinkClass}>
            Career
          </NavLink>
          <NavLink to="/ushealth" className={mobileNavLinkClass}>
            US Health Care
          </NavLink>
          <NavLink to="/contact" className={mobileNavLinkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
