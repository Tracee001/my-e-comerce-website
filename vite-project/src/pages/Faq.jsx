import React, { useState } from "react";

const faqData = {
  General: [
    {
      question: "What is Zevoria?",
      answer:
        "Zevoria is an innovative e-commerce platform designed to make online shopping effortless, stylish, and reliable. We focus on delivering quality products at affordable prices."
    },
    {
      question: "How do I create an account?",
      answer:
        "Simply click on the 'Login/Register' link at the top of the page, fill in your details, and you’ll have your account ready in minutes."
    }
  ],
  Payments: [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept debit/credit cards, bank transfers, and secure online payment options for your convenience."
    }
  ],
  Shipping: [
    {
      question: "How long does delivery take?",
      answer:
        "Delivery typically takes 3–7 business days depending on your location. You can track your order from your account dashboard."
    }
  ],
  Returns: [
    {
      question: "What is your return policy?",
      answer:
        "If you’re not satisfied with a product, you can return it within 14 days of purchase. Please ensure the product is unused and in its original packaging."
    }
  ]
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("General");
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter by category + search
  const filteredFaqs = faqData[activeCategory].filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Have questions? We’ve got answers. If you don’t see your question here,
          feel free to{" "}
          <a
            href="/contact"
            className="text-red-600 font-medium hover:underline"
          >
            contact us
          </a>
          .
        </p>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(faqData).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null); // reset open
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900 hover:bg-gray-50 transition"
                >
                  {faq.question}
                  <span className="ml-2 text-red-600 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-5 text-gray-600 transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No questions found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
