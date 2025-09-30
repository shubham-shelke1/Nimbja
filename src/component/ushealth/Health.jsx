import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#2563eb",
    transition: { duration: 0.3 },
  },
};

const Health = () => {
  const services = [
    {
      title: "AR Caller",
      description:
        "AR (Accounts Receivable) calling involves contacting insurance companies, patients, or responsible parties to resolve unpaid or denied claims, ensuring timely payment.",
      points: [
        "Resolve unpaid or denied claims",
        "Communicate with insurance providers",
        "Ensure timely payments",
      ],
    },
    {
      title: "Medical Billing",
      description:
        "Medical billing involves submitting claims to health insurance companies to receive payment for healthcare services provided, ensuring timely reimbursement.",
      points: [
        "Patient Registration",
        "Claim Generation",
        "Insurance Verification",
        "Payment Posting",
      ],
    },
    {
      title: "Medical Coding",
      description:
        "Medical coding translates medical diagnoses, procedures, and services into standardized codes for billing and data purposes.",
      points: [
        "ICD & CPT Coding",
        "Accurate Claim Submission",
        "Healthcare Compliance",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12"
        >
          Healthcare Courses
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow border border-gray-200"
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              custom={index * 0.2}
              whileHover="hover"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-base mb-4">{service.description}</p>
                {service.points.length > 0 && (
                  <ul className="text-gray-600 list-disc list-inside space-y-1 mb-4">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="mt-4 px-6 py-2 font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full"
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Health;
