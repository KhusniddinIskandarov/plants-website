import floral1 from '../../assets/images/floral-1.png'

export function FloralDecoration() {
  return `
    <div class="footer__floral absolute bottom-0 left-0 opacity-20 pointer-events-none z-10">
      <img
        src="${floral1}"
        alt="floral_image"
        class="w-full lg:w-1/2"
        width="1200"
        height="1200"
        loading="lazy"
      />
    </div>
  `
}
