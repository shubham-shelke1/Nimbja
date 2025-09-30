import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [isOpen, setIsOpen] = useState(true); // open automatically

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",     // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",    // replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY"      // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Application submitted successfully!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            position: "",
            message: "",
          });
          setIsOpen(false);
        },
        () => {
          alert("Failed to send application. Please try again.");
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-4xl bg-gray-900 rounded-3xl p-10 shadow-2xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-white text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Apply Now
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-6 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-6 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-6 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg"
                required
              />

              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-6 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg"
                required
              >
                <option value="" disabled>
                  Select a Position
                </option>
                <option value="Software Developer (React/Node.js)">
                  Software Developer (React/Node.js)
                </option>
                <option value="QA Engineer – Manual & Automation">
                  QA Engineer – Manual & Automation
                </option>
                <option value="Cloud Engineer – AWS/Azure">
                  Cloud Engineer – AWS/Azure
                </option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message / Cover Letter"
                className="w-full px-6 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-lg resize-none"
                rows="5"
              />

              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition text-lg font-semibold"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
