import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/logo.png";
import Button from "./ui/Button";
import { FaArrowRight, FaTimes } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Home", targetId: "home", path: "/" },
  { label: "About", targetId: "about", path: "/about" },
  { label: "Services", targetId: "services", path: "/services" },
  { label: "Projects", targetId: "projects", path: "/projects" },
  { label: "Contact", targetId: "contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Clean URL & Smooth Scroll Handler
  const handleNavClick = (e, targetId, path) => {
    // 1. Agar user kisi doosray page par hai (e.g. /privacy-policy), toh home page par navigate hone de
    if (location.pathname !== "/") {
      setMenuOpen(false);
      return;
    }

    // 2. Agar home page par hi hain, toh smooth scroll karein aur URL update karein bina '#' ke
    e.preventDefault();
    setMenuOpen(false);

    window.history.pushState({}, "", path);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300 ${
          scrolled ? "py-2 sm:py-3" : "py-3 sm:py-4"
        }`}
      >
        <div
          className={`mx-auto w-[92%] max-w-[1100px] flex items-center justify-between rounded-2xl transition-all duration-300 px-3.5 sm:px-6 ${
            scrolled
              ? "bg-[#09090b]/80 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2 sm:py-2.5"
              : "bg-[#09090b]/40 border border-white/5 backdrop-blur-md py-2.5 sm:py-3"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "home", "/")}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="relative p-1.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-teal-500/40 transition-colors shrink-0">
              <img src={logo} alt="Studio Logo" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-ink text-xs sm:text-sm tracking-tight group-hover:text-teal-400 transition-colors leading-tight">
                Zain Arif
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-muted tracking-wider uppercase">
               MERN Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.targetId, item.path)}
                className="relative text-xs xl:text-sm font-medium text-muted hover:text-ink transition-colors duration-200 group py-1"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<FaArrowRight className="text-xs" />}
              onClick={(e) => handleNavClick(e, "contact", "/contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile/Tablet Hamburger Toggle */}
          <button
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
            className="flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-xl bg-white/5 border border-white/10 lg:hidden cursor-pointer shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-4 h-[1.5px] bg-white rounded-full" />
            <span className="block w-4 h-[1.5px] bg-white rounded-full" />
            <span className="block w-4 h-[1.5px] bg-white rounded-full" />
          </button>
        </div>
      </header>

      {/* FULL SCREEN MOBILE DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 w-screen h-screen z-[9999] bg-[#09090b] flex flex-col justify-between p-6 transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top Header Inside Drawer */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-xl bg-white/5 border border-white/10">
              <img src={logo} alt="Zain Arif Logo" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-ink text-xs">Zain Arif</span>
              <span className="text-[8px] font-mono text-teal-400 uppercase">Software Studio</span>
            </div>
          </div>

          {/* Close Button */}
          <button
            aria-label="Close Navigation Menu"
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Links Center */}
        <nav className="flex flex-col gap-3 w-full my-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.targetId, item.path)}
              className="text-center text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors py-2.5 rounded-xl bg-white/[0.02] border border-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA Button */}
        <div className="w-full">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={(e) => handleNavClick(e, "contact", "/contact")}
          >
            Hire Me <FaArrowRight className="ml-1 text-xs" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;