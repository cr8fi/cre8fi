import { useState } from "react";
import HeaderTwo from "../Components/HeaderTwo";
import LoginInput from "../Components/LoginInput";

export default function CreateAccountForm2({ handleNext }) { 
  const [formData, setFormData] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    useSendCode(e);
    console.log("Form submitted with data:", formData); 
    handleNext();
  }
  const useSendCode = async () => {

    try{
      const response = await fetch("https://cre8fi.onrender.com/register/", {
        method: "POST",
        mode: "cors",
        credentials: 'include',
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
      
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

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
