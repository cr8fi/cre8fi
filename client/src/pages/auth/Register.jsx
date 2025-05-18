"use client";

import { useState } from "react";
import "../../assets/form.css";
import HeaderTwo from "./Components/HeaderTwo";
import LoginInput from "./Components/LoginInput";
import Password from "./Components/Password";
import LogInWithGoogle from "./Components/LogInWithGoogle";

export default function Register() {
 const [formData, setFormData] = useState({
    email: '',
    password: '',
    verifyPassword: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const userRegister = async (e) => {
    e.preventDefault(); 
  
    try {

      if (formData.password !== formData.verifyPassword) {
        alert("Passwords do not match");
        return;
      }
      const response = await fetch('https://cre8fi.onrender.com/register/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      console.log('Success: Registration Successful');
  
      
      setFormData({ email: '', password: '' });
  
      
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

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
            value={formData.email}
            onChange={userRegister}
          />
          <Password
            heading="Password"
            id="password"
            type="password"
            placeholder="••••••••••"
            value={formData.password}
            onChange={userRegister}
          />
          <Password
            heading="Verify password"
            id="verifyPassword"
            type="password"
            placeholder="••••••••••"
            value={formData.verifyPassword}
            onChange={userRegister}
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
