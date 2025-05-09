import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/mission.png";
import visionImage from "../assets/vision.png";

const cardVariants = {
  offscreen: { opacity: 0, y: 100, rotateY: -15 },
  onscreen: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const MissionAndVision = () => {
  return (
    <section className="font-['Sora'] bg-[url('./assets/bg.svg')] bg-cover text-white px-6 md:px-[120px] py-10 md:py-[80px] w-full flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col gap-[60px] md:gap-[100px]">
        {/* Mission Section */}
        <motion.div
          className="max-w-[1200px] min-h-[280px] w-full bg-gradient-to-br from-[#101320] to-[#1C0B3B] border border-[#1C0B3B] rounded-[20px] p-6 md:p-[40px] flex flex-col md:flex-row gap-[40px] md:gap-[60px] items-center hover:scale-[1.02] hover:-rotate-x-1 hover:rotate-y-2 transition-transform duration-500 ease-in-out"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <div className="w-full md:w-[30%] flex justify-center">
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-[20px] object-contain"
            />
          </div>
          <div className="w-full md:w-[70%] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Our Mission
            </h1>
            <p className="text-base md:text-xl leading-relaxed">
              Empower creators, foster collaborations, ensure transparency, and
              drive community growth.
            </p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="max-w-[1200px] min-h-[280px] w-full bg-gradient-to-br from-[#101320] to-[#1C0B3B] border border-[#1C0B3B] rounded-[20px] p-6 md:p-[40px] flex flex-col md:flex-row gap-[40px] md:gap-[60px] items-center hover:scale-[1.02] hover:-rotate-x-1 hover:rotate-y-2 transition-transform duration-500 ease-in-out"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <div className="w-full md:w-[30%] flex justify-center">
            <img
              src={visionImage}
              alt="Our Vision"
              className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-[20px] object-contain"
            />
          </div>
          <div className="w-full md:w-[70%] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Our Vision
            </h1>
            <p className="text-base md:text-xl leading-relaxed">
              Cre8Fi is a decentralized social media on Solana, empowering
              creators, fostering collaboration, and ensuring transparency with
              fair rewards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionAndVision;
