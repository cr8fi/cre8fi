import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  const steps = [
    {
      title: "01",
      subtitle: "Create your profile",
      description:
        "Highlight your skills and showcase your portfolio. Our smart algorithm connects you with projects and collaborators perfectly suited to your expertise.",
    },
    {
      title: "02",
      subtitle: "Earn Points",
      description:
        "Generate points by creating engaging content and interacting with the community.",
    },
    {
      title: "03",
      subtitle: "Market Place",
      description:
        "Explore a dynamic marketplace where you can offer and purchase creative services or trade digital assets like NFTs.",
    },
    {
      title: "04",
      subtitle: "Creators profile and skill matching",
      description:
        "Create a profile that highlights your skills and showcase your portfolio. Our smart matching algorithm connects you with projects and collaborators perfectly suited to your expertise.",
    },
  ];
 useEffect(() => {
     AOS.init({ duration: 1000, once: true });
   }, []);
  return (
    <section
      className="section container w-full px-6 md:px-20 py-16 font-['Sora'] bg-[url('/assets/bg.svg')] bg-cover bg-center bg-no-repeat text-white"
      id="how-it-works"
    >
      <motion.div
        className="max-w-[1200px] mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] [perspective:1000px]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                rotateX: 2,
                rotateY: -2,
                transition: { type: "spring", stiffness: 200 },
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-[#202442] to-[#2A1B53] p-8 rounded-[20px] border border-[#3C3F5B] shadow-2xl transition-transform"
            >
              <h1 className="text-2xl text-[#D3D7EA] font-bold mb-2">
                {step.title}
              </h1>
              <h3 className="text-lg font-semibold text-[#D3D7EA] mb-2">
                {step.subtitle}
              </h3>
              <p className="text-sm text-white">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
