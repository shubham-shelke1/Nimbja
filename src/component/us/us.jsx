// Us.jsx
import React from "react";
import { motion } from "framer-motion";
import { Phone, FileText, ClipboardList } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Us() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* 🔵 Animated Background Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500 opacity-25 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-teal-500 opacity-25 blur-3xl rounded-full animate-pulse"></div>

      <section className="py-20 relative z-10">
        {/* 🔹 Header */}
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            variants={fadeInUp}
          >
            Check our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              US Healthcare Services
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Medical billing and coding are essential administrative processes in
            the healthcare industry, ensuring financial and administrative
            aspects of patient care are properly managed. Here’s an overview of
            our services:
          </motion.p>
        </motion.div>

        {/* 🔹 Services */}
        <motion.div
          className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-10 px-6 lg:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* AR Caller */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-md border border-blue-800 shadow-lg rounded-2xl p-8 hover:shadow-blue-900/50 transition-all transform hover:-translate-y-2 hover:scale-[1.02]"
            variants={cardVariants}
          >
            <div className="flex items-center gap-4 mb-4">
              <Phone className="w-12 h-12 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">AR Caller</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              AR calling, also known as{" "}
              <span className="font-semibold text-white">
                Accounts Receivable calling
              </span>
              , involves contacting insurance companies, patients, or
              responsible parties to resolve unpaid or denied claims. This
              process ensures timely payment, optimized revenue, and reduced
              financial losses.
            </p>
          </motion.div>

          {/* Medical Billing */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-md border border-teal-800 shadow-lg rounded-2xl p-8 hover:shadow-teal-900/50 transition-all transform hover:-translate-y-2 hover:scale-[1.02]"
            variants={cardVariants}
          >
            <div className="flex items-center gap-4 mb-4">
              <FileText className="w-12 h-12 text-teal-400" />
              <h3 className="text-2xl font-semibold text-white">
                Medical Billing
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Medical billing is the process of submitting and following up on
              insurance claims to receive payment for healthcare services. Steps
              include:
            </p>
            <ul className="list-decimal list-inside text-gray-400 space-y-1">
              <li>Patient Registration</li>
              <li>Claim Generation</li>
              <li>Insurance Verification</li>
              <li>Claim Adjudication</li>
              <li>Billing to Patient</li>
              <li>Payment Posting</li>
              <li>Follow-Up</li>
            </ul>
          </motion.div>

          {/* Medical Coding */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-md border border-purple-800 shadow-lg rounded-2xl p-8 hover:shadow-purple-900/50 transition-all transform hover:-translate-y-2 hover:scale-[1.02]"
            variants={cardVariants}
          >
            <div className="flex items-center gap-4 mb-4">
              <ClipboardList className="w-12 h-12 text-purple-400" />
              <h3 className="text-2xl font-semibold text-white">
                Medical Coding
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Medical coding translates medical procedures, diagnoses, and
              services into standardized codes, ensuring accuracy and uniformity
              in documentation and billing.
              <br />
              The two main coding systems used are:
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-400 space-y-1">
              <li>ICD (International Classification of Diseases)</li>
              <li>CPT (Current Procedural Terminology)</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
