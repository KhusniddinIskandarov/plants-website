import plant1 from '../../../assets/images/plant-1.webp'
import plant2 from '../../../assets/images/plant-2.webp'
import leaf3 from '../../../assets/images/leaf-3.webp'

export default function AboutSection() {
  return `
    <section id="about" class="relative overflow-hidden">
      <div class="about__leaf absolute -top-8 -right-12 opacity-50">
        <img
          src="${leaf3}"
          alt="leaf_image"
          class="w-40 md:w-52 xl:w-64"
        />
      </div>
      <div
        class="about__top flex flex-col items-center gap-3 text-center mb-10 md:mb-15"
        >
        <h2 class="title">About Us</h2>
        <p class="text-max-w-2xl">Follow instruction for more</p>
      </div>
      <div class="container mx-auto space-y-10 xl:space-y-0 p-8">

        ${AboutItem(plant1, "Make your <span class='text-yellow-500'> organic </span> <br /> garden", false, 1)}
        ${AboutItem(plant2, "Come with us <br /> <span class='text-yellow-500'> grow up </span> your plant", true, 2)}

      </div>
    </section>
  `
}

function AboutItem(image, title, reverse, index) {
  return `
    <div class="flex flex-col items-center gap-5 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}">
      <div class="about__item__${index}-img about__item-img w-full lg:w-1/2">
        <img src="${image}" class="w-full sm:2/3 lg:w-full xl:w-2/3 mx-auto" loading="lazy"/>
      </div>
      <div class="about__item__${index}-content about__item-content w-full lg:w-1/2">
        <div class="space-y-5">
          <h3>${title}</h3>
          <p class="text-xl text-slate-300 font-[Lobster]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis ratione rem maxime veniam cum libero voluptas
            tempora aut saepe similique, eos corporis. Expedita culpa
            consequatur animi deleniti ullam adipisci iure sequi dolores
            modi aliquam laudantium, explicabo nobis quia id
            reprehenderit.?
          </p>
        </div>
      </div>
    </div>
  `
}
