/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
export function initScrollHeader() {
  const header = document.getElementById('navbar')
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
      header.classList.add('border-b', 'border-yellow-500')
    } else {
      header.classList.remove('border-b', 'border-yellow-500')
    }
  })
}
