import React from "react";
import blogImg from "../../assets/virusattack.jpg"; // ✅ replace with your actual image path

const Blogcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      {/* Top Heading */}
      <div className="text-center mb-16">
        <p className="text-blue-600 font-semibold uppercase tracking-wide text-lg">
          Case Studies
        </p>
        <h1 className="text-4xl font-bold text-gray-900">
          Top Case Studies from our Resource Library
        </h1>
      </div>

      {/* Blog Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="w-2xl h-70">
          <img
            src={blogImg}
            alt="When viruses attack so does TeamLogic IT"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Technology
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            When viruses attack, so does TeamLogic IT
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            In today’s rapidly evolving digital landscape, cyber threats are becoming
            more sophisticated and dangerous. When a malicious virus outbreak threatened
            to disrupt operations, TeamLogic IT responded swiftly with advanced cybersecurity
            protocols and continuous system monitoring.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            This case study highlights how proactive threat detection, regular patch
            management, and employee cybersecurity training can dramatically reduce the
            risk of breaches. The client’s systems were restored without data loss,
            ensuring business continuity and reinforcing trust.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            With a focus on innovation and resilience, TeamLogic IT continues to protect
            businesses from evolving cyber threats, empowering them to operate securely
            and confidently in the digital era.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogcase;
