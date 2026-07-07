import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getCurrentCustomer } from "../utils/auth";
import { addCustomerOrder } from "../utils/customerOrders";
import { CheckCircle, Copy, ArrowLeft, Printer, Share2 } from "lucide-react";

const Payment = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.price || 0;
    return sum + (price * item.qty);
  }, 0);
  
  // Check if items are local (Naira) or dollar
  const hasLocalItems = cartItems.some(item => item.id && item.id.startsWith("local-"));
  const isNaira = hasLocalItems;
  
  // Format price based on currency
  const formatPrice = (price) => {
    if (isNaira) {
      return `₦${price.toLocaleString()}`;
    }
    return `$${price.toFixed(2)}`;
  };
  
  // Calculate delivery fee (free above certain amount)
  const deliveryFee = subtotal > 5000 ? 0 : 500;
  
  // Calculate VAT (7.5% for Nigeria)
  const vat = subtotal * 0.075;
  const total = subtotal + deliveryFee + vat;

  // Payment details
  const paymentDetails = {
    bank: "OPay",
    accountNumber: "9076712414",
    accountName: "Zevoria",
    vatRate: "7.5%",
    vatAmount: vat
  };

  const handleConfirmPayment = () => {
    const customer = getCurrentCustomer();
    if (!customer) {
      alert("Please login or register as a customer before completing payment.");
      navigate("/customer/login");
      return;
    }

    const orderNum = "ZV" + Date.now().toString().slice(-8);
    const order = {
      id: `order-${Date.now()}`,
      orderNumber: orderNum,
      customerId: customer.id,
      createdAt: new Date().toISOString(),
      total,
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        qty: item.qty,
        price: item.price,
        image: item.image,
      })),
    };

    addCustomerOrder(customer.id, order);
    setCompletedOrder(order);
    setOrderNumber(orderNum);
    setShowReceipt(true);
    clearCart();
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  if (showReceipt) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="bg-white rounded-lg shadow-sm p-8 text-center mb-6">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
            <p className="text-gray-500">Thank you for your purchase</p>
          </div>

          {/* Receipt */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center border-b pb-4 mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Zevoria</h2>
              <p className="text-gray-500">Order Receipt</p>
              <p className="text-sm text-gray-400">Order #{orderNumber}</p>
              <p className="text-sm text-gray-400">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
            </div>

            {/* Items */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">Items Ordered</h3>
              {(completedOrder?.items || []).map((item, index) => (
                <div key={index} className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">{item.title} x {item.qty}</span>
                  <span className="font-medium">{formatPrice(item.price * item.qty)}</span>
                </div>
              ))}
            </div>

            {/* Payment Details */}
            <div className="border-b pb-4 mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">Payment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-medium">Bank Transfer (OPay)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Number</span>
                  <span className="font-medium">{paymentDetails.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Name</span>
                  <span className="font-medium">{paymentDetails.accountName}</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-b pb-4 mb-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? <span className="text-green-600">FREE</span> : formatPrice(deliveryFee)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAT ({paymentDetails.vatRate})</span>
                  <span className="font-medium">{formatPrice(vat)}</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-bold text-gray-900">Total Paid</span>
                  <span className="font-bold text-xl text-gray-900">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Delivery Address</h3>
              <p className="text-sm text-gray-600">Akure, Ondo State, Nigeria</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
                <Printer size={16} />
                <span className="text-sm">Print</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
                <Share2 size={16} />
                <span className="text-sm">Share</span>
              </button>
            </div>

            {/* Continue Shopping */}
            <Link 
              to="/" 
              className="block text-center bg-orange-500 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-orange-600 transition"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0 && !showReceipt) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <Link to="/" className="text-orange-500 hover:text-orange-600">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back to Cart</span>
        </button>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

        {/* Payment Instructions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">💳 Payment Instructions</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800 text-sm">
              Please transfer the total amount to the account below. Your order will be confirmed once payment is verified.
            </p>
          </div>

          {/* Bank Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600">Bank</span>
              <span className="font-bold text-lg">{paymentDetails.bank}</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600">Account Number</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">{paymentDetails.accountNumber}</span>
                <button 
                  onClick={() => copyToClipboard(paymentDetails.accountNumber)}
                  className="text-orange-500 hover:text-orange-600"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600">Account Name</span>
              <span className="font-bold text-lg">{paymentDetails.accountName}</span>
            </div>
          </div>
        </div>

        {/* Tax Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">📋 Tax Information</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">VAT Rate (Nigeria)</span>
              <span className="font-medium">{paymentDetails.vatRate}</span>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-yellow-800 text-sm">
                ℹ️ VAT is charged at the standard rate of 7.5% as per the Federal Inland Revenue Service (FIRS) guidelines. This tax is mandatory for all goods and services sold in Nigeria.
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">📦 Order Summary</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Items ({cartItems.length})</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery</span>
              <span className="font-medium">
                {deliveryFee === 0 ? <span className="text-green-600">FREE</span> : formatPrice(deliveryFee)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">VAT (7.5%)</span>
              <span className="font-medium">{formatPrice(vat)}</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="font-bold text-gray-900">Total to Pay</span>
              <span className="font-bold text-2xl text-orange-600">{formatPrice(total)}</span>
            </div>
          </div>
        </div>

        {/* Confirm Payment Button */}
        <button 
          onClick={handleConfirmPayment}
          className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition mb-4"
        >
          ✅ I HAVE MADE THE PAYMENT
        </button>

        <p className="text-center text-gray-500 text-sm">
          By clicking the button above, you confirm that you have made the transfer to the provided account.
        </p>
      </div>
    </div>
  );
};

export default Payment;