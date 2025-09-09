import React from "react";

const Shipping = () => {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Shipping Information
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          At <span className="font-semibold">Zevoria</span>, we make sure your
          orders are delivered quickly, safely, and efficiently.
        </p>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Processing Time
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Orders are processed within <strong>1–2 business days</strong>. You
            will receive a confirmation email with your tracking details once
            your order has been shipped.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Domestic Shipping
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Standard delivery: <strong>3–5 business days</strong></li>
            <li>Express delivery: <strong>1–2 business days</strong></li>
            <li>Free shipping on orders above <strong>₦50,000</strong></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            International Shipping
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We currently ship to selected international destinations. Delivery
            times may vary depending on customs and location. Please allow{" "}
            <strong>7–14 business days</strong> for international delivery.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Tracking Your Order
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Once your order is shipped, you will receive an email with a{" "}
            <strong>tracking number</strong>. You can use it to monitor the
            progress of your delivery in real time.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Shipping Costs
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Shipping fees are calculated at checkout based on your location,
            selected shipping method, and order size.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Have questions about shipping? Please{" "}
            <a
              href="/contact"
              className="text-red-600 font-medium hover:underline"
            >
              contact our support team
            </a>
            . We’re always ready to help you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
