import React from "react";
import careerImg from "../../assets/career.jpg"; // ✅ correct path to your bg image

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${careerImg})`,
          filter: "blur(6px)", // 🔥 subtle blur effect
          transform: "scale(1.1)", // avoids visible edges after blur
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Join Our Team
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          At <span className="font-bold underline">Nimbja Security Solutions Pvt Ltd</span>, 
          we believe in building a future powered by innovation. Explore career 
          opportunities and become part of a passionate team driving technology forward.
        </p>
      </div>
    </section>
  );
};

export default Hero;
