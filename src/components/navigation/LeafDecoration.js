import leaf1 from '../../assets/images/leaf-1.webp'
import leaf2 from '../../assets/images/leaf-2.webp'

export function LeafDecoration() {
  return `
    <div class="absolute bottom-0 -right-10 opacity-90">
      <img src="${leaf1}" alt="leaf_image" class="w-32 lg:hidden" loading="lazy"/>
    </div>
    <div class="absolute -top-5 -left-5 rotate-90 opacity-90">
      <img src="${leaf2}" alt="leaf_image" class="w-32 lg:hidden" loading="lazy"/>
    </div>
  `
}
