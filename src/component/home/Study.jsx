import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Add this
import techImg from "../../assets/softimg.jpg";
import case2 from "../../assets/case2.jpg";
import case3 from "../../assets/case3.jpg";

const caseStudies = [
  {
    id: 1,
    category: "Technology",
    title: "When viruses attack so does template’s IT",
    image: techImg,
  },
  {
    id: 2,
    category: "Technology",
    title: "Subscription licensing unlocks spike in IT orders",
    image: case2,
  },
  {
    id: 3,
    category: "Technology",
    title: "Ideas for application development and scaling",
    image: case3,
  },
];

const Study = () => {
  const navigate = useNavigate(); // <-- initialize navigate
  const handleRedirect = () => {
    navigate("/blogcase"); // <-- make sure your route path is correct
  };
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
            {/* ✅ Clickable Image */}
            <div
              className="relative w-full h-56 overflow-hidden cursor-pointer"
              onClick={handleRedirect}
            >
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Study;
