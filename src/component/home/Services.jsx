import React from "react";
import { Link } from "react-router-dom"; 
import rpa from "../../assets/RPA.jpg";
import Maintaince from "../../assets/maintaince.jpg";
import data from "../../assets/data.jpg";
import ui from "../../assets/ui.jpg";
import cloud from "../../assets/cloud.jpg";
import cyber from "../../assets/cyber.jpg"; 

const services = [
  { title: "RPA Automation", image: rpa },
  { title: "Maintenance & Support", image: Maintaince },
  { title: "Data Science", image: data },
  { title: "UI/UX Design", image: ui },
  { title: "Cloud Services", image: cloud },
  { title: "Cyber Security", image: cyber },
];

const Services = () => {
  return (

    <section className="py-14 bg-gradient-to-r from-black via-[#375499] to-[#1b1b1c]">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-white font-semibold uppercase tracking-wide text-xl">
          Services
        </p>
        <h2 className="text-3xl font-bold text-white">
          Other IT Services Provided
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <Link
            key={index}
            to="/aboutus" // ✅ link to About Us page
            className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"
          >
            {/* Image (Full Width) */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empower your business with our cutting-edge {service.title} solutions tailored for modern enterprises.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services