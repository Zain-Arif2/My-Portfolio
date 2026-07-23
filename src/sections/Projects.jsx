import React from "react";
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaCheck } from "react-icons/fa";
import whitespaceImg from '/images/Whitespace.png';
import weatherImg from '/images/Weather.png';
import Netflix from '/images/netflix.png';
import project4Img from '/images/Nexcent.png';
import project5Img from '/images/Portfolio.png';

const projects = [
  {
    title: "ChronoLux — Luxury Watch E-Commerce Platform",
    subtitle: "Full-Stack E-Commerce & Payment Engine",
    description: "A full-stack e-commerce platform built with the MERN stack featuring JWT authentication, product search, filtering, pagination, cart, wishlist, and integrated Stripe payments. Uses Redux Toolkit + RTK Query on the frontend, with Multer and Cloudinary for media handling.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit", "Stripe", "Cloudinary"],
    image: null,
    link: null,
    github: null,
    highlight: "Enterprise MERN Architecture",
  },
  {
    title: "AI Resume Builder & ATS Scanner",
    subtitle: "SaaS Platform & AI Content Generator",
    description: "An AI-powered resume builder built with the MERN stack and OpenRouter API integration for automated resume generation, ATS compatibility analysis, and cover letter creation. Includes Stripe payments with credit-based usage, PDF export, version history, and public sharing.",
    tech: ["MERN Stack", "OpenAI API", "Stripe Credits", "Tailwind CSS", "PDF Generation"],
    image: null,
    link: null,
    github: null,
    highlight: "AI API & Credit Monetization",
  },
  {
    title: "Whitespace Minimalist UI Platform",
    subtitle: "Frontend Component & Design System Showcase",
    description: "A sleek, minimalistic website built with React and plain CSS, focusing on high-speed rendering, responsive layouts, and clean typographic hierarchy.",
    tech: ["React", "CSS3", "Vite", "Responsive Layout"],
    image: whitespaceImg,
    link: "https://whitespace-ui.vercel.app/",
    github: "https://github.com/Zain-Arif2/whitespace-UI",
    highlight: "98+ Lighthouse Speed",
  },
  {
    title: "Real-Time Weather Intelligence App",
    subtitle: "Dynamic Weather & Forecast Dashboard",
    description: "A responsive weather application built with React and Tailwind CSS that fetches live weather metrics, hourly forecasts, and environmental indicators via REST APIs.",
    tech: ["React", "Tailwind CSS", "OpenWeather API", "REST API"],
    image: weatherImg,
    link: "https://weather-app-mu-wine.vercel.app/",
    github: "https://github.com/Zain-Arif2/Weather-App",
    highlight: "Live Data Integration",
  },
  {
    title: "Netflix Authentication & UI Replication",
    subtitle: "High-Fidelity Interface Clone",
    description: "A high-fidelity Netflix login and authentication interface clone crafted with React and CSS3, demonstrating custom design replication and form validation controls.",
    tech: ["React", "Custom CSS", "Form Validation", "UI Replication"],
    image: Netflix,
    link: "https://netflix-login-clone-hcgfsvkz8-zain-arifs-projects.vercel.app/",
    github: "https://github.com/Zain-Arif2/Netflix-Login-Clone",
    highlight: "Pixel-Perfect Replica",
  },
  {
    title: "Nexcent Digital Agency Platform",
    subtitle: "High-Converting Agency Website",
    description: "A fast, responsive digital agency website built with Vite, React, and Tailwind CSS designed to showcase services, client testimonials, and business solutions.",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    image: project4Img,
    link: "https://agency-website-q8c3c4fw8-zain-arifs-projects.vercel.app/",
    github: "https://github.com/Zain-Arif2/Agency-Website",
    highlight: "Conversion Focused",
  },
  {
    title: "Personal Studio Portfolio",
    subtitle: "Developer & Studio Showcase",
    description: "A clean, responsive portfolio website built with React and CSS highlighting full-stack projects, core technical stack, and software engineering capabilities.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    image: project5Img,
    link: "https://portfolio-website-gray-theta.vercel.app/",
    github: "https://github.com/Zain-Arif2/Portfolio-Website",
    highlight: "Production Showcase",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#09090b] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-t border-white/5">
      
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px]" />

      <div className="mx-auto max-w-[1320px]">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-[700px] text-left">
            <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-3">Portfolio &amp; Case Studies</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Featured engineering work &amp; production platforms.
            </h2>
            <p className="text-muted text-base sm:text-lg mt-4 leading-relaxed">
              A curated selection of full-stack platforms, SaaS tools, and business applications engineered for performance, scale, and user engagement.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            7 Projects Showcase
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-[28px] border border-white/10 bg-white/[0.025] overflow-hidden backdrop-blur-xl shadow-xl hover:border-teal-500/40 hover:bg-white/[0.04] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Browser Header & Mockup Preview */}
              <div>
                <div className="bg-[#111827]/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-dim tracking-wider uppercase">
                    {project.highlight}
                  </span>
                </div>

                {project.image ? (
                  <div className="relative overflow-hidden aspect-video bg-[#09090b]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                ) : (
                  <div className="aspect-video w-full flex flex-col items-center justify-center bg-white/[0.02] text-muted border-b border-white/5 p-6 text-center">
                    <FaLaptopCode className="text-3xl text-teal-400/60 mb-2" />
                    <p className="font-display font-medium text-sm text-ink">Production MERN Architecture</p>
                    <p className="text-xs text-muted-dim mt-1 font-mono">Live Demo / Repository Private</p>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <span className="text-[11px] font-mono text-teal-400 uppercase tracking-wider block mb-1">
                    {project.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-xl text-ink group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mt-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Footer Tech Tags & Links */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono text-muted bg-white/5 border border-white/10 rounded-md px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(project.link || project.github) ? (
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300 hover:text-teal-200 transition-colors"
                      >
                        Live Platform <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    ) : (
                      <span className="text-xs text-muted-dim">Enterprise Project</span>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink transition-colors"
                      >
                        <FaGithub className="text-sm" /> Code
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-muted-dim font-mono">
                    <span className="flex items-center gap-1"><FaCheck className="text-teal-400 text-[10px]" /> Verified Architecture</span>
                    <span>Client Project</span>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}