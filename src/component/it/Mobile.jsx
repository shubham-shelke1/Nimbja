import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MOBILE from "../../assets/mobile.jpg";

const fadeInUp = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0 },
};

const modalVariants = {
hidden: { opacity: 0, scale: 0.9 },
visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

export default function Mobile() {
const [openForm, setOpenForm] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
alert("✅ Application Submitted Successfully!");
setOpenForm(false);
};

return ( <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
{/* Background Glow Orbs */}
<motion.div
className="absolute -top-40 left-0 w-[18rem] h-[18rem] bg-pink-500 opacity-20 rounded-full blur-[120px]"
animate={{ y: [0, -30, 0] }}
transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
/>
<motion.div
className="absolute bottom-0 right-0 w-[16rem] h-[16rem] bg-violet-500 opacity-20 rounded-full blur-[100px]"
animate={{ y: [0, 30, 0] }}
transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
/>

  {/* Main Content */}
  <section className="relative py-20 z-10">
    <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: -60 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <motion.img
          src={MOBILE}
          alt="Mobile App Development"
          className="rounded-xl shadow-lg border border-pink-500/20 max-w-sm object-cover hover:shadow-pink-400/40 transition-all duration-500"
          whileHover={{ scale: 1.04 }}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-left"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 to-violet-400 text-transparent bg-clip-text"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          Mobile Development & Testing
        </motion.h2>

        <motion.p
          className="text-base text-gray-300 leading-relaxed mb-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="font-semibold text-white">Mobile app development</span> is the process of creating applications that run on mobile devices such as smartphones and tablets.
        </motion.p>

        <motion.p
          className="text-sm text-gray-400 leading-relaxed mb-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Apps can be pre-installed during manufacturing or downloaded via app stores. Developers must consider screen sizes, hardware specs, and platform variations.
        </motion.p>

        <motion.p
          className="italic text-sm text-gray-300 mb-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A solid mobile development process involves choosing the right tech stack to develop, deploy, and maintain the application.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenForm(true)}
          className="inline-block px-6 py-2 bg-gradient-to-r from-pink-600 to-violet-600 text-white rounded-lg shadow-md hover:shadow-violet-500/50 font-medium text-sm transition-all"
        >
          Enroll Now
        </motion.button>
      </motion.div>
    </div>
  </section>

  {/* Enrollment Modal */}
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

          <h2 className="text-xl font-bold mb-4">Enroll in Mobile Development</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Fill out the form below and our team will contact you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded text-sm" required />
            <input type="email" placeholder="Email Address" className="w-full p-2 border rounded text-sm" required />
            <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded text-sm" required />
            <select className="w-full p-2 border rounded text-sm" required>
              <option value="">Select Course Type</option>
              <option value="android">Android Development</option>
              <option value="ios">iOS Development</option>
              <option value="cross">Cross-Platform</option>
              <option value="testing">Mobile App Testing</option>
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
}
