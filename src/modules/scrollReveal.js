import ScrollReveal from 'scrollreveal'

export function initScrollReveal() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 300,
    reset: false,
    viewFactor: 0.7
  })

  sr.reveal(
    `.home__data, .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer__content, .copy__right, .newsletter__form`
  )
  sr.reveal(`.home__image`, { delay: 500, scale: 0.5 })
  sr.reveal(`.service__card, .popular__card`, { interval: 100 })
  sr.reveal(`.about__leaf`, { delay: 1000, origin: 'right' })
  sr.reveal(`.about__item__1-content, .about__item__2-img`, { origin: 'right' })
  sr.reveal(`.about__item__2-content, .about__item__1-img`, { origin: 'left' })
  sr.reveal(`.review__leaf, .footer__floral`, { delay: 1000, origin: 'left' })
}
