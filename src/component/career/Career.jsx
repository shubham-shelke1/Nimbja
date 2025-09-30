import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Send, MapPin } from "lucide-react";
import Modal from "../Modal"; // Adjust as per your project structure

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};
const jobCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Build amazing user interfaces and improve UX.",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Pune",
    type: "Full-time",
    description: "Develop robust server-side logic and APIs.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Pune",
    type: "Full-time",
    description: "Design intuitive user experiences and prototypes.",
  },
  {
    id: 4,
    title: "Python Developer",
    location: "Bangalore",
    type: "Full-time",
    description: "Develop backend applications and automation scripts.",
  },
  {
    id: 5,
    title: "Java Developer",
    location: "Hyderabad",
    type: "Full-time",
    description: "Work on scalable Java-based applications and microservices.",
  },
  {
    id: 6,
    title: "QA Tester",
    location: "Chennai",
    type: "Contract",
    description: "Perform manual and automated testing for software products.",
  },
  {
    id: 7,
    title: "AI/ML Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Design and deploy machine learning models and AI solutions.",
  },
];

export default function Career() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
    closeModal();
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-indigo-400 drop-shadow-lg">
        Current Openings
      </h1>

      <motion.div
        className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:bg-white/20 transition"
            variants={jobCardVariants}
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="w-9 h-9 text-indigo-400" />
                <h3 className="text-2xl font-semibold tracking-wide">{job.title}</h3>
              </div>
              <div className="flex items-center gap-5 text-sm text-gray-300 mb-6">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> {job.location}
                </span>
                <span className="bg-indigo-600/30 text-indigo-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                  {job.type}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{job.description}</p>
            </div>

            <motion.button
              onClick={() => openModal(job)}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 mx-auto flex items-center gap-3 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-shadow shadow-lg"
            >
              <Send className="w-5 h-5" /> Apply Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-500">
          Apply for: {selectedJob?.title}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Resume (PDF/DOC)</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
            />
          </div>
          <div>
           
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-md transition"
          >
            Submit Application
          </button>
        </form>
      </Modal>
    </div>
  );
}
