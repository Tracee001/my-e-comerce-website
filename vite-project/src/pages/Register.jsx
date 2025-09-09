import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 md:p-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{background: "linear-gradient(90deg, #e52d27, #b721ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
            Join Us
          </h1>
        </div>

        {/* Register Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold text-white"
            style={{
              background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 50%, #e52d27 100%)",
            }}
          >
            Create Account
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:underline font-medium">
            Sign In
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;