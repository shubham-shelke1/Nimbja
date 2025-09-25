// Testing.jsx
import React from "react";
import { motion } from "framer-motion";
import TESTING from "../../assets/TESTING.jpg"; // ✅ replace with your actual image

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Testing() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* ✨ Background Glows */}
      <motion.div
        className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-blue-500 opacity-20 rounded-full blur-[160px]"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-500 opacity-20 rounded-full blur-[140px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Section */}
      <section className="relative py-28 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
            >
              Software Testing – Manual & Automation
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-semibold text-white">
                Software testing is the process of evaluating and verifying
              </span>{" "}
              that a software product or application does what it is supposed to do.
              The benefits include preventing bugs, reducing development costs, 
              and improving performance.
            </motion.p>

            <motion.div
              className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl space-y-4 mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-gray-200">Software Testing can be broadly classified into two types:</p>
              <ul className="list-decimal list-inside space-y-2 text-gray-300">
                <li>
                  <span className="font-semibold text-white">Manual Testing:</span> Testing software manually without using automation tools or scripts.
                </li>
                <li>
                  <span className="font-semibold text-white">Automation Testing:</span> Writing scripts and using software tools to test the product automatically.
                </li>
              </ul>
            </motion.div>

            <motion.p
              className="italic text-gray-300 mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Software testing not only finds faults in existing software but also helps improve efficiency, accuracy, and usability.
            </motion.p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-purple-500/50 font-semibold text-lg transition-all"
            >
              Enroll Now
            </motion.a>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.img
              src={TESTING}
              alt="Software Testing"
              className="rounded-[2rem] shadow-2xl border border-blue-500/30 w-full max-w-3xl object-cover hover:shadow-purple-500/50 transition-all duration-500"
              whileHover={{ scale: 1.05, rotate: -1 }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
