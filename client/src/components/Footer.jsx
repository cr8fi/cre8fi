import React from "react";
import { FaLinkedin, FaXTwitter, FaInstagram,  } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#101320] via-[#302b63] to-[#1C0B3B]   text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-left">Cre8Fi</h2>
          <p className="text-sm mb-6 max-w-xs text-left">
            Seamlessly transform your concepts into a fully operational,
            mobile-friendly, code-free SaaS web platform.
          </p>
          <div className="flex space-x-4 text-white text-xl text-left">
            <a href="#" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Cre8Fi/"
              className="hover:text-blue-400"
            >
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/cre8fi?" className="hover:text-blue-400">
              <FaInstagram />
            </a>
           
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-left">Company</h3>
          <ul className="space-y-2 text-sm text-left">
            <li>
              <a href="#" className="hover:underline ">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Demo
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-left">Info</h3>
          <ul className="space-y-2 text-sm text-left">
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                404
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
