import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'
import AboutSection from './sections/AboutSection'

export function Index() {
  return `
    <main>
      ${HeroSection()}
      ${ServicesSection()}
      ${AboutSection()}
    </main>
  `
}
