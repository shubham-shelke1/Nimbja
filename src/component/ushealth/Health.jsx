import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 30px rgba(59, 130, 246, 0.4)",
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#2563eb",
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
    transition: { duration: 0.3 },
  },
};

const Health = () => {
  const services = [
    {
      title: "AR Caller",
      description:
        "AR (Accounts Receivable) calling is a crucial part of the healthcare revenue cycle. It involves contacting insurance companies, patients, or responsible parties to resolve unpaid or denied claims, ensuring timely payment and optimized revenue.",
      points: [],
    },
    {
      title: "Medical Billing",
      description:
        "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for healthcare services provided. It ensures providers are reimbursed correctly and on time.",
      points: [
        "Patient Registration",
        "Claim Generation",
        "Insurance Verification",
        "Claim Adjudication",
        "Billing to Patient",
        "Payment Posting",
        "Follow-Up",
      ],
    },
    {
      title: "Medical Coding",
      description:
        "Medical coding involves translating medical diagnoses, procedures, and services into standardized codes for billing and data purposes. It ensures accuracy, compliance, and streamlined claim processing.",
      points: [
        "ICD (International Classification of Diseases)",
        "CPT (Current Procedural Terminology)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="text-5xl font-bold text-blue-400 mb-16"
        >
          Healthcare Courses
        </motion.h1>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-800 hover:border-blue-500 transition-all flex flex-col justify-between"
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              custom={index * 0.2}
              whileHover="hover"
            >
              <div>
                <h2 className="text-3xl font-semibold text-blue-400 mb-4 text-left">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 text-left">
                  {service.description}
                </p>
                {service.points.length > 0 && (
                  <ul className="text-gray-300 text-left list-disc list-inside space-y-2 mb-6">
                    {service.points.map((point, i) => (
                      <li key={i} className="hover:text-blue-400 transition">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 w-full"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Health;
