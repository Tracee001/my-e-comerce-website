import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentAdmin, loginAdmin } from "../utils/auth";

const AdminLogin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (getCurrentAdmin()) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      loginAdmin(form.username, form.password);
      navigate("/admin");
    } catch (err) {
      alert(err.message || "Invalid credentials");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ background: "linear-gradient(90deg, #0f766e, #14b8a6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Admin Login
          </h1>
          <p className="text-gray-600">Enter your admin credentials to manage sellers, customers and products.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input id="username" name="username" value={form.username} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" name="password" type="password" value={form.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500" />
          </div>

          <button type="submit" className="w-full py-2 rounded-md font-semibold text-white bg-teal-600 hover:bg-teal-700 transition">
            Login as Admin
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
