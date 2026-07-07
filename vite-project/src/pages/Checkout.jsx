import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

const Checkout = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  
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
  const total = subtotal + deliveryFee;

  const handleQuantityChange = (item, delta) => {
    const newQty = item.qty + delta;
    if (newQty > 0) {
      updateQuantity(item.id, newQty);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="w-16 h-16 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">You have no items in your cart</p>
            <Link 
              to="/" 
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart ({cartItems.length} items)</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="flex-1">
            {/* Free Delivery Banner */}
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-4">
              <p className="text-orange-800 text-sm">
                <span className="font-semibold">Free Delivery</span> on orders above ₦5,000
              </p>
            </div>
            
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm mb-4 p-4">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={item.image || item.thumbnail || "https://via.placeholder.com/100"} 
                      alt={item.title}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 text-sm line-clamp-2 mb-1">
                      {item.title}
                    </h3>
                    {item.brand && (
                      <p className="text-xs text-gray-500 mb-2">Seller: {item.brand}</p>
                    )}
                    <p className="font-bold text-lg text-gray-900 mb-3">
                      {formatPrice(item.price)}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">Qty:</span>
                      <div className="flex items-center border rounded">
                        <button 
                          onClick={() => handleQuantityChange(item, -1)}
                          className="px-2 py-1 hover:bg-gray-100 text-gray-600"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-medium">{item.qty}</span>
                        <button 
                          onClick={() => handleQuantityChange(item, 1)}
                          className="px-2 py-1 hover:bg-gray-100 text-gray-600"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 self-start"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                
                {/* Subtotal for this item */}
                <div className="mt-3 pt-3 border-t flex justify-between items-center">
                  <span className="text-sm text-gray-500">Subtotal:</span>
                  <span className="font-bold text-gray-900">
                    {formatPrice(item.price * item.qty)}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Continue Shopping Link */}
            <Link to="/" className="text-orange-500 hover:text-orange-600 text-sm font-medium inline-flex items-center gap-1">
              ← Continue Shopping
            </Link>
          </div>
          
          {/* Order Summary Section */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-sm p-5 sticky top-24">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
              
              {/* Delivery Info */}
              <div className="bg-gray-50 rounded p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Delivery to</span>
                </div>
                <p className="text-sm text-gray-600">Akure, Ondo State</p>
                <p className="text-xs text-gray-500">Change location</p>
              </div>
              
              {/* Price Details */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      formatPrice(deliveryFee)
                    )}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-xs text-orange-500">
                    Add {formatPrice(5000 - subtotal)} more for free delivery!
                  </p>
                )}
                <div className="flex justify-between border-t pt-3">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-xl text-gray-900">{formatPrice(total)}</span>
                </div>
              </div>
              
              {/* Checkout Button */}
              <button 
                onClick={() => navigate("/payment")}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-orange-600 transition"
              >
                PROCEED TO CHECKOUT
              </button>
              
              {/* Trust Badges */}
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-500 text-center">
                  🔒 Secure payment. 7-day return guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;