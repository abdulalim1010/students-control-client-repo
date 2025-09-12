import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`📩 Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">📞 Contact Us</h1>
      <p className="text-center mb-10 text-gray-300">
        Have questions or feedback? Reach out to us anytime.
      </p>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow text-center">
          <h2 className="font-semibold text-lg mb-2">📧 Email</h2>
          <p className="text-gray-300">studentstoolkit@gmail.com</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow text-center">
          <h2 className="font-semibold text-lg mb-2">📱 Phone</h2>
          <p className="text-gray-300">+880 1234-567890</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow text-center">
          <h2 className="font-semibold text-lg mb-2">📍 Address</h2>
          <p className="text-gray-300">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
