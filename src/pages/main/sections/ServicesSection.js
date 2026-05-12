export default function ServicesSection() {
  return `
    <section class="bg-white text-green-900">
      <div class="container mx-auto w-full px-8  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        ${ServiceCard('ri-truck-line', 'Fast <br /> Delivery')}
        ${ServiceCard('ri-customer-service-line', 'Great <br /> Customer Service')}
        ${ServiceCard('ri-plant-line', 'Original <br /> Plants')}
        ${ServiceCard('ri-money-dollar-circle-line', 'Affordable <br /> Price')}

      </div>
    </section>
  `
}

function ServiceCard(icon, title) {
  return `
    <div class="service__card border border-green-900 p-6 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
      <div class="flex items-center gap-5">
        <i class="${icon} text-4xl md:text-5xl xl:text-6xl"></i>
        <p class="text-xl md:text-2xl font-bold">${title}</p>
      </div>
      <p class="font-[Lobster] text-xl mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        facere debitis omnis
      </p>
    </div>
  `
}
