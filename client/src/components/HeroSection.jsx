import React from "react";
import heroVideo from "../assets/heroVideo.mp4";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="container relative min-h-screen w-full text-white px-6  pb-40 md:pb-60 font-['Sora'] bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="text-center max-w-4xl mx-auto flex flex-col gap-10 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight opacity-0 animate-fade-up">
          Experience new Opportunities with{" "}
          <span className="text-[#0052CC]">Cre8Fi</span>
        </h1>
        <p className="text-xl md:text-2xl text-white font-normal leading-[140%] opacity-0 animate-fade-up-delay-1">
          Transform your creativity into cryptocurrency with our <br />
          web3 platform
        </p>
        <button
          onClick={() => navigate("/register")}
          className="bg-gradient-to-tr from-[#403EBE] to-[#3E5ED7] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#f2f2f2] transition w-fit mx-auto opacity-0 animate-fade-up-delay-2"
        >
          Get Started
        </button>
      </div>

      <div className="absolute bottom-[-20%] left-0 w-full z-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[200px] md:h-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
