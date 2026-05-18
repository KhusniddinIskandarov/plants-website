import './styles/main.css'
import { MainLayout } from './layouts/MainLayout'
import { initNavbarController } from './modules/navbarController'
import { initScrollHeader } from './modules/scrollHeader'
import { initActiveLink } from './modules/scrollActiveLink'
import { initScrollUp } from './modules/scrollUp.js'
import { initScrollReveal } from './modules/scrollReveal'
import { initSwiperModule } from './modules/swiper.module'

function initApp() {
  const app = document.querySelector('#app')

  if (!app) {
    console.error('#app element not found')
    return
  }

  app.innerHTML = MainLayout()

  initNavbarController()
  initScrollHeader()
  initActiveLink()
  initScrollUp()
  initScrollReveal()
  initSwiperModule()
}

window.addEventListener('DOMContentLoaded', initApp)
