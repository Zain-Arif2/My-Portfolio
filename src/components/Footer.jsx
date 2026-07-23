import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaDiscord } from "@react-icons/all-files/fa/FaDiscord";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import logo from "/images/logo.png";

const socialIcons = [
  { icon: <FaGithub />, link: "https://github.com/Zain-Arif2", label: "GitHub" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/zain-arif-8a5302224/", label: "LinkedIn" },
  { icon: <FaInstagram />, link: "#", label: "Instagram" },
  { icon: <FaDiscord />, link: "#", label: "Discord" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#09090b] text-muted py-8 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/5">
          {/* Identity */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Zain Arif Logo" 
              width="32"
              height="32"
              loading="lazy"
              decoding="async"
              className="w-8 h-8 object-contain" 
            />
            <div className="text-left">
              <span className="font-display font-semibold text-ink text-base block leading-none">
                Zain Arif
              </span>
              <span className="text-[11px] text-teal-400 font-mono mt-1 block">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center gap-2 text-xs font-mono text-muted hover:text-teal-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-teal-400/30 transition-all duration-200 cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[10px] text-teal-400" />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Zain Arif. All rights reserved.</p>

          {/* Legal Links */}
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <Link to="/privacy-policy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms-of-service" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialIcons.map(({ icon, link, label }) => (
              <a
                key={label}
                href={link}
                aria-label={label}
                target={link.startsWith("http") ? "_blank" : undefined}
                rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-teal-400 hover:border-teal-400/40 hover:bg-white/10 transition-all duration-200 text-sm"
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

export default memo(Footer);