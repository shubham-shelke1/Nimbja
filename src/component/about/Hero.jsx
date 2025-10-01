import React from "react";
import aboutImg from "../../assets/about.jpg"; // ✅ correct path to your bg image

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutImg})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 b bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
          Learn more about{" "}
          <span className="font-bold underline text-2xl">
            Nimbja Security Solutions Pvt Ltd
          </span>
          , our vision, mission, and the values that drive our innovation in IT
          services.
        </p>
      </div>
    </section>
  );
};

export default Hero;
