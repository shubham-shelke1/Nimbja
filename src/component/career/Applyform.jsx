import React, { useState } from "react";

export default function Applyform() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Job Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            rows="2"
          />
        </div>

        {/* Apply Position Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Apply Position</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          >
            <option value="">-- Select Position --</option>
            <option value="Software Developer (React/Node.js)">Software Developer (React/Node.js)</option>
            <option value="QA Engineer – Manual & Automation">QA Engineer – Manual & Automation</option>
            <option value="Cloud Engineer – AWS/Azure">Cloud Engineer – AWS/Azure</option>
          </select>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full"
            required
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block mb-1 font-medium">Cover Letter</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
