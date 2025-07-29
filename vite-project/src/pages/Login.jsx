import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !pass) {
      setError("Please enter both email and password.");
      return;
    }
    // Simulate login
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In to Your Account</h2>
        {error && (
          <div className="mb-4 text-red-600 bg-red-100 p-2 rounded">{error}</div>
        )}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700 font-medium">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-500 text-sm"
              onClick={() => setShowPass((prev) => !prev)}
              tabIndex={-1}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Login
        </button>
        <div className="mt-4 text-center text-gray-500 text-sm">
          Don&apos;t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;