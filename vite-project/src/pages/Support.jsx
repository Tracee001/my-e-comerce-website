import React from "react";

const Support = () => {
  return (
    <section className="bg-gray-50 text-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Customer Support
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          We’re here to help. Find answers, get in touch, or track your issue
          with our dedicated support team.
        </p>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* FAQs */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">FAQs</h2>
            <p className="text-gray-600 mb-4">
              Find quick answers to the most common questions about orders,
              payments, and shipping.
            </p>
            <a
              href="/faq"
              className="text-red-600 font-medium hover:underline"
            >
              Visit FAQs →
            </a>
          </div>

          {/* Returns & Shipping */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Returns & Shipping
            </h2>
            <p className="text-gray-600 mb-4">
              Learn more about our return process, shipping timelines, and
              policies.
            </p>
            <a
              href="/returns"
              className="text-red-600 font-medium hover:underline block"
            >
              Returns Policy →
            </a>
            <a
              href="/shipping"
              className="text-red-600 font-medium hover:underline block"
            >
              Shipping Info →
            </a>
          </div>

          {/* Contact Support */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Support
            </h2>
            <p className="text-gray-600 mb-4">
              Need more help? Reach out to our friendly support team via email
              or contact form.
            </p>
            <a
              href="/contact"
              className="text-red-600 font-medium hover:underline"
            >
              Contact Us →
            </a>
          </div>
        </div>

        {/* Track Support Request */}
        <div className="bg-white shadow-md rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Track Your Support Request
          </h2>
          <p className="text-gray-600 mb-6">
            Enter your support ticket number to check the status of your
            request.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your ticket number"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Track
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;
