import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './sections/Home'
import AboutMe from './sections/Aboutme'
import Services from './sections/Services'
import Process from './components/Process'
import Projects from './sections/Projects'
import TechStack from './sections/Techstack'
import Testimonials from './components/Testimonials'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function LandingPage() {
  return (
    <>
      <Home />
      <AboutMe />
      <Services />
      <Projects />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="bg-[#09090b] text-[#f4f4f6] font-body selection:bg-teal-500/30 selection:text-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </div>
  )
}

export default App