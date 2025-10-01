import React from "react";
import logo from "../../assets/logo.png"; // ✅ Correct logo import
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#096259] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
            <h2 className="text-lg font-bold text-green-400">
              Nimbja Security Solutions Pvt Ltd Pune
            </h2>
          </div>
          <p className="text-sm text-gray-300">
            Nimbja Security Solutions Pvt. Ltd. Pune, is a leading software service provider and top IT company for IT business solutions.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-green-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Skype" className="hover:text-green-400">
              <i className="fab fa-skype"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-green-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-green-400">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* All IT Services */}
       <div>
      <h3 className="text-white text-lg font-semibold mb-4">All IT Services</h3>
      <ul className="text-sm text-gray-300 space-y-2">
        <li>
          <Link to="/software" className="hover:text-white">
            Software Applications Development
          </Link>
        </li>
        <li>
          <Link to="/testing" className="hover:text-white">
            Software Testing (Manual & Automation)
          </Link>
        </li>
        <li>
          <Link to="/mobile" className="hover:text-white">
            Mobile Development & Testing
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-white">
            RPA Automation
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-white">
            Maintenance & Support
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-white">
            Data Science
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-white">
            Cloud Computing
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-white">
            AWS Services
          </Link>
        </li>
        <li>
          <Link to="/aboutus" className="hover:text-white">
            Sales Force Services
          </Link>
        </li>
      </ul>
    </div>
        {/* Latest News */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Latest News</h3>
          <ul className="text-sm text-gray-300 space-y-4">
            <li>
              <p className="font-medium">Improving lives technology lighthouse project</p>
              <span className="text-xs text-gray-400">July 31, 2025</span>
            </li>
            <li>
              <p className="font-medium">Technology to Support Business Continuity</p>
              <span className="text-xs text-gray-400">June 29, 2024</span>
            </li>
            <li>
              <p className="font-medium">The Top 3 Downfalls to be Aware of and</p>
              <span className="text-xs text-gray-400">May 13, 2023</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-900 mt-10 pt-4 text-center text-lg text-sky-500">
        © 2025 Nimbja Security Solutions Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
