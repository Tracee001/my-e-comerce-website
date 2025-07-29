import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 mb-3 shadow rounded flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>Qty: {item.qty}</p>
                <p>Price: ${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg mt-4">Total: ${total.toFixed(2)}</div>
          <button onClick={() => alert("Order placed (not real)!")} className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;