export function ScrollUp() {
  return `
    <a
        href="#"
        aria-label="Scroll to top"
        class="fixed right-4 -bottom-1/2 bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300"
        id="scroll-up"
    >
        <i class="ri-arrow-up-line"></i>
    </a>

    `
}
