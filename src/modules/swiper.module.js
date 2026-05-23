export async function initSwiperModule() {
  // DOM tayyor bo‘lishini kutamiz
  if (!document.querySelector('.swiper')) return

  // Swiperni FAZODA yuklaymiz (lazy import)
  const { default: Swiper } = await import('swiper')
  const { Pagination, Autoplay } = await import('swiper/modules')

  await import('swiper/css')
  await import('swiper/css/pagination')

  new Swiper('.swiper', {
    modules: [Pagination, Autoplay],

    speed: 350,
    spaceBetween: 20,

    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    grabCursor: true,

    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  })
}
