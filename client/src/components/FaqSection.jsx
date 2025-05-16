import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What is Cre8Fi?",
    answer:
      "Cre8Fi is a Web3 platform designed to connect content creators with projects looking for their services. It provides a decentralized marketplace where creators can offer services like graphic design, writing, video editing, and more. Additionally, we use an intelligent project-matching algorithm to help projects find the right creators based on their skills and portfolios. In future versions, creators will also earn rewards through our content point system, which will be convertible to tokens., ",
  },
  {
    question: "How does the project-creator matching work?",
    answer:
      "We use a smart algorithm that analyzes creators’ profiles, skills, portfolios, and past work to match them with projects that fit their expertise. When projects list their requirements, our algorithm suggests the best creators for the job, helping to streamline the hiring process and ensure an ideal match for both parties.",
  },
  {
    question: "What services can creators offer on Cre8Fi?",
    answer:
      "Creators can offer a wide range of services, including but not limited to: Graphic Design, Writing and Content Creation, Video Editing, Social Media Management, Web Development, NFT Creation, etc. The platform is flexible, allowing creators to showcase their unique talents, and buyers can find the specific skills they need for their projects.",
  },
  {
    question: "Is Cre8Fi built on blockchain?",
    answer:
      "Yes! Cre8Fi is built on the Solana blockchain, known for its speed, low transaction fees, and scalability. Blockchain technology ensures that our platform offers transparency, security, and efficient transactions, especially when we introduce our token-based reward system in future versions.",
  },
  {
    question: "How does the content point system work?",
    answer:
      "In the first version of Cre8Fi, creators can earn points by engaging with the platform—whether it's through content creation, community engagement, or participating in events. These points accumulate over time, and in future versions, creators will be able to convert them into our native token. However, in the initial launch, points will simply track contribution and engagement without immediate monetization.",
  },
  {
    question: "Can creators sell digital assets like NFTs on Cre8Fi?",
    answer:
      "Absolutely! Cre8Fi is not just about service offerings; creators can also list digital assets, such as NFTs, for sale. This opens up another avenue for creators to monetize their work and connect with projects looking for unique digital assets.",
  },
  {
    question: "What are the benefits of being a verified creator or project?",
    answer:
      "Absolutely! Cre8Fi is not just about service offerings; creators can also list digital assets, such as NFTs, for sale. This opens up another avenue for creators to monetize their work and connect with projects loVerification boosts credibility and visibility on the platform. Verified creators and projects get: Higher visibility in searches and matches. Access to premium features and exclusive listings. A verified badge that signals trust to potential collaborators. The verification process ensures that creators and projects are legitimate, fostering trust within the community. oking for unique digital assets.",
  },
  {
    question:
      "What’s the difference between the content point system and token rewards?",
    answer:
      "In version 1, Cre8Fi will launch with a point system where creators earn points for their contributions and engagement on the platform. These points cannot be immediately monetized but will serve as a way to track user activity. In subsequent versions, these points will be convertible into tokens, which can be swapped for stablecoins or used within the Cre8Fi ecosystem.",
  },
  {
    question:
      "How does Cre8Fi ensure fair collaboration between creators and projects?",
    answer:
      "Cre8Fi’s dashboard offers tools for managing projects, setting milestones, and tracking progress. Both creators and project managers can communicate directly through the platform to ensure clear expectations and timely delivery. Payments for services can also be handled seamlessly through integrated wallets like Solflare, making transactions transparent and secure.",
  },
  {
    question: "What blockchain technologies is Cre8Fi using?",
    answer:
      "Cre8Fi is leveraging several powerful blockchain technologies to enhance the platform’s performance and security:- Solana Blockchain: For low-cost, high-speed transactions.- Metaplex: For managing the sale and creation of digital assets like NFTs.- Streamflow: For token distribution and management (to be implemented in later versions).- Reclaimprotocol: For zkTLS integration, ensuring enhanced privacy and security.- ZK Compression by LightProtocol: For scalability and privacy in future updates.",
  },
  {
    question: "When will the token reward system be available?",
    answer:
      "The token reward system is planned for a future version of Cre8Fi. Initially, creators will accumulate points through their work on the platform, and these points will later be convertible to tokens once the feature is implemented. Keep an eye on our roadmap for updates on when token rewards will go live!",
  },
  {
    question: "Who can use Cre8Fi?",
    answer:
      "Cre8Fi is built for: Content Creators: Those who want to showcase their skills, offer services, and sell digital assets. Projects/Businesses: Those looking to hire creators for their needs, whether it’s for marketing, content creation, or technical services. Web3 Enthusiasts: Anyone who is interested in decentralized platforms, earning through creation, and participating in the next evolution of the internet.",
  },
  {
    question: "How can I get started on Cre8Fi?",
    answer:
      "It’s easy! If you’re a creator, you can sign up and create your profile, showcasing your skills and portfolio. From there, you can start listing services or digital assets in the marketplace. If you’re a project looking for talent, you can post your project and let our matching algorithm suggest creators. We also have a handy dashboard for managing collaborations and tracking progress.",
  },
  {
    question: "What’s the long-term vision for Cre8Fi?",
    answer:
      "Our long-term vision is to create a thriving ecosystem where creators have access to endless opportunities for monetization through service offerings, digital asset sales, and token rewards. We aim to be the go-to platform for creators and projects in the Web3 space, leveraging blockchain technology to provide a transparent, decentralized, and secure environment. In the future, we plan to expand our marketplace, integrate more blockchain features, and continuously improve the project-creator matching experience.",
  },
  {
    question: "How does Cre8Fi handle payments?",
    answer:
      "Payments on Cre8Fi will be handled through secure, blockchain-based wallets like Solflare. In future updates, we plan to integrate Mercury’s payment stack, which will provide smooth on-ramping and off-ramping for both creators and projects. This ensures that all transactions are seamless and secure.",
  },
  {
    question: "What can we expect in future updates?",
    answer:
      "Future updates to Cre8Fi will include: Token reward systems and point conversion. Enhanced marketplace features. Mobile app versions of the platform. More advanced matching algorithms and new creator services. Deeper blockchain integrations for privacy, scalability, and security.",
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
      className="section container font-['Sora'] w-full px-6 md:px-20 py-20 bg-gradient-to-r from-[#101320] via-[#302b63] to-[#1C0B3B]  text-white"
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

            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold mt-2">
                Frequently asked questions
              </h2>
              <p className="text-gray-400 mt-4">
                Got more questions? Feel free to reach out to us via our social
                media channels or community forums! We’re here to help you
                thrive in the Cre8Fi ecosystem.
              </p>
            </div>;

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
