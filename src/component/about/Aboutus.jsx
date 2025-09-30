// Services.jsx
import React from "react";
import { motion } from "framer-motion";

import RPAImg from "../../assets/rpalg.jpg";
import support from "../../assets/support.jpg";
import ds from "../../assets/Ds.jpg";
import cl from "../../assets/cloudd.jpg";
import aws from "../../assets/Aws.jpg";
import sale from "../../assets/sales.jpg";

const servicesData = [
  {
    id: 1,
    title: "Robotic Process Automation (RPA)",
    subtitle: "RPA Automation",
    description:
      "RPA is a software technology that makes it easy to build, deploy, and manage software robots that emulate human actions interacting with digital systems and software...",
    button: "Enroll Now",
    image: RPAImg,
  },
  {
    id: 2,
    title: "Maintenance & Support",
    subtitle: "Maintenance",
    description:
      "While software support is defined as fixing broken software (or 'bugs') with reactive development, software maintenance is proactive development in adding features...",
    button: "Enroll Now",
    image: support,
  },
  {
    id: 3,
    title: "Data Science",
    subtitle: "Data Science",
    description:
      "Data science deals with vast volumes of data using modern tools and techniques to find unseen patterns and insights...",
    button: "Enroll Now",
    image: ds,
  },
  {
    id: 4,
    title: "Cloud Computing",
    subtitle: "Cloud Computing",
    description:
      "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power...",
    button: "Enroll Now",
    image: cl,
  },
  {
    id: 5,
    title: "AWS Services",
    subtitle: "AWS",
    description:
      "Amazon Web Services provides on-demand cloud computing platforms and APIs to individuals, companies, and governments...",
    button: "Enroll Now",
    image: aws,
  },
  {
    id: 6,
    title: "Salesforce Services",
    subtitle: "Salesforce",
    description:
      "Salesforce Service Cloud is a CRM platform designed for customer service and support...",
    button: "Enroll Now",
    image: sale,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 text-white">
      {/* 🔵 Soft Background Glow */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-indigo-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
        {/* 🏷️ Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-indigo-400 font-semibold uppercase tracking-wide">
            Case Study
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Other IT Services Provided
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Discover innovative solutions designed to meet your business needs
            with cutting-edge technology and expert guidance.
          </p>
        </motion.div>

        {/* 🧰 Services */}
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* 📸 Image */}
            <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg">
              <motion.img
                src={service.image}
                alt={service.title}
                loading="lazy" // ✅ Lazy load image
                className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                whileHover={{ scale: 1.05 }}
              />
            </div>

            {/* 📄 Content */}
            <div className="lg:w-1/2 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-justify">
                {service.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition"
              >
                {service.button}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
