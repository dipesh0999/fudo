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
  


document.querySelectorAll(".heart-btn").forEach(heartBtn => {
    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("active");
    });
  });
  




const menuBtn = document.getElementById("hamburger");
const menu = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");

overlay.onclick = () => {
    menuBtn.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

menuBtn.onclick = () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
};

