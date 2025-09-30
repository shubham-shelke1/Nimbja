import React from "react";
import { motion } from "framer-motion";
import MOBILE from "../../assets/mobile.jpg"; // ✅ Replace with your image

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Mobile() {
  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      {/* Background Glow Orbs */}
      <motion.div
        className="absolute -top-40 left-0 w-[24rem] h-[24rem] bg-pink-500 opacity-20 rounded-full blur-[140px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-violet-500 opacity-20 rounded-full blur-[120px]"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <section className="relative py-24 z-10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src={MOBILE}
              alt="Mobile App Development"
              className="rounded-2xl shadow-xl border border-pink-500/20 max-w-xs md:max-w-sm lg:max-w-md object-cover hover:shadow-pink-400/40 transition-all duration-500"
              whileHover={{ scale: 1.04 }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 to-violet-400 text-transparent bg-clip-text"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
            >
              Mobile Development & Testing
            </motion.h2>

            <motion.p
              className="text-base text-gray-300 leading-relaxed mb-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="font-semibold text-white">Mobile app development</span> is the process of creating software applications that run on mobile devices such as smartphones and tablets.
            </motion.p>

            <motion.p
              className="text-sm text-gray-400 leading-relaxed mb-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Apps can be pre-installed during manufacturing or downloaded via app stores. Developers must consider screen sizes, hardware specs, and platform variations to ensure a smooth user experience.
            </motion.p>

            <motion.p
              className="italic text-sm text-gray-300 mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              A solid mobile development process involves choosing the right tech stack and tools to develop, deploy, and maintain the application.
            </motion.p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 to-violet-600 text-white rounded-xl shadow-md hover:shadow-violet-500/50 font-semibold text-base transition-all"
            >
              Enroll Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
