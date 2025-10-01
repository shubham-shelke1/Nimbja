// Service.jsx
import React from "react";
import { motion } from "framer-motion"; // ensure installed: npm install framer-motion

const services = [
  {
    id: 1,
    title: "Improving lives technology lighthouse ...",
    date: "July 31, 2022",
    author: "Admin",
    image: "/assets/blog1.jpg", // Put blog1.jpg in public/assets/
  },
  {
    id: 2,
    title: "Technology to Support Business",
    date: "June 29, 2022",
    author: "Admin",
    image: "/assets/blog2.jpg", // Put blog2.jpg in public/assets/
  },
  {
    id: 3,
    title: "The Top 3 Downfalls to be Aware of.",
    date: "May 13, 2021",
    author: "Admin",
    image: "/assets/blog3.jpg", // Put blog3.jpg in public/assets/
  },
];

const Service = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-indigo-600 font-semibold tracking-wide uppercase">
            Our Services
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800">
            Explore What We Offer
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-3xl overflow-hidden shadow-xl bg-[rgba(255,255,255,0.7)] backdrop-blur-lg border border-[rgba(255,255,255,0.3)] hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                  className="text-sm text-gray-500 mb-2"
                >
                  {service.date} · By {service.author}
                </motion.p>
                <motion.h3
                  whileHover={{ color: "#2563eb" }}
                  className="text-lg font-bold text-gray-800 cursor-pointer"
                >
                  {service.title}
                </motion.h3>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-block px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full shadow hover:bg-indigo-700 transition"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
