import React from "react";
import TechImg from "../../assets/Tech.jpg";
import Case2 from "../../assets/case2.jpg";
import Case3 from "../../assets/Case3.jpg";
import { FaArrowRight } from "react-icons/fa"; // Using FontAwesome arrow icon

const caseStudies = [
  {
    id: 1,
    category: "Technology",
    title: "When viruses attack so does template’s IT",
    image: TechImg,
  },
  {
    id: 2,
    category: "Technology",
    title: "Subscription licensing unlocks spike in IT orders",
    image: Case2,
  },
  {
    id: 3,
    category: "Technology",
    title: "Ideas for application development and scaling",
    image: Case3,
  },
];

const CaseStudy = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-blue-400 font-semibold uppercase tracking-wide">
          Case Study
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
          Eliminate the IT challenges your business is facing
        </h2>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {caseStudies.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden group flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
                {item.title}
              </h3>
              

              {/* Arrow Button */}
              <div className="flex justify-start">
                <button className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
