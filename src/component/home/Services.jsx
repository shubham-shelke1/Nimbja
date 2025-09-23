// Services.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

// ✅ Import only RPA image
import rpa from "../../assets/RPA.jpg";
import Maintaince from "../../assets/maintaince.jpg";
import data from "../../assets/Datascience.jpg";
import ui from "../../assets/ui.jpg";
import cloud from "../../assets/cloud.jpg";
import cyber from "../../assets/cyber.jpg";






const services = [
  { id: "01", title: "RPA Automation", image: rpa },
  { id: "02", title: "Maintenance & Support",image:Maintaince },
  { id: "03", title: "Data Science", image:data },
  { id: "04", title: "UI/UX Design", image:ui },   
  { id: "05", title: "Cloud Services", image:cloud },
  { id: "06", title: "Cyber Security", image:cyber },
];

const Services = () => {
  return (
<section className="py-16 bg-gradient-to-r from-black via-[#375499] to-[#1b1b1c]">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-white font-semibold uppercase tracking-wide text-2xl">
          Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Other IT services provided
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {services.map((service) => (
          <div
            key={service.id}
  className="bg-white/90 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-blue-500/40 transition-all duration-300 p-4 text-center"
          >
            {/* Number */}
            <p className="text-blue-600 font-bold text-lg mb-4 text-left">
              {service.id}.
            </p>

            {/* Image */}
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500/30 shadow-md mb-6 bg-gray-800 flex items-center justify-center transform transition-transform duration-500 hover:rotate-6 hover:scale-110">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              {service.title}
            </h3>

            {/* Arrow Button */}
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition mx-auto shadow-md">
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
