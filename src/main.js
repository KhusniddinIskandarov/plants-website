import './styles/main.css'
import { MainLayout } from './layouts/MainLayout'

function initApp() {
  const app = document.querySelector('#app')

  if (!app) {
    console.error('#app element not found')
    return
  }

  app.innerHTML = MainLayout()
}

window.addEventListener('DOMContentLoaded', initApp)
