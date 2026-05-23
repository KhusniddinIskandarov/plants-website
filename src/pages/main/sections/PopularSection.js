import cart1 from '../../../assets/images/cart-1.webp'
import cart2 from '../../../assets/images/cart-2.webp'
import cart3 from '../../../assets/images/cart-3.webp'
import cart4 from '../../../assets/images/cart-4.webp'

export default function PopularSection() {
  return `
    <section id="popular" class="bg-green-900">
      <div class="popular__top flex flex-col items-center gap-3 text-center mb-40">
        <h2 class="title">Your Choice Plant</h2>
        <p class="text-lg max-w-2xl">Follow instruction for more</p>
      </div>
      <div class="container mx-auto w-full px-8 grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          ${PopularCard(cart1, 'Nephrolepis exaltata', 'Boston Fern')}
          ${PopularCard(cart2, 'Ficus elastica', 'Rubber Plant')}
          ${PopularCard(cart3, 'Spathiphyllum wallisii', 'Peace Lily')}
          ${PopularCard(cart4, 'Adenium obesum', 'Desert Rose')}
      </div>
    </section>
  `
}

function PopularCard(image, text, title) {
  return `
    <div class="popular__card bg-green-950 p-9 pt-28 rounded-md relative">
      <img
        src="${image}"
        alt="${title}"
        class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
        width="224"
        height="224"
        loading="lazy"
      />
      <p class="italic text-2xl mb-2">${text}</p>
      <h3>${title}</h3>
      <div class="text-yellow-500 py-3">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-fill"></i>
        <i class="ri-star-line text-gray-400"></i>
        <i class="ri-star-line text-gray-400"></i>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-2xl">$5</p>
        <button class="bg-yellow-500 px-2 py-1 rounded-sm text-2xl" aria-label="Add to cart">
          <i class="ri-shopping-cart-fill"></i>
        </button>
      </div>
    </div>
  `
}
