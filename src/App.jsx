import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// 1. Above-the-fold Critical Component (LCP & FCP Fast Build)
import Home from './sections/Home'

// 2. Below-the-fold Sections Lazy Loaded for Initial JS Bundle Reduction
const AboutMe = lazy(() => import('./sections/Aboutme'))
const Services = lazy(() => import('./sections/Services'))
const Projects = lazy(() => import('./sections/Projects'))
const TechStack = lazy(() => import('./sections/Techstack'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const FAQ = lazy(() => import('./sections/FAQ'))
const Contact = lazy(() => import('./sections/Contact'))

// 3. Secondary Pages Lazy Loading
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))

// Section Skeleton Fallback
const SectionFallback = () => <div className="min-h-[300px] bg-[#09090b]" />

function LandingPage() {
  return (
    <>
      {/* Home (Hero Section) immediately render hoga */}
      <Home />

      {/* Baaki sections lazy load honge jab JS parse ho jayegi */}
      <Suspense fallback={<SectionFallback />}>
        <AboutMe />
        <Services />
        <Projects />
        <TechStack />
        <Testimonials />
        <FAQ />
        <Contact />
      </Suspense>
    </>
  )
}

function App() {
  return (
    <div className="bg-[#09090b] text-[#f4f4f6] font-body selection:bg-teal-500/30 selection:text-white w-full overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen bg-[#09090b]" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;