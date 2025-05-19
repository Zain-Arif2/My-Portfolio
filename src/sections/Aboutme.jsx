import React from "react";
import codingImage from "/images/Image.png"; // Ensure the path is correct

export default function About() {
  return (
    <section
    id="about"
    className="bg-[#1A1E23] text-gray-300 px-4 py-[60px] md:px-[192px] md:py-[150px]"
  >
  
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">

        {/* Left Column */}
        <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold border-2 border-[#12F7D6] px-6 py-2 rounded-lg mb-6 text-center xl:text-left">
            About Me
          </h2>

          <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl text-sm leading-relaxed w-full">
            <p className="text-[#12F7D6] font-mono text-xs">&lt;p&gt;</p>

            <p className="text-[#12F7D6] font-bold text-lg sm:text-2xl mt-4 mb-2">Hello!</p>

            <p>
              My name is Zain and I specialize in web development that utilizes{" "}
              <span className="text-[#12F7D6] font-bold">HTML</span>,{" "}
              <span className="text-[#12F7D6] font-bold">CSS</span>,{" "}
              <span className="text-[#12F7D6] font-bold">JS</span>, and{" "}
              <span className="text-[#12F7D6] font-bold">REACT</span> etc.
            </p>

            <p className="mt-4">
              I am a highly motivated individual and eternal optimist dedicated to writing clear,
              concise, robust code that works. Striving to never stop learning and improving.
            </p>

            <p className="mt-4">
              When I'm not coding, I am <span className="text-[#12F7D6] font-bold">writing blogs</span>,
              reading, or picking up some new hands-on art project like{" "}
              <span className="text-[#12F7D6] font-bold">photography</span>.
            </p>

            <p className="mt-4">
              I like to have my perspective and belief systems challenged so that I see the world
              through new eyes.
            </p>

            <p className="text-[#12F7D6] font-mono text-xs mt-4">&lt;/p&gt;</p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full max-w-[500px]">
          <img
            src={codingImage}
            alt="Coding at desk"
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
