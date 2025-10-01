import React from 'react'
import React from "react";
import { motion } from "framer-motion";
import akshayImg from "../../assets/akshay.jpg"; 
import kalpanaImg from "../../assets/kalpana.jpg"; 

const testimonials = [
  {
    id: 1,
    name: "Akshay W.",
    role: "Service and Delivery Head",
    image: akshayImg,
    highlight:
      "Before Nimbja it felt like sitting in a wind tunnel with projects, emails, and questions flying at you.",
    content:
      "Of course, not having any idea what may be coming next. Every team member was working alone; during catch up meetings that became very clear.",
  },
  {
    id: 2,
    name: "Kalpana Khade",
    role: "CEO and HRD Services",
    image: kalpanaImg,
    highlight:
      "It was just task after task in Jira. Every week we completed a ton of tasks, but in the end, the project still felt incomplete.",
    content:
      "Trying to figure out what was missing by scrolling an infinite chat room was a fun way to reinvent the treasure hunt, but not a so nice way to manage a project.",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Testimonial = () => {
  return (

    <section className="py-20 bg-gray-500">
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-blue-600  text-2xl font-semibold uppercase tracking-wide"
        >
          Testimonial
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900"
        >
          What says our honorable customers!
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-6">
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition duration-300"
          >
            {/* Profile */}
            <div className="flex items-center mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              />
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Highlighted Quote */}
            <p className="text-gray-900 font-medium mb-3 leading-relaxed">
              {item.highlight}
            </p>

            {/* Supporting Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial