import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TESTIMONIALS = [
  {
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "VanceTech SaaS (United States)",
    text: "Zain built our entire Next.js dashboard and backend REST APIs from scratch. His attention to code quality, edge-case security, and clean responsive UI saved us months of rework. Truly an engineer you can trust with your product.",
    rating: 5,
    tag: "Full-Stack SaaS Build",
  },
  {
    name: "Elena Rostova",
    role: "Head of Product",
    company: "Apex Media Agency (United Kingdom)",
    text: "Working with Zain was one of the smoothest contract engagements we've had. He delivered our client portal early, communicated daily, and turned complex data requirements into an elegant user experience.",
    rating: 5,
    tag: "Agency Contract",
  },
  {
    name: "David Lindqvist",
    role: "Co-Founder",
    company: "Nordic Commerce (Sweden / EU)",
    text: "Extremely skilled MERN stack engineer. He set up our payment flows with Stripe, optimized performance scores to 98+, and ensured zero downtime during deployment. Highly recommended for international teams.",
    rating: 5,
    tag: "E-Commerce & Stripe",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#09090b] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-t border-white/5">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/5 rounded-full blur-[150px]" />

      <div className="mx-auto max-w-[1320px]">
        
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-3">
            Client Feedback &amp; Reviews
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Trusted by founders &amp; digital agencies worldwide.
          </h2>
          <p className="text-muted text-base sm:text-lg mt-4 leading-relaxed">
            Here is what startup leaders and product managers say about collaborating with Zain Arif Studio.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="relative rounded-[28px] border border-white/10 bg-white/[0.025] p-8 backdrop-blur-xl shadow-xl hover:border-teal-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <FaQuoteLeft className="text-teal-500/20 text-3xl mb-3" />

                <p className="text-ink text-sm sm:text-base leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="font-display font-bold text-base text-ink">
                  {item.name}
                </p>
                <p className="text-xs text-teal-400 font-medium mt-0.5">
                  {item.role}
                </p>
                <p className="text-xs text-muted-dim font-mono mt-0.5">
                  {item.company}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
