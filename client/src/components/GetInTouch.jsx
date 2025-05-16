import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      className="container mx-auto font-['Sora'] w-full bg-[url('/assets/bg.svg')] bg-cover bg-center bg-no-repeat py-16 px-4"
      id="contact"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-full aspect-[] md:aspect-auto overflow-hidden rounded-lg shadow-md">
          <img
            src="\assets\Vector-optimized.webp" 
            alt="Get in touch"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
          <p className="text-[#9E9E9E0 mb-6">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </p>
          <form className="space-y-4 " data-aos="zoom-in" data-aos-delay="400">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 text-[#9E9E9E] bg-[#18181C]   rounded-[5px] focus:outline-none focus:ring-2 "
            />
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full px-4 py-2 bg-[#18181C]   rounded-[5px] focus:outline-none focus:ring-2 "
            />
            <textarea
              placeholder="Message"
              rows={5}
              required
              className="w-full px-4 py-2 bg-[#18181C]   rounded-[5px] focus:outline-none focus:ring-2 "
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-b from-[#B039FF] to-[#9C39FF] border border-[#B266FF] hover:text-[#160F22] text-white font-semibold rounded-xl  transition duration-300"
            >
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
