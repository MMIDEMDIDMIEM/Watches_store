// pages/Login.jsx
import React, { useState } from "react";
import { useAuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthStore();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.email, form.password);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-[350px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full mb-4 p-2 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
