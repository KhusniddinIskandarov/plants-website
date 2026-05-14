import { NewsletterForm } from '../pages/main/components/NewsletterForm.js'
import { SocialIcons } from '../components/footer/SocialIcons.js'
import { FooterLogo } from '../components/footer/FooterLogo.js'
import { FooterLinks } from '../components/footer/FooterLinks.js'
import { ContactInfo } from '../components/footer/ContactInfo.js'
import { Copyright } from '../components/footer/Copyright.js'
import { FloralDecoration } from '../components/footer/FloralDecoration.js'

import { ScrollUp } from '../components/ui/ScrollUp.js'

export function Footer() {
  return `
    <footer class="bg-yellow-100 text-green-950 px-4 pt-20 pb-10 md:pt-28 relative">
      ${NewsletterForm()}
      ${SocialIcons()}
      <div class="footer__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
        ${FooterLogo()}
        ${FooterLinks()}
        ${ContactInfo()}
      </div>
      ${Copyright()}
      ${FloralDecoration()}
    </footer>
    ${ScrollUp()}
  `
}
