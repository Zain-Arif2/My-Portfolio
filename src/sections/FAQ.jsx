import React, { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    q: "What services do you offer?",
    a: "I specialize in building full-stack web applications, custom SaaS MVPs, and responsive frontends. I work with React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS to build reliable, maintainable software.",
  },
  {
    q: "Do you handle both frontend and backend development?",
    a: "Yes. I work across the full JavaScript stack. I can design responsive user interfaces, build RESTful APIs, set up authentication flows, structure database schemas, and integrate third-party services like Stripe or Cloudinary.",
  },
  {
    q: "Can you work on an existing project or codebase?",
    a: "Yes. I can join existing projects to implement new features, fix bugs, optimize UI responsiveness, or refactor legacy code to improve performance and maintainability.",
  },
  {
    q: "What technologies do you use?",
    a: "My core stack includes React, Next.js, JavaScript, Tailwind CSS, and Redux Toolkit on the frontend. On the backend, I use Node.js, Express, MongoDB (Mongoose), and MySQL. For deployments, I use Docker, Vercel, and Railway.",
  },
  {
    q: "How do you handle remote communication and time zones?",
    a: "I communicate clearly via Slack, Email, or GitHub. I ensure consistent progress updates and schedule asynchronous updates or calls to align with your team’s preferred working hours.",
  },
  {
    q: "How can we start working together?",
    a: "You can reach out through the contact form with details about your project or required features. I’ll review your requirements and reply promptly so we can discuss the scope and next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative bg-[#09090b] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-t border-white/5">
      
      {/* Background Lighting */}
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-80 h-80 bg-teal-500/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-[900px]">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-base sm:text-lg mt-4 max-w-[580px] mx-auto leading-relaxed">
            Answers to common questions about my technical background, development workflow, and collaboration options.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-[20px] border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                  open
                    ? "border-teal-500/40 bg-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <FaQuestionCircle className={`text-base shrink-0 transition-colors ${open ? "text-teal-400" : "text-muted-dim"}`} />
                    <span className="font-display font-semibold text-ink text-base sm:text-lg">{item.q}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                    open ? "border-teal-500/40 bg-teal-500/10 text-teal-400 rotate-180" : "border-white/10 text-muted"
                  }`}>
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted text-sm sm:text-base leading-relaxed px-6 pb-6 pt-1 border-t border-white/5 ml-7">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}