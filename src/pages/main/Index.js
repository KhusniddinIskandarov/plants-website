import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import AboutSection from './sections/AboutSection'
import PopularSection from './sections/PopularSection'
import ReviewSection from './sections/ReviewSection'

export function Index() {
  return `
    <main>
      ${HeroSection()}
      ${ServicesSection()}
      ${AboutSection()}
      ${PopularSection()}
      ${ReviewSection()}
    </main>
  `
}
