export function initNavbarController() {
  const hamburger = document.getElementById('hamburger')
  const navMenu = document.getElementById('nav-menu')
  const navLink = document.querySelectorAll('.nav-link')

  if (!hamburger || !navMenu) {
    console.warn('NavbarController: element topilmadi')
    return
  }

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-0')
    hamburger.classList.toggle('ri-close-large-line')
  })

  navLink.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.toggle('left-0')
      hamburger.classList.toggle('ri-close-large-line')
    })
  })
}
