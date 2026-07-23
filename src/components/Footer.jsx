import React from "react";
import { FaInstagram, FaDiscord, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import logo from "/images/logo.png";

const socialIcons = [
  { icon: <FaGithub />, link: "https://github.com/Zain-Arif2", label: "Visit Zain Arif's GitHub Profile" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/zain-arif-8a5302224/", label: "Visit Zain Arif's LinkedIn Profile" },
  { icon: <FaInstagram />, link: "#", label: "Visit Zain Arif's Instagram Profile" },
  { icon: <FaDiscord />, link: "#", label: "Connect with Zain Arif on Discord" },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#09090b] text-muted py-12 px-4 sm:px-8">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10">
        
        {/* Top Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <a href="#home" className="flex items-center gap-3 group">
            <img src={logo} alt="Zain Arif Logo" className="w-9 h-9 object-contain" />
            <div className="text-left">
              <span className="font-display font-bold text-ink text-base tracking-tight block">
                Zain Arif
              </span>
              <span className="text-[10px] font-mono text-teal-400 tracking-wider uppercase block">
                Full-Stack Developer
              </span>
            </div>
          </a>

          <nav className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-teal-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center gap-2 text-xs font-mono text-teal-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 hover:border-teal-500/40 transition-all duration-300 cursor-pointer"
          >
            Back to Top <FaArrowUp className="text-[10px]" />
          </button>
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Zain Arif. Built for real-world web applications.</p>

          <div className="flex gap-4 font-mono text-[11px]">
            <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
          </div>

          <div className="flex items-center gap-4">
            {socialIcons.map(({ icon, link, label }, index) => (
              <a
                key={index}
                href={link}
                aria-label={label}
                target={link.startsWith("http") ? "_blank" : undefined}
                rel={link.startsWith("http") ? "noreferrer" : undefined}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-teal-300 hover:border-teal-400/40 hover:bg-white/10 transition-all duration-200 text-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;