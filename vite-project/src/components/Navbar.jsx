import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">Zevoria</Link>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/checkout">Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;