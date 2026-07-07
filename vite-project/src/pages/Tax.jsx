import React from "react";

const Tax = () => {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Nigeria Taxation Policy
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          This page outlines the taxation policies applicable to transactions on{" "}
          <span className="font-semibold">Zevoria</span> in accordance with Nigerian tax laws.
        </p>

        {/* Section 1: Value Added Tax (VAT) */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Value Added Tax (VAT)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Value Added Tax (VAT) is a consumption tax placed on a product whenever value is added at each stage of the supply chain, from production to the point of sale.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Standard VAT Rate:</strong> 7.5% on most goods and services</li>
            <li><strong>Zero-Rated Goods:</strong> Essential items such as basic food items, medical supplies, and educational materials may be zero-rated</li>
            <li><strong>Exempt Goods:</strong> Certain items like agricultural products, medical services, and educational services are exempt from VAT</li>
            <li><strong>VAT Registration:</strong> Businesses with an annual turnover of ₦25,000,000 or more are required to register for VAT</li>
          </ul>
        </div>

        {/* Section 2: Withholding Tax */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Withholding Tax
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Withholding tax is an advance payment of income tax that is deducted at source when making certain payments.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Standard Withholding Tax Rate:</strong> 5% - 10% depending on the type of payment</li>
            <li><strong>Dividends:</strong> 10% withholding tax on dividends paid to shareholders</li>
            <li><strong>Royalties:</strong> 10% withholding tax on royalty payments</li>
            <li><strong>Interest:</strong> 10% withholding tax on interest payments</li>
            <li><strong>Consultancy/Professional Fees:</strong> 5% withholding tax</li>
            <li><strong>Rent:</strong> 10% withholding tax on rental payments</li>
          </ul>
        </div>

        {/* Section 3: Corporate Income Tax */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Corporate Income Tax
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Companies operating in Nigeria are required to pay corporate income tax on their profits.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Standard Corporate Tax Rate:</strong> 30% on taxable profit</li>
            <li><strong>Small Companies:</strong> 20% for companies with gross turnover of ₦25,000,000 or less</li>
            <li><strong>Minimum Tax:</strong> 0.5% of gross turnover for companies with no taxable profit or where tax computed is less than minimum tax</li>
            <li><strong>Tax Year:</strong> January 1st to December 31st</li>
            <li><strong>Filing Deadline:</strong> Six months from the end of the tax year (June 30th)</li>
          </ul>
        </div>

        {/* Section 4: Personal Income Tax */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Personal Income Tax
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Individuals earning income in Nigeria are subject to personal income tax based on their taxable income.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tax Brackets (Monthly)</h3>
            <table className="w-full text-left text-gray-700">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Income Range (₦)</th>
                  <th className="py-2">Tax Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">First 300,000</td>
                  <td className="py-2">7%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">300,001 - 600,000</td>
                  <td className="py-2">11%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">600,001 - 1,100,000</td>
                  <td className="py-2">15%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">1,100,001 - 1,600,000</td>
                  <td className="py-2">19%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">1,600,001 - 3,200,000</td>
                  <td className="py-2">21%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">3,200,001 - 6,000,000</td>
                  <td className="py-2">24%</td>
                </tr>
                <tr>
                  <td className="py-2">Above 6,000,000</td>
                  <td className="py-2">24% (plus additional 6% on excess over ₦6,000,000)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Consolidated Relief Allowance:</strong> ₦1,000,000 or 20% of gross income (whichever is higher)</li>
            <li><strong>Tax Identification Number (TIN):</strong> Required for all taxpayers</li>
          </ul>
        </div>

        {/* Section 5: Stamp Duty */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Stamp Duty
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stamp duty is a tax on documents and transactions, including agreements and contracts.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Agreement/Contract:</strong> 0.75% of the value of the contract (capped at ₦15,000 for individuals)</li>
            <li><strong>Commercial Documents:</strong> ₦100 - ₦50,000 depending on document type</li>
            <li><strong>Electronic Transactions:</strong> ₦50 per transaction for transfers above ₦10,000</li>
          </ul>
        </div>

        {/* Section 6: Capital Gains Tax */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Capital Gains Tax (CGT)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Capital Gains Tax is levied on the profit realized from the disposal of assets.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Tax Rate:</strong> 10% on chargeable gains</li>
            <li><strong>Exemptions:</strong> Primary residence, personal belongings up to ₦10,000,000</li>
            <li><strong>Exempt Assets:</strong> Government securities, assets held for more than 12 months in some cases</li>
          </ul>
        </div>

        {/* Section 7: Tax Obligations for E-Commerce */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Tax Obligations for E-Commerce
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            As an e-commerce platform, Zevoria complies with all Nigerian tax regulations regarding online sales.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>VAT on Digital Services:</strong> 7.5% VAT is applied to all digital services and goods sold through our platform</li>
            <li><strong>VAT Collection:</strong> We collect VAT on behalf of the Federal Inland Revenue Service (FIRS)</li>
            <li><strong>Tax Invoice:</strong> All purchases include a tax invoice showing VAT breakdown</li>
            <li><strong>Withholding Tax:</strong> Applicable to payments made to vendors and service providers</li>
            <li><strong>Tax Compliance:</strong> We maintain proper records of all transactions for tax purposes</li>
          </ul>
        </div>

        {/* Section 8: Tax Refunds and Credits */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Tax Refunds and Credits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eligible taxpayers may claim tax refunds and credits under certain conditions.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Input VAT Credit:</strong> Businesses can claim input VAT paid on goods and services against output VAT</li>
            <li><strong>Overpayment Refunds:</strong> Refunds can be claimed if excess tax was paid</li>
            <li><strong>Tax Relief for SMEs:</strong> Small and medium enterprises may qualify for tax incentives and holidays</li>
            <li><strong>Pioneer Status:</strong> Some industries qualify for tax holidays under the Industrial Development (Income Tax Relief) Act</li>
          </ul>
        </div>

        {/* Section 9: Tax Administration */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            9. Tax Administration
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Federal Inland Revenue Service (FIRS) is the primary body responsible for tax administration in Nigeria.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Tax Identification Number (TIN):</strong> Required for all businesses and individuals</li>
            <li><strong>Tax Clearance Certificate:</strong> Required for business operations and government contracts</li>
            <li><strong>Objection and Appeal:</strong> Taxpayers can object to assessments and appeal to the Tax Appeal Tribunal</li>
            <li><strong>Penalties:</strong> Late filing and payment attract penalties and interest</li>
          </ul>
        </div>

        {/* Section 10: Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            10. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For tax-related inquiries, please contact:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700"><strong>Federal Inland Revenue Service (FIRS)</strong></p>
            <p className="text-gray-700">Address: FIRS Headquarters, Plot 6, Gbagada Express Way, Lagos</p>
            <p className="text-gray-700">Phone: +234 700 225 347</p>
            <p className="text-gray-700">Website: www.firs.gov.ng</p>
            <p className="text-gray-700">Email: info@firs.gov.ng</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tax;