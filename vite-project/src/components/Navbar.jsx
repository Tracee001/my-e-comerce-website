import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          Zevoria
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
          <Link to="/about" className="hover:text-red-600 transition">About Us</Link>
          <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="hover:text-red-600 transition font-medium"
            >
              More ▼
            </button>
            {isMoreOpen && (
              <div className="absolute top-full mt-2 right-0 w-48 bg-white text-gray-900 rounded-md shadow-lg z-10">
                <Link
                  to="/faq"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setIsMoreOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  to="/returns"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Returns
                </Link>
                <Link
                  to="/shipping"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Shipping Info
                </Link>
                <Link
                  to="/support"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Support
                </Link>
                <Link
                  to="/tax"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Nigeria Tax Policy 
                </Link>
                
              </div>
            )}
          </div>

          <Link to="/login" className="hover:text-red-600 transition">Login</Link>
          <Link to="/checkout" className="hover:text-red-600 transition">
            Cart ({cartItems.length})
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-3">
          <Link to="/" className="block hover:text-red-600 transition">Home</Link>
          <Link to="/about" className="block hover:text-red-600 transition">About Us</Link>
          <Link to="/contact" className="block hover:text-red-600 transition">Contact</Link>
          <Link to="/login" className="block hover:text-red-600 transition">Login</Link>
          <Link to="/checkout" className="block hover:text-red-600 transition">
            Cart ({cartItems.length})
          </Link>

          {/* Mobile "More" Links */}
          <div className="mt-4 border-t border-gray-700 pt-3 space-y-2">
            <Link to="/faq" className="block hover:text-red-600 transition">FAQ</Link>
            <Link to="/returns" className="block hover:text-red-600 transition">Returns</Link>
            <Link to="/shipping" className="block hover:text-red-600 transition">Shipping Info</Link>
            <Link to="/support" className="block hover:text-red-600 transition">Support</Link>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
              <a href="#" aria-label="Facebook" className="hover:text-red-600 transition"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-red-600 transition"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-red-600 transition"><Twitter size={20} /></a>
              <a href="#" aria-label="Youtube" className="hover:text-red-600 transition"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;