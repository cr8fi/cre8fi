import React from "react";
import heroImage from "../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full text-white px-6 py-20 font-['Sora'] bg-[url('./assets/bg.svg')] bg-cover flex items-center justify-center bg-[#030614]">
      <div className="text-center max-w-4xl mx-auto flex flex-col gap-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight  opacity-0 animate-fade-up">
          Experience new Opportunities with Cre8Fi
        </h1>
        <p className="text-[30px] text-white font-normal leading-[100%] md:text-xl opacity-0 animate-fade-up-delay-1">
          Transform your creativity into cryptocurrency with our
          <br />
          web3 platform
        </p>
        <button className="bg-gradient-to-tr from-[#403EBE] to-[#3E5ED7] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#f2f2f2] transition w-fit mx-auto  opacity-0 animate-fade-up-delay-2">
          Get Started
        </button>
        <img
          src={heroImage}
          alt="Hero Visual"
          className="w-full h-auto object-cover mt-8  opacity-0 animate-fade-up-delay-3"
        />
      </div>
    </section>
  );
};

export default HeroSection;
