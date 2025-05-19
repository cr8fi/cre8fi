import { useState } from "react";
import LoginInput from "../Components/LoginInput";
import Password from "../Components/Password";
import LogInWithGoogle from "../Components/LogInWithGoogle";
import HeaderTwo from "../Components/HeaderTwo";

export default function CreateAccountForm1({ handleNext }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    verifyPassword: "",
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
    userRegister(e);
  }

  const userRegister = async () => {
    setLoading(true);

    try {
      if (formData.password !== formData.verifyPassword) {
        setLoading(false);
        setInputErr("Passwords do not match");
        return;
      }
      setInputErr(false);

      const response = await fetch("https://cre8fi.onrender.com/register/", {
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
      console.log("Success: Registration Successful");
      setFormData({ email: "", password: "", verifyPassword: "" });
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setLoading(false);
      setInputErr(false);
      handleNext();
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <>
      <HeaderTwo
        header="Create Your Account"
        paragraph={
          <>
            Join Cre8Fi and start building your <br />
            creative future.
          </>
        }
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

        <Password
          heading="Verify password"
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
              Signing up...
            </span>
          ) : (
            "Sign up"
          )}
        </button>

        <LogInWithGoogle />
      </form>
      <p className="mt-8 text-center text-sm text-[#777e90]">
        Already have an account?{" "}
        <a href="#" className="text-white font-semibold">
          SIGNUP HERE
        </a>
      </p>
    </>
  );
}
