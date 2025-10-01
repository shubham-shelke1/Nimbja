import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TESTING from "../../assets/test.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

export default function Testing() {
  const [openForm, setOpenForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Application Submitted Successfully!");
    setOpenForm(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">

      {/* ✨ Background Glows */}
      <motion.div
        className="absolute -top-40 -left-40 w-[24rem] h-[24rem] bg-blue-500 opacity-20 rounded-full blur-[120px]"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[22rem] h-[22rem] bg-purple-500 opacity-20 rounded-full blur-[100px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Section */}
      <section className="relative py-16 z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
            >
              Software Testing – Manual & Automation
            </motion.h2>

            <motion.p
              className="text-base text-gray-300 leading-relaxed mb-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-semibold text-white">Software testing</span> ensures
              your product works correctly and efficiently, preventing bugs, reducing costs,
              and improving performance.
            </motion.p>

            <motion.div
              className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-4 shadow-xl space-y-2 mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ul className="list-decimal list-inside text-gray-300 text-sm space-y-1">
                <li>
                  <span className="font-semibold text-white">Manual Testing:</span> Testing manually without scripts.
                </li>
                <li>
                  <span className="font-semibold text-white">Automation Testing:</span> Using scripts and tools to automate tests.
                </li>
              </ul>
            </motion.div>

            <motion.p
              className="italic text-gray-300 mb-6 text-sm"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Testing improves efficiency, accuracy, and usability of software.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenForm(true)}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-purple-500/50 text-sm font-medium"
            >
              Enroll Now
            </motion.button>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.img
              src={TESTING}
              alt="Software Testing"
              className="rounded-xl shadow-xl border border-blue-500/30 w-full max-w-sm object-cover hover:shadow-purple-500/50 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </section>

      {/* =================== Enrollment Modal =================== */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative text-gray-800">
              <button
                onClick={() => setOpenForm(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                ✖
              </button>

              <h2 className="text-xl font-bold mb-4">Enroll in Software Testing</h2>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 border rounded text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded text-sm"
                  required
                />
                <select className="w-full p-2 border rounded text-sm" required>
                  <option value="">Select Course Type</option>
                  <option value="manual">Manual Testing</option>
                  <option value="automation">Automation Testing</option>
                  <option value="fullstack">Full Testing Package</option>
                </select>
                <textarea
                  placeholder="Additional Notes"
                  className="w-full p-2 border rounded text-sm"
                  rows="3"
                ></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                >
                  Submit Application
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
