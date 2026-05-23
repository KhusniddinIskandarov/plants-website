export async function initScrollReveal() {
  const run = async () => {
    const ScrollReveal = (await import('scrollreveal')).default

    const sr = ScrollReveal({
      origin: 'top',
      distance: '20px',
      duration: 550,
      delay: 0,
      reset: false,
      viewFactor: 0.12,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    })

    // batch reveal (less DOM calls)
    sr.reveal(`
      .home__data,
      .about__top,
      .popular__top,
      .review__top,
      .review__swiper,
      .footer__icon,
      .footer__content,
      .copy__right,
      .newsletter__form
    `)

    // hero image (LCP friendly)
    sr.reveal('.home__image', {
      distance: '12px',
      duration: 500
    })

    // cards
    sr.reveal('.service__card, .popular__card', {
      interval: 80
    })

    // decorative elements (low priority)
    sr.reveal('.about__leaf, .review__leaf, .footer__floral', {
      origin: 'left',
      delay: 250
    })

    // split directional animations
    sr.reveal(
      `
      .about__item__1-content,
      .about__item__2-img
    `,
      {
        origin: 'right',
        distance: '18px'
      }
    )

    sr.reveal(
      `
      .about__item__2-content,
      .about__item__1-img
    `,
      {
        origin: 'left',
        distance: '18px'
      }
    )
  }

  // better scheduler (idle first, fallback smoother)
  const schedule = (fn) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(fn, { timeout: 1000 })
    } else {
      setTimeout(fn, 1)
    }
  }

  schedule(run)
}
