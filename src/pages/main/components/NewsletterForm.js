export function NewsletterForm() {
  return `
    <div
        class="newsletter__form container mx-auto text-white p-8 absolute top-0 right-0 left-0 -translate-y-1/2"
      >
        <div class="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
          <h3>
            <span class="text-yellow-500">Subscribe</span> to our newsletter
            Subscribe
          </h3>
          <div class="w-full mx-auto">
            <div class="flex flex-col sm:flex-row gap-2">
              <div class="relative flex-1">
                <!-- Input wrapper -->
                <input
                  type="email"
                  placeholder="Your Email Address"
                  class="w-full px-6 py-4 bg-white text-lg text-green-900 rounded-xl outline-none"
                />
                <!-- icon input-password -->
                <div class="absolute inline-block top-4 right-7">
                  <div class="relative bg-red-500 p-4 rounded-md">
                    <div class="absolute inset-0">
                      <div class="relative -top-3.5 -left-1">
                        <small class="absolute top-0 left-1 text-4xl">.</small>
                        <small class="absolute top-0 left-2.5 text-4xl"
                          >.</small
                        >
                        <small class="absolute top-0 left-4 text-4xl">.</small>
                        <small class="absolute top-5 left-7 text-md font-bold"
                          >|</small
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Button -->
              <button
                class="flex items-center justify-center gap-1 bg-green-950 px-6 py-4 rounded-xl cursor-pointer hover:opacity-80  transition duration-300"
              >
                <span>Subscribe</span>
                <i class="ri-send-plane-2-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  `
}
