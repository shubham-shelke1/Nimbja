// Creative.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import creativeBg from "../../assets/creative-bg.jpg";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Creative = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${creativeBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 py-28 text-center text-white"
      >
        <motion.p
          variants={fadeUp}
          className="text-xl sm:text-2xl italic mb-6 text-gray-200 tracking-wide"
        >
          Ready to build the next big thing with our
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 leading-tight"
        >
          Creative and Highly Tailored <br />
          <span className="text-blue-400">Solutions</span> for Your Business
        </motion.h2>

        {/* React Router Link */}
        <motion.div variants={fadeUp}>
          <Link
            to="/contact" // ✅ Navigate to Contact.jsx page
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition"
            whileHover={{ scale: 1.08, boxShadow: "0px 8px 24px rgba(0,0,0,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Now →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Creative;
