// Home.jsx
import React from "react";
import { motion } from "framer-motion";
import home2 from "../../assets/home2.jpg"; // adjust path if needed
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${home2})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-opacity-60"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-2xl pl-10 sm:pl-20 text-left"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 2 }}
        transition={{ duration: 2, ease: "easeOut" }} // Slow zoom effect
      >
        <h1 className="text-4xl sm:text-6xl font-light leading-snug mb-6 text-gray-100">
          A highly experienced <br />
          <span className="font-extrabold text-white drop-shadow-lg">
            Team of IT Professionals.
          </span>
        </h1>

        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          We provide highly cost effective solutions
        </p>

        {/* Button */}
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/aboutus"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition inline-block"
          >
            All Solution →
          </Link>

        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
