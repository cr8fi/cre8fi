import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NextStep = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="next-steps"
      className="font-['Sora'] w-full bg-[url('/assets/bg.svg')] bg-cover bg-center bg-no-repeat text-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20"
    >
      <div
        className="  bg-gradient-to-b from-[#101320] to-[#1C0B3B] w-full max-w-4xl mx-auto text-center rounded-xl px-4 sm:px-6 md:px-10 py-12 sm:py-16 shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Take the next step toward optimized & streamlined operations.
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Discover how our platform can empower your business. No credit card
          required.
        </p>

        <div
          className="flex justify-center gap-4 flex-wrap"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <button
            onClick={() => navigate("/register")}
            className="bg-gradient-to-b from-[#B039FF] to-[#9C39FF] border border-[#B266FF] hover:text-[#160F22] text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            GET STARTED
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#160F22] border border-[#ECDFFB1A] hover:bg-white hover:text-[#160F22] text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            LOGIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default NextStep;
