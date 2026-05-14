import { Header } from './Header'
import { Footer } from './Footer'
import { Index } from '../pages/main/Index'

export function MainLayout() {
  return `
  ${Header()}
  ${Index()}
  ${Footer()}
  `
}
