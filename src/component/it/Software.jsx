import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ad from "../../assets/ad.jpg";
import WEB from "../../assets/web.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const Software = () => {
  const [openForm, setOpenForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Application Submitted Successfully!");
    setOpenForm(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">

      {/* ✨ Background Glow */}
      <motion.div
        className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-indigo-500 opacity-20 rounded-full blur-[120px]"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-cyan-500 opacity-20 rounded-full blur-[100px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* =================== Application Development =================== */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center relative z-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src={ad}
              alt="Application Development"
              className="rounded-2xl shadow-xl border border-indigo-500/30 w-full max-w-md h-auto hover:shadow-indigo-500/60 object-cover transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
              Application Development
            </h2>

            <p className="text-base text-gray-300 mb-4">
              Build, adapt, and scale applications quickly with our enterprise-grade
              solutions designed for the digital era.
            </p>
            <p className="text-sm text-gray-400 mb-4">
              We provide complete toolkits to deliver enterprise applications
              faster, reliably, and with reduced cost.
            </p>
            <p className="text-sm italic text-gray-200 mb-6">
              Software development is the art and science of designing, coding, and
              maintaining systems that power innovation.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCourse("Application Development");
                setOpenForm(true);
              }}
              className="px-8 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-purple-500/50 font-medium text-sm"
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* =================== Web Development =================== */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center relative z-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <motion.img
              src={WEB}
              alt="Web Development"
              className="rounded-2xl shadow-xl border border-cyan-500/30 w-full max-w-md h-auto hover:shadow-cyan-500/60 object-cover transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Web Development
            </h2>

            <p className="text-base text-gray-300 mb-4">
              We build fast, secure, and responsive websites that deliver
              exceptional user experiences.
            </p>
            <p className="text-sm text-gray-400 mb-4">
              From frontend to backend, our solutions are scalable, SEO-friendly,
              and future-ready.
            </p>
            <p className="text-sm italic text-gray-200 mb-6">
              Whether corporate sites or e-commerce stores, we deliver visually
              stunning and advanced web solutions.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCourse("Web Development");
                setOpenForm(true);
              }}
              className="px-8 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-cyan-500/50 font-medium text-sm"
            >
              Enroll Now
            </motion.button>
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

              <h2 className="text-xl font-bold mb-4">
                Enroll in {selectedCourse}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" placeholder="Full Name" className="w-full p-2 border rounded text-sm" required />
                <input type="email" placeholder="Email Address" className="w-full p-2 border rounded text-sm" required />
                <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded text-sm" required />
                <select className="w-full p-2 border rounded text-sm" required>
                  <option value="">Select Course Type</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="fullstack">Full-Stack Development</option>
                  <option value="mobile">Mobile App Development</option>
                </select>
                <textarea placeholder="Additional Notes" className="w-full p-2 border rounded text-sm" rows="3"></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="w-full px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm"
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
};

export default Software;
