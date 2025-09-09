import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${form.email}`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 md:p-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl font-bold mb-2"
            style={{
              background: "linear-gradient(90deg, #e52d27, #b721ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Login
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Please enter your credentials to access your account.
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
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

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="accent-purple-600"
              />
              Remember me
            </label>
            <a href="/reset" className="text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold text-white"
            style={{
              background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 50%, #e52d27 100%)",
            }}
          >
            Login
          </button>
        </form>

        {/* Divider */}
         <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-purple-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;