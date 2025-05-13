import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection";
import MissionAndVision from "../components/MissionAndVision";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorks";
import FAQSection from "../components/FaqSection";
import NextStepSection from "../components/NextStep";
import GetInTouchSection from "../components/GetInTouch";
import FooterSection from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-b from-[#1a0b2e]  to-[#130a1c]">
      <NavBar />
      <HeroSection />
      <MissionAndVision />
     <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <NextStepSection />
      <GetInTouchSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
