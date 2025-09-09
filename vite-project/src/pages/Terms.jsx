import React from "react";

const Terms = () => {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Welcome to <span className="font-semibold">Zevoria</span>. By
          accessing and using our website, you agree to the following terms and
          conditions.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Use of Our Website
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use our website only for lawful purposes and in a way
            that does not infringe upon the rights of others, restrict or hinder
            anyone else’s use of the site, or cause damage to the website.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Account Responsibility
          </h2>
          <p className="text-gray-700 leading-relaxed">
            When you create an account with us, you are responsible for
            maintaining the confidentiality of your login details and for all
            activities that occur under your account. Please notify us
            immediately of any unauthorized use.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Orders & Payments
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>All orders are subject to availability and confirmation.</li>
            <li>
              Prices displayed on our website are final and inclusive of
              applicable taxes unless stated otherwise.
            </li>
            <li>
              We reserve the right to cancel any order if payment is not
              successfully processed.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Shipping & Delivery
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Delivery times may vary depending on your location. Please refer to
            our{" "}
            <a
              href="/shipping"
              className="text-red-600 font-medium hover:underline"
            >
              Shipping Policy
            </a>{" "}
            for more details.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Returns & Refunds
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you are not satisfied with your purchase, you may return the
            product under our{" "}
            <a
              href="/returns"
              className="text-red-600 font-medium hover:underline"
            >
              Returns Policy
            </a>
            . Refunds will be processed in accordance with our guidelines.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Zevoria will not be held liable for any indirect, incidental, or
            consequential damages resulting from the use of our website or
            products purchased through it.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these Terms & Conditions from time to time. Please
            check this page regularly for any changes.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms & Conditions, please{" "}
            <a
              href="/contact"
              className="text-red-600 font-medium hover:underline"
            >
              contact our support team
            </a>
            .
          </p>
        </div>

        {/* Last Updated */}
        <p className="text-gray-500 text-sm mt-8 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default Terms;
