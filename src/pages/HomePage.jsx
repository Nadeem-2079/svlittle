import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import SupportSection from '../components/SupportSection.jsx'
import AboutFounder from '../components/AboutFounder.jsx'
import Testimonials from '../components/Testimonials.jsx'
import ClinicGallery from '../components/ClinicGallery.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function HomePage() {
  return (
    <main style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw', position: 'relative' }}>
      <HeroSection />
      <ServicesGrid />
      <SupportSection />
      <ClinicGallery />
      <AboutFounder />
      <Testimonials />
      <ContactSection />
    </main>
  )
}
