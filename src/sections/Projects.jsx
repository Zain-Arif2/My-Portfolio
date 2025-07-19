import { FaGithub } from "react-icons/fa";
import whitespaceImg from '/images/Whitespace.png';
import weatherImg from '/images/Weather.png';
import Netflix from '/images/netflix.png';
import project4Img from '/images/Nexcent.png';
import project5Img from '/images/Portfolio.png';
// import project6Img from '/images/project6.png'; // Replace with actual image path

const projects = [
  {
    title: "Whitespace Website",
    description: "A minimalistic website built with React and plain CSS, focusing on clean design and efficient performance.",
    image: whitespaceImg,
    link: "https://whitespace-ui.vercel.app/",
    github: "https://github.com/Zain-Arif2/whitespace-UI",
  },
  {
    title: "Weather App",
    description: "A responsive weather app built with React and Tailwind CSS that fetches real-time weather data, showcasing API integration and modern UI design skills.",
    image: weatherImg,
    link: "https://weather-app-mu-wine.vercel.app/",
    github: "https://github.com/Zain-Arif2/Weather-App",
  },
  {
    title: "Netflix login Clone",
    description: "A Netflix login page clone built with React and plain CSS, showcasing responsive layout and custom UI replication for portfolio use.",
    image: Netflix,
    link: "https://netflix-login-clone-hcgfsvkz8-zain-arifs-projects.vercel.app/",
    github: "https://github.com/Zain-Arif2/Netflix-Login-Clone",
  },
  {
    title: "Agency Website",
    description: "A fast, responsive agency website built with Vite, React, and Tailwind CSS to showcase services, clients, and impactful solutions.",
    image: project4Img,
    link: "https://agency-website-q8c3c4fw8-zain-arifs-projects.vercel.app/",
    github: "https://github.com/Zain-Arif2/Agency-Website",
  },
  {
    title: "Portfolio Website",
    description: "A clean and responsive portfolio website built with React and plain CSS to highlight projects, skills, and personal achievements.",
    image: project5Img,
    link: "https://portfolio-website-gray-theta.vercel.app/",
    github: "https://github.com/Zain-Arif2/Portfolio-Website",
  },
  {
    title: "Project 6",
    description: "Description of Project 6.",
    // image: project6Img,
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section
    id="projects"
    className="bg-[#1A1E23] text-white pt-[60px] pb-[60px] sm:pt-[150px] sm:pb-[150px] px-4 sm:px-6 lg:px-38"
  >
  
  <div className="text-center mb-12 px-4 sm:px-6 lg:px-0">
  <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#12F7D6] font-bold">
    My Projects
  </h2>
  <p className="text-white mt-2 text-base sm:text-lg lg:text-xl">
    Things I've built so far
  </p>
</div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#292F36] rounded-2xl p-4 shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold underline underline-offset-4">{project.title}</h3>
            <p className="mt-2 text-base text-gray-300">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white"
              >
                View Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
