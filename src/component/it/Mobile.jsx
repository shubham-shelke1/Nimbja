// Mobile.jsx
import React from "react";
import { motion } from "framer-motion";
import MOBILE from "../../assets/MOBILE.jpg"; // ✅ replace with your image

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Mobile() {
  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      {/* ✨ Background Glow Orbs */}
      <motion.div
        className="absolute -top-40 left-0 w-[32rem] h-[32rem] bg-pink-500 opacity-20 rounded-full blur-[160px]"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-violet-500 opacity-20 rounded-full blur-[140px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content Section */}
      <section className="relative py-28 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src={MOBILE}
              alt="Mobile Development & Testing"
              className="rounded-[2rem] shadow-2xl border border-pink-500/30 w-full max-w-3xl object-cover hover:shadow-violet-500/50 transition-all duration-500"
              whileHover={{ scale: 1.05, rotate: 1 }}
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 to-violet-400 text-transparent bg-clip-text"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
            >
              Mobile Development & Testing
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-semibold text-white">Mobile app development</span> 
              is the process by which a mobile app is developed for mobile devices such as smartphones, tablets, and enterprise digital assistants. These software applications are designed to run on mobile devices seamlessly.
            </motion.p>

            <motion.p
              className="text-gray-400 leading-relaxed mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              These applications can be pre-installed on devices during manufacturing, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "app-like" experience inside a browser.
              Developers also consider screen sizes, hardware specs, and configurations because of high competition and platform-specific variations.
            </motion.p>

            <motion.p
              className="italic text-gray-200 mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              The platform organizations needed to develop, deploy, and manage mobile apps are made from many components and tools.
            </motion.p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-pink-600 to-violet-600 text-white rounded-2xl shadow-lg hover:shadow-violet-500/50 font-semibold text-lg transition-all"
            >
              Enroll Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
