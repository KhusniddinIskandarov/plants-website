import { Navbar } from '../components/navigation/Navbar'

export function Header() {
  return `
    <header id="navbar" class="bg-green-950 fixed w-full top-0 left-0 z-50">
      ${Navbar()}
    </header>
  `
}
