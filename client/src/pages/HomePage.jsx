import React from "react";
import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import VisionSection from "../components/VisionSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorks";
import FAQSection from "../components/FaqSection";
import NextStepSection from "../components/NextStep";
import GetInTouchSection from "../components/GetInTouch";
import FooterSection from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen  bg-[url('../../assets/bg.png')] bg-cover bg-center text-white ">
      <NavBar />
      <HeroSection />
      <MissionSection />
      <VisionSection />
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
