import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:border-primary outline-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-secondary transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Just type any email and click Login , i will add password section later😒
        </p>
      </div>
    </div>
  );
};

export default Login;