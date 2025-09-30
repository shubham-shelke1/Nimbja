// Career.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Send, MapPin, Mail } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const jobCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const jobs = [
  {
    id: 1,
    title: "Software Developer (React/Node.js)",
    location: "Pune, India",
    type: "Full-Time",
    description:
      "We are seeking a passionate Software Developer with expertise in React.js and Node.js. You'll work on building scalable web applications, collaborate with cross-functional teams, and implement best coding practices.",
  },
  {
    id: 2,
    title: "QA Engineer – Manual & Automation",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description:
      "Looking for a skilled QA Engineer to design and implement test plans, identify bugs, and ensure high product quality. Hands-on experience with Selenium, Cypress, or Playwright is a plus.",
  },
  {
    id: 3,
    title: "Cloud Engineer – AWS/Azure",
    location: "Bangalore, India",
    type: "Full-Time",
    description:
      "We are hiring a Cloud Engineer with hands-on AWS or Azure expertise. You will be responsible for cloud architecture, migrations, and optimizing cloud infrastructure for performance and security.",
  },
];

export default function Career() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* 🔵 Background Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500 opacity-25 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500 opacity-25 blur-3xl rounded-full animate-pulse"></div>

      <section className="py-20 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-6xl mx-auto px-6 lg:px-12 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            variants={fadeInUp}
          >
            Build Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Career With Us
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            At <span className="text-indigo-400 font-semibold">Nimbja Security Solutions</span>, we
            are looking for passionate, skilled, and ambitious people to join
            our growing team. Explore open roles and shape the future with us.
          </motion.p>
        </motion.div>

        {/* Job Cards */}
        <motion.div
          className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-[1.02]"
              variants={jobCardVariants}
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-indigo-400" />
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {job.location}
                </span>
                <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs">
                  {job.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {job.description}
              </p>

              {/* Apply Button */}
              <motion.a
                href="mailto:hr@nimbjasolution.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
              >
                <Send className="w-4 h-4" /> Apply Now
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
          
        {/* Apply Form */}
        <motion.div
          className="max-w-3xl mx-auto mt-24 bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl p-10 shadow-xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Didn’t find your role? Apply directly!
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Upload Resume</label>
              <input
                type="file"
                className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
            >
              <Mail className="w-5 h-5" /> Submit Application
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

