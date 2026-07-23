import React from 'react'
import Home from './sections/Home'
import AboutMe from './sections/Aboutme'
import Services from './sections/Services'
import Process from './components/Process'
import Projects from './sections/Projects'
import TechStack from './sections/Techstack'
import Testimonials from './components/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-[#09090b] text-[#f4f4f6] font-body selection:bg-teal-500/30 selection:text-white">
      <Home />
      <AboutMe />
      <Services />
      <Projects />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  )
}

export default App