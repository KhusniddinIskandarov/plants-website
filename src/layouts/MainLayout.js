import { Header } from './Header'
import { Footer } from './Footer'

export const MainLayout = () => {
  return `
  ${Header()}
  <main id="main">Main Content Here</main>
  ${Footer()}
  `
}
