import React from "react";
import { motion } from "framer-motion";

const Year = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-400 via-black to-gray-700 text-white py-12 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-snug bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            We are a leading one-stop IT service company
          </h1>

          <p className="text-gray-300 text-base leading-relaxed">
            Housing all levels of professionals with varied years of experience
            and deep expertise across every sector.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/70 backdrop-blur-md rounded-xl p-4 border-l-4 border-blue-500 shadow-lg"
          >
            <p className="text-gray-200 text-base">
              We strive to pay attention to every detail our clients require —
              delivering tailored solutions that drive success.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Years of Experience Card */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700 shadow-2xl transition-all duration-300"
          >
            <div className="text-center space-y-3">
              <div className="inline-block bg-blue-500/10 px-5 py-2 rounded-full">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
                  className="text-4xl font-bold text-blue-400 drop-shadow-lg"
                >
                  15+
                </motion.span>
              </div>
              <h3 className="text-xl font-semibold text-gray-200">
                Years of Experience
              </h3>
              <p className="text-gray-400 text-sm">
                Delivering excellence in IT services
              </p>
            </div>
          </motion.div>

          {/* Global Presence Card */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-gray-800/80 rounded-2xl p-6 border border-gray-700 shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Global Presence
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🌍", name: "All India", color: "text-blue-400" },
                { icon: "MH", name: "Maharashtra", color: "text-green-400" },
                { icon: "PU", name: "Pune", color: "text-yellow-400" },
                { icon: "🌐", name: "Worldwide", color: "text-red-400" },
              ].map((loc, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="text-center p-4 bg-gray-700/50 rounded-xl backdrop-blur-sm hover:shadow-lg transition"
                >
                  <div className={`${loc.color} text-3xl mb-1`}>{loc.icon}</div>
                  <p className="text-gray-300 font-medium text-sm">{loc.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Year;
