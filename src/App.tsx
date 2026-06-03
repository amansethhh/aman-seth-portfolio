import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import TechStackSection from './sections/TechStackSection'
import ExperienceSection from './sections/ExperienceSection'

import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const App = () => {
  return (
    <div className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />

      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
