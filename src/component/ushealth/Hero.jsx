import React from "react";
import healthcareImg from "../../assets/ushealthcare.jpg"; // ✅ correct path to your bg image

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${healthcareImg})`,
          filter: "blur(6px)",       // subtle blur for professional look
          transform: "scale(1.1)",   // prevents visible edges after blur
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          US Healthcare Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Discover how <span className="font-bold underline">Nimbja Security Solutions Pvt Ltd</span> 
          delivers innovative healthcare IT services to improve patient care, streamline operations, 
          and empower providers with cutting-edge technology solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
