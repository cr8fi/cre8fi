import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className=" top-0 z-50 h-[100px] w-full  shadow-md flex justify-center">
      <div className="w-[1440px] flex items-center justify-between px-6">
        {/* Logo */}
        <div
          className="w-[115.22px] h-[46px] text-[36px] leading-[1] font-bold text-white font-spaceGrotesk tracking-normal"
          style={{ marginTop: "-7.5px", marginLeft: "15.2px" }}
        >
          Cr8fi
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white rounded-md z-50 transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex w-[624px] h-[30px] absolute top-[35px] left-[304px] gap-6 text-white font-[400] text-[20px]">
          <li>
            <a
              href="#home"
              className=" text-[20px] font-normal leading-[150%] align-middle font-['Sora'] hover:text-[#0067FF]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-[20px] font-normal leading-[150%] align-middle font-['Sora'] hover:text-[#0067FF]"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="text-[20px] font-normal leading-[150%] align-middle font-['Sora'] hover:text-[#0067FF]"
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#for-creators"
              className="text-[20px] font-normal leading-[150%] align-middle font-['Sora'] hover:text-[#0067FF]"
            >
              For Creators
            </a>
          </li>
          <li>
            <a
              href="#join-us"
              className="text-[20px] font-normal leading-[150%] align-middle font-['Sora'] hover:text-[#0067FF]"
            >
              Join Us
            </a>
          </li>
        </ul>

        <div className="hidden md:flex gap-4 text-white font-medium">
          <a
            href="#login"
            className="text-[24px] font-normal leading-[150%] align-middle font-['Sora'] hover:text-[#0067FF]"
          >
            Log in
          </a>
          <a
            href="#signup"
            className=" h-[36px] top-[9px] left-[15px] border border-[#8930e0] px-4 rounded-md text-[24px] font-normal leading-[150%] align-middle font-['Sora'] hover:text-[#0067FF]"
          >
            Sign Up
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xl z-40 flex items-start justify-center pt-24 md:hidden animate-fade-up ">
          <div className="w-[90%] max-w-sm  rounded-lg text-white shadow-lg p-6 flex flex-col gap-4 text-center animate-fade-up ">
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
            <a href="#features" onClick={toggleMenu}>
              Features
            </a>
            <a href="#how-it-works" onClick={toggleMenu}>
              How It Works
            </a>
            <a href="#for-creators" onClick={toggleMenu}>
              For Creators
            </a>
            <a href="#join-us" onClick={toggleMenu}>
              Join Us
            </a>
            <a href="#login" onClick={toggleMenu}>
              Log in
            </a>
            <a href="#signup" onClick={toggleMenu}>
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
