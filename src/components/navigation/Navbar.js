import { LeafDecoration } from './LeafDecoration'

export function Navbar() {
  return `
    <nav class="container mx-auto px-8 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
      <div class="font-[Lobster] text-3xl">IndorePlants.</div>
      <div
        id="nav-menu"
        class="absolute overflow-y-auto h-screen py-60 top-0 -left-full min-x-[80px] w-full bg-green-950/80 flex items-center justify-center backdrop-blur-sm duration-300 overflow-hidden lg:static lg:h-auto lg:w-auto lg:min-h-fit lg:bg-transparent lg:backdrop-blur-none lg:py-0 lg:overflow-visible"
      >
        <ul class="flex flex-col items-center gap-x-8 gap-y-12 lg:flex-row">
          <li><a href="#hero" class="nav-link active">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#popular" class="nav-link">Popular</a></li>
          <li><a href="#review" class="nav-link">Review</a></li>
        </ul>
        ${LeafDecoration()}
      </div>
      <div class="text-4xl sm:text-3xl cursor-pointer z-50 lg:hidden">
        <i class="ri-menu-4-line" id="hamburger"></i>
      </div>
    </nav>
  `
}
