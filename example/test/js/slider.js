new Swiper('.specialties-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
 },

 pagination: {
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true,
 },

 keyboard: {
  enabled: true,
  pageUpDown: true,
 },
 autoHeight: true,
 slidesPerView: 1,
 spaceBetween: 8,
 preloadImages: false,
 lazy: {
  loadOnTransitionStart: false,
  loadPrevNext: false,
 },
 breakpoints: {
  320: {
   slidesPerView: 1,
  },
  480: {
   slidesPerView: 1,
  },
  7866: {
   slidesPerView: 1,
  },
  850: {
   slidesPerView: 1,
  },
 },
 watchSlidesProgress: true,
 watchSlidesVisibility: true,

});
