"use client";

import { useState } from "react";
import "../../assets/form.css";
import HeaderTwo from "./Components/HeaderTwo";
import Password from "./Components/Password";
import { useNavigate } from "react-router-dom";

export default function NewPassword() {
  const [formData, setFormData] = useState({
    password: "",
    verifyPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [inputErr, setInputErr] = useState(false);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    userChangePassword(e);
  }
  const userChangePassword = async () => {
    setLoading(true);

    try {
      if (formData.password !== formData.verifyPassword) {
        setLoading(false);
        setInputErr("Passwords do not match");
        return;
      }
      setInputErr(false);

      const response = await fetch("https://cre8fi.onrender.com/reset/", {
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
      console.log("Success: Password Changed Successfully");
      setFormData({ password: "", verifyPassword: "" });
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setLoading(false);
      navigate("/success");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex items-center justify-center bg-[url('../../assets/bg.png')] bg-cover bg-center"
    >
      <div className="w-full max-w-md p-8 mx-4  border-[2px] gradient-border bg-gradient-to-tr from-[#343E63] to-[#121318] shadow-xl">
        <HeaderTwo paragraph="Create new password" />
        {inputErr && (
          <div className="p-3 border bg-[#F3443E4D] border-[#F3443E] rounded-md text-red-700 text-center mb-4">
            {inputErr}
          </div>
        )}
        <article className="space-y-5">
          <Password
            heading="Password"
            id="password"
            name="password"
            placeholder="••••••••••"
            value={formData.password}
            onChange={handleChange}
          />
          <Password
            heading="Confirm New password"
            id="verifyPassword"
            name="verifyPassword"
            placeholder="••••••••••"
            value={formData.verifyPassword}
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
                Updating...
              </span>
            ) : (
              "Create Password"
            )}
          </button>
        </article>
      </div>
    </form>
  );
}
