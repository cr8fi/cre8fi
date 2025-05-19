import { useState } from "react";
import HeaderTwo from "../Components/HeaderTwo";
import Code from "../Components/Code";

export default function CreateAccountForm3({ handleNext, valid }) {
  const [formData, setFormData] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    handleNext();
    valid();
  }
  return (
    <>
      <HeaderTwo paragraph=" Enter your email and we’ll send you a reset link." />
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Code
          heading="Verification Code"
          id="verificationCode"
          name="verificationCode"
          type="code"
          placeholder="XXX XXX"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          handleResendCode={() => {
            console.log("Resend code");
          }}
        />

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-tr from-[#4565DB] to-[#9C39FF] hover:bg-[#8930e0] text-white font-medium rounded-lg transition duration-200"
        >
          Verify Code
        </button>
      </form>
    </>
  );
}
