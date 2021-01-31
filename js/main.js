const swiper = new Swiper('.swiper-container', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.sleder-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});