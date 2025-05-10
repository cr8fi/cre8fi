import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Creators", href: "#for-creators" },
    { label: "Join Us", href: "#join-us" },
  ];

  return (
    <nav className="container top-0 z-50 h-[100px] w-full shadow-md flex justify-center bg-[url('./assets/bg.svg')] bg-cover">
      <div className="w-[1440px] flex items-center justify-between px-6">
        {/* Logo */}
        <div
          className="w-[115.22px] h-[46px] text-[36px] leading-[1] font-bold text-white font-spaceGrotesk tracking-normal"
          style={{ marginTop: "-7.5px", marginLeft: "15.2px" }}
        >
          Cr8fi
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white rounded-md z-50 transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className="hidden md:flex w-[624px] h-[30px] absolute top-[35px] left-[304px] gap-6 font-[400] text-[20px] font-['Sora']">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`${
                  activeSection === href.slice(1)
                    ? "text-[#0052CC]"
                    : "text-white"
                } hover:text-[#0067FF] transition-colors`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4 text-white font-medium">
          <Link
            to="/login"
            className="text-[24px] font-normal leading-[150%] font-['Sora'] hover:text-[#0067FF]"
          >
            Log in
          </Link>
          <a
            href="#signup"
            className="h-[36px] border border-[#8930e0] px-4 rounded-md text-[24px] font-normal leading-[150%] font-['Sora'] hover:text-[#0067FF]"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xl z-40 flex items-start justify-center pt-24 md:hidden animate-fade-up">
          <div className="w-[90%] max-w-sm rounded-lg text-white shadow-lg p-6 flex flex-col gap-4 text-center animate-fade-up">
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} onClick={toggleMenu}>
                {label}
              </a>
            ))}
            <Link to="/login" onClick={toggleMenu}>
              Log in
            </Link>

            <Link to="/signup" onClick={toggleMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
