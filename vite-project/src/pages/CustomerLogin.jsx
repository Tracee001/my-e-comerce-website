import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginCustomer, getCurrentCustomer } from "../utils/auth";

const CustomerLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (getCurrentCustomer()) {
      navigate("/customer/account");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      loginCustomer(form.email, form.password);
      window.dispatchEvent(new Event("customerAuthChanged"));
      navigate("/customer/account");
    } catch (err) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ background: "linear-gradient(90deg, #e52d27, #b721ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Customer Login
          </h1>
          <p className="text-gray-600">Log in to view your orders and purchased products.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" name="password" type="password" value={form.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
          </div>

          <button type="submit" className="w-full py-2 rounded-md font-semibold text-white" style={{ background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 50%, #e52d27 100%)" }}>
            Login as Customer
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account? <a href="/customer/register" className="text-purple-600 hover:underline font-medium">Sign up</a>
        </p>
      </div>
    </section>
  );
};

export default CustomerLogin;
