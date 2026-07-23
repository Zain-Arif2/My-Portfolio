import React, { useState, useMemo } from "react";

// Inline Custom Clean SVGs for technologies without standard high-res CDN logos
const RESTApiIcon = () => (
  <svg className="w-10 h-10 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21M6.75 6.75h10.5a2.25 2.25 0 012.25 2.25v6.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 15.5v-6.5a2.25 2.25 0 012.25-2.25z" />
  </svg>
);

const MulterIcon = () => (
  <svg className="w-10 h-10 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
  </svg>
);

const OpenRouterIcon = () => (
  <svg className="w-10 h-10 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

const TECH_STACK = [
  // Frontend
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend", isCore: true },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend", className: "invert brightness-200", isCore: true },
  { name: "Tailwind CSS", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", category: "Frontend", isCore: true },
  { name: "Redux Toolkit", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", category: "Frontend" },
  { name: "React Router", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg", category: "Frontend" },

  // Backend
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend", isCore: true },
  { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Backend", className: "invert brightness-200", isCore: true },
  { name: "JWT Auth", src: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg", category: "Backend" },
  { name: "REST API", customSvg: <RESTApiIcon />, category: "Backend" },
  { name: "Multer", customSvg: <MulterIcon />, category: "Backend" },

  // Database
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database", isCore: true },
  { name: "Mongoose", src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png", category: "Database" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },

  // DevOps & Tools
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps & Tools", isCore: true },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "DevOps & Tools" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "DevOps & Tools", className: "invert brightness-200" },
  { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", category: "DevOps & Tools", className: "invert brightness-200", isCore: true },
  { name: "Railway", src: "https://railway.app/brand/logo-light.svg", category: "DevOps & Tools" },

  // Services & Integrations
  { name: "Stripe", src: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg", category: "Services & Integrations", isCore: true },
  { name: "Cloudinary", src: "https://res.cloudinary.com/cloudinary/image/upload/new_cloudinary_logo_square.png", category: "Services & Integrations", isCore: true },
  { name: "Resend", src: "https://svg.svgrepo.com/show/354262/resend.svg", category: "Services & Integrations", className: "invert brightness-200" },
  { name: "OpenRouter AI", customSvg: <OpenRouterIcon />, category: "Services & Integrations" },
];

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "DevOps & Tools", "Services & Integrations"];

const TechCard = React.memo(({ tech }) => (
  <div
    tabIndex={0}
    className="group relative rounded-[20px] border border-white/10 bg-white/[0.025] p-5 flex flex-col items-center justify-center backdrop-blur-xl shadow-md hover:border-teal-500/40 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
    aria-label={`${tech.name} - ${tech.category}`}
  >
    <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
      {tech.customSvg ? (
        tech.customSvg
      ) : (
        <img
          src={tech.src}
          alt={`${tech.name} logo`}
          className={`w-10 h-10 object-contain drop-shadow-md ${tech.className || ""}`}
          loading="lazy"
          decoding="async"
          width={40}
          height={40}
        />
      )}
    </div>
    <span className="font-display font-semibold text-sm text-ink group-hover:text-teal-300 transition-colors text-center">
      {tech.name}
    </span>
    <span className="text-[10px] font-mono text-muted-dim mt-1 uppercase tracking-wider text-center">
      {tech.category}
    </span>
  </div>
));

TechCard.displayName = "TechCard";

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech = useMemo(() => {
    if (activeCategory === "All") {
      return TECH_STACK.filter((tech) => tech.isCore);
    }
    return TECH_STACK.filter((tech) => tech.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="techstack" className="relative bg-[#09090b] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-t border-white/5">
      <div className="mx-auto max-w-[1320px] text-center">
        
        <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-3">
          Technical Stack
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
          Modern tools &amp; frameworks I engineer with.
        </h2>
        <p className="text-muted text-base sm:text-lg mt-4 max-w-[620px] mx-auto leading-relaxed">
          I leverage a complete full-stack JavaScript ecosystem to build fast, scalable SaaS platforms, APIs, and modern web applications.
        </p>

        {/* Filter Category Tabs */}
        <div 
          role="tablist" 
          aria-label="Filter technologies by category"
          className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-12"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                aria-controls="tech-grid"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                  isActive
                    ? "bg-teal-500/20 border border-teal-400 text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.2)]"
                    : "bg-white/5 border border-white/10 text-muted hover:text-ink hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div 
          id="tech-grid"
          role="tabpanel"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-[1100px] mx-auto"
        >
          {filteredTech.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>

      </div>
    </section>
  );
}