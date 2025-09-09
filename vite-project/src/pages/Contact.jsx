import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
          alt="Contact background"
          className="w-full h-72 object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 text-lg md:text-xl italic">
            We’d love to hear from you — let’s connect!
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have questions, feedback, or partnership inquiries? Reach out to us
            — our team is ready to assist you.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-red-600" />
              <span>support@zevoria.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-red-600" />
              <span>+234 800 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-600" />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="w-full h-96 mt-12">
        <iframe
          title="Zevoria Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.563358553356!2d3.379205514770762!3d6.465422295327218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1c12a7d5b7%3A0x51e46eae57df4f15!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1694001234567!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
