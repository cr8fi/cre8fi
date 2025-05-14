import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, ",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and other popular online payment options.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all plans, no questions asked.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Our support team is available 24/7 via live chat and email to assist you anytime.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  
  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="section container font-['Sora'] w-full px-6 md:px-20 py-20 bg-gradient-to-b from-[#101320] to-[#1C0B3B] text-white"
      id="faqs"
    >
      <div
        className="max-w-[800px] mx-auto text-center [perspective:1000px] [transform-style:preserve-3d]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="mb-6">
          <span className="text-sm uppercase tracking-widest text-purple-300 font-medium">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 mt-4">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;

            return (
              <motion.div
                key={index}
                onClick={() => toggle(index)}
                className="bg-[#1b1231] border border-[#2c1c46] rounded-lg px-6 py-4 cursor-pointer hover:shadow-xl"
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="overflow-hidden mt-3"
                    >
                      <p className="text-sm text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
