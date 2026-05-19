// ReviewSection.js (Optimized)

import review1 from '../../../assets/images/review-1.webp'

import review2 from '../../../assets/images/review-2.webp'
import review3 from '../../../assets/images/review-3.webp'
import review4 from '../../../assets/images/review-4.webp'
import leaf4 from '../../../assets/images/leaf-4.webp'

export default function ReviewSection() {
  return `
    <section id="review" class="relative mb-20 md:mb-28 overflow-hidden">

      <!-- Leaf decoration image -->
      <div class="review__leaf absolute -top-8 -left-12 opacity-50">
        <img
          src="${leaf4}"
          alt="leaf_image"
          class="w-40 md:w-56 xl:w-64"
          loading="lazy"
        />
      </div>

      <!-- Section header -->
      <div class="review__top flex flex-col items-center gap-3 text-center mb-10 md:mb-15">
        <h2 class="title">Customer Review</h2>
        <p class="text-max-w-2xl">Follow instruction for more</p>
      </div>

      <!-- Review cards swiper -->
      <div class="review__swiper container mx-auto px-8">
        <div class="swiper py-12">
          <ul class="swiper-wrapper">
            ${ReviewCard(review1)}
            ${ReviewCard(review2)}
            ${ReviewCard(review3)}
            ${ReviewCard(review4)}
          </ul>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  `
}

// ReviewCard function with lazy load
function ReviewCard(image) {
  return `
    <li class="swiper-slide">
      <div class="flex flex-col gap-5 bg-green-900 rounded-md p-6">
        <p class="font-[Lobster]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique culpa ut amet voluptas asperiores alias sed consequatur.
        </p>
        <div class="flex items-center">
          <!-- Avatar image with lazy load -->
          <img
            src="${image}"
            alt="review_image"
            class="w-14 h-14 rounded-full"
            loading="lazy"
          />
          <div class="ml-2.5">
            <p class="text-yellow-500 uppercase text-xl">John Doe</p>
            <p class="text-lg">Designer</p>
          </div>
          <i class="ri-double-quotes-r text-4xl ml-auto"></i>
        </div>
      </div>
    </li>
  `
}
