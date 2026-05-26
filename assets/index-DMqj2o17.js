const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/swiper-kGnS-_BY.js","assets/utils-NKJxl3JP.js","assets/modules-DiUhUM93.js","assets/swiper-Bdbi0viN.css","assets/pagination-eeU9mEIO.css"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/plants-website/assets/leaf-1-CvqYGOSp.webp`,t=`/plants-website/assets/leaf-2-2RWSk8yH.webp`;function n(){return`
    <div class="absolute bottom-0 -right-10 opacity-90">
      <img
        src="${e}"
        alt="leaf_image"
        class="w-32 lg:hidden"
        width="128"
        height="128"
        loading="lazy"
      />
    </div>
    <div class="absolute -top-5 -left-5 rotate-90 opacity-90">
      <img
        src="${t}"
        alt="leaf_image"
        class="w-32 lg:hidden"
        width="128"
        height="128"
        loading="lazy"
      />
    </div>
  `}function r(){return`
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
        ${n()}
      </div>
      <button class="text-4xl sm:text-3xl cursor-pointer z-50 lg:hidden" aria-label="Open menu" id="hamburger-btn">
        <i class="ri-menu-4-line" id="hamburger"></i>
      </button>
    </nav>
  `}function i(){return`
    <header id="navbar" class="bg-green-950 fixed w-full top-0 left-0 z-50">
      ${r()}
    </header>
  `}function a(){return`
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
  `}function o(){return`
  <div class="flex items-center text-2xl gap-4">
    <a href="https://github.com/KhusniddinIskandarov" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <i class="ri-github-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
    </a>
    <a href="https://t.me/khusniddiniskandarov" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
      <i class="ri-telegram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
    </a>
    <a href="https://www.instagram.com/khusniddiniskandarov?igsh=eWR2ZjhrMXUydGs1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <i class="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
    </a>
    <a href="https://www.linkedin.com/in/khusniddiniskandarov" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <i class="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
    </a>
  </div>
  `}function s(){return`
    <div class="footer__icon container mx-auto p-8 mt-16 mb-10">
      <div class="border-b border-green-500 relative">
          <div
            class="absolute top-0 transform -translate-y-1/2 left-0 right-0 w-max mx-auto"
          >
            <div class="bg-yellow-100">
            ${o()}
          </div>
        </div>
      </div>
    </div>
  `}function c(){return`
    <div class="text-7xl text-center text-green-700 inline-block">
      <div>
        <i class="ri-leaf-fill"></i>
        <p class="font-[Lobster] text-xl sm:text-2xl">IndorePlants.</p>
      </div>
    </div>
  `}function l(){return`
    <div>
      <p class="mb-5 font-bold text-xl">Quick Link</p>
      <div class="flex flex-col gap-1">
        <a href="#">Plants</a>
        <a href="#">Flowers</a>
        <a href="#">Gerdening</a>
        <a href="#">Seeds</a>
        <a href="#">Shipping</a>
      </div>
    </div>
    <div>
      <p class="mb-5 font-bold text-xl">Popular Services</p>
      <div class="flex flex-col gap-1">
        <a href="#">Tree Planting</a>
        <a href="#">Grass Cutting</a>
        <a href="#">Weeds Control</a>
        <a href="#">Project</a>
      </div>
    </div>
  `}function u(){return`
    <div>
      <p class="mb-5 font-bold text-xl">Contact Us</p>
      <div class="flex flex-col gap-1">
        <a href="tel:+998935123616">+998 93 512 36 16 </a>
        <a href="mailto:kh.sh.iskandarov@gmail.com">kh.sh.iskandarov@gmail.com</a>
        <br />
        <p>
          Ovshar Village,
          Hazorasp District,
          Khorezm Region 220700,
          Uzbekistan.
        </p>
      </div>
    </div>
  `}function d(){return`
    <div class="copy__right container mx-auto p-8">
        <p class="text-center mt-10 opacity-50">
          Copyright &copy; 2026 LightCode. All rights reserved.
        </p>
    </div>
  `}var f=`/plants-website/assets/floral-1-FI2Xome1.png`;function p(){return`
    <div class="footer__floral absolute bottom-0 left-0 opacity-20 pointer-events-none z-10">
      <img
        src="${f}"
        alt="floral_image"
        class="w-full lg:w-1/2"
        width="1200"
        height="1200"
        loading="eager"
      />
    </div>
  `}function m(){return`
    <a
        href="#"
        aria-label="Scroll to top"
        class="fixed right-4 -bottom-1/2 bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300"
        id="scroll-up"
    >
        <i class="ri-arrow-up-line"></i>
    </a>

    `}function h(){return`
    <footer class="bg-yellow-100 text-green-950 px-4 pt-20 pb-10 md:pt-28 relative">
      ${a()}
      ${s()}
      <div class="footer__content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
        ${c()}
        ${l()}
        ${u()}
      </div>
      ${d()}
      ${p()}
    </footer>
    ${m()}
  `}var g=`/plants-website/assets/home-480-CDkmC0TR.webp`,_=`/plants-website/assets/home-720-DINg4o8a.webp`,v=`/plants-website/assets/home-1080-DCM4fwcz.webp`;function y(){return`
    <button class="btn cursor-pointer">
      <span>Shop Now</span>
      <i class="ri-leaf-line"></i>
    </button>
    <button class="btn btn_outline cursor-pointer">
      <span>Know More</span>
      <i class="ri-leaf-line"></i>
    </button>
  `}function b(){return`
    <!-- leaf -->
    <div class="absolute -top-10 right-0 opacity-30 xl:top-5 animate-movingY">
      <i class="ri-leaf-line text-6xl text-yellow-500"></i>
    </div>
    <!-- flower -->
    <div class="absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating">
      <i class="ri-flower-line text-6xl text-yellow-500"></i>
    </div>
    <!-- plant -->
    <div class="hidden absolute -top-8 -left-5 opacity-30 lg:block animate-scalingUp">
      <i class="ri-plant-line text-6xl text-yellow-500"></i>
    </div>
  `}function x(){return`
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
              ${y()}
            </div>
            <p class="text-xs font-[Lobster] text-slate-300">
              You will get 30-days free trial.
            </p>
            <div class=" text-slate-300 lg:pt-10">
              ${o()}
            </div>
          </div>
          <div class="w-full relative lg:w-1/2">
            <img
              src="${_}"
              srcset="
                ${g} 480w,
                ${_} 720w,
                ${v} 1080w
              "
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              alt="home_image"
              class="home__image"
              width="720"
              height="720"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            ${b()}
          </div>
        </div>
      </div>
    </section>
  `}function S(){return`
    <section class="bg-white text-green-900">
      <div class="container mx-auto w-full px-8  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        ${C(`ri-truck-line`,`Fast <br /> Delivery`)}
        ${C(`ri-customer-service-line`,`Great <br /> Customer Service`)}
        ${C(`ri-plant-line`,`Original <br /> Plants`)}
        ${C(`ri-money-dollar-circle-line`,`Affordable <br /> Price`)}

      </div>
    </section>
  `}function C(e,t){return`
    <div class="service__card border border-green-900 p-6 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
      <div class="flex items-center gap-5">
        <i class="${e} text-4xl md:text-5xl xl:text-6xl"></i>
        <p class="text-xl md:text-2xl font-bold">${t}</p>
      </div>
      <p class="font-[Lobster] text-xl mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
        facere debitis omnis
      </p>
    </div>
  `}var w=`/plants-website/assets/plant-1-COYGNebU.webp`,T=`/plants-website/assets/plant-2-SaH9Ljkj.webp`,E=`/plants-website/assets/leaf-3-DGNyUpSz.webp`;function D(){return`
    <section id="about" class="relative overflow-hidden">
      <div class="about__leaf absolute -top-8 -right-12 opacity-50">
        <img
          src="${E}"
          alt="leaf_image"
          class="w-40 md:w-52 xl:w-64"
          width="256"
          height="256"
          loading="lazy"
        />
      </div>
      <div class="about__top flex flex-col items-center gap-3 text-center mb-10 md:mb-15">
        <h2 class="title">About Us</h2>
        <p class="text-max-w-2xl">Follow instruction for more</p>
      </div>
      <div class="container mx-auto space-y-10 xl:space-y-0 p-8">
        ${O(w,`Organic garden plant`,`Make your <span class='text-yellow-500'> organic </span> <br /> garden`,!1,1)}
        ${O(T,`Growing plant`,`Come with us <br /> <span class='text-yellow-500'> grow up </span> your plant`,!0,2)}
      </div>
    </section>
  `}function O(e,t,n,r,i){return`
    <div class="flex flex-col items-center gap-5 ${r?`lg:flex-row-reverse`:`lg:flex-row`}">
      <div class="about__item__${i}-img about__item-img w-full lg:w-1/2">
        <img
          src="${e}"
          alt="${t}"
          class="w-full sm:2/3 lg:w-full xl:w-2/3 mx-auto"
          width="600"
          height="600"
          loading="lazy"
        />
      </div>
      <div class="about__item__${i}-content about__item-content w-full lg:w-1/2">
        <div class="space-y-5">
          <h3>${n}</h3>
          <p class="text-xl text-slate-300 font-[Lobster]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis ratione rem maxime veniam cum libero voluptas
            tempora aut saepe similique, eos corporis. Expedita culpa
            consequatur animi deleniti ullam adipisci iure sequi dolores
            modi aliquam laudantium, explicabo nobis quia id
            reprehenderit.?
          </p>
        </div>
      </div>
    </div>
  `}var k=`/plants-website/assets/cart-1-Df7KiykD.webp`,A=`/plants-website/assets/cart-2-C5DEc-9j.webp`,j=`/plants-website/assets/cart-3-CIiCfLw1.webp`,M=`/plants-website/assets/cart-4-d1aagPBO.webp`;function N(){return`
    <section id="popular" class="bg-green-900">
      <div class="popular__top flex flex-col items-center gap-3 text-center mb-40">
        <h2 class="title">Your Choice Plant</h2>
        <p class="text-lg max-w-2xl">Follow instruction for more</p>
      </div>
      <div class="container mx-auto w-full px-8 grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          ${P(k,`Nephrolepis exaltata`,`Boston Fern`)}
          ${P(A,`Ficus elastica`,`Rubber Plant`)}
          ${P(j,`Spathiphyllum wallisii`,`Peace Lily`)}
          ${P(M,`Adenium obesum`,`Desert Rose`)}
      </div>
    </section>
  `}function P(e,t,n){return`
    <div class="popular__card bg-green-950 p-9 pt-28 rounded-md relative">
      <img
        src="${e}"
        alt="${n}"
        class="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
        width="224"
        height="224"
        loading="lazy"
      />
      <p class="italic text-2xl mb-2">${t}</p>
      <h3>${n}</h3>
      <div class="text-yellow-500 py-3">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-fill"></i>
        <i class="ri-star-line text-gray-400"></i>
        <i class="ri-star-line text-gray-400"></i>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-2xl">$5</p>
        <button class="bg-yellow-500 px-2 py-1 rounded-sm text-2xl" aria-label="Add to cart">
          <i class="ri-shopping-cart-fill"></i>
        </button>
      </div>
    </div>
  `}var ee=`data:image/webp;base64,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`,F=`/plants-website/assets/review-2-BtM1oC3C.webp`,I=`data:image/webp;base64,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`,L=`data:image/webp;base64,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`,R=`/plants-website/assets/leaf-4-BUXIHHb1.webp`;function z(){return`
    <section id="review" class="relative mb-20 md:mb-28 overflow-hidden">

      <!-- Leaf decoration image -->
      <div class="review__leaf absolute -top-8 -left-12 opacity-50">
        <img
          src="${R}"
          alt="leaf_image"
          class="w-40 md:w-56 xl:w-64"
          width="256"
          height="256"
          loading="lazy"
        />
      </div>

      <!-- Section header -->
      <div class="review__top flex flex-col items-center gap-3 text-center mb-10 md:mb-15">
        <h2 class="title">Customer Review</h2>
        <p class="text-max-w-2xl">Follow instruction for more</p>
      </div>

      <!-- Review cards swiper -->
      <div class="review__swiper container mx-auto px-8">
        <div class="swiper py-12">
          <ul class="swiper-wrapper">
            ${B(ee)}
            ${B(F)}
            ${B(I)}
            ${B(L)}
          </ul>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  `}function B(e){return`
    <li class="swiper-slide">
      <div class="flex flex-col gap-5 bg-green-900 rounded-md p-6">
        <p class="font-[Lobster]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique culpa ut amet voluptas asperiores alias sed consequatur.
        </p>
        <div class="flex items-center">
          <!-- Avatar image with lazy load -->
          <img
            src="${e}"
            alt="review_image"
            class="w-14 h-14 rounded-full"
            width="56"
            height="56"
            loading="lazy"
          />
          <div class="ml-2.5">
            <p class="text-yellow-500 uppercase text-xl">John Doe</p>
            <p class="text-lg">Designer</p>
          </div>
          <i class="ri-double-quotes-r text-4xl ml-auto"></i>
        </div>
      </div>
    </li>
  `}function V(){return`
    <main>
      ${x()}
      ${S()}
      ${D()}
      ${N()}
      ${z()}
    </main>
  `}function H(){return`
  ${i()}
  ${V()}
  ${h()}
  `}function U(){let e=document.getElementById(`hamburger`),t=document.getElementById(`nav-menu`),n=document.querySelectorAll(`.nav-link`);if(!e||!t){console.warn(`NavbarController: element topilmadi`);return}e.addEventListener(`click`,()=>{t.classList.toggle(`left-0`),e.classList.toggle(`ri-close-large-line`)}),n.forEach(n=>{n.addEventListener(`click`,()=>{t.classList.toggle(`left-0`),e.classList.toggle(`ri-close-large-line`)})})}function W(){let e=document.getElementById(`navbar`);window.addEventListener(`scroll`,()=>{window.scrollY>=50?e.classList.add(`border-b`,`border-yellow-500`):e.classList.remove(`border-b`,`border-yellow-500`)})}function G(){let e=document.querySelectorAll(`section`),t=document.querySelectorAll(`.nav-link`);window.addEventListener(`scroll`,()=>{let n=`home`;e.forEach(e=>{let t=e.offsetTop;window.scrollY>=t-60&&(n=e.getAttribute(`id`))}),t.forEach(e=>{e.classList.remove(`active`),e.href.includes(n)&&e.classList.add(`active`)})})}function K(){let e=document.getElementById(`scroll-up`);if(!e){console.warn(`ScrollUp: element topilmadi`);return}window.addEventListener(`scroll`,()=>{window.scrollY>=250?(e.classList.remove(`-bottom-1/2`),e.classList.add(`bottom-4`)):(e.classList.add(`-bottom-1/2`),e.classList.remove(`bottom-4`))})}var q=`modulepreload`,J=function(e){return`/plants-website/`+e},Y={},X=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=J(t,n),t in Y)return;Y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:q,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};async function Z(){(e=>{`requestIdleCallback`in window?requestIdleCallback(e,{timeout:1e3}):setTimeout(e,1)})(async()=>{let e=(await X(async()=>{let{default:e}=await import(`./scrollreveal.es-D6B-nGap.js`);return{default:e}},[])).default,t=e({origin:`top`,distance:`60px`,duration:1200,delay:300,reset:!1,viewFactor:.2,easing:`cubic-bezier(0.4, 0, 0.2, 1)`});t.reveal(`
      .home__data,
      .about__top,
      .popular__top,
      .review__top,
      .review__swiper,
      .newsletter__form
    `),t.reveal(`.home__image`,{distance:`12px`,duration:500}),t.reveal(`.service__card, .popular__card`,{interval:80}),t.reveal(`.about__leaf`,{origin:`right`,delay:250}),t.reveal(`.review__leaf, .footer__floral`,{origin:`left`,delay:250,viewFactor:0}),t.reveal(`
      .about__item__1-content,
      .about__item__2-img
    `,{origin:`right`,distance:`18px`}),t.reveal(`
      .about__item__2-content,
      .about__item__1-img
    `,{origin:`left`,distance:`18px`}),t.reveal(`.footer__icon, .footer__content, .copy__right`,{origin:`top`,distance:`60px`,duration:1200,delay:300,viewFactor:0})})}async function Q(){if(!document.querySelector(`.swiper`))return;let{default:e}=await X(async()=>{let{default:e}=await import(`./swiper-kGnS-_BY.js`);return{default:e}},__vite__mapDeps([0,1])),{Pagination:t,Autoplay:n}=await X(async()=>{let{Pagination:e,Autoplay:t}=await import(`./modules-DiUhUM93.js`);return{Pagination:e,Autoplay:t}},__vite__mapDeps([2,1]));await X(()=>Promise.resolve({}),__vite__mapDeps([3])),await X(()=>Promise.resolve({}),__vite__mapDeps([4])),new e(`.swiper`,{modules:[t,n],speed:350,spaceBetween:20,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:`.swiper-pagination`,clickable:!0},grabCursor:!0,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}})}function $(){let e=document.querySelector(`#app`);if(!e){console.error(`#app element not found`);return}e.innerHTML=H(),U(),W(),G(),K()}window.addEventListener(`load`,()=>{Z(),Q()}),window.addEventListener(`DOMContentLoaded`,$);