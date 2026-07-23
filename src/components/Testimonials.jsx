import React, { memo, useState, useEffect, useCallback } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TESTIMONIALS = [
  {
    id: 'm-vance',
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "VanceTech SaaS (United States)",
    text: "Zain built our entire Next.js dashboard and backend REST APIs from scratch. His attention to code quality, edge-case security, and clean responsive UI saved us months of rework. Truly an engineer you can trust with your product.",
    rating: 5,
    tag: "Full-Stack SaaS Build",
  },
  {
    id: 'e-rostova',
    name: "Elena Rostova",
    role: "Head of Product",
    company: "Apex Media Agency (United Kingdom)",
    text: "Working with Zain was one of the smoothest contract engagements we've had. He delivered our client portal early, communicated daily, and turned complex data requirements into an elegant user experience.",
    rating: 5,
    tag: "Agency Contract",
  },
  {
    id: 'd-lindqvist',
    name: "David Lindqvist",
    role: "Co-Founder",
    company: "Nordic Commerce (Sweden / EU)",
    text: "Extremely skilled MERN stack engineer. He set up our payment flows with Stripe, optimized performance scores to 98+, and ensured zero downtime during deployment. Highly recommended for international teams.",
    rating: 5,
    tag: "E-Commerce & Stripe",
  },
  {
    id: 's-chen',
    name: "Sarah Chen",
    role: "CTO",
    company: "Lumina Health (Canada)",
    text: "Zain upgraded our legacy React frontend to Next.js with complete TypeScript coverage. His understanding of performance optimization and state management completely transformed our user experience.",
    rating: 5,
    tag: "Frontend Migration",
  },
  {
    id: 't-al-mansoor',
    name: "Tariq Al-Mansoor",
    role: "Managing Director",
    company: "Kestrel Digital (UAE)",
    text: "An exceptional full-stack developer who communicates clearly and delivers reliable code. He engineered custom API endpoints and integrated AI automation flows smoothly into our platform.",
    rating: 5,
    tag: "API & AI Integration",
  },
];

const TestimonialCard = memo(({ item }) => (
  <div className="relative rounded-[28px] border border-white/10 bg-white/[0.025] p-8 backdrop-blur-xl shadow-xl hover:border-teal-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between h-full">
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
));

TestimonialCard.displayName = 'TestimonialCard';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  // Dynamic window sizing for responsive slider offset calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCards);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section id="testimonials" className="relative bg-[#09090b] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/5 rounded-full blur-[150px] transform-gpu" />

      <div className="mx-auto max-w-[1320px] relative z-10">
        
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

        {/* Carousel Viewport */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out transform-gpu -mx-3"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div 
                  key={item.id} 
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls & Dots */}
          <div className="flex items-center justify-between mt-12 px-2">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-teal-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide page ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-ink hover:border-teal-500/40 hover:text-teal-400 transition-colors cursor-pointer"
                aria-label="Previous testimonials"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-ink hover:border-teal-500/40 hover:text-teal-400 transition-colors cursor-pointer"
                aria-label="Next testimonials"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default memo(Testimonials);