"use client";

import { useState } from "react";
import "../../assets/form.css";
import HeaderTwo from "./Components/HeaderTwo";
import Password from "./Components/Password";
import LoginInput from "./Components/LoginInput";
import LogInWithGoogle from "./Components/LogInWithGoogle";
import { NavLink } from "react-router-dom";

export default function LoginFlow() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [inputErr, setInputErr] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    userLogin(e);
  }

  const userLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://cre8fi.onrender.com/login/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setLoading(false);
        setInputErr("Network response was not ok");
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      console.log("Success: Login Successful");
      setFormData({ email: "", password: "" });
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('../../assets/bg.png')] bg-cover bg-center">
      <div className="w-full max-w-md p-8 mx-4 border-2 gradient-border bg-gradient-to-tr from-[#343E63] to-[#121318] shadow-xl">
        <HeaderTwo
          header="Welcome Back"
          paragraph="Log in to continue your creative journey."
        />
        <form className="space-y-5" onSubmit={handleSubmit}>
          {inputErr && (
            <div className="p-3 border bg-[#F3443E4D] border-[#F3443E] rounded-md text-red-700 text-center mb-4">
              {inputErr}
            </div>
          )}
          <LoginInput
            heading="Email"
            id="email"
            name="email"
            type="email"
            placeholder="dantel@cre8tfi.com"
            value={formData.email}
            onChange={handleChange}
          />
          <Password
            heading="Password"
            id="password"
            name="password"
            placeholder="••••••••••"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] hover:bg-[#8930e0] text-white font-medium rounded-lg transition duration-200"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </button>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-navy-light gradient-border text-purple bg-gradient-to-tr from-[#343E63] to-[#121318] focus:ring-purple/50"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <NavLink
              to={"/reset"}
              className="text-sm text-gray-300 hover:text-purple"
            >
              Forgot your password?
            </NavLink>
          </div>
        </form>

        <LogInWithGoogle />
        <p className="mt-8 text-center text-sm text-[#777e90]">
          Didn't have an account?{" "}
          <NavLink to="/register" className="text-white font-semibold">
            SIGNUP HERE
          </NavLink>
        </p>
      </div>
    </section>
  );
}
