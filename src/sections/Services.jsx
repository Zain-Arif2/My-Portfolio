import React, { memo } from 'react';

const SERVICES_DATA = [
  {
    title: 'Full-Stack Web Engineering',
    description: 'End-to-end development of custom SaaS applications, internal tools, and client platforms built with modern full-stack JavaScript.',
    tech: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB'],
    outcome: 'Turn product requirements into reliable, scalable applications.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Frontend Product Development',
    description: 'Responsive, accessible, and fast web interfaces designed with reusable component systems and clean user experiences.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Redux Toolkit'],
    outcome: 'Deliver polished, intuitive user interfaces across all devices.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'REST APIs & Service Integrations',
    description: 'Structured RESTful API endpoints, secure JWT authentication flows, file upload processing, and third-party API integrations.',
    tech: ['Node.js', 'Express.js', 'JWT', 'Stripe', 'Resend'],
    outcome: 'Build secure, maintainable backend services and workflows.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 002 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Database Design & Schema Modeling',
    description: 'Well-structured relational and document database architectures, schema validation, and efficient data queries.',
    tech: ['MongoDB', 'Mongoose', 'MySQL', 'Node.js'],
    outcome: 'Ensure consistent data structure, accuracy, and retrieval.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: 'Containerization & Cloud Deployment',
    description: 'Setting up containerized environments with Docker, version control workflows, and automated deployments on modern platforms.',
    tech: ['Docker', 'Git', 'Vercel', 'Railway'],
    outcome: 'Streamline environment setups and production deployments.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Media Handling & Third-Party APIs',
    description: 'Integrating file uploads, cloud asset management, AI model endpoints via OpenRouter, and transactional services into your stack.',
    tech: ['Multer', 'Cloudinary', 'OpenRouter', 'Stripe'],
    outcome: 'Extend application capabilities with robust external integrations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const ServiceCard = memo(({ service }) => (
  <div
    tabIndex={0}
    className="group relative rounded-[24px] border border-white/10 bg-white/[0.025] p-8 backdrop-blur-md shadow-lg
      hover:border-teal-500/40 hover:bg-white/[0.05] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-teal-400 transform-gpu"
  >
    <div>
      <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
        {service.icon}
      </div>
      <h3 className="font-display font-bold text-xl text-ink mt-6 group-hover:text-teal-300 transition-colors">
        {service.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mt-3">{service.description}</p>
    </div>

    <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
      <p className="text-xs text-teal-400/90 font-mono font-medium flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
        {service.outcome}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {service.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono text-muted bg-white/5 border border-white/10 rounded-md px-2.5 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

const Services = () => {
  return (
    <section id="services" className="relative bg-[#09090b] py-24 sm:py-32 px-4 sm:px-8 lg:px-16 border-t border-white/5 overflow-hidden">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] transform-gpu" />

      <div className="mx-auto max-w-[1320px] relative z-10">
        {/* Header */}
        <div className="max-w-[700px] text-left">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-3">Capabilities</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Services focused on code quality, performance, &amp; maintainability.
          </h2>
          <p className="text-muted text-base sm:text-lg mt-4 leading-relaxed">
            I help startups and product teams turn technical requirements into production-ready web applications using modern full-stack tools.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);