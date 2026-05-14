import homeImage from '../../../assets/images/home.png'

import { Button } from '../../../components/ui/Button'
import { SocialNetworks } from '../../../components/ui/SocialNetworks'
import { DecorativeIcons } from '../components/DecorativeIcons'

export default function HeroSection() {
  return `
    <section id="hero" class="relative">
      <div class="container mx-auto px-8 sm:px-6 lg:px-8">
        <div class="w-64 h-64 bg-green-700 rounded-full blur-3xl z-10 opacity-20 lg:opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div class="w-64 h-64 bg-green-700 rounded-full blur-3xl z-10 opacity-20 lg:opacity-40 absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2"></div>

        <div class="flex flex-col items-center gap-5 lg:flex-row">
          <div class="home__data w-full space-y-5 lg:w-1/2">
            <h1>
              <span class="text-yellow-500">Plants</span> make a <br />
              positive <span class="text-yellow-500">impact</span> on <br />
              your environment
            </h1>

            <p class="text-slate-300 font-[Lobster]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio fugiat eveniet, reprehenderit veritatis aut explicabo
                voluptatum ullam itaque tenetur numquam!
            </p>

            <div class="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
              ${Button()}
            </div>
            <p class="text-xs font-[Lobster] text-slate-300">
              You will get 30-days free trial.
            </p>
            <div class=" text-slate-300 lg:pt-10">
              ${SocialNetworks()}
            </div>
          </div>
          <div class="w-full relative lg:w-1/2">
            <img src="${homeImage}" alt="home_image" class="home__image" loading="lazy"/>
            ${DecorativeIcons()}
          </div>
        </div>
      </div>
    </section>
  `
}
