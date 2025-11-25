const pizzaSwiper = new Swiper(".pizzaSwiper", {
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 1000,
    autoplay: {
        delay: 3900,
        disableOnInteraction: false,
    },
    touchRatio: 0,
    allowTouchMove: false,
});

const contentSwiper = new Swiper(".contentSwiper", {
    loop: true,
    speed: 1000,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },

    autoplay: {
        delay: 3900,
        disableOnInteraction: false,
    },
    touchRatio: 0,
    allowTouchMove: false,
    thumbs: {
        swiper: pizzaSwiper,
    },
});

// const testSwiper = new Swiper(".testSwiper", {
//     speed: 1000,
//     loop: true,
//     effect: "cube",
//       grabCursor: true,
//       cubeEffect: {
//         shadow: false,
//         slideShadows: false,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//       },
//     navigation: {
//         nextEl: ".test-next",
//         prevEl: ".test-prev",
//     },
// });

const testSwiper = new Swiper(".testSwiper", {
    loop: true,
    speed: 1000,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [180, 0, 0],
      },
      next: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [-180, 0, 0],
      },
    },
    navigation: {
        nextEl: ".test-next",
        prevEl: ".test-prev",
    },
});
  

const heartBtn = document.querySelector(".heart-btn");

heartBtn.addEventListener("click", function () {
  this.classList.toggle("active");
});
