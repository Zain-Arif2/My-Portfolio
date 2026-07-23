import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaGlobe, FaEnvelope, FaArrowRight, FaCheckCircle, FaStar, FaLinkedin, FaGithub } from 'react-icons/fa';
import ProfileImg from "/images/profile.png";
import Switch from './switch';
import Button from './ui/Button';

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#09090b] pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-14">

      {/* Subtle Glow - US/UK Agency Style */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[500px] rounded-full bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-emerald-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">

        {/* Hero Copy Column */}
        <div className="w-full lg:max-w-[700px] text-left order-2 lg:order-1">

          {/* High-End Agency Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 mb-7 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
            </span>
           <span className="text-xs font-mono font-medium text-teal-300 tracking-wider uppercase">
  Full-Stack Software Engineer • Available for Freelance & Contract Work
</span>
          </div>

          {/* Client-Centric Headline */}
         <h1 className="font-display font-bold leading-[1.12] text-3xl sm:text-5xl lg:text-[3.35rem] text-ink tracking-tight">
  Building modern <span className="text-gradient-accent">SaaS products</span> and scalable web applications with React, Next.js &amp; Node.js.
</h1>

          {/* Clear Value Proposition */}
         <p className="text-muted text-base sm:text-lg leading-relaxed mt-5 max-w-[620px]">
  I help startups, agencies, and businesses build fast, scalable, and maintainable web applications with React, Next.js, Node.js, and MongoDB. My focus is clean architecture, performance, and long-term maintainability.
</p>

          {/* Enterprise Value Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 max-w-[640px]">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-ink font-medium">
              <FaCheckCircle className="text-teal-400 shrink-0 text-sm" /> Performance Focused
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-ink font-medium">
              <FaCheckCircle className="text-teal-400 shrink-0 text-sm" /> Clean Architecture
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-ink font-medium">
              <FaCheckCircle className="text-teal-400 shrink-0 text-sm" /> Scalable Solutions
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <Button href="#contact" variant="primary" size="lg" icon={<FaArrowRight />}>
              Let's Work Together
            </Button>
            <Button href="#projects" variant="secondary" size="lg">
              View Recent Projects
            </Button>
          </div>

   

        </div>

        {/* Studio Profile Card */}
        <div className="order-1 lg:order-2 w-full max-w-[360px] shrink-0">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 text-center group hover:border-teal-500/30 transition-all duration-300 shadow-2xl">
            
            <div className="relative inline-block mb-4">
              <img
                src={ProfileImg}
                alt="Zain Arif - MERN Stack & Next.js Developer"
                className="w-24 h-24 rounded-2xl object-cover mx-auto ring-2 ring-teal-400/40 shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-teal-400 border-2 border-[#09090b] flex items-center justify-center text-[10px] text-[#09090b] font-bold">
                ✓
              </span>
            </div>

            <h3 className="font-display font-bold text-ink text-xl">Zain Arif</h3>
            <p className="text-teal-400 text-xs font-mono mt-1 font-semibold uppercase tracking-wider">
            MERN Stack & Next.js Developer
            </p>

            {/* High-End Professional Details */}
            <div className="my-5 py-4 border-y border-white/10 text-left space-y-3 text-xs text-muted">
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-teal-400 shrink-0 text-sm" />
                <a href="mailto:arifzain249@gmail.com" className="text-ink hover:text-teal-400 transition-colors truncate">
                  arifzain249@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FaGlobe className="text-teal-400 shrink-0 text-sm" />
                <span>Available Worldwide</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaBriefcase className="text-teal-400 shrink-0 text-sm" />
                <span>Available for Freelance & Contract Work</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaLinkedin className="text-teal-400 shrink-0 text-sm" />
                <a
                  href="https://www.linkedin.com/in/zain-arif-8a5302224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-teal-400 underline decoration-teal-500/30 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2.5">
  <FaGithub className="text-teal-400 shrink-0 text-sm" />
  <a
    href="https://github.com/Zain-Arif2"
    target="_blank"
    rel="noopener noreferrer"
    className="text-ink hover:text-teal-400 underline decoration-teal-500/30 transition-colors"
  >
    GitHub Profile
  </a>
</div>
            </div>

            {/* Core Tech Stack */}
            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              {[
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS"
].map((skill) => (
                <span
                  key={skill}
                  className="bg-white/5 border border-white/10 text-slate-300 text-[10px] px-2.5 py-1 rounded-md font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CV Action */}
            <div className="flex justify-center pt-1 border-t border-white/5">
              <Switch downloadLink="/cv/Zain_Arif_CV.pdf" />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;