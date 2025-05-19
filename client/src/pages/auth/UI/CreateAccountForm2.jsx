import { useState } from "react";
import HeaderTwo from "../Components/HeaderTwo";
import LoginInput from "../Components/LoginInput";

export default function CreateAccountForm2({ handleNext }) {
  const [formData, setFormData] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    handleNext();
  }
  return (
    <>
      <HeaderTwo paragraph=" Enter your email and we’ll send you a reset link." />
      <form className="space-y-5" onSubmit={handleSubmit}>
        <LoginInput
          heading="Email"
          id="email"
          name="email"
          type="email"
          placeholder="dantel@cre8tfi.com"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] hover:bg-[#8930e0] text-white font-medium rounded-lg transition duration-200"
        >
          Get Verification Code
        </button>
      </form>
    </>
  );
}
