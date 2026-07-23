import React from 'react';
import { FaSearch, FaClipboardList, FaDraftingCompass, FaCode, FaVial, FaRocket, FaHeadset } from 'react-icons/fa';

const STEPS = [
  {
    step: "01",
    title: "Discovery & Alignment",
    description: "Deep dive into your business goals, target audience, technical requirements, and core KPIs before writing a single line of code.",
    icon: <FaSearch className="text-teal-400" />,
  },
  {
    step: "02",
    title: "Architecture & Planning",
    description: "Designing the database schema, selecting technical stack components, defining REST API contracts, and planning milestone deliverables.",
    icon: <FaClipboardList className="text-cyan-400" />,
  },
  {
    step: "03",
    title: "UI/UX & Design System",
    description: "Crafting modern, conversion-driven user interface components, responsive grid layouts, design tokens, and smooth micro-interactions.",
    icon: <FaDraftingCompass className="text-emerald-400" />,
  },
  {
    step: "04",
    title: "Full-Stack Development",
    description: "Engineering clean, modular Next.js/React frontend logic and Node.js/Express backend services following industry security standards.",
    icon: <FaCode className="text-teal-400" />,
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    description: "Conducting thorough cross-browser verification, responsive layout testing, performance audits, and API route validation.",
    icon: <FaVial className="text-cyan-400" />,
  },
  {
    step: "06",
    title: "Production Deployment",
    description: "Configuring production hosting (Vercel/Render), Docker containerization, custom domain SSL setup, and environment management.",
    icon: <FaRocket className="text-emerald-400" />,
  },
  {
    step: "07",
    title: "Ongoing Support & Growth",
    description: "Post-launch performance monitoring, feature enhancements, dependency updates, and continuous optimization.",
    icon: <FaHeadset className="text-teal-400" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-[#09090b] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-t border-white/5">
      
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px]" />

      <div className="mx-auto max-w-[1320px]">
        
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-3">
            Engineering Methodology
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            A structured workflow for predictable, high-quality results.
          </h2>
          <p className="text-muted text-base sm:text-lg mt-4 leading-relaxed">
            From initial business strategy to production deployment, every step is executed with precision and transparent communication.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-[24px] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl shadow-md hover:border-teal-500/40 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
                    STEP {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-teal-500/40 font-mono text-lg pointer-events-none">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
