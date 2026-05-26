export async function initScrollReveal() {
  const run = async () => {
    const ScrollReveal = (await import('scrollreveal')).default

    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 1200,
      delay: 300,
      reset: false,
      viewFactor: 0.2,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    })

    sr.reveal(`
      .home__data,
      .about__top,
      .popular__top,
      .review__top,
      .review__swiper,
      .newsletter__form
    `)

    sr.reveal('.home__image', {
      distance: '12px',
      duration: 500
    })

    sr.reveal('.service__card, .popular__card', {
      interval: 80
    })

    sr.reveal('.about__leaf', {
      origin: 'right',
      delay: 250
    })

    sr.reveal('.review__leaf, .footer__floral', {
      origin: 'left',
      delay: 250,
      viewFactor: 0
    })

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

    // Footer — viewFactor: 0 qilingan
    sr.reveal('.footer__icon, .footer__content, .copy__right', {
      origin: 'top',
      distance: '60px',
      duration: 1200,
      delay: 300,
      viewFactor: 0
    })
  }

  const schedule = (fn) => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(fn, { timeout: 1000 })
    } else {
      setTimeout(fn, 1)
    }
  }

  schedule(run)
}
