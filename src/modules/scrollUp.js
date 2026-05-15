export function initScrollUp() {
  const scrollUpBtn = document.getElementById('scroll-up')

  if (!scrollUpBtn) {
    console.warn('ScrollUp: element topilmadi')
    return
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 250) {
      scrollUpBtn.classList.remove('-bottom-1/2')
      scrollUpBtn.classList.add('bottom-4')
    } else {
      scrollUpBtn.classList.add('-bottom-1/2')
      scrollUpBtn.classList.remove('bottom-4')
    }
  })
}
