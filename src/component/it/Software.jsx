import React from "react";
import { motion } from "framer-motion";
import AD from "../../assets/ad.jpg"; // ✅ Application Development image
import WEB from "../../assets/web.jpg"; // ✅ Web Development image

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Software = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      
      {/* ✨ Animated Background Glow Orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[40rem] h-[40rem] bg-indigo-500 opacity-20 rounded-full blur-[180px]"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-cyan-500 opacity-20 rounded-full blur-[160px]"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* =================== Application Development =================== */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* Left - Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.img
              src={AD}
              alt="Application Development"
              className="rounded-[2.5rem] shadow-2xl border border-indigo-500/30 w-full max-w-3xl h-auto hover:shadow-indigo-500/60 object-cover transition-all duration-500"
              whileHover={{ scale: 1.08, rotate: 1 }}
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 text-whit text-transparent bg-clip-text"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
            >
              Application Development
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Business moves faster than ever in the digital era. To respond to
              opportunities and changing customer demands, you need to build,
              adapt, and scale applications quickly and efficiently.
            </motion.p>

            <motion.p
              className="text-gray-400 leading-relaxed mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Our platform provides the complete toolkit to deliver enhanced
              enterprise applications faster, more reliably, and with reduced cost.
            </motion.p>

            <motion.p
              className="text-gray-200 italic font-medium leading-relaxed mb-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Software development is the art and science of designing, coding,
              and maintaining systems that power innovation and transform industries.
            </motion.p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl shadow-xl hover:shadow-purple-500/50 font-semibold text-lg transition-all"
            >
              Enroll Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* =================== Web Development =================== */}
      <section className="relative py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* Right - Big Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <motion.img
              src={WEB}
              alt="Web Development"
              className="rounded-[2.5rem] shadow-2xl border border-cyan-500/30 w-full max-w-3xl h-auto hover:shadow-cyan-500/50 object-cover transition-all duration-500"
              whileHover={{ scale: 1.08, rotate: -1 }}
            />
          </motion.div>

          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.h2
              className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
            >
              Web Development
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Your online presence defines your brand. We build fast, secure, and
              responsive websites that deliver exceptional user experiences.
            </motion.p>

            <motion.p
              className="text-gray-400 leading-relaxed mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              From frontend interfaces to backend systems, our solutions are
              scalable, SEO-friendly, and future-ready — designed to grow with your business.
            </motion.p>

            <motion.p
              className="text-gray-200 italic font-medium leading-relaxed mb-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Whether it's a corporate site, e-commerce store, or a custom portal —
              we deliver visually stunning and technologically advanced web solutions.
            </motion.p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl shadow-xl hover:shadow-cyan-400/50 font-semibold text-lg transition-all"
            >
              Start Your Web Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Software;
