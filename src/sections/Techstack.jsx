import React from "react";

// List of tech stack icons and alt texts
const techStack = [
  // First row (4)
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  

  // Second row (4) with Bootstrap added
  { src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code" },

  // Third row (4) Laravel, MySQL, NoSQL(MongoDB), Node.js
  { src: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg", alt: "Laravel" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
];

export default function TechStackSection() {
  return (
    <section
      id="techstack"
      className="
        bg-[#292F36] text-white text-center
        py-[60px] sm:py-[150px]
      "
    >
      <div className="mb-4 ml-5 text-teal-400 text-6xl sm:text-7xl md:text-8xl">
        &lt;/&gt;
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#12F7D6] font-bold mb-4">
        My Tech Stack
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10">
        Technologies I’ve been working with currently
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 px-6 max-w-5xl mx-auto">
        {techStack.map((tech, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-16 h-16 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
