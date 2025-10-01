import React from "react";
import contactImg from "../../assets/contact.jpg"; // ✅ correct path to your bg image

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactImg})`,
          filter: "blur(6px)",       // subtle blur
          transform: "scale(1.1)",   // prevents edges from showing after blur
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Get in touch with <span className="font-bold underline">Nimbja Security Solutions Pvt Ltd</span> 
          to discuss your IT needs, ask questions, or explore partnership opportunities. 
          We’re here to help you with innovative solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
