import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-semibold uppercase tracking-wider">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            For any enquiry related to business solutions, software services, or training queries, please reach out to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form className="bg-gray-800 p-8 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
             <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
              required
            />
            <button className="w-full py-2 px-4 bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition font-semibold">
              Send Message
            </button>
          </form>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            {/* Main Contact Info */}
            <div className="bg-gray-800 p-6 rounded-xl shadow border border-gray-700 space-y-2">
              <p>Phone: <a href="tel:02027212597" className="text-green-400 hover:underline">020-272 12 597</a></p>
              <p>Email: <a href="mailto:hr@nimbjasolution.com" className="text-blue-400 hover:underline">hr@nimbjasolution.com</a></p>
              <h3 className="text-xl font-bold mt-4 mb-2">Address</h3>
              <p className="text-gray-300">
                Office No. 4-A, Second Floor, Ganesham Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune - 411027
              </p>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-xl shadow border border-gray-700">
              <iframe
                title="Nimbja Security Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.171509638792!2d73.80308081077234!3d18.59763368243795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b993d95f6153%3A0x4e4ff8d30ba97f68!2sNimbja%20Security%20Solutions%20Pvt.%20Ltd.!5e1!3m2!1sen!2sus!4v1758697074073!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
