import React from "react";
import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const socialIcons = [
  { icon: <FaInstagram />, link: "#", label: "Instagram" },
  { icon: <FaDiscord />, link: "#", label: "Discord" },
  { icon: <FaGithub />, link: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#43454D] bg-[#1A1E23] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2025 ZainArif. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms & Conditions</a>
        </div>

        <div className="flex gap-6">
          {socialIcons.map(({ icon, link, label }, index) => (
            <motion.a
              key={index}
              aria-label={label}
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className=" hover:text-[#12F7D6] text-xl transition"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
