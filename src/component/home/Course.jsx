// Course.jsx
import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Software Applications Development",
    description:
      "Sequence of tasks that are involved to design, make, install, use, and support computer software.",
    link: "#",
    icon: "https://nimbjasolution.com/images/application-development-icon.png",
  },
  {
    id: 2,
    title: "Software Testing (Manual & Automation)",
    description:
      "The process of verifying if a software or application is bug-free, meets the technical requirements, and the user requirements effectively and efficiently.",
    link: "#",
    icon: "https://nimbjasolution.com/images/software-testing-icon.png",
  },
  {
    id: 3,
    title: "Mobile Development & Testing",
    description:
      "Steps taken to develop and test mobile apps functionality, usability and reliability according to the design.",
    link: "#",
    icon: "https://nimbjasolution.com/images/mobile-application-icon.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Course = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-6 px-4 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold text-center text-white mb-14"
        >
          Our Core Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gray-800 hover:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-500 p-10 text-center"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="flex justify-center mb-6"
              >
                <img
                  src={course.icon}
                  alt={course.title}
                  className="h-20 w-20 object-contain"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                {course.title}
              </h3>

              {/* Description */}
              <p className="mb-8 leading-relaxed text-gray-400">
                {course.description}
              </p>

              {/* Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={course.link}
                className="inline-block px-6 py-2 rounded-full font-semibold border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Discover More →
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Company Info Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-blue-900 to-grey-700 to rounded-2xl shadow-lg p-9 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6 py-9">
            We are a leading one-stop IT service company
          </h3>
          <p className="max-w-3xl mx-auto text-gray-200 mb-8">
            Housing all levels of professionals with varied years of experience
            and knowledge in every sector. Our presence can be seen in India,
            USA, Europe, and across the world. We are globally known for our
            work culture, ethics, quality of service, and efficiency. We strive
            to pay attention to every detail a client requires.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-8 mt-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl font-extrabold text-yellow-400">
                11+
              </span>
              <span className="text-gray-300 mt-2">Years of Experience</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl font-extrabold text-green-400">
                Global
              </span>
              <span className="text-gray-300 mt-2">Presence Worldwide</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl font-extrabold text-blue-400">
                100%
              </span>
              <span className="text-gray-300 mt-2">Client Satisfaction</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Course;
