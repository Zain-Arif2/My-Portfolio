import React from "react";

// List of tech stack icons and alt texts
const techStack = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
  { src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
];

export default function TechStackSection() {
  return (
    <section
    id="techstack"
    className="
      bg-[#292F36] text-white text-center
      py-[60px]          /* mobile default */
      sm:py-[150px]      /* sm and up */
    "
  >
  
      <div className="mb-4 ml-5 text-teal-400 text-6xl sm:text-7xl md:text-8xl">&lt;/&gt;</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl text-[#12F7D6] font-bold mb-4">
  My Tech Stack
</h2>
<p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
  Technologies I’ve been working with currently
</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 px-6 max-w-4xl mx-auto">
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
