import { SocialNetworks } from '../ui/SocialNetworks'

export function SocialIcons() {
  return `
    <div class="footer__icon container mx-auto p-8 mt-16 mb-10">
      <div class="border-b border-green-500 relative">
          <div
            class="absolute top-0 transform -translate-y-1/2 left-0 right-0 w-max mx-auto"
          >
            <div class="bg-yellow-100">
            ${SocialNetworks()}
          </div>
        </div>
      </div>
    </div>
  `
}
