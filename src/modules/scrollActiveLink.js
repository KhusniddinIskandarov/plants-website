/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
export function initActiveLink() {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.nav-link')

  window.addEventListener('scroll', () => {
    let current = 'home'
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (window.scrollY >= sectionTop - 60) {
        current = section.getAttribute('id')
      }
    })

    navLinks.forEach((item) => {
      item.classList.remove('active')
      if (item.href.includes(current)) {
        item.classList.add('active')
      }
    })
  })
}
