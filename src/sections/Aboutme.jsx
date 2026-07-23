import React from "react";
import codingImage from "/images/Image.png";
import { FaGraduationCap, FaBriefcase, FaCode, FaRocket } from "react-icons/fa";

const timeline = [
  {
    period: "Nov 2020 – Jul 2022",
    title: "ICS (Computer Science)",
    place: "Kips College, Faisalabad",
    icon: <FaGraduationCap className="text-teal-400" />,
  },
  {
    period: "Oct 2022 – Jun 2026",
    title: "BS Software Engineering",
    place: "Riphah International University",
    icon: <FaGraduationCap className="text-teal-400" />,
  },
  {
    period: "Jul 2025 – Dec 2025",
    title: "Frontend Developer",
    place: "ESCASA, Faisalabad",
    icon: <FaBriefcase className="text-emerald-400" />,
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#09090b] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-t border-white/5">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Column — Storytelling */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight mb-6">
              Building web apps with clean code and modern tools.
            </h2>

            <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed">
              <p>
                I'm <span className="text-ink font-semibold">Zain Arif</span>, a Full-Stack Developer from Pakistan. I build fast, responsive web applications for startups, businesses, and agency clients.
              </p>
              <p>
                My main tech stack includes <span className="text-teal-300 font-medium">React, Next.js, Node.js, Express, and MongoDB</span>. I work across the entire stack—from creating smooth frontends to setting up secure backend APIs.
              </p>
              <p>
                I focus on writing clean, readable code and delivering practical software solutions that work smoothly in production.
              </p>
            </div>

            {/* Value Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left backdrop-blur-md">
                <FaCode className="text-teal-400 text-lg mb-2" />
                <p className="font-display font-bold text-xl text-ink">Full-Stack</p>
                <p className="text-muted text-xs font-mono mt-0.5">React &amp; Node.js</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left backdrop-blur-md">
                <FaRocket className="text-emerald-400 text-lg mb-2" />
                <p className="font-display font-bold text-xl text-ink">Backend</p>
                <p className="text-muted text-xs font-mono mt-0.5">REST APIs &amp; DBs</p>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left backdrop-blur-md">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse mb-2"></span>
                <p className="font-display font-bold text-xl text-ink">Remote</p>
                <p className="text-muted text-xs font-mono mt-0.5">Global Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column — Framed Work Image */}
          <div className="w-full lg:w-1/2 max-w-[540px]">
            <div className="relative rounded-[28px] border border-white/10 overflow-hidden bg-white/[0.02] p-3 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent pointer-events-none"></div>

              <img
                src={codingImage}
                alt="Zain Arif Engineering Workspace"
                loading="lazy"
                decoding="async"
                width="800"
                height="500"
                className="w-full h-auto rounded-[20px] object-cover group-hover:scale-[1.02] transition-transform duration-500 transform-gpu"
              />
            </div>
          </div>

        </div>

        {/* Career & Education Timeline */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-2">Background</p>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                Education &amp; Experience
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left hover:border-teal-500/30 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-teal-400 bg-teal-400/10 border border-teal-400/20 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                    {item.icon}
                  </div>
                  <h4 className="text-ink font-display font-semibold text-lg leading-snug mb-2">
                    {item.title}
                  </h4>
                </div>
                <p className="text-muted text-sm border-t border-white/5 pt-3 mt-4">
                  {item.place}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}