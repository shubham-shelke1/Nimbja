import React, { useState } from "react";
import bground from "../../assets/bground.jpg"; // ✅ Import background image
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData); // ✅ Data will log in console
    alert("Your message has been sent! (Check console)");
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${bground})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Contact Info */}
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500 text-white text-2xl font-bold">
              📞
            </div>
            <div>
               <FaPhoneAlt />
            <a
              href="tel:02027212597"
              className="hover:underline text-blue-400"
            >
              020-272 12 597
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <MdEmail />
            <a
              href="mailto:hr@nimbjasolution.com"
              className="hover:underline text-blue-400"
            >
              hr@nimbjasolution.com
            </a>
            </div>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed">
            For any enquiry related to business solutions, software services,
            and training related queries, please reach out to us. We’re here to
            help your business grow.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-900/90 p-8 rounded-2xl shadow-xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-2">Get in touch</h2>
          <p className="text-gray-400 mb-6">
            We’ll help your business with the right solutions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold hover:from-indigo-600 hover:to-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
