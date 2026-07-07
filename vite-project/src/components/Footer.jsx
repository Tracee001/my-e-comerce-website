import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Zevoria</h2>
          <p className="mt-3 text-sm leading-relaxed">
            <span className="italic">Discover. Desire. Deliver.</span>
            <br />
            avaliable in ondo state, Nigeria. We are passionate about bringing you the best in fashion, food stuff, electronics, and lifestyle products.
            <br />
            Shop the latest products with ease, comfort, and style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/login" className="hover:text-white transition">Login</a></li>
            <li><a href="/cart" className="hover:text-white transition">Cart</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/returns" className="hover:text-white transition">Returns</a></li>
            <li><a href="/shipping" className="hover:text-white transition">Shipping Info</a></li>
            <li><a href="/support" className="hover:text-white transition">Support</a></li>
            <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for exclusive offers & the latest updates.
          </p>
          <form 
            className="flex"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing! 🚀");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
              className="w-full px-3 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-red-600 px-4 py-2 rounded-r-md text-white hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a href="#" aria-label="Facebook" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" aria-label="Youtube" className="hover:text-white transition"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        &copy; {new Date().getFullYear()} <span className="font-semibold">Zevoria</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
