const topNowSwiper = new Swiper(".top-now__slider", {
  loop: true,
  // slidesPerGroup: 1,
  spaceBetween: 37,

  navigation: {
    nextEl: ".top-now__slider-btn-next, .top-now__slider-btn-next__mob",
  },

  breakpoints: {
    1440: {
      slidesPerView: "auto",
      spaceBetween: 37,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
      loopedSlidesLimit: false,
      watchSlidesProgress: true,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 25,
    },
    320: {
      slidesPerView: "auto",
      spaceBetween: 23,
    },
  },
});

const exploreSwiper = new Swiper(".explore__slider", {
  loop: true,
  slidesPerGroup: 1,
  spaceBetween: 37,

  navigation: {
    nextEl: ".explore__slider-btn-next, .explore__slider-btn-next__mob",
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 37,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
      loopedSlidesLimit: false,
      watchSlidesProgress: true,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 25,
    },
    320: {
      slidesPerView: "auto",
      spaceBetween: 23,
    },
  },
});
