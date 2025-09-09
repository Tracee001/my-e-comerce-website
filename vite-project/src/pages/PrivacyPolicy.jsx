import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          At <span className="font-semibold">Zevoria</span>, we value your
          privacy and are committed to protecting your personal information.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may collect personal details such as your name, email address,
            phone number, shipping/billing address, and payment information when
            you make purchases, create an account, or contact us.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>To process and deliver your orders.</li>
            <li>To personalize your shopping experience.</li>
            <li>To communicate order updates, offers, and promotions.</li>
            <li>To improve our website, products, and services.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Protecting Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement strict security measures such as encryption and secure
            servers to protect your personal information from unauthorized
            access, misuse, or disclosure.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or trade your personal data. Information may only be
            shared with trusted third parties who assist us in operating our
            website, processing payments, or delivering products, and only under
            strict confidentiality agreements.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Cookies & Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our site uses cookies to enhance your experience, analyze site
            traffic, and personalize content. You may disable cookies in your
            browser, but some site features may not function properly.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or request the deletion of
            your personal data at any time. Contact us at{" "}
            <a
              href="/contact"
              className="text-red-600 font-medium hover:underline"
            >
              our support page
            </a>{" "}
            for assistance.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with the updated date.
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

export default PrivacyPolicy;
