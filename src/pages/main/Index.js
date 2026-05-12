import HeroSection from './sections/HeroSection'
import ServicesSection from './sections/ServicesSection'

export function Index() {
  return `
    <main>
      ${HeroSection()}
      ${ServicesSection()}
    </main>
  `
}
