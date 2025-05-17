"use client";

import { useState } from "react";
import "../../assets/form.css";
import HeaderTwo from "./Components/HeaderTwo";
import LoginInput from "./Components/LoginInput";
import Password from "./Components/Password";
import LogInWithGoogle from "./Components/LogInWithGoogle";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  return (
    <form className="min-h-screen flex items-center justify-center bg-[url('../../assets/bg.png')] bg-cover bg-center">
      <div className="w-full max-w-md p-8 mx-4 border-2 gradient-border bg-gradient-to-tr from-[#343E63] to-[#121318] shadow-xl">
        <HeaderTwo
          header="Create Your Account"
          paragraph={`Join Cre8Fi and start building your ${(
            <br />
          )}creative future.`}
        />

        <article className="space-y-5">
          <LoginInput
            heading="Email"
            id="email"
            type="email"
            placeholder="dantel@cre8tfi.com"
          />
          <Password
            heading="Password"
            id="password"
            type="password"
            placeholder="••••••••••"
            showPassword={showPassword}
            onClick={setShowPassword}
          />
          <Password
            heading="Verify password"
            id="verifyPassword"
            type="password"
            placeholder="••••••••••"
            showPassword={showVerifyPassword}
            onClick={setShowVerifyPassword}
          />

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] hover:bg-[#8930e0] text-white font-medium rounded-lg transition duration-200"
          >
            Sign up
          </button>

          <LogInWithGoogle />
        </article>

        <p className="mt-8 text-center text-sm text-[#777e90]">
          Already have an account?{" "}
          <a href="#" className="text-white font-semibold">
            SIGNUP HERE
          </a>
        </p>
      </div>
    </form>
  );
}
