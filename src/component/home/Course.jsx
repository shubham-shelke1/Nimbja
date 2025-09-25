// Course.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ use Link for routing

const courses = [
  {
    id: 1,
    title: "Software Applications Development",
    description:
      "Sequence of tasks that are involved to design, make, install, use, and support computer software.",
    link: "/software", // ✅ updated route
    icon: "https://nimbjasolution.com/images/application-development-icon.png",
  },
  {
    id: 2,
    title: "Software Testing (Manual & Automation)",
    description:
      "The process of verifying if a software or application is bug-free, meets technical and user requirements effectively.",
    link: "/software", // ✅ pointing to Software.jsx
    icon: "https://nimbjasolution.com/images/software-testing-icon.png",
  },
  {
    id: 3,
    title: "Mobile Development & Testing",
    description:
      "Steps taken to develop and test mobile apps functionality, usability, and reliability according to the design.",
    link: "/software", // ✅ pointing to Software.jsx
    icon: "https://nimbjasolution.com/images/mobile-application-icon.png",
  },
];

const Course = () => {
  return (
    <section className="relative py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div key={course.id} className="perspective group">
              <motion.div
                className="relative w-full h-80 rounded-2xl transform-style-3d transition-transform duration-700 group-hover:rotate-y-180 shadow-lg"
              >
                {/* Front Side */}
                <div className="absolute inset-0 bg-gray-800 rounded-2xl flex flex-col items-center justify-center p-6 backface-hidden">
                  <div className="p-4 bg-blue-500/20 rounded-full mb-4">
                    <img
                      src={course.icon}
                      alt={course.title}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm text-center">
                    {course.description.substring(0, 60)}...
                  </p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-green-400 rounded-2xl flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden text-white">
                  <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                  <p className="text-sm mb-6 text-center">
                    {course.description}
                  </p>
                  
                  {/* ✅ Link instead of <a> */}
                  <Link
                    to={course.link}
                    className="px-4 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition"
                  >
                    Discover More →
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Course;
