import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import AboutSection from './sections/AboutSection'
import PopularSection from './sections/PopularSection'

export function Index() {
  return `
    <main>
      ${HeroSection()}
      ${ServicesSection()}
      ${AboutSection()}
      ${PopularSection()}
    </main>
  `
}
