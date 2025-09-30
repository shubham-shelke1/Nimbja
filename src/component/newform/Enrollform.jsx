import { useState } from "react";

export default function EnrollForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrollment Data:", formData);
    alert("Enrollment submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="w-full max-w-lg bg-gray-800 text-gray-100 shadow-2xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Enrollment Form</h1>
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label htmlFor="name" className="text-gray-300 block mb-1">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-300 block mb-1">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-gray-300 block mb-1">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="course" className="text-gray-300 block mb-1">Select Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-white p-2 rounded-md"
              required
            >
              <option value="" disabled>Choose a course</option>
              <option value="webdev">Web Development</option>
              <option value="datasci">Data Science</option>
              <option value="design">UI/UX Design</option>
              <option value="marketing">Digital Marketing</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="text-gray-300 block mb-1">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any additional info..."
              className="w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 p-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-lg"
          >
            Submit Enrollment
          </button>

        </form>
      </div>
    </div>
  );
}
