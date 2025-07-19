import React, { useState, useEffect } from "react";
import logo from "/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-[1002] w-[95%] max-w-[1115px] flex items-center justify-between py-4 px-4 w-full backdrop-blur-lg transition-colors duration-300 ${
          isScrolled ? "bg-[rgba(41,47,54,0.8)]"  : "bg-[rgba(41,47,54,0.6)]" 
        }`}
      >
        <a href="#home">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        </a>

        <div
          className="flex-col gap-[5px] cursor-pointer z-[1004] hidden max-[1024px]:flex"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-[26px] h-[3px] bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-[26px] h-[3px] bg-white rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[26px] h-[3px] bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </div>

        <nav
          className={`flex gap-10 max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:right-0 max-[1024px]:h-screen max-[1024px]:w-full max-[1024px]:bg-[rgba(41,47,54,0.95)] max-[1024px]:backdrop-blur-lg max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:items-center max-[1024px]:gap-8 transform transition-transform duration-300 z-[1003] ${
            menuOpen ? "max-[1024px]:translate-x-0" : "max-[1024px]:translate-x-full"
          }`}
        >
          {["Home", "About", "Tech Stack", "Projects", "Contact"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setMenuOpen(false)}
                className="relative text-white text-lg py-2 px-4 text-center hover:text-[#12f7d6] group"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#12f7d6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </nav>
      </header>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.4)] backdrop-blur-sm z-[1001]`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  );
};

export default Header;
