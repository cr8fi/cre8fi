"use client";

import { useState } from "react";
import "../../assets/form.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('../../assets/bg.png')] bg-cover bg-center">
      <div className="w-full max-w-md p-8 mx-4  border-[2px] gradient-border bg-gradient-to-tr from-[#343E63] to-[#121318] shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Cre8Fi</h1>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-[#b1b5c3] text-center">
            Login to continue your creative journey.
          </p>
        </div>

        <form className="space-y-5">
          <div className="p-3 bg-red/10 rounded-md text-red text-center mb-4">
            Incorrect email address!
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-[#b1b5c3] text-sm text-left font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="dantel@cre8tfi.com"
              className="w-full px-4 py-3 rounded-lg bg-[#2a3352] border border-[#9c39ff]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#9c39ff]/50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-[#b1b5c3] text-sm text-left font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="w-full px-4 py-3 rounded-lg bg-[#2a3352] border border-[#9c39ff]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#9c39ff]/50"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5 text-[#b1b5c3]" />
                ) : (
                  <EyeOffIcon className="h-5 w-5 text-[#b1b5c3]" />
                )}
              </button>
            </div>
          </div>

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
            <a href="#" className="text-sm text-gray-300 hover:text-purple">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] hover:bg-[#8930e0] text-white font-medium rounded-lg transition duration-200"
          >
            Log In
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#777e90]/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#2a3352] text-[#777e90]">Or</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-transparent border border-[#9c39ff]/30 text-white font-medium rounded-lg hover:bg-[#3a4362] transition duration-200"
          >
            <img
              src="./assets/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            Sign in with google
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[#777e90]">
          Already have an account?{" "}
          <a href="#" className="text-white font-semibold">
            SIGNUP HERE
          </a>
        </p>
      </div>
    </div>
  );
}

// Simple icon components to replace Lucide icons
function EyeIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
}

export default Login;
