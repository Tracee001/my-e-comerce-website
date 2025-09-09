import React from "react";

const Returns = () => {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Returns & Refunds Policy
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          At <span className="font-semibold">Zevoria</span>, your satisfaction is
          our priority. If you are not completely happy with your purchase, we’re
          here to help.
        </p>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Eligibility for Returns
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Items must be returned within <strong>14 days</strong> of delivery.</li>
            <li>Products must be unused, unworn, and in their original packaging.</li>
            <li>Proof of purchase (receipt or order number) is required.</li>
            <li>
              Some products such as personal care items, perishable goods, or sale
              items are not eligible for return.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refunds</h2>
          <p className="text-gray-700 leading-relaxed">
            Once we receive your returned item, our team will inspect it and
            notify you of the status of your refund. If approved, your refund will
            be processed, and the amount will be returned to your original payment
            method within <strong>7–10 business days</strong>.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exchanges</h2>
          <p className="text-gray-700 leading-relaxed">
            We only replace items if they are defective, damaged, or the wrong
            product was delivered. If you need an exchange, please{" "}
            <a
              href="/contact"
              className="text-red-600 font-medium hover:underline"
            >
              contact our support team
            </a>{" "}
            within 7 days of receiving your order.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Shipping Your Return
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Customers are responsible for paying the shipping costs for returned
            items unless the return is due to an error on our part (e.g., wrong or
            damaged item). We recommend using a trackable shipping service to
            ensure your item reaches us safely.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about our Returns & Refunds Policy, please{" "}
            <a
              href="/contact"
              className="text-red-600 font-medium hover:underline"
            >
              reach out to our support team
            </a>
            . We’re always here to help you.
          </p>
        </div>

        {/* Start Return Button */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-red-700 transition"
          >
            Start a Return
          </a>
        </div>
      </div>
    </section>
  );
};

export default Returns;
