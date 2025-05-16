import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaGlobe, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section className="bg-[#292F36] py-[150px] pt-[204px] px-4 sm:px-10 lg:px-32 flex flex-wrap justify-center items-center relative text-left">
      {/* Profile Card */}
      <div className="bg-[#1A1E23] border-l-4 border-[#12F7D6] rounded-[20px] p-8 w-[360px] text-center shadow-[0_4px_10px_rgba(0,0,0,0.5)] mb-10 lg:mb-0 lg:mr-10">
      <img src="/src/assets/profile.png" alt="Zain-Arif" className="w-[90px] h-[90px] rounded-full mx-auto mb-4" />
        <p className="text-[#bbb] text-base pt-2">Front-End Developer</p>
        <ul className="text-[#aaa] text-[15px] mt-4 space-y-2">
          <li className="flex items-center justify-center gap-2"><FaEnvelope className="text-[#12F7D6]" /> arifzain249@gmail.com</li>
          <li className="flex items-center justify-center gap-2"><FaMapMarkerAlt className="text-[#12F7D6]" /> Pakistan</li>
          <li className="flex items-center justify-center gap-2"><FaBriefcase className="text-[#12F7D6]" /> Full-Time / Freelance</li>
          <li className="flex items-center justify-center gap-2">
            <FaGlobe className="text-[#12F7D6]" />
            <a href="https://www.linkedin.com/in/zain-arif-8a5302224" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>

        <div className="flex flex-wrap justify-center mt-4">
          {["HTML", "CSS", "JS", "REACT"].map(skill => (
            <span key={skill} className="bg-[#292F36] border border-[#12F7D6] text-[#12F7D6] text-sm px-3 py-1 m-1 rounded">{skill}</span>
          ))}
        </div>
        <a
          href="/cv/Zain_Arif_CV.pdf"
          download
          className="inline-block"
        >
          <button
            className="mt-4 bg-[#12F7D6] text-black text-[16px] px-5 py-2 rounded-full 
               hover:bg-[#0fdcc4] hover:scale-105 hover:-translate-y-1 
               transition duration-300 ease-in-out transform shadow-md"
          >
            Download CV
          </button>
        </a>
      </div>

      {/* Hero Text */}
      <div className="max-w-[800px] text-white">
        <p className="font-mono text-[#12F7D6] text-base">&lt;h1&gt;</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-snug ml-4">
          Hey, I’m <span className="text-[#12F7D6]">Zain Arif</span>,<br />
          Front-End Developer
        </h1>
        <p className="font-mono text-[#12F7D6] text-base">&lt;/h1&gt;</p>
        <p className="font-mono text-[#12F7D6] text-base mt-4">&lt;p&gt;</p>
        <p className="text-[#ccc] text-lg ml-5 mt-3 mb-6">
          I help businesses grow by crafting amazing web experiences. <br />
          If you’re looking for a developer who gets things done — let’s connect.
        </p>
        <p className="font-mono text-[#12F7D6] text-base">&lt;/p&gt;</p>
        <a href="mailto:arifzain249@gmail.com" className="ml-5 text-[#12F7D6] font-bold text-[1.9rem] inline-flex items-center gap-2 hover:text-[#0fdcc4] transition">
          Let’s Talk <FaEnvelope className="text-[#292F36] bg-[#12F7D6] p-3 rounded-full text-5xl hover:bg-[#0ec2b1] transition-transform transform hover:scale-110" />
        </a>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex flex-col gap-5 fixed left-5 top-1/2 transform -translate-y-1/2 z-10">
        <a href="https://github.com/Zain-Arif2" target="_blank" rel="noreferrer" className="text-white text-[24px] bg-[#20252b] p-3 rounded-full shadow-md hover:scale-110 hover:text-[#12F7D6] hover:bg-[#191c20] transition"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/zain-arif-8a5302224/" target="_blank" rel="noreferrer" className="text-white text-[24px] bg-[#20252b] p-3 rounded-full shadow-md hover:scale-110 hover:text-[#12F7D6] hover:bg-[#191c20] transition"><FaLinkedin /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white text-[24px] bg-[#20252b] p-3 rounded-full shadow-md hover:scale-110 hover:text-[#12F7D6] hover:bg-[#191c20] transition"><FaTwitter /></a>
        <a href="mailto:arifzain249@gmail.com" className="text-white text-[24px] bg-[#20252b] p-3 rounded-full shadow-md hover:scale-110 hover:text-[#12F7D6] hover:bg-[#191c20] transition"><FaEnvelope /></a>
      </div>
    </section>
  );
}

export default Hero;
